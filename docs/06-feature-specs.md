# Tradely — Core Feature Specifications

## 1. Authentication & Roles

**Data:** `auth.users` (Supabase) + `public.profiles { id (FK auth.users), role: 'client' | 'vendor', first_name, last_name, phone, avatar_url, created_at }`. Role is set once at signup and mirrored to JWT `app_metadata.role` via a trigger, so RLS policies and middleware can read it without a DB round-trip.

**Flows:**
- Signup forks by role on `/signup`. Client onboarding: name + email/OAuth → verify email → dashboard. Vendor onboarding: account → business details (name, ABN/NZBN) → licence + insurance upload (Storage, private bucket) → services + service-area radius → "pending verification" state until an admin approves (`vendors.verification_status: pending | verified | rejected`).
- Sessions: Supabase JWT (1h access / rotating refresh) in httpOnly cookies via `@supabase/ssr`; middleware refreshes on navigation.
- Protected routes: `/dashboard/**` (client), `/vendor/**` (vendor) — middleware redirects, RLS enforces.
- Email verification required before posting a job or quoting. Password reset via Supabase magic-link flow with branded email templates (Resend SMTP).

**Acceptance:** wrong-role access redirects without flash of content; unverified vendors can browse but not quote; all auth emails arrive < 60s.

## 2. Job Posting Engine

**Data:** `jobs { id, client_id, category_id, title, description, status: draft|open|in_progress|completed|cancelled, suburb, postcode, lat, lng, timing: urgent|this_week|flexible, budget_min?, budget_max?, created_at }` + `job_photos { id, job_id, storage_path, position }`.

**Form:** 6-step wizard (category → details → photos → location/timing → budget → contact), one route per step (`/post-a-job/[step]`), state in a zustand store persisted to `localStorage` and synced to a `draft` row once authenticated. Zod validation per step; "one question per screen" on mobile.
- **Photos:** client-side compress (max 1920px, ~80% quality) → Supabase Storage `job-photos` bucket; up to 8; reorderable.
- **Location:** Google Places Autocomplete restricted to AU/NZ, storing suburb/postcode/lat/lng (exact street address never required at posting).
- **Submission:** server action validates whole payload, flips draft → `open`, triggers vendor-matching notification fan-out, returns confirmation screen.

**Acceptance:** refresh mid-wizard loses nothing; submit p95 < 1.5s; matched vendors notified < 1 min.

## 3. Bidding / Quoting System

**Data:** `quotes { id, job_id, vendor_id, amount_cents, timeline_label, message, status: pending|accepted|declined|withdrawn, created_at }` — unique `(job_id, vendor_id)`. `conversations { id, job_id, client_id, vendor_id }` + `messages { id, conversation_id, sender_id, body, attachment_path?, read_at, created_at }`.

**Flows:**
- Vendor quotes from lead detail: price (AUD/NZD, GST-inclusive toggle), timeline chip, message (min 30 chars). Quoting consumes a lead credit or requires active membership (checked server-side).
- Client compares quotes side-by-side (price, timeline, rating, verified status, response time); accept triggers confirm dialog → quote `accepted`, siblings auto-`declined` (with polite notification), job → `in_progress`, contact details revealed both ways.
- Messaging: one conversation per (job, vendor) pair, available from first quote. Supabase Realtime channel per conversation; optimistic send; unread counts via `read_at`.
- **Notifications:** `notifications { id, user_id, type, payload jsonb, read_at }` written by DB triggers (new quote, new message, quote accepted/declined, job matched). Delivery: in-app (Realtime) + email digest rules (instant for quote accepted; batched 15-min for messages) + optional SMS for new quotes.

**RLS highlights:** vendors see only `open` jobs and their own quotes; clients see only quotes on their jobs; messages visible only to the two participants.

## 4. Vendor Profiles & Reviews

**Data:** `vendors { id (FK profiles), business_name, abn, bio, logo_path, licence_number, licence_path, insurance_path, verification_status, services text[], service_radius_km, base_suburb, lat, lng }` + `vendor_gallery { id, vendor_id, storage_path, caption }` + `reviews { id, job_id (unique), vendor_id, client_id, rating 1–5, comment, vendor_reply?, created_at }`.

**Profile page (public, SEO-indexed):** logo/photo, business name + verified badge, rating summary with distribution, services chips, service area map, gallery, licence class display ("Licensed Electrician — NSW 12345C"), reviews list with vendor replies.

**Verified badge:** granted only when ABN/NZBN validated + licence document approved by admin + identity confirmed. Badge revoked if licence expires (expiry date tracked, reminder emails at 30/7 days).

**Review flow:** when a job is marked complete (by either side, confirmed by client), client gets an email + dashboard prompt → 1–5 stars + comment (min 20 chars). One review per job, immutable after 48h edit window; vendor may post one public reply. Aggregate rating is a materialised view refreshed on write; surfaces on profile, quote cards, and search.

**Abuse controls:** reviews only from completed paid jobs; report/flag pipeline; profanity filter on submit.

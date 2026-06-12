# Tradely — Frontend Implementation Plan

## Recommended stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + React 19 + TypeScript** | Server components for SEO-critical marketing pages, server actions for forms, streaming dashboards |
| Styling | **Tailwind CSS v4 + shadcn/ui** | Token-driven design system, accessible primitives, fast iteration |
| Backend | **Supabase** (Postgres, Auth, Storage, Realtime) | One platform for auth + DB + files + live messaging; Row Level Security enforces role access at the data layer |
| Auth | Supabase Auth (email + Google/Apple OAuth), JWT in httpOnly cookies via `@supabase/ssr` | Role claim (`client` / `vendor`) stored in `profiles.role` and mirrored into JWT app_metadata |
| Maps | Google Places Autocomplete (AU/NZ region-biased) + static maps on job cards | Best AU/NZ suburb coverage |
| Email/SMS | Resend (transactional email) + Twilio (SMS quote alerts) | |
| Payments | Stripe (vendor memberships + lead credits) | |
| Hosting | Vercel (Sydney region `syd1`) | Edge caching for marketing pages, low latency for AU/NZ |

## Folder structure

```
src/
├── app/
│   ├── (marketing)/                # public, statically rendered, SEO-optimised
│   │   ├── page.tsx                # homepage
│   │   ├── how-it-works/ pricing/ for-tradies/ about/ contact/ faq/
│   │   └── categories/[slug]/      # programmatic SEO pages
│   ├── (auth)/
│   │   ├── login/ signup/ verify-email/ reset-password/
│   ├── post-a-job/                 # wizard (public start, auth at final step)
│   │   └── [step]/page.tsx
│   ├── browse-jobs/                # lead feed (public preview)
│   ├── (client)/dashboard/         # role-protected: client
│   │   ├── jobs/[id]/ messages/ settings/
│   ├── (vendor)/vendor/            # role-protected: vendor
│   │   ├── leads/ quotes/ jobs/ messages/ profile/ billing/
│   ├── api/webhooks/stripe/route.ts
│   └── layout.tsx
├── components/
│   ├── ui/                         # shadcn primitives
│   ├── marketing/                  # Hero, TrustStrip, HowItWorks, Testimonials…
│   ├── jobs/                       # JobCard, JobWizard, PhotoUploader, LocationInput
│   ├── quotes/                     # QuoteCard, QuoteForm, CompareTable
│   ├── messaging/                  # ChatPanel, MessageBubble, ThreadList
│   └── dashboard/                  # DashboardNav, StatCard, ProfileStrength
├── lib/
│   ├── supabase/{client,server,middleware}.ts
│   ├── validations/                # zod schemas (job, quote, profile…)
│   ├── actions/                    # server actions (createJob, submitQuote…)
│   └── utils.ts
├── hooks/                          # useRealtimeMessages, useUploadPhotos…
├── types/                          # database.types.ts (supabase gen), domain types
└── middleware.ts                   # session refresh + role-based route guarding
```

## Route protection model

`middleware.ts` refreshes the Supabase session and enforces: `/dashboard/**` requires `role=client`, `/vendor/**` requires `role=vendor`; wrong role redirects to its own dashboard; unauthenticated users redirect to `/login?next=…`. RLS policies are the real security boundary — middleware is UX only.

## Performance & SEO

- Marketing routes: static + ISR; dashboards: dynamic with streaming + `Suspense` skeletons.
- `next/image` everywhere (AVIF/WebP), fonts via `next/font` (zero layout shift), Lucide icons tree-shaken.
- Metadata API per route + JSON-LD (`LocalBusiness`, `FAQPage`, `AggregateRating`); programmatic category×city pages for long-tail SEO; sitemap + robots generated at build.
- Targets: LCP < 2.0s on 4G, CLS < 0.05, homepage JS < 120KB gzipped.

## Build sequence (MVP ≈ 6 sprints)

1. Design system + marketing pages (home, how-it-works, for-tradies, pricing)
2. Auth + role onboarding flows
3. Job posting wizard + photo upload + location
4. Lead feed + quote submission
5. Quote comparison + accept/decline + messaging (Realtime)
6. Reviews, notifications, Stripe membership, polish/QA
```

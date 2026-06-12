# Tradely — Product Strategy & UX Structure

A premium trades marketplace for Australia & New Zealand. Homeowners post jobs; licensed tradespeople browse leads, quote, and win work.

---

## 1. Core user journeys

### Client / Property Owner journey

```
Discover → Post Job → Receive Quotes → Compare & Chat → Hire → Review
```

| Stage | What happens | Key screens | Conversion goal |
|---|---|---|---|
| **Discover** | Lands via SEO/ads/referral. Needs instant clarity: "I can get my job done here, safely." | Homepage, category landing pages | Click **Post a Job** within 10 seconds |
| **Post Job** | Multi-step form: category → details → photos → location → contact. Low friction, no account needed until the final step. | Post a Job wizard | Complete submission (target >65% completion) |
| **Receive Quotes** | Email/SMS/push when trades quote. Quotes show price, timeline, profile strength. | Client Dashboard → Job detail | Return to platform within 24h |
| **Compare & Chat** | Side-by-side quote comparison; in-app messaging to clarify scope. | Quote comparison, chat panel | Accept a quote |
| **Hire & Review** | Accept quote, job moves to "In progress", then completion + review prompt. | Job detail, review modal | Leave a review (fuels trust flywheel) |

### Tradesperson / Vendor journey

```
Discover → Sign Up & Verify → Browse Leads → Quote → Win Job → Get Reviewed → Repeat
```

| Stage | What happens | Key screens | Conversion goal |
|---|---|---|---|
| **Discover** | Lands on "Grow your business" page. Cares about lead quality, cost, and effort. | Tradesperson landing, Pricing | Start signup |
| **Sign Up & Verify** | Business profile, licence upload, ABN/NZBN check, service areas + categories. | Vendor onboarding wizard | Reach "verified" status (activation metric) |
| **Browse Leads** | Filtered job feed matched to trade + radius. Lead cards show budget signal, photos, posted time. | Browse Jobs | Submit first quote within 48h of verification |
| **Quote** | Price + timeline + message. Credits/membership gate per pricing model. | Quote form | Quote-to-message rate |
| **Win & Review** | Accepted quote → messaging → mark complete → request review. | Vendor Dashboard | Repeat quoting (retention) |

**Critical activation moments:**
- Client: first quote received (deliver within hours — seed with notifications to matched trades).
- Vendor: first job won. If a trade quotes 10× with no wins, they churn — surface "improve your quote" tips and profile-completeness nudges.

---

## 2. Sitemap & navigation

```
/
├── /post-a-job                  (multi-step wizard, public entry)
├── /browse-jobs                 (lead feed — public preview, gated details)
├── /how-it-works
├── /categories
│   └── /categories/[slug]       (SEO landing: /categories/plumbing-sydney)
├── /for-tradies                 (vendor acquisition landing)
│   └── /pricing                 (membership tiers)
├── /signup                      (role fork: Client | Tradesperson)
├── /login
├── /about
├── /contact
├── /faq
├── /trust-and-safety
├── /legal/{terms,privacy}
│
├── /dashboard                   (Client — role-protected)
│   ├── /dashboard/jobs
│   ├── /dashboard/jobs/[id]     (quotes, comparison, chat)
│   ├── /dashboard/messages
│   └── /dashboard/settings
│
└── /vendor                      (Vendor — role-protected)
    ├── /vendor/leads
    ├── /vendor/quotes
    ├── /vendor/jobs
    ├── /vendor/messages
    ├── /vendor/profile
    └── /vendor/billing
```

### Navigation structure

**Public header (desktop):** Logo · Browse Jobs · How it works · For Tradies · Pricing — right side: Log in · **Post a Job** (primary button, always visible, sticky).

**Public header (mobile):** Logo · **Post a Job** button · hamburger. The primary CTA never collapses into the menu.

**Logged-in:** header swaps to role-aware nav (Dashboard, Messages with unread badge, avatar menu). Vendors get a persistent sidebar on desktop, bottom tab bar on mobile (Leads · Quotes · Messages · Profile).

**Footer:** four columns — For Homeowners, For Tradespeople, Popular Categories (SEO links), Company — plus trust badges, ABN, social, app-store badges.

---

## 3. Homepage conversion strategy

Order of sections is deliberate — each answers the visitor's next unspoken question:

1. **Hero** — "Can I get my job done here?" Headline focused on outcome + speed, with an embedded job-start form (category + postcode). Starting the form *on the homepage* is the single biggest conversion lever: it converts a passive visitor into a wizard participant before they hit a signup wall.
2. **Trust strip** — "Is this legit?" Logos/stats immediately under the hero: jobs completed, verified trades, average rating, "Licence-checked" badge.
3. **Category chips** — "Do they do *my* job?" 8–12 popular categories, each a deep link that pre-fills the wizard. Also an SEO internal-linking block.
4. **How it works (3 steps)** — "How much effort is this?" Post → Compare quotes → Hire. Reduce perceived effort: "Takes about 2 minutes."
5. **Featured trades** — "Who will actually show up?" Real profiles with photos, ratings, verified badges, review counts. Humanises the marketplace.
6. **Testimonials** — "Did it work for people like me?" Mix of homeowner and tradesperson quotes with names, suburbs, job types. Specificity sells ("Got 4 quotes in 3 hours").
7. **Vendor cross-sell band** — captures the ~30% of traffic that is tradespeople: "Are you a tradie? Get quality local leads."
8. **Final CTA** — repeat the job form or a single large "Post a Job — it's free" button. Never end a page without a CTA.

**CTA rules:** one primary action per viewport ("Post a Job"); secondary actions are ghost/outline. CTA copy is verb + benefit ("Get free quotes"), never "Submit". Microcopy under every primary CTA kills anxiety: *"Free to post · No obligation to hire."*

**Trust signals throughout:** verified-licence badges, review stars with counts, money-safe messaging, real photography (no generic stock handshakes), AU/NZ localisation (suburbs, ABN, licence classes).

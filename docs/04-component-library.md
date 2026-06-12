# Tradely — Component Library (Figma-style breakdown)

Each component lists anatomy + responsive behaviour (desktop ≥1024 / tablet 640–1023 / mobile <640).

## 1. Header / Navigation `SiteHeader`
**Anatomy:** logo · nav links · auth actions · primary CTA. Sticky, white, bottom border appears on scroll.
- **Desktop:** full inline nav; CTA right-aligned.
- **Tablet:** secondary links collapse into "More"; CTA stays.
- **Mobile:** logo + `Post a Job` + hamburger → full-height sheet menu. CTA never hides.
Logged-in: avatar menu + messages icon with unread badge; vendor variant swaps links.

## 2. Hero job form `HeroJobForm`
**Anatomy:** category combobox + postcode/suburb input + submit button, in a white elevated bar over the hero.
- **Desktop:** single horizontal pill bar (Airbnb-search style).
- **Tablet/Mobile:** stacks vertically into a card; button full-width. Submitting deep-links into the wizard with fields pre-filled.

## 3. Job card `JobCard`
**Anatomy:** category icon chip · title · meta row (suburb · distance · posted time) · 2-line description clamp · badges (budget, quote count, Urgent) · footer CTA.
- **Desktop:** 2–3 column grid, hover lift, whole card clickable.
- **Mobile:** full-width list, 16px padding, CTA becomes chevron affordance. Skeleton variant for loading.

## 4. Quote/bid card `QuoteCard`
**Anatomy:** vendor avatar + name + verified badge · rating row · price (large, tabular) · timeline chip · message excerpt · actions (`Accept` primary, `Message` secondary, `Decline` ghost).
- **Desktop:** rows in a comparison layout; optional side-by-side compare table for 2–3 selected quotes.
- **Mobile:** stacked cards; accept/decline as a sticky bottom action bar on the quote detail. Accept always triggers a confirm dialog.

## 5. Messaging panel `ChatPanel`
**Anatomy:** thread list (avatar, name, job title, last message, unread dot) + conversation pane (job-context header, bubbles, day separators, composer with photo attach).
- **Desktop:** two-pane split (320px list + flexible conversation).
- **Tablet/Mobile:** single pane with push navigation (list → conversation, back arrow). Composer sticks above keyboard; optimistic send with delivered/read ticks.

## 6. Dashboard sidebar `DashboardNav`
**Anatomy:** nav items (icon + label + optional badge), profile-strength meter (vendor), upgrade card.
- **Desktop:** fixed 256px left rail.
- **Tablet:** collapses to 64px icon rail with tooltips.
- **Mobile:** bottom tab bar (4–5 items max: Leads · Quotes · Messages · Profile); overflow into "More" sheet.

## 7. Review/testimonial card `ReviewCard`
**Anatomy:** stars · quote text · reviewer name, suburb, job type · optional vendor reply.
- **Homepage:** 3-up grid desktop → snap-scroll carousel mobile.
- **Profile:** vertical list with "Read more" clamp and rating-distribution summary above.

## 8. Footer & trust badges `SiteFooter`, `TrustStrip`
**Footer:** dark band; 4 link columns + brand column (logo, ABN, social, app badges) + legal row.
- **Desktop:** 5-column grid. **Mobile:** accordion sections or stacked columns; legal row wraps.
**TrustStrip:** stat items (number + label) with separator dots; 4-up desktop → 2×2 grid mobile.

## Shared primitives (shadcn/ui base)
`Button` `Badge` `Card` `Input` `Textarea` `Select/Combobox` `Dialog` `Sheet` `Tabs` `Accordion` `Avatar` `Skeleton` `Toast` `Progress` — customised with the token set in `docs/03-design-system.md`.

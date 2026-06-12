# Tradely — UI/UX Design System

Aesthetic direction: the structural clarity of **Stripe**, the warmth and photography of **Airbnb**, the task-focused energy of **Airtasker/Hipages**. Clean white surfaces, one confident brand colour, generous whitespace, real photos of real trades.

---

## 1. Colour palette

| Role | Token | Hex | Usage |
|---|---|---|---|
| Primary | `brand-600` | `#1D4FD8` | CTAs, links, active states (deep trustworthy blue) |
| Primary hover | `brand-700` | `#173FB0` | Hover/pressed |
| Primary tint | `brand-50` | `#EEF3FE` | Selected chips, info surfaces |
| Accent | `accent-500` | `#F59E0B` | Ratings stars, "Urgent" tags, highlights — use sparingly |
| Success | `green-600` | `#16A34A` | Verified badges, accepted quotes |
| Danger | `red-600` | `#DC2626` | Errors, declines |
| Ink | `slate-900` | `#0F172A` | Headings |
| Body | `slate-600` | `#475569` | Body text |
| Muted | `slate-400` | `#94A3B8` | Placeholders, meta |
| Border | `slate-200` | `#E2E8F0` | Dividers, card borders |
| Surface | `white` / `slate-50` | `#FFFFFF` / `#F8FAFC` | Cards / page background alternation |
| Dark band | `slate-950` | `#020617` | Footer, final CTA band |

Rule of thumb: pages are 90% neutral; blue marks *the one action we want you to take*; amber only for ratings and urgency.

## 2. Typography

- **Headings: "Bricolage Grotesque"** (Google Fonts) — characterful grotesque, premium without being cold. Fallback: Inter.
- **Body & UI: "Inter"** — the workhorse. Tabular numerals for prices.

Scale (mobile → desktop): Display 36/44 → 60/64 · H2 28 → 40 · H3 20 → 24 · Body 16/26 · Small 14 · Caption 12. Headings tracking `-0.02em`, weight 600–700. Body minimum 16px always.

## 3. Spacing, radius, elevation

- **Spacing:** 4px base scale (4·8·12·16·24·32·48·64·96). Section padding `py-16 md:py-24`. Content max-width `1152px` (`max-w-6xl`), gutters `px-4 md:px-6`.
- **Radius:** buttons/inputs `rounded-xl` (12px), cards `rounded-2xl` (16px), chips/badges `rounded-full`.
- **Elevation:** default cards are *border-defined* (`border-slate-200`), not shadowed — Stripe-like flatness. Hover lifts: `shadow-lg shadow-slate-900/5` + 1px translate. Modals/popovers `shadow-xl`.

## 4. Buttons

| Variant | Style | Use |
|---|---|---|
| Primary | `bg-brand-600 text-white rounded-xl h-12 px-6 font-semibold` hover `brand-700` | One per viewport |
| Secondary | white, `border-slate-300`, slate-900 text | Supporting actions |
| Ghost | text-only, brand-600 | Tertiary/inline |
| Destructive | red-600 | Decline/delete, always with confirm |

All buttons: 48px height on touch (40px allowed desktop-dense), visible focus ring (`ring-2 ring-brand-600 ring-offset-2`), loading spinner state, never disabled-without-explanation.

## 5. Cards, forms, iconography

- **Job/lead card:** white, 16px radius, 1px border, 20–24px padding; category icon chip top-left, meta row (suburb · time ago) in muted, budget/quote-count as pill badges.
- **Profile card:** photo top (4:3), verified badge overlaid, rating row with amber stars + count.
- **Forms:** 48px inputs, labels above (never placeholder-as-label), inline validation on blur, helper microcopy under sensitive fields.
- **Icons: Lucide** — 1.5px stroke, consistent with shadcn/ui. Category icons get a `brand-50` circular chip behind them. No emoji in product UI.
- **Photography:** real tradespeople on site, natural light, AU/NZ settings. Duotone/none filters — never clip-art or handshake stock.

## 6. Accessibility

- Contrast: body text ≥ 4.5:1 (slate-600 on white passes), large headings ≥ 3:1; brand-600 on white passes AA for text and UI.
- Touch targets ≥ 44×44px; interactive elements spaced ≥ 8px apart.
- Visible keyboard focus everywhere; skip-to-content link; semantic landmarks (`header/nav/main/footer`).
- Form errors announced via `aria-live`; icons always paired with text or `aria-label`.
- Respect `prefers-reduced-motion`; animations are opacity/transform only, ≤ 300ms.
- Star ratings rendered with accessible text alternative ("4.9 out of 5, 127 reviews").

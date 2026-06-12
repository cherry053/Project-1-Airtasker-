# Tradely — Trades Marketplace Platform

A premium, conversion-focused trades marketplace for Australia & New Zealand, where homeowners post jobs and licensed tradespeople browse leads, quote, and win work. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn-style components.

## Documentation

| Doc | Contents |
|---|---|
| [`docs/01-product-strategy.md`](docs/01-product-strategy.md) | User journeys, sitemap, navigation, homepage conversion strategy |
| [`docs/02-website-copy.md`](docs/02-website-copy.md) | Full copy + section structure for all key pages |
| [`docs/03-design-system.md`](docs/03-design-system.md) | Colours, typography, spacing, buttons, accessibility |
| [`docs/04-component-library.md`](docs/04-component-library.md) | Figma-style component breakdown with responsive behaviour |
| [`docs/05-implementation-plan.md`](docs/05-implementation-plan.md) | Stack recommendation, folder structure, build sequence |
| [`docs/06-feature-specs.md`](docs/06-feature-specs.md) | Technical specs: auth & roles, job posting, quoting, profiles & reviews |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS** with a custom design-token theme
- **shadcn/ui-style** primitives (Button, Card, Badge) with CVA variants
- **Lucide** icons, **Inter** + **Bricolage Grotesque** via `next/font`
- Planned backend: **Supabase** (Postgres, Auth, Storage, Realtime) — see implementation plan

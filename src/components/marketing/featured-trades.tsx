import Link from "next/link";
import { Star, ShieldCheck, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trades = [
  {
    name: "Dave's Plumbing & Gas",
    trade: "Plumber",
    suburb: "Parramatta, NSW",
    rating: 4.9,
    reviews: 127,
    blurb: "Licensed plumber and gasfitter. Same-day emergency callouts.",
    initials: "DP",
  },
  {
    name: "Sparked Electrical Co.",
    trade: "Electrician",
    suburb: "Brunswick, VIC",
    rating: 5.0,
    reviews: 89,
    blurb: "Level 2 electrician. Switchboards, EV chargers, smart homes.",
    initials: "SE",
  },
  {
    name: "Harbour City Painters",
    trade: "Painter",
    suburb: "North Shore, Auckland",
    rating: 4.8,
    reviews: 214,
    blurb: "Interior and exterior specialists. 10-year workmanship warranty.",
    initials: "HP",
  },
  {
    name: "GreenSide Landscaping",
    trade: "Landscaper",
    suburb: "Paddington, QLD",
    rating: 4.9,
    reviews: 156,
    blurb: "Design-to-build landscaping, decks, turf and retaining walls.",
    initials: "GL",
  },
];

export function FeaturedTrades() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Meet the trades your neighbours rate.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Every profile is licence-checked, insured, and backed by verified
            reviews from real jobs.
          </p>
        </div>
        <Link
          href="/browse-jobs"
          className="shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          See how verification works →
        </Link>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trades.map((trade) => (
          <li key={trade.name}>
            <Card className="flex h-full flex-col p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 font-display text-lg font-bold text-white">
                  {trade.initials}
                </span>
                <Badge variant="verified">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                  Verified
                </Badge>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                {trade.name}
              </h3>
              <p className="mt-0.5 flex items-center gap-1 text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {trade.trade} · {trade.suburb}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {trade.blurb}
              </p>
              <p
                className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-slate-900"
                aria-label={`Rated ${trade.rating} out of 5 from ${trade.reviews} reviews`}
              >
                <Star
                  className="h-4 w-4 fill-accent-500 text-accent-500"
                  aria-hidden
                />
                {trade.rating}
                <span className="font-normal text-slate-500">
                  ({trade.reviews} reviews)
                </span>
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

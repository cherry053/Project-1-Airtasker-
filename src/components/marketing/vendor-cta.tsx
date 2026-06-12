import Link from "next/link";
import { TrendingUp, BellRing, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: BellRing, text: "Fresh local leads matched to your trade" },
  { icon: CreditCard, text: "Pay per lead or go unlimited — no lock-in" },
  { icon: TrendingUp, text: "Build a reviewed profile that wins work" },
];

export function VendorCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-brand-600 p-8 md:grid-cols-2 md:p-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            For tradespeople
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Tradies, turn local jobs into your next customers.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-100">
            Quote only on the jobs you want, build your reputation with
            verified reviews, and keep your calendar full.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/for-tradies">
              <Button variant="inverse" size="lg" className="w-full sm:w-auto">
                Join as a tradesperson
              </Button>
            </Link>
          </div>
          <p className="mt-3 text-sm text-brand-200">
            Free to join · Verified within 1 business day
          </p>
        </div>
        <ul className="space-y-4">
          {perks.map((perk) => (
            <li
              key={perk.text}
              className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 text-white backdrop-blur"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <perk.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-medium">{perk.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

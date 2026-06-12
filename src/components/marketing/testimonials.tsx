import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Posted a job for a leaking ensuite tap on Sunday night and had four quotes by Monday morning. Hired by lunch, fixed by Wednesday.",
    name: "Sarah M.",
    detail: "Homeowner · Newtown, NSW",
  },
  {
    quote:
      "I was sceptical about lead platforms, but the jobs here are genuine and local. Tradely now brings in about a third of my monthly work.",
    name: "Mike T.",
    detail: "Electrician · Hamilton, NZ",
  },
  {
    quote:
      "Being able to compare quotes side by side — with reviews and licence details right there — made hiring a roofer so much less stressful.",
    name: "Priya K.",
    detail: "Property investor · Footscray, VIC",
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Trusted on both sides of the job.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Real reviews from homeowners and tradespeople across AU &amp; NZ.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <Card className="flex h-full flex-col p-8">
                <div
                  className="flex gap-0.5"
                  aria-label="Rated 5 out of 5"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent-500 text-accent-500"
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-6">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.detail}</p>
                </footer>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

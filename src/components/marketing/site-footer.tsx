import Link from "next/link";
import { Wrench, ShieldCheck, Lock, Star } from "lucide-react";

const columns = [
  {
    heading: "For homeowners",
    links: [
      { label: "Post a job", href: "/post-a-job" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Trust & safety", href: "/trust-and-safety" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "For tradespeople",
    links: [
      { label: "Browse jobs", href: "/browse-jobs" },
      { label: "Join as a tradie", href: "/for-tradies" },
      { label: "Pricing", href: "/pricing" },
      { label: "Verification", href: "/trust-and-safety" },
    ],
  },
  {
    heading: "Popular categories",
    links: [
      { label: "Plumbers", href: "/categories/plumbing" },
      { label: "Electricians", href: "/categories/electrical" },
      { label: "Painters", href: "/categories/painting" },
      { label: "Landscapers", href: "/categories/landscaping" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Terms of service", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl font-bold text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Wrench className="h-5 w-5" aria-hidden />
              </span>
              Tradely
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              The trusted way to hire licensed local trades across Australia
              and New Zealand.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-500" aria-hidden />
                Licence-checked trades
              </li>
              <li className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-green-500" aria-hidden />
                Your details stay private
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent-500" aria-hidden />
                Verified reviews only
              </li>
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tradely Pty Ltd · ABN 00 000 000 000
          </p>
          <p>Made in Australia &amp; New Zealand 🇦🇺 🇳🇿</p>
        </div>
      </div>
    </footer>
  );
}

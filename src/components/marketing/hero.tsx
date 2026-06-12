import Link from "next/link";
import { Search, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(29,79,216,0.08),_transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-green-600" aria-hidden />
            Every tradie is licence-checked and reviewed
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]">
            Get the right tradie for the job — <span className="text-brand-600">fast.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Post your job for free and compare quotes from licensed, reviewed
            local tradespeople across Australia and New Zealand.
          </p>
        </div>

        {/* Inline job-starter: pre-fills the Post a Job wizard */}
        <form
          action="/post-a-job"
          className="mt-10 flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/5 md:flex-row md:items-center md:rounded-full md:py-2 md:pl-6 md:pr-2"
        >
          <label className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 px-4 md:border-0 md:px-0">
            <Search className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
            <span className="sr-only">What do you need done?</span>
            <input
              type="text"
              name="service"
              placeholder="What do you need done? e.g. fix a leaking tap"
              className="h-12 w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <div className="hidden h-8 w-px bg-slate-200 md:block" aria-hidden />
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 md:w-44 md:border-0 md:px-0">
            <MapPin className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
            <span className="sr-only">Postcode or suburb</span>
            <input
              type="text"
              name="postcode"
              placeholder="Postcode"
              className="h-12 w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <Button type="submit" className="md:rounded-full">
            Get free quotes
          </Button>
        </form>

        <p className="mt-4 text-sm text-slate-500">
          Free to post · No obligation to hire · Quotes usually within hours
        </p>

        <div className="mt-6">
          <Link
            href="/browse-jobs"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Are you a tradie? Browse open jobs →
          </Link>
        </div>
      </div>
    </section>
  );
}

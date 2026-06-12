import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6 md:py-24">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
          Ready to tick it off the list?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Post your job in about two minutes and let licence-checked local
          trades come to you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/post-a-job" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Post a Job — it&apos;s free
            </Button>
          </Link>
          <Link href="/for-tradies" className="w-full sm:w-auto">
            <Button variant="inverse" size="lg" className="w-full sm:w-auto">
              Join as a tradesperson
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Free to post · No obligation to hire · Cancel anytime
        </p>
      </div>
    </section>
  );
}

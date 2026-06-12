import Link from "next/link";
import { ClipboardList, MessagesSquare, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us what you need",
    description:
      "Describe your job and add photos. It takes about two minutes, and posting is always free.",
  },
  {
    icon: MessagesSquare,
    title: "Compare quotes",
    description:
      "Licensed local tradies send you quotes with prices and timelines — usually within hours.",
  },
  {
    icon: BadgeCheck,
    title: "Hire with confidence",
    description:
      "Check reviews, ratings and credentials, then hire the right person for the job.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Done in three simple steps.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            No phone tag. No chasing quotes. Just the job, sorted.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-8"
            >
              <span className="absolute right-6 top-6 font-display text-5xl font-bold text-slate-100">
                {index + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <step.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Link href="/post-a-job">
            <Button size="lg">Post a Job — it&apos;s free</Button>
          </Link>
          <p className="mt-3 text-sm text-slate-500">
            No obligation to hire · Your details stay private
          </p>
        </div>
      </div>
    </section>
  );
}

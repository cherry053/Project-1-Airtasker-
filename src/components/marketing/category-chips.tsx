import Link from "next/link";
import {
  Droplets,
  Zap,
  Paintbrush,
  Hammer,
  TreePine,
  Home,
  Grid3x3,
  Wrench,
  Truck,
  Fan,
  Lock,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "Plumbing", slug: "plumbing", icon: Droplets },
  { name: "Electrical", slug: "electrical", icon: Zap },
  { name: "Painting", slug: "painting", icon: Paintbrush },
  { name: "Carpentry", slug: "carpentry", icon: Hammer },
  { name: "Landscaping", slug: "landscaping", icon: TreePine },
  { name: "Roofing", slug: "roofing", icon: Home },
  { name: "Tiling", slug: "tiling", icon: Grid3x3 },
  { name: "Handyman", slug: "handyman", icon: Wrench },
  { name: "Removals", slug: "removals", icon: Truck },
  { name: "Air Conditioning", slug: "air-conditioning", icon: Fan },
  { name: "Locksmiths", slug: "locksmiths", icon: Lock },
  { name: "Cleaning", slug: "cleaning", icon: Sparkles },
];

export function CategoryChips() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Whatever the job, we&apos;ve got the trade.
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          From quick fixes to full renovations — find licensed locals in over
          50 service categories.
        </p>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/post-a-job?category=${category.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <category.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-700">
                {category.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

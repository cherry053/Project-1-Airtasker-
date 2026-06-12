const stats = [
  { value: "12,000+", label: "Jobs completed" },
  { value: "4.8★", label: "Average rating" },
  { value: "3,500+", label: "Verified trades" },
  { value: "2 hrs", label: "Average first quote" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Platform statistics"
      className="border-y border-slate-200 bg-white"
    >
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 py-10 md:grid-cols-4 md:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="order-2 mt-1 text-sm font-medium text-slate-500">
              {stat.label}
            </dt>
            <dd className="font-display text-3xl font-bold text-slate-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

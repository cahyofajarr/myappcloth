export default function LoadingProducts() {
  const cells = Array.from({ length: 6 });
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="h-8 w-40 rounded-lg bg-gray-200 mb-6 animate-pulse" />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cells.map((_, i) => (
          <li key={i} className="rounded-2xl border p-5 bg-white/60">
            <div className="aspect-[4/3] rounded-xl bg-gray-200 animate-pulse mb-3" />
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
          </li>
        ))}
      </ul>
    </section>
  );
}

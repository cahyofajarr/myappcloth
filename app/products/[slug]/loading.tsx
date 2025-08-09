export default function LoadingProductDetail() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="aspect-[4/3] rounded-xl bg-gray-200 animate-pulse" />
        <div>
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-3" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </section>
  );
}

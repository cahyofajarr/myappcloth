import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { getProductBySlug } from "@/lib/server/products";

type Params = { slug: string };

export const revalidate = 60;

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  return { title: p ? p.name : "Produk" };
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-xl border">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 opacity-80">{product.description}</p>
          <p className="mt-4 text-2xl font-semibold">
            {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(product.price)}
          </p>
          <p className="mt-2 text-sm opacity-70">⭐ {product.rating}</p>
        </div>
      </div>
    </section>
  );
}

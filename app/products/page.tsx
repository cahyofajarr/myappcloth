import { getProducts } from "@/lib/server/products";
import ProductsSearchClient from "@/components/products/ProductsSearchClient";

export const metadata = { title: "Products" };
export const revalidate = 60; // cache 60 detik

export default async function ProductsPage() {
  const items = await getProducts(); // bisa uji error: getProducts({ fail: true })
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductsSearchClient products={items} />
    </section>
  );
}

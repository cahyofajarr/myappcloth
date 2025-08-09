import { PRODUCTS } from "@/data/products";

export default function sitemap() {
  const base = "https://toko-kamu.vercel.app";
  const routes = ["", "/about", "/products", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(p.createdAt),
  }));

  return [...routes, ...productRoutes];
}

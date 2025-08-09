import { PRODUCTS } from "@/data/products";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getProducts(opts?: { delay?: number; fail?: boolean }) {
  const delay = opts?.delay ?? 500;
  if (delay) await sleep(delay);
  if (opts?.fail) throw new Error("Gagal memuat produk");
  return PRODUCTS;
}

export async function getProductBySlug(slug: string, opts?: { delay?: number }) {
  const delay = opts?.delay ?? 500;
  if (delay) await sleep(delay);
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

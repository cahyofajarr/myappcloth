"use client";

import * as React from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import type { Product } from "@/lib/types";

type Props = { products: Product[] };

export default function ProductsSearchClient({ products }: Props) {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<string>("all");

  const filtered = React.useMemo(() => {
    const qx = q.trim().toLowerCase();
    return products.filter(p => {
      const okCat = cat === "all" || p.category === cat;
      const okText =
        !qx ||
        p.name.toLowerCase().includes(qx) ||
        p.tags.join(" ").toLowerCase().includes(qx);
      return okCat && okText;
    });
  }, [products, q, cat]);

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <input
          className="h-10 w-full rounded-xl border px-3"
          placeholder="Cari nama/keyword…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Cari produk"
        />
        <select
          className="h-10 rounded-xl border px-3"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          aria-label="Filter kategori"
        >
          <option value="all">Semua</option>
          <option value="shirt">Shirt</option>
          <option value="pants">Pants</option>
          <option value="jacket">Jacket</option>
          <option value="accessory">Accessory</option>
        </select>
      </div>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.slug}`} className="block">
              <Card title={p.name} description={p.description}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(p.price)}
                  </span>
                  <span className="text-sm opacity-70">⭐ {p.rating}</span>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-6 opacity-70">Tidak ada produk yang cocok.</p>
      )}
    </>
  );
}

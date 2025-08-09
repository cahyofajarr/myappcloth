"use client";

import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";

export default function Home() {
  const top = PRODUCTS.slice(0, 3);
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-bold">Toko Pakaian Sederhana</h1>
        <p className="mt-3 opacity-80">Belajar Next.js + TypeScript + Tailwind v4</p>
        <div className="mt-6 flex gap-3">
          <Button onClick={() => alert("Halo!")}>Get Started</Button>
          <Button variant="outline" size="sm">Docs</Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-4">Produk Unggulan</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((p) => (
            <li key={p.id} className="rounded-2xl border p-5 shadow-sm bg-white/80">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-3">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={800}          {/* wajib: width/height */}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(p.price)}
                </span>
                <span className="text-sm opacity-70">⭐ {p.rating}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

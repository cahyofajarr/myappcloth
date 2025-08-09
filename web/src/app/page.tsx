"use client";

import Button from "@/src/app/components/ui/Button";
import { PRODUCTS } from "@/src/app/data/products";

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

      {/* ...section produk tetap sama... */}
    </main>
  );
}

"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // bisa kirim ke Sentry di sini
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-bold">Gagal memuat produk</h1>
      <p className="mt-2 opacity-80">Coba lagi beberapa saat.</p>
      <button
        onClick={() => reset()}
        className="mt-4 h-10 rounded-xl bg-gray-900 px-4 text-white"
      >
        Coba lagi
      </button>
    </section>
  );
}

import Link from "next/link";

export default function NotFoundRoot() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-3xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 opacity-80">Periksa URL atau kembali ke beranda.</p>
      <Link
        href="/"
        className="inline-block mt-6 h-10 rounded-xl bg-gray-900 px-4 text-white"
      >
        Kembali
      </Link>
    </section>
  );
}

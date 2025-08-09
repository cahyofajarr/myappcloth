# Toko Pakaian Sederhana

Live: <https://toko-kamu.vercel.app>

## Tech
Next 15 • React 19 • Tailwind v4 • RHF + Zod

## Fitur
- Landing + Products + Detail (static params)
- Search & filter (client) • Loading skeleton • Error boundary
- Contact form (validasi client & server)
- SEO: metadata, OG image, robots, sitemap

## Arsitektur
- App Router (server-first), komponen interaktif pakai "use client"
- Alias `@/*` via tsconfig
- Revalidate 60s di pages produk

## Jalankan
```bash
npm install
npm run dev

import "./globals.css";

// ganti ke URL kamu nanti
const siteUrl = "https://toko-kamu.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Toko Pakaian Sederhana",
    template: "%s • TokPa.app",
  },
  description: "Belajar Next.js + TypeScript + Tailwind v4",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Toko Pakaian Sederhana",
    description: "Demo fullstack bootcamp",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko Pakaian Sederhana",
    description: "Demo fullstack bootcamp",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-background text-foreground">
        {/* Navbar + main + footer sudah ada dari hari sebelumnya */}
        {children}
      </body>
    </html>
  );
}

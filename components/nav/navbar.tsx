"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },

];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-base font-bold">
          TokPa<span className="opacity-70">.app</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  "px-3 py-2 rounded-lg text-sm transition",
                  isActive(item.href)
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-100"
                ].join(" ")}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border hover:bg-gray-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {/* icon hamburger sederhana */}
          <div className="i-[--bar] relative w-4 h-3">
            <span className="absolute inset-x-0 top-0 h-0.5 bg-foreground"></span>
            <span className="absolute inset-x-0 top-1/2 -mt-0.5 h-0.5 bg-foreground"></span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground"></span>
          </div>
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div id="mobile-menu" className="sm:hidden border-t">
          <ul className="mx-auto max-w-6xl px-4 py-2 space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "block px-3 py-2 rounded-lg text-sm",
                    isActive(item.href)
                      ? "bg-gray-900 text-white"
                      : "hover:bg-gray-100"
                  ].join(" ")}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

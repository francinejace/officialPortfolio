"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-obsidian/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-serif text-2xl tracking-wide text-ink" aria-label="Francine Jace Bachiller, home">
          <span className="sm:hidden">FJB</span>
          <span className="hidden sm:inline">Francine Jace Bachiller</span>
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-4 text-xs text-muted sm:gap-8 sm:text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`relative py-2 transition-colors hover:text-gold-light focus-visible:outline-none focus-visible:text-gold-light ${
                pathname === link.href ? "text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="hidden items-center gap-1 border-b border-gold pb-1 text-ink transition-colors hover:text-gold-light sm:flex"
          >
            Let&apos;s talk <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

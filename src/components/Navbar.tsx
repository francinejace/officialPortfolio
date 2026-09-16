"use client";

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
    <header id="top" className="sticky top-0 z-50 border-b border-line/70 bg-obsidian/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex min-h-11 items-center font-serif text-2xl tracking-wide text-ink" aria-label="Francine Jace Bachiller, home">
          <span className="sm:hidden">FJB</span>
          <span className="hidden sm:inline">Francine Jace Bachiller</span>
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-3 text-[0.7rem] text-muted sm:gap-7 sm:text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`relative inline-flex min-h-11 items-center py-2 transition-colors hover:text-gold-light focus-visible:text-gold-light ${
                pathname === link.href ? "text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

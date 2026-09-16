import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-line/70">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="font-serif text-2xl tracking-wide text-ink" aria-label="Back to top">
          [Name]
        </a>
        <nav aria-label="Primary navigation" className="flex items-center gap-6 text-sm text-muted sm:gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gold-light">
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="hidden items-center gap-1 border-b border-gold pb-1 text-ink transition-colors hover:text-gold-light sm:flex"
          >
            Let&apos;s talk <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}

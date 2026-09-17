"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const links = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -60%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-line/70 bg-obsidian/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#top" className="group/logo inline-flex min-h-11 items-center" aria-label="Francine Jace Bachiller, back to top">
          <BrandMark />
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-2 text-[0.62rem] text-muted sm:gap-6 sm:text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.id ? "location" : undefined}
              className={`animated-underline relative inline-flex min-h-11 items-center py-2 transition-colors hover:text-gold-light focus-visible:text-gold-light ${
                activeSection === link.id ? "is-active text-ink" : ""
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

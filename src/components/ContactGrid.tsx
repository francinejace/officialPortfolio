"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Facebook, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "Facebook",
    value: "Francine Jace Bachiller",
    href: "https://facebook.com/franciellaaa",
    icon: Facebook,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/francinejace",
    href: "https://www.linkedin.com/in/francinejace/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/francinejace",
    href: "https://github.com/francinejace",
    icon: Github,
    external: true,
  },
  {
    label: "Email",
    value: "fjbachiller16@gmail.com",
    href: "mailto:fjbachiller16@gmail.com",
    icon: Mail,
  },
];

function BreakingIcon({ icon: Icon }: { icon: LucideIcon }) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: iconRef,
    offset: ["start end", "end start"],
  });
  const topX = useTransform(scrollYProgress, [0, 0.4, 0.62, 1], [-7, 0, 0, 8]);
  const bottomX = useTransform(scrollYProgress, [0, 0.4, 0.62, 1], [7, 0, 0, -8]);
  const topRotate = useTransform(scrollYProgress, [0, 0.4, 0.62, 1], [-9, 0, 0, 10]);
  const bottomRotate = useTransform(scrollYProgress, [0, 0.4, 0.62, 1], [9, 0, 0, -10]);

  if (shouldReduceMotion) {
    return (
      <span className="grid size-12 shrink-0 place-items-center border border-line text-gold" aria-hidden="true">
        <Icon size={21} strokeWidth={1.5} />
      </span>
    );
  }

  return (
    <span
      ref={iconRef}
      className="relative grid size-12 shrink-0 place-items-center overflow-hidden border border-line text-gold transition-colors duration-300 group-hover:border-gold/50 group-hover:bg-gold/10 group-focus-visible:border-gold/50 group-focus-visible:bg-gold/10"
      aria-hidden="true"
    >
      <motion.span
        className="absolute grid inset-0 place-items-center [clip-path:inset(0_0_50%_0)]"
        style={{ x: topX, rotate: topRotate }}
      >
        <Icon size={21} strokeWidth={1.5} />
      </motion.span>
      <motion.span
        className="absolute grid inset-0 place-items-center [clip-path:inset(50%_0_0_0)]"
        style={{ x: bottomX, rotate: bottomRotate }}
      >
        <Icon size={21} strokeWidth={1.5} />
      </motion.span>
    </span>
  );
}

export function ContactGrid({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid gap-4 sm:grid-cols-2 ${className}`} aria-label="Contact methods">
      {contactLinks.map(({ label, value, href, icon, external }, index) => (
        <li key={label}>
          <Reveal delay={0.08 + index * 0.05} className="h-full">
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={`${label}: ${value}${external ? " (opens in a new tab)" : ""}`}
              className="group relative flex min-h-36 h-full items-center gap-5 overflow-hidden border border-line bg-obsidian-soft/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60 focus-visible:border-gold/60 motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
            >
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" aria-hidden="true" />
              <BreakingIcon icon={icon} />
              <span className="min-w-0 flex-1">
                <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-muted transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">{label}</span>
                <span className="mt-2 block break-words text-sm leading-6 text-ink transition-transform duration-500 group-hover:translate-x-2 motion-reduce:transform-none sm:text-base">{value}</span>
              </span>
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-light group-focus-visible:text-gold-light motion-reduce:transform-none motion-reduce:transition-none"
              />
            </a>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

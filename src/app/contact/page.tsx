import { ArrowUpRight, Facebook, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
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

export default function ContactPage() {
  return (
    <section className="mx-auto min-h-[calc(100vh-9rem)] w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Contact</p>
        <div className="mt-14 grid gap-8 border-b border-line pb-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] text-ink sm:text-8xl">
            Let&apos;s build something useful and well considered.
          </h1>
          <p className="max-w-md text-base leading-8 text-muted lg:pb-2">
            I&apos;m open to internship opportunities, collaborative projects, and conversations around software engineering, design, and digital product development.
          </p>
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="Contact methods">
        {contactLinks.map(({ label, value, href, icon: Icon, external }, index) => (
          <li key={label}>
            <Reveal delay={0.08 + index * 0.05} className="h-full">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={`${label}: ${value}${external ? " (opens in a new tab)" : ""}`}
                className="group flex min-h-36 h-full items-center gap-5 border border-line bg-obsidian-soft/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60 focus-visible:border-gold/60 motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
              >
                <span className="grid size-12 shrink-0 place-items-center border border-line text-gold transition-colors duration-300 group-hover:border-gold/50 group-hover:bg-gold/10 group-focus-visible:border-gold/50 group-focus-visible:bg-gold/10" aria-hidden="true">
                  <Icon size={21} strokeWidth={1.5} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-muted">{label}</span>
                  <span className="mt-2 block break-words text-sm leading-6 text-ink sm:text-base">{value}</span>
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
    </section>
  );
}

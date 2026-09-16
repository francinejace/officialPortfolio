import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl flex-col justify-center px-6 py-20 lg:px-8 lg:py-28">
      <p className="text-xs uppercase tracking-[0.28em] text-gold">Contact</p>
      <h1 className="mt-16 max-w-4xl font-serif text-6xl leading-[0.95] text-ink sm:text-8xl">Let&apos;s build something useful and well considered.</h1>
      <p className="mt-10 max-w-xl text-base leading-8 text-muted">
        I&apos;m open to internship opportunities, collaborative projects, and conversations around software engineering, design, and digital product development.
      </p>
      <a href="mailto:francinejacebachiller@gmail.com" className="mt-10 flex w-fit items-center gap-2 border-b border-gold pb-2 text-sm text-ink transition-colors hover:text-gold-light">
        francinejacebachiller@gmail.com <ArrowUpRight size={16} strokeWidth={1.5} />
      </a>
    </section>
  );
}
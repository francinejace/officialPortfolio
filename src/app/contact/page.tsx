import { ContactGrid } from "@/components/ContactGrid";
import { Reveal } from "@/components/Reveal";

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

      <ContactGrid className="mt-10" />
    </section>
  );
}

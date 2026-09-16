import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main id="top">
      <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl flex-col justify-between px-6 py-16 lg:px-8 lg:py-24">
        <Reveal className="max-w-4xl">
          <p className="mb-8 text-xs uppercase tracking-[0.28em] text-gold">Creative developer / [Location]</p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] text-ink sm:text-8xl lg:text-[9rem]">
            [Your name]
            <span className="block text-gold">[Your focus]</span>
          </h1>
          <p className="mt-10 max-w-xl text-base leading-7 text-muted sm:text-lg">
            [A short, considered statement about the work you do and the people or ideas you build for.]
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex items-end justify-between border-t border-line pt-6">
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
            <ArrowDown size={15} className="text-gold" /> Scroll to explore
          </span>
          <a href="#work" className="group flex items-center gap-2 text-sm text-ink transition-colors hover:text-gold-light">
            View selected work
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </a>
        </Reveal>
      </section>

      <section id="about" className="border-y border-line bg-obsidian-soft/50">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">01 / About</p>
          <div>
            <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">[About section headline]</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">[Bio, working philosophy, and a little context about your practice.]</p>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex items-end justify-between border-b border-line pb-5">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">02 / Selected work</p>
          <span className="hidden text-sm text-muted sm:block">[Project count]</span>
        </div>
        <div className="grid min-h-48 place-items-center border border-dashed border-line text-sm text-muted">
          [Project cards will be added here]
        </div>
      </section>

      <section id="contact" className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">03 / Contact</p>
          <h2 className="max-w-3xl font-serif text-5xl leading-none text-ink sm:text-7xl">[A warm invitation to connect]</h2>
          <a href="mailto:your@email.com" className="flex w-fit items-center gap-2 border-b border-gold pb-2 text-sm text-ink transition-colors hover:text-gold-light">
            your@email.com <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </main>
  );
}

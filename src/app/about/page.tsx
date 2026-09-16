import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="mx-auto min-h-[calc(100vh-9rem)] w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <p className="text-xs uppercase tracking-[0.28em] text-gold">About</p>
      <div className="mt-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <p className="text-sm text-muted">[Portrait, location, or short personal detail]</p>
        <div>
          <h1 className="max-w-3xl font-serif text-6xl leading-[0.95] text-ink sm:text-8xl">[About page headline]</h1>
          <p className="mt-10 max-w-2xl text-base leading-8 text-muted">[Long-form biography and working philosophy]</p>
          <a href="/work" className="mt-10 flex w-fit items-center gap-2 border-b border-gold pb-2 text-sm text-ink transition-colors hover:text-gold-light">
            Explore selected work <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
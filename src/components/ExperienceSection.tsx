import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { experiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-y border-line bg-obsidian-soft/50">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal className="mb-12 flex items-end justify-between border-b border-line pb-5">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">03 / Experience</p>
          <span className="hidden text-sm text-muted sm:block">Leadership &amp; involvement</span>
        </Reveal>

        <div className="space-y-16 lg:space-y-24">
          {experiences.map((experience, index) => (
            <article key={experience.role} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="group relative aspect-[16/10] overflow-hidden border border-line bg-obsidian">
                  {experience.image ? (
                    <Image
                      src={experience.image}
                      alt={experience.imageAlt ?? `${experience.role} at ${experience.organization}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center" aria-label="Experience image placeholder">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49.8%,rgba(212,175,55,0.18)_50%,transparent_50.2%)]" aria-hidden="true" />
                      <div className="relative text-center">
                        <span className="font-serif text-5xl text-gold/80 sm:text-6xl">AITS</span>
                        <span className="mt-2 block text-[0.65rem] uppercase tracking-[0.3em] text-muted">FEU Tech</span>
                      </div>
                    </div>
                  )}
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" aria-hidden="true" />
                  <span className="pointer-events-none absolute inset-y-0 right-0 w-px origin-top scale-y-0 bg-gold transition-transform delay-100 duration-500 group-hover:scale-y-100" aria-hidden="true" />
                </div>
              </Reveal>

              <Reveal delay={0.08} className={index % 2 === 1 ? "lg:order-1" : undefined}>
                <p className="text-xs uppercase tracking-[0.22em] text-gold">{experience.period}</p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">{experience.role}</h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">{experience.organization}</p>
                <div className="mt-8 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-muted" aria-hidden="true">
                  <span className="h-px w-10 bg-gold/70" /> Leadership experience
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

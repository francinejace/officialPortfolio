import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ContactGrid } from "@/components/ContactGrid";
import { DynamicHero } from "@/components/DynamicHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div>
      <DynamicHero />

      <section id="about" className="border-y border-line bg-obsidian-soft/50">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">01 / About</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">Building better systems through design, code, and collaboration.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              Aspiring software engineer focused on building thoughtful web and mobile experiences that solve real problems. I work across full-stack development, systems analysis, UI/UX design, and project coordination, turning ideas into clean, user-centered digital products. I bring together technical execution, design thinking, and strong communication to deliver solutions that are useful, scalable, and clear.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal className="mb-12 flex items-end justify-between border-b border-line pb-5">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">02 / Selected work</p>
          <span className="hidden text-sm text-muted sm:block">{projects.length} selected projects</span>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <Reveal delay={0.08}>
          <Link
            href="/work"
            className="group mt-10 flex min-h-11 w-fit items-center gap-2 border-b border-gold text-sm text-ink transition-colors hover:text-gold-light"
          >
            View all selected work
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>
      </section>

      <section id="contact" className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal className="flex flex-col gap-8">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">03 / Contact</p>
          <h2 className="max-w-3xl font-serif text-5xl leading-none text-ink sm:text-7xl">Have a thoughtful project in mind?</h2>
          <p className="max-w-xl text-base leading-7 text-muted">
            I&apos;m open to internship opportunities, collaborative projects, and conversations about building useful digital products.
          </p>
        </Reveal>
        <ContactGrid className="mt-10" />
        </div>
      </section>
    </div>
  );
}

import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main id="top">
      <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl flex-col justify-between px-6 py-16 lg:px-8 lg:py-24">
        <Reveal className="max-w-4xl">
          <p className="mb-8 text-xs uppercase tracking-[0.28em] text-gold">IT Intern / Software Engineer Aspirant · Marikina City</p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] text-ink sm:text-8xl lg:text-[9rem]">
            Francine Jace
            <span className="block text-gold">Bachiller</span>
          </h1>
          <p className="mt-10 max-w-xl text-base leading-7 text-muted sm:text-lg">
            I build practical digital experiences that balance technical rigor, thoughtful design, and real-world problem solving.
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
            <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">Building better systems through design, code, and collaboration.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              Aspiring software engineer focused on building thoughtful web and mobile experiences that solve real problems. I work across full-stack development, systems analysis, UI/UX design, and project coordination, turning ideas into clean, user-centered digital products. I bring together technical execution, design thinking, and strong communication to deliver solutions that are useful, scalable, and clear.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex items-end justify-between border-b border-line pb-5">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">02 / Selected work</p>
          <span className="hidden text-sm text-muted sm:block">{projects.length} selected projects</span>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <Link
          href="/work"
          className="group mt-10 flex w-fit items-center gap-2 border-b border-gold pb-2 text-sm text-ink transition-colors hover:text-gold-light"
        >
          View all selected work
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </section>

      <section id="contact" className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">03 / Contact</p>
          <h2 className="max-w-3xl font-serif text-5xl leading-none text-ink sm:text-7xl">Have a thoughtful project in mind?</h2>
          <p className="max-w-xl text-base leading-7 text-muted">
            I&apos;m open to internship opportunities, collaborative projects, and conversations about building useful digital products.
          </p>
          <a href="mailto:francinejacebachiller@gmail.com" className="flex w-fit items-center gap-2 border-b border-gold pb-2 text-sm text-ink transition-colors hover:text-gold-light">
            francinejacebachiller@gmail.com <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </main>
  );
}

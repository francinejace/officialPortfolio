import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <section className="mx-auto min-h-[calc(100vh-9rem)] w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Selected work</p>
        <div className="mt-14 flex flex-col gap-8 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="font-serif text-6xl leading-[0.95] text-ink sm:text-8xl">Work, considered.</h1>
          <p className="max-w-sm text-sm leading-6 text-muted">
            A selection of development and design work grounded in useful systems, clear interfaces, and careful execution.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.title} className={index === 0 ? "lg:col-span-2" : undefined}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

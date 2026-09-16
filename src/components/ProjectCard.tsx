"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
            {project.category}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-ink sm:text-5xl">
            {project.title}
          </h2>
        </div>
        <span className="font-serif text-2xl text-muted/60" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-10 max-w-xl text-sm leading-7 text-muted sm:text-base">
        {project.description}
      </p>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-5">
        <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology} className="text-xs text-muted">
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-xs text-muted transition-colors group-hover:text-gold-light">
          <span>{project.year ?? project.status}</span>
          {project.href ? <ArrowUpRight size={15} strokeWidth={1.5} /> : null}
        </div>
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden border border-line bg-obsidian-soft/40 p-7 transition-colors duration-300 hover:border-gold/50 sm:p-9"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.linkLabel ?? "View project"}: ${project.title}`}
          className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.article>
  );
}

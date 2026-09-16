"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const hasLinks = project.websiteUrl || project.repositoryUrl;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden border border-line bg-obsidian-soft/40 transition-colors duration-300 hover:border-gold/50 focus-within:border-gold/50"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100"
        aria-hidden="true"
      />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-obsidian-soft">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.035] group-hover:saturate-[1.08] group-focus-within:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/30 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-30 group-focus-within:opacity-30" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
              {project.category}
            </p>
            <h2 className="mt-4 break-words font-serif text-3xl leading-[1.05] text-ink sm:text-4xl xl:text-5xl">
              {project.title}
            </h2>
          </div>
          <span className="shrink-0 font-serif text-2xl text-muted/60" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-8 max-w-xl text-sm leading-7 text-muted sm:mt-10 sm:text-base">
          {project.description}
        </p>

        <div className="mt-auto pt-8 sm:pt-10">
          <div className="border-t border-line pt-5">
            <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Technologies used">
              {project.technologies.map((technology) => (
                <li key={technology} className="text-xs text-muted">
                  {technology}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-muted">{project.year ?? project.status}</span>
              {hasLinks ? (
                <nav aria-label={`Links for ${project.title}`} className="flex flex-wrap gap-4 text-xs">
                  {project.websiteUrl ? (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit live website for ${project.title} (opens in a new tab)`}
                      className="inline-flex min-h-11 items-center gap-1 text-ink transition-colors hover:text-gold-light"
                    >
                      Live website <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View repository for ${project.title} (opens in a new tab)`}
                      className="inline-flex min-h-11 items-center gap-1 text-ink transition-colors hover:text-gold-light"
                    >
                      Repository <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  ) : null}
                </nav>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

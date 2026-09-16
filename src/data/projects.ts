export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  year?: string;
  status?: string;
  href?: string;
  linkLabel?: string;
};

// These entries are intentionally link-free until the final project details are approved.
export const projects: Project[] = [
  {
    title: "Full-Stack Web Platform",
    description:
      "A practical web application shaped around clear user flows, dependable data handling, and a maintainable full-stack foundation.",
    technologies: ["Next.js", "TypeScript", "Database"],
    category: "Web Development",
    status: "Case study in progress",
  },
  {
    title: "Mobile Application",
    description:
      "A mobile-first product concept focused on making an everyday task simpler through thoughtful interaction and accessible interface design.",
    technologies: ["Mobile", "UI/UX", "Prototyping"],
    category: "Product Design",
    status: "Case study in progress",
  },
  {
    title: "Systems Design Project",
    description:
      "An end-to-end systems project translating operational requirements into a clear, usable, and well-documented digital workflow.",
    technologies: ["Systems Analysis", "Research", "Project Management"],
    category: "Systems Analysis",
    status: "Case study in progress",
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  imageAlt: string;
  year?: string;
  status?: string;
  websiteUrl?: string;
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    title: "SolMate: A Web and Mobile Solar-Service Management System with Quotation and ROI Generation for RDY Solar Panel Installation",
    description:
      "A web and mobile solar-service management system featuring quotation generation, ROI calculations, administrator configuration, and an AI chatbot. I contributed as a technical writer and UI/UX Designer, creating user flows, wireframes, and high-fidelity mockups for the web applications.",
    technologies: ["Laravel", "Firebase", "Android Studio", "Figma"],
    category: "Web & Mobile Application",
    image: "/projects/solmate.png",
    imageAlt: "SolMate by RDY website showing its solar project gallery",
    status: "Completed",
    websiteUrl: "https://solmatebyrdy.com/",
  },
  {
    title: "Alban Memorial Foundation",
    description:
      "A digital platform created to communicate the foundation’s mission and strengthen its connection with the communities it serves. I contributed as a technical writer, producing clear and structured project documentation.",
    technologies: ["Technical Writing", "Documentation", "Content Strategy"],
    category: "Technical Documentation",
    image: "/projects/alban-memorial.png",
    imageAlt: "Alban Memorial Foundation website showing its community mission",
    status: "Completed",
    websiteUrl: "https://albanmemorial.onrender.com/",
  },
];

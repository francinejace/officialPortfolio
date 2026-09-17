export type Experience = {
  role: string;
  organization: string;
  period: string;
  image?: string;
  imageAlt?: string;
};

export const experiences: Experience[] = [
  {
    role: "Director for Publicity",
    organization: "FEU Tech Alliance of Information Technology Students",
    period: "April 2026 — July 2026",
    image: "/experiences/publicity-director.jpg",
    imageAlt: "Francine Jace Bachiller speaking at an FEU Tech student leadership event",
  },
  {
    role: "Director for Academics",
    organization: "FEU Tech Alliance of Information Technology Students",
    period: "August 2024 — July 2025",
  },
];

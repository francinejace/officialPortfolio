export type Experience = {
  role: string;
  organization: string;
  period: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
};

export const experiences: Experience[] = [
  {
    role: "Director for Publicity",
    organization: "FEU Tech Alliance of Information Technology Students",
    period: "April 2026 — July 2026",
    image: "/experiences/publicity-director.jpg",
    imageAlt: "Francine Jace Bachiller speaking at an FEU Tech student leadership event",
    imagePosition: "center 25%",
  },
  {
    role: "Director for Academics",
    organization: "FEU Tech Alliance of Information Technology Students",
    period: "August 2024 — July 2025",
    image: "/experiences/academics-director.jpg",
    imageAlt: "Francine Jace Bachiller with fellow student leaders at an FEU Tech event",
    imageFit: "cover",
    imagePosition: "center",
  },
];

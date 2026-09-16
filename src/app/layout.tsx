import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Francine Jace Bachiller | Software Engineer Portfolio",
    template: "%s | Francine Jace Bachiller",
  },
  description:
    "Portfolio of Francine Jace Bachiller, an aspiring software engineer focused on thoughtful web and mobile application development.",
  keywords: [
    "Francine Jace Bachiller",
    "software engineer",
    "web developer",
    "mobile application developer",
    "Marikina City",
  ],
  authors: [{ name: "Francine Jace Bachiller" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}

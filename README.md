<a name="readme-top"></a>

<br />

<div align="center">
  <a href="https://github.com/francinejace/">
    <h3 align="center">Francine Jace Bachiller — Portfolio</h3>
  </a>

  <p align="center">
    A modern developer portfolio presenting my background, selected projects, and approach to building thoughtful digital products.
  </p>
</div>

<br />

[![Repository visits](https://hits.sh/github.com/francinejace/officialPortfolio.svg?style=for-the-badge&label=visits)](https://hits.sh/github.com/francinejace/officialPortfolio/)

---

<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ol>
        <li><a href="#key-components">Key Components</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#local-development">Local Development</a></li>
      </ol>
    </li>
    <li><a href="#rules-practices-and-principles">Rules, Practices and Principles</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>

---

## Overview

This repository contains my personal developer portfolio, built to introduce who I am, document how I approach software, and present selected work across web and mobile application development, systems analysis, UI/UX design, technical writing, and project coordination.

The experience follows a minimalist editorial direction: obsidian surfaces, restrained metallic-gold accents, serif-led typography, generous spacing, and subtle motion. Every visual and interactive decision is intended to keep the work readable, professional, and easy to navigate across desktop and mobile devices.

### Key Components

- Responsive homepage with introductory, about, selected work, and contact sections
- Dedicated About, Work, and Contact routes using the Next.js App Router
- Reusable project cards driven by centralized project data
- Shared responsive navigation and footer
- Page and content transitions with restrained motion
- Semantic page structure, keyboard focus states, and responsive layouts
- Portfolio metadata for search and link previews

### Technology

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Additional interface icons are provided by [Lucide](https://lucide.dev/).

### Local Development

#### Prerequisites

- Node.js 20 or later
- npm

#### Setup

```bash
git clone https://github.com/francinejace/officialPortfolio.git
cd officialPortfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Validation

```bash
npm run lint
npm run build
```

## Rules, Practices and Principles

1. Keep pages within the `src/app` directory and follow the Next.js App Router conventions.
2. Write new application code in TypeScript and keep component props explicitly typed.
3. Place shared interface elements in `src/components` instead of duplicating page markup.
4. Keep project content centralized in `src/data/projects.ts` so presentation and content remain separate.
5. Use the established obsidian, gold, ink, muted, and line design tokens defined in `src/app/globals.css`.
6. Design mobile-first and verify layouts at mobile, tablet, and desktop widths.
7. Keep motion subtle, purposeful, and respectful of user accessibility preferences.
8. Use semantic HTML, descriptive labels, visible keyboard focus, and meaningful link text.
9. Keep commits focused so the repository history clearly communicates each change.

## Project Structure

```text
officialPortfolio/
├── .github/
│   └── workflows/
│       └── blank.yml
├── public/
│   └── images/
│       └── francine-hero.png
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── PageTransition.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Reveal.tsx
│   └── data/
│       └── projects.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Resources

| Resource | Purpose | Link |
| --- | --- | --- |
| Next.js Documentation | Framework and App Router reference | [nextjs.org/docs](https://nextjs.org/docs) |
| Tailwind CSS Documentation | Utility classes and responsive styling | [tailwindcss.com/docs](https://tailwindcss.com/docs) |
| Motion Documentation | Animation and interaction patterns | [motion.dev/docs](https://motion.dev/docs) |
| Lucide | Interface icon library | [lucide.dev](https://lucide.dev/) |
| Shields.io | Technology badges | [shields.io](https://shields.io/) |

<p align="right"><a href="#readme-top">Back to top</a></p>

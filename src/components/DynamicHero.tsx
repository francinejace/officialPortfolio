"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function DynamicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.02, 1.1]);
  const contentY = useTransform(smoothProgress, [0, 1], [0, -56]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.72], [1, 0.18]);

  const line = {
    hidden: { y: "115%", opacity: 0 },
    visible: (delay: number) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.95, delay, ease },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="group relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-line"
    >
      <motion.div
        className="absolute inset-0"
        style={shouldReduceMotion ? undefined : { y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/francine-hero.png"
          alt="Portrait of Francine Jace Bachiller under a dramatic studio spotlight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_38%]"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-obsidian/55 lg:bg-obsidian/20" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/15" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/25" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-between px-6 py-16 lg:px-8 lg:py-24"
        style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="my-auto max-w-4xl py-12">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.15, ease }}
            className="mb-3 text-xs uppercase tracking-[0.28em] text-gold sm:mb-4"
          >
            Software Engineer Aspirant · Marikina City
          </motion.p>

          <h1 className="font-serif text-6xl leading-[0.92] text-ink drop-shadow-2xl sm:text-8xl lg:text-[9rem]">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                variants={line}
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                custom={shouldReduceMotion ? 0 : 0.24}
              >
                Francine <span className="font-normal italic tracking-[-0.02em] text-ink/90">Jace</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block text-gold"
                variants={line}
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                custom={shouldReduceMotion ? 0 : 0.36}
              >
                Bachiller
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.52, ease }}
            className="mt-10 max-w-xl text-base leading-7 text-ink/80 sm:text-lg"
          >
            I build practical digital experiences that balance technical rigor, thoughtful design, and real-world problem solving.
          </motion.p>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.7 }}
          className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/20 pt-4"
        >
          <span className="flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
            <motion.span
              animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <ArrowDown size={15} className="text-gold" />
            </motion.span>
            Scroll to explore
          </span>
          <a href="#work" className="group/link flex min-h-11 items-center gap-2 text-sm text-ink transition-colors hover:text-gold-light">
            View selected work
            <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" strokeWidth={1.5} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

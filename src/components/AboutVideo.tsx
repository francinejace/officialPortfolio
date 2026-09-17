"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      videoRef.current?.pause();
    }
  }, [shouldReduceMotion]);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <video
        ref={videoRef}
        autoPlay={!shouldReduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="size-full object-cover object-[center_25%] opacity-45 saturate-[0.65] motion-reduce:hidden"
      >
        <source src="/videos/about.m4v" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-obsidian/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-obsidian/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-obsidian/55" />
    </div>
  );
}

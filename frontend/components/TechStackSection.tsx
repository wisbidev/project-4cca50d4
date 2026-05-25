"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = [
  {
    name: "Next.js",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L2 9l10 7 10-7-10-7zM2 17l10 7 10-7M2 12l10 7 10-7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Go",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 11c-.2 0-.2-.1-.1-.2l.3-.4c.1-.1.2-.1.3 0l.3.4c.1.1.1.2-.1.2h-.7zm-1.3 1.1c-.2 0-.2-.1-.1-.2l.3-.4c.1-.1.2-.1.3 0l.3.4c.1.1.1.2-.1.2h-.7zm-.4 1.1H.9c-.2 0-.2-.1-.1-.2l.3-.4c.1-.1.2-.1.3 0l.3.4c.1.1.1.2-.1.2h.6zm18.2-4.7c-.1-.8-.6-1.3-1.4-1.4-.5 0-.9.1-1.3.4-.2.2-.5.3-.7.2-.1 0-.3-.1-.3-.2v-.3c0-.1 0-.2.1-.2h.4c.2 0 .2-.1.2-.2v-.2c0-.1 0-.2-.1-.3-.4-1-.9-1.4-1.9-1.4-.4 0-.8.1-1.1.3-.2.1-.4.3-.5.5-.1.1-.2.1-.3 0l-.4-.3c-.1-.1-.1-.2 0-.3.4-.5.9-.9 1.6-1.1.8-.2 1.5-.1 2.1.4.4.3.7.8.8 1.4.1.8.2 1.5-.1 2.2-.1.2 0 .3.2.4h.5c.1 0 .2 0 .2-.1.1-.1.1-.2.1-.3v-.5c0-.1 0-.2-.1-.2-.1-.3-.2-.5-.3-.7-.3-.5-.8-.7-1.3-.7-.7 0-1.2.4-1.2 1.1 0 .8.6 1.2 1.6 1.4 1.2.3 2.2-.1 2.7-.9.3-.5.4-1.1.3-1.7 0-.2 0-.3-.2-.3h-.7c-.1 0-.2.1-.2.2l-.1.4z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.83 0 1.5.67 1.5 1.5 0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1 0-.83.67-1.5 1.5-1.5zm-3 3c.83 0 1.5.67 1.5 1.5 0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1 0-.83.67-1.5 1.5-1.5zm6 0c.83 0 1.5.67 1.5 1.5 0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1 0-.83.67-1.5 1.5-1.5zm-9 3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.005 2.002c-5.522 0-9.003 3.002-9.003 7.002 0 2.65 1.35 4.85 3.45 6.05-.25 1.45-.65 2.9-1.05 4.35.6.15 1.2.3 1.8.45.6-.9 1.2-1.8 1.8-2.7.75-1.2 1.5-2.4 2.25-3.6.75 2.25 1.5 4.5 2.25 6.75.6.9 1.2 1.8 1.8 2.7.6-.15 1.2-.3 1.8-.45-.45-1.5-.75-3-.9-4.5 1.05-.6 1.95-1.5 2.7-2.55-.6-.9-1.2-1.8-1.8-2.7 0 .15.15.3.15.45 0 1.05-.9 1.95-1.95 1.95-.9 0-1.65-.6-1.8-1.35-1.05.9-2.1 1.8-3.15 2.7-.75-1.05-1.5-2.1-2.25-3.15-.6 1.05-1.2 2.1-1.8 3.15-.45-.75-.9-1.5-1.35-2.25-.3.6-.6 1.2-.75 1.8-.3-.3-.45-.6-.45-.9 0-.9.75-1.65 1.65-1.65.9 0 1.65.75 1.65 1.65 0 .45-.15.9-.45 1.2.9 0 1.8.15 2.7.45-.45-.9-.9-1.8-1.35-2.7-.3.45-.6.9-.75 1.35-.15-.3-.3-.6-.3-.9 0-.9.75-1.65 1.65-1.65.9 0 1.65.75 1.65 1.65 0 .45-.15.9-.45 1.2.9 0 1.8.15 2.7.45-.45-.9-.9-1.8-1.35-2.7-.3.45-.6.9-.75 1.35-.15-.3-.3-.6-.3-.9 0-.9.75-1.65 1.65-1.65.9 0 1.65.75 1.65 1.65 0 .6-.3 1.05-.75 1.35 1.05.45 1.95 1.05 2.7 1.95-.15-.9-.3-1.8-.6-2.7.45-.6.75-1.35.75-2.25 0-4.002-3.48-7.002-9.003-7.002z" />
      </svg>
    ),
  },
  {
    name: "GitHub Actions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.082.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.185.186v1.887c0 .102.084.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
      </svg>
    ),
  },
];

interface TechStackSectionProps {
  className?: string;
}

export default function TechStackSection({ className = "" }: TechStackSectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="tech-stack" className={`bg-background py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-text">
          Stack hiện đại, sẵn sàng production
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-2 rounded-full border border-slate-700 bg-card px-6 py-3 text-text transition-shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              <span className="flex shrink-0 text-text">{tech.icon}</span>
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

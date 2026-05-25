"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = [
  { name: "Next.js", icon: "▲" },
  { name: "Go", icon: "🐹" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "GitHub Actions", icon: "⚙️" },
  { name: "Docker", icon: "🐳" },
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
              <span className="text-xl" aria-hidden="true">
                {tech.icon}
              </span>
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const technologies = [
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="tech-stack"
      className={`min-h-screen bg-background py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          className="mb-4 text-center text-3xl font-bold text-text sm:text-4xl"
          variants={prefersReducedMotion ? {} : itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Stack hiện đại, sẵn sàng production
        </motion.h2>

        <motion.p
          className="mb-12 text-center text-muted"
          variants={prefersReducedMotion ? {} : itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Sử dụng công nghệ tiên tiến nhất để đảm bảo hiệu suất và độ tin cậy
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="rounded-full border border-slate-700 bg-card px-6 py-3 transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{tech.icon}</span>
                <span className="font-medium text-text">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

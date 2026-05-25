"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    icon: "💬",
    title: "Gửi ý tưởng",
    description: "Gửi yêu cầu bằng tiếng Việt qua Telegram bot",
  },
  {
    icon: "📋",
    title: "AI lên kế hoạch",
    description: "PM agent phân tích và tạo kế hoạch chi tiết",
  },
  {
    icon: "⚙️",
    title: "Dev & Test build",
    description: "Dev agent viết code, TestLead agent viết unit test",
  },
  {
    icon: "🔍",
    title: "Review & merge",
    description: "TL agent review code và merge vào main branch",
  },
  {
    icon: "🚀",
    title: "Deploy production",
    description: "Tự động deploy lên môi trường production",
  },
];

interface PipelineSectionProps {
  className?: string;
}

export default function PipelineSection({ className = "" }: PipelineSectionProps) {
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
        staggerChildren: 0.15,
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
      id="pipeline"
      className={`min-h-screen bg-background py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-text sm:text-4xl"
          variants={prefersReducedMotion ? {} : itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Từ ý tưởng đến deploy hoàn toàn tự động
        </motion.h2>

        <motion.div
          className="relative"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connecting line - desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 lg:block" />

          {/* Grid layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center"
                variants={prefersReducedMotion ? {} : itemVariants}
              >
                {/* Step card */}
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-card text-3xl shadow-lg">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text">
                  {step.title}
                </h3>
                <p className="text-sm text-muted">{step.description}</p>

                {/* Arrow indicator - desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-6 top-10 hidden text-muted lg:block">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

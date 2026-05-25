"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PipelineSectionProps {
  className?: string;
}

const steps = [
  {
    icon: "💬",
    title: "Gửi ý tưởng",
    description: "Gửi yêu cầu qua Telegram bằng tiếng Việt tự nhiên",
  },
  {
    icon: "📋",
    title: "AI lên kế hoạch",
    description: "PM Agent phân tích, estimate và tạo kế hoạch chi tiết",
  },
  {
    icon: "⚙️",
    title: "Dev & Test tự động build",
    description: "Dev Agent viết code, Test Agent kiểm tra tự động",
  },
  {
    icon: "🔍",
    title: "Review & merge",
    description: "TL Agent review và merge code vào repository",
  },
  {
    icon: "🚀",
    title: "Deploy production",
    description: "Hệ thống deploy tự động lên môi trường production",
  },
];

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

  const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => (
    <motion.div
      variants={prefersReducedMotion ? {} : itemVariants}
      className="relative flex flex-1 flex-col items-center text-center"
    >
      {index < steps.length - 1 && (
        <div className="absolute left-1/2 top-10 z-0 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-primary md:block" />
      )}

      <div className="relative z-10 mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-[0_0_20px_rgba(59,130,246,0.3)]">
        <span className="text-3xl">{step.icon}</span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-text">{step.title}</h3>

      <p className="max-w-[200px] text-sm text-muted">{step.description}</p>
    </motion.div>
  );

  return (
    <section id="pipeline" className={`bg-background py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-text md:text-4xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Từ ý tưởng đến deploy hoàn toàn tự động
        </motion.h2>

        <motion.div
          className="flex flex-col gap-8 md:flex-row md:gap-4"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

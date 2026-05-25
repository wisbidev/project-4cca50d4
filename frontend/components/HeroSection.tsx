"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const scrollToPipeline = useCallback(() => {
    const pipelineSection = document.getElementById("pipeline");
    if (pipelineSection) {
      pipelineSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" as const },
    },
  };

  const content = (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #3B82F6 0%, #0A0F1E 100%)",
        }}
      />

      {/* Animated glow effect */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        variants={prefersReducedMotion ? {} : glowVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        variants={prefersReducedMotion ? {} : containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl lg:text-7xl"
          variants={prefersReducedMotion ? {} : itemVariants}
        >
          AI Team. Không cần thuê dev.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mb-10 text-lg text-muted sm:text-xl md:text-2xl"
          variants={prefersReducedMotion ? {} : itemVariants}
        >
          Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh. Không cần quản
          lý team, không cần review code — AI đã lo tất cả.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          variants={prefersReducedMotion ? {} : itemVariants}
        >
          <button
            type="button"
            className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Bắt đầu ngay
          </button>
          <button
            type="button"
            onClick={scrollToPipeline}
            className="rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-primary/10"
          >
            Xem cách hoạt động
          </button>
        </motion.div>
      </motion.div>
    </div>
  );

  return <section className={className}>{content}</section>;
}

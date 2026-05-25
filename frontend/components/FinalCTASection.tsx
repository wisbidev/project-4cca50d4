"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FinalCTASectionProps {
  className?: string;
}

export default function FinalCTASection({ className = "" }: FinalCTASectionProps) {
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

  return (
    <section
      id="final-cta"
      className={`min-h-screen bg-background py-20 ${className}`}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          className="flex flex-col items-center justify-center gap-8"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-text sm:text-4xl lg:text-5xl"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Bắt đầu build sản phẩm với AI team
          </motion.h2>

          <motion.p
            className="text-lg text-muted sm:text-xl"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Không cần thuê dev, không cần quản lý team. Chỉ cần gửi ý tưởng — AI
            sẽ lo nốt phần còn lại.
          </motion.p>

          <motion.a
            href="https://t.me/aiteam_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Chat qua Telegram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

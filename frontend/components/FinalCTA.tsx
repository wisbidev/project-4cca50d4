"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FinalCTAProps {
  className?: string;
}

const TELEGRAM_LINK = "https://t.me/aiteam_bot";

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

export default function FinalCTA({ className = "" }: FinalCTAProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const content = (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <motion.div
        className="mx-auto max-w-3xl"
        variants={prefersReducedMotion ? {} : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="mb-6 text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl"
          variants={prefersReducedMotion ? {} : itemVariants}
        >
          Bắt đầu build sản phẩm với AI team
        </motion.h2>

        <motion.p
          className="mb-10 text-lg text-muted sm:text-xl"
          variants={prefersReducedMotion ? {} : itemVariants}
        >
          Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh. Không cần quản
          lý team, không cần review code — AI đã lo tất cả.
        </motion.p>

        <motion.div variants={prefersReducedMotion ? {} : itemVariants}>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Chat qua Telegram
          </a>
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <section
      id="final-cta"
      className={`min-h-[60vh] bg-background ${className}`}
    >
      {content}
    </section>
  );
}

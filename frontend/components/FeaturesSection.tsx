"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    icon: "💬",
    title: "Telegram chat",
    description: "Gửi yêu cầu bằng tiếng Việt, nhận kết quả realtime",
  },
  {
    icon: "👥",
    title: "Không cần quản lý team",
    description: "AI tự động phân việc, review và test",
  },
  {
    icon: "📦",
    title: "Tự động GitHub repo",
    description: "Code và PR được tạo tự động",
  },
  {
    icon: "💰",
    title: "Estimate trước build",
    description: "Báo giá và thời gian trước khi build",
  },
  {
    icon: "🚀",
    title: "Auto deploy",
    description: "Deploy lên production sau mỗi feature hoàn thành",
  },
  {
    icon: "📈",
    title: "Realtime tracking",
    description: "Theo dõi tiến độ qua Telegram group",
  },
];

interface FeaturesSectionProps {
  className?: string;
}

export default function FeaturesSection({ className = "" }: FeaturesSectionProps) {
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
      id="features"
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
          Tự động hóa toàn bộ quy trình phát triển phần mềm
        </motion.h2>

        <motion.p
          className="mb-12 text-center text-muted"
          variants={prefersReducedMotion ? {} : itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Tất cả trong một nền tảng duy nhất
        </motion.p>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-slate-700 bg-card p-6 transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-600 text-2xl">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text">
                {feature.title}
              </h3>
              <p className="text-sm text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

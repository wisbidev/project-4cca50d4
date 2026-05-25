"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Telegram chat",
    description: "Gửi yêu cầu bằng tiếng Việt, nhận kết quả realtime",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.427-.43c.58-.115.94-.595.94-.892a3.01 3.01 0 0 0-.94-1.07 48.274 48.274 0 0 0-5.343-.431m-10.043 0c.58-.115.94-.595.94-.892a3.01 3.01 0 0 1 .94-1.07 48.274 48.274 0 0 1 5.343.431m6.077 0c.58-.115.94-.595.94-.892a3.01 3.01 0 0 1 .94-1.07 48.274 48.274 0 0 0-5.343-.431m-10.043 0c.58-.115.94-.595.94-.892a3.01 3.01 0 0 1 .94-1.07 48.274 48.274 0 0 1 5.343.431M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      </svg>
    ),
  },
  {
    title: "Không cần quản lý team",
    description: "AI tự động phân việc, review và test",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Tự động GitHub repo",
    description: "Code và PR được tạo tự động",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3 3 8.735 8.735m0 0-.707 2.121a1.5 1.5 0 0 1-2.122 0L3 3m8.735 8.735 2.12-2.121a1.5 1.5 0 0 1 2.122 0L13.5 3M3 3l8.735 8.735m0 0L3 21m8.735-8.735 2.12 2.122M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Estimate trước build",
    description: "Báo giá và thời gian trước khi build",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    title: "Auto deploy",
    description: "Deploy lên production sau mỗi feature hoàn thành",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5c-.105 0-.202.018-.293.056-1.182.5-2.22 1.235-3.038 2.146l-.017.024a2.032 2.032 0 0 0-.22.514 1.88 1.88 0 0 0 .22.514l.016.022c.818.909 1.856 1.646 3.038 2.144.091.038.188.058.294.058h11.5c.106 0 .203-.02.294-.058 1.182-.498 2.22-1.235 3.038-2.144l.017-.022a2.032 2.032 0 0 0 .22-.514 1.88 1.88 0 0 0-.22-.514l-.017-.024c-.818-.911-1.856-1.646-3.038-2.146-.091-.038-.188-.056-.294-.056H6.75Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 17.5v-10c0-1.044.343-1.937.886-2.602a3.99 3.99 0 0 1 1.864-1.327A5.99 5.99 0 0 1 12 2.25c1.323 0 2.542.438 3.54 1.146a4 4 0 0 1 1.864 1.327C17.907 4.563 18.25 5.456 18.25 6.5v10c0 1.044-.343 1.937-.886 2.602a3.99 3.99 0 0 1-1.864 1.327A5.99 5.99 0 0 1 12 21.75a5.99 5.99 0 0 1-5.25-2.946 3.99 3.99 0 0 1-1.864-1.327C4.093 19.437 3.75 18.544 3.75 17.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Realtime tracking",
    description: "Theo dõi tiến độ qua Telegram group",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
];

interface FeaturesProps {
  className?: string;
}

export default function Features({ className = "" }: FeaturesProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className={`bg-background py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-text sm:text-3xl">
          Tự động hóa toàn bộ quy trình phát triển phần mềm
        </h2>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="flex flex-col rounded-lg bg-card p-6 border border-slate-700 transition-shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
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

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AIAgentsProps {
  className?: string;
}

const agents = [
  {
    id: "pm",
    name: "PM",
    icon: "📋",
    responsibilities: [
      "Lên kế hoạch",
      "Quản lý scope",
      "Giao tiếp stakeholder",
    ],
  },
  {
    id: "tl",
    name: "TL",
    fullName: "Technical Lead",
    icon: "🏗️",
    responsibilities: [
      "Thiết kế architecture",
      "Code review",
      "Quyết định tech stack",
    ],
  },
  {
    id: "dev",
    name: "Dev",
    icon: "💻",
    responsibilities: [
      "Implement feature",
      "Viết unit test",
      "Fix bug",
    ],
  },
  {
    id: "test",
    name: "TestLead",
    icon: "🧪",
    responsibilities: [
      "Viết test strategy",
      "Chạy test cases",
      "Đảm bảo quality",
    ],
  },
];

export default function AIAgents({ className = "" }: AIAgentsProps) {
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="ai-agents" className={`bg-background py-20 px-4 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-text sm:text-4xl"
          variants={prefersReducedMotion ? {} : titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          4 AI Agents vận hành như engineering team thật
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              className="rounded-xl border border-slate-700 bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl" role="img" aria-label={agent.name}>
                  {agent.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-text">
                    {agent.name}
                  </h3>
                  {"fullName" in agent && (
                    <p className="text-sm text-muted">{agent.fullName}</p>
                  )}
                </div>
              </div>
              <ul className="space-y-2">
                {agent.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted">
                    <span className="text-primary">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

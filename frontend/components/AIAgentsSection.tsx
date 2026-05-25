"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const agents = [
  {
    name: "PM",
    icon: "📊",
    responsibilities: ["Lên kế hoạch", "Quản lý scope", "Giao tiếp stakeholder"],
  },
  {
    name: "Technical Lead",
    icon: "🔧",
    responsibilities: ["Thiết kế kiến trúc", "Review code", "Đảm bảo chất lượng"],
  },
  {
    name: "Dev",
    icon: "💻",
    responsibilities: ["Implement feature", "Viết unit test", "Fix bug"],
  },
  {
    name: "TestLead",
    icon: "🧪",
    responsibilities: ["Viết test plan", "Kiểm tra chất lượng", "Đảm bảo coverage"],
  },
];

interface AIAgentsSectionProps {
  className?: string;
}

export default function AIAgentsSection({ className = "" }: AIAgentsSectionProps) {
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
      id="ai-agents"
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
          4 AI Agents vận hành như engineering team thật
        </motion.h2>

        <motion.p
          className="mb-12 text-center text-muted"
          variants={prefersReducedMotion ? {} : itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Mỗi agent được train riêng biệt để đảm bảo chất lượng code
        </motion.p>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              className="group rounded-xl border border-slate-700 bg-card p-6 transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl">{agent.icon}</span>
                <h3 className="text-xl font-semibold text-text">{agent.name}</h3>
              </div>
              <ul className="space-y-2">
                {agent.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted">
                    <span className="text-primary">•</span>
                    {resp}
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

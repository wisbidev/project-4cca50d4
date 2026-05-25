import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        background: "#0A0F1E",
        card: "#1E293B",
        muted: "#94A3B8",
        text: "#F8FAFC",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(180deg, #3B82F6 0%, #0A0F1E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

# Architecture — aiteam Landing Page

## Overview

Static marketing landing page for the aiteam platform. Next.js + Tailwind CSS, dark mode, responsive mobile-first. No backend — Telegram bot is a separate service.

---

## Tech Stack

| Layer     | Choice          | Reason |
| --------- | --------------- | ------ |
| Framework | Next.js 14+ (App Router) | File-based routing, SSG/SSR, Vercel deploy |
| Styling   | Tailwind CSS v3 | Utility-first, matches design system, no runtime cost |
| Animation | Framer Motion  | Scroll-triggered fade/slide, stagger grids |
| Font      | Inter (Google Fonts, `next/font`) | System-compatible, consistent across OS |
| Deploy    | Vercel         | Zero-config Next.js hosting |

No backend. Telegram integration is handled by a separate service.

---

## Folder Structure

```
frontend/               # Next.js application root
├── app/
│   ├── layout.tsx      # Root layout: fonts, metadata, globals
│   ├── page.tsx        # Landing page (all 7 sections)
│   ├── globals.css     # Tailwind directives + custom CSS vars
│   └── favicon.ico
├── components/
│   ├── Hero.tsx
│   ├── Pipeline.tsx
│   ├── AIAgents.tsx
│   ├── Features.tsx
│   ├── TechStack.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── public/
│   └── (static assets if needed)
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json

docs/
├── SRS.md
└── architecture.md     # this file

README.md               # setup/run instructions at repo root
```

---

## Design Decisions

### Colors
| Token     | Hex       | Usage |
| --------- | --------- | ----- |
| `primary` | `#3B82F6` | Buttons, glow, accents |
| `bg`      | `#0A0F1E` | Page background |
| `card`    | `#1E293B` | Card backgrounds |
| `muted`   | `#94A3B8` | Secondary text |
| `text`    | `#F8FAFC` | Primary text |

### Typography
- Font: Inter (loaded via `next/font/google`)
- Heading scale: `text-4xl` → `text-6xl` for hero; `text-2xl` → `text-3xl` for section titles
- Body: `text-base` / `text-lg`

### Animations (Framer Motion)
- **Scroll-triggered**: `fadeInUp` variant — `opacity: 0 → 1`, `y: 30 → 0`, `duration: 0.5s`
- **Stagger**: `staggerChildren: 0.1s` on grid sections (Agents, Features, Tech badges)
- **Hover glow**: `box-shadow: 0 0 20px rgba(59, 130, 246, 0.4)` on agent/feature cards
- **Respect `prefers-reduced-motion`**: disable all transitions when set

### Responsive Breakpoints
| Breakpoint | Width   | Layout changes |
| ---------- | ------- | -------------- |
| `sm`       | 640px   | — |
| `md`       | 768px   | Pipeline: horizontal → vertical |
| `lg`       | 1024px  | Agent grid: 1-col → 2×2; Features: 1-col → 3×2 |

---

## Naming Conventions

| Convention | Rule | Example |
| ---------- | ---- | ------- |
| Components | PascalCase, one per file, match filename | `AIAgents.tsx` |
| CSS classes | Tailwind utilities — no custom class names for layout | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| Section IDs | kebab-case, used for anchor scroll | `id="ai-agents"` |
| Props | interface named `{ComponentName}Props` | `AIAgentsProps` |
| Images | `{descriptive-name}.{ext}` in `public/` | `hero-gradient.png` |

---

## SEO & Metadata

`app/layout.tsx` exports a root `metadata` object:

```ts
export const metadata: Metadata = {
  title: "AI Team — Build phần mềm tự động qua Telegram",
  description: "Nền tảng AI tự động build phần mảm. Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh.",
  openGraph: { ... },
  twitter: { ... },
}
```

Favicon: `app/favicon.ico`.

---

## Performance Targets

| Metric | Target |
| ------ | ------ |
| Lighthouse Score | ≥ 90 desktop all categories |
| CLS | < 0.1 (font fallbacks preloaded) |
| LCP | < 2.5s |

---

## Environment Variables

This project does not require any environment variables — it is a fully static marketing page with no backend communication.

Telegram bot link (`https://t.me/aiteam_bot`) is hardcoded in `FinalCTA.tsx` and `Footer.tsx`. If the bot username changes, update both files.

---

## Accessibility

- Minimum contrast ratio 4.5:1 for all body text.
- All interactive elements keyboard-navigable.
- `prefers-reduced-motion` respected in all Framer Motion animations.
- Semantic HTML: `<main>`, `<section>`, `<header>`, `<footer>`, `<nav>` used appropriately.

---

## Deployment

- Target: **Vercel**
- Build command: `next build`
- Output: static export (`output: 'export'` in `next.config.ts` if needed; otherwise SSR/SSG as default)
- No server-side runtime required

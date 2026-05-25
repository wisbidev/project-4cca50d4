# Software Requirements Specification — AI Team Landing Page

## 1. Overview

A landing page for the **aiteam** platform — an AI-powered system that autonomously builds software via Telegram. The page introduces the concept, explains the pipeline, showcases the four AI agents (PM, TL, Dev, TestLead), lists features, and drives visitors to start via Telegram. Dark-mode design, responsive mobile-first, built with Next.js + Tailwind CSS.

## 2. Tech Stack

| Layer     | Technology        |
| --------- | ----------------- |
| Framework | Next.js (App Router) |
| Styling   | Tailwind CSS       |
| Animation | Framer Motion      |
| Font      | Inter (system sans) |
| Deploy    | Vercel (target)    |

## 3. Functional Requirements

### F1 — Hero Section

- Full-viewport height hero with dark background and blue gradient overlay (`#3B82F6` to `#0A0F1E`).
- Headline: **"AI Team. Không cần thuê dev."** — large bold typography, white text.
- Subheadline: 1–2 sentences explaining the platform in Vietnamese.
- Two CTA buttons:
  - Primary: **"Bắt đầu ngay"** — solid blue (`#3B82F6`), white text, rounded.
  - Secondary: **"Xem cách hoạt động"** — outlined style, scrolls to Pipeline section.
- Optional: subtle floating particles or glow effect behind the headline.

### F2 — Pipeline / How It Works

- Section title: **"Từ ý tưởng đến deploy hoàn toàn tự động"**
- 5 sequential steps displayed as a timeline or horizontal step cards:
  1. Gửi ý tưởng qua Telegram
  2. AI lên kế hoạch & estimate
  3. Dev & Test tự động build
  4. Review & merge
  5. Deploy production
- Each step has: an icon (emoji or SVG), short title (≤4 words), description (≤15 words).
- Connecting line or arrow between steps.

### F3 — AI Agents Section

- Section title: **"4 AI Agents vận hành như engineering team thật"**
- 4-card grid (2×2 on desktop, 1-column on mobile).
- Cards for: **PM**, **TL** (Technical Lead), **Dev**, **TestLead**.
- Each card contains:
  - Agent name + icon.
  - 3 responsibility bullets (e.g. PM: Lên kế hoạch, Quản lý scope, Giao tiếp stakeholder).
- Card styling: dark card (`#1E293B`), light border (`#334155`), **hover glow** in blue (`#3B82F6` box-shadow).
- Subtle fade-in animation on scroll.

### F4 — Features Section

- Section title: **"Tự động hóa toàn bộ quy trình phát triển phần mềm"**
- 6 feature cards in a responsive grid (3×2 desktop, 2×3 tablet, 1-column mobile).
- Each card has an outline icon and a short title + 1-line description:
  1. **Telegram chat** — Gửi yêu cầu bằng tiếng Việt, nhận kết quả realtime.
  2. **Không cần quản lý team** — AI tự động phân việc, review và test.
  3. **Tự động GitHub repo** — Code và PR được tạo tự động.
  4. **Estimate trước build** — Báo giá và thời gian trước khi build.
  5. **Auto deploy** — Deploy lên production sau mỗi feature hoàn thành.
  6. **Realtime tracking** — Theo dõi tiến độ qua Telegram group.

### F5 — Tech Stack Section

- Section title: **"Stack hiện đại, sẵn sàng production"**
- Pill/badge cards for 6 technologies: **Next.js**, **Go**, **PostgreSQL**, **Tailwind CSS**, **GitHub Actions**, **Docker**.
- Each badge shows the tech name and optionally a small icon/logo.
- Badges arranged in a flex wrap row, centered.

### F6 — Final CTA Section

- Dark background, full-width section.
- Strong headline: **"Bắt đầu build sản phẩm với AI team"**
- Subheadline: encouraging text in Vietnamese.
- Single CTA button: **"Chat qua Telegram"** — links to `https://t.me/aiteam_bot` (or actual Telegram link).
- Button styling: prominent, blue (`#3B82F6`), large padding, hover glow.

### F7 — Footer

- Dark background (`#0A0F1E`).
- Contains: aiteam logo (text or small SVG), Telegram link, GitHub link, copyright text (e.g. `© 2025 aiteam. All rights reserved.`).
- Layout: logo left, links right, copyright centered below on mobile.

### F8 — Responsive & Animations

- **Mobile-first** responsive design for all sections.
- Breakpoints: sm (640px), md (768px), lg (1024px).
- Animations via **Framer Motion**:
  - Fade-in + slide-up (translateY 30px → 0) on scroll into view.
  - Stagger children for grids (cards appear one after another).
- Hover glow effect (`box-shadow: 0 0 20px rgba(59, 130, 246, 0.4)`) on agent cards and feature cards.
- Smooth scroll on anchor links.

### F9 — SEO & Metadata

- Next.js `metadata` export with:
  - `title`: "AI Team — Build phần mềm tự động qua Telegram"
  - `description`: "Nền tảng AI tự động build phần mềm. Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh."
  - `lang`: "vi"
  - Open Graph tags: `og:title`, `og:description`, `og:image`, `og:type: website`.
  - Twitter card tags.
- Favicon at `app/favicon.ico`.

## 4. Design

Design: see attached spec

**Colors** (from project memory):
- Primary: `#3B82F6` (blue)
- Background: `#0A0F1E` (dark navy)
- Card: `#1E293B` (slate-800)
- Muted text: `#94A3B8` (slate-400)
- Text: `#F8FAFC` (slate-50)

**Pages/Sections**: Hero, Pipeline, AI Agents, Features, Tech Stack, Final CTA, Footer

## 5. Non-Functional Requirements

- **Performance**: Lighthouse score ≥ 90 for all categories on desktop.
- **SEO**: Valid Open Graph and Twitter card meta tags.
- **Accessibility**: Minimum contrast ratio 4.5:1 for body text.
- **Responsiveness**: No horizontal scroll on any device width ≥ 320px.
- **Animations**: `prefers-reduced-motion` respected — disable animations when set.

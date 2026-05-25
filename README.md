# AI Team Landing Page

AI-powered software development platform landing page. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion
- **Font**: Inter (system sans)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   └── HeroSection.tsx # Hero section component
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Design System

| Token      | Value     | Usage                    |
|------------|-----------|--------------------------|
| Primary    | #3B82F6   | Buttons, accents         |
| Background | #0A0F1E   | Page background          |
| Card       | #1E293B   | Card backgrounds         |
| Muted      | #94A3B8   | Secondary text           |
| Text       | #F8FAFC   | Primary text             |

## Sections

1. **Hero** - Full-viewport hero with headline, subheadline, and CTAs
2. **Pipeline** - 5-step timeline explaining the process
3. **AI Agents** - 4-card grid showcasing PM, TL, Dev, TestLead
4. **Features** - 6 feature cards
5. **Tech Stack** - Technology badges
6. **Final CTA** - Call-to-action section
7. **Footer** - Logo, links, copyright

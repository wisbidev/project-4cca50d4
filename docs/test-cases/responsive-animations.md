# Test Cases — Responsive & Animations (F8)

## Responsive — Mobile-first layout

**Scenario**: Mobile viewport — sections stack in single column
**Given**: The page is viewed on a device with viewport width ≤ 639px
**When**: The page renders
**Then**: Every section (Hero, Pipeline, AI Agents, Features, Tech Stack, Final CTA, Footer) stacks content in a single column with no horizontal scroll

**Scenario**: Tablet viewport — grid sections adapt to 2 columns
**Given**: The page is viewed on a device with viewport width 640px–1023px
**When**: The page renders
**Then**: The Features section grid displays 2 columns (grid-cols-2), AI Agents section adapts layout, and all content fits without horizontal scroll

**Scenario**: Desktop viewport — grid sections show full layout
**Given**: The page is viewed on a device with viewport width ≥ 1024px
**When**: The page renders
**Then**: The Features section displays 3 columns (grid-cols-3), AI Agents section displays 2 columns (lg:grid-cols-2), and all content is properly aligned

**Scenario**: CTA buttons stack on mobile, side-by-side on larger screens
**Given**: The Hero section is visible
**When**: On viewport width ≤ 639px, the two CTA buttons display stacked vertically; on viewport width ≥ 640px they display side-by-side
**Then**: The layout matches the responsive breakpoint behavior

**Scenario**: Footer layout adapts at md breakpoint
**Given**: The Footer section is visible
**When**: On viewport width < 768px, logo and links are centered; on viewport width ≥ 768px, logo is left-aligned and links are right-aligned
**Then**: The layout matches the expected responsive behavior

## Animations — Framer Motion fade-in & slide-up

**Scenario**: Sections fade in and slide up on scroll into view
**Given**: The page is loaded and the user scrolls down
**When**: Each section (Hero, Pipeline, AI Agents, Features, Tech Stack, Final CTA, Footer) enters the viewport
**Then**: The section animates in with a fade-in and slide-up (translateY 30px → 0) effect via Framer Motion whileInView

**Scenario**: Grid cards stagger into view one after another
**Given**: A section with a card grid (Features, AI Agents) scrolls into view
**When**: The section becomes visible
**Then**: Child cards animate in sequentially with a stagger delay rather than all at once

## Animations — Hover glow on cards

**Scenario**: Feature card shows blue glow on hover
**Given**: A feature card is rendered in the Features section
**When**: The user hovers the mouse over the card
**Then**: The card displays a blue glow box-shadow: 0 0 20px rgba(59, 130, 246, 0.4)

**Scenario**: Agent card shows blue glow on hover
**Given**: An AI agent card (PM, TL, Dev, or TestLead) is rendered in the AI Agents section
**When**: The user hovers the mouse over the card
**Then**: The card displays a blue glow box-shadow: 0 0 20px rgba(59, 130, 246, 0.4)

**Scenario**: Final CTA button shows blue glow on hover
**Given**: The Final CTA "Chat qua Telegram" button is rendered
**When**: The user hovers the mouse over the button
**Then**: The button displays a blue glow box-shadow: 0 0 20px rgba(59, 130, 246, 0.4)

## Animations — prefers-reduced-motion

**Scenario**: All animations are disabled when user prefers reduced motion
**Given**: The user's system has prefers-reduced-motion: reduce set
**When**: The page loads and the user scrolls
**Then**: No Framer Motion animations play — all sections and cards appear instantly without fade-in, slide-up, or stagger effects

## Responsive — No horizontal scroll

**Scenario**: No horizontal scroll on any device width ≥ 320px
**Given**: The page is loaded
**When**: The viewport is resized to any width between 320px and 1920px
**Then**: No horizontal scrollbar appears and no content is clipped off-screen horizontally

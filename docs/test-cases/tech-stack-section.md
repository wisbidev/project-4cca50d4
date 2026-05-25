# Test Cases — Tech Stack Section

## Section Rendering

**Scenario**: Section renders with correct title
**Given**: The Tech Stack section is in view
**When**: The page loads and scrolls to the Tech Stack section
**Then**: The section displays the title "Stack hiện đại, sẵn sàng production"

**Scenario**: Section has correct section ID
**Given**: The Tech Stack component is rendered
**When**: Inspecting the section element
**Then**: The section has `id="tech-stack"`

## Tech Badge Cards — Content

**Scenario**: All 6 technology badges are rendered
**Given**: The Tech Stack section is visible
**When**: Counting the badge cards inside the section
**Then**: Exactly 6 technology badges are displayed

**Scenario**: Badge 1 — Next.js
**Given**: The Tech Stack section is visible
**When**: Looking at the first badge
**Then**: The badge shows the text "Next.js"

**Scenario**: Badge 2 — Go
**Given**: The Tech Stack section is visible
**When**: Looking at the second badge
**Then**: The badge shows the text "Go"

**Scenario**: Badge 3 — PostgreSQL
**Given**: The Tech Stack section is visible
**When**: Looking at the third badge
**Then**: The badge shows the text "PostgreSQL"

**Scenario**: Badge 4 — Tailwind CSS
**Given**: The Tech Stack section is visible
**When**: Looking at the fourth badge
**Then**: The badge shows the text "Tailwind CSS"

**Scenario**: Badge 5 — GitHub Actions
**Given**: The Tech Stack section is visible
**When**: Looking at the fifth badge
**Then**: The badge shows the text "GitHub Actions"

**Scenario**: Badge 6 — Docker
**Given**: The Tech Stack section is visible
**When**: Looking at the sixth badge
**Then**: The badge shows the text "Docker"

## Tech Badge Cards — Visual

**Scenario**: Each badge displays a small icon or logo
**Given**: A technology badge is rendered
**When**: Inspecting the badge's content
**Then**: The badge contains a small icon/logo before or beside the technology name

**Scenario**: Badges are styled as pill cards
**Given**: A technology badge is rendered
**When**: Inspecting the badge styling
**Then**: The badge has rounded/pill shape, dark card background (`#1E293B`), and light border (`#334155`)

**Scenario**: Badges arranged in a centered flex wrap row
**Given**: The Tech Stack section is rendered
**When**: Checking the badge container layout
**Then**: Badges are arranged in a flex wrap row, centered, that wraps to multiple rows on narrow screens

## Animations & Interaction

**Scenario**: Badges fade in on scroll with stagger
**Given**: The page has just loaded and the Tech Stack section is below the viewport
**When**: Scrolling down until the Tech Stack section enters the viewport
**Then**: Technology badges animate in with a fade-in and slide-up effect, staggered one after another

**Scenario**: Hover glow effect on badges
**Given**: A technology badge is visible
**When**: Hovering the cursor over the badge
**Then**: The badge shows a blue glow effect (`box-shadow` with `#3B82F6`)

**Scenario**: Animations disabled when prefers-reduced-motion is set
**Given**: The user's system has `prefers-reduced-motion: reduce` enabled
**When**: The page loads and the Tech Stack section enters the viewport
**Then**: Technology badges appear immediately without fade/slide animations

## Responsive

**Scenario**: Badges wrap on narrow screens
**Given**: The Tech Stack section is rendered
**When**: Viewing at 375px viewport width
**Then**: Badges wrap to multiple centered rows without causing horizontal scroll

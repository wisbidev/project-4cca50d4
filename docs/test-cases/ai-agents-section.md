# Test Cases: AI Agents Section

## F3 — AI Agents Section

### Scenario 1: Section renders with title and 4-agent grid (desktop)
**Given**: The landing page is loaded at any viewport width ≥ 1024px
**When**: The user scrolls to the AI Agents section
**Then**: The section displays the title **"4 AI Agents vận hành như engineering team thật"** and a 2×2 grid of 4 agent cards (PM, TL, Dev, TestLead) with fade-in animation

### Scenario 2: Each agent card shows name, icon, and 3 responsibility bullets
**Given**: The AI Agents section is visible
**When**: The user reads the PM agent card
**Then**: The card shows the agent name **"PM"**, an icon, and 3 bullet responsibilities: Lên kế hoạch, Quản lý scope, Giao tiếp stakeholder
**When**: The user reads the TL agent card
**Then**: The card shows **"TL"** (or **"Technical Lead"**), an icon, and 3 bullets: Thiết kế architecture, Code review, Quyết định tech stack
**When**: The user reads the Dev agent card
**Then**: The card shows **"Dev"**, an icon, and 3 bullets: Implement feature, Viết unit test, Fix bug
**When**: The user reads the TestLead agent card
**Then**: The card shows **"TestLead"**, an icon, and 3 bullets: Viết test strategy, Chạy test cases, Đảm bảo quality

### Scenario 3: Cards have dark card styling with light border
**Given**: The AI Agents section is visible
**When**: The user inspects any agent card
**Then**: The card has a dark background (`#1E293B`), a light border (`#334155`), and rounded corners

### Scenario 4: Hover glow effect on agent cards
**Given**: The user is viewing an agent card
**When**: The user hovers the cursor over an agent card
**Then**: The card displays a blue glow shadow (`box-shadow` with `#3B82F6` at ~0.4 opacity), and the border color changes to blue

### Scenario 5: Responsive 1-column layout on mobile
**Given**: The page is viewed at a viewport width < 640px
**When**: The user scrolls to the AI Agents section
**Then**: The 4 agent cards are stacked in a single column layout (not a 2×2 grid)

### Scenario 6: Fade-in animation on scroll
**Given**: The page is loaded and the AI Agents section is below the viewport
**When**: The user scrolls down until the section enters the viewport
**Then**: The section title and cards animate in with a fade-in + slide-up effect, with cards appearing in staggered sequence

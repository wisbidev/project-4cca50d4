# Test Cases — Pipeline / How It Works

## Happy Path Scenarios

**Scenario**: Section title renders correctly
**Given**: The Pipeline section is rendered on the landing page
**When**: The user scrolls to or views the Pipeline section
**Then**: The section title "Từ ý tưởng đến deploy hoàn toàn tự động" is displayed prominently

---

**Scenario**: All 5 steps are displayed
**Given**: The Pipeline section is visible
**When**: The user views the step cards / timeline
**Then**: Exactly 5 steps are shown in sequential order:
1. Gửi ý tưởng qua Telegram
2. AI lên kế hoạch & estimate
3. Dev & Test tự động build
4. Review & merge
5. Deploy production

---

**Scenario**: Each step has an icon
**Given**: A step card in the Pipeline section
**When**: The user inspects the step card
**Then**: The card displays an icon (emoji or SVG) representing that step

---

**Scenario**: Each step has a short title (≤4 words)
**Given**: A step card in the Pipeline section
**When**: The user reads the step title
**Then**: The title is no more than 4 words and clearly describes the step

---

**Scenario**: Each step has a short description (≤15 words)
**Given**: A step card in the Pipeline section
**When**: The user reads the step description
**Then**: The description is no more than 15 words and explains what happens at that step

---

**Scenario**: Steps are connected visually
**Given**: The Pipeline section displays all 5 steps
**When**: The user views the layout
**Then**: There is a connecting line or arrow between consecutive steps, indicating the flow from step 1 to step 5

---

**Scenario**: Steps appear with fade-in animation on scroll
**Given**: The Pipeline section is initially below the viewport
**When**: The user scrolls down so the section enters the viewport
**Then**: The steps fade in and slide up (translateY 30px → 0) with a stagger effect

---

**Scenario**: Section is responsive on mobile
**Given**: The page is viewed on a mobile device (viewport width ≥ 320px)
**When**: The user scrolls to the Pipeline section
**Then**: All 5 steps are readable, no horizontal scroll is needed, and the layout adapts (e.g., vertical timeline or stacked cards)

---

**Scenario**: Section responds to prefers-reduced-motion
**Given**: The user has set their system accessibility preference to "reduce motion"
**When**: The user scrolls to the Pipeline section
**Then**: The steps appear without fade-in/slide-up animation (no motion)

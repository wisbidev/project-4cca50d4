# Test Cases — Footer Section

## Prerequisites
- Page loaded at `/` (landing page)
- Footer is the last section, visible after scrolling to the bottom of the page

---

**Scenario**: Footer displays aiteam logo
**Given**: The page has fully loaded
**When**: The user scrolls to the Footer section
**Then**: The aiteam logo (text or SVG) is visible and rendered in the Footer

---

**Scenario**: Footer contains Telegram link
**Given**: The Footer section is visible
**When**: The user inspects the Footer's link area
**Then**: A link pointing to `https://t.me/aiteam_bot` (or the official aiteam Telegram) is displayed and clickable

---

**Scenario**: Footer contains GitHub link
**Given**: The Footer section is visible
**When**: The user inspects the Footer's link area
**Then**: A link to the aiteam GitHub repository is displayed and clickable

---

**Scenario**: Footer displays copyright text
**Given**: The Footer section is visible
**When**: The user reads the Footer content
**Then**: Copyright text (e.g. `© 2025 aiteam. All rights reserved.`) is displayed

---

**Scenario**: Footer has dark background
**Given**: The Footer section is visible
**When**: The user views the Footer background
**Then**: The background color matches the design's dark navy (`#0A0F1E` / `bg-[#0A0F1E]`)

---

**Scenario**: Footer layout — logo left, links right (desktop)
**Given**: The viewport width is 1024px or wider
**When**: The user views the Footer
**Then**: The aiteam logo is positioned on the left side, and the Telegram/GitHub links are positioned on the right side

---

**Scenario**: Footer layout — copyright centered (mobile)
**Given**: The viewport width is less than 640px
**When**: The user views the Footer
**Then**: The copyright text is centered below the logo and links section

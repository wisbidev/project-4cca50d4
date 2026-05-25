# Test Cases — Footer

## F7 — Footer

**Scenario**: Footer has dark background
**Given**: The landing page is fully loaded
**When**: The Footer section is visible at the bottom of the page
**Then**: The Footer has a dark background (`#0A0F1E`)

**Scenario**: Footer displays aiteam logo
**Given**: The Footer is visible
**When**: The page renders
**Then**: The aiteam logo (text or small SVG) appears on the left side of the Footer

**Scenario**: Footer contains a Telegram link
**Given**: The Footer is visible
**When**: The page renders
**Then**: A Telegram link/icon is displayed that links to `https://t.me/aiteam_bot` (or the actual aiteam Telegram link)

**Scenario**: Footer contains a GitHub link
**Given**: The Footer is visible
**When**: The page renders
**Then**: A GitHub link/icon is displayed linking to the aiteam GitHub repository

**Scenario**: Footer displays copyright text
**Given**: The Footer is visible
**When**: The page renders
**Then**: Copyright text (e.g. `© 2025 aiteam. All rights reserved.`) is displayed in muted (`#94A3B8`) text color

**Scenario**: Responsive layout — logo left, links right on desktop
**Given**: The page is viewed on a desktop viewport (≥ 1024px)
**When**: The Footer renders
**Then**: The aiteam logo is positioned on the left, Telegram and GitHub links are positioned on the right, and copyright text is centered below

**Scenario**: Responsive layout — copyright centered below on mobile
**Given**: The page is viewed on a mobile viewport (width < 640px)
**When**: The Footer renders
**Then**: All elements stack or reflow cleanly with no horizontal overflow, and copyright text is centered below the logo and links

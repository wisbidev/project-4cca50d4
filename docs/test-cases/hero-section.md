# Test Cases — Hero Section

## F1 — Hero Section

**Scenario**: Full-viewport hero renders with correct background
**Given**: The landing page is loaded
**When**: The Hero section is visible in the viewport
**Then**: The section takes full viewport height, has a dark background (`#0A0F1E`) with a blue gradient overlay (`#3B82F6` to `#0A0F1E`), and no horizontal scroll

**Scenario**: Headline displays with correct text and styling
**Given**: The Hero section is visible
**When**: The page renders
**Then**: The headline reads **"AI Team. Không cần thuê dev."** in large bold white (`#F8FAFC`) typography

**Scenario**: Subheadline explains the platform in Vietnamese
**Given**: The Hero section is visible
**When**: The page renders
**Then**: A subheadline of 1–2 sentences in Vietnamese describing the platform is displayed beneath the headline

**Scenario**: Primary CTA button "Bắt đầu ngay" is visible and styled
**Given**: The Hero section is visible
**When**: The page renders
**Then**: A primary CTA button labeled **"Bắt đầu ngay"** is shown with solid blue background (`#3B82F6`), white text, and rounded corners

**Scenario**: Secondary CTA button "Xem cách hoạt động" is visible
**Given**: The Hero section is visible
**When**: The page renders
**Then**: A secondary CTA button labeled **"Xem cách hoạt động"** is shown with outlined style

**Scenario**: Secondary CTA scrolls to Pipeline section on click
**Given**: The Hero section is visible
**When**: The user clicks the "Xem cách hoạt động" button
**Then**: The page smoothly scrolls to the Pipeline section

**Scenario**: Responsive layout on mobile
**Given**: The page is viewed on a mobile device (viewport width < 640px)
**When**: The Hero section renders
**Then**: All text is readable, CTAs are stacked vertically if they don't fit side-by-side, and the section has no horizontal overflow

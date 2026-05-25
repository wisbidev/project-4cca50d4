# Test Cases: Features Section

## F4 — Features Section

### Scenario 1: Section renders with title and 6-card grid (desktop)
**Given**: The landing page is loaded at any viewport width ≥ 1024px
**When**: The user scrolls to the Features section
**Then**: The section displays the title **"Tự động hóa toàn bộ quy trình phát triển phần mềm"** and a 3×2 grid of 6 feature cards, each with an outline icon and title, with fade-in animation

### Scenario 2: Each feature card shows icon, title, and description
**Given**: The Features section is visible
**When**: The user reads the first feature card
**Then**: The card shows an outline icon, the title **"Telegram chat"**, and the description "Gửi yêu cầu bằng tiếng Việt, nhận kết quả realtime"
**When**: The user reads the second feature card
**Then**: The card shows an outline icon, the title **"Không cần quản lý team"**, and the description "AI tự động phân việc, review và test"
**When**: The user reads the third feature card
**Then**: The card shows an outline icon, the title **"Tự động GitHub repo"**, and the description "Code và PR được tạo tự động"
**When**: The user reads the fourth feature card
**Then**: The card shows an outline icon, the title **"Estimate trước build"**, and the description "Báo giá và thời gian trước khi build"
**When**: The user reads the fifth feature card
**Then**: The card shows an outline icon, the title **"Auto deploy"**, and the description "Deploy lên production sau mỗi feature hoàn thành"
**When**: The user reads the sixth feature card
**Then**: The card shows an outline icon, the title **"Realtime tracking"**, and the description "Theo dõi tiến độ qua Telegram group"

### Scenario 3: Cards have dark card styling with light border
**Given**: The Features section is visible
**When**: The user inspects any feature card
**Then**: The card has a dark background (`#1E293B`), a light border (`#334155`), and rounded corners

### Scenario 4: Hover glow effect on feature cards
**Given**: The user is viewing a feature card
**When**: The user hovers the cursor over a feature card
**Then**: The card displays a blue glow shadow (`box-shadow` with `#3B82F6` at ~0.4 opacity), and the border color transitions to blue

### Scenario 5: Responsive — 2-column grid on tablet, 1-column on mobile
**Given**: The page is viewed at a viewport width between 640px and 1023px
**When**: The user scrolls to the Features section
**Then**: The 6 feature cards are displayed in a 2×3 grid (2 columns)
**Given**: The page is viewed at a viewport width < 640px
**When**: The user scrolls to the Features section
**Then**: The 6 feature cards are stacked in a single column layout

### Scenario 6: Fade-in stagger animation on scroll
**Given**: The page is loaded and the Features section is below the viewport
**When**: The user scrolls down until the section enters the viewport
**Then**: The section title and feature cards animate in with a fade-in + slide-up effect, with cards appearing in staggered sequence

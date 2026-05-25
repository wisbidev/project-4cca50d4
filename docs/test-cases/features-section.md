# Test Cases — Features Section

## Section Rendering

**Scenario**: Section renders with correct title
**Given**: The Features section is in view
**When**: The page loads and scrolls to the Features section
**Then**: The section displays the title "Tự động hóa toàn bộ quy trình phát triển phần mềm"

**Scenario**: Section has correct section ID
**Given**: The Features component is rendered
**When**: Inspecting the section element
**Then**: The section has `id="features"`

## Feature Cards — Content

**Scenario**: All 6 feature cards are rendered
**Given**: The Features section is visible
**When**: Counting the feature cards inside the section
**Then**: Exactly 6 feature cards are displayed

**Scenario**: Card 1 — Telegram chat
**Given**: The Features section is visible
**When**: Looking at the first feature card
**Then**: The card shows title "Telegram chat" and description "Gửi yêu cầu bằng tiếng Việt, nhận kết quả realtime"

**Scenario**: Card 2 — Không cần quản lý team
**Given**: The Features section is visible
**When**: Looking at the second feature card
**Then**: The card shows title "Không cần quản lý team" and description "AI tự động phân việc, review và test"

**Scenario**: Card 3 — Tự động GitHub repo
**Given**: The Features section is visible
**When**: Looking at the third feature card
**Then**: The card shows title "Tự động GitHub repo" and description "Code và PR được tạo tự động"

**Scenario**: Card 4 — Estimate trước build
**Given**: The Features section is visible
**When**: Looking at the fourth feature card
**Then**: The card shows title "Estimate trước build" and description "Báo giá và thời gian trước khi build"

**Scenario**: Card 5 — Auto deploy
**Given**: The Features section is visible
**When**: Looking at the fifth feature card
**Then**: The card shows title "Auto deploy" and description "Deploy lên production sau mỗi feature hoàn thành"

**Scenario**: Card 6 — Realtime tracking
**Given**: The Features section is visible
**When**: Looking at the sixth feature card
**Then**: The card shows title "Realtime tracking" and description "Theo dõi tiến độ qua Telegram group"

## Feature Cards — Visual

**Scenario**: Each card displays an outline icon
**Given**: A feature card is rendered
**When**: Inspecting the card's content
**Then**: The card contains an outline-style icon (SVG) before the title

**Scenario**: Cards render in a responsive grid layout
**Given**: The Features section is rendered
**When**: Checking the grid layout at different viewports
**Then**: Cards are arranged as 1 column on mobile (< 640px), 2 columns on tablet (640–1023px), and 3 columns on desktop (≥ 1024px)

## Animations & Interaction

**Scenario**: Cards fade in on scroll
**Given**: The page has just loaded and the Features section is below the viewport
**When**: Scrolling down until the Features section enters the viewport
**Then**: Feature cards animate in with a fade-in and slide-up effect, staggered one after another

**Scenario**: Hover glow effect on cards
**Given**: A feature card is visible
**When**: Hovering the cursor over the card
**Then**: The card shows a blue glow effect (`box-shadow` with `#3B82F6`)

**Scenario**: Animations disabled when prefers-reduced-motion is set
**Given**: The user's system has `prefers-reduced-motion: reduce` enabled
**When**: The page loads and the Features section enters the viewport
**Then**: Feature cards appear immediately without fade/slide animations

## Responsive

**Scenario**: No horizontal scroll on mobile
**Given**: The Features section is rendered
**When**: Viewing at 320px viewport width
**Then**: All feature cards fit without causing horizontal scroll

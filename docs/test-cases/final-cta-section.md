# Test Cases — Final CTA Section

## F6 — Final CTA Section

### Happy Path Scenarios

---

**Scenario**: Section renders with correct headline and subheadline
**Given**: The landing page is loaded
**When**: The Final CTA section scrolls into view
**Then**: The section displays the headline "Bắt đầu build sản phẩm với AI team" and a Vietnamese subheadline encouraging the user to start

---

**Scenario**: CTA button displays correct label
**Given**: The Final CTA section is visible
**When**: The user views the CTA button
**Then**: The button shows the text "Chat qua Telegram"

---

**Scenario**: CTA button links to Telegram
**Given**: The Final CTA section is visible
**When**: The user clicks the "Chat qua Telegram" button
**Then**: The browser navigates to `https://t.me/aiteam_bot` (or the configured Telegram link)

---

**Scenario**: Button has prominent styling
**Given**: The Final CTA section is visible
**When**: The user inspects the CTA button
**Then**: The button has a solid blue (#3B82F6) background, white text, large padding, and rounded corners

---

**Scenario**: Button has hover glow effect
**Given**: The Final CTA section is visible
**When**: The user hovers over the CTA button
**Then**: The button displays a blue glow effect (box-shadow: 0 0 20px rgba(59, 130, 246, 0.4))

---

**Scenario**: Section has dark background
**Given**: The Final CTA section is visible
**When**: The user views the section background
**Then**: The section uses the dark background color (#0A0F1E)

---

**Scenario**: Section animates in on scroll
**Given**: The user scrolls to the Final CTA section
**When**: The section enters the viewport
**Then**: The content fades in and slides up (Framer Motion fadeInUp)

---

**Scenario**: Section respects prefers-reduced-motion
**Given**: The user has prefers-reduced-motion enabled in their OS/browser
**When**: The Final CTA section enters the viewport
**Then**: The content appears immediately without animation

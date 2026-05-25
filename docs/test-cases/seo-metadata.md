# Test Cases — SEO & Metadata

## F9 — SEO & Metadata

### Test Case 1: Page title
**Scenario**: Page renders with correct SEO title
**Given**: The landing page is built and deployed
**When**: The HTML `<head>` is inspected
**Then**: The `<title>` tag reads "AI Team — Build phần mềm tự động qua Telegram"

### Test Case 2: Meta description
**Scenario**: Page renders with correct meta description
**Given**: The landing page is built and deployed
**When**: The `<meta name="description">` tag is inspected
**Then**: The content attribute reads "Nền tảng AI tự động build phần mềm. Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh."

### Test Case 3: HTML lang attribute
**Scenario**: Page declares Vietnamese language
**Given**: The landing page is built and deployed
**When**: The `<html>` element is inspected
**Then**: The `lang` attribute is set to `"vi"`

### Test Case 4: Open Graph title
**Scenario**: OG title tag matches the page title
**Given**: The landing page is built and deployed
**When**: The `<meta property="og:title">` tag is inspected
**Then**: The content attribute reads "AI Team — Build phần mềm tự động qua Telegram"

### Test Case 5: Open Graph description
**Scenario**: OG description tag matches the page description
**Given**: The landing page is built and deployed
**When**: The `<meta property="og:description">` tag is inspected
**Then**: The content attribute reads "Nền tảng AI tự động build phần mềm. Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh."

### Test Case 6: Open Graph type
**Scenario**: OG type is set to website
**Given**: The landing page is built and deployed
**When**: The `<meta property="og:type">` tag is inspected
**Then**: The content attribute equals `"website"`

### Test Case 7: Open Graph image
**Scenario**: OG image is present
**Given**: The landing page is built and deployed
**When**: The `<meta property="og:image">` tag is inspected
**Then**: The content attribute contains a valid URL pointing to an image

### Test Case 8: Twitter card tags
**Scenario**: Twitter card meta tags are present
**Given**: The landing page is built and deployed
**When**: The `<meta name="twitter:card">` and `<meta name="twitter:title">` and `<meta name="twitter:description">` tags are inspected
**Then**: All three tags exist and contain non-empty content values

### Test Case 9: Favicon
**Scenario**: Favicon is available
**Given**: The landing page is built and deployed
**When**: The `<link rel="icon">` tag is inspected
**Then**: The `href` attribute points to `/favicon.ico`

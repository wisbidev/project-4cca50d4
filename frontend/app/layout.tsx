import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Team — Build phần mềm tự động qua Telegram",
  description:
    "Nền tảng AI tự động build phần mềm. Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh.",
  openGraph: {
    title: "AI Team — Build phần mềm tự động qua Telegram",
    description:
      "Nền tảng AI tự động build phần mềm. Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Team — Build phần mềm tự động qua Telegram",
    description:
      "Nền tảng AI tự động build phần mềm. Gửi ý tưởng qua Telegram, nhận sản phẩm hoàn chỉnh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

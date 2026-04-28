import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMMANUEL CHURCH | Constitution",
  description: "하나님이 함께하시는 공동체의 고백 — 말씀, 예배, 성장, 파송",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Immanuel"
  }
};

export const viewport: Viewport = {
  themeColor: "#121d33",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

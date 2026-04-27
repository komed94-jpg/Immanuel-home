import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "사역에 대한 나의 생각",
  description: "말씀 위에 세워지고, 예배로 충만해지며, 세상으로 파송되는 교회 비전",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

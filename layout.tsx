import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMMANUEL CHURCH",
  description: "하나님은 사랑이십니다. 하나님은 우리와 함께하십니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}

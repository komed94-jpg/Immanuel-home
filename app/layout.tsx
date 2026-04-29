import "./globals.css";

export const metadata = {
  title: "IMMANUEL CHURCH",
  description: "하나님이 함께하시는 공동체",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

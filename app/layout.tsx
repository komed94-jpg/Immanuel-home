import "./globals.css";
export const metadata = { title: "IMMANUEL CHURCH", description: "빛의자녀 공동체" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}

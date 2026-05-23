import Link from "next/link";
import { Layout } from "@/components/Layout";

export default function ContentPage() {
  return (
    <Layout>
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">Contents</p>
          <h1>콘텐츠</h1>
          <p>말씀과 예배, 공동체의 기록이 이곳에 연결됩니다.</p>
          <div className="hero-actions">
            <Link href="/way" className="primary-link">
              임마누엘의 길
            </Link>
            <Link href="/services" className="secondary-link">
              교회 서비스
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

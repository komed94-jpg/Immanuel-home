import Link from "next/link";
import { Layout } from "@/components/Layout";
import { services, wayArticles } from "@/data/immanuel";

const releaseVersion = "May23, pm 11:22";

const homeServiceIcons = [
  <svg key="word" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H20v17H8.5A3.5 3.5 0 0 0 5 22V5.5Z" />
    <path d="M5 5.5A3.5 3.5 0 0 0 1.5 2H1v17h.5A3.5 3.5 0 0 1 5 22V5.5Z" />
  </svg>,
  <svg key="worship" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2v20" />
    <path d="M7 7h10" />
    <path d="M5 22h14" />
    <path d="M8 22c0-4 1.5-7 4-7s4 3 4 7" />
  </svg>,
  <svg key="prayer" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.5 3.5 12 11l3.5-7.5" />
    <path d="M12 11v10" />
    <path d="M7 21h10" />
    <path d="M4 12c2.5 0 5 1.8 8 9" />
    <path d="M20 12c-2.5 0-5 1.8-8 9" />
  </svg>,
  <svg key="spirit" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3c4 3 6 6 6 10a6 6 0 0 1-12 0c0-4 2-7 6-10Z" />
    <path d="M9 14c1.6 1.6 4.4 1.6 6 0" />
  </svg>,
  <svg key="growth" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 19c6-1 10-5 12-13" />
    <path d="M8 18c0-4 2-7 6-9" />
    <path d="M15 6h5v5" />
  </svg>
];

export default function Home() {
  return (
    <Layout>
      <section className="home-hero">
        <div className="home-version-badge">{releaseVersion}</div>
        <div className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">WORD · WORSHIP · GROWTH · SENDING</p>
          <h1>
            <span className="hero-line">하나님은 사랑이십니다.</span>
            <span className="hero-line">하나님은 우리와</span>
            <span className="hero-line hero-gold-line">함께하십니다.</span>
          </h1>
          <p className="hero-copy">
            말씀 위에 세워지고, 예배로 충만해지며, 성장으로 성숙해지고,
            세상으로 파송되는 공동체입니다.
          </p>
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

      <section className="home-service-dock" aria-label="주요 교회 서비스">
        <div className="home-service-card">
          {services.slice(0, 5).map((service, index) => (
            <Link href={service.href} className="home-service-item" key={service.title}>
              <span className="home-service-icon">{homeServiceIcons[index]}</span>
              <strong>{service.title}</strong>
              <em>{service.description}</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="section intro-band">
        <p className="section-kicker">Root philosophy</p>
        <h2>하나님이 함께하신다는 믿음에서 모든 것이 시작됩니다.</h2>
        <p>
          인간의 가장 깊은 문제는 하나님이 함께하신다는 것을 믿지 못하는 믿음의
          문제입니다.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-kicker">The Way</p>
          <h2>임마누엘의 길</h2>
          <Link href="/way">전체 보기</Link>
        </div>
        <div className="poster-grid">
          {wayArticles.map((article) => (
            <Link
              className="poster-card"
              href={`/way/${article.slug}`}
              key={article.slug}
              style={{ backgroundImage: `url(${article.image.url})` }}
            >
              <span className="poster-overlay" />
              <span className="poster-content">
                <strong>{article.title}</strong>
                <em>{article.quote}</em>
                <small>{article.keywords.join(" · ")}</small>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section service-preview">
        <p className="section-kicker">Life Interface</p>
        <h2>교회의 기능이 아니라, 임마누엘의 삶으로 들어가는 자리</h2>
        <div className="service-list">
          {services.map((service) => (
            <Link href={service.href} key={service.title} className="service-row">
              <span>{service.title}</span>
              <strong>{service.description}</strong>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

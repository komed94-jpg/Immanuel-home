import Link from "next/link";
import { Layout } from "@/components/Layout";
import { rootMotto, services, wayArticles } from "@/data/immanuel";

export default function Home() {
  const featured = wayArticles.slice(0, 3);

  return (
    <Layout>
      <section className="home-hero">
        <div className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">Editorial philosophy church</p>
          <h1>
            {rootMotto[0]}
            <span>{rootMotto[1]}</span>
          </h1>
          <p className="hero-copy">
            철학과 영성과 공동체가 하나의 삶으로 연결되는 임마누엘의 여정
          </p>
          <div className="hero-actions">
            <Link href="/why-immanuel" className="primary-link">
              왜 임마누엘인가
            </Link>
            <Link href="/way" className="secondary-link">
              임마누엘의 길
            </Link>
          </div>
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
          {featured.map((article) => (
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

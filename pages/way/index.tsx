import Link from "next/link";
import { Layout } from "@/components/Layout";
import { rootMotto, wayArticles } from "@/data/immanuel";

export default function WayPage() {
  return (
    <Layout>
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">Immanuel Way</p>
          <h1>임마누엘의 길</h1>
          <p>
            {rootMotto[0]}
            <br />
            {rootMotto[1]}
          </p>
        </div>
      </section>

      <section className="section way-grid-section">
        <div className="poster-grid full">
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
    </Layout>
  );
}

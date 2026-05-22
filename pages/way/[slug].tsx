
import { useRouter } from "next/router";
import Nav from "../../Nav";
import { wayPages } from "../../data";

export default function WayDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const page = wayPages.find((item) => item.slug === slug);

  if (!page) return null;

  return (
    <main className="way-detail-page">
      <Nav />

      <section
        className="way-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(2,8,20,0.72), rgba(2,8,20,0.92)), url(${page.image.url})`,
        }}
      >
        <div className="way-hero-pattern" />

        <div className="way-hero-inner">
          <p className="way-label">임마누엘의 길</p>

          <h1>{page.title}</h1>

          <p className="way-quote">{page.quote}</p>
        </div>
      </section>

      <section className="way-content-wrap">
        <article className="way-content">
          {page.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className={index === 0 ? "lead" : ""}>
              {paragraph}
            </p>
          ))}
        </article>
      </section>
    </main>
  );
}

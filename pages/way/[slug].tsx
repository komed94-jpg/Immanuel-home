import type { GetStaticPaths, GetStaticProps } from "next";
import Nav from "../../Nav";
import { wayPages } from "../../data";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: wayPages.map((page) => ({ params: { slug: page.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = wayPages.find((item) => item.slug === params?.slug);
  return { props: { page } };
};

function paragraphs(text: string) {
  return text.split("\n\n").filter(Boolean);
}

export default function WayDetail({ page }: any) {
  if (!page) return null;
  const bg = "/images/" + page.slug + ".jpg";

  return (
    <main>
      <Nav />
      <section className="editorial" style={{ backgroundImage: "url('" + bg + "')" }}>
        <div className="content">
          <p className="eyebrow">IMMANUEL WAY</p>
          <h1>{page.title}</h1>
          <p>{page.mood}</p>
        </div>
      </section>
      <section className="article article-layered" style={{ backgroundImage: "url('" + bg + "')" }}>
        <article className="article-card">
          <h2>{page.title}</h2>
          {paragraphs(page.body).map((paragraph: string, index: number) => (
            <p key={index} className={index === 0 ? "quote" : ""}>{paragraph}</p>
          ))}
        </article>
      </section>
    </main>
  );
}

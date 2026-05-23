import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { WayArticle, wayArticles } from "@/data/immanuel";

type ArticlePageProps = {
  article: WayArticle;
};

export default function ArticlePage({ article }: ArticlePageProps) {
  return (
    <Layout>
      <article>
        <section
          className="article-hero"
          style={{ backgroundImage: `url(${article.image.url})` }}
        >
          <div className="article-hero-overlay" />
          <div className="article-hero-content">
            <Link href="/way" className="back-link">
              임마누엘의 길
            </Link>
            <h1>{article.title}</h1>
            <p>{article.quote}</p>
            <span>{article.keywords.join(" · ")}</span>
          </div>
        </section>

        <section className="article-body" aria-label={`${article.title} 원문`}>
          {article.content.map((paragraph, index) => (
            <p key={`${article.slug}-${index}`}>{paragraph}</p>
          ))}
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: wayArticles.map((article) => ({
    params: { slug: article.slug }
  })),
  fallback: false
});

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({ params }) => {
  const article = wayArticles.find((item) => item.slug === params?.slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article
    }
  };
};

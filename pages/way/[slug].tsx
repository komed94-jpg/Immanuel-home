import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Nav from "../../Nav";
import { wayPages } from "../../data";

const detailMeta: Record<string, { quote: string; keywords: string[]; image: string }> = {
  belief: {
    quote: "하나님은 사랑이십니다.\n하나님은 우리와 함께하십니다.",
    keywords: ["믿음", "사랑", "임마누엘"],
    image: "/images/belief.jpg"
  },
  worship: {
    quote: "가장 귀한 것을\n가장 귀하신 하나님께 드립니다.",
    keywords: ["예배", "거룩", "헌신"],
    image: "/images/worship.jpg"
  },
  prayer: {
    quote: "숨김없이 하나님께 나아가는 Honest Prayer",
    keywords: ["기도", "진실함", "회복"],
    image: "/images/prayer.jpg"
  },
  spirit: {
    quote: "성령은 오늘도 우리를 인도하십니다.",
    keywords: ["성령", "자유", "순종"],
    image: "/images/spirit.jpg"
  },
  growth: {
    quote: "좋은 사람과 유능한 사람이 함께 자라는 길",
    keywords: ["성장", "훈련", "성숙"],
    image: "/images/growth.jpg"
  },
  community: {
    quote: "우리는 혼자 신앙생활하지 않습니다.",
    keywords: ["공동체", "돌봄", "가족"],
    image: "/images/community.jpg"
  },
  discernment: {
    quote: "진리는 사랑 안에서 분별됩니다.",
    keywords: ["분별", "지혜", "진리"],
    image: "/images/discernment.jpg"
  },
  leadership: {
    quote: "리더십은 섬김으로 증명됩니다.",
    keywords: ["섬김", "책임", "제자훈련"],
    image: "/images/leadership.jpg"
  },
  giving: {
    quote: "은혜에 감사로 응답하는 삶",
    keywords: ["감사", "헌신", "드림"],
    image: "/images/giving.jpg"
  },
  sending: {
    quote: "우리는 세상을 사랑하기 위해 보냄받았습니다.",
    keywords: ["선교", "사랑", "파송"],
    image: "/images/sending.jpg"
  },
  dream: {
    quote: "하나님이 함께하시는 공동체",
    keywords: ["임마누엘", "회복", "다음세대"],
    image: "/images/dream.jpg"
  }
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: wayPages.map((page) => ({ params: { slug: page.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = wayPages.find((item) => item.slug === params?.slug);

  if (!page) {
    return { notFound: true };
  }

  return { props: { page } };
};

function paragraphs(text: string) {
  return text.split("\n\n").filter(Boolean);
}

export default function WayDetail({ page }: any) {
  const meta = detailMeta[page.slug];

  return (
    <main>
      <Nav />
      <section className="way-detail-hero" style={{ backgroundImage: `url(${meta.image})` }}>
        <div className="way-detail-hero-inner">
          <Link href="/way" className="way-back-link">
            임마누엘의 길
          </Link>
          <h1>{page.title}</h1>
          <p>{meta.quote}</p>
          <span>{meta.keywords.join(" · ")}</span>
        </div>
      </section>

      <section className="way-article">
        <article className="way-article-card">
          {paragraphs(page.body).map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </section>
    </main>
  );
}

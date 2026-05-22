import Link from "next/link";
import Nav from "../../Nav";
import { wayPages } from "../../data";

const cardMeta: Record<string, { quote: string; keywords: string[]; image: string }> = {
  belief: {
    quote: "하나님은 사랑이십니다.\n하나님은 우리와 함께하십니다.",
    keywords: ["믿음", "사랑", "임마누엘"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=88"
  },
  worship: {
    quote: "가장 귀한 것을\n가장 귀하신 하나님께 드립니다.",
    keywords: ["예배", "거룩", "헌신"],
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1800&q=88"
  },
  prayer: {
    quote: "숨김없이 하나님께 나아가는 Honest Prayer",
    keywords: ["기도", "진실함", "회복"],
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1800&q=88"
  },
  spirit: {
    quote: "성령은 오늘도 우리를 인도하십니다.",
    keywords: ["성령", "자유", "순종"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=88"
  },
  growth: {
    quote: "좋은 사람과 유능한 사람이 함께 자라는 길",
    keywords: ["성장", "훈련", "성숙"],
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=88"
  },
  community: {
    quote: "우리는 혼자 신앙생활하지 않습니다.",
    keywords: ["공동체", "돌봄", "가족"],
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=88"
  },
  discernment: {
    quote: "진리는 사랑 안에서 분별됩니다.",
    keywords: ["분별", "지혜", "진리"],
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=88"
  },
  leadership: {
    quote: "리더십은 섬김으로 증명됩니다.",
    keywords: ["섬김", "책임", "제자훈련"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=88"
  },
  giving: {
    quote: "은혜에 감사로 응답하는 삶",
    keywords: ["감사", "헌신", "드림"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=88"
  },
  sending: {
    quote: "우리는 세상을 사랑하기 위해 보냄받았습니다.",
    keywords: ["선교", "사랑", "파송"],
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=88"
  },
  dream: {
    quote: "하나님이 함께하시는 공동체",
    keywords: ["임마누엘", "회복", "다음세대"],
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=88"
  }
};

const humanProblems = [
  {
    href: "/problems/overcome",
    title: "극복할 문제",
    quote: "믿음으로 통과해야 할 삶의 자리",
    keywords: "믿음 · 통과 · 성숙",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=88"
  },
  {
    href: "/problems/temptation",
    title: "피할 유혹",
    quote: "분별하여 멀리해야 할 영적 위험",
    keywords: "분별 · 지혜 · 거룩",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=88"
  }
];

export default function Way() {
  return (
    <main>
      <Nav />
      <section className="way-hero">
        <div className="way-hero-inner">
          <p className="way-eyebrow">IMMANUEL WAY</p>
          <h1>임마누엘의 길</h1>
          <p>
            하나님은 우리와 함께하십니다.
            <br />
            그리고 우리는 그것을 믿습니다.
          </p>
        </div>
      </section>

      <section className="way-section">
        <div className="way-wrap">
          <div className="way-heading">
            <p className="way-eyebrow">PHILOSOPHY HUB</p>
            <h2>11개의 임마누엘 가치</h2>
          </div>

          <div className="way-poster-grid">
            {wayPages.map((page, index) => {
              const meta = cardMeta[page.slug];

              return (
                <Link
                  key={page.slug}
                  href={"/way/" + page.slug}
                  className="way-poster-card"
                  style={{ backgroundImage: `url(${meta.image})` }}
                >
                  <span className="way-poster-overlay" />
                  <span className="way-poster-content">
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <strong>{page.title}</strong>
                    <em>{meta.quote}</em>
                    <span>{meta.keywords.join(" · ")}</span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="problem-heading">
            <p className="way-eyebrow">HUMAN CONDITION</p>
            <h2>삶의 두 갈래</h2>
          </div>

          <div className="problem-grid">
            {humanProblems.map((problem) => (
              <Link
                href={problem.href}
                className="problem-card"
                key={problem.href}
                style={{ backgroundImage: `url(${problem.image})` }}
              >
                <span className="way-poster-overlay" />
                <span className="way-poster-content">
                  <strong>{problem.title}</strong>
                  <em>{problem.quote}</em>
                  <span>{problem.keywords}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

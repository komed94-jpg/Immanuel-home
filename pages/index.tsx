import Link from "next/link";
import Nav from "../Nav";
import { services, wayPages } from "../data";

const releaseVersion = "May22, am 08:34";
const homeCardMeta: Record<string, { quote: string; image: string }> = {
  belief: {
    quote: "하나님은 사랑이십니다.\n하나님은 우리와 함께하십니다.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=88"
  },
  worship: {
    quote: "가장 귀한 것을\n가장 귀하신 하나님께 드립니다.",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=88"
  },
  prayer: {
    quote: "숨김없이 하나님께 나아가는 Honest Prayer",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1600&q=88"
  },
  spirit: {
    quote: "성령은 오늘도 우리를 인도하십니다.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=88"
  },
  growth: {
    quote: "좋은 사람과 유능한 사람이 함께 자라는 길",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=88"
  },
  community: {
    quote: "우리는 혼자 신앙생활하지 않습니다.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=88"
  }
};

const serviceIcons = [
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
    <main>
      <Nav />
      <section className="hero">
        <div className="home-version-badge">{releaseVersion}</div>
        <div className="hero-inner">
          <div className="eyebrow">WORD · WORSHIP · GROWTH · SENDING</div>
          <h1>
            하나님은 사랑이십니다.
            <br />
            하나님은 우리와
            <br />
            <span className="gold">함께하십니다.</span>
          </h1>
          <p>
            말씀 위에 세워지고, 예배로 충만해지며, 성장으로 성숙해지고,
            세상으로 파송되는 공동체입니다.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/way">
              임마누엘의 길
            </Link>
            <Link className="btn ghost" href="/services">
              교회 서비스
            </Link>
          </div>
        </div>
      </section>

      <section className="hub">
        <div className="hub-card">
          {services.slice(0, 5).map((service, index) => (
            <Link className="hub-item" href="/services" key={service[0]}>
              <div className="hub-icon">{serviceIcons[index]}</div>
              <h3>{service[0]}</h3>
              <p>{service[1]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="section-title">임마누엘의 길</h2>
          <p className="section-lead">
            11개의 길은 단순한 메뉴가 아니라, 임마누엘교회가 믿고 예배하고
            기도하고 성장하며 세상으로 나아가는 신앙의 고백입니다.
          </p>
          <div className="grid">
            {wayPages.slice(0, 6).map((page, index) => {
              const meta = homeCardMeta[page.slug];

              return (
                <Link
                  className="card"
                  href={"/way/" + page.slug}
                  key={page.slug}
                  style={{ backgroundImage: `url(${meta.image})` }}
                >
                  <span className="home-card-overlay" />
                  <span className="home-card-content">
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <h3>{page.title}</h3>
                    <p>{meta.quote}</p>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <h2 className="section-title">세상을 이롭게 하는 사람</h2>
          <p className="section-lead">
            우리는 자기 삶의 자리에서 가정과 조직과 교회와 사회를 이롭게 하는
            제자를 세웁니다.
          </p>
        </div>
      </section>

      <footer className="footer">
        <b>IMMANUEL CHURCH</b>
        <br />
        God is love. God is with us.
      </footer>
    </main>
  );
}

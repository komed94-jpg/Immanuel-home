import Link from "next/link";
import Nav from "../Nav";
import { services, wayPages } from "../data";

const releaseVersion = "May22, am 08:34";
const homeCardMeta: Record<string, { quote: string; image: string }> = {
  belief: {
    quote: "하나님은 사랑이십니다.\n하나님은 우리와 함께하십니다.",
    image: "/images/belief.jpg"
  },
  worship: {
    quote: "가장 귀한 것을\n가장 귀하신 하나님께 드립니다.",
    image: "/images/worship.jpg"
  },
  prayer: {
    quote: "숨김없이 하나님께 나아가는 Honest Prayer",
    image: "/images/prayer.jpg"
  },
  spirit: {
    quote: "성령은 오늘도 우리를 인도하십니다.",
    image: "/images/spirit.jpg"
  },
  growth: {
    quote: "좋은 사람과 유능한 사람이 함께 자라는 길",
    image: "/images/growth.jpg"
  },
  community: {
    quote: "우리는 혼자 신앙생활하지 않습니다.",
    image: "/images/community.jpg"
  }
};

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
              <div className="hub-icon">{["말", "예", "기", "성", "공"][index]}</div>
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

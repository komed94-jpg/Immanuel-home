import {
  BookOpen,
  Church,
  Flame,
  GraduationCap,
  Globe2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "말씀 중심",
    text: "성경 66권을 유일한 믿음의 기준으로 삼고 모든 사역을 말씀 위에 세웁니다.",
  },
  {
    icon: Church,
    title: "예배 우선",
    text: "가장 귀한 것을 가장 귀하신 하나님께 드리는 구별된 예배를 회복합니다.",
  },
  {
    icon: Flame,
    title: "성령 충만",
    text: "임재와 기름부으심 안에서 회개, 치유, 회복, 능력을 경험합니다.",
  },
  {
    icon: GraduationCap,
    title: "제자 훈련",
    text: "전도, 양육, 훈련, 파송의 순환으로 그리스도의 제자를 세웁니다.",
  },
  {
    icon: Globe2,
    title: "세상 선교",
    text: "보냄 받은 각 세계에서 빛과 소금으로 하나님의 영광을 드러냅니다.",
  },
  {
    icon: HeartHandshake,
    title: "사랑의 공동체",
    text: "가족 같은 따뜻함과 그리스도의 몸 된 거룩한 질서를 함께 세웁니다.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="header">
        <nav className="nav">
          <a className="brand" href="#">
            <span className="brandMark">✝</span>
            <span>
              사역에 대한 나의 생각
              <small>말씀 · 예배 · 성령 · 제자 · 세상</small>
            </span>
          </a>
          <div className="menu" aria-label="주요 메뉴">
            <a href="#vision">비전</a>
            <a href="#word">말씀</a>
            <a href="#church">교회</a>
            <a href="#worship">예배</a>
            <a href="#discipleship">제자훈련</a>
            <a href="#mission">선교</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="mountains" aria-hidden="true" />
        <div className="cross" aria-hidden="true" />
        <div className="heroContent">
          <div className="kicker">KINGDOM · CHURCH · MISSION</div>
          <h1>말씀 위에 세워지고, 예배로 충만해지며, 세상으로 파송되는 교회</h1>
          <p>
            교회는 하나님의 말씀 66권 성경을 유일한 믿음의 경전으로 믿고,
            사람들을 전도하고 양육하며 훈련하여 그리스도의 몸 된 교회로 세우는 곳입니다.
          </p>
          <div className="actions">
            <a className="button primary" href="#vision">
              비전 보기 <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#values">
              핵심 가치 보기
            </a>
          </div>
        </div>
      </section>

      <section id="values" className="section">
        <div className="sectionInner center">
          <div className="eyebrow">CORE VALUES</div>
          <h2>하나님이 주인 되시는 교회</h2>
          <p className="lead">
            교회는 사람의 조직이 아니라 그리스도의 몸입니다.
            따뜻한 사랑과 거룩한 질서 안에서 사람을 살리고 세우며 파송합니다.
          </p>

          <div className="values">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article className="value" key={item.title}>
                  <div className="icon"><Icon size={28} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cards" aria-label="주요 섹션">
        <article id="word" className="card">
          <h3>말씀을 배우고</h3>
          <p>성경은 교회의 중심축이며 설교, 교육, 분별, 사역의 시작과 끝입니다.</p>
          <a className="textLink" href="#">말씀 더 보기 <ArrowRight size={16} /></a>
        </article>
        <article id="worship" className="card">
          <h3>예배로 나아가고</h3>
          <p>예배는 나의 귀한 것을 가장 귀하신 성삼위 하나님께 올려 드리는 자리입니다.</p>
          <a className="textLink" href="#">예배 안내 보기 <ArrowRight size={16} /></a>
        </article>
        <article id="mission" className="card">
          <h3>세상으로 보내는 교회</h3>
          <p>성도는 각자의 세계에서 탁월한 성품과 전문성으로 하나님의 영광을 나타냅니다.</p>
          <a className="textLink" href="#">선교와 파송 보기 <ArrowRight size={16} /></a>
        </article>
      </section>

      <section id="vision" className="section vision">
        <div className="sectionInner visionGrid">
          <div>
            <div className="eyebrow">VISION STATEMENT</div>
            <h2>전도와 양육과 훈련, 그리고 파송의 순환</h2>
            <p className="lead" style={{ margin: 0 }}>
              교회는 복음을 전하고, 믿음을 양육하며, 사명을 감당하도록 훈련하고,
              다시 세상으로 파송하여 하나님 나라의 열매가 재생산되게 합니다.
            </p>
          </div>

          <div className="quoteBox">
            <p>
              “말씀으로 세워지고, 예배로 충만해지고, 훈련으로 성숙해지고,
              세상으로 파송되어 하나님의 영광을 드러내며 다시 복음을 낳는 공동체.”
            </p>
          </div>
        </div>
      </section>

      <section id="church" className="section">
        <div className="sectionInner visionGrid">
          <div className="steps">
            <div className="step">
              <strong>01</strong>
              <h3>전도</h3>
              <p>복음을 듣지 못한 사람에게 생명의 복음을 전합니다.</p>
            </div>
            <div className="step">
              <strong>02</strong>
              <h3>양육</h3>
              <p>복음을 받은 사람이 말씀 안에 뿌리내리도록 돕습니다.</p>
            </div>
            <div className="step">
              <strong>03</strong>
              <h3>훈련과 파송</h3>
              <p>성도를 제자로 세워 각자의 세계로 보내고 복음의 재생산을 이룹니다.</p>
            </div>
          </div>

          <div>
            <div className="eyebrow">THE BODY OF CHRIST</div>
            <h2>교회는 가족 같은 공동체이지만, 본질은 그리스도의 몸입니다</h2>
            <p className="lead" style={{ margin: 0 }}>
              따뜻함은 있어야 하지만 경계가 무너져서는 안 됩니다.
              사랑은 깊어야 하지만 진리를 희생해서는 안 됩니다.
              교회는 그리스도께서 머리 되시는 거룩한 몸입니다.
            </p>
          </div>
        </div>
      </section>

      <section id="discipleship" className="cta">
        <h2>사람을 살리고, 세우고, 보내는 사역</h2>
        <p>
          하나님의 말씀과 성령의 기름부으심 안에서 성도는 회복되고,
          성숙하며, 세상 속에서 하나님의 나라를 드러내는 제자로 살아갑니다.
        </p>
        <a className="button primary" href="#">마스터 스크립트 보기</a>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <span>© 2026 사역에 대한 나의 생각. All rights reserved.</span>
          <span>Word · Worship · Spirit · Discipleship · Mission</span>
        </div>
      </footer>
    </main>
  );
}

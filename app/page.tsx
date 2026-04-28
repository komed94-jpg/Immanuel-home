"use client";

import { useMemo, useState } from "react";
import {
  BookOpen, Church, Compass, Flame, Gift, HandHeart, Home, Menu,
  MessageCircleHeart, ScrollText, Send, Sparkles, Sprout, UserRound, X
} from "lucide-react";

type PageKey =
  | "home" | "core" | "vision" | "word" | "worship" | "spirit" | "prayer"
  | "growth" | "church" | "wisdom" | "sending" | "leadership" | "training"
  | "mokjang" | "offering" | "thoughts" | "my";

type Chapter = {
  key: PageKey;
  title: string;
  label: string;
  icon: React.ElementType;
  body: string[];
};

const chapters: Chapter[] = [
  { key: "core", title: "Core Declaration", label: "하나님이 함께하시는 공동체의 첫 고백", icon: Sparkles, body: [
    "하나님은 사랑이십니다. 우리는 사랑받는 하나님의 자녀입니다. 하나님은 우리와 함께하십니다. 이 세 문장은 Immanuel Church의 가장 깊은 출발점입니다.",
    "임마누엘은 단순한 위로의 말이 아닙니다. 하나님께서 우리의 삶 한가운데 실제로 함께하신다는 믿음이며, 그 믿음은 우리의 삶을 해석하는 기준이 되고, 선택의 방향이 되며, 살아갈 힘이 됩니다.",
    "우리는 말씀 위에 세워지고, 예배로 충만해지며, 성장으로 성숙해지고, 세상으로 파송되는 공동체입니다."
  ]},
  { key: "vision", title: "Vision", label: "말씀과 성령으로 균형 잡힌 그리스도인", icon: Compass, body: [
    "하나님의 말씀과 성령으로 균형 잡힌 그리스도인으로 성장하여, 세상의 빛과 소금으로 헌신하며, 마지막 한 사람까지 그리스도를 따르게 한다.",
    "이 비전은 단순히 교회 안에서 좋은 프로그램을 운영하겠다는 목표가 아닙니다. 우리는 말씀과 성령이 함께 흐르는 균형 잡힌 신앙을 추구합니다.",
    "말씀 없는 열정은 흔들리고, 성령 없는 지식은 생명력을 잃습니다. 그러므로 Immanuel Church는 말씀 위에 견고히 서고 성령의 임재와 능력 안에서 회개와 치유와 회복과 사명을 경험하는 공동체를 지향합니다."
  ]},
  { key: "word", title: "The Word", label: "말씀은 진리이며 생명입니다", icon: BookOpen, body: [
    "하나님의 말씀은 진리이며 생명입니다. 교회는 사람의 생각과 시대의 흐름 위에 세워지지 않고, 살아 있는 하나님의 말씀 위에 세워집니다.",
    "성경 66권은 우리의 유일한 믿음의 경전이며, 설교와 교육과 훈련과 분별의 기준입니다. 교회의 기초는 경험도 아니고, 유행도 아니며, 지도자의 카리스마도 아닙니다.",
    "우리는 말씀 안에 깊이 뿌리를 내리고, 말씀으로 삶을 분별하며, 말씀의 빛으로 세상을 비추는 공동체가 되기를 소망합니다."
  ]},
  { key: "worship", title: "Worship", label: "가장 귀한 것을 하나님께 드리는 예배", icon: HandHeart, body: [
    "예배는 하나님께 올려드리는 구별된 시간과 장소입니다. 우리는 아벨이 양의 첫 새끼와 그 기름을 구별하여 드렸던 것처럼, 우리의 귀한 것을 하나님께 구별하여 드립니다.",
    "예배의 핵심은 무엇을 드리느냐 이전에, 어떤 마음과 태도로 드리느냐입니다. 가인의 문제는 직업의 문제가 아니라 하나님께 귀한 것을 구별하여 드렸는가에 있었습니다.",
    "우리는 복음주의 정통 위에 서서, 다음 세대를 환영하는 열린 예배를 드립니다. 깊이는 잃지 않고, 생명력은 살아 있으며, 진리는 견고하고, 표현은 열려 있는 예배를 꿈꿉니다."
  ]},
  { key: "spirit", title: "The Holy Spirit", label: "말씀과 함께 흐르는 성령의 생명력", icon: Flame, body: [
    "성령의 기름부으심은 특정한 은사 하나만을 의미하지 않습니다. 그것은 하나님의 영이 한 사람의 존재 전체와 공동체 전체 위에 충만히 임하시는 역사입니다.",
    "성령이 임하시면 회개가 일어나고, 치유가 일어나며, 회복이 일어나고, 담대함이 생기며, 사랑하지 못하던 사람이 사랑하게 되고, 사명을 외면하던 사람이 다시 헌신하게 됩니다.",
    "우리는 말씀과 성령이 함께 흐르는 교회를 꿈꿉니다. 말씀은 길을 보이고, 성령은 그 길을 걷게 하십니다."
  ]},
  { key: "prayer", title: "Prayer", label: "하나님을 경험하는 시작은 진심입니다", icon: MessageCircleHeart, body: [
    "기도는 하나님 앞에 정직하고 솔직하게 나아가는 것입니다. 하나님은 꾸며진 언어보다 진실한 마음을 기뻐하십니다.",
    "학위와 학벌, 수입과 명예가 하나님께 나아가는 자격이 될 수 없습니다. 오직 예수 그리스도의 이름으로, 진심을 담아 하나님께 나아가면 됩니다.",
    "하나님은 정직하고 솔직히 기도하는 자의 양심 가운데 임재로 찾아오십니다. 우리가 하나님을 경험하는 가장 깊은 베이스는 진심입니다."
  ]},
  { key: "growth", title: "Growth", label: "성품과 습관, 전문성과 탁월함", icon: Sprout, body: [
    "우리는 성경 66권을 진리의 말씀으로 배우며 성장합니다. 성장은 단지 교회 프로그램을 많이 참여하는 것이 아닙니다. 성장은 예수 그리스도를 닮아가는 과정입니다.",
    "성장의 한 축은 성품과 습관입니다. 겸손함, 정직함, 절제함, 인내함, 사랑함, 충성됨이 우리의 삶 안에 자라나야 합니다.",
    "성장의 또 다른 축은 전문성과 탁월함입니다. 성품만 있고 실력이 없으면 영향력이 제한되고, 실력만 있고 성품이 없으면 위험합니다."
  ]},
  { key: "church", title: "The Church", label: "교회는 주님의 몸입니다", icon: Church, body: [
    "교회는 주님의 몸입니다. 교회는 단순한 종교 조직이 아니며, 사람들이 모이는 프로그램 공간도 아닙니다.",
    "몸은 서로를 돌봅니다. 몸은 서로를 쓰다듬으며 아픔을 나눕니다. 몸은 서로 연결되어 유기적으로 소통합니다. 몸은 자라나고 성장하며, 성장한 만큼 맡겨진 일을 감당합니다. 그것이 사역입니다.",
    "교회는 가족 같은 공동체입니다. 그러나 교회의 본질은 가족보다 더 깊은 그리스도의 몸입니다. 가족 같은 따뜻함은 있어야 하지만, 거룩한 질서와 경계가 무너져서는 안 됩니다."
  ]},
  { key: "wisdom", title: "Immanuel Wisdom", label: "견뎌야 할 문제와 피해야 할 유혹", icon: Compass, body: [
    "인간의 문제는 크게 두 가지입니다. 하나는 직면해서 극복해야 할 문제입니다. 질병의 문제, 경제의 문제, 관계의 어려움처럼 믿음으로 견디고 통과해야 하는 문제들이 있습니다.",
    "다른 하나는 피하고 뿌리쳐야 할 유혹의 문제입니다. 욕심과 정욕에서 비롯되는 성적 유혹, 무분별한 투기, 탐욕과 자기중심성은 가까이 머물며 관리할 문제가 아니라 분별하고 멀리해야 할 문제입니다.",
    "하나님이 우리와 함께하신다는 임마누엘의 믿음은, 우리가 무엇을 견디고 무엇을 버려야 하는지 분별하게 합니다."
  ]},
  { key: "sending", title: "Sending", label: "모인 교회는 충만함을 받고, 흩어진 교회는 세상을 비춥니다", icon: Send, body: [
    "우리는 단지 교회 프로그램에만 머물지 않습니다. 함께 모여 그리스도의 충만함을 덧입은 우리는 다시 세상으로 파송됩니다.",
    "우리는 가정으로 파송됩니다. 직장으로 파송됩니다. 사업의 현장으로 파송됩니다. 다양한 모임과 공동체로 파송됩니다. 그리고 열방으로 파송됩니다.",
    "그곳에서 우리는 예수 그리스도의 향기와 빛을 드러냅니다. 성도는 각자의 세계에서 하나님의 영광을 나타내는 사람입니다."
  ]},
  { key: "leadership", title: "Leadership", label: "따뜻하지만 가볍지 않은 목회", icon: UserRound, body: [
    "목회자는 친구가 아닙니다. 그러나 친구 같아야 합니다. 목회자는 따뜻해야 하지만 가벼워져서는 안 됩니다. 가까워야 하지만 경계가 무너져서는 안 됩니다.",
    "목회는 사람을 모으는 기술이 아니라 사람을 살리는 일입니다. 사역은 프로그램 운영이 아니라 하나님의 마음을 품고 하나님이 사랑하시는 사람을 하나님의 방식으로 세워가는 일입니다.",
    "건강한 리더십은 은혜와 구조를 함께 붙듭니다. 은혜만 있고 구조가 없으면 재현이 어렵고, 구조만 있고 은혜가 없으면 생명력이 약해집니다."
  ]},
  { key: "training", title: "Training Path", label: "세상 속 제자로 세우는 훈련", icon: ScrollText, body: [
    "Immanuel Church의 훈련은 사람을 교회 안에 가두는 훈련이 아닙니다. 우리는 사람을 말씀으로 세우고, 예배로 충만하게 하며, 성장으로 성숙하게 하고, 세상으로 파송합니다.",
    "훈련의 목적은 교회 프로그램에 잘 적응하는 사람이 아니라, 세상 속에서 그리스도의 사람으로 살아가는 성도를 세우는 것입니다.",
    "훈련은 지식만 전달하지 않습니다. 훈련은 성품을 다루고, 습관을 만들고, 사명을 깨우며, 삶의 현장에서 전문성과 탁월함을 길러갑니다."
  ]},
  { key: "mokjang", title: "Mokjang Community", label: "몸의 세포처럼 살아 있는 목장", icon: Church, body: [
    "Immanuel Church의 공동체는 목장 중심으로 세워집니다. 목장은 단순한 소그룹이 아닙니다. 목장은 몸의 세포와 같습니다.",
    "몸이 살아 있으려면 세포가 살아 있어야 하듯, 교회가 건강하려면 목장이 살아 있어야 합니다. 목장은 서로를 돌보는 자리입니다.",
    "우리는 채팅 중심의 소음 많은 공동체가 아니라, 기도와 나눔과 돌봄과 공지가 건강하게 흐르는 공동체를 지향합니다."
  ]},
  { key: "offering", title: "The Offering", label: "헌금은 결제가 아니라 예배의 드림입니다", icon: Gift, body: [
    "헌금은 단순한 결제가 아닙니다. 헌금은 예배의 일부입니다. 우리는 나의 귀한 것을 가장 귀하신 하나님께 드립니다.",
    "그러므로 앱 안에서의 헌금 기능도 단순히 돈을 보내는 기능처럼 보이면 안 됩니다. 그것은 예배의 드림이어야 합니다.",
    "초기에는 계좌이체 안내 방식으로 시작합니다. 십일조, 감사, 선교, 구제, 기타 항목으로 구분하되, 그 중심에는 언제나 하나님께 드리는 예배적 마음이 있어야 합니다."
  ]},
  { key: "thoughts", title: "Immanuel Thoughts", label: "사역에 대한 나의 생각", icon: ScrollText, body: [
    "Immanuel Thoughts는 이 공동체의 신학과 철학과 사역의 방향을 기록하는 영적 아카이브입니다.",
    "우리는 기능보다 먼저 정체성을 세웁니다. 기능은 철학을 담는 그릇입니다. 그러므로 먼저 Immanuel Church의 고백을 충분히 펼치고, 그 다음 기능을 얹어야 합니다.",
    "홈페이지는 Immanuel Church의 얼굴이고, 앱은 공동체의 생활 공간입니다."
  ]},
];

const bottomTabs = [
  { key: "home", label: "홈", icon: Home },
  { key: "word", label: "말씀", icon: BookOpen },
  { key: "prayer", label: "기도", icon: MessageCircleHeart },
  { key: "growth", label: "성장", icon: Sprout },
  { key: "my", label: "마이", icon: UserRound },
] as const;

function HomePage({ go }: { go: (key: PageKey) => void }) {
  const journeys = [
    { title: "Believe", desc: "말씀과 성령 안에 깊이 뿌리내리는 신앙", icon: BookOpen, key: "word" as PageKey },
    { title: "Worship", desc: "가장 귀한 것을 가장 귀하신 하나님께", icon: HandHeart, key: "worship" as PageKey },
    { title: "Grow", desc: "성품과 탁월함이 함께 자라는 제자도", icon: Flame, key: "growth" as PageKey },
    { title: "Go", desc: "세상 속 빛과 소금으로 파송되는 삶", icon: Compass, key: "sending" as PageKey },
  ];

  return (
    <>
      <section className="hero">
        <div className="heroCopy">
          <div className="version">v1.4 Premium Menu</div>
          <p className="eyebrow">GOD WITH US · WORD · WORSHIP · GROWTH</p>
          <h1>하나님은 사랑이시며,<br />우리와 함께하십니다.</h1>
          <p className="lead">깊이는 잃지 않고, 표현은 열려 있게. 젊은 세대가 공감할 언어로, 그러나 복음의 중심은 견고하게 세워 가는 공동체입니다.</p>
          <div className="actions">
            <button className="primary" onClick={() => go("core")}>헌장 읽기</button>
            <button onClick={() => go("word")}>오늘의 말씀</button>
          </div>
        </div>
        <figure className="heroImage"><img src="/hero-immanuel.svg" alt="도시 위 새벽빛과 십자가" /></figure>
      </section>

      <section className="feature" onClick={() => go("wisdom")}>
        <p>Featured Essay</p>
        <h2>인간의 문제는 크게 두 가지입니다.</h2>
        <span>믿음으로 통과해야 할 문제가 있고, 멀리하고 끊어내야 할 유혹의 문제가 있습니다. 임마누엘의 믿음은 그 둘을 분별하게 합니다.</span>
      </section>

      <section className="journeyGrid">
        {journeys.map((item) => {
          const Icon = item.icon;
          return <button className="journeyCard" key={item.title} onClick={() => go(item.key)}><div className="icon"><Icon size={22} /></div><h3>{item.title}</h3><p>{item.desc}</p></button>;
        })}
      </section>

      <section className="chapters">
        <div className="sectionHead"><p>MASTER SCRIPT</p><h2>Immanuel Constitution</h2></div>
        <div className="chapterGrid">
          {chapters.map((item) => {
            const Icon = item.icon;
            return <button className="chapterCard" key={item.key} onClick={() => go(item.key)}><Icon size={22} /><div><h3>{item.title}</h3><p>{item.label}</p></div></button>;
          })}
        </div>
      </section>
    </>
  );
}

function ChapterPage({ chapter, go }: { chapter: Chapter; go: (key: PageKey) => void }) {
  const Icon = chapter.icon;
  return (
    <article className="reader">
      <div className="readerHead">
        <div className="readerIcon"><Icon size={26} /></div>
        <div><p>{chapter.title.toUpperCase()}</p><h1>{chapter.title}</h1><span>{chapter.label}</span></div>
      </div>
      <div className="prose">
        {chapter.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="readerActions">
        <button className="primary" onClick={() => go("home")}>홈으로</button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>위로</button>
      </div>
    </article>
  );
}

function MyPage() {
  return (
    <article className="reader">
      <div className="readerHead"><div className="readerIcon"><UserRound size={26} /></div><div><p>PROFILE</p><h1>마이</h1><span>개인 기록과 공동체 연결의 공간</span></div></div>
      <div className="prose">
        <p>마이 페이지는 앞으로 Supabase 로그인과 연결되어 Guest, Member, Leader 권한 구조로 확장됩니다. 여기에는 내 목장, 성장 여정, 기도 기록, 알림 설정, 예배의 드림 안내가 들어갑니다.</p>
        <p>그러나 이 기능들도 먼저 세워진 Immanuel Church의 정체성을 담는 그릇으로 설계됩니다.</p>
      </div>
    </article>
  );
}

function MenuPanel({ open, close, go }: { open: boolean; close: () => void; go: (key: PageKey) => void }) {
  if (!open) return null;
  const move = (key: PageKey) => { go(key); close(); };
  return (
    <div className="overlay" onClick={close}>
      <aside className="menuPanel" onClick={(e) => e.stopPropagation()}>
        <div className="menuHead"><div><span>CHAPTER LIBRARY</span><h2>메뉴</h2></div><button onClick={close}><X size={18} /></button></div>
        <div className="menuList">
          <button onClick={() => move("home")}><strong>Home</strong><small>프리미엄 히어로와 전체 여정</small></button>
          {chapters.map((c) => <button key={c.key} onClick={() => move(c.key)}><strong>{c.title}</strong><small>{c.label}</small></button>)}
        </div>
      </aside>
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState<PageKey>("home");
  const [open, setOpen] = useState(false);
  const current = useMemo(() => chapters.find((c) => c.key === active), [active]);
  const go = (key: PageKey) => { setActive(key); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <main className="page">
        <header className="topbar">
          <button className="brand" onClick={() => go("home")}><div className="brandMark">✝</div><div><strong>IMMANUEL CHURCH</strong><span>빛의자녀 공동체</span></div></button>
          <button className="menuTop" onClick={() => setOpen(true)}><Menu size={18} /> 메뉴</button>
        </header>

        {active === "home" && <HomePage go={go} />}
        {active === "my" && <MyPage />}
        {current && active !== "home" && <ChapterPage chapter={current} go={go} />}
      </main>

      <nav className="bottomNav">
        {bottomTabs.map((item) => {
          const Icon = item.icon;
          return <button key={item.key} className={`navItem ${active === item.key ? "active" : ""}`} onClick={() => go(item.key)}><Icon /><span>{item.label}</span></button>;
        })}
      </nav>

      <MenuPanel open={open} close={() => setOpen(false)} go={go} />
    </>
  );
}

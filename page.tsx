"use client";

import { useRef, useState } from "react";
import { ArrowRight, BookOpen, Church, Flame, HandHeart, Home, Leaf, Menu, MessageCircleHeart, Send, Sparkles, Sprout, UserRound } from "lucide-react";

type TabKey = "home" | "word" | "prayer" | "growth" | "my";

const core = [
  { title: "말씀", text: "진리이며 생명인 말씀 위에 세워집니다.", icon: BookOpen },
  { title: "예배", text: "가장 귀한 것을 하나님께 드립니다.", icon: HandHeart },
  { title: "성장", text: "성품과 습관, 전문성과 탁월함으로 자랍니다.", icon: Sprout },
];

const declarations = [
  { title: "Vision", body: "하나님의 말씀과 성령으로 균형 잡힌 그리스도인으로 성장하여, 세상의 빛과 소금으로 헌신하며, 마지막 한 사람까지 그리스도를 따르게 한다.", icon: Sparkles },
  { title: "Prayer", body: "기도는 하나님 앞에 정직하고 솔직하게 나아가는 것입니다. 오직 예수 그리스도의 이름으로, 진심을 담아 하나님께 나아갑니다.", icon: MessageCircleHeart },
  { title: "Community", body: "교회는 주님의 몸입니다. 우리는 서로를 돌보고, 유기적으로 연결되며, 머리 되신 예수 그리스도의 말씀에 순종합니다.", icon: Church },
  { title: "Mission", body: "우리는 함께 모여 그리스도의 충만함을 덧입고 세상으로 파송됩니다. 가정, 직장, 사업체, 각 모임과 열방에서 그리스도의 향기와 빛을 드러냅니다.", icon: Send },
];

function HomePage({ setTab }: { setTab: (tab: TabKey) => void }) {
  const visionRef = useRef<HTMLDivElement | null>(null);
  const scrollToVision = () => visionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="page">
      <section className="desktopGrid">
        <div className="hero">
          <span className="crossbar" />
          <div className="heroTop">
            <div className="kicker">WORD · WORSHIP · GROWTH</div>
            <h2>하나님은 사랑이십니다</h2>
            <p>우리는 사랑받는 하나님의 자녀입니다.<br />하나님은 우리와 함께 하십니다.</p>
          </div>
          <div className="heroBottom">
            <p>말씀 위에 세워지고, 예배로 충만해지며, 세상으로 파송되는 공동체입니다.</p>
            <div className="heroActions">
              <button className="primaryBtn" onClick={scrollToVision}>비전 보기 <ArrowRight size={17} /></button>
              <button className="ghostBtn" onClick={() => setTab("word")}>오늘의 말씀</button>
            </div>
          </div>
        </div>

        <div>
          <div className="sectionTitle"><h2>오늘의 말씀</h2><span>Daily Word</span></div>
          <article className="bigCard"><h3>요한일서 4:8</h3><p>“하나님은 사랑이심이라.” 사랑은 우리의 출발점이며, 임마누엘의 삶은 그 사랑 안에서 시작됩니다.</p></article>
          <div className="sectionTitle"><h2>Immanuel Thoughts</h2><span>Read</span></div>
          <article className="bigCard"><h3>사역에 대한 나의 생각</h3><p>말씀, 예배, 성장, 기도, 공동체, 파송의 고백을 따라 교회를 세우는 마스터 스크립트입니다.</p></article>
        </div>
      </section>

      <div className="sectionTitle"><h2>말씀 · 예배 · 성장</h2><span>Core 3</span></div>
      <section className="coreGrid">{core.map((item) => { const Icon = item.icon; return <article className="coreCard" key={item.title}><div className="coreIcon"><Icon size={23} /></div><h3>{item.title}</h3><p>{item.text}</p></article>; })}</section>

      <div ref={visionRef} className="sectionTitle"><h2>교회의 고백</h2><span>Declaration</span></div>
      <section>{declarations.map((item) => { const Icon = item.icon; return <article className="rowCard" key={item.title}><div className="rowIcon"><Icon size={24} /></div><div><h3>{item.title}</h3><p>{item.body}</p></div></article>; })}</section>
    </div>
  );
}

function WordPage() { return <div className="page"><div className="sectionTitle"><h2>말씀</h2><span>Word</span></div><article className="bigCard"><h3>하나님의 말씀은 진리이며 생명입니다.</h3><p>교회는 말씀 위에 세워지고, 말씀 안에 깊이 뿌리내리며, 말씀으로 분별하고, 말씀으로 세상을 비춥니다.</p></article><article className="rowCard"><div className="rowIcon"><BookOpen size={24} /></div><div><h3>오늘의 말씀</h3><p>매일 묵상할 말씀과 짧은 기도문을 제공합니다.</p></div></article><article className="rowCard"><div className="rowIcon"><Leaf size={24} /></div><div><h3>묵상 노트</h3><p>말씀을 읽고 마음에 남은 내용을 기록합니다.</p></div></article></div>; }
function PrayerPage() { return <div className="page"><div className="sectionTitle"><h2>기도</h2><span>Prayer</span></div><article className="bigCard"><h3>기도는 정직하고 솔직합니다.</h3><p>하나님은 정직하고 솔직히 기도하는 자의 양심 가운데 임재로 찾아오십니다. 오직 예수 그리스도의 이름으로, 진심을 담아 하나님께 나아가면 됩니다.</p></article><article className="rowCard"><div className="rowIcon"><MessageCircleHeart size={24} /></div><div><h3>개인 기도실</h3><p>나만의 기도제목과 응답을 기록합니다.</p></div></article><article className="rowCard"><div className="rowIcon"><HandHeart size={24} /></div><div><h3>공동체 기도벽</h3><p>목장과 공동체가 함께 중보합니다.</p></div></article></div>; }
function GrowthPage() { return <div className="page"><div className="sectionTitle"><h2>성장</h2><span>Growth</span></div><article className="bigCard"><h3>우리 성장의 모델은 그리스도 예수님입니다.</h3><p>우리는 성경 66권을 진리의 말씀으로 배우며 성장합니다. 성장은 성품과 습관의 영역이며, 각자의 삶과 일터에서 이루는 전문성과 탁월함의 영역입니다.</p></article><article className="rowCard"><div className="rowIcon"><Sprout size={24} /></div><div><h3>성장 여정</h3><p>새가족, 뿌리, 성장, 섬김, 리더의 길을 따라갑니다.</p></div></article><article className="rowCard"><div className="rowIcon"><Flame size={24} /></div><div><h3>매일의 습관</h3><p>말씀, 기도, 감사, 섬김의 작은 순종을 기록합니다.</p></div></article></div>; }
function MyPage() { return <div className="page"><div className="sectionTitle"><h2>마이</h2><span>Profile</span></div><article className="bigCard"><h3>로그인 준비 중</h3><p>다음 단계에서 Supabase Auth를 연결합니다. Guest, Member, Leader 권한 구조로 확장됩니다.</p></article><article className="rowCard"><div className="rowIcon"><Church size={24} /></div><div><h3>목장</h3><p>목장 중심의 공동체 기능이 들어갑니다.</p></div></article><article className="rowCard"><div className="rowIcon"><HandHeart size={24} /></div><div><h3>예배의 드림</h3><p>초기에는 계좌이체 안내 방식으로 제공합니다.</p></div></article></div>; }

const tabs = [
  { key: "home", label: "홈", icon: Home },
  { key: "word", label: "말씀", icon: BookOpen },
  { key: "prayer", label: "기도", icon: MessageCircleHeart },
  { key: "growth", label: "성장", icon: Sprout },
  { key: "my", label: "마이", icon: UserRound },
] as const;

function MenuPanel({ setOpen, setTab }: { setOpen: (open: boolean) => void; setTab: (tab: TabKey) => void }) {
  const go = (tab: TabKey) => { setTab(tab); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <div className="menuOverlay" onClick={() => setOpen(false)}><div className="menuPanel" onClick={(e) => e.stopPropagation()}><h2>메뉴</h2><div className="menuGrid"><button className="menuButton" onClick={() => go("home")}>홈</button><button className="menuButton" onClick={() => go("word")}>말씀</button><button className="menuButton" onClick={() => go("prayer")}>기도</button><button className="menuButton" onClick={() => go("growth")}>성장</button><button className="menuButton" onClick={() => go("my")}>마이</button><button className="menuButton" onClick={() => go("my")}>예배의 드림</button><button className="menuButton" onClick={() => go("home")}>Immanuel Thoughts</button></div><button className="closeButton" onClick={() => setOpen(false)}>닫기</button></div></div>;
}

export default function App() {
  const [tab, setTab] = useState<TabKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const changeTab = (nextTab: TabKey) => { setTab(nextTab); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <><main className="shell"><header className="topbar"><div className="brandrow"><div className="brand"><div className="mark">✝</div><div><h1>IMMANUEL CHURCH</h1><p>빛의자녀 공동체</p></div></div><button className="pill" onClick={() => setMenuOpen(true)}><Menu size={16} /> 메뉴</button></div></header>{tab === "home" && <HomePage setTab={changeTab} />}{tab === "word" && <WordPage />}{tab === "prayer" && <PrayerPage />}{tab === "growth" && <GrowthPage />}{tab === "my" && <MyPage />}</main><nav className="bottomNav" aria-label="앱 하단 메뉴">{tabs.map((item) => { const Icon = item.icon; return <button key={item.key} className={`navItem ${tab === item.key ? "active" : ""}`} onClick={() => changeTab(item.key)}><Icon /><span>{item.label}</span></button>; })}</nav>{menuOpen && <MenuPanel setOpen={setMenuOpen} setTab={changeTab} />}</>;
}

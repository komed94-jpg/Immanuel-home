"use client";

import { useRef, useState } from "react";
import {
  ArrowRight, BookOpen, CalendarDays, CheckCircle2, Church, Flame, Gift,
  HandHeart, Home, Leaf, Menu, MessageCircleHeart, Send, Sparkles, Sprout,
  SunMedium, UserRound, UsersRound
} from "lucide-react";

type TabKey =
  | "home" | "word" | "worship" | "prayer" | "growth" | "community" | "mission" | "giving" | "thoughts" | "my";

const core = [
  { title: "말씀", text: "진리이며 생명인 말씀 위에 세워집니다.", icon: BookOpen, tab: "word" as TabKey },
  { title: "예배", text: "가장 귀한 것을 하나님께 드립니다.", icon: HandHeart, tab: "worship" as TabKey },
  { title: "성장", text: "성품과 습관, 전문성과 탁월함으로 자랍니다.", icon: Sprout, tab: "growth" as TabKey },
];

const declarations = [
  { title: "Vision", body: "하나님의 말씀과 성령으로 균형 잡힌 그리스도인으로 성장하여, 세상의 빛과 소금으로 헌신하며, 마지막 한 사람까지 그리스도를 따르게 한다.", icon: Sparkles },
  { title: "Prayer", body: "기도는 하나님 앞에 정직하고 솔직하게 나아가는 것입니다. 오직 예수 그리스도의 이름으로, 진심을 담아 하나님께 나아갑니다.", icon: MessageCircleHeart },
  { title: "Community", body: "교회는 주님의 몸입니다. 우리는 서로를 돌보고, 유기적으로 연결되며, 머리 되신 예수 그리스도의 말씀에 순종합니다.", icon: Church },
  { title: "Mission", body: "우리는 함께 모여 그리스도의 충만함을 덧입고 세상으로 파송됩니다. 가정, 직장, 사업체, 각 모임과 열방에서 그리스도의 향기와 빛을 드러냅니다.", icon: Send },
];

function PageTitle({ title, label }: { title: string; label: string }) {
  return <div className="sectionTitle"><h2>{title}</h2><span>{label}</span></div>;
}

function HomePage({ setTab }: { setTab: (tab: TabKey) => void }) {
  const visionRef = useRef<HTMLDivElement | null>(null);
  const scrollToVision = () => visionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return <div className="page">
    <section className="desktopGrid">
      <div className="hero">
        <span className="crossbar" />
        <div className="heroTop"><div className="kicker">WORD · WORSHIP · GROWTH</div><h2>하나님은 사랑이십니다</h2><p>우리는 사랑받는 하나님의 자녀입니다.<br />하나님은 우리와 함께 하십니다.</p></div>
        <div className="heroBottom"><p>말씀 위에 세워지고, 예배로 충만해지며, 세상으로 파송되는 공동체입니다.</p><div className="heroActions"><button className="primaryBtn" onClick={scrollToVision}>비전 보기 <ArrowRight size={17} /></button><button className="ghostBtn" onClick={() => setTab("word")}>오늘의 말씀</button></div></div>
      </div>
      <div>
        <PageTitle title="오늘의 말씀" label="Daily Word" />
        <article className="bigCard"><h3>요한일서 4:8</h3><p>“하나님은 사랑이심이라.” 사랑은 우리의 출발점이며, 임마누엘의 삶은 그 사랑 안에서 시작됩니다.</p></article>
        <PageTitle title="이번 주 안내" label="This Week" />
        <article className="rowCard" onClick={() => setTab("worship")}><div className="rowIcon"><CalendarDays size={24} /></div><div><h3>주일예배 안내</h3><p>복음주의 정통 위에 서서 다음 세대를 환영하는 열린 예배를 드립니다.</p></div></article>
      </div>
    </section>
    <PageTitle title="말씀 · 예배 · 성장" label="Core 3" />
    <section className="coreGrid">{core.map((item) => { const Icon = item.icon; return <button className="coreCard" key={item.title} onClick={() => setTab(item.tab)}><div className="coreIcon"><Icon size={23} /></div><h3>{item.title}</h3><p>{item.text}</p></button>; })}</section>
    <PageTitle title="빠른 이동" label="Quick" />
    <section className="quickGrid">
      <button className="quickCard" onClick={() => setTab("prayer")}><div className="miniIcon"><MessageCircleHeart size={22} /></div><h3>기도</h3><p>개인 골방과 공동체 기도벽</p></button>
      <button className="quickCard" onClick={() => setTab("community")}><div className="miniIcon"><UsersRound size={22} /></div><h3>목장</h3><p>목장 중심 공동체</p></button>
      <button className="quickCard" onClick={() => setTab("mission")}><div className="miniIcon"><Send size={22} /></div><h3>파송</h3><p>가정, 직장, 열방으로</p></button>
      <button className="quickCard" onClick={() => setTab("giving")}><div className="miniIcon"><Gift size={22} /></div><h3>예배의 드림</h3><p>계좌이체 안내</p></button>
    </section>
    <div ref={visionRef}><PageTitle title="교회의 고백" label="Declaration" /></div>
    <section>{declarations.map((item) => { const Icon = item.icon; return <article className="rowCard" key={item.title}><div className="rowIcon"><Icon size={24} /></div><div><h3>{item.title}</h3><p>{item.body}</p></div></article>; })}</section>
    <PageTitle title="Immanuel Thoughts" label="Read" />
    <article className="bigCard" onClick={() => setTab("thoughts")}><h3>사역에 대한 나의 생각</h3><p>말씀, 예배, 성장, 기도, 공동체, 파송의 고백을 따라 교회를 세우는 마스터 스크립트입니다.</p></article>
  </div>;
}

function WordPage() { return <div className="page"><PageTitle title="말씀" label="Word" /><article className="bigCard"><h3>하나님의 말씀은 진리이며 생명입니다.</h3><p>교회는 말씀 위에 세워지고, 말씀 안에 깊이 뿌리내리며, 말씀으로 분별하고, 말씀으로 세상을 비춥니다.</p></article><article className="rowCard"><div className="rowIcon"><BookOpen size={24} /></div><div><h3>오늘의 말씀</h3><p>매일 묵상할 말씀과 짧은 기도문을 제공합니다.</p></div></article><article className="rowCard"><div className="rowIcon"><Leaf size={24} /></div><div><h3>묵상 노트</h3><p>말씀을 읽고 마음에 남은 내용을 기록합니다.</p></div></article><article className="rowCard"><div className="rowIcon"><CheckCircle2 size={24} /></div><div><h3>말씀으로 분별하기</h3><p>삶의 선택과 사역의 방향을 말씀으로 점검합니다.</p></div></article></div>; }

function WorshipPage() { return <div className="page"><PageTitle title="예배" label="Worship" /><article className="bigCard"><h3>예배는 하나님께 올려드리는 구별된 시간과 장소입니다.</h3><p>아벨처럼 나의 귀한 것을 구별하여 드리는 것입니다. 무엇을 드리느냐보다 어떻게 드리느냐가 중요합니다. 우리는 복음주의 정통 위에 서서, 다음 세대를 환영하는 열린 예배를 드립니다.</p></article><article className="rowCard"><div className="rowIcon"><HandHeart size={24} /></div><div><h3>주일예배</h3><p>하나님께서 기뻐하실 방법으로 나아갑니다.</p></div></article><article className="rowCard"><div className="rowIcon"><Flame size={24} /></div><div><h3>성령의 임재</h3><p>치유와 회복, 회개와 헌신이 흐르는 예배를 사모합니다.</p></div></article><article className="rowCard"><div className="rowIcon"><SunMedium size={24} /></div><div><h3>다음 세대</h3><p>다음 세대가 편안히 들어올 수 있는 열린 예배를 지향합니다.</p></div></article></div>; }

function PrayerPage() { return <div className="page"><PageTitle title="기도" label="Prayer" /><article className="bigCard"><h3>기도는 정직하고 솔직합니다.</h3><p>하나님은 정직하고 솔직히 기도하는 자의 양심 가운데 임재로 찾아오십니다. 오직 예수 그리스도의 이름으로, 진심을 담아 하나님께 나아가면 됩니다.</p></article><div className="segment"><button className="active">개인 골방</button><button>공동체 기도벽</button><button>응답 간증</button></div><article className="rowCard"><div className="rowIcon"><MessageCircleHeart size={24} /></div><div><h3>개인 기도실</h3><p>나만의 기도제목과 응답을 기록합니다.</p></div></article><article className="rowCard"><div className="rowIcon"><HandHeart size={24} /></div><div><h3>공동체 기도벽</h3><p>목장과 공동체가 함께 중보합니다.</p></div></article></div>; }

function GrowthPage() { return <div className="page"><PageTitle title="성장" label="Growth" /><article className="bigCard"><h3>우리 성장의 모델은 그리스도 예수님입니다.</h3><p>우리는 성경 66권을 진리의 말씀으로 배우며 성장합니다. 성장은 성품과 습관의 영역이며, 각자의 삶과 일터에서 이루는 전문성과 탁월함의 영역입니다.</p></article><div className="segment"><button className="active">새가족</button><button>뿌리</button><button>성장</button><button>섬김</button><button>리더</button></div><article className="bigCard"><h3>성장 여정 42%</h3><p>말씀, 기도, 감사, 섬김의 작은 순종을 기록합니다.</p><div className="progressWrap"><div className="progressBar" /></div></article><article className="rowCard"><div className="rowIcon"><Sprout size={24} /></div><div><h3>성장 여정</h3><p>새가족, 뿌리, 성장, 섬김, 리더의 길을 따라갑니다.</p></div></article></div>; }

function CommunityPage() { return <div className="page"><PageTitle title="공동체" label="Mokjang" /><article className="bigCard"><h3>교회는 주님의 몸입니다.</h3><p>몸은 서로를 돌보고 유기적으로 소통합니다. 몸은 자라나고 성장도에 맞는 일을 합니다. 그것이 사역입니다.</p></article><article className="rowCard"><div className="rowIcon"><UsersRound size={24} /></div><div><h3>목장 중심</h3><p>목장을 중심으로 기도, 돌봄, 모임, 양육이 이어집니다.</p></div></article><article className="rowCard"><div className="rowIcon"><CalendarDays size={24} /></div><div><h3>이번 주 목장</h3><p>모임 일정과 나눔 질문을 확인합니다.</p></div></article><article className="notice"><strong>채팅은 넣지 않습니다.</strong><p>공동체 피로를 줄이고, 게시판·기도·공지 중심으로 건강하게 운영합니다.</p></article></div>; }

function MissionPage() { return <div className="page"><PageTitle title="파송" label="Mission" /><article className="bigCard"><h3>우리는 단지 교회 프로그램에만 머물지 않습니다.</h3><p>함께 모여 그리스도의 충만함을 덧입고, 세상으로 파송됩니다. 가정, 직장, 사업의 현장, 다양한 공동체와 열방에서 그리스도의 향기와 빛을 드러냅니다.</p></article><article className="rowCard"><div className="rowIcon"><Home size={24} /></div><div><h3>가정</h3><p>가장 가까운 자리에서 사랑과 복음을 살아냅니다.</p></div></article><article className="rowCard"><div className="rowIcon"><Send size={24} /></div><div><h3>직장과 열방</h3><p>각자의 영역에서 빛과 소금으로 헌신합니다.</p></div></article></div>; }

function GivingPage() { return <div className="page"><PageTitle title="예배의 드림" label="Giving" /><article className="bigCard"><h3>나의 귀한 것을 가장 귀하신 하나님께 드립니다.</h3><p>초기 버전은 계좌이체 안내 방식으로 시작합니다. 카드 결제와 자동 확인 기능은 이후 단계에서 연결합니다.</p></article><article className="notice"><strong>계좌이체 안내</strong><p>은행명 / 계좌번호 / 예금주 정보는 추후 실제 정보로 교체합니다.</p></article><article className="rowCard"><div className="rowIcon"><Gift size={24} /></div><div><h3>드림 구분</h3><p>십일조, 감사, 선교, 구제, 기타 항목으로 정리합니다.</p></div></article></div>; }

function ThoughtsPage() { return <div className="page"><PageTitle title="Immanuel Thoughts" label="Archive" /><article className="bigCard"><h3>사역에 대한 나의 생각</h3><p>교회는 말씀 위에 세워지고, 예배로 충만해지며, 성장한 성도를 세상으로 파송하는 공동체입니다. 이 공간은 그 고백과 철학을 기록하는 영적 아카이브입니다.</p></article><article className="rowCard"><div className="rowIcon"><BookOpen size={24} /></div><div><h3>마스터 스크립트</h3><p>말씀, 교회, 예배, 성령, 성장, 파송의 원고를 정리합니다.</p></div></article><article className="rowCard"><div className="rowIcon"><Sparkles size={24} /></div><div><h3>묵상과 글</h3><p>목회적 통찰과 공동체를 위한 글을 모읍니다.</p></div></article></div>; }

function MyPage() { return <div className="page"><PageTitle title="마이" label="Profile" /><article className="bigCard"><h3>로그인 준비 중</h3><p>다음 단계에서 Supabase Auth를 연결합니다. Guest, Member, Leader 권한 구조로 확장됩니다.</p></article><article className="rowCard"><div className="rowIcon"><Church size={24} /></div><div><h3>목장</h3><p>내 목장과 성장 여정을 확인합니다.</p></div></article><article className="rowCard"><div className="rowIcon"><Gift size={24} /></div><div><h3>예배의 드림</h3><p>계좌이체 안내와 드림 기록 연결 예정입니다.</p></div></article></div>; }

const bottomTabs = [
  { key: "home", label: "홈", icon: Home },
  { key: "word", label: "말씀", icon: BookOpen },
  { key: "prayer", label: "기도", icon: MessageCircleHeart },
  { key: "growth", label: "성장", icon: Sprout },
  { key: "my", label: "마이", icon: UserRound },
] as const;

const menuItems: { label: string; tab: TabKey }[] = [
  { label: "홈", tab: "home" }, { label: "말씀", tab: "word" }, { label: "예배", tab: "worship" }, { label: "기도", tab: "prayer" }, { label: "성장", tab: "growth" }, { label: "공동체", tab: "community" }, { label: "파송", tab: "mission" }, { label: "예배의 드림", tab: "giving" }, { label: "Immanuel Thoughts", tab: "thoughts" }, { label: "마이", tab: "my" },
];

function MenuPanel({ setOpen, setTab }: { setOpen: (open: boolean) => void; setTab: (tab: TabKey) => void }) {
  const go = (tab: TabKey) => { setTab(tab); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <div className="menuOverlay" onClick={() => setOpen(false)}><div className="menuPanel" onClick={(e) => e.stopPropagation()}><h2>메뉴</h2><div className="menuGrid">{menuItems.map((item) => <button className="menuButton" key={item.label} onClick={() => go(item.tab)}>{item.label}</button>)}</div><button className="closeButton" onClick={() => setOpen(false)}>닫기</button></div></div>;
}

export default function App() {
  const [tab, setTab] = useState<TabKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const changeTab = (nextTab: TabKey) => { setTab(nextTab); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <>
    <main className="shell">
      <header className="topbar"><div className="brandrow"><button className="brand" onClick={() => changeTab("home")}><div className="mark">✝</div><div><h1>IMMANUEL CHURCH</h1><p>빛의자녀 공동체</p></div></button><button className="pill" onClick={() => setMenuOpen(true)}><Menu size={16} /> 메뉴</button></div></header>
      {tab === "home" && <HomePage setTab={changeTab} />}{tab === "word" && <WordPage />}{tab === "worship" && <WorshipPage />}{tab === "prayer" && <PrayerPage />}{tab === "growth" && <GrowthPage />}{tab === "community" && <CommunityPage />}{tab === "mission" && <MissionPage />}{tab === "giving" && <GivingPage />}{tab === "thoughts" && <ThoughtsPage />}{tab === "my" && <MyPage />}
    </main>
    <nav className="bottomNav" aria-label="앱 하단 메뉴">{bottomTabs.map((item) => { const Icon = item.icon; return <button key={item.key} className={`navItem ${tab === item.key ? "active" : ""}`} onClick={() => changeTab(item.key)}><Icon /><span>{item.label}</span></button>; })}</nav>
    {menuOpen && <MenuPanel setOpen={setMenuOpen} setTab={changeTab} />}
  </>;
}

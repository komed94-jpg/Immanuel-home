"use client";

import { useState } from "react";
import {
  BookOpen, CalendarDays, Church, Compass, Flame, Gift, HandHeart, Home, Menu,
  MessageCircleHeart, PlayCircle, Send, Sparkles, Sprout, UserRound, UsersRound, X
} from "lucide-react";

type PageKey = string;

const wayItems = [
  { key: "believe", title: "우리가 믿는 것", label: "하나님은 사랑이시며, 우리와 함께하십니다.", icon: Sparkles, body: "우리는 성경 66권을 믿음의 경전으로 붙들고, 살아 있는 하나님의 말씀 위에 세워지는 공동체입니다." },
  { key: "worshipReason", title: "우리가 예배하는 이유", label: "가장 귀한 것을 가장 귀하신 하나님께 드립니다.", icon: HandHeart, body: "예배는 하나님께 올려드리는 구별된 시간과 장소입니다. 우리는 아벨처럼 귀한 것을 하나님께 구별하여 드립니다." },
  { key: "prayerWay", title: "우리가 기도하는 방식", label: "하나님을 경험하는 시작은 진심입니다.", icon: MessageCircleHeart, body: "기도는 정직하고 솔직하게 하나님께 나아가는 것입니다. 하나님은 꾸며진 언어보다 진실한 마음을 기뻐하십니다." },
  { key: "spiritWay", title: "우리가 성령을 따라 사는 길", label: "성령의 임재와 기름부으심 안에서 회복됩니다.", icon: Flame, body: "성령이 임하시면 회개와 치유와 회복이 일어나며, 사명을 외면하던 사람이 다시 헌신하게 됩니다." },
  { key: "growthWay", title: "우리가 자라는 방식", label: "성품과 습관, 전문성과 탁월함이 함께 자랍니다.", icon: Sprout, body: "성장은 교회 프로그램 참여가 아니라 예수 그리스도를 닮아가는 과정입니다." },
  { key: "togetherWay", title: "우리가 함께 살아가는 길", label: "교회는 주님의 몸이며, 우리는 목장 안에서 돌봅니다.", icon: UsersRound, body: "교회는 주님의 몸입니다. 몸은 서로를 돌보고 연결되어 유기적으로 소통합니다." },
  { key: "wisdom", title: "우리가 분별하는 지혜", label: "견뎌야 할 문제와 피해야 할 유혹을 분별합니다.", icon: Compass, body: "믿음은 모든 문제를 같은 방식으로 대하지 않습니다. 어떤 것은 견디고 어떤 것은 끊어내야 합니다." },
  { key: "leadership", title: "우리가 세우는 리더십", label: "따뜻하지만 가볍지 않고, 가까우나 경계가 있습니다.", icon: UserRound, body: "목회는 사람을 모으는 기술이 아니라 사람을 살리는 일입니다." },
  { key: "offeringWay", title: "우리가 드리는 것", label: "헌금은 결제가 아니라 예배의 드림입니다.", icon: Gift, body: "헌금은 예배의 일부입니다. 우리는 나의 귀한 것을 가장 귀하신 하나님께 드립니다." },
  { key: "sendingReason", title: "우리가 세상으로 가는 이유", label: "모인 교회는 충만함을 받고, 흩어진 교회는 세상을 비춥니다.", icon: Send, body: "우리는 교회 안에만 머물지 않고 가정과 직장과 열방으로 파송됩니다." },
  { key: "dreamChurch", title: "우리가 꿈꾸는 교회", label: "말씀 위에 세워지고, 예배로 충만해지며, 세상으로 파송되는 교회.", icon: Church, body: "우리가 꿈꾸는 교회는 말씀과 성령이 함께 흐르고 성품과 탁월함이 함께 자라는 교회입니다." },
];

const services = [
  { key: "dailyWord", title: "오늘의 말씀", desc: "말씀과 묵상으로 하루를 시작합니다.", icon: BookOpen },
  { key: "worshipGuide", title: "예배 안내", desc: "예배 시간과 장소를 확인합니다.", icon: HandHeart },
  { key: "prayerRequest", title: "기도 요청", desc: "기도제목을 나눕니다.", icon: MessageCircleHeart },
  { key: "spiritMeeting", title: "성령집회", desc: "회복과 치유의 예배를 안내합니다.", icon: Flame },
  { key: "growthTrack", title: "성장 트랙", desc: "제자훈련을 안내합니다.", icon: Sprout },
  { key: "mokjangFind", title: "목장 찾기", desc: "목장 공동체에 연결됩니다.", icon: UsersRound },
  { key: "giving", title: "헌금 안내", desc: "예배의 드림을 안내합니다.", icon: Gift },
  { key: "sermons", title: "설교 아카이브", desc: "설교를 다시 듣습니다.", icon: PlayCircle },
  { key: "calendar", title: "행사 일정", desc: "교회 일정을 확인합니다.", icon: CalendarDays },
  { key: "newFamily", title: "새가족 등록", desc: "처음 오신 분을 안내합니다.", icon: Sparkles },
];

function Top({ active, go, open }: { active: PageKey; go: (p: PageKey)=>void; open: ()=>void }) {
  const menu = [["home","홈"],["way","임마누엘의 길"],["services","교회 서비스"],["content","콘텐츠"],["about","소개"]];
  return <header className="topbar">
    <button className="brand" onClick={()=>go("home")}><span className="brandMark">✝</span><span><strong>IMMANUEL CHURCH</strong><em>빛의자녀 공동체</em></span></button>
    <nav className="nav">{menu.map(([k,l])=><button key={k} className={active===k ? "on" : ""} onClick={()=>go(k)}>{l}</button>)}</nav>
    <button className="menuBtn" onClick={open}><Menu size={18}/> 메뉴</button>
  </header>
}

function ServiceStrip({ go }: { go: (p: PageKey)=>void }) {
  return <section className="quickStrip">
    {services.slice(0,6).map(item=>{ const Icon=item.icon; return <button key={item.key} onClick={()=>go(item.key)}><Icon size={28}/><strong>{item.title}</strong><span>{item.desc}</span></button> })}
  </section>
}

function WayGrid({ go }: { go: (p: PageKey)=>void }) {
  return <div className="wayGrid">{wayItems.map(item=>{ const Icon=item.icon; return <button className="wayCard" key={item.key} onClick={()=>go(item.key)}><Icon size={24}/><h3>{item.title}</h3><p>{item.label}</p></button>})}</div>
}

function ServiceGrid({ go }: { go: (p: PageKey)=>void }) {
  return <div className="serviceGrid">{services.map(item=>{ const Icon=item.icon; return <button className="serviceCard" key={item.key} onClick={()=>go(item.key)}><div className="icon"><Icon size={22}/></div><h3>{item.title}</h3><p>{item.desc}</p></button>})}</div>
}

function HomePage({ go }: { go: (p: PageKey)=>void }) {
  return <>
    <section className="heroFull">
      <div className="heroBg" />
      <div className="heroOverlay" />
      <div className="heroInner">
        <div className="version">v3.2 Full Hero</div>
        <p className="eyebrow">WORD · WORSHIP · GROWTH · SENDING</p>
        <h1>하나님은 사랑이십니다.<br/>하나님은 우리와 함께하십니다.</h1>
        <p className="lead">말씀 위에 세워지고, 예배로 충만해지며, 성장으로 성숙해지고, 세상으로 파송되는 공동체입니다.</p>
        <div className="actions"><button className="goldBtn" onClick={()=>go("way")}>임마누엘의 길</button><button className="lineBtn" onClick={()=>go("dailyWord")}>오늘의 말씀</button></div>
      </div>
    </section>
    <ServiceStrip go={go}/>
    <section className="section"><div className="sectionHead"><p>THE WAY OF IMMANUEL</p><h2>임마누엘의 길</h2><span>우리가 추구하는 신앙과 공동체의 방향입니다.</span></div><WayGrid go={go}/></section>
    <section className="section"><div className="sectionHead"><p>CHURCH SERVICES</p><h2>교회 서비스</h2><span>공동체 생활에 필요한 기능과 안내입니다.</span></div><ServiceGrid go={go}/></section>
  </>
}

function Editorial({ item }: { item: any }) {
  const Icon = item.icon;
  return <article className="editorial"><div className="readerIcon"><Icon size={30}/></div><p className="kicker">임마누엘의 길</p><h1>{item.title}</h1><span className="sub">{item.label}</span><div className="essay"><p>{item.body}</p><p>이 페이지는 교회의 철학을 깊이 있게 읽히는 에디토리얼 형식으로 풀어내는 공간입니다. 내용은 깊고, 표현은 현대적이며, 필요한 곳에는 서비스가 자연스럽게 연결됩니다.</p></div></article>
}

function Service({ item, go }: { item: any; go: (p: PageKey)=>void }) {
  const Icon = item.icon;
  return <article className="editorial"><div className="readerIcon"><Icon size={30}/></div><p className="kicker">교회 서비스</p><h1>{item.title}</h1><span className="sub">{item.desc}</span><div className="serviceBox"><h3>서비스 준비 영역</h3><p>이곳은 앞으로 실제 입력, 신청, 기록, 검색 기능으로 확장됩니다.</p><button onClick={()=>go("services")}>서비스 목록으로</button></div></article>
}

function SimplePage({ title, kicker, body }: { title:string; kicker:string; body:string }) {
  return <article className="editorial"><p className="kicker">{kicker}</p><h1>{title}</h1><span className="sub">{body}</span></article>
}

function MobileMenu({ open, close, go }: { open:boolean; close:()=>void; go:(p:PageKey)=>void }) {
  if(!open) return null;
  const items = [["home","홈"],["way","임마누엘의 길"],["services","교회 서비스"],["content","콘텐츠"],["about","소개"]];
  return <div className="overlay" onClick={close}><aside className="drawer" onClick={(e)=>e.stopPropagation()}><div className="drawerHead"><h2>메뉴</h2><button onClick={close}><X size={18}/></button></div>{items.map(([k,l])=><button key={k} onClick={()=>{go(k);close();}}>{l}</button>)}</aside></div>
}

export default function Page(){
  const [active,setActive] = useState<PageKey>("home");
  const [menu,setMenu] = useState(false);
  const way = wayItems.find(i=>i.key===active);
  const service = services.find(i=>i.key===active);
  const go = (p: PageKey) => { setActive(p); window.scrollTo({top:0,behavior:"smooth"}); };
  return <>
    <main>
      <Top active={active} go={go} open={()=>setMenu(true)}/>
      {active==="home" && <HomePage go={go}/>}
      {active==="way" && <section className="page section"><div className="sectionHead"><p>THE WAY OF IMMANUEL</p><h2>임마누엘의 길</h2><span>우리가 함께 고백하고 추구하는 교회의 방향입니다.</span></div><WayGrid go={go}/></section>}
      {active==="services" && <section className="page section"><div className="sectionHead"><p>CHURCH SERVICES</p><h2>교회 서비스</h2><span>공동체의 실제 생활을 돕는 서비스입니다.</span></div><ServiceGrid go={go}/></section>}
      {active==="content" && <SimplePage title="콘텐츠" kicker="CONTENT HUB" body="설교, 칼럼, 영상, 간증, 자료를 모아 임마누엘의 신앙과 훈련을 흘려보내는 공간입니다."/>}
      {active==="about" && <SimplePage title="소개" kicker="ABOUT IMMANUEL" body="Immanuel Church는 하나님이 함께하시는 복음의 고백 위에 세워진 공동체입니다."/>}
      {active==="my" && <SimplePage title="마이" kicker="MY PAGE" body="로그인 이후 개인의 말씀, 기도, 성장, 목장 연결이 들어갈 공간입니다."/>}
      {way && <Editorial item={way}/>}
      {service && <Service item={service} go={go}/>}
    </main>
    <nav className="bottomNav">{[
      { key:"home", label:"홈", icon:Home },{ key:"believe", label:"말씀", icon:BookOpen },{ key:"prayerWay", label:"기도", icon:MessageCircleHeart },{ key:"growthWay", label:"성장", icon:Sprout },{ key:"my", label:"마이", icon:UserRound }
    ].map(({key,label,icon:Icon})=><button key={key} className={active===key?"active":""} onClick={()=>go(key)}><Icon/><span>{label}</span></button>)}</nav>
    <MobileMenu open={menu} close={()=>setMenu(false)} go={go}/>
  </>
}

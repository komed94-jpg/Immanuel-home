"use client";

import { useState } from "react";

type PageKey = string;

const wayItems = [
  {
    key: "believe",
    icon: "✦",
    title: "우리가 믿는 것",
    label: "하나님은 사랑이시며, 우리와 함께하십니다.",
    mood: "mood-believe",
    body: [
      "하나님은 사랑이십니다. 우리는 사랑받는 하나님의 자녀입니다. 하나님은 우리와 함께하십니다.",
      "이 고백은 임마누엘교회의 가장 깊은 출발점입니다. 우리는 우연히 모인 사람들이 아니라, 하나님의 사랑 안에서 부름받은 사람들입니다. 하나님은 멀리 계신 분이 아니라 우리와 함께하시는 분이며, 우리의 삶 한가운데 임재하시는 분입니다.",
      "우리는 하나님의 말씀을 진리이며 생명으로 믿습니다. 교회는 사람의 생각이나 시대의 흐름 위에 세워지지 않고, 살아 있는 하나님의 말씀 위에 세워집니다. 그러므로 임마누엘교회는 말씀 안에 깊이 뿌리내리고, 말씀으로 삶을 분별하며, 말씀의 빛으로 세상을 비추는 공동체가 되기를 소망합니다.",
      "임마누엘교회는 마지막 한 사람까지 그리스도를 따르게 하는 공동체를 꿈꿉니다. 우리는 말씀으로 세워지고, 성령으로 충만해지며, 세상 속에서 그리스도의 빛을 드러내는 하나님의 자녀로 살아가고자 합니다."
    ],
  },
  {
    key: "worshipReason",
    icon: "⌁",
    title: "우리가 예배하는 이유",
    label: "가장 귀한 것을 가장 귀하신 하나님께 드립니다.",
    mood: "mood-worship",
    body: [
      "예배는 가장 귀한 것을 가장 귀하신 하나님께 드리는 일입니다.",
      "우리는 예배를 단순한 종교적 순서로 생각하지 않습니다. 예배는 하나님 앞에 나아가 우리의 마음과 시간과 삶을 올려드리는 거룩한 고백입니다. 남은 시간을 드리는 것이 아니라, 가장 먼저 구별한 시간을 하나님께 올려드리는 것입니다.",
      "아벨은 형식적으로 드리지 않았습니다. 그는 가장 좋은 것, 첫 양의 새끼를 믿음으로 드렸고, 사랑으로 드렸으며, 기쁨으로 하나님께 올려드렸습니다.",
      "예배는 끝나는 자리가 아니라 시작되는 자리입니다. 우리는 예배 가운데 하나님의 마음을 받고, 세상을 향한 부르심을 새롭게 확인합니다. 충만함을 받은 사람은 다시 세상으로 파송되어 하나님의 빛과 소금으로 살아가게 됩니다.",
      "그러므로 우리는 예배를 가장 소중히 여깁니다. 가장 귀한 것을 가장 귀하신 하나님께 드리는 것, 그것이 우리가 예배하는 이유입니다."
    ],
  },
  {
    key: "prayerWay",
    icon: "◌",
    title: "우리가 기도하는 방식",
    label: "하나님을 경험하는 시작은 진심입니다.",
    mood: "mood-prayer",
    body: [
      "기도는 하나님과의 가장 깊고도 사적인 만남입니다.",
      "기도는 살아 계신 하나님 앞에 진심으로 나아가는 것입니다. 하나님은 화려한 표현보다 정직한 마음을 기뻐하시며, 꾸며진 언어보다 진실한 고백을 받으십니다.",
      "하나님은 진심 있는 기도에 응답하십니다. 사회적 지위와 경제적 풍요와 세상의 권력이 하나님께 나아가는 자격이 되지는 않습니다. 하나님께서 찾으시는 사람은 예수 그리스도의 이름으로 진실하게 기도하는 사람입니다.",
      "임마누엘교회는 이것을 정직한 기도, Honest Prayer라고 부릅니다. 하나님 앞에서 숨기지 않는 것이 믿음의 시작이며, 진실하게 엎드리는 것이 회복의 시작입니다.",
      "기도는 하나님을 움직이는 기술이 아닙니다. 기도는 하나님과 동행하는 자리입니다."
    ],
  },
  {
    key: "spiritWay",
    icon: "△",
    title: "우리가 성령을 따라 사는 길",
    label: "성령 하나님 안에서 회복되고 새로워집니다.",
    mood: "mood-spirit",
    body: [
      "성령은 삼위일체 하나님의 제3위격이십니다. 그러므로 임마누엘교회는 경외함으로 성령 하나님이라 부릅니다.",
      "성령 하나님은 지금도 우리의 삶 가운데 실제로 역사하시는 살아 계신 하나님이십니다.",
      "성령의 기름부으심이 임하면 회개가 일어나고, 치유와 회복이 일어나며, 무너졌던 삶의 자리가 다시 일으켜 세워집니다.",
      "은사는 사단의 왕국을 무너뜨리고, 잃어버린 영혼을 하나님께로 되돌리며, 하나님 나라를 확장하기 위해 하나님께서 주시는 신적 능력입니다. 그러므로 은사는 자랑이 아니라 섬김의 선물입니다.",
      "우리는 말씀과 성령의 균형을 소중히 여깁니다. 말씀은 우리의 뿌리가 되고, 성령은 우리의 생명이 됩니다."
    ],
  },
  {
    key: "growthWay",
    icon: "⌃",
    title: "우리가 자라는 방식",
    label: "성품과 일의 탁월함이 함께 자랍니다.",
    mood: "mood-growth",
    body: [
      "우리는 균형 잡힌 그리스도인으로 성장하기를 원합니다.",
      "성장은 단지 교회 프로그램에 참여하는 것이 아닙니다. 성장은 예수 그리스도를 닮아 가는 과정이며, 하나님께서 우리 안에 시작하신 새 생명이 삶 전체로 확장되어 가는 여정입니다.",
      "임마누엘교회가 추구하는 성장은 균형 있는 성장이며, 그것은 곧 그리스도의 탁월함을 닮아 가는 것입니다.",
      "우리는 성품의 탁월함과 맡겨진 일에 대한 탁월함을 함께 추구합니다. 성품만 있고 실력이 없다면 영향력이 제한되고, 실력만 있고 성품이 없다면 결국 사람을 세우기보다 무너뜨릴 수 있습니다.",
      "임마누엘교회의 목표는 단지 교회 건물 안의 신자를 만드는 것이 아니라, 세상 속에서 빛과 소금으로 살아갈 예수님의 제자를 세우는 것입니다."
    ],
  },
  {
    key: "togetherWay",
    icon: "◎",
    title: "우리가 함께 살아가는 길",
    label: "교회는 주님의 몸이며, 우리는 함께 자랍니다.",
    mood: "mood-together",
    body: [
      "우리는 교회를 단순히 사람들이 모이는 장소로 생각하지 않습니다. 성경이 말하는 교회의 본질은 주님의 몸입니다.",
      "우리는 교회를 가족이라고 표현하기보다 가족 같은 공동체라고 말합니다. 교회의 중심은 혈연이 아니라 그리스도이며, 우리는 예수 그리스도 안에서 연결된 한 몸의 지체들입니다.",
      "몸은 서로 연결되어 있습니다. 몸은 서로를 돌봅니다. 몸은 함께 자랍니다. 몸은 각자의 역할을 감당합니다.",
      "임마누엘교회는 목장 중심 공동체를 지향합니다. 작은 공동체 안에서 돌봄이 일어나고, 회복이 일어나며, 양육이 이루어지고, 다시 세상으로 파송되는 삶이 시작됩니다.",
      "우리는 사랑하지만 경계를 잃지 않습니다. 우리는 따뜻하지만 질서를 잃지 않습니다."
    ],
  },
  {
    key: "wisdom",
    icon: "◇",
    title: "우리가 분별하는 지혜",
    label: "견뎌야 할 문제와 피해야 할 유혹을 분별합니다.",
    mood: "mood-wisdom",
    body: [
      "우리는 삶의 모든 문제를 같은 방식으로 대하지 않습니다. 하나님께서는 우리에게 믿음만이 아니라 분별의 지혜도 주셨기 때문입니다.",
      "첫째는 극복해야 할 문제입니다. 질병과 경제적 어려움, 관계의 상처와 삶의 무게처럼 믿음으로 견디고 통과해야 할 문제들이 있습니다.",
      "둘째는 피해야 할 유혹입니다. 욕망과 탐욕, 정욕과 교만, 무분별한 성공욕과 권력욕, 그리고 돈에 대한 지나친 사랑처럼 우리의 영혼을 무너뜨리는 유혹들이 있습니다.",
      "견딜 것은 믿음으로 견디고, 끊어낼 것은 단호하게 끊어냅니다. 붙들어야 할 것은 끝까지 붙들고, 내려놓아야 할 것은 미련 없이 내려놓습니다.",
      "임마누엘교회는 진리 안에서 분별하고, 사랑 안에서 선택하며, 거룩함 안에서 살아가는 공동체가 되기를 소망합니다."
    ],
  },
  {
    key: "leadership",
    icon: "◈",
    title: "우리가 세우는 리더십",
    label: "따뜻하지만 가볍지 않고, 가까우나 경계가 있습니다.",
    mood: "mood-leadership",
    body: [
      "우리는 리더십을 자리를 차지하는 힘으로 생각하지 않습니다. 리더십은 사람을 세우는 책임이며, 하나님께서 맡기신 생명을 돌보고 살리는 거룩한 사명입니다.",
      "목회는 사람을 모으는 기술이 아니라 사람을 살리는 일입니다.",
      "친구 같은 목회자일 수는 있지만, 친구가 되어서는 안 됩니다. 목회자는 사랑으로 가까이 다가가되, 하나님께서 맡기신 책임의 자리와 거룩한 선을 지켜야 합니다.",
      "건강한 권위는 군림하지 않습니다. 건강한 권위는 먼저 섬기고, 먼저 낮아지며, 먼저 책임지는 자리에서 세워집니다.",
      "한 사람을 살리고, 한 사람을 세우고, 또 그 한 사람이 다른 사람을 세우게 만드는 것, 그것이 우리가 세우는 리더십입니다."
    ],
  },
  {
    key: "offeringWay",
    icon: "✧",
    title: "우리가 드리는 것",
    label: "헌금은 결제가 아니라 예배의 드림입니다.",
    mood: "mood-offering",
    body: [
      "우리는 하나님께 드리는 삶을 배워 갑니다.",
      "헌금은 단순한 재정 행위가 아닙니다. 헌금은 결제가 아닙니다. 헌금은 예배입니다.",
      "우리는 시간을 드리고, 재능을 드리고, 기도를 드리고, 마음을 드리고, 삶 전체를 하나님께 드립니다.",
      "우리는 청지기의 정신을 소중히 여깁니다. 우리의 시간도, 재능도, 물질도, 기회도 본래 우리의 것이 아니라 하나님께서 맡기신 것입니다.",
      "임마누엘교회는 받은 은혜에 감사로 응답하며, 기쁨으로 드리고, 하나님 나라를 위해 아낌없이 심는 공동체가 되기를 소망합니다."
    ],
  },
  {
    key: "sendingReason",
    icon: "→",
    title: "우리가 세상으로 가는 이유",
    label: "모인 교회는 충만함을 받고, 흩어진 교회는 세상을 비춥니다.",
    mood: "mood-sending",
    body: [
      "우리는 교회가 모이기 위해서만 존재한다고 믿지 않습니다. 교회는 보내심을 받은 공동체이며, 하나님께 충만함을 받고 다시 세상으로 파송되는 공동체입니다.",
      "예배는 끝이 아니라 시작입니다. 우리는 하나님께서 주신 은혜를 품고 다시 세상 속으로 나아갑니다.",
      "우리는 가정으로 갑니다. 일터로 갑니다. 학교로 갑니다. 도시로 갑니다. 그리고 열방으로 나아갑니다.",
      "직업은 단지 돈을 버는 수단이 아니라 하나님께서 맡기신 소명일 수 있습니다.",
      "임마누엘교회의 부르심은 마지막 한 사람까지 그리스도를 따르게 하는 것입니다."
    ],
  },
  {
    key: "dreamChurch",
    icon: "✚",
    title: "우리가 꿈꾸는 교회",
    label: "하나님이 함께하시는 살아 있는 교회.",
    mood: "mood-dream",
    body: [
      "우리가 꿈꾸는 교회는 살아 있는 교회입니다.",
      "말씀 위에 견고히 세워지고, 예배 가운데 하나님을 깊이 만나며, 기도 가운데 하나님을 실제로 경험하고, 성령의 능력 가운데 회복과 새로움을 누리는 교회입니다.",
      "우리가 꿈꾸는 교회는 사람이 자라는 교회입니다. 신자가 제자가 되고, 제자가 다시 사람을 세우는 리더가 되는 교회입니다.",
      "우리가 꿈꾸는 교회는 세상을 향해 열려 있는 교회입니다. 교회 안에 머무는 신앙이 아니라 세상 속으로 들어가는 신앙을 추구합니다.",
      "하나님이 함께하시는 교회, 임마누엘의 교회, 그것이 우리가 꿈꾸는 교회입니다."
    ],
  }
];

const services = [
  { key: "dailyWord", icon: "□", title: "오늘의 말씀", desc: "말씀과 묵상으로 하루를 시작합니다." },
  { key: "worshipGuide", icon: "⌁", title: "예배 안내", desc: "예배 시간과 장소를 확인합니다." },
  { key: "prayerRequest", icon: "◌", title: "기도 요청", desc: "기도제목을 나눕니다." },
  { key: "spiritMeeting", icon: "△", title: "성령집회", desc: "회복과 치유의 예배를 안내합니다." },
  { key: "growthTrack", icon: "⌃", title: "성장 트랙", desc: "제자훈련을 안내합니다." },
  { key: "mokjangFind", icon: "◎", title: "목장 찾기", desc: "목장 공동체에 연결됩니다." },
  { key: "giving", icon: "✧", title: "헌금 안내", desc: "예배의 드림을 안내합니다." },
  { key: "sermons", icon: "▷", title: "설교 아카이브", desc: "설교를 다시 듣습니다." },
  { key: "calendar", icon: "◇", title: "행사 일정", desc: "교회 일정을 확인합니다." },
  { key: "newFamily", icon: "✦", title: "새가족 등록", desc: "처음 오신 분을 안내합니다." }
];

function Top({ active, go, open }: { active: PageKey; go: (p: PageKey)=>void; open: ()=>void }) {
  const menu = [["home","홈"],["way","임마누엘의 길"],["services","교회 서비스"],["content","콘텐츠"],["about","소개"]];
  return <header className="topbar">
    <button className="brand" onClick={()=>go("home")}><span className="brandMark">✝</span><span><strong>IMMANUEL CHURCH</strong><em>빛의자녀 공동체</em></span></button>
    <nav className="nav">{menu.map(([k,l])=><button key={k} className={active===k ? "on" : ""} onClick={()=>go(k)}>{l}</button>)}</nav>
    <button className="menuBtn" onClick={open}>☰ 메뉴</button>
  </header>
}

function ServiceStrip({ go }: { go: (p: PageKey)=>void }) {
  return <section className="quickStrip">{services.slice(0,6).map(item=><button key={item.key} onClick={()=>go(item.key)}><i>{item.icon}</i><strong>{item.title}</strong><span>{item.desc}</span></button>)}</section>
}

function WayGrid({ go }: { go: (p: PageKey)=>void }) {
  return <div className="wayGrid">{wayItems.map(item=><button className="wayCard" key={item.key} onClick={()=>go(item.key)}><i>{item.icon}</i><h3>{item.title}</h3><p>{item.label}</p></button>)}</div>
}

function ServiceGrid({ go }: { go: (p: PageKey)=>void }) {
  return <div className="serviceGrid">{services.map(item=><button className="serviceCard" key={item.key} onClick={()=>go(item.key)}><div className="icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></button>)}</div>
}

function HomePage({ go }: { go: (p: PageKey)=>void }) {
  return <>
    <section className="heroFull">
      <div className="heroBg" />
      <div className="heroOverlay" />
      <div className="heroInner">
        <div className="version">Im v3-5</div>
        <p className="eyebrow">WORD · WORSHIP · GROWTH · SENDING</p>
        <h1>하나님은 사랑이십니다.<br/>하나님은 우리와 함께하십니다.</h1>
        <p className="lead">말씀 위에 세워지고, 예배로 충만해지며, 성장으로 성숙해지고, 세상으로 파송되는 공동체입니다.</p>
        <div className="actions"><button className="goldBtn" onClick={()=>go("way")}>임마누엘의 길</button><button className="lineBtn" onClick={()=>go("dailyWord")}>오늘의 말씀</button></div>
      </div>
    </section>
    <ServiceStrip go={go}/>
    <section className="page section"><div className="sectionHead"><p>THE WAY OF IMMANUEL</p><h2>임마누엘의 길</h2><span>우리가 추구하는 신앙과 공동체의 방향입니다.</span></div><WayGrid go={go}/></section>
    <section className="page section"><div className="sectionHead"><p>CHURCH SERVICES</p><h2>교회 서비스</h2><span>공동체 생활에 필요한 기능과 안내입니다.</span></div><ServiceGrid go={go}/></section>
  </>
}

function Editorial({ item }: { item: any }) {
  return <section className={`editorialShell ${item.mood}`}>
    <div className="editorialShade" />
    <article className="editorialCard">
      <div className="readerIcon">{item.icon}</div>
      <p className="kicker">임마누엘의 길</p>
      <h1>{item.title}</h1>
      <span className="sub">{item.label}</span>
      <div className="essay">{item.body.map((p: string, i: number)=><p key={i}>{p}</p>)}</div>
    </article>
  </section>
}

function Service({ item, go }: { item: any; go: (p: PageKey)=>void }) {
  return <section className="editorialShell mood-service">
    <div className="editorialShade" />
    <article className="editorialCard">
      <div className="readerIcon">{item.icon}</div>
      <p className="kicker">교회 서비스</p>
      <h1>{item.title}</h1>
      <span className="sub">{item.desc}</span>
      <div className="serviceBox"><h3>서비스 준비 영역</h3><p>이곳은 앞으로 실제 입력, 신청, 기록, 검색 기능으로 확장됩니다.</p><button onClick={()=>go("services")}>서비스 목록으로</button></div>
    </article>
  </section>
}

function SimplePage({ title, kicker, body }: { title:string; kicker:string; body:string }) {
  return <section className="editorialShell mood-dream"><div className="editorialShade" /><article className="editorialCard"><p className="kicker">{kicker}</p><h1>{title}</h1><span className="sub">{body}</span></article></section>
}

function MobileMenu({ open, close, go }: { open:boolean; close:()=>void; go:(p:PageKey)=>void }) {
  if(!open) return null;
  const items = [["home","홈"],["way","임마누엘의 길"],["services","교회 서비스"],["content","콘텐츠"],["about","소개"]];
  return <div className="overlay" onClick={close}><aside className="drawer" onClick={(e)=>e.stopPropagation()}><div className="drawerHead"><h2>메뉴</h2><button onClick={close}>×</button></div>{items.map(([k,l])=><button key={k} onClick={()=>{go(k);close();}}>{l}</button>)}</aside></div>
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
      {active==="way" && <section className="page section topSpace"><div className="sectionHead"><p>THE WAY OF IMMANUEL</p><h2>임마누엘의 길</h2><span>우리가 함께 고백하고 추구하는 교회의 방향입니다.</span></div><WayGrid go={go}/></section>}
      {active==="services" && <section className="page section topSpace"><div className="sectionHead"><p>CHURCH SERVICES</p><h2>교회 서비스</h2><span>공동체의 실제 생활을 돕는 서비스입니다.</span></div><ServiceGrid go={go}/></section>}
      {active==="content" && <SimplePage title="콘텐츠" kicker="CONTENT HUB" body="설교, 칼럼, 영상, 간증, 자료를 모아 임마누엘의 신앙과 훈련을 흘려보내는 공간입니다."/>}
      {active==="about" && <SimplePage title="소개" kicker="ABOUT IMMANUEL" body="Immanuel Church는 하나님이 함께하시는 복음의 고백 위에 세워진 공동체입니다."/>}
      {active==="my" && <SimplePage title="마이" kicker="MY PAGE" body="로그인 이후 개인의 말씀, 기도, 성장, 목장 연결이 들어갈 공간입니다."/>}
      {way && <Editorial item={way}/>}
      {service && <Service item={service} go={go}/>}
    </main>
    <nav className="bottomNav">{[
      { key:"home", label:"홈", icon:"⌂" },{ key:"believe", label:"말씀", icon:"□" },{ key:"prayerWay", label:"기도", icon:"◌" },{ key:"growthWay", label:"성장", icon:"⌃" },{ key:"my", label:"마이", icon:"○" }
    ].map(({key,label,icon})=><button key={key} className={active===key?"active":""} onClick={()=>go(key)}><i>{icon}</i><span>{label}</span></button>)}</nav>
    <MobileMenu open={menu} close={()=>setMenu(false)} go={go}/>
  </>
}

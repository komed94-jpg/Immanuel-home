"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Church,
  Compass,
  Cross,
  Flame,
  Gift,
  HandHeart,
  Home,
  Menu,
  MessageCircleHeart,
  ScrollText,
  Send,
  Sprout,
  UserRound,
  X,
} from "lucide-react";

type ChapterKey =
  | "home"
  | "core"
  | "vision"
  | "word"
  | "church"
  | "worship"
  | "spirit"
  | "prayer"
  | "growth"
  | "sending"
  | "wisdom"
  | "leadership"
  | "training"
  | "mokjang"
  | "offering"
  | "thoughts"
  | "my";

type Chapter = {
  key: ChapterKey;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  body: string[];
};

const chapters: Chapter[] = [
  {
    key: "core",
    title: "Core Declaration",
    subtitle: "하나님이 함께하시는 공동체의 첫 고백",
    icon: Cross,
    body: [
      "하나님은 사랑이십니다. 우리는 사랑받는 하나님의 자녀입니다. 하나님은 우리와 함께하십니다. 이 세 문장은 Immanuel Church의 가장 깊은 출발점입니다. 우리는 우연히 모인 사람들이 아니라, 하나님의 사랑 안에서 부름받은 사람들입니다.",
      "임마누엘은 단순한 위로의 말이 아닙니다. 하나님께서 우리의 삶 한가운데 실제로 함께하신다는 믿음이며, 그 믿음은 우리의 삶을 해석하는 기준이 되고, 선택의 방향이 되며, 살아갈 힘이 됩니다.",
      "우리는 말씀 위에 세워지고, 예배로 충만해지며, 성장으로 성숙해지고, 세상으로 파송되는 공동체입니다. 이 흐름은 프로그램 순서가 아니라 교회의 영적 호흡입니다."
    ],
  },
  {
    key: "vision",
    title: "Vision",
    subtitle: "말씀과 성령으로 균형 잡힌 그리스도인",
    icon: Compass,
    body: [
      "하나님의 말씀과 성령으로 균형 잡힌 그리스도인으로 성장하여, 세상의 빛과 소금으로 헌신하며, 마지막 한 사람까지 그리스도를 따르게 한다.",
      "이 비전은 단순히 교회 안에서 좋은 프로그램을 운영하겠다는 목표가 아닙니다. 우리는 말씀과 성령이 함께 흐르는 균형 잡힌 신앙을 추구합니다. 말씀 없는 열정은 흔들리고, 성령 없는 지식은 생명력을 잃습니다.",
      "그러므로 Immanuel Church는 말씀 위에 견고히 서고, 성령의 임재와 능력 안에서 회개와 치유와 회복과 사명을 경험하는 공동체를 지향합니다."
    ],
  },
  {
    key: "word",
    title: "The Word",
    subtitle: "말씀은 진리이며 생명입니다",
    icon: BookOpen,
    body: [
      "하나님의 말씀은 진리이며 생명입니다. 교회는 사람의 생각과 시대의 흐름 위에 세워지지 않고, 살아 있는 하나님의 말씀 위에 세워집니다.",
      "우리는 말씀 안에 깊이 뿌리를 내리고, 말씀으로 삶을 분별하며, 말씀의 빛으로 세상을 비추는 공동체가 되기를 소망합니다. 성경 66권은 우리의 유일한 믿음의 경전이며, 설교와 교육과 훈련과 분별의 기준입니다.",
      "교회의 기초는 경험도 아니고, 유행도 아니며, 지도자의 카리스마도 아닙니다. 교회의 기초는 하나님의 말씀입니다. 말씀이 약해지면 교회는 감정에 흔들리고, 말씀이 흐려지면 세상정신에 잠식되며, 말씀이 중심을 잃으면 사역은 방향을 잃습니다.",
      "그러므로 우리는 성경 66권을 진리의 말씀으로 믿고, 그 말씀 안에서 배우고, 뿌리내리고, 분별하고, 살아냅니다."
    ],
  },
  {
    key: "church",
    title: "The Church",
    subtitle: "교회는 주님의 몸입니다",
    icon: Church,
    body: [
      "교회는 주님의 몸입니다. 교회는 단순한 종교 조직이 아니며, 사람들이 모이는 프로그램 공간도 아닙니다. 교회는 예수 그리스도께서 머리 되시고 성도들이 지체로 연결된 살아 있는 몸입니다.",
      "몸은 서로를 돌봅니다. 몸은 서로를 쓰다듬으며 아픔을 나눕니다. 몸은 서로 연결되어 유기적으로 소통합니다. 몸은 자라나고 성장하며, 성장한 만큼 맡겨진 일을 감당합니다. 그것이 사역입니다.",
      "그러므로 사역은 직분 경쟁이 아닙니다. 사역은 성장의 분량에 맞는 순종입니다. 누가 더 높은 자리에 있느냐가 아니라, 누가 그리스도의 몸 안에서 자기 분량을 따라 충성하느냐가 중요합니다.",
      "교회는 가족 같은 공동체입니다. 그러나 교회의 본질은 가족보다 더 깊은 그리스도의 몸입니다. 가족 같은 따뜻함은 있어야 하지만, 거룩한 질서와 경계가 무너져서는 안 됩니다."
    ],
  },
  {
    key: "worship",
    title: "Worship",
    subtitle: "가장 귀한 것을 하나님께 드리는 구별된 시간",
    icon: HandHeart,
    body: [
      "예배는 하나님께 올려드리는 구별된 시간과 장소입니다. 우리는 아벨이 양의 첫 새끼와 그 기름을 구별하여 드렸던 것처럼, 우리의 귀한 것을 하나님께 구별하여 드립니다.",
      "예배의 핵심은 무엇을 드리느냐 이전에, 어떤 마음과 태도로 드리느냐입니다. 가인의 문제는 직업의 문제가 아니었습니다. 농업이 목축보다 낮아서가 아니었습니다. 문제는 그가 하나님께 귀한 것을 구별하여 드렸는가, 하나님께서 기뻐하실 방식으로 드렸는가에 있었습니다.",
      "예배는 나의 귀한 것을 가장 귀하신 성삼위 하나님께, 하나님께서 기뻐하실 방법으로 드리는 것입니다. 시간도, 마음도, 물질도, 집중도, 회개도, 감사도, 헌신도 하나님께 구별하여 올려드리는 것이 예배자의 정신입니다.",
      "우리는 복음주의 정통 위에 서서, 다음 세대를 환영하는 열린 예배를 드립니다. 깊이는 잃지 않고, 생명력은 살아 있으며, 진리는 견고하고, 표현은 열려 있는 예배를 꿈꿉니다."
    ],
  },
  {
    key: "spirit",
    title: "The Holy Spirit",
    subtitle: "기름부으심과 회복",
    icon: Flame,
    body: [
      "성령의 기름부으심은 특정한 은사 하나만을 의미하지 않습니다. 그것은 하나님의 영이 한 사람의 존재 전체와 공동체 전체 위에 충만히 임하시는 역사입니다.",
      "성령이 임하시면 회개가 일어나고, 치유가 일어나며, 회복이 일어나고, 담대함이 생기며, 사랑하지 못하던 사람이 사랑하게 되고, 사명을 외면하던 사람이 다시 헌신하게 됩니다.",
      "성령의 역사는 사람을 높이지 않고 하나님을 높입니다. 혼란을 만들지 않고 질서를 세웁니다. 자기를 자랑하게 하지 않고 십자가를 붙들게 합니다.",
      "우리는 말씀과 성령이 함께 흐르는 교회를 꿈꿉니다. 말씀은 길을 보이고, 성령은 그 길을 걷게 하십니다. 말씀은 진리를 가르치고, 성령은 그 진리를 살아 움직이게 하십니다."
    ],
  },
  {
    key: "prayer",
    title: "Prayer",
    subtitle: "하나님을 경험하는 시작은 진심입니다",
    icon: MessageCircleHeart,
    body: [
      "기도는 하나님 앞에 정직하고 솔직하게 나아가는 것입니다. 하나님은 꾸며진 언어보다 진실한 마음을 기뻐하십니다. 학위와 학벌, 수입과 명예가 하나님께 나아가는 자격이 될 수 없습니다.",
      "그 어떤 인간적 조건도 하나님 앞에서 우리의 의가 될 수 없습니다. 오직 예수 그리스도의 이름으로, 진심을 담아 하나님께 나아가면 됩니다.",
      "하나님은 정직하고 솔직히 기도하는 자의 양심 가운데 임재로 찾아오십니다. 때로는 위로로, 때로는 책망으로, 때로는 회복으로, 때로는 새 힘으로 찾아오십니다.",
      "우리가 하나님을 경험하는 가장 깊은 베이스는 진심입니다."
    ],
  },
  {
    key: "growth",
    title: "Growth",
    subtitle: "성품과 습관, 전문성과 탁월함",
    icon: Sprout,
    body: [
      "우리는 성경 66권을 진리의 말씀으로 배우며 성장합니다. 성장은 단지 교회 프로그램을 많이 참여하는 것이 아닙니다. 성장은 예수 그리스도를 닮아가는 과정입니다.",
      "성장의 한 축은 성품과 습관입니다. 겸손함, 정직함, 절제함, 인내함, 사랑함, 충성됨이 우리의 삶 안에 자라나야 합니다. 신앙은 순간의 감동이 아니라 매일의 습관으로 형성됩니다.",
      "성장의 또 다른 축은 전문성과 탁월함입니다. 우리는 각자의 삶과 일터에서 하나님께 영광 돌리는 전문성과 실력을 길러야 합니다. 성품만 있고 실력이 없으면 영향력이 제한되고, 실력만 있고 성품이 없으면 위험합니다.",
      "그러므로 우리는 예수님의 성품과 사역, 두 영역의 탁월함을 사모하며 따라갑니다."
    ],
  },
  {
    key: "sending",
    title: "Sending",
    subtitle: "모인 교회는 충만함을 받고, 흩어진 교회는 세상을 비춥니다",
    icon: Send,
    body: [
      "우리는 단지 교회 프로그램에만 머물지 않습니다. 함께 모여 그리스도의 충만함을 덧입은 우리는 다시 세상으로 파송됩니다.",
      "우리는 가정으로 파송됩니다. 직장으로 파송됩니다. 사업의 현장으로 파송됩니다. 다양한 모임과 공동체로 파송됩니다. 그리고 열방으로 파송됩니다.",
      "그곳에서 우리는 예수 그리스도의 향기와 빛을 드러냅니다. 빛과 소금은 교회 안에서만 존재하는 정체성이 아닙니다. 성도는 각자의 세계에서 하나님의 영광을 나타내는 사람입니다."
    ],
  },
  {
    key: "wisdom",
    title: "Immanuel Wisdom",
    subtitle: "견뎌야 할 문제와 피해야 할 유혹을 분별합니다",
    icon: Compass,
    body: [
      "인간의 문제는 크게 두 가지입니다. 하나는 직면해서 극복해야 할 문제입니다. 질병의 문제, 경제의 문제, 관계의 어려움, 기다림과 눈물의 문제처럼 믿음으로 견디고 통과해야 하는 문제들이 있습니다.",
      "다른 하나는 피하고 뿌리쳐야 할 유혹의 문제입니다. 욕심과 정욕에서 비롯되는 성적 유혹, 무분별한 투기, 탐욕과 자기중심성은 가까이 머물며 관리할 문제가 아니라 분별하고 멀리해야 할 문제입니다.",
      "믿음은 모든 문제를 같은 방식으로 대하지 않습니다. 어떤 문제는 견뎌야 하고, 어떤 문제는 끊어내야 합니다. 어떤 문제는 직면해야 하고, 어떤 문제는 피해야 합니다.",
      "하나님이 우리와 함께하신다는 임마누엘의 믿음은, 우리가 무엇을 견디고 무엇을 버려야 하는지 분별하게 합니다. 이것은 현실을 외면하는 감상이 아니라, 하나님의 임재 안에서 삶을 다루는 실제적인 지혜입니다."
    ],
  },
  {
    key: "leadership",
    title: "Leadership",
    subtitle: "따뜻하지만 가볍지 않고, 가까우나 경계가 무너지지 않는 목회",
    icon: UserRound,
    body: [
      "목회자는 친구가 아닙니다. 그러나 친구 같아야 합니다. 목회자는 따뜻해야 하지만 가벼워져서는 안 됩니다. 가까워야 하지만 경계가 무너져서는 안 됩니다. 사랑해야 하지만 진리를 희생해서는 안 됩니다.",
      "목회는 사람을 모으는 기술이 아니라 사람을 살리는 일입니다. 사역은 프로그램 운영이 아니라 하나님의 마음을 품고 하나님이 사랑하시는 사람을 하나님의 방식으로 세워가는 일입니다.",
      "건강한 리더십은 은혜와 구조를 함께 붙듭니다. 은혜만 있고 구조가 없으면 재현이 어렵고, 구조만 있고 은혜가 없으면 생명력이 약해집니다.",
      "그러므로 Immanuel Church는 성령의 생명력과 건강한 시스템이 함께 흐르는 공동체를 지향합니다."
    ],
  },
  {
    key: "training",
    title: "Training Path",
    subtitle: "교회 안에 가두지 않고 세상 속 제자로 세웁니다",
    icon: ScrollText,
    body: [
      "Immanuel Church의 훈련은 사람을 교회 안에 가두는 훈련이 아닙니다. 우리는 사람을 말씀으로 세우고, 예배로 충만하게 하며, 성장으로 성숙하게 하고, 세상으로 파송합니다.",
      "훈련의 목적은 교회 프로그램에 잘 적응하는 사람이 아니라, 세상 속에서 그리스도의 사람으로 살아가는 성도를 세우는 것입니다.",
      "훈련은 지식만 전달하지 않습니다. 훈련은 성품을 다루고, 습관을 만들고, 사명을 깨우며, 삶의 현장에서 전문성과 탁월함을 길러갑니다.",
      "그러므로 훈련은 새가족에서 시작하여, 말씀의 뿌리를 내리고, 성품과 습관을 세우며, 섬김과 리더십으로 이어지는 여정입니다."
    ],
  },
  {
    key: "mokjang",
    title: "Mokjang Community",
    subtitle: "몸의 세포처럼 살아 있는 목장 공동체",
    icon: Church,
    body: [
      "Immanuel Church의 공동체는 목장 중심으로 세워집니다. 목장은 단순한 소그룹이 아닙니다. 목장은 몸의 세포와 같습니다.",
      "몸이 살아 있으려면 세포가 살아 있어야 하듯, 교회가 건강하려면 목장이 살아 있어야 합니다. 목장은 서로를 돌보는 자리입니다. 기도제목을 나누고, 삶을 나누고, 말씀을 붙들고, 서로의 성장을 돕는 자리입니다.",
      "우리는 채팅 중심의 소음 많은 공동체가 아니라, 기도와 나눔과 돌봄과 공지가 건강하게 흐르는 공동체를 지향합니다."
    ],
  },
  {
    key: "offering",
    title: "The Offering",
    subtitle: "헌금은 결제가 아니라 예배의 드림입니다",
    icon: Gift,
    body: [
      "헌금은 단순한 결제가 아닙니다. 헌금은 예배의 일부입니다. 우리는 나의 귀한 것을 가장 귀하신 하나님께 드립니다.",
      "그러므로 앱 안에서의 헌금 기능도 단순히 돈을 보내는 기능처럼 보이면 안 됩니다. 그것은 예배의 드림이어야 합니다.",
      "초기에는 계좌이체 안내 방식으로 시작합니다. 십일조, 감사, 선교, 구제, 기타 항목으로 구분하되, 그 중심에는 언제나 하나님께 드리는 예배적 마음이 있어야 합니다."
    ],
  },
  {
    key: "thoughts",
    title: "Immanuel Thoughts",
    subtitle: "사역에 대한 나의 생각",
    icon: ScrollText,
    body: [
      "Immanuel Thoughts는 이 공동체의 신학과 철학과 사역의 방향을 기록하는 영적 아카이브입니다. 이것은 단순한 블로그가 아니라, 교회의 정체성과 훈련 철학을 계속 정리하고 갱신하는 문서 공간입니다.",
      "우리는 기능보다 먼저 정체성을 세웁니다. 기능은 철학을 담는 그릇입니다. 그러므로 먼저 Immanuel Church의 고백을 충분히 펼치고, 그 다음 기능을 얹어야 합니다.",
      "홈페이지는 Immanuel Church의 얼굴이고, 앱은 공동체의 생활 공간입니다. 홈페이지는 처음 방문한 사람이 이 교회가 어떤 철학과 정체성을 가진 공동체인지 느끼게 해야 하고, 앱은 매일 말씀을 받고, 기도하고, 성장하고, 목장과 연결되는 공간이 되어야 합니다."
    ],
  },
];

const bottomTabs: { key: ChapterKey; label: string; icon: React.ElementType }[] = [
  { key: "home", label: "홈", icon: Home },
  { key: "word", label: "말씀", icon: BookOpen },
  { key: "prayer", label: "기도", icon: MessageCircleHeart },
  { key: "growth", label: "성장", icon: Sprout },
  { key: "my", label: "마이", icon: UserRound },
];

function ChapterView({ chapter, setActive }: { chapter: Chapter; setActive: (key: ChapterKey) => void }) {
  const Icon = chapter.icon;
  return (
    <article className="reader">
      <div className="chapterKicker">IMMANUEL CONSTITUTION</div>
      <div className="chapterHead">
        <div className="chapterIcon"><Icon size={26} /></div>
        <div>
          <h1>{chapter.title}</h1>
          <p>{chapter.subtitle}</p>
        </div>
      </div>
      <div className="prose">
        {chapter.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="readerActions">
        <button onClick={() => setActive("home")}>헌장 홈으로</button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>위로</button>
      </div>
    </article>
  );
}

function HomePage({ setActive }: { setActive: (key: ChapterKey) => void }) {
  return (
    <div className="homePage">
      <section className="heroConstitution">
        <div className="versionBadge">v1.0 Immanuel Constitution</div>
        <p className="eyebrow">IMMANUEL CHURCH</p>
        <h1>하나님은 사랑이십니다.<br />하나님은 우리와 함께하십니다.</h1>
        <p className="heroLead">
          우리는 말씀 위에 세워지고, 예배로 충만해지며, 성장으로 성숙해지고,
          세상으로 파송되는 공동체입니다.
        </p>
        <div className="heroButtons">
          <button onClick={() => setActive("core")}>헌장 읽기</button>
          <button onClick={() => setActive("wisdom")}>Immanuel Wisdom</button>
        </div>
      </section>

      <section className="introLetter">
        <h2>이 공간은 가벼운 소개 페이지가 아닙니다.</h2>
        <p>
          Immanuel Church의 홈페이지와 앱은 단순한 일정표나 공지판이 아니라,
          한 공동체의 신앙고백과 교회론, 예배론, 훈련 철학을 담는 디지털 문서관입니다.
          기능은 정체성을 담는 그릇이며, 이 헌장은 앞으로 만들어질 모든 메뉴와 기능의 기준이 됩니다.
        </p>
      </section>

      <section className="chapterGrid">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <button className="chapterCard" key={chapter.key} onClick={() => setActive(chapter.key)}>
              <div className="chapterCardTop">
                <div className="miniIcon"><Icon size={22} /></div>
                <span>{chapter.key.toUpperCase()}</span>
              </div>
              <h3>{chapter.title}</h3>
              <p>{chapter.subtitle}</p>
            </button>
          );
        })}
      </section>
    </div>
  );
}

function MyPage() {
  return (
    <article className="reader">
      <div className="chapterKicker">PROFILE</div>
      <div className="chapterHead">
        <div className="chapterIcon"><UserRound size={26} /></div>
        <div>
          <h1>마이</h1>
          <p>개인 기록과 공동체 연결의 공간</p>
        </div>
      </div>
      <div className="prose">
        <p>마이 페이지는 앞으로 Supabase 로그인과 연결되어 Guest, Member, Leader 권한 구조로 확장됩니다. 여기에는 내 목장, 성장 여정, 기도 기록, 알림 설정, 예배의 드림 안내가 들어갑니다.</p>
        <p>그러나 이 기능들도 먼저 세워진 Immanuel Church의 정체성을 담는 그릇으로 설계됩니다. 로그인은 단순한 회원관리 기능이 아니라, 말씀과 기도와 성장과 공동체 돌봄을 지속적으로 이어가기 위한 통로가 됩니다.</p>
      </div>
    </article>
  );
}

function MenuPanel({
  open,
  setOpen,
  setActive,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  setActive: (key: ChapterKey) => void;
}) {
  if (!open) return null;
  const go = (key: ChapterKey) => {
    setActive(key);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="menuOverlay" onClick={() => setOpen(false)}>
      <aside className="menuPanel" onClick={(e) => e.stopPropagation()}>
        <div className="menuHeader">
          <div>
            <span>CHAPTER LIBRARY</span>
            <h2>헌장 메뉴</h2>
          </div>
          <button onClick={() => setOpen(false)}><X size={18} /></button>
        </div>
        <div className="menuList">
          <button onClick={() => go("home")}>Home</button>
          {chapters.map((chapter) => (
            <button key={chapter.key} onClick={() => go(chapter.key)}>
              <strong>{chapter.title}</strong>
              <small>{chapter.subtitle}</small>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState<ChapterKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const current = useMemo(() => chapters.find((chapter) => chapter.key === active), [active]);

  const go = (key: ChapterKey) => {
    setActive(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="shell">
        <header className="topbar">
          <button className="brand" onClick={() => go("home")}>
            <div className="mark">✝</div>
            <div>
              <h1>IMMANUEL CHURCH</h1>
              <p>빛의자녀 공동체</p>
            </div>
          </button>
          <button className="menuButtonTop" onClick={() => setMenuOpen(true)}>
            <Menu size={18} /> 메뉴
          </button>
        </header>

        {active === "home" && <HomePage setActive={go} />}
        {active === "my" && <MyPage />}
        {current && active !== "home" && <ChapterView chapter={current} setActive={go} />}
      </main>

      <nav className="bottomNav">
        {bottomTabs.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              className={`navItem ${active === item.key ? "active" : ""}`}
              onClick={() => go(item.key)}
            >
              <Icon />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <MenuPanel open={menuOpen} setOpen={setMenuOpen} setActive={go} />
    </>
  );
}

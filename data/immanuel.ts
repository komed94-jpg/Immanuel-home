export type WayArticle = {
  slug: string;
  title: string;
  quote: string;
  keywords: string[];
  image: {
    url: string;
    alt: string;
  };
  content: string[];
};

export const rootMotto = [
  "하나님은 우리와 함께하십니다.",
  "그리고 우리는 그것을 믿습니다."
];

export const wayArticles: WayArticle[] = [
  {
    slug: "what-we-believe",
    title: "우리가 믿는 것",
    quote: "하나님은 사랑이십니다.\n하나님은 우리와 함께하십니다.",
    keywords: ["믿음", "사랑", "임마누엘"],
    image: {
      url: "/images/belief.jpg",
      alt: "새벽빛이 내려앉은 산 능선"
    },
    content: [
      "하나님은 사랑이십니다.",
      "우리는 사랑받는 하나님의 자녀입니다.",
      "하나님은 우리와 함께하십니다.",
      "인간의 가장 깊은 문제는 하나님이 함께하신다는 것을 믿지 못하는 믿음의 문제입니다."
    ]
  },
  {
    slug: "why-we-worship",
    title: "우리가 예배하는 이유",
    quote: "함께하시는 하나님 앞에 우리의 삶을 다시 정렬합니다.",
    keywords: ["예배", "임재", "정렬"],
    image: {
      url: "/images/worship.jpg",
      alt: "금빛 빛이 고요하게 흐르는 공간"
    },
    content: [
      "우리는 하나님이 함께하신다는 믿음 위에서 예배합니다.",
      "예배는 우리의 감정을 꾸미는 시간이 아니라, 하나님 앞에서 삶을 다시 정렬하는 자리입니다."
    ]
  },
  {
    slug: "how-we-pray",
    title: "우리가 기도하는 방식",
    quote: "숨김없이 하나님께 나아가는 Honest Prayer",
    keywords: ["기도", "진실함", "회복"],
    image: {
      url: "/images/prayer.jpg",
      alt: "창문 빛과 조용한 새벽의 실루엣"
    },
    content: [
      "우리는 숨김없이 하나님께 나아갑니다.",
      "기도는 자신을 포장하는 언어가 아니라, 함께하시는 하나님 앞에서 진실해지는 자리입니다."
    ]
  },
  {
    slug: "life-by-the-spirit",
    title: "우리가 성령을 따라 사는 길",
    quote: "성령은 우리를 진리와 사랑의 삶으로 이끄십니다.",
    keywords: ["성령", "동행", "순종"],
    image: {
      url: "/images/spirit.jpg",
      alt: "빛이 번지는 숲과 물길"
    },
    content: [
      "우리는 성령을 따라 살아갑니다.",
      "성령은 우리를 진리와 사랑의 삶으로 이끄십니다."
    ]
  },
  {
    slug: "how-we-grow",
    title: "우리가 자라는 방식",
    quote: "좋은 사람과 유능한 사람이 함께 자라는 길",
    keywords: ["성장", "성품", "역량"],
    image: {
      url: "/images/growth.jpg",
      alt: "넓은 길 위로 떠오르는 빛"
    },
    content: [
      "우리는 좋은 사람과 유능한 사람이 함께 자라기를 꿈꿉니다.",
      "성장은 지식의 축적만이 아니라, 믿음과 성품과 삶의 방향이 함께 자라는 과정입니다."
    ]
  },
  {
    slug: "life-together",
    title: "우리가 함께 살아가는 길",
    quote: "사랑받은 사람들이 서로의 삶을 품는 공동체",
    keywords: ["공동체", "환대", "동행"],
    image: {
      url: "/images/community.jpg",
      alt: "따뜻한 빛 아래 함께 모인 사람들"
    },
    content: [
      "우리는 사랑받은 사람들이 서로의 삶을 품는 공동체를 세워갑니다.",
      "공동체는 프로그램이 아니라, 함께하시는 하나님을 믿는 사람들이 서로에게 곁이 되어주는 삶입니다."
    ]
  },
  {
    slug: "wisdom-of-discernment",
    title: "우리가 분별하는 지혜",
    quote: "극복할 문제는 통과하고, 피할 유혹은 멀리합니다.",
    keywords: ["분별", "지혜", "거룩"],
    image: {
      url: "/images/discernment.jpg",
      alt: "어둠과 빛이 만나는 수평선"
    },
    content: [
      "삶에는 두 갈래가 있습니다.",
      "1. 극복할 문제",
      "2. 피할 유혹",
      "극복할 문제는 믿음으로 통과하고, 피할 유혹은 분별하여 멀리합니다."
    ]
  },
  {
    slug: "leadership-we-build",
    title: "우리가 세우는 리더십",
    quote: "먼저 사랑받은 사람이 다른 사람을 살리는 리더십",
    keywords: ["리더십", "섬김", "책임"],
    image: {
      url: "/images/leadership.jpg",
      alt: "도시의 빛 속에서 함께 걷는 사람들"
    },
    content: [
      "우리는 사람을 사용하는 리더십이 아니라, 사람을 살리는 리더십을 세웁니다.",
      "임마누엘의 리더십은 함께하시는 하나님을 믿는 사람의 책임 있는 섬김입니다."
    ]
  },
  {
    slug: "what-we-give",
    title: "우리가 드리는 것",
    quote: "받은 사랑에 대한 신뢰의 응답",
    keywords: ["드림", "감사", "신뢰"],
    image: {
      url: "/images/giving.jpg",
      alt: "따뜻한 빛 속에서 내미는 손"
    },
    content: [
      "우리가 드리는 것은 거래가 아니라 응답입니다.",
      "하나님이 우리와 함께하신다는 믿음은 감사와 신뢰의 삶으로 나타납니다."
    ]
  },
  {
    slug: "why-we-go",
    title: "우리가 세상으로 가는 이유",
    quote: "함께하시는 하나님을 삶의 자리에서 증언합니다.",
    keywords: ["세상", "소명", "증언"],
    image: {
      url: "/images/sending.jpg",
      alt: "도시 위로 스며드는 아침빛"
    },
    content: [
      "우리는 교회 안에 머물기 위해 부름받은 사람들이 아닙니다.",
      "함께하시는 하나님을 믿는 사람은 삶의 자리에서 사랑과 진리를 증언합니다."
    ]
  },
  {
    slug: "church-we-dream",
    title: "우리가 꿈꾸는 교회",
    quote: "철학과 영성과 공동체가 살아있는 교회",
    keywords: ["교회", "비전", "미래"],
    image: {
      url: "/images/dream.jpg",
      alt: "밤하늘 아래 빛나는 길"
    },
    content: [
      "우리는 철학과 영성과 공동체가 살아있는 교회를 꿈꿉니다.",
      "이 사이트는 교회 홈페이지가 아니라, 철학과 영성과 공동체가 살아있는 editorial church experience를 목표로 합니다."
    ]
  }
];

export const services = [
  {
    title: "오늘의 말씀",
    description: "함께하시는 하나님의 음성을 듣는 자리",
    href: "/services#word"
  },
  {
    title: "기도 요청",
    description: "숨김없이 하나님께 나아가는 Honest Prayer",
    href: "/services#prayer"
  },
  {
    title: "성장 트랙",
    description: "좋은 사람과 유능한 사람이 함께 자라는 길",
    href: "/services#growth"
  },
  {
    title: "공동체 연결",
    description: "사랑받은 사람들이 서로의 삶을 품는 자리",
    href: "/services#community"
  }
];

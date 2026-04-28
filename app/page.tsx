"use client";
import { BookOpen, Compass, Flame, HeartHandshake } from "lucide-react";

const sections = [
  { title: "Believe", desc: "말씀과 성령 안에 깊이 뿌리내리는 신앙", icon: BookOpen },
  { title: "Worship", desc: "가장 귀한 것을 가장 귀하신 하나님께", icon: HeartHandshake },
  { title: "Grow", desc: "성품과 탁월함이 함께 자라는 제자도", icon: Flame },
  { title: "Go", desc: "세상 속 빛과 소금으로 파송되는 삶", icon: Compass },
];

export default function Page() {
  return (
    <main className="wrap">
      <section className="hero">
        <div className="badge">v1.1 Young Constitution</div>
        <p className="eyebrow">IMMANUEL CHURCH · 빛의자녀 공동체</p>
        <h1>하나님은 사랑이십니다.<br/>하나님은 우리와 함께하십니다.</h1>
        <p className="lead">
          깊이는 잃지 않고, 표현은 열려 있게. 젊은 세대가 공감할 언어로,
          그러나 복음의 중심은 견고하게 세워 가는 공동체입니다.
        </p>
        <div className="cta">
          <button className="primary">헌장 읽기</button>
          <button>오늘의 말씀</button>
        </div>
      </section>

      <section className="today">
        <div className="card feature">
          <span>Featured Essay</span>
          <h3>인간의 문제는 크게 두 가지입니다.</h3>
          <p>
            믿음으로 통과해야 할 문제가 있고, 멀리하고 끊어내야 할 유혹의 문제가 있습니다.
            임마누엘의 믿음은 그 둘을 분별하게 합니다.
          </p>
        </div>
      </section>

      <section className="grid">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <article className="card" key={s.title}>
              <div className="icon"><Icon size={22} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}

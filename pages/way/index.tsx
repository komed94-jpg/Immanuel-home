import Link from "next/link";
import Nav from "../../Nav";
import { wayPages } from "../../data";

export default function Way() {
  return (
    <main>
      <Nav />
      <section className="editorial" style={{ backgroundImage: "url('/images/dream.jpg')" }}>
        <div className="content">
          <p className="eyebrow">IMMANUEL WAY</p>
          <h1>임마누엘의 길</h1>
          <p>
            하나님 사랑, 예배, 기도, 성령, 성장, 공동체, 분별, 리더십,
            드림, 선교, 교회의 꿈을 따라 걷는 길입니다.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">11개의 고백</h2>
          <p className="section-lead">
            짧은 안내가 아니라, 임마누엘교회가 믿고 예배하고 기도하고
            성장하며 세상으로 나아가는 신앙의 긴 고백입니다.
          </p>
          <div className="grid">
            {wayPages.map((page, index) => (
              <Link key={page.slug} href={"/way/" + page.slug} className="card">
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{page.title}</h3>
                <p>{page.mood}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

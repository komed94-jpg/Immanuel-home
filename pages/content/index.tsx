import Nav from "../../Nav";

export default function Content() {
  return (
    <main>
      <Nav />
      <section className="editorial" style={{ backgroundImage: "url('/images/spirit.jpg')" }}>
        <div className="content">
          <p className="eyebrow">MEDIA & STORY</p>
          <h1>콘텐츠</h1>
          <p>말씀, 예배, 회복, 제자훈련, 선교를 미디어와 글과 음악으로 확장합니다.</p>
        </div>
      </section>
      <section className="article">
        <article className="article-card">
          <h2>콘텐츠 비전</h2>
          <p>콘텐츠는 단순한 홍보가 아니라 확장된 강단입니다.</p>
        </article>
      </section>
    </main>
  );
}

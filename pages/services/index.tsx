
import Link from "next/link";
import Nav from "../../Nav";

const services = [
  {
    number: "01",
    title: "오늘 함께 붙드는 말씀",
    description: "말씀과 묵상으로 하루를 시작합니다.",
    symbol: "말",
    href: "/services/today-word",
  },
  {
    number: "02",
    title: "함께 예배하는 시간",
    description: "예배 시간과 장소를 안내합니다.",
    symbol: "예",
    href: "/services/worship",
  },
  {
    number: "03",
    title: "함께 기도합니다",
    description: "함께 기도할 제목을 나눕니다.",
    symbol: "기",
    href: "/services/prayer",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <Nav />

      <section className="services-hero">
        <div className="services-overlay" />

        <div className="services-inner">
          <p className="services-label">교회 서비스</p>

          <h1>
            삶 속에서
            <br />
            하나님과 함께
          </h1>

          <p className="services-copy">
            임마누엘의 서비스는 기능이 아니라,
            함께 살아가는 신앙의 인터페이스입니다.
          </p>
        </div>
      </section>

      <section className="services-grid-wrap">
        <div className="services-grid">
          {services.map((item) => (
            <Link key={item.title} href={item.href} className="service-card">
              <div className="service-top">
                <span className="service-symbol">{item.symbol}</span>
                <span className="service-number">{item.number}</span>
              </div>

              <div className="service-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

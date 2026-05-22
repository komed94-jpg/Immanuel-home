import Nav from "../../Nav";
import { services } from "../../data";

const serviceIcons = ["✦", "◐", "✧", "↗", "◎", "⌁", "◇", "◌", "◆", "+"];

export default function Services() {
  return (
    <main>
      <Nav />
      <section className="services-editorial">
        <div className="services-hero-inner">
          <p className="way-eyebrow">LIFE INTERFACE</p>
          <h1>임마누엘 삶의 인터페이스</h1>
          <p>
            기능 메뉴가 아니라, 함께하시는 하나님을 삶으로 만나는 자리입니다.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="way-wrap">
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-tile" key={service[0]}>
                <div className="service-icon">{serviceIcons[index] ?? "✦"}</div>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{service[0]}</h3>
                <p>{service[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import Nav from "../../Nav";
import { services } from "../../data";

export default function Services() {
  return (
    <main>
      <Nav />
      <section className="editorial" style={{ backgroundImage: "url('/images/sending.jpg')" }}>
        <div className="content">
          <p className="eyebrow">SERVICE HUB</p>
          <h1>교회 서비스</h1>
          <p>오늘의 말씀부터 새가족 등록까지, 공동체 생활을 실제로 돕는 서비스 허브입니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid">
            {services.map((service, index) => (
              <div className="card" key={service[0]}>
                <small>SERVICE {index + 1}</small>
                <h3>{service[0]}</h3>
                <p>{service[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

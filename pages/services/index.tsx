import { Layout } from "@/components/Layout";
import { services } from "@/data/immanuel";

export default function ServicesPage() {
  return (
    <Layout>
      <section className="page-hero services-hero">
        <div>
          <p className="eyebrow">Life Interface</p>
          <h1>임마누엘 삶의 인터페이스</h1>
          <p>기능 메뉴가 아니라, 함께하시는 하나님을 삶으로 만나는 자리입니다.</p>
        </div>
      </section>

      <section className="section service-archive">
        {services.map((service, index) => (
          <article className="service-item" id={service.href.split("#")[1]} key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

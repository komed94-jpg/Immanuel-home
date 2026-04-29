import Link from "next/link";
import Nav from "../Nav";
import { wayPages } from "../data";

export default function Way(){
  return <main>
    <Nav/>
    <section className="editorial" style={{backgroundImage:"url('/images/dream.svg')"}}><div className="content"><p className="eyebrow">IMMANUEL WAY</p><h1>임마누엘의 길</h1><p>하나님 사랑, 예배, 기도, 성령, 성장, 공동체, 분별, 리더십, 드림, 선교, 교회의 꿈을 따라 걷는 길입니다.</p></div></section>
    <section className="section"><div className="wrap"><div className="grid">{wayPages.map((p,i)=><Link className="card" href={`/way/${p.slug}`} key={p.slug}><small>{String(i+1).padStart(2,"0")}</small><h3>{p.title}</h3><p>{p.mood}</p></Link>)}</div></div></section>
  </main>
}

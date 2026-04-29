import Link from "next/link";
import Nav from "../Nav";
import { services, wayPages } from "../data";
export default function Home(){
  return <main><Nav/>
    <section className="hero"><div className="hero-inner"><div className="version">Im v3-12</div><div className="eyebrow">WORD · WORSHIP · GROWTH · SENDING</div><h1>하나님은 사랑이십니다.<br/>하나님은 우리와<br/><span className="gold">함께하십니다.</span></h1><p>말씀 위에 세워지고, 예배로 충만해지며, 성장으로 성숙해지고, 세상으로 파송되는 공동체입니다.</p><div className="hero-actions"><Link className="btn primary" href="/way">임마누엘의 길</Link><Link className="btn ghost" href="/services">교회 서비스</Link></div></div></section>
    <section className="hub"><div className="hub-card">{services.slice(0,5).map((s,i)=><Link className="hub-item" href="/services" key={s[0]}><div className="hub-icon">{["□","⌁","◌","△","⌃"][i]}</div><h3>{s[0]}</h3><p>{s[1]}</p></Link>)}</div></section>
    <section className="section"><div className="wrap"><h2 className="section-title">임마누엘의 길</h2><p className="section-lead">11개의 길은 짧은 안내가 아니라, 임마누엘교회가 믿고 예배하고 기도하고 성장하며 세상으로 나아가는 신앙의 긴 고백입니다.</p><div className="grid">{wayPages.slice(0,6).map((p,i)=><Link className="card" href={`/way/${p.slug}`} key={p.slug}><small>{String(i+1).padStart(2,"0")}</small><h3>{p.title}</h3><p>{p.mood}</p></Link>)}</div></div></section>
    <section className="section dark"><div className="wrap"><h2 className="section-title">세상을 이롭게 하는 사람</h2><p className="section-lead">우리는 자기 삶의 자리에서 가정과 조직과 교회와 사회를 이롭게 하는 제자를 세웁니다.</p></div></section><footer className="footer"><b>IMMANUEL CHURCH</b><br/>God is love. God is with us.</footer>
  </main>
}

import Nav from "../Nav";
import { services } from "../data";
export default function Services(){return <main><Nav/><section className="editorial" style={{backgroundImage:"url('/images/sending.svg')"}}><div className="content"><p className="eyebrow">SERVICE HUB</p><h1>교회 서비스</h1><p>오늘의 말씀부터 새가족 등록까지, 공동체 생활을 실제로 돕는 서비스 허브입니다.</p></div></section><section className="section"><div className="wrap"><div className="grid">{services.map((s,i)=><div className="card" key={s[0]}><small>SERVICE {i+1}</small><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div></div></section></main>}

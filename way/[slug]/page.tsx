import { notFound } from "next/navigation";
import Nav from "../../Nav";
import { wayPages } from "../../data";

export function generateStaticParams(){
  return wayPages.map((p)=>({slug:p.slug}));
}

function paragraphs(text:string){
  return text.split("\n\n").filter(Boolean);
}

export default function WayDetail({params}:{params:{slug:string}}){
  const page = wayPages.find((p)=>p.slug===params.slug);
  if(!page) return notFound();
  return <main>
    <Nav/>
    <section className="editorial" style={{backgroundImage:`url('/images/${page.slug}.svg')`}}>
      <div className="content">
        <p className="eyebrow">IMMANUEL WAY</p>
        <h1>{page.title}</h1>
        <p>{page.mood}</p>
      </div>
    </section>
    <section className="article">
      <article className="article-card">
        <h2>{page.title}</h2>
        {paragraphs(page.body).map((p,i)=><p key={i} className={i===0 ? "quote" : ""}>{p}</p>)}
      </article>
    </section>
  </main>
}

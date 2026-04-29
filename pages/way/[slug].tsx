import { GetStaticPaths, GetStaticProps } from "next";
import Nav from "../../Nav";
import { wayPages } from "../../data";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: wayPages.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = wayPages.find((p) => p.slug === params?.slug);
  return { props: { page } };
};

function paragraphs(text:string){ return text.split("\n\n").filter(Boolean); }

export default function WayDetail({ page }: any){
  if(!page) return null;
  return <main><Nav/><section className="editorial" style={{backgroundImage:`url('/images/${page.slug}.svg')`}}><div className="content"><p className="eyebrow">IMMANUEL WAY</p><h1>{page.title}</h1><p>{page.mood}</p></div></section><section className="article"><article className="article-card"><h2>{page.title}</h2>{paragraphs(page.body).map((p:string,i:number)=><p key={i} className={i===0?"quote":""}>{p}</p>)}</article></section></main>
}

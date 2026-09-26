import Link from "next/link";
import { Layout } from "@/components/Layout";
import { StudyWorkbook } from "@/components/StudyWorkbook";
import { immanuelWayCourse } from "@/lib/bible-study";

export default function ImmanuelWayStudy() {
  return <Layout><section className="study-course-heading"><p className="section-kicker">IMMANUEL WAY</p><h1>{immanuelWayCourse.title}</h1><p>{immanuelWayCourse.overview}</p><Link href="/way">11개 개론 먼저 읽기</Link></section><StudyWorkbook course={immanuelWayCourse} /></Layout>;
}

import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { MemberAuthForm } from "@/components/MemberAuthForm";
export default function Signup() {
  const { query } = useRouter();
  return <Layout><section className="study-auth-page"><h1>학습 계정 만들기</h1><MemberAuthForm mode="signup" returnTo={typeof query.returnTo === "string" ? query.returnTo : undefined} /></section></Layout>;
}

import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { MemberAuthForm } from "@/components/MemberAuthForm";
export default function Login() {
  const { query } = useRouter();
  return <Layout><main className="study-auth-page"><h1>학습 계정 로그인</h1><MemberAuthForm mode="login" returnTo={typeof query.returnTo === "string" ? query.returnTo : undefined} /></main></Layout>;
}

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Layout } from "@/components/Layout";

type AdminState = { configured: boolean; authenticated: boolean };
const deployedAt = process.env.NEXT_PUBLIC_DEPLOYED_AT ?? "";

export default function AdminPage() {
  const [state, setState] = useState<AdminState | null>(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    fetch("/api/admin/status", { cache: "no-store" })
      .then(async (response) => (await response.json()) as AdminState)
      .then(setState)
      .catch(() => setState({ configured: false, authenticated: false }));
  }, []);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const password = String(new FormData(form).get("password") ?? "");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) { setNotice(result.error ?? "로그인하지 못했습니다."); return; }
    form.reset(); setNotice(""); setState({ configured: true, authenticated: true });
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setState({ configured: true, authenticated: false });
  }

  return <Layout><div className="admin-page">
    <section className="admin-panel">
      <p className="section-kicker">ADMIN MODE</p><h1>임마누엘교회 관리자</h1>
      {state === null && <p>관리자 상태를 확인하고 있습니다…</p>}
      {state && !state.configured && <div className="admin-setup"><strong>관리자 모드는 안전하게 잠겨 있습니다.</strong><p>Vercel에 관리자 비밀번호와 세션 비밀값을 설정하면 로그인이 활성화됩니다.</p><code>IMMANUEL_ADMIN_PASSWORD</code><code>IMMANUEL_ADMIN_SESSION_SECRET</code></div>}
      {state?.configured && !state.authenticated && <form className="admin-login" onSubmit={login}><label><span>관리자 비밀번호</span><input name="password" type="password" autoComplete="current-password" required /></label><button type="submit">관리자 로그인</button>{notice && <p role="alert">{notice}</p>}</form>}
      {state?.authenticated && <div className="admin-dashboard"><div className="admin-dashboard-heading"><div><small>최근 운영 배포</small><strong>{new Date(deployedAt).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</strong></div><button type="button" onClick={logout}>로그아웃</button></div><div className="admin-links"><Link href="/">홈 확인</Link><Link href="/way">임마누엘의 길 확인</Link><Link href="/services">교회 서비스 확인</Link><Link href="/content">콘텐츠 확인</Link></div><p>관리자 인증 기반이 활성화되었습니다. 이후 오늘의 말씀, 설교, 행사, 요청 관리 기능을 이 화면에 안전하게 연결할 수 있습니다.</p></div>}
    </section>
  </div></Layout>;
}

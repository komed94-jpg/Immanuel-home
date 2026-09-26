"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export function MemberAuthForm({ mode, returnTo = "/bible-study/immanuel-way" }: { mode: "login" | "signup"; returnTo?: string }) {
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setNotice("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const password = String(data.get("password") ?? "");
    if (mode === "signup" && password !== String(data.get("passwordConfirm") ?? "")) {
      setNotice("비밀번호 확인이 일치하지 않습니다.");
      setSubmitting(false);
      return;
    }
    const payload = mode === "login"
      ? { login: data.get("login"), password }
      : {
          name: data.get("name"), email: data.get("email"), phone: data.get("phone"),
          birthDate: data.get("birthDate"), password, consented: data.get("consented") === "on",
        };
    try {
    const response = await fetch(mode === "login" ? "/api/member/login" : "/api/member/register", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
    });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) {
      setNotice(result.error ?? "처리하지 못했습니다.");
      setSubmitting(false);
      return;
    }
    window.location.assign(returnTo.startsWith("/") && !returnTo.startsWith("//") && !returnTo.includes("\\") ? returnTo : "/bible-study/immanuel-way");
    } catch { setNotice("연결하지 못했습니다. 다시 시도해 주세요."); setSubmitting(false); }
  }

  return <form className="request-form member-auth-form" onSubmit={submit}>
    {mode === "signup" && <>
      <div className="request-form-grid">
        <label><span>이름</span><input name="name" type="text" maxLength={80} autoComplete="name" required /></label>
        <label><span>생년월일</span><input name="birthDate" type="date" required /></label>
      </div>
      <div className="request-form-grid">
        <label><span>이메일</span><input name="email" type="email" maxLength={200} autoComplete="email" required /></label>
        <label><span>전화번호</span><input name="phone" type="tel" maxLength={20} autoComplete="tel" required placeholder="010-0000-0000" /></label>
      </div>
    </>}
    {mode === "login" && <label><span>이메일 또는 전화번호</span><input name="login" type="text" autoComplete="username" required /></label>}
    <div className={mode === "signup" ? "request-form-grid" : ""}>
      <label><span>비밀번호</span><input name="password" type="password" minLength={10} maxLength={128} autoComplete={mode === "signup" ? "new-password" : "current-password"} required /></label>
      {mode === "signup" && <label><span>비밀번호 확인</span><input name="passwordConfirm" type="password" minLength={10} maxLength={128} autoComplete="new-password" required /></label>}
    </div>
    {mode === "signup" && <label className="request-checkbox member-consent"><input name="consented" type="checkbox" required /><span>학습 계정 관리와 답변·진도 저장을 위한 이름, 이메일, 전화번호, 생년월일 및 학습 기록의 수집·이용에 동의합니다.</span></label>}
    <p className="request-form-privacy">이 계정은 성경공부 기록용이며 교인 등록과 별개입니다. 테스트 사이트의 계정과 학습 기록은 자동 이전되지 않습니다.</p>
    <button className="primary-link request-submit" type="submit" disabled={submitting}>{submitting ? "처리 중…" : mode === "login" ? "로그인" : "회원가입"}</button>
    {notice && <p className="member-auth-notice" role="alert">{notice}</p>}
    <p className="member-auth-switch">{mode === "login" ? <>계정이 없으신가요? <Link href={`/signup?returnTo=${encodeURIComponent(returnTo)}`}>회원가입</Link></> : <>이미 계정이 있으신가요? <Link href={`/login?returnTo=${encodeURIComponent(returnTo)}`}>로그인</Link></>}</p>
  </form>;
}


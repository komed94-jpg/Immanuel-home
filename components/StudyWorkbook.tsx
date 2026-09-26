"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { BibleStudyCourse } from "@/lib/bible-study";
type SavedResponse = { pageKey: string; questionKey: string; answer: string; studiedOn: string; updatedAt: string };
type SavedProgress = { pageKey: string; studiedOn: string; completedAt: string };
type StudyState = { responses: SavedResponse[]; progress: SavedProgress[]; completion: { status: string; certifiedAt: string | null } | null; totalPages: number };

export function StudyWorkbook({ course, startPageKey, returnPath, hiddenSectionLabels = [] }: { course: BibleStudyCourse; startPageKey?: string; returnPath?: string; hiddenSectionLabels?: string[] }) {
  const [pageIndex, setPageIndex] = useState(Math.max(0, course.pages.findIndex(p => p.key === startPageKey)));
  const [data, setData] = useState<StudyState | null>(null);
  const [needsLogin, setNeedsLogin] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  const [pending, setPending] = useState(0);
  const [reload, setReload] = useState(0);
  const dirty = useRef<Record<string, string>>({});
  const queue = useRef<Promise<boolean>>(Promise.resolve(true));
  const contentRef = useRef<HTMLElement>(null);
  const page = course.pages[pageIndex] ?? course.pages[0];
  const pageSignature = course.pages.map(p => p.key).join(",");
  const coursePageKeys = useMemo(() => new Set(pageSignature.split(",")), [pageSignature]);
  const progressKeys = useMemo(() => new Set((data?.progress ?? []).filter(p => coursePageKeys.has(p.pageKey)).map(p => p.pageKey)), [data, coursePageKeys]);
  const completed = progressKeys.size;
  const percent = Math.round(completed / course.pages.length * 100);
  const completedLessons = course.totalLessons ? Array.from({ length: course.totalLessons }, (_, i) => i + 1).filter(unit => course.pages.filter(p => p.unit === unit).every(p => progressKeys.has(p.key))).length : null;

  function scrollToStudyContent() {
    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      contentRef.current?.focus({ preventScroll: true });
    });
  }
  function selectPage(index: number) {
    const bounded = Math.max(0, Math.min(course.pages.length - 1, index));
    setPageIndex(bounded);
    const url = new URL(location.href);
    url.searchParams.set("page", course.pages[bounded].key);
    url.searchParams.delete("lesson");
    url.hash = "study-content";
    history.pushState({ ...history.state }, "", url);
    scrollToStudyContent();
  }
  function expireSession() {
    setNeedsLogin(true); setLoaded(true); setAnswers({}); setData(null); dirty.current = {};
    setNotice("다시 로그인한 뒤 학습 기록을 이어가세요.");
  }
  useEffect(() => {
    let active = true;
    const url = new URL(location.href);
    const requested = url.searchParams.get("page") ?? (url.searchParams.get("lesson") ? url.searchParams.get("lesson") + "-scripture" : startPageKey);
    const index = course.pages.findIndex(p => p.key === requested);
    if (index >= 0) setPageIndex(index);
    setLoaded(false);
    fetch("/api/member/study?course=" + course.slug, { cache: "no-store" })
      .then(async response => {
        if (!active) return;
        if (response.status === 401) { setNeedsLogin(true); setLoaded(true); setData(null); setAnswers({}); return; }
        if (!response.ok) throw new Error();
        const state = await response.json() as StudyState;
        if (!active) return;
        setData(state); setNeedsLogin(false); setLoaded(true); setNotice("");
        setAnswers(Object.fromEntries(state.responses.map(r => [r.pageKey + ":" + r.questionKey, r.answer])));
        if (index < 0 && !returnPath) {
          const completedKeys = new Set(state.progress.map(p => p.pageKey));
          const resume = course.pages.findIndex(p => !completedKeys.has(p.key));
          setPageIndex(resume < 0 ? course.pages.length - 1 : resume);
        }
      }).catch(() => { if (active) setNotice("학습 기록을 불러오지 못했습니다. 다시 시도해 주세요."); });
    return () => { active = false; };
  // Stable page identifiers avoid reloading and erasing in-progress input.
  }, [course.slug, pageSignature, reload, startPageKey, returnPath]);

  useEffect(() => {
    function restore() {
      const url = new URL(location.href);
      const key = url.searchParams.get("page") ?? (url.searchParams.get("lesson") ? url.searchParams.get("lesson") + "-scripture" : startPageKey);
      setPageIndex(Math.max(0, course.pages.findIndex(p => p.key === key)));
      if (url.hash === "#study-content") scrollToStudyContent();
    }
    function warn(event: BeforeUnloadEvent) {
      if (Object.keys(dirty.current).length) { event.preventDefault(); event.returnValue = ""; }
    }
    addEventListener("popstate", restore); addEventListener("beforeunload", warn);
    return () => { removeEventListener("popstate", restore); removeEventListener("beforeunload", warn); };
  }, [pageSignature, startPageKey]);

  function saveAnswer(pageKey: string, questionKey: string, answer: string) {
    if (needsLogin || !loaded) return Promise.resolve(false);
    const key = pageKey + ":" + questionKey;
    if (!(key in dirty.current)) return queue.current;
    setPending(n => n + 1); setNotice("답변을 저장하는 중입니다.");
    queue.current = queue.current.then(async () => {
      try {
        const response = await fetch("/api/member/study", { method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "answer", courseSlug: course.slug, lessonSlug: course.lessonSlug, pageKey, questionKey, answer }) });
        if (response.status === 401) { expireSession(); return false; }
        if (!response.ok) throw new Error();
        if (dirty.current[key] === answer) delete dirty.current[key];
        setNotice(Object.keys(dirty.current).length ? "아직 저장되지 않은 답변이 있습니다." : "답변을 저장했습니다.");
        return true;
      } catch { setNotice("저장하지 못했습니다. 입력은 유지됩니다. 답변 저장·재시도를 눌러 주세요."); return false; }
      finally { setPending(n => n - 1); }
    });
    return queue.current;
  }
  async function saveDrafts() {
    for (const [key, answer] of Object.entries(dirty.current)) {
      const [pageKey, questionKey] = key.split(":");
      await saveAnswer(pageKey, questionKey, answer);
    }
    await queue.current;
    return Object.keys(dirty.current).length === 0;
  }
  async function completePage() {
    if (needsLogin || !loaded || !(await saveDrafts())) return;
    setPending(n => n + 1);
    try {
      const response = await fetch("/api/member/study", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "complete-page", courseSlug: course.slug, lessonSlug: course.lessonSlug, pageKey: page.key }) });
      if (response.status === 401) { expireSession(); return; }
      if (!response.ok) throw new Error();
      const latest = await fetch("/api/member/study?course=" + course.slug, { cache: "no-store" });
      if (!latest.ok) throw new Error();
      setData(await latest.json() as StudyState);
      setNotice("이 페이지의 공부 날짜와 완료 기록을 저장했습니다.");
    } catch { setNotice("완료 기록을 확인하지 못했습니다. 다시 시도해 주세요."); }
    finally { setPending(n => n - 1); }
  }
  async function logout() {
    if (!(await saveDrafts())) return;
    try {
      const response = await fetch("/api/member/logout", { method: "POST" });
      if (!response.ok) throw new Error();
      expireSession(); setNotice("로그아웃했습니다.");
    } catch { setNotice("로그아웃하지 못했습니다. 다시 시도해 주세요."); }
  }
  useEffect(() => {
    async function leave(event: MouseEvent) {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor || !Object.keys(dirty.current).length || anchor.getAttribute("href")?.startsWith("#")) return;
      event.preventDefault(); event.stopPropagation();
      if (await saveDrafts()) location.assign(anchor.href);
    }
    document.addEventListener("click", leave, true);
    return () => document.removeEventListener("click", leave, true);
  });
  return <section className="web-study-shell">
    <aside className="web-study-sidebar" aria-label="교재 목차">
      <p className="section-kicker">WEB WORKBOOK</p>
      <h2>{course.title}</h2>
      <div className="web-study-progress"><span style={{ width: `${percent}%` }} /></div>
      <strong>{needsLogin ? `총 ${course.totalLessons ? `${course.totalLessons}과 · ` : ""}${course.pages.length}쪽 · 로그인 후 진도 저장` : course.totalLessons && completedLessons !== null ? `${completedLessons}/${course.totalLessons}과 · ${completed}/${course.pages.length}쪽 · ${percent}%` : `${completed}/${course.pages.length}쪽 완료 · ${percent}%`}</strong>
      <ol>{course.pages.map((item, index) => <li key={item.key}>
        <button type="button" className={index === pageIndex ? "is-active" : ""} aria-current={index === pageIndex ? "page" : undefined} onClick={() => selectPage(index)}>
          <span>{index + 1}</span><em><small>{item.lesson}</small>{item.title}</em>{progressKeys.has(item.key) && <small>완료</small>}
        </button>
      </li>)}</ol>
    </aside>
    <article className="web-study-page" id="study-content" ref={contentRef} tabIndex={-1}>
      <div className="web-study-page-heading">
        <div><p className="section-kicker">{page.eyebrow}</p><h2>{page.title}</h2>{page.scripture && <span>{page.scripture}</span>}</div>
        <b>{String(pageIndex + 1).padStart(2, "0")} / {String(course.pages.length).padStart(2, "0")}</b>
      </div>
      {page.body && <div className="web-study-body">{page.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
      {page.sections && <div className="web-study-sections">{page.sections.filter((section) => !hiddenSectionLabels.includes(section.label)).map((section) => <section className="web-study-section" key={`${section.label}:${section.title}`}>
        <p className="web-study-section-label">{section.label}</p><h3>{section.title}</h3>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>}
      {needsLogin && <div className="web-study-login-callout"><strong>읽기는 누구나 할 수 있습니다.</strong><p>로그인하면 답변, 공부 날짜와 진도를 저장할 수 있습니다.</p><a className="primary-link" href={`/login?returnTo=${encodeURIComponent(returnPath ? `${returnPath}?page=${page.key}#study-content` : `/bible-study/${course.slug}?page=${page.key}#study-content`)}`}>로그인하여 이 페이지부터 기록하기</a></div>}
      <div className="web-study-questions">{page.questions.map((question) => {
        const key = `${page.key}:${question.key}`;
        return <label key={key}><span>{question.label}</span><strong>{question.prompt}</strong>{question.visibility === "private" && <small className="web-study-private-note">이 답변은 관리자 화면에 표시되지 않고 본인에게만 보입니다.</small>}<textarea rows={5} maxLength={5000} value={answers[key] ?? ""} disabled={needsLogin || !loaded} onChange={(event) => { const value = event.target.value; dirty.current[key] = value; setAnswers((current) => ({ ...current, [key]: value })); }} onBlur={(event) => void saveAnswer(page.key, question.key, event.target.value)} placeholder={needsLogin ? "로그인하면 이곳에 답을 기록할 수 있습니다." : "여기에 답을 적으면 자동 저장됩니다."} /></label>;
      })}</div>
      {!loaded && !needsLogin && <p role="status">학습 기록을 불러오는 중입니다.</p>}
      {notice && <p className="content-manager-notice" role="status">{notice}</p>}
      <div className="web-study-actions">
        {!loaded && <button type="button" onClick={() => setReload((n) => n + 1)}>기록 불러오기 다시 시도</button>}
        {loaded && !needsLogin && <button type="button" disabled={pending > 0} onClick={() => void saveDrafts()}>답변 저장·재시도</button>}
        <button type="button" className="text-action" disabled={pageIndex === 0} onClick={() => selectPage(pageIndex - 1)}>이전</button>
        {loaded && !needsLogin && <button type="button" disabled={pending > 0} className="primary-link" onClick={() => void completePage()}>{progressKeys.has(page.key) ? "완료 날짜 다시 저장" : "이 페이지 공부 완료"}</button>}
        <button type="button" className="text-action" disabled={pageIndex === course.pages.length - 1} onClick={() => selectPage(pageIndex + 1)}>다음</button>
      </div>
      {loaded && !needsLogin && <button type="button" className="text-action" onClick={() => void logout()}>로그아웃</button>}
      {data?.completion && <p className="web-study-completion">{data.completion.status === "certified" ? "관리자가 수료 처리했습니다." : "전체 33쪽 학습을 완료했습니다."}</p>}
    </article>
  </section>;
}

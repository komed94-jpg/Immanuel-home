import type { NextApiRequest, NextApiResponse } from "next";
import { adminConfigured, createAdminSession, setAdminCookie, validAdminPassword } from "@/lib/admin-auth";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== "POST") return response.status(405).json({ error: "허용되지 않은 요청입니다." });
  if (!adminConfigured()) return response.status(503).json({ error: "관리자 비밀값 설정이 필요합니다." });
  const password = typeof request.body?.password === "string" ? request.body.password : "";
  if (!validAdminPassword(password)) return response.status(401).json({ error: "비밀번호가 올바르지 않습니다." });
  setAdminCookie(response, createAdminSession());
  return response.status(200).json({ ok: true });
}

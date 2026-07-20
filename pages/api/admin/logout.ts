import type { NextApiRequest, NextApiResponse } from "next";
import { clearAdminCookie } from "@/lib/admin-auth";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== "POST") return response.status(405).json({ error: "허용되지 않은 요청입니다." });
  clearAdminCookie(response);
  return response.status(200).json({ ok: true });
}

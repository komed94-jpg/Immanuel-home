import type { NextApiRequest, NextApiResponse } from "next";
import { adminConfigured, hasAdminSession } from "@/lib/admin-auth";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== "GET") return response.status(405).json({ error: "허용되지 않은 요청입니다." });
  return response.status(200).json({ configured: adminConfigured(), authenticated: hasAdminSession(request) });
}

import type { NextApiRequest, NextApiResponse } from "next";

// Adapt the existing workbook HTTP contract to the production Pages Router.
export function apiAdapter(handlers: Record<string, (request: Request) => Promise<Response>>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Cache-Control", "private, no-store, max-age=0");
    const handler = handlers[req.method ?? "GET"];
    if (!handler) {
      res.setHeader("Allow", Object.keys(handlers).join(", "));
      return res.status(405).json({ error: "지원하지 않는 요청입니다." });
    }
    try {
      const headers = new Headers();
      for (const [key, value] of Object.entries(req.headers)) {
        if (typeof value === "string") headers.set(key, value);
      }
      const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
      const request = new Request(`${protocol}://${req.headers.host}${req.url}`, {
        method: req.method, headers,
        ...(req.method === "GET" || req.method === "HEAD" ? {} : { body: JSON.stringify(req.body ?? {}) })
      });
      const response = await handler(request);
      response.headers.forEach((value, key) => res.setHeader(key, value));
      return res.status(response.status).send(await response.text());
    } catch {
      // Do not log credentials, answers, or the database connection string.
      return res.status(503).json({ error: "일시적으로 처리하지 못했습니다. 잠시 후 다시 시도해 주세요." });
    }
  };
}

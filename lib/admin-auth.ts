import { createHmac, timingSafeEqual } from "node:crypto";
import type { NextApiRequest, NextApiResponse } from "next";

export const ADMIN_COOKIE = "immanuel_admin_session";
const SESSION_SECONDS = 60 * 60 * 8;

function secret() {
  return process.env.IMMANUEL_ADMIN_SESSION_SECRET ?? "";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function adminConfigured() {
  return Boolean(process.env.IMMANUEL_ADMIN_PASSWORD && secret().length >= 32);
}

export function validAdminPassword(value: string) {
  const expected = process.env.IMMANUEL_ADMIN_PASSWORD ?? "";
  return adminConfigured() && safeEqual(sign(value), sign(expected));
}

export function createAdminSession() {
  const expires = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  return `${expires}.${sign(expires)}`;
}

export function hasAdminSession(request: NextApiRequest) {
  if (!adminConfigured()) return false;
  const token = request.cookies[ADMIN_COOKIE] ?? "";
  const [expires, signature] = token.split(".");
  if (!expires || !signature || Number(expires) <= Math.floor(Date.now() / 1000)) return false;
  return safeEqual(signature, sign(expires));
}

export function setAdminCookie(response: NextApiResponse, token: string) {
  response.setHeader("Set-Cookie", `${ADMIN_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_SECONDS}`);
}

export function clearAdminCookie(response: NextApiResponse) {
  response.setHeader("Set-Cookie", `${ADMIN_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`);
}

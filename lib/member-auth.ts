import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { and, eq, gt } from "drizzle-orm";
import { getDb } from "@/db";
import { members, memberSessions } from "@/db/schema";
export { normalizePhone } from "@/lib/phone";

export const MEMBER_COOKIE = "immanuel_member_session";
const SESSION_SECONDS = 60 * 60 * 24 * 30;

export type CurrentMember = {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  accountStatus: string;
  membershipStatus: string;
  role: string;
  memberNumber: string | null;
  registrationCategory: number | null;
};

export function normalizeEmail(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase().slice(0, 200) : "";
}

export function validPassword(value: string) {
  return value.length >= 10 && value.length <= 128;
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("base64url");
  const hash = scryptSync(password, salt, 64).toString("base64url");
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(password: string, stored: string) {
  const [algorithm, salt, expectedText] = stored.split("$");
  if (algorithm !== "scrypt" || !salt || !expectedText) return false;
  const actual = scryptSync(password, salt, 64);
  const expected = Buffer.from(expectedText, "base64url");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function tokenHash(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function createOpaqueToken() {
  return randomBytes(32).toString("base64url");
}

export async function createMemberSession(memberId: number) {
  const token = createOpaqueToken();
  const expiresAt = new Date(Date.now() + SESSION_SECONDS * 1000);
  await getDb().insert(memberSessions).values({ memberId, tokenHash: tokenHash(token), expiresAt });
  return { token, expiresAt, maxAge: SESSION_SECONDS };
}

function cookieValue(header: string | null) {
  const cookie = header?.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${MEMBER_COOKIE}=`));
  try { return cookie ? decodeURIComponent(cookie.slice(MEMBER_COOKIE.length + 1)) : undefined; } catch { return undefined; }
}

async function findMember(token: string | undefined): Promise<CurrentMember | null> {
  if (!token) return null;
  const [row] = await getDb()
    .select({
      id: members.id,
      name: members.name,
      email: members.email,
      phone: members.phone,
      birthDate: members.birthDate,
      accountStatus: members.accountStatus,
      membershipStatus: members.membershipStatus,
      role: members.role,
      memberNumber: members.memberNumber,
      registrationCategory: members.registrationCategory,
    })
    .from(memberSessions)
    .innerJoin(members, eq(memberSessions.memberId, members.id))
    .where(and(eq(memberSessions.tokenHash, tokenHash(token)), gt(memberSessions.expiresAt, new Date()), eq(members.accountStatus, "active")))
    .limit(1);
  return row ?? null;
}

export async function getMemberFromRequest(request: Request) {
  return findMember(cookieValue(request.headers.get("cookie")));
}

export async function removeMemberSession(token: string | undefined) {
  if (!token) return;
  await getDb().delete(memberSessions).where(eq(memberSessions.tokenHash, tokenHash(token)));
}

export function memberTokenFromRequest(request: Request) {
  return cookieValue(request.headers.get("cookie"));
}

export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return request.headers.get("sec-fetch-site") !== "cross-site" && (!origin || origin === new URL(request.url).origin);
}


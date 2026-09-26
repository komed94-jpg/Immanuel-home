import { getMemberFromRequest } from "@/lib/member-auth";
import { apiAdapter } from "@/lib/api-adapter";
export default apiAdapter({ GET: async (request) => {
  const member = await getMemberFromRequest(request);
  return Response.json({ authenticated: Boolean(member), member: member ? { name: member.name } : null });
} });

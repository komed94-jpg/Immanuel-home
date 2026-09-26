import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';

const base = process.env.VERIFY_BASE_URL;
if (!base || !process.env.VERIFY_ISOLATED_DATABASE) throw new Error('Use an isolated non-production DB and VERIFY_BASE_URL.');
const run = Date.now().toString();
const password = randomBytes(24).toString('base64url');
const checks = [];
async function request(path, body, cookie, origin=base) {
  const response = await fetch(base + path, { method: body ? 'POST' : 'GET', headers: { 'Content-Type':'application/json', Origin:origin, ...(cookie ? { Cookie:cookie } : {}) }, ...(body ? { body:JSON.stringify(body) } : {}) });
  return { status:response.status, data:await response.json(), cookie:response.headers.get('set-cookie')?.split(';')[0], cache:response.headers.get('cache-control') };
}
const endpoint='/api/member/study';
assert.equal((await request(endpoint+'?course=immanuel-way')).status,401); checks.push('anonymous denied');
async function register(index) {
  const account={name:'Isolated verification '+index,email:`study-${run}-${index}@example.invalid`,phone:'099'+run.slice(-7)+index,birthDate:'2000-01-01',password,consented:true};
  const result=await request('/api/member/register',account); assert.equal(result.status,201); assert.ok(result.cookie); return {...account,cookie:result.cookie};
}
const a=await register(1), b=await register(2); checks.push('isolated signup');
const answer={action:'answer',courseSlug:'immanuel-way',lessonSlug:'immanuel-way-11',pageKey:'belief-scripture',questionKey:'observe-1',answer:'검증용 답변 1'};
assert.equal((await request(endpoint,answer,a.cookie)).status,200);
assert.equal((await request(endpoint,{...answer,answer:'검증용 답변 2'},a.cookie)).status,200);
const saved=await request(endpoint+'?course=immanuel-way',undefined,a.cookie);
assert.equal(saved.data.responses.length,1); assert.equal(saved.data.responses[0].answer,'검증용 답변 2'); assert.match(saved.cache,/no-store/); checks.push('answer upsert and restore');
const other=await request(endpoint+'?course=immanuel-way',undefined,b.cookie); assert.equal(other.data.responses.length,0); checks.push('member isolation');
assert.equal((await request(endpoint,{...answer,pageKey:'invalid'},a.cookie)).status,400);
assert.equal((await request(endpoint,{...answer,questionKey:'invalid'},a.cookie)).status,400);
assert.equal((await request(endpoint,{...answer,lessonSlug:'invalid'},a.cookie)).status,400); checks.push('identifiers validated');
assert.equal((await request(endpoint,answer,a.cookie,'https://example.invalid')).status,403); checks.push('cross-origin rejected');
const complete={action:'complete-page',courseSlug:'immanuel-way',lessonSlug:'immanuel-way-11',pageKey:'belief-scripture'};
assert.equal((await request(endpoint,complete,a.cookie)).status,200); assert.equal((await request(endpoint,complete,a.cookie)).status,200);
const progress=(await request(endpoint+'?course=immanuel-way',undefined,a.cookie)).data;
assert.equal(progress.progress.length,1); assert.match(progress.progress[0].studiedOn,/^\d{4}-\d{2}-\d{2}$/); checks.push('idempotent progress');
assert.equal((await request('/api/member/logout',{},a.cookie)).status,200);
assert.equal((await request(endpoint+'?course=immanuel-way',undefined,a.cookie)).status,401); checks.push('logout revokes session');
const login=await request('/api/member/login',{login:a.email,password}); assert.equal(login.status,200);
assert.equal((await request(endpoint+'?course=immanuel-way',undefined,login.cookie)).data.responses[0].answer,'검증용 답변 2'); checks.push('relogin restores answer');
await request('/api/member/logout',{},login.cookie); await request('/api/member/logout',{},b.cookie);
console.log(JSON.stringify({passed:checks.length,checks}));

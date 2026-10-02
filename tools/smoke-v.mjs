// Smoke test for the Voyage-engine courses: every activity round-trips, progress fills, console clean, no 320px overflow.
// Usage: node tools/smoke-v.mjs <course-dir> [shotsDir]   (serve repo root on :8765)
import { createRequire } from 'module'; const require = createRequire(import.meta.url); const pw = require('playwright');
const course = process.argv[2], shots = process.argv[3];
const b = await pw.chromium.launch({ args:['--no-sandbox','--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport:{ width:1440, height:900 } });
const errs = []; p.on('console', m => { if(m.type()==='error' && !/net::|TUNNEL|favicon|audio|mp3|Failed to load resource/.test(m.text())) errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
await p.goto(`http://localhost:8765/${course}/`, { waitUntil:'load' });
await p.evaluate(() => localStorage.clear()); await p.reload({ waitUntil:'load' });
const n = await p.evaluate(() => window.chartPager.count); console.log('pages', n);
const go = async el => p.evaluate(e => window.chartPager.goToEl(e), el);
async function clickEach(sel){ let c = 0; for(const e of await p.$$(sel)){ if(!(await e.isVisible().catch(()=>false))) { await go(e); await p.waitForTimeout(400); } if(await e.isVisible()){ await e.click(); c++; } } return c; }
// route + taps
console.log('stops', await clickEach('#route button[data-stop]'));
console.log('taps', await clickEach('[data-taps] button'));
// number tiles
for(const t of await p.$$('#nums .v-tile')){ await go(t); await p.waitForTimeout(400); await (await t.$('.v-tile-face')).click(); await (await t.$('button[data-o]')).click(); }
// drills: answer each, then next
for(const d of await p.$$('[data-drill]')){ await go(d); await p.waitForTimeout(400); const qs = await d.$$('.dq'); for(let i=0;i<qs.length;i++){ const q = (await d.$$('.dq'))[i]; await (await q.$('button[data-o]')).click(); const nx = await q.$('button[data-next]'); if(nx) await nx.click(); } }
// calls: try every option in each situation
for(const c of await p.$$('[data-calls]')){ await go(c); await p.waitForTimeout(400); const cqs = await c.$$('.cq'); for(let i=0;i<cqs.length;i++){ const q = (await c.$$('.cq'))[i]; for(const o of await q.$$('button[data-o]')) await o.click(); const nx = await q.$('button[data-next]'); if(nx) await nx.click(); } }
// allocator
for(const a of await p.$$('[data-alloc], [data-assess]')){ await go(a); await p.waitForTimeout(300); await p.evaluate(box => { const rs = box.querySelectorAll('input[type=range]'); const v=[30,40,10,10,10]; rs.forEach((r,i)=>{ r.value = v[i] ?? 20; r.dispatchEvent(new Event('input',{bubbles:true})); r.dispatchEvent(new Event('change',{bubbles:true})); }); }, a); }
console.log('alloc', await p.$$eval('.mx-read', a => a.map(x => x.textContent.slice(0,50))));
// builders
for(const f of await p.$$('[data-build] textarea')){ await go(f); await p.waitForTimeout(300); await f.fill('Test entry for the brief'); }
for(const s of await p.$$('[data-build] select')){ await go(s); await p.waitForTimeout(300); await s.selectOption({ index:1 }); }
console.log('drafts', await p.$$eval('.lr-out', a => a.map(x => x.textContent.slice(0,70).replace(/\n/g,' | '))));
// quiz
const QZ = await p.evaluate(() => window.LR_ENGINE.QUIZ.map(q => q.a));
for(let i=0;i<QZ.length;i++){ const q = (await p.$$('#quizBox .kq'))[i]; await go(q); await p.waitForTimeout(300); await (await q.$(`button[data-o="${QZ[i]}"]`)).click(); const nx = await q.$('button[data-next], button[data-finish]'); await nx.click(); }
console.log('quiz', await p.textContent('#quizDone .big-score'));
console.log('commits', await clickEach('#commitList button'));
await p.waitForTimeout(600);
console.log('modal open', await p.evaluate(() => !document.getElementById('oracleModal').hidden));
console.log('progress', await p.textContent('#progCount'));
console.log('tell', await p.$$eval('[data-tell] .v-tell-text', a => a.map(x => x.textContent.slice(0,90))));
console.log('videos', await p.$$eval('.v-video video', a => a.map(v => v.getAttribute('src'))));
// reload keeps answers
await p.reload({ waitUntil:'load' }); console.log('after reload', await p.textContent('#progCount'), await p.$eval('[data-build] textarea', e => e.value));
// 320 overflow + shots
const m = await b.newPage({ viewport:{ width:320, height:700 } }); m.on('pageerror', e => errs.push('PAGEERROR320 ' + e.message));
await m.goto(`http://localhost:8765/${course}/`, { waitUntil:'load' });
const over = [];
for(let i=0;i<n;i++){ await m.evaluate(i => window.chartPager.go(i), i); await m.waitForTimeout(600);
  const o = await m.evaluate(() => { const pg = document.querySelector('.page.cur'); return { sw:pg.scrollWidth, cw:pg.clientWidth }; }); if(o.sw > o.cw + 1) over.push(i + JSON.stringify(o));
  if(shots) await m.screenshot({ path:`${shots}/m-${String(i).padStart(2,'0')}.png` }); }
console.log('overflow320', over.length ? over : 'none');
if(shots){ await p.evaluate(() => { document.getElementById('oracleGo') && document.getElementById('oracleGo').click(); }); for(let i=0;i<n;i++){ await p.evaluate(i => window.chartPager.go(i), i); await p.waitForTimeout(600); await p.screenshot({ path:`${shots}/d-${String(i).padStart(2,'0')}.png` }); } }
console.log('errors', errs.length ? errs : 'none');
await b.close();

// Proves the takeaway captures everything a learner enters: every text field, every select,
// a choice in every sorter, situation set, number tile, and the check, a slider move, and a commitment.
// Checks the print before and after a reload. Usage: node tools/takeaway-check.mjs <course-dir>  (serve repo root on :8765)
import { createRequire } from 'module'; const require = createRequire(import.meta.url); const pw = require('playwright');
const course = process.argv[2];
const b = await pw.chromium.launch({ args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{ width:1440, height:900 } });
const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.goto(`http://localhost:8765/${course}/`, { waitUntil:'load' });
await p.evaluate(() => localStorage.clear()); await p.reload({ waitUntil:'load' });
const go = el => p.evaluate(e => window.chartPager.goToEl(e), el);
const expect = [];
for(const t of await p.$$('[data-build] textarea')){ await go(t); await p.waitForTimeout(250); const id = await t.getAttribute('id'); const tok = 'ENTRY-' + id; await t.fill(tok); expect.push(tok); }
for(const s of await p.$$('[data-build] select')){ await go(s); await p.waitForTimeout(250); await s.selectOption({ index:2 }); expect.push(await s.evaluate(e => e.options[e.selectedIndex].text)); }
for(const d of await p.$$('[data-drill]')){ await go(d); await p.waitForTimeout(250); const q = await d.$('.dq.cur'); expect.push((await q.$eval('.dq-s', e => e.childNodes[1].textContent)).slice(0, 40)); await (await q.$('button[data-o]')).click(); }
for(const c of await p.$$('[data-calls]')){ await go(c); await p.waitForTimeout(250); const q = await c.$('.cq.cur'); await (await q.$('button[data-o]')).click(); expect.push((await q.$eval('.scn-s', e => e.textContent)).slice(0, 40)); }
const tile = await p.$('#nums .v-tile'); if(tile){ await go(tile); await p.waitForTimeout(250); await (await tile.$('.v-tile-face')).click(); await (await tile.$('button[data-o]')).click(); expect.push(await p.evaluate(() => window.LR_COURSE.NUMS[0].q.slice(0, 40))); }
const q0 = await p.$('#quizBox .kq.cur'); await go(q0); await p.waitForTimeout(250); await (await q0.$('button[data-o]')).click(); expect.push(await p.evaluate(() => window.LR_ENGINE.QUIZ[0].q.slice(0, 40)));
for(const a of await p.$$('[data-alloc], [data-assess]')){ await go(a); await p.evaluate(box => { const r = box.querySelector('input[type=range]'); r.value = r.max; r.dispatchEvent(new Event('input', { bubbles:true })); r.dispatchEvent(new Event('change', { bubbles:true })); }, a); }
const cm = await p.$('#commitList button'); await go(cm); await p.waitForTimeout(250); await cm.click();
const allocLab = await p.evaluate(() => { const A = window.LR_COURSE.ALLOC; return A ? Object.values(A)[0].items[0].lab : null; }); if(allocLab) expect.push(allocLab + ': 50');
const assessDim = await p.evaluate(() => { const A = window.LR_COURSE.ASSESS; return A ? Object.values(A)[0].items[0].d : null; }); if(assessDim) expect.push(assessDim);
async function printed(){ return p.evaluate(() => { window.print = () => {}; document.querySelector('[data-print]').click(); return document.getElementById('printSheet').textContent.replace(/\s+/g, ' '); }); }
const norm = t => t.replace(/\s+/g, ' ').trim();
for(const when of ['live', 'after reload']){
  if(when === 'after reload') await p.reload({ waitUntil:'load' });
  const txt = await printed();
  const missing = expect.filter(e => !txt.includes(norm(e)));
  const committed = txt.includes('Committed in the course');
  console.log(course, when + ':', expect.length + 1, 'entries checked,', missing.length + (committed ? 0 : 1), 'missing', missing.length ? missing : '', committed ? '' : '(commitment)');
}
if(process.argv[3]){ await p.emulateMedia({ media:'print' }); await p.pdf({ path:process.argv[3], format:'Letter', margin:{ top:'0.5in', bottom:'0.5in', left:'0.5in', right:'0.5in' } }); }
console.log('errors', errs.length ? errs : 'none');
await b.close();

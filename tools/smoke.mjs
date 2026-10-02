// Smoke test: every page renders, every interaction round-trips, console stays clean.
// Usage: node tools/smoke.mjs <course-dir> [shotsDir]   (serve repo root on :8765 first)
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let pw; try { pw = require('playwright'); } catch(e){ pw = require('/opt/node-tools/node_modules/playwright'); }
const course = process.argv[2] || 'course-one', shots = process.argv[3];
const b = await pw.chromium.launch({ args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{ width:1440, height:900 } });
const errs = [];
p.on('console', m => { if(m.type()==='error' && !/net::|TUNNEL|favicon/.test(m.text())) errs.push(m.text()); });
p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
await p.goto(`http://localhost:8765/${course}/`, { waitUntil:'load' });
await p.evaluate(() => localStorage.clear()); await p.reload({ waitUntil:'load' });
const n = await p.evaluate(() => window.chartPager && window.chartPager.count);
console.log('pages', n);
const labels = await p.evaluate(() => [...document.querySelectorAll('.page')].map(x => x.getAttribute('aria-label')));
console.log(labels.join('\n'));
// interactions
async function clickAll(sel){ const els = await p.$$(sel); for(const e of els){ await p.evaluate(el => { window.chartPager.goToEl(el); }, e); await e.click(); } return els.length; }
console.log('flips', await clickAll('.flip-btn'));
console.log('myths', await clickAll('.myth > button'));
console.log('sorter opts', await clickAll('.sq .sq-opts button:first-child'));
console.log('explore', await clickAll('.ex-btns button'));
console.log('dilemmas', await clickAll('.d-choices button:nth-child(2)'));
const exPanel = await p.$$eval('.ex-panel h4', a => a.map(x => x.textContent));
console.log('ex panels', exPanel);
// sliders
for(const r of await p.$$('.alloc input[type=range], .assess input[type=range]')){
  await p.evaluate(el => { window.chartPager.goToEl(el); el.value = el.max/2 > 10 ? 20 : 4; el.dispatchEvent(new Event('input',{bubbles:true})); el.dispatchEvent(new Event('change',{bubbles:true})); }, r);
}
console.log('alloc read', await p.$$eval('.mx-read', a => a.map(x => x.textContent.slice(0,80))));
console.log('assess read', await p.$$eval('.as-read', a => a.map(x => x.textContent.slice(0,80))));
// builders
for(const f of await p.$$('.builder textarea')){ await p.evaluate(el => window.chartPager.goToEl(el), f); await f.fill('Test text'); }
for(const s of await p.$$('.builder select')){ await p.evaluate(el => window.chartPager.goToEl(el), s); await s.selectOption({ index:1 }); }
console.log('builder previews', await p.$$eval('.bd-out', a => a.map(x => x.textContent.slice(0,60).replace(/\n/g,' | '))));
for(const c of await p.$$('.bd-dl')){ await p.evaluate(el => window.chartPager.goToEl(el), c); const [d] = await Promise.all([p.waitForEvent('download'), c.click()]); console.log('download', d.suggestedFilename()); }
// checklist
console.log('checks', await clickAll('.checklist input'));
// quiz
for(const fs of await p.$$('.qz[data-answer]')){
  const ans = await fs.getAttribute('data-answer');
  const inp = await fs.$(`input[value="${ans}"]`); await p.evaluate(el => window.chartPager.goToEl(el), inp); await inp.check();
}
await p.click('#quizSubmit');
console.log('quiz', await p.textContent('#quizResult .big-score'));
console.log('progress', await p.textContent('#progCount'));
// cold deep link
await p.goto(`http://localhost:8765/${course}/#p/capstone/2`, { waitUntil:'load' });
console.log('deep link lands on', await p.evaluate(() => JSON.stringify(window.chartPager.current())));
// reflow at 320px on every page
const m = await b.newPage({ viewport:{ width:320, height:700 } });
m.on('pageerror', e => errs.push('PAGEERROR320 ' + e.message));
await m.goto(`http://localhost:8765/${course}/`, { waitUntil:'load' });
const overflow = [];
for(let i = 0; i < n; i++){
  await m.evaluate(i => window.chartPager.go(i), i);
  await m.waitForTimeout(700);
  const o = await m.evaluate(() => { const pg = document.querySelector('.page.cur'); const bad = [...pg.querySelectorAll('*')].filter(e => e.getBoundingClientRect().right > window.innerWidth + 1 && getComputedStyle(e).position !== 'fixed').slice(0,3).map(e => e.tagName + '.' + e.className); return { sw: pg.scrollWidth, cw: pg.clientWidth, bad }; });
  if(o.sw > o.cw + 1 || o.bad.length) overflow.push(i + ' ' + JSON.stringify(o));
  if(shots) await m.screenshot({ path: `${shots}/m-${String(i).padStart(2,'0')}.png` });
}
console.log('overflow320', overflow.length ? overflow : 'none');
if(shots){ for(let i = 0; i < n; i++){ await p.evaluate(i => window.chartPager.go(i), i); await p.waitForTimeout(450); await p.screenshot({ path: `${shots}/d-${String(i).padStart(2,'0')}.png` }); } }
console.log('errors', errs.length ? errs : 'none');
await b.close();

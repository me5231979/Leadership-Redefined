// Layout balance: copy column vs act column height on every two-column page.
// Usage: node tools/balance-check.mjs <course-dir> [shotsDir]   (serve repo root on :8765)
import { createRequire } from 'module'; const require = createRequire(import.meta.url); const { chromium } = require('playwright');
const course = process.argv[2], shots = process.argv[3];
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(`http://localhost:8765/${course}/`); await p.waitForTimeout(800);
const n = await p.evaluate(() => document.querySelectorAll('.pg, [data-page], article').length);
const keys = await p.evaluate(() => [...document.querySelectorAll('.v-stage')].map(s => s.closest('section')?.id).filter(Boolean));
for (const id of [...new Set(keys)]) {
  await p.evaluate(id => { location.hash = '#p/' + id + '/1'; }, id); await p.waitForTimeout(500);
  const r = await p.evaluate(id => [...document.querySelectorAll(`#${id} .v-stage`)].map(s => {
    const c = s.querySelector('.v-copy'), a = s.querySelector('.v-act'); if (!c || !a) return null;
    return [Math.round(c.getBoundingClientRect().height), Math.round(a.getBoundingClientRect().height)]; }), id);
  for (const x of r) if (x) { const ratio = (x[0] / x[1]).toFixed(2); console.log(id.padEnd(14), String(x[0]).padStart(5), String(x[1]).padStart(5), ratio, (ratio > 1.35 || ratio < 0.6) ? '  <-- unbalanced' : ''); }
  if (shots) await p.screenshot({ path: `${shots}/${course}-${id}.png` });
}
await b.close();

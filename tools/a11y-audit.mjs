// axe-core audit of every book page, both themes of every section, at 1440 and 320 wide.
// Usage: node tools/a11y-audit.mjs <path-to-axe.min.js> <url-path>...   (serve repo root on :8765)
import { createRequire } from 'module'; import fs from 'fs';
const require = createRequire(import.meta.url); const pw = require('playwright');
const axe = fs.readFileSync(process.argv[2], 'utf8');
const b = await pw.chromium.launch({ args:['--no-sandbox'] });
let bad = 0;
for (const path of process.argv.slice(3)) for (const w of [1440, 320]) {
  const p = await b.newPage({ viewport:{ width:w, height:900 } });
  await p.goto(`http://localhost:8765/${path}`, { waitUntil:'load' });
  await p.addScriptTag({ content: axe });
  const n = await p.evaluate(() => window.chartPager ? window.chartPager.count : 1);
  const seen = {};
  for (let i = 0; i < n; i++) {
    await p.evaluate(i => window.chartPager && window.chartPager.go(i), i);
    await p.waitForTimeout(450);
    // open every flip / panel on this page so hidden states get checked too
    await p.evaluate(() => document.querySelectorAll('.page.cur .flip-btn, .page.cur .myth > button, .page.cur .sq-opts button:first-child, .page.cur .ex-btns button:last-child, .page.cur .d-choices button:first-child, .page.cur .checklist input, .page.cur [data-taps] button, .page.cur .dq.cur button[data-o]').forEach(x => x.click()));
    const r = await p.evaluate(async () => {
      const ctx = document.querySelector('.page.cur') || document;
      const res = await axe.run(ctx, { runOnly:{ type:'tag', values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa'] } });
      return res.violations.filter(v => v.impact === 'critical' || v.impact === 'serious').map(v => ({ id:v.id, impact:v.impact, n:v.nodes.length, t:v.nodes.slice(0,2).map(x => x.target.join(' ') + ' :: ' + (x.failureSummary||'').split('\n')[1]) }));
    });
    for (const v of r) { const k = v.id + v.t[0]; if (seen[k]) continue; seen[k] = 1; bad++; console.log(path, w, 'page', i, JSON.stringify(v)); }
  }
  await p.close();
}
console.log(bad ? `${bad} serious/critical issues` : 'axe: zero serious or critical violations');
await b.close();

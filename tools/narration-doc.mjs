// Rebuild docs/narration-scripts.md from course-*/narration-scripts.js and the page plan.
// Usage: node tools/narration-doc.mjs
import fs from 'fs'; import vm from 'vm';
const load = (f) => { const ctx = { window: {} }; vm.createContext(ctx); vm.runInContext(fs.readFileSync(f, 'utf8'), ctx); return ctx.window; };
const FIX = [[/Deer-myer/g, 'Diermeier']];
const clean = (t) => FIX.reduce((s, [a, b]) => s.replace(a, b), t);
const secs = (t) => Math.max(5, Math.round(t.split(/\s+/).length / 2.5 / 5) * 5);
const COURSES = [
  ['course-one', 'Course One: Vision, Story and Margin (week of November 2)'],
  ['course-two', 'Course Two: Venture, Reputation and Teams (week of November 9)']
];
let md = '# Leadership Redefined: narration scripts\n\nEvery page script follows one adult learning arc: a breadcrumb back, why it matters to you, the idea taught with an example, a prompt to connect it to your own work, what to do on the page, and a breadcrumb forward. Short clips play when a learner taps a card, stop, or situation.\n\nDiermeier is spelled phonetically (Deer-myer) in the source so the voice says it correctly; it is shown correctly here.\n';
for (const [dir, title] of COURSES) {
  const N = load(`${dir}/narration-scripts.js`).LR_NARR, P = load(`${dir}/content.js`).LR_COURSE.PLAN;
  md += `\n## ${title}\n`; let total = 0;
  for (const pg of P) {
    const t = N[pg.key + '/1']; if (!t) continue; total += secs(t);
    md += `\n### ${pg.label}\n\n*About ${secs(t)} seconds*\n\n${clean(t)}\n`;
    const subs = Object.keys(N).filter((k) => k.startsWith(pg.key + '/') && k !== pg.key + '/1');
    if (subs.length) md += '\n**Tap clips**\n\n' + subs.map((k) => `- *${k}:* ${clean(N[k])}`).join('\n') + '\n';
  }
  md += `\n*Page narration: about ${Math.round(total / 60)} minutes.*\n`;
}
fs.writeFileSync('docs/narration-scripts.md', md);
console.log('wrote docs/narration-scripts.md');

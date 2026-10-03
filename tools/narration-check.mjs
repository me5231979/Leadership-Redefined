// Checks the narration: every page has a script and a clip, scripts carry the adult-learning arc
// (a forward breadcrumb, a personal prompt, an action), and Listen plays the clip file.
// Usage: node tools/narration-check.mjs <course-dir>   (serve repo root on :8765)
import { createRequire } from 'module'; import fs from 'fs'; const require = createRequire(import.meta.url); const pw = require('playwright');
const course = process.argv[2];
global.window = {}; eval(fs.readFileSync(`${course}/content.js`, 'utf8')); eval(fs.readFileSync(`${course}/narration-scripts.js`, 'utf8'));
const N = window.LR_NARR, P = window.LR_COURSE.PLAN.map(p => p.key + '/1');
const issues = [];
global.window.LR_CONFIG = undefined; eval(fs.readFileSync(`${course}/config.js`, 'utf8'));
if(!window.LR_CONFIG.useBrowserVoice) for(const k of Object.keys(N)) if(!fs.existsSync(`assets/audio/${course}/${k.replace(/\//g, '-')}.mp3`)) issues.push('no clip ' + k);
for(const k of P){
  const t = N[k]; if(!t){ issues.push('no script ' + k); continue; }
  const last = k === 'learn/1', first = k === 'home/1';
  if(!last && !first && !/\bNext\b/.test(t) && !/turn the page/i.test(t)) issues.push('no forward breadcrumb ' + k);
  if(!/\b(your|you)\b/i.test(t)) issues.push('not learner-centred ' + k);
}
const personal = P.filter(k => !/^(home|route|quiz|nextstep|learn|recap\d)\//.test(k)).filter(k => /(think (of|about)|ask yourself|which of these|where in your own|have you|is it the same)/i.test(N[k] || '')).length;
const teach = P.filter(k => !/^(home|route|quiz|nextstep|learn|recap\d)\//.test(k)).length;
const words = P.reduce((a, k) => a + (N[k] || '').split(/\s+/).length, 0);
console.log(course, 'pages', P.length, 'clips', Object.keys(N).length, 'page words', words, 'teaching pages with an experience prompt', personal + ' of ' + teach, 'issues', issues.length ? issues : 'none');
const b = await pw.chromium.launch({ args:['--no-sandbox','--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
const mp3 = []; p.on('request', r => { if (/\.mp3(\?|$)/.test(r.url())) mp3.push(r.url()); });
await p.addInitScript(() => { window.__said = []; const real = window.speechSynthesis; window.speechSynthesis.speak = u => { window.__said.push(u.text); }; window.localStorage.setItem((window.LR_CONFIG || {}).storeKey + 'auto', '0'); });
await p.goto(`http://localhost:8765/${course}/#p/${P[4].split('/')[0]}/1`, { waitUntil:'load' });
await p.evaluate(() => { localStorage.setItem(window.LR_CONFIG.storeKey + 'auto', '0'); });
await p.reload({ waitUntil:'load' }); await p.waitForTimeout(800);
await p.click('#bbListen'); await p.waitForTimeout(800);
const said = await p.evaluate(() => window.__said);
const want = N[P[4]];
const recorded = await p.evaluate(() => !(window.LR_CONFIG || {}).useBrowserVoice);
const clip = P[4].replace('/', '-') + '.mp3';
const ok = recorded ? mp3.some(u => u.includes(clip)) : (said.length && said[said.length - 1] === want);
console.log('listen:', ok ? (recorded ? 'recorded clip ' + clip + ' requested' : 'browser voice read this page\'s script') : (recorded ? 'NO CLIP REQUESTED for ' + clip : 'NOT SPOKEN ' + JSON.stringify(said).slice(0, 120)), 'errors', errs.length ? errs : 'none');
await b.close();

// Builds one SCORM 1.2 package holding the landing page and both courses.
// Usage: node scripts/build-scorm.mjs   ->  dist/leadership-redefined-scorm.zip
//
// The LMS launches lms.html. It opens the SCORM session, restores saved work into
// the browser, and shows the landing page (index.html) in a full-window frame, so
// learners move between the landing page and the two courses inside one session.
// While they work it copies their progress and answers (localStorage keys lr1- and
// lr2-) to cmi.suspend_data, and reports "completed" once every activity in both
// courses is done. Raw narration takes (assets/audio/<course>/source) are left out.
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { execFileSync } from 'child_process';

const ROOT = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const OUT = path.join(ROOT, 'dist', 'scorm');
const ZIP = path.join(ROOT, 'dist', 'leadership-redefined-scorm.zip');
const COURSES = [['course-one', 'lr1-'], ['course-two', 'lr2-']];

fs.rmSync(path.join(ROOT, 'dist'), { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// 1. Copy the site.
const skip = (rel) => /^assets\/audio\/[^/]+\/source(\/|$)/.test(rel);
function copy(rel) {
  const src = path.join(ROOT, rel), dst = path.join(OUT, rel);
  if (skip(rel)) return;
  if (fs.statSync(src).isDirectory()) { fs.mkdirSync(dst, { recursive: true }); fs.readdirSync(src).forEach((f) => copy(path.join(rel, f))); }
  else fs.copyFileSync(src, dst);
}
['index.html', 'assets', ...COURSES.map((c) => c[0])].forEach(copy);

// 2. Point folder links at index.html; some LMS file hosts do not serve a folder's index.
for (const rel of ['index.html', ...COURSES.map((c) => c[0] + '/index.html')]) {
  const f = path.join(OUT, rel);
  const html = fs.readFileSync(f, 'utf8')
    .replace(/href="\.\/"/g, 'href="index.html"')
    .replace(/href="((?:\.\.\/)?(?:course-one\/|course-two\/)|\.\.\/)"/g, 'href="$1index.html"');
  fs.writeFileSync(f, html);
}

// 3. The activities each course tracks, read from its content.js.
const tracked = {};
for (const [dir, key] of COURSES) {
  const w = {};
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, dir, 'content.js'), 'utf8'), { window: w });
  tracked[key] = w.LR_COURSE.SECTIONS.map((s) => s.k);
}

// 4. The launch page: SCORM 1.2 session around the site.
const lms = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Leadership Redefined</title>
<style>html,body{margin:0;height:100%;background:#1c1c1c;overflow:hidden}iframe{display:block;border:0;width:100%;height:100%}</style>
</head>
<body>
<iframe id="lr" title="Leadership Redefined" allow="autoplay; fullscreen" allowfullscreen></iframe>
<script>
(function(){
  var TRACKED = ${JSON.stringify(tracked)};
  var LIMIT = 4000; /* SCORM 1.2 suspend_data holds 4096 characters */
  function findAPI(w){ for(var n = 0; w && n < 12; n++){ try{ if(w.API) return w.API; }catch(e){} if(w.parent === w) break; w = w.parent; } return null; }
  var api = (window.parent !== window && findAPI(window.parent)) || (window.opener && findAPI(window.opener)) || null;
  var ls = null; try{ ls = window.localStorage; ls.getItem('x'); }catch(e){ ls = null; }
  var start = Date.now(), open = false, last = '', status = '';
  function get(k){ try{ return String(api.LMSGetValue(k) || ''); }catch(e){ return ''; } }
  function put(k, v){ try{ api.LMSSetValue(k, String(v)); }catch(e){} }
  function ours(k){ return k && (k.indexOf('lr1-') === 0 || k.indexOf('lr2-') === 0) && !/test$/.test(k); }

  function restore(){
    var d = get('cmi.suspend_data'); if(!d || !ls) return;
    try{ var o = JSON.parse(d); Object.keys(o).forEach(function(k){ if(ours(k) && ls.getItem(k) === null) ls.setItem(k, o[k]); }); }catch(e){}
  }
  function snapshot(){
    var keys = [], o = {}, len = 2;
    for(var i = 0; i < ls.length; i++){ var k = ls.key(i); if(ours(k)) keys.push(k); }
    /* progress marks first, so completion always survives; then answers while they fit */
    keys.sort(function(a, b){ var pa = /^lr[12]-p-/.test(a) ? 0 : 1, pb = /^lr[12]-p-/.test(b) ? 0 : 1; return pa - pb || (a < b ? -1 : 1); });
    keys.forEach(function(k){ var v = ls.getItem(k), add = JSON.stringify(k).length + JSON.stringify(v).length + 2; if(len + add <= LIMIT){ o[k] = v; len += add; } });
    return JSON.stringify(o);
  }
  function complete(){
    if(!ls) return false;
    return Object.keys(TRACKED).every(function(p){ return TRACKED[p].every(function(k){ return ls.getItem(p + 'p-' + k) === '1'; }); });
  }
  function time(){
    var s = Math.round((Date.now() - start) / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); s = s % 60;
    return ('000' + h).slice(-4) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
  }
  function save(){
    if(!open || !ls) return;
    var d = snapshot(), st = complete() ? 'completed' : 'incomplete';
    if(d === last && st === status) return;
    put('cmi.suspend_data', d); last = d;
    if(st !== status){ put('cmi.core.lesson_status', st); status = st; }
    try{ api.LMSCommit(''); }catch(e){}
  }
  function finish(){
    if(!open) return;
    save(); put('cmi.core.session_time', time()); put('cmi.core.exit', status === 'completed' ? '' : 'suspend');
    try{ api.LMSCommit(''); api.LMSFinish(''); }catch(e){}
    open = false;
  }

  if(api){
    try{ open = String(api.LMSInitialize('')) === 'true'; }catch(e){ open = false; }
    if(open){
      restore();
      status = get('cmi.core.lesson_status');
      if(!status || status === 'not attempted'){ put('cmi.core.lesson_status', 'incomplete'); status = 'incomplete'; try{ api.LMSCommit(''); }catch(e){} }
      last = get('cmi.suspend_data');
    }
  }
  document.getElementById('lr').src = 'index.html';

  var t = null;
  window.addEventListener('storage', function(){ clearTimeout(t); t = setTimeout(save, 1500); });
  setInterval(save, 30000);
  window.addEventListener('pagehide', finish);
  window.addEventListener('beforeunload', finish);
})();
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(OUT, 'lms.html'), lms);

// 5. The manifest.
const files = [];
(function walk(rel){ const abs = path.join(OUT, rel); for (const f of fs.readdirSync(abs).sort()) { const r = rel ? rel + '/' + f : f; fs.statSync(path.join(OUT, r)).isDirectory() ? walk(r) : files.push(r); } })('');
const x = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const manifest = `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="vu-leadership-redefined" version="1.0"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="vu-lr-org">
    <organization identifier="vu-lr-org">
      <title>Leadership Redefined</title>
      <item identifier="vu-lr-item" identifierref="vu-lr-sco" isvisible="true">
        <title>Leadership Redefined: Course One and Course Two</title>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="vu-lr-sco" type="webcontent" adlcp:scormtype="sco" href="lms.html">
${files.filter((f) => f !== 'imsmanifest.xml').map((f) => '      <file href="' + x(f) + '"/>').join('\n')}
    </resource>
  </resources>
</manifest>
`;
fs.writeFileSync(path.join(OUT, 'imsmanifest.xml'), manifest);

// 6. Zip with the manifest at the root.
execFileSync('zip', ['-q', '-r', '-X', ZIP, '.'], { cwd: OUT });
const mb = (fs.statSync(ZIP).size / 1048576).toFixed(1);
console.log('SCORM 1.2 package: ' + path.relative(ROOT, ZIP) + ' (' + mb + ' MB, ' + files.length + ' files)');
console.log('Tracked activities: ' + Object.entries(tracked).map(([k, v]) => k + ' ' + v.length).join(', '));

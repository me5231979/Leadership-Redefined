// Builds one SCORM package holding the landing page and both courses.
// Usage: node scripts/build-scorm.mjs [2004|1.2] [--light | --stream]
//   --stream: leaves the videos and narration out and plays them from the live site
//             (GitHub Pages), for a package under 30 MB. The LMS must allow that site.
//   2004 (default): SCORM 2004 3rd Edition, set up for Oracle Learning
//                   -> dist/leadership-redefined-oracle-scorm2004.zip
//   1.2:            SCORM 1.2, for LMSs that need it
//                   -> dist/leadership-redefined-scorm12.zip
//
// The LMS launches lms.html. It opens the SCORM session, restores saved work into
// the browser, and shows the landing page (index.html) in a full-window frame, so
// learners move between the landing page and the two courses inside one session.
// While they work it copies their progress and answers (localStorage keys lr1- and
// lr2-) to cmi.suspend_data, reports progress, and reports completion once every
// activity in both courses is done. Raw narration takes
// (assets/audio/<course>/source) are left out.
//
// Oracle Learning notes: the manifest sits at the zip root, no path has a space,
// and the package is far under Oracle's 1 GB limit. SCORM 2004 is the default
// because it reports completion and success separately (Oracle can misread the
// single SCORM 1.2 status) and allows 64,000 characters of saved work (1.2 allows
// 4,096), so learners resume with their answers intact.
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { execFileSync } from 'child_process';

const ARGS = process.argv.slice(2), V = ARGS.includes('1.2') ? '1.2' : '2004', LIGHT = ARGS.includes('--light'), STREAM = ARGS.includes('--stream');
const LIVE = 'https://me5231979.github.io/Leadership-Redefined/';
const ROOT = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const OUT = path.join(ROOT, 'dist', V === '2004' ? 'scorm2004' : 'scorm12');
const ZIP = path.join(ROOT, 'dist', (V === '2004' ? 'leadership-redefined-oracle-scorm2004' : 'leadership-redefined-scorm12') + (LIGHT ? '-light' : STREAM ? '-streamed' : '') + '.zip');
const COURSES = [['course-one', 'lr1-'], ['course-two', 'lr2-']];

fs.rmSync(OUT, { recursive: true, force: true });
fs.rmSync(ZIP, { force: true });
fs.mkdirSync(OUT, { recursive: true });

// 1. Copy the site.
const skip = (rel) => /^assets\/audio\/[^/]+\/source(\/|$)/.test(rel) || (STREAM && /^assets\/(audio|video)(\/|$)/.test(rel));
function copy(rel) {
  const src = path.join(ROOT, rel), dst = path.join(OUT, rel);
  if (skip(rel)) return;
  if (fs.statSync(src).isDirectory()) { fs.mkdirSync(dst, { recursive: true }); fs.readdirSync(src).forEach((f) => copy(path.join(rel, f))); }
  else fs.copyFileSync(src, dst);
}
['index.html', 'assets', ...COURSES.map((c) => c[0])].forEach(copy);

// 1b. Full-quality media by default (1080p video, original narration). With --light,
// 720p video and 96 kbps narration halve the size. The website keeps the originals.
const sh = (cmd, args) => { try { execFileSync(cmd, args, { stdio: 'ignore' }); return true; } catch (e) { return false; } };
if (LIGHT && sh('ffmpeg', ['-version'])) {
  const vdir = path.join(OUT, 'assets', 'video');
  for (const f of fs.readdirSync(vdir).filter((n) => n.endsWith('.mp4'))) {
    const src = path.join(vdir, f), tmp = src + '.tmp.mp4';
    if (sh('ffmpeg', ['-y', '-i', src, '-vf', 'scale=-2:720', '-c:v', 'libx264', '-crf', '24', '-preset', 'slow', '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart', tmp])) fs.renameSync(tmp, src);
  }
  for (const [dir] of COURSES) {
    const adir = path.join(OUT, 'assets', 'audio', dir);
    if (!fs.existsSync(adir)) continue;
    for (const f of fs.readdirSync(adir).filter((n) => n.endsWith('.mp3'))) {
      const src = path.join(adir, f), tmp = src + '.tmp.mp3';
      if (sh('ffmpeg', ['-y', '-i', src, '-c:a', 'libmp3lame', '-b:a', '96k', '-ac', '1', tmp])) fs.renameSync(tmp, src);
    }
  }
}

// 1c. Streamed build: media paths in each course's config.js point at the live site.
if (STREAM) for (const [dir] of COURSES) {
  const f = path.join(OUT, dir, 'config.js');
  fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replace(/'\.\.\/assets\/(audio|video)\//g, "'" + LIVE + "assets/$1/"));
}

// 2. Point folder links at index.html; LMS content servers do not serve a folder's index.
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

// 4. The launch page: one SCORM session around the site.
const RT = V === '2004' ? {
  name: 'API_1484_11', init: 'Initialize', get: 'GetValue', set: 'SetValue', commit: 'Commit', end: 'Terminate',
  limit: 64000, status: 'cmi.completion_status', suspend: 'cmi.suspend_data', exit: 'cmi.exit', time: 'cmi.session_time',
} : {
  name: 'API', init: 'LMSInitialize', get: 'LMSGetValue', set: 'LMSSetValue', commit: 'LMSCommit', end: 'LMSFinish',
  limit: 4000, status: 'cmi.core.lesson_status', suspend: 'cmi.suspend_data', exit: 'cmi.core.exit', time: 'cmi.core.session_time',
};
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
/* SCORM ${V === '2004' ? '2004 3rd Edition' : '1.2'} session for Leadership Redefined. */
(function(){
  var V2004 = ${V === '2004'}, RT = ${JSON.stringify(RT)};
  var TRACKED = ${JSON.stringify(tracked)};
  function scan(w){ for(var n = 0; w && n < 12; n++){ try{ if(w[RT.name]) return w[RT.name]; }catch(e){} if(w.parent === w) break; w = w.parent; } return null; }
  function findAPI(){
    var a = window.parent !== window ? scan(window.parent) : null;
    try{ if(!a && window.opener) a = scan(window.opener); }catch(e){}
    try{ if(!a && window.opener && window.opener.opener) a = scan(window.opener.opener); }catch(e){}
    return a;
  }
  var api = findAPI();
  var ls = null; try{ ls = window.localStorage; ls.getItem('x'); }catch(e){ ls = null; }
  var start = Date.now(), open = false, last = '', status = '', lastProg = -1;
  function call(fn, a, b){ try{ return arguments.length > 2 ? api[RT[fn]](a, b) : arguments.length > 1 ? api[RT[fn]](a) : api[RT[fn]](''); }catch(e){ return ''; } }
  function get(k){ return String(call('get', k) || ''); }
  function put(k, v){ call('set', k, String(v)); }
  function ours(k){ return k && (k.indexOf('lr1-') === 0 || k.indexOf('lr2-') === 0) && !/test$/.test(k); }

  function restore(){
    var d = get(RT.suspend); if(!d || !ls) return;
    try{ var o = JSON.parse(d); Object.keys(o).forEach(function(k){ if(ours(k) && ls.getItem(k) === null) ls.setItem(k, o[k]); }); }catch(e){}
  }
  function snapshot(){
    var keys = [], o = {}, len = 2;
    for(var i = 0; i < ls.length; i++){ var k = ls.key(i); if(ours(k)) keys.push(k); }
    /* progress marks first, so completion always survives; then answers while they fit */
    keys.sort(function(a, b){ var pa = /^lr[12]-p-/.test(a) ? 0 : 1, pb = /^lr[12]-p-/.test(b) ? 0 : 1; return pa - pb || (a < b ? -1 : 1); });
    keys.forEach(function(k){ var v = ls.getItem(k), add = JSON.stringify(k).length + JSON.stringify(v).length + 2; if(len + add <= RT.limit){ o[k] = v; len += add; } });
    return JSON.stringify(o);
  }
  function progress(){
    var done = 0, total = 0;
    Object.keys(TRACKED).forEach(function(p){ TRACKED[p].forEach(function(k){ total++; if(ls && ls.getItem(p + 'p-' + k) === '1') done++; }); });
    return total ? done / total : 0;
  }
  function duration(){
    var s = Math.round((Date.now() - start) / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); s = s % 60;
    return V2004 ? 'PT' + h + 'H' + m + 'M' + s + 'S' : ('000' + h).slice(-4) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
  }
  function save(){
    if(!open || !ls) return;
    var d = snapshot(), pr = progress(), st = pr >= 1 ? 'completed' : 'incomplete', changed = false;
    if(d !== last){ put(RT.suspend, d); last = d; changed = true; }
    if(V2004 && pr !== lastProg){ put('cmi.progress_measure', pr.toFixed(2)); lastProg = pr; changed = true; }
    if(st !== status){
      put(RT.status, st); status = st; changed = true;
      if(V2004 && st === 'completed') put('cmi.success_status', 'passed');
    }
    if(changed) call('commit');
  }
  function finish(){
    if(!open) return;
    save(); put(RT.time, duration()); put(RT.exit, status === 'completed' ? (V2004 ? 'normal' : '') : 'suspend');
    call('commit'); call('end');
    open = false;
  }

  if(api){
    open = String(call('init')) === 'true';
    if(open){
      restore();
      status = get(RT.status);
      if(!status || status === 'not attempted' || status === 'unknown'){ put(RT.status, 'incomplete'); status = 'incomplete'; call('commit'); }
      last = get(RT.suspend);
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
const fileList = files.map((f) => '      <file href="' + x(f) + '"/>').join('\n');
const manifest = V === '2004' ? `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="vu-leadership-redefined" version="1.0"
  xmlns="http://www.imsglobal.org/xsd/imscp_v1p1"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_v1p3"
  xmlns:adlseq="http://www.adlnet.org/xsd/adlseq_v1p3"
  xmlns:adlnav="http://www.adlnet.org/xsd/adlnav_v1p3"
  xmlns:imsss="http://www.imsglobal.org/xsd/imsss"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1 imscp_v1p1.xsd http://www.adlnet.org/xsd/adlcp_v1p3 adlcp_v1p3.xsd http://www.adlnet.org/xsd/adlseq_v1p3 adlseq_v1p3.xsd http://www.adlnet.org/xsd/adlnav_v1p3 adlnav_v1p3.xsd http://www.imsglobal.org/xsd/imsss imsss_v1p0.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>2004 3rd Edition</schemaversion>
  </metadata>
  <organizations default="vu-lr-org">
    <organization identifier="vu-lr-org">
      <title>Leadership Redefined</title>
      <item identifier="vu-lr-item" identifierref="vu-lr-sco" isvisible="true">
        <title>Leadership Redefined: Course One and Course Two</title>
        <imsss:sequencing>
          <imsss:deliveryControls completionSetByContent="true" objectiveSetByContent="true"/>
        </imsss:sequencing>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="vu-lr-sco" type="webcontent" adlcp:scormType="sco" href="lms.html">
${fileList}
    </resource>
  </resources>
</manifest>
` : `<?xml version="1.0" encoding="UTF-8"?>
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
${fileList}
    </resource>
  </resources>
</manifest>
`;
fs.writeFileSync(path.join(OUT, 'imsmanifest.xml'), manifest);

// 6. Zip with the manifest at the root.
execFileSync('zip', ['-q', '-r', '-X', ZIP, '.'], { cwd: OUT });
const mb = (fs.statSync(ZIP).size / 1048576).toFixed(1);
console.log('SCORM ' + (V === '2004' ? '2004 3rd Edition' : '1.2') + ' package: ' + path.relative(ROOT, ZIP) + ' (' + mb + ' MB, ' + files.length + ' files)');
console.log('Tracked activities: ' + Object.entries(tracked).map(([k, v]) => k + ' ' + v.length).join(', '));

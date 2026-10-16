/* ══════════ LEADERSHIP REDEFINED · your capstone brief ══════════
   One page for the whole brief. Each section pulls from whichever course
   holds the builder (localStorage lr1-b-... or lr2-b-...). Both courses run from the same site, so the brief carries from
   course to course. Edits made here are kept under lrb- and win over the
   course drafts until the learner chooses "Use my course draft again".
   Nothing is sent anywhere. No em or en dashes. */
(function(){
'use strict';
var ls = null; try{ ls = window.localStorage; ls.getItem('x'); }catch(e){ ls = null; }
var mem = {};
function get(k){ if(ls){ try{ return ls.getItem(k); }catch(e){} } return mem[k] === undefined ? null : mem[k]; }
function set(k, v){ mem[k] = v; if(ls){ try{ v === null ? ls.removeItem(k) : ls.setItem(k, v); }catch(e){} } }
function b(course, build, f){ return (get((course === 1 ? 'lr1-' : 'lr2-') + 'b-' + build + '-' + f) || '').trim(); }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]; }); }
function join(parts){ return parts.filter(function(p){ return p[1]; }).map(function(p){ return p[0] ? p[0] + ' ' + p[1] : p[1]; }).join('\n\n'); }
function sentence(t){ return t && !/[.!?]$/.test(t) ? t + '.' : t; }

var FOCUS = ['Exceptional Core Operations', 'Bold Strategic Initiatives', 'Industry Leadership'];
var SECTIONS = [
  { n:1, h:'Focus area', course:1, where:'Course One, Your brief: Draft the brief', link:'../course-one/#p/draft/1', select:true,
    guide:'State one area of focus at the top of page one. Your brief is judged only within this area.',
    from:function(){ return b(1, 'draft', 'area'); } },
  { n:2, h:'The challenge and why it matters', course:1, where:'Course One: Draft the brief, and Course Two: Your storyline', link:'../course-one/#p/draft/1',
    guide:'Open with a real person and a moment. Then the challenge in one sentence: who is affected, and what happens today. Then why it matters strategically: what it costs to wait.',
    from:function(){ return join([['Opening:', sentence(b(2, 'story', 'person'))], ['What could be:', sentence(b(2, 'story', 'could'))], ['The challenge:', sentence(b(1, 'draft', 'challenge'))], ['Why it matters strategically:', sentence(b(1, 'draft', 'why'))]]); } },
  { n:3, h:'Connection to Vanderbilt’s priorities', course:1, where:'Course One: Your mission and margin statement', link:'../course-one/#p/statement/1',
    guide:'Name the line from the vision and the area of focus your idea serves. Then mission and margin: what it strengthens, what it costs, and who pays after year one.',
    from:function(){ return join([['', sentence(b(1, 'draft', 'priorities'))], ['Mission:', sentence(b(1, 'statement', 'mission'))], ['Cost and funding:', sentence(b(1, 'statement', 'cost'))], ['What it saves, earns, or protects:', sentence(b(1, 'statement', 'ret'))], ['After year one:', sentence(b(1, 'statement', 'quad'))]]); } },
  { n:4, h:'Integrated solution: people, process, technology', course:2, where:'Course Two: Radical collaboration, and Course One: Your reputational statement', link:'../course-two/#p/collab/1',
    guide:'What changes for people, in process, and in technology, together. Name the partners who share the credit, and how you protect Vanderbilt’s reputation.',
    from:function(){ return join([['People:', sentence(b(2, 'draft', 'people'))], ['Process:', sentence(b(2, 'draft', 'process'))], ['Technology:', sentence(b(2, 'draft', 'tech'))], ['Partners who share the credit:', sentence(b(2, 'collab', 'share'))], ['Reputation:', sentence(b(1, 'repstatement', 'stmt'))], ['Risks, and how we protect trust:', [sentence(b(1, 'repstatement', 'risk')), sentence(b(1, 'repstatement', 'mit'))].filter(Boolean).join(' ')]]); } },
  { n:5, h:'Implementation steps, owners, timeline', course:2, where:'Course Two: Your pilot and Radical collaboration', link:'../course-two/#p/reframe/1',
    guide:'One line per step: what, the owner role, and by when. Start with the pilot.',
    from:function(){ var s = b(2, 'draft', 'steps'); return join([['', s], ['Start with the pilot:', s ? '' : sentence(b(2, 'reframe', 'pilot'))], ['The early win:', sentence(b(2, 'collab', 'win'))]]); } },
  { n:6, h:'Success metrics', course:2, where:'Course Two: Your pilot', link:'../course-two/#p/reframe/1',
    guide:'Two or three metrics, each with a baseline, a target, and a date. Measure outcomes for people, not outputs.',
    from:function(){ var m = b(2, 'draft', 'metrics'); return join([['', m], ['We scale it if:', m ? '' : sentence(b(2, 'reframe', 'proof'))]]); } },
  { n:7, h:'Sustainability plan', course:2, where:'Course Two: Draft the brief', link:'../course-two/#p/draft/1',
    guide:'Who owns it after your pod disbands, how year two is funded, and how it becomes normal work.',
    from:function(){ return b(2, 'draft', 'sustain'); } }
];

var q = new URLSearchParams(location.search), EMBED = q.get('embed') === '1', RANGE = (q.get('s') || '1-7').split('-').map(Number);
function inRange(s){ return s.n >= RANGE[0] && s.n <= (RANGE[1] || RANGE[0]); }
if(EMBED) document.documentElement.classList.add('bf-embed');
var box = document.getElementById('bfSections'), status = document.getElementById('bfStatus'), count = document.getElementById('bfCount');
box.innerHTML = SECTIONS.filter(function(s){ return !EMBED || inRange(s); }).map(function(s){
  var id = 'bfS' + s.n;
  var input = s.select ? '<select id="' + id + '" data-s="' + s.n + '"><option value="">Choose one</option>' + FOCUS.map(function(f){ return '<option>' + f + '</option>'; }).join('') + '</select>'
    : '<textarea id="' + id + '" data-s="' + s.n + '" rows="5"></textarea>';
  return '<section class="bf-sec" aria-labelledby="' + id + 'h"><div class="bf-head"><span class="bf-no" aria-hidden="true">' + s.n + '</span><h2 id="' + id + 'h"><label for="' + id + '"><span class="sr">' + s.n + '. </span>' + esc(s.h) + '</label></h2><span class="bf-tag">Course ' + (s.course === 1 ? 'One' : 'Two') + '</span></div>' +
    '<p class="bf-guide">' + esc(s.guide) + '</p>' + input +
    '<div class="bf-row"><p class="bf-src" id="' + id + 'src"></p><button type="button" class="bf-reset" data-reset="' + s.n + '" hidden>Use my course draft again</button></div></section>';
}).join('');

function val(s){ var o = get('lrb-s' + s.n); return o !== null ? o : s.from(); }
function paintOne(s){
  if(!document.getElementById('bfS' + s.n)) return;
  var el = document.getElementById('bfS' + s.n), src = document.getElementById('bfS' + s.n + 'src'), rs = box.querySelector('[data-reset="' + s.n + '"]');
  var edited = get('lrb-s' + s.n) !== null, fromCourse = s.from();
  if(document.activeElement !== el) el.value = val(s);
  if(el.tagName === 'TEXTAREA'){ el.style.height = 'auto'; el.style.height = Math.max(120, el.scrollHeight + 4) + 'px'; }
  rs.hidden = !edited || !fromCourse;
  src.innerHTML = EMBED ? (edited ? 'Saved to your brief.' : fromCourse ? 'Started from your work in ' + esc(s.where) + '. Edit it here.' : 'Saves to your brief as you type.')
    : edited ? 'Edited here. Your edits are kept.' : fromCourse ? 'Filled in from ' + esc(s.where) + '.' : 'Not written yet. Draft it in <a href="' + s.link + '">' + esc(s.where) + '</a>, or type it here.';
}
function words(){ var t = SECTIONS.map(val).join(' ') + ' ' + ['title', 'pod', 'members'].map(function(k){ return get('lrb-' + k) || ''; }).join(' '); var n = (t.match(/\S+/g) || []).length; return n; }
function report(){ if(!EMBED || window.parent === window) return;
  var mine = SECTIONS.filter(inRange), filled = mine.filter(function(s){ return val(s).trim().length > 0; }).length;
  try{ window.parent.postMessage({ lrBrief:true, h:document.documentElement.scrollHeight, filled:filled, of:mine.length, range:RANGE.join('-') }, location.origin); }catch(e){} }
function paint(){ SECTIONS.forEach(paintOne); report(); var n = words(), filled = SECTIONS.filter(function(s){ return val(s).trim(); }).length;
  count.textContent = filled + ' of 7 sections have text · about ' + n.toLocaleString('en-US') + ' words' + (n > 1500 ? ', likely more than three pages: tighten before you submit.' : '. Three pages is about 1,500 words.'); }

box.addEventListener('input', function(e){ var el = e.target.closest('[data-s]'); if(!el) return; set('lrb-s' + el.getAttribute('data-s'), el.value); var s = SECTIONS[+el.getAttribute('data-s') - 1]; paintOne(s); report(); var n = words(); count.textContent = count.textContent.replace(/about [\d,]+ words/, 'about ' + n.toLocaleString('en-US') + ' words'); });
box.addEventListener('change', function(e){ var el = e.target.closest('select[data-s]'); if(el){ set('lrb-s' + el.getAttribute('data-s'), el.value); paint(); } });
box.addEventListener('click', function(e){ var r = e.target.closest('[data-reset]'); if(!r) return; set('lrb-s' + r.getAttribute('data-reset'), null); paint(); var el = document.getElementById('bfS' + r.getAttribute('data-reset')); el.focus(); say('Section ' + r.getAttribute('data-reset') + ' now shows your course draft again.'); });
Array.prototype.forEach.call(document.querySelectorAll('[data-meta]'), function(el){ var k = 'lrb-' + el.getAttribute('data-meta'); el.value = get(k) || ''; el.addEventListener('input', function(){ set(k, el.value); }); });
/* a course open in another tab updates the brief as the learner types */
window.addEventListener('storage', function(e){ if(e.key && /^lr[12b]-/.test(e.key)) paint(); });
window.addEventListener('pageshow', paint);

function say(t){ status.textContent = ''; setTimeout(function(){ status.textContent = t; }, 30); }
function meta(k){ return (get('lrb-' + k) || '').trim(); }
function plain(){
  var out = ['CAPSTONE BRIEF' + (meta('title') ? ': ' + meta('title') : '')];
  if(meta('pod')) out.push('Pod: ' + meta('pod')); if(meta('members')) out.push('Members: ' + meta('members'));
  SECTIONS.forEach(function(s){ out.push('', s.n + '. ' + s.h.toUpperCase(), val(s).trim() || '[not written yet]'); });
  return out.join('\n');
}
/* print and PDF: the shared course stylesheet prints only #printSheet, so the brief builds its own sheet from the saved text each time it prints */
var sheet = document.createElement('div'); sheet.id = 'printSheet'; sheet.className = 'print-sheet bf-print'; sheet.setAttribute('aria-hidden', 'true'); document.body.appendChild(sheet);
function paras(t){ return t.split(/\n{2,}/).map(function(p){ return '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>'; }).join(''); }
function buildSheet(){
  var today = new Date().toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' });
  var who = [meta('pod') ? 'Pod: ' + esc(meta('pod')) : '', meta('members') ? 'Members: ' + esc(meta('members')) : ''].filter(Boolean).join(' &middot; ');
  sheet.innerHTML = '<header class="ps-head"><img src="../assets/img/vu-lockup-black.png" alt="Vanderbilt University" width="166" height="43" /><div><span class="ps-k">Leadership Redefined &middot; Capstone Innovation Project</span><h1>' + (meta('title') ? esc(meta('title')) : 'Capstone <em>brief</em>') + '</h1><p>' + (who ? who + ' &middot; ' : '') + 'printed ' + esc(today) + '</p></div></header>' +
    SECTIONS.map(function(s){ var t = val(s).trim(); return '<section><h2>' + s.n + '. ' + esc(s.h) + '</h2>' + (t ? paras(t) : '<p class="bf-empty">Not written yet.</p>') + '</section>'; }).join('');
}
window.addEventListener('beforeprint', buildSheet);
document.querySelector('[data-bf="print"]').addEventListener('click', function(){ buildSheet(); window.print(); });
document.querySelector('[data-bf="copy"]').addEventListener('click', function(){
  var t = plain();
  (navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(t) : Promise.reject()).then(function(){ say('Copied. Paste it into your pod’s shared document.'); }, function(){
    var ta = document.createElement('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); say('Copied. Paste it into your pod’s shared document.'); }catch(e){ say('Copy did not work here. Select the text and copy it.'); } document.body.removeChild(ta); });
});
document.querySelector('[data-bf="word"]').addEventListener('click', function(){
  var body = '<h1>Capstone Brief' + (meta('title') ? ': ' + esc(meta('title')) : '') + '</h1>' +
    (meta('pod') ? '<p><b>Pod:</b> ' + esc(meta('pod')) + '</p>' : '') + (meta('members') ? '<p><b>Members:</b> ' + esc(meta('members')) + '</p>' : '') +
    SECTIONS.map(function(s){ return '<h2>' + s.n + '. ' + esc(s.h) + '</h2>' + (val(s).trim() || '[not written yet]').split(/\n{2,}/).map(function(p){ return '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>'; }).join(''); }).join('');
  var doc = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>Capstone Brief</title>' +
    '<style>body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.35}h1{font-size:18pt}h2{font-size:13pt;margin-top:14pt}</style></head><body>' + body + '</body></html>';
  var blob = new Blob(['﻿', doc], { type:'application/msword' }), a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'capstone-brief.doc'; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 500);
  say('Downloaded capstone-brief.doc. It opens in Word.');
});
paint();
if(EMBED && window.ResizeObserver){ new ResizeObserver(report).observe(document.body); }
})();

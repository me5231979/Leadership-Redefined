(function(){
'use strict';
/* ══════════ LEADERSHIP REDEFINED course engine ══════════
   Shared by both courses. Reads window.LR (set per course by the build):
   LR.prefix   localStorage namespace (per-section booleans + last page only)
   LR.sections tracked sections [{k,no,name,how}]
   LR.course   course name for feedback and downloads
   Typed text is never stored and nothing is sent anywhere; downloads and
   copies happen on the learner's own device. */
var LR = window.LR || { prefix:'lr-', sections:[], course:'Leadership Redefined' };
var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var yr = document.getElementById('yr'); if(yr) yr.textContent = new Date().getFullYear();

/* ── links: anything leaving the page opens in a new tab ── */
document.querySelectorAll('a[href]').forEach(function(a){
  var h = a.getAttribute('href');
  if(h && h.charAt(0) !== '#' && h.indexOf('mailto:') !== 0){ a.setAttribute('target','_blank'); a.setAttribute('rel','noopener'); }
});

/* ══════════ nav / mobile menu ══════════ */
var nav = document.getElementById('nav');
var menuBtn = document.getElementById('menuBtn'), mobileMenu = document.getElementById('mobileMenu');
function setMenu(open){
  var wasOpen = document.body.classList.contains('menu-open');
  document.body.classList.toggle('menu-open', open);
  if(menuBtn){ menuBtn.setAttribute('aria-expanded', open?'true':'false'); menuBtn.setAttribute('aria-label', open?'Close menu':'Open menu'); }
  if(open && mobileMenu){ var first = mobileMenu.querySelector('a'); if(first) first.focus(); }
  else if(wasOpen && !open && menuBtn){ menuBtn.focus(); }
}
if(menuBtn) menuBtn.addEventListener('click', function(){ setMenu(!document.body.classList.contains('menu-open')); });
if(mobileMenu) mobileMenu.addEventListener('click', function(e){ if(e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', function(e){ if(e.key==='Escape') setMenu(false); });
document.addEventListener('keydown', function(e){
  if(e.key !== 'Tab' || !document.body.classList.contains('menu-open') || !mobileMenu) return;
  var items = Array.prototype.slice.call(mobileMenu.querySelectorAll('a'));
  if(menuBtn) items.unshift(menuBtn);
  var first = items[0], last = items[items.length - 1];
  var active = document.activeElement, idx = items.indexOf(active);
  if(idx === -1){ e.preventDefault(); first.focus(); }
  else if(e.shiftKey && active === first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && active === last){ e.preventDefault(); first.focus(); }
});
function navShade(idx){ if(nav) nav.classList.toggle('scrolled', idx > 0); }
document.addEventListener('chart:page', function(ev){ navShade(ev.detail ? ev.detail.index : 0); });
if(window.chartPager) navShade(window.chartPager.current().index);
document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });

/* ══════════ helpers ══════════ */
function announce(msg){ var s = document.getElementById('progStatus'); if(s){ s.textContent = ''; window.setTimeout(function(){ s.textContent = msg; }, 30); } }
function copyText(txt, btn){
  var label = btn.querySelector('span') || btn, orig = label.textContent;
  function done(m){ label.textContent = m; announce(m); window.setTimeout(function(){ label.textContent = orig; }, 1800); }
  function fallback(){
    try{
      var ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly','');
      ta.style.position='fixed'; ta.style.left='-9999px'; document.body.appendChild(ta); ta.select();
      var ok = document.execCommand('copy'); document.body.removeChild(ta);
      done(ok ? 'Copied' : 'Select and copy manually');
    }catch(e){ done('Select and copy manually'); }
  }
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function(){ done('Copied'); }, fallback);
  else fallback();
}
function download(name, txt){
  try{
    var blob = new Blob([txt], { type:'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = name; document.body.appendChild(a); a.click();
    window.setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); }, 500);
    announce('Download started: ' + name);
  }catch(e){ announce('Download is blocked in this browser. Use Copy instead.'); }
}

/* ══════════ PROGRESS: per-section completion, saved in this browser only ══════════ */
var PROG_KEY = LR.prefix + 'progress-';
var PROG_SECTIONS = LR.sections;
var progMem = {};
var progStore = (function(){
  try{ var t = PROG_KEY + 'test'; window.localStorage.setItem(t,'1'); window.localStorage.removeItem(t); return window.localStorage; }
  catch(e){ return null; }
})();
function progIs(k){
  if(progStore){ try{ return progStore.getItem(PROG_KEY + k) === '1'; }catch(e){} }
  return progMem[k] === true;
}
function progWrite(k, v){
  progMem[k] = !!v;
  if(progStore){ try{ v ? progStore.setItem(PROG_KEY + k, '1') : progStore.removeItem(PROG_KEY + k); }catch(e){} }
}
var progBtn = document.getElementById('progBtn'), progPanel = document.getElementById('progPanel'),
    progList = document.getElementById('progList'), progCount = document.getElementById('progCount'),
    progSum = document.getElementById('progSum'), progFill = document.getElementById('progFill'),
    progTop = document.getElementById('progTopLine'), mprogLine = document.getElementById('mprogLine'),
    storageNote = document.getElementById('progStorageNote');
if(storageNote) storageNote.hidden = !!progStore;
function progBuildList(){
  if(!progList) return;
  progList.innerHTML = PROG_SECTIONS.map(function(s){
    return '<li data-prog-row="' + s.k + '"><a href="#' + s.k + '">' +
      '<span class="p-no" aria-hidden="true">' + s.no + '</span>' +
      '<span class="p-name">' + s.name + '<span class="p-how">' + s.how + '</span></span></a>' +
      '<button type="button" class="p-state" data-prog="' + s.k + '" aria-pressed="false" aria-label="Mark ' + s.name + ' done">Mark done</button></li>';
  }).join('');
}
function progRender(changedKey, nowDone){
  var total = PROG_SECTIONS.length, doneN = 0;
  PROG_SECTIONS.forEach(function(s){ if(progIs(s.k)) doneN++; });
  var left = total - doneN;
  if(progCount) progCount.textContent = doneN + '/' + total;
  if(progFill) progFill.style.width = (doneN / total * 100) + '%';
  if(progSum) progSum.textContent = doneN === total
    ? 'All ' + total + ' sections complete. Take it to your pod.'
    : doneN + ' of ' + total + ' sections complete. You have ' + left + ' left; every row below is a shortcut.';
  var saveNote = progStore ? ' Progress saves only in this browser.' : ' Your browser is blocking saved progress, so marks reset when you close this tab.';
  if(progTop) progTop.textContent = doneN === 0 ? 'Section tracking: you have ' + total + ' sections ahead.' + saveNote
    : doneN === total ? 'Section tracking: all ' + total + ' sections complete.'
    : 'Section tracking: ' + doneN + ' of ' + total + ' complete, ' + left + ' left.' + saveNote;
  if(mprogLine) mprogLine.textContent = doneN + ' of ' + total + ' sections complete';
  PROG_SECTIONS.forEach(function(s){
    var done = progIs(s.k);
    var row = progList ? progList.querySelector('[data-prog-row="' + s.k + '"]') : null;
    if(row){
      row.classList.toggle('done', done);
      var st = row.querySelector('.p-state');
      if(st){
        st.textContent = done ? 'Completed' : 'Mark done';
        st.setAttribute('aria-pressed', done ? 'true' : 'false');
        st.setAttribute('aria-label', done ? s.name + ' completed. Select to un-mark.' : 'Mark ' + s.name + ' done');
      }
    }
    document.querySelectorAll('.mlink[data-prog="' + s.k + '"]').forEach(function(a){ a.classList.toggle('done', done); });
    var dot = document.querySelector('.bb-dot[data-rail="' + s.k + '"]');
    if(dot){
      dot.classList.toggle('done', done);
      dot.setAttribute('aria-label', s.name + ', ' + (done ? 'done' : 'not done'));
      dot.setAttribute('title', s.no + ' · ' + s.name + ' · ' + (done ? 'done' : 'not yet'));
    }
    document.querySelectorAll('.md-btn[data-prog="' + s.k + '"]').forEach(function(b){
      b.setAttribute('aria-pressed', done ? 'true' : 'false');
      var sp = b.querySelector('span'); if(sp) sp.textContent = done ? 'Completed' : 'Done with this section';
    });
  });
  if(changedKey){
    var sec = null; PROG_SECTIONS.forEach(function(s){ if(s.k === changedKey) sec = s; });
    if(sec) announce((nowDone ? 'Section complete: ' : 'Section reopened: ') + sec.name + '. ' + doneN + ' of ' + total + ' complete.');
  }
  bbDoneSync();
}
var bbDoneBtn = document.getElementById('bbDone');
function bbDoneSync(){
  if(!bbDoneBtn) return;
  var curKey = (window.chartPager && window.chartPager.current) ? window.chartPager.current().key : '';
  var sec = null; PROG_SECTIONS.forEach(function(s){ if(s.k === curKey) sec = s; });
  if(!sec){ bbDoneBtn.hidden = true; bbDoneBtn.removeAttribute('data-prog'); return; }
  var done = progIs(sec.k);
  bbDoneBtn.hidden = false;
  bbDoneBtn.setAttribute('data-prog', sec.k);
  bbDoneBtn.setAttribute('aria-pressed', done ? 'true' : 'false');
  bbDoneBtn.setAttribute('aria-label', done ? sec.name + ' completed. Select to un-mark.' : 'Mark done: ' + sec.name);
  var t = bbDoneBtn.querySelector('.bb-done-t'); if(t) t.textContent = done ? 'Completed' : 'Mark done';
}
if(bbDoneBtn) bbDoneBtn.addEventListener('click', function(){ var k = bbDoneBtn.getAttribute('data-prog'); if(k) progToggle(k); });
document.addEventListener('chart:page', bbDoneSync);
function progDone(k){ if(!k || progIs(k)) return; progWrite(k, true); progRender(k, true); }
function progToggle(k){ var v = !progIs(k); progWrite(k, v); progRender(k, v); }
function progOpen(open){ if(!progPanel || !progBtn) return; progPanel.hidden = !open; progBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
if(progBtn) progBtn.addEventListener('click', function(){ progOpen(progPanel && progPanel.hidden); });
if(progPanel) progPanel.addEventListener('click', function(e){
  var st = e.target.closest ? e.target.closest('button.p-state') : null;
  if(st){ progToggle(st.getAttribute('data-prog')); return; }
  if(e.target.closest('a')) progOpen(false);
});
document.addEventListener('click', function(e){
  if(progPanel && !progPanel.hidden && !e.target.closest('#progPanel') && !e.target.closest('#progBtn')) progOpen(false);
});
document.addEventListener('keydown', function(e){ if(e.key === 'Escape') progOpen(false); });
document.querySelectorAll('.md-btn').forEach(function(b){ b.addEventListener('click', function(){ progToggle(b.getAttribute('data-prog')); }); });
var progReset = document.getElementById('progReset');
if(progReset) progReset.addEventListener('click', function(){
  PROG_SECTIONS.forEach(function(s){ progWrite(s.k, false); });
  try{ if(progStore) progStore.removeItem(LR.prefix + 'page'); }catch(e){}
  progRender();
  announce('Progress reset. 0 of ' + PROG_SECTIONS.length + ' sections complete.');
});
progBuildList();
progRender();
function secOf(el){ var h = el.closest('[data-prog-sec]'); return h ? h.getAttribute('data-prog-sec') : null; }

/* ══════════ flip cards ══════════ */
document.querySelectorAll('.flip-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    var flipped = btn.classList.toggle('flipped');
    btn.setAttribute('aria-expanded', flipped ? 'true' : 'false');
  });
});

/* ══════════ myth / fact toggles ══════════ */
document.querySelectorAll('.myth > button').forEach(function(btn){
  btn.addEventListener('click', function(){
    var open = btn.parentElement.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

/* ══════════ dilemmas: choose, then read the take ══════════ */
document.querySelectorAll('.dilemma').forEach(function(card){
  var take = card.querySelector('.d-take'), react = card.querySelector('.d-react');
  var btns = card.querySelectorAll('.d-choices button');
  btns.forEach(function(b){
    b.addEventListener('click', function(){
      btns.forEach(function(o){ o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      if(react) react.innerHTML = b.getAttribute('data-react') || '';
      if(take) take.classList.add('show');
      var grid = card.closest('.dilemma-grid'); if(!grid) return;
      var all = true;
      grid.querySelectorAll('.dilemma').forEach(function(d){ if(!d.querySelector('.d-choices button[aria-pressed="true"]')) all = false; });
      if(all) progDone(secOf(grid));
    });
  });
});

/* ══════════ sorter: classify each statement ══════════
   .sorter > .sq[data-answer] > .sq-opts button[data-v] + .sq-fb[data-right][data-wrong] */
document.querySelectorAll('.sorter').forEach(function(box){
  var items = box.querySelectorAll('.sq'), score = box.querySelector('.sq-score');
  function tally(){
    var done = 0, right = 0;
    items.forEach(function(q){ if(q.classList.contains('answered')){ done++; if(q.classList.contains('is-right')) right++; } });
    if(score) score.textContent = done + ' of ' + items.length + ' sorted' + (done ? ', ' + right + ' matched the expert read' : '');
    if(done === items.length) progDone(secOf(box));
  }
  items.forEach(function(q){
    var fb = q.querySelector('.sq-fb'), btns = q.querySelectorAll('.sq-opts button');
    btns.forEach(function(b){
      b.addEventListener('click', function(){
        btns.forEach(function(o){ o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        var ok = b.getAttribute('data-v') === q.getAttribute('data-answer');
        q.classList.add('answered');
        q.classList.toggle('is-right', ok); q.classList.toggle('is-off', !ok);
        if(fb){
          fb.innerHTML = '<b>' + (ok ? 'Matches the expert read. ' : 'The expert read: ' + escapeHtml(q.getAttribute('data-answer-label') || q.getAttribute('data-answer')) + '. ') + '</b>' + (fb.getAttribute('data-why') || '');
          fb.classList.add('show');
        }
        tally();
      });
    });
  });
  tally();
});
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

/* ══════════ self-assessment: sliders roll up into dimension bars ══════════
   .assess[data-reads] where data-reads is JSON {dim:{low,high}} */
document.querySelectorAll('.assess').forEach(function(box){
  var ranges = box.querySelectorAll('input[type=range]'), out = box.querySelector('.as-bars'), read = box.querySelector('.as-read');
  var reads = {}; try{ reads = JSON.parse(box.getAttribute('data-reads') || '{}'); }catch(e){}
  var touched = false;
  function render(){
    var dims = {}, order = [];
    ranges.forEach(function(r){
      var d = r.getAttribute('data-dim');
      if(!(d in dims)){ dims[d] = { sum:0, n:0 }; order.push(d); }
      dims[d].sum += +r.value; dims[d].n++;
      var o = box.querySelector('output[for="' + r.id + '"]'); if(o) o.textContent = r.value;
    });
    var low = null, high = null;
    out.innerHTML = order.map(function(d){
      var avg = dims[d].sum / dims[d].n, pct = Math.round((avg - 1) / 4 * 100);
      if(low === null || avg < dims[low].sum / dims[low].n) low = d;
      if(high === null || avg > dims[high].sum / dims[high].n) high = d;
      return '<div class="as-bar"><div class="ab-l"><b>' + d + '</b><span>' + avg.toFixed(1) + ' of 5</span></div>' +
        '<div class="ab-t" aria-hidden="true"><div class="ab-f" style="width:' + pct + '%"></div></div></div>';
    }).join('');
    if(read){
      read.innerHTML = touched
        ? '<b>Strongest: ' + high + '.</b> ' + ((reads[high] || {}).high || '') + '<br><br><b>Grow next: ' + low + '.</b> ' + ((reads[low] || {}).low || '')
        : 'Move the sliders to see your read. Nothing you choose is saved or sent.';
    }
  }
  ranges.forEach(function(r){
    r.addEventListener('input', function(){ touched = true; render(); });
    r.addEventListener('change', function(){ touched = true; render(); progDone(secOf(box)); });
  });
  render();
});

/* ══════════ allocator: spread points, plot the result on a 2x2 ══════════
   .alloc[data-total] ranges carry data-x / data-y weights (0..1); svg has #<id>-dot */
document.querySelectorAll('.alloc').forEach(function(box){
  var total = +box.getAttribute('data-total') || 100;
  var ranges = box.querySelectorAll('input[type=range]'), tot = box.querySelector('.al-total');
  var dot = box.querySelector('.mx-dot'), read = box.querySelector('.mx-read');
  var quads = {}; try{ quads = JSON.parse(box.getAttribute('data-quads') || '{}'); }catch(e){}
  function render(final){
    var sum = 0, x = 0, y = 0;
    ranges.forEach(function(r){
      var v = +r.value; sum += v;
      x += v * (+r.getAttribute('data-x')); y += v * (+r.getAttribute('data-y'));
      var o = box.querySelector('output[for="' + r.id + '"]'); if(o) o.textContent = v;
    });
    var left = total - sum;
    if(tot) tot.innerHTML = 'Points placed: ' + sum + ' of ' + total + (left < 0 ? ' <span class="over">(' + (-left) + ' over budget: pull some back)</span>' : left > 0 ? ' (' + left + ' left to place)' : ' (fully allocated)');
    if(sum > 0 && dot){
      var nx = x / sum, ny = y / sum; /* 0..1 */
      dot.setAttribute('cx', (40 + nx * 320).toFixed(1));
      dot.setAttribute('cy', (340 - ny * 320).toFixed(1));
      dot.style.display = '';
      var q = (ny >= .5 ? 'top' : 'bottom') + (nx >= .5 ? 'right' : 'left');
      if(read) read.innerHTML = (left === 0 ? '' : '<b>Keep going: place all ' + total + ' points.</b> ') + (quads[q] || '');
      if(final && left === 0) progDone(secOf(box));
    } else if(dot){ dot.style.display = 'none'; }
  }
  ranges.forEach(function(r){
    r.addEventListener('input', function(){ render(false); });
    r.addEventListener('change', function(){ render(true); });
  });
  render(false);
});

/* ══════════ builder: fields assemble into a live draft, copy or download ══════════
   .builder[data-file] fields [data-field][data-label]; template in <template class="bd-tpl"> */
document.querySelectorAll('.builder').forEach(function(box){
  var fields = box.querySelectorAll('[data-field]'), out = box.querySelector('.bd-out');
  var tplEl = box.querySelector('template.bd-tpl'), tpl = tplEl ? tplEl.innerHTML.trim() : '';
  function val(f){ return (f.value || '').trim(); }
  function asText(){
    var map = {}; fields.forEach(function(f){ map[f.getAttribute('data-field')] = val(f) || '[' + f.getAttribute('data-label') + ']'; });
    return tpl.replace(/\{(\w+)\}/g, function(m, k){ return map[k] != null ? map[k] : m; }).replace(/&amp;/g,'&');
  }
  function render(){
    var map = {}; fields.forEach(function(f){
      var v = val(f); map[f.getAttribute('data-field')] = v ? escapeHtml(v) : '<span class="ph">[' + escapeHtml(f.getAttribute('data-label')) + ']</span>';
    });
    out.innerHTML = tpl.replace(/\{(\w+)\}/g, function(m, k){ return map[k] != null ? map[k] : m; });
  }
  fields.forEach(function(f){ f.addEventListener('input', render); f.addEventListener('change', render); });
  var cp = box.querySelector('.bd-copy'), dl = box.querySelector('.bd-dl');
  function filled(){ var n = 0; fields.forEach(function(f){ if(val(f)) n++; }); return n; }
  if(cp) cp.addEventListener('click', function(){ copyText(asText(), cp); if(filled() >= 2) progDone(secOf(box)); });
  if(dl) dl.addEventListener('click', function(){ download(box.getAttribute('data-file') || 'leadership-redefined-notes.txt', LR.course + '\n\n' + asText() + '\n'); if(filled() >= 2) progDone(secOf(box)); });
  render();
});

/* ══════════ explorable diagram: segment buttons fill one detail panel ══════════ */
document.querySelectorAll('.explore').forEach(function(box){
  var panel = box.querySelector('.ex-panel'), btns = box.querySelectorAll('.ex-btns button'), segs = box.querySelectorAll('svg .seg');
  var seen = {};
  function show(i){
    var b = btns[i]; if(!b) return;
    btns.forEach(function(o, j){ o.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
    segs.forEach(function(s){ s.classList.toggle('on', s.getAttribute('data-i') === String(i)); });
    var src = box.querySelector('.ex-src[data-i="' + i + '"]');
    if(panel && src) panel.innerHTML = src.innerHTML;
    seen[i] = true;
    if(Object.keys(seen).length === btns.length) progDone(secOf(box));
  }
  btns.forEach(function(b, i){ b.addEventListener('click', function(){ show(i); }); });
  segs.forEach(function(s){ s.addEventListener('click', function(){ show(+s.getAttribute('data-i')); }); });
});

/* ══════════ checklist: count what is ready ══════════ */
document.querySelectorAll('.checklist').forEach(function(list){
  var boxes = list.querySelectorAll('input[type=checkbox]'), cnt = list.parentElement.querySelector('.cl-count');
  function upd(){
    var n = 0; boxes.forEach(function(b){ if(b.checked) n++; });
    if(cnt) cnt.textContent = n + ' of ' + boxes.length + ' ready';
    if(n === boxes.length) progDone(secOf(list));
  }
  boxes.forEach(function(b){ b.addEventListener('change', upd); });
  upd();
});

/* ══════════ copy buttons for ready-made text ══════════ */
document.querySelectorAll('[data-copytext]').forEach(function(b){
  b.addEventListener('click', function(){ copyText(b.getAttribute('data-copytext').replace(/\\n/g, '\n'), b); });
});

/* ══════════ KNOWLEDGE CHECK ══════════ */
(function(){
  var submit = document.getElementById('quizSubmit'), result = document.getElementById('quizResult'),
      prog = document.getElementById('quizProgress'), nudge = document.getElementById('quizNudge'), waitLine = document.getElementById('quizWait');
  var sets = Array.prototype.slice.call(document.querySelectorAll('.qz[data-answer]'));
  if(!sets.length || !submit) return;
  var TOTAL = sets.length, lastScore = null;
  function goPage(el){ if(window.chartPager && el) window.chartPager.goToEl(el); }
  function answered(fs){ return fs.querySelector('input[type=radio]:checked'); }
  function updateProgress(){
    var n = sets.filter(function(fs){ return !!answered(fs); }).length;
    if(prog) prog.textContent = n + ' of ' + TOTAL + ' answered';
    if(n === TOTAL && nudge) nudge.classList.remove('show');
    return n;
  }
  document.addEventListener('change', function(e){ if(e.target && e.target.closest && e.target.closest('.qz[data-answer]')) updateProgress(); });
  function setLocked(lock){ sets.forEach(function(fs){ fs.querySelectorAll('input[type=radio]').forEach(function(r){ r.disabled = lock; }); }); }
  function tier(score){
    if(score === TOTAL) return ['Every one.','You have the ideas cold. Now put them in the brief.'];
    if(score >= TOTAL - 2) return ['Nearly all of it.','Read the explanations under the ones you missed and you are there.'];
    if(score >= TOTAL / 2) return ['A solid base.','You have the big ideas. A second pass through the sections you missed will lock in the rest.'];
    return ['Worth a second pass.','Revisit the three topic sections; each takes about fifteen minutes.'];
  }
  submit.addEventListener('click', function(){
    var n = updateProgress();
    if(n < TOTAL){
      if(nudge) nudge.classList.add('show');
      var firstBlank = sets.filter(function(fs){ return !answered(fs); })[0];
      if(firstBlank){ goPage(firstBlank); var input = firstBlank.querySelector('input[type=radio]'); if(input) input.focus(); }
      return;
    }
    var score = 0;
    sets.forEach(function(fs){
      var pick = answered(fs), ok = pick && pick.value === fs.getAttribute('data-answer');
      fs.classList.add('graded'); fs.classList.toggle('correct', !!ok); fs.classList.toggle('wrong', !ok);
      var tag = fs.querySelector('.qz-tag'); if(!tag){ tag = document.createElement('span'); tag.className = 'chip qz-tag'; fs.querySelector('legend').appendChild(tag); }
      tag.textContent = ok ? 'Correct' : 'Not quite';
      if(ok) score++;
    });
    setLocked(true); lastScore = score; progDone('quiz');
    var t = tier(score);
    if(result){
      result.innerHTML = '<div class="big-score">' + score + ' / ' + TOTAL + '</div><h3>' + t[0] + '</h3><p>' + t[1] + '</p>' +
        '<button type="button" class="btn btn-ghost" id="quizRetake">Retake the check</button>';
      result.classList.add('show');
      if(waitLine) waitLine.hidden = true;
      var fb = document.getElementById('fbPanel'); if(fb) fb.classList.add('show');
      var fsl = document.getElementById('fbScoreLine'); if(fsl) fsl.textContent = 'Your knowledge-check score (' + score + ' / ' + TOTAL + ') is included in the email automatically.';
      fbUpdate();
      document.getElementById('quizRetake').addEventListener('click', function(){
        setLocked(false); if(waitLine) waitLine.hidden = false;
        sets.forEach(function(fs){ fs.classList.remove('graded','correct','wrong'); var tg = fs.querySelector('.qz-tag'); if(tg) tg.remove(); fs.querySelectorAll('input[type=radio]').forEach(function(r){ r.checked = false; }); });
        result.classList.remove('show'); result.innerHTML = ''; updateProgress(); goPage(sets[0]);
      });
      goPage(result);
    }
  });
  updateProgress();

  /* course feedback (Kirkpatrick L1): two ratings + comment, drafted as an email the learner sends */
  var fbForm = document.getElementById('fbForm'), fbSend = document.getElementById('fbSend'), fbNudge = document.getElementById('fbNudge'),
      fbComment = document.getElementById('fbComment'), fbStatus = document.getElementById('fbStatus');
  var FB_TO = LR.feedbackTo || 'matthew.estes@vanderbilt.edu';
  function fbVal(name){ var el = fbForm ? fbForm.querySelector('input[name="' + name + '"]:checked') : null; return el ? el.value : null; }
  function fbUpdate(){
    if(!fbForm || !fbSend) return;
    var use = fbVal('fbUse'), csat = fbVal('fbCsat'), ready = use !== null && csat !== null;
    fbSend.setAttribute('aria-disabled', ready ? 'false' : 'true');
    if(ready){
      var lines = ['Usefulness for my capstone: ' + use + '/5', 'Overall satisfaction: ' + csat + '/5', 'Knowledge-check score: ' + (lastScore === null ? 'not taken' : lastScore + '/' + TOTAL)];
      var c = fbComment ? fbComment.value.trim() : ''; if(c) lines.push('', 'Comment:', c);
      fbSend.setAttribute('href', 'mailto:' + FB_TO + '?subject=' + encodeURIComponent(LR.course + ' feedback') + '&body=' + encodeURIComponent(lines.join('\n')));
    } else fbSend.setAttribute('href', '#');
    if(fbNudge) fbNudge.classList.toggle('show', !ready);
  }
  if(fbForm){ fbForm.addEventListener('change', fbUpdate); fbForm.addEventListener('submit', function(e){ e.preventDefault(); }); }
  if(fbComment) fbComment.addEventListener('input', fbUpdate);
  if(fbSend) fbSend.addEventListener('click', function(e){
    if(fbSend.getAttribute('aria-disabled') === 'true'){ e.preventDefault(); if(fbNudge) fbNudge.classList.add('show'); return; }
    if(fbStatus) fbStatus.textContent = 'Thank you. Your email app should open with the feedback drafted; just press send.';
  });
  fbUpdate();
})();
})();

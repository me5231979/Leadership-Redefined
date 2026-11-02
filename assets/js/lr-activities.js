/* ══════════ LEADERSHIP REDEFINED · activity library (version 3) ══════════
   Fourteen activity types, declared in markup and data, built on the shared engine
   (lr-engine.js) so progress, the takeaway print, SCORM tracking and narration keep working.
   Load after lr-engine.js. Styles: assets/css/lr-v3.css. Design rules: docs/design-v3.md.
   No em or en dashes anywhere.

   ── HOW TO USE ──────────────────────────────────────────────────────────────
   1. Markup: one empty element where the activity goes, plus the instruction line:
        <p class="v-task" data-task="engine">Sort each moment into the flywheel it turns</p>
        <div class="lr-act" data-act="engine"></div>
      data-act names an entry in window.LR_COURSE.ACTIVITIES (content.js). The library
      draws everything inside the element. data-task on the instruction line must equal
      the activity's progress key (prog) so the line turns gold with a check when done.
   2. Data: window.LR_COURSE.ACTIVITIES = { engine:{ type:'sort', ... } }.
   3. Progress: on completion the library calls window.LR_DONE(prog) (engine progDone)
      and saves a readable result with LR_PROG.set('r-' + prog, summary), which the
      takeaway prints. prog defaults to the activity key. For a tracked activity, prog
      must be a SECTIONS key (content.js) and equal the PLAN key of the page it sits on,
      so the Mark done button, the dot rail and SCORM all agree.
   4. State: answers are saved in this browser under 'a-' + key and restored on reload.
      Reset progress (footer) clears them.
   5. Every type: one instruction line (yours, above), mouse + touch + keyboard (every drag
      has a tap and keyboard path: tap the item, then tap where it goes), feedback with a
      reason, announced in a polite live region, a visible completion bar, 24px+ targets,
      prefers-reduced-motion turns animation off (CSS).
   6. Tests: each mounted element exposes el.lrAct = { type, key, prog, solve(), done() }.
      solve() completes the activity by clicking its real controls in the right order.
      window.LR_ACT.all() lists them. tools/smoke-v.mjs and tools/takeaway-check.mjs use it.
   7. Text fields accept simple inline HTML (<b>, <em>); write it yourself, it is not escaped.
      Plain fields (labels, chips) are escaped.

   ── THE TYPES AND THEIR DATA CONTRACTS ──────────────────────────────────────
   Common optional fields on every type: prog (progress key), done (text shown on completion).

   1. explore   Explore the slide: tap each hotspot to reveal its text. Done when all seen.
      { type:'explore',
        slides:[ { label:'Vanderbilt Vision', html:'Vanderbilt will [[define|define, and be,]] the ...' } ],
          // [[spotId|visible words]] in html becomes a hotspot button around those words
        figure:'<svg>...</svg>', pins:[ { id:'rep', x:50, y:12 } ],   // or: pins over a figure, x/y in %
        spots:{ define:{ title:'Define, and be', text:'...' }, ... },  // one entry per spotId
        prompt:'Tap a gold phrase to open it.' }                         // shown before the first tap
   2. sort      Sort into buckets: one card at a time; drag it to a bucket, or tap a bucket.
      { type:'sort', buckets:['Execution with Ambition', ...],
        items:[ { t:'card text', a:0 (right bucket index), why:'reason shown when right', hint:'shown when wrong' } ],
        noun:'moment',
        subs:['optional: one line of HTML under each bucket label, e.g. the deck definition', ...] }
   3. place     Place it on the chart: same as sort, drawn as a 2 by 2 chart with axes.
      { type:'place', buckets:[4 labels], grid:{ x:'Audience interest', y:'Societal importance', cells:[TL, TR, BL, BR bucket indexes] },
        items:[ { t, a, why, hint } ] }
   4. order     Put it in order: move items with Up and Down (or drag), then Check.
      { type:'order', items:[ { t:'step text', why:'shown once in place' } ]  (in the RIGHT order),
        start:[2,0,3,1] (optional starting order), ends:['First', 'Last'] }
   5. match     Match: tap a left item, then its partner on the right (or drag left onto right).
      { type:'match', left:[ { t } ], right:[ { t } ] (right[i] pairs with left[i]),
        why:[ 'reason for pair 0', ... ], hint:[ 'optional, shown on a wrong try', ... ],
        heads:['Moment', 'Resource'], show:[2,0,3,1] (optional display order of the right column) }
   6. flip      Flip cards: front a term or number, back the meaning. Done when every card is turned.
      { type:'flip', cards:[ { front:'Execution with Ambition', sub:'tap to turn', back:'meaning', hi:'exec' } ],
        figure:'<svg>... <path data-hi="exec"/> ...</svg>' (optional: parts light up as their card turns) }
   7. compare   Compare: wipe between two images of the same frame. Done when both ends were seen.
      { type:'compare', a:{ src, alt, label:'2020' }, b:{ src, alt, label:'2026' }, w:1600, h:835, caption:'...' }
   8. predict   Predict, then reveal: estimate with a slider; the real number and its chart animate in.
      { type:'predict', rounds:[ { title:'Undergraduate Selectivity', q:'question', chart:0 (LR_COURSE.CHARTS index),
          min:0, max:15, step:0.1, start:8, pre:'', post:'%', dec:1, answer:4.6, close:1.5 (within = close),
          x:'explanation after the reveal' } ] }
        // the chart's last bar is the answer: hidden until the reveal, with your guess drawn as a dashed bar
   9. branch    Branching scenario: 2 or 3 decisions, each choice changes what comes next, then a debrief.
      { type:'branch', start:'n1', label:'Hypothetical',
        nodes:{ n1:{ t:'situation', opts:[ { t:'choice', out:'what happens', next:'n2' } ] },
                e1:{ end:true, h:'Outcome title', t:'what happened', debrief:'why, in the deck’s words' } } }
  10. rate      Rate your team: personal, not scored. A radar draws as you answer.
      { type:'rate', dims:['Transparency', 'Expertise', 'Commitment', 'Empathy'], levels:['Not yet', 'Partly', 'Strongly'],
        low:'Your thinnest side: {dims}. ...', high:'Every side reaches the outer ring. ...' }
  11. build     Build it: assemble a statement from chips. No typing.
      { type:'build', tpl:'Our team serves {0}, and our next win could turn {1}.',
        slots:[ { label:'Which vision', opts:['the Vanderbilt Vision', ...] } ] }
  12. spot      Spot it: true or false (or fact or myth) cards, one at a time, each with a reason.
      { type:'spot', labels:['True', 'False'], items:[ { t:'statement', a:0 (index into labels), why:'reason' } ] }
  13. scrub     Scrub the timeline: move a slider (or Back and Next, or drag the marker on the chart) through the
      stages of a deck graphic. Parts of the figure appear as you go; done when every stage was seen. (Added for Course One.)
      { type:'scrub', figure:'<svg viewBox="X Y W H"> ... <g data-from="2">shown from stage 2</g> <g data-until="1">shown up to stage 1</g>
          <g data-cursor>moved by each stage's cx and cy (viewBox units, from where it is drawn)</g> </svg>',
        steps:[ { label:'Optimal time to act', t:'what this stage shows', cx:150, cy:0 } ], label:'aria label of the slider' }
  14. reveal    See it first (display, not tracked). The owner's rule: learners SEE a deck graphic, built up part by part
      with a plain line for each part, BEFORE any question that uses it. The figure plays by itself the first time its
      page opens (each part fades or draws in, 300ms; about 2.5 seconds per step, longer for a longer line), with Play
      (Pause, Replay), Back, Next, and one dot per step. Tapping Listen on the page replays it from the start beside the
      narration. Under prefers-reduced-motion nothing moves: it opens finished, on its last step, and the controls still step.
      { type:'reveal', figure:'<svg viewBox="X Y W H"> <g data-rv="1">part 1</g> <path data-rv="2" data-rv-draw pathLength="1" .../> </svg>',
          // or plain HTML (a text slide): '<div class="..."><p data-rv="1">...</p></div>'
        steps:[ { label:'Simple reporting', t:'what just appeared, in plain words' } ],  // steps[k-1] goes with data-rv="k";
          // make the last step the whole picture: it is what reduced motion, and a return visit, open on
        caption:'source line under the figure (optional)', label:'aria label for the graphic', fh:'figure height (optional CSS length)',
        prompt:'shown while the figure is still blank (optional)' }
      Reveal on an activity's own figure: mark parts of an explore, flip, or scrub figure with data-rv="1", "2", ...
      (data-rv-draw on a path with pathLength="1" draws it; data-rv-until="k" hides a part again after step k). The library adds a small Play bar with step dots under the
      figure and builds the figure the first time the page opens, before the learner does anything; the first tap on
      the activity shows it whole. A flip without a figure takes cfg.reveal:true and deals its cards in, one by one.
   Added with 14 (owner feedback, November 2026):
      sort and place: an item may carry img:{ src, w, h }. Once sorted, every item sits INSIDE its bucket as a small card
        (the thumbnail, never above its native width / 1.5, and its short label); screen readers hear the same list as before.
      rate: cfg.levelHints (one line per level, shown once above the rows; the default explains Not yet, Partly, Strongly),
        cfg.act[i] (one practical move per dimension: when every row is rated, the read-out names the thinnest side(s)
        and gives "Try this with your team" for up to two of them) and cfg.keep (one way to sustain an all-Strongly shape).
      predict: the chart's known bars or points draw in one by one when the page opens; Play the chart replays it.
   Charts: a LR_COURSE.CHARTS entry may be type:'line' (cats, series, hide, arrow; see lineSVG). Added for Course Two.
   Chart option tall (a multiplier on the drawn height, same data and scale) lets predict draw its chart
   taller so it fills the stage (predict uses 1.25). The rate radar breaks a long side label onto two lines.
   Display helper (not tracked):
      chartset  A set of the deck's charts that draw in when the page opens.
      { type:'chartset', charts:[1, 3, 4] (LR_COURSE.CHARTS indexes) }
   ──────────────────────────────────────────────────────────────────────────── */
(function(){
'use strict';
var D = window.LR_COURSE || {}, ACTS = D.ACTIVITIES || {}, CH = D.CHARTS || [];
var P = window.LR_PROG || { done:function(){}, is:function(){ return false; }, set:function(){}, get:function(){ return null; }, turn:function(){} };
var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!window.LR_DONE) window.LR_DONE = function(k){ P.done(k); };
var REG = {};

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]; }); }
function strip(s){ return String(s == null ? '' : s).replace(/<[^>]+>/g, ''); }
function $$(s, c){ return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
function load(k){ try{ var v = JSON.parse(P.get('a-' + k) || 'null'); return v && typeof v === 'object' ? v : null; }catch(e){ return null; } }
/* a stable shuffle (the same every visit, so restored answers line up), never the identity */
function shuffle(n, seed){
  var a = [], i, h = 7; for(i = 0; i < n; i++) a.push(i);
  for(i = 0; i < String(seed).length; i++) h = (h * 31 + String(seed).charCodeAt(i)) % 2147483647;
  for(i = n - 1; i > 0; i--){ h = (h * 48271) % 2147483647; var j = h % (i + 1), t = a[i]; a[i] = a[j]; a[j] = t; }
  if(n > 1 && a.every(function(v, k){ return v === k; })) a.push(a.shift());
  return a;
}
var CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true" class="la-ic"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var CROSS = '<svg viewBox="0 0 24 24" aria-hidden="true" class="la-ic"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>';
function doneBar(api, text){ return api.st.done ? '<p class="la-donebar">' + CHECK + '<span><b>Complete.</b> ' + (api.cfg.done || text || '') + '</span></p>' : ''; }

/* drag: a pointer drag from sel to dropSel calls onDrop(src, target). A short move is a tap,
   so the click path (tap, then tap where it goes) always works too. Touch drags only where the
   element carries data-touchdrag, so page scrolling still works everywhere else. */
function draggable(root, sel, dropSel, onDrop){
  root.addEventListener('pointerdown', function(e){
    var src = e.target.closest(sel); if(!src || !root.contains(src) || e.button > 0) return;
    if(e.pointerType === 'touch' && !src.hasAttribute('data-touchdrag')) return;
    var sx = e.clientX, sy = e.clientY, ghost = null, over = null, id = e.pointerId;
    function move(ev){
      if(ev.pointerId !== id) return;
      if(!ghost){
        if(Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) < 8) return;
        ghost = src.cloneNode(true); ghost.className += ' la-ghost'; ghost.removeAttribute('id'); ghost.setAttribute('aria-hidden', 'true');
        ghost.style.width = src.offsetWidth + 'px'; document.body.appendChild(ghost); src.classList.add('la-dragging');
      }
      ev.preventDefault();
      ghost.style.transform = 'translate(' + (ev.clientX - ghost.offsetWidth / 2) + 'px,' + (ev.clientY - 24) + 'px)';
      var t = document.elementFromPoint(ev.clientX, ev.clientY), d = t && t.closest ? t.closest(dropSel) : null;
      if(d && !root.contains(d)) d = null;
      if(d !== over){ if(over) over.classList.remove('la-over'); over = d; if(over) over.classList.add('la-over'); }
    }
    function up(ev){
      if(ev.pointerId !== id) return;
      document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', up); document.removeEventListener('pointercancel', up);
      if(!ghost) return;
      ghost.parentNode.removeChild(ghost); src.classList.remove('la-dragging');
      root._noclick = Date.now();
      if(over && ev.type === 'pointerup'){ over.classList.remove('la-over'); onDrop(src, over); }
      else if(over) over.classList.remove('la-over');
    }
    document.addEventListener('pointermove', move, { passive:false }); document.addEventListener('pointerup', up); document.addEventListener('pointercancel', up);
  });
  /* a drag must not turn the page (the pager listens for swipes on main) */
  ['touchstart', 'touchend'].forEach(function(t){ root.addEventListener(t, function(e){ if(e.target.closest && e.target.closest('[data-touchdrag]')) e.stopPropagation(); }, { passive:true }); });
}

/* ══════════ charts: the deck's bar charts, drawn as SVG from LR_COURSE.CHARTS ══════════
   o: { w, h, guess (value), hide (true: last bar is a ?), grow (animate), max } */
function tick(c, v){ var s = Math.abs(v) >= 1000 ? v.toLocaleString('en-US') : String(v); return c.fmt === 'pct' ? s + '%' : c.fmt === 'usd' ? '$' + s : s; }
function chartSVG(c, o){
  o = o || {};
  if(c.type === 'line') return lineSVG(c, o); /* added for Course Two: the deck's line charts (lineSVG, below) */
  var W = o.w || 560, H = Math.round((o.h || 300) * (o.tall || 1)), L = o.small ? 48 : 60, R = (o.guess !== undefined && o.guess !== null) ? 72 : 12, T = 24, B = 30 + (c.legend ? 18 : 0);
  var max = o.max || c.max, bw = W - L - R, bh = H - T - B, slot = bw / c.bars.length, wide = Math.min(o.small ? 70 : 120, slot * 0.46);
  var Y = function(v){ return T + bh - Math.max(0, Math.min(v, max)) / max * bh; };
  var out = '', g, n = c.bars.length;
  for(g = c.step; g <= max + 1e-9; g += c.step) out += '<line x1="' + L + '" x2="' + (L + bw) + '" y1="' + Y(g) + '" y2="' + Y(g) + '" class="la-cg"/><text x="' + (L - 6) + '" y="' + (Y(g) + 4) + '" text-anchor="end" class="la-ct">' + esc(tick(c, g)) + '</text>';
  out += '<line x1="' + L + '" x2="' + (L + bw) + '" y1="' + Y(0) + '" y2="' + Y(0) + '" class="la-cb"/>';
  c.bars.forEach(function(b, k){
    var cx = L + slot * (k + .5), x = cx - wide / 2, last = k === n - 1;
    var cls = 'la-bar' + (last && o.reveal ? ' la-new' : '');
    if(last && o.hide){
      out += '<rect x="' + x + '" y="' + (T + 4) + '" width="' + wide + '" height="' + (Y(0) - T - 4) + '" class="la-q"/><text x="' + cx + '" y="' + (T + bh / 2 + 10) + '" text-anchor="middle" class="la-qt">?</text>';
    } else if(b.seg){
      var base = 0;
      b.seg.forEach(function(sv, si){ var y0 = Y(base), y1 = Y(base + sv); out += '<rect x="' + x + '" y="' + y1 + '" width="' + wide + '" height="' + (y0 - y1) + '" class="' + cls + (si ? ' la-b2' : '') + ' la-di" style="--i:' + k + '"/><text x="' + cx + '" y="' + (y1 + 16) + '" text-anchor="middle" class="la-cvi la-di" style="--i:' + k + '">' + esc(b.labs[si]) + '</text>'; base += sv; });
    } else {
      var y = Y(b.v);
      if(b.v > 0) out += '<rect x="' + x + '" y="' + y + '" width="' + wide + '" height="' + (Y(0) - y) + '" class="' + cls + ' la-di" style="--i:' + k + '"/>';
      out += '<text x="' + cx + '" y="' + (b.inside ? y + 20 : y - 7) + '" text-anchor="middle" class="' + (b.inside ? 'la-cvi' : 'la-cv') + (last && o.reveal ? ' la-newv' : '') + ' la-di" style="--i:' + k + '">' + esc(b.lab) + '</text>';
    }
    out += '<text x="' + cx + '" y="' + (T + bh + 18) + '" text-anchor="middle" class="la-ct">' + esc(b.x) + (b.note ? '<tspan dy="-6" class="la-cn">' + esc(b.note) + '</tspan>' : '') + '</text>';
    if(last && o.guess !== undefined && o.guess !== null){
      var gy = Y(o.guess);
      out += '<g class="la-guess"><rect x="' + (x - 6) + '" y="' + gy + '" width="' + (wide + 12) + '" height="' + Math.max(0, Y(0) - gy) + '" class="la-gb"/>' +
        '<line x1="' + (x - 14) + '" x2="' + (x + wide + 14) + '" y1="' + gy + '" y2="' + gy + '" class="la-gl"/>' +
        '<text x="' + (x + wide + 16) + '" y="' + (gy + 4) + '" class="la-gt">' + (o.guessLab ? esc(o.guessLab) : 'Your guess') + '</text></g>';
    }
  });
  if(c.legend) out += c.legend.map(function(t, li){ var lx = L + bw / 2 - 40 + li * 56; return '<rect x="' + lx + '" y="' + (H - 12) + '" width="10" height="10" class="la-bar' + (li ? ' la-b2' : '') + '"/><text x="' + (lx + 14) + '" y="' + (H - 3) + '" class="la-ct">' + esc(t) + '</text>'; }).join('');
  if(c.axis && !o.small) out += '<text class="la-ct la-cax" transform="translate(12 ' + (T + bh / 2) + ') rotate(-90)" text-anchor="middle">' + esc(c.axis) + '</text>';
  var said = o.hide ? c.bars.slice(0, -1).map(function(b){ return b.x + ' ' + b.lab; }).join(', ') + ', ' + c.bars[n - 1].x + ' hidden until you guess' :
    c.bars.map(function(b){ return b.x + ' ' + (b.seg ? c.legend.map(function(t, li){ return t + ' ' + b.labs[li]; }).join(' and ') + ', total ' + b.lab : b.lab); }).join(', ');
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" class="la-svg" role="img" aria-label="' + esc(c.title + '. Bar chart: ' + said + '.') + '">' + out + '</svg>';
}
function chartFig(c, o){
  return '<figure class="la-chart' + (o && o.small ? ' sm' : '') + '"><figcaption><b>' + esc(c.title) + '</b>' + (o && o.nosub ? '' : '<span>' + esc(c.sub) + '</span>') + '</figcaption>' + chartSVG(c, o) + (c.foot && !(o && o.nofoot) ? '<p class="la-cfoot">' + esc(c.foot) + '</p>' : '') + '</figure>';
}
function countUp(el, fin){
  var m = String(fin).match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/); if(!m || reduce){ el.textContent = fin; return; }
  var pre = m[1], num = parseFloat(m[2].replace(/,/g, '')), post = m[3], dec = (m[2].split('.')[1] || '').length, comma = m[2].indexOf(',') > -1, t0 = null;
  function f(v){ var t = v.toFixed(dec); if(comma) t = t.replace(/\B(?=(\d{3})+(?!\d))/g, ','); return pre + t + post; }
  function step(ts){ if(t0 === null) t0 = ts; var k = Math.min(1, (ts - t0) / 700), e = 1 - Math.pow(1 - k, 3); el.textContent = k >= 1 ? fin : f(num * e); if(k < 1) requestAnimationFrame(step); }
  requestAnimationFrame(step);
}

/* ══════════ the types ══════════ */
var T = {};

/* 1. explore */
T.explore = function(api){
  var cfg = api.cfg, st = api.st, ids = [], nums = {};
  st.seen = st.seen || {};
  (cfg.slides || []).forEach(function(s){ String(s.html).replace(/\[\[([\w-]+)\|/g, function(_, id){ if(!(id in nums)){ ids.push(id); nums[id] = ids.length; } return _; }); });
  (cfg.pins || []).forEach(function(p){ if(!(p.id in nums)){ ids.push(p.id); nums[p.id] = ids.length; } });
  var pid = 'la-' + api.key + '-panel';
  function spot(id, inner){
    var s = cfg.spots[id] || {}, seen = st.seen[id], on = st.cur === id;
    return '<button type="button" class="la-spot' + (seen ? ' seen' : '') + (on ? ' on' : '') + '" data-spot="' + id + '" data-fk="s-' + id + '" aria-expanded="' + on + '" aria-controls="' + pid + '"' + (inner ? '' : ' aria-label="' + esc((s.title || id) + (seen ? ', seen' : '')) + '"') + '>' +
      (inner ? '<span class="la-sw">' + inner + '</span>' : '') + '<span class="la-num" aria-hidden="true">' + (seen ? CHECK : nums[id]) + '</span>' + (inner && seen ? '<span class="sr">, seen</span>' : '') + '</button>';
  }
  api.html = function(){
    var n = ids.filter(function(i){ return st.seen[i]; }).length, s = st.cur && cfg.spots[st.cur];
    var h = '<div class="la-ex">';
    if(cfg.slides) h += '<div class="la-slides">' + cfg.slides.map(function(sl){ return '<div class="la-slide">' + (sl.label ? '<span class="la-slab">' + esc(sl.label) + '</span>' : '') + '<p class="la-stext">' + String(sl.html).replace(/\[\[([\w-]+)\|([^\]]+)\]\]/g, function(_, id, words){ return spot(id, words); }) + '</p></div>'; }).join('') + '</div>';
    if(cfg.figure){
      /* the pins sit in a box with the figure's own shape, so their % positions match the drawing at any size */
      var vb = (String(cfg.figure).match(/viewBox="[\d.\-]+ [\d.\-]+ ([\d.]+) ([\d.]+)"/) || [0, 16, 9]), rw = cfg.ratio ? cfg.ratio[0] : +vb[1], rh = cfg.ratio ? cfg.ratio[1] : +vb[2];
      h += '<div class="la-fig"><div class="la-figbox" style="--rw:' + rw + ';--rh:' + rh + '">' + cfg.figure + (cfg.pins || []).map(function(p){ return '<span class="la-pin" style="left:' + p.x + '%;top:' + p.y + '%">' + spot(p.id) + '</span>'; }).join('') + '</div></div>';
    }
    h += '<div class="la-panel" id="' + pid + '" tabindex="-1">' + (s ? '<span class="la-k">' + nums[st.cur] + ' of ' + ids.length + '</span><b class="la-pt">' + s.title + '</b><p>' + s.text + '</p>' : '<p class="la-empty">' + (cfg.prompt || 'Tap each numbered spot to open it.') + '</p>') + '</div>';
    h += st.done ? doneBar(api, 'You opened all ' + ids.length + '.') : '<p class="la-count">' + n + ' of ' + ids.length + ' explored</p>';
    return h + '</div>';
  };
  api.click = function(b){
    var id = b.getAttribute('data-spot'); if(!id) return;
    st.cur = id; st.seen[id] = 1; api.save(); api.paint();
    var s = cfg.spots[id] || {}, n = ids.filter(function(i){ return st.seen[i]; }).length;
    api.say(strip(s.title) + '. ' + strip(s.text) + ' ' + n + ' of ' + ids.length + ' explored.');
    if(n === ids.length && !st.done) api.complete('All ' + ids.length + ' explored');
  };
  api.solve = function(){ ids.forEach(function(id){ api.q('[data-spot="' + id + '"]').click(); }); };
};

/* 2. sort, and 3. place (the same engine, drawn as a 2 by 2 chart) */
T.sort = T.place = function(api){
  var cfg = api.cfg, st = api.st, items = cfg.items, B = cfg.buckets, quad = cfg.type === 'place' || !!cfg.grid;
  st.placed = st.placed || {}; st.first = st.first || {};
  function cur(){ for(var i = 0; i < items.length; i++) if(st.placed[i] === undefined) return i; return -1; }
  /* a sorted item sits inside its bucket as a small card (a thumbnail when it has img); the same list is
     kept for screen readers below the button, so what they hear does not change */
  function bucket(b){
    var chips = items.map(function(it, i){ return st.placed[i] === b ? '<li class="' + (st.first[i] === b ? 'ok' : 'retry') + '">' + esc(it.short || strip(it.t)) + '</li>' : ''; }).join('');
    var cards = items.map(function(it, i){ return st.placed[i] === b ? '<span class="la-bkc' + (it.img ? ' img' : '') + (st.first[i] === b ? '' : ' retry') + '">' + (it.img ? '<img src="' + esc(it.img.src) + '" alt="" width="' + it.img.w + '" height="' + it.img.h + '" loading="lazy" decoding="async" />' : '') + '<span>' + esc(it.short || strip(it.t)) + '</span></span>' : ''; }).join('');
    var cnt = items.filter(function(it, i){ return st.placed[i] === b; }).length;
    return '<div class="la-bk" data-b="' + b + '"><button type="button" class="la-bkb" data-b="' + b + '" data-fk="b-' + b + '"' + (cur() < 0 ? ' disabled' : '') + '>' + (cfg.subs && cfg.subs[b] ? '<span class="la-bkt"><b>' + esc(B[b]) + '</b><small>' + cfg.subs[b] + '</small></span>' : '<b>' + esc(B[b]) + '</b>') + (cards ? '<span class="la-bkcards" aria-hidden="true">' + cards + '</span>' : '') + '<span class="la-n">' + cnt + '</span></button>' + (chips ? '<ul class="la-chips sr">' + chips + '</ul>' : '') + '</div>';
  }
  api.html = function(){
    var c = cur(), h = '<div class="la-sort' + (quad ? ' la-quad' : '') + '">';
    h += '<div class="la-stage">';
    if(c >= 0) h += '<div class="la-card" data-touchdrag data-drag="' + c + '"><span class="la-k">' + esc(cfg.noun ? cfg.noun.charAt(0).toUpperCase() + cfg.noun.slice(1) : 'Card') + ' ' + (c + 1) + ' of ' + items.length + '</span><p>' + items[c].t + '</p><span class="la-grip" aria-hidden="true">Drag to a ' + (quad ? 'box' : 'bucket') + ', or tap one below</span></div>';
    if(st.fb) h += '<p class="la-fb ' + (st.fb.ok ? 'ok' : 'no') + '">' + (st.fb.ok ? CHECK : CROSS) + '<span>' + st.fb.m + '</span></p>';
    h += '</div>';
    if(quad){
      var g = cfg.grid || { cells:[0, 1, 2, 3] };
      h += '<div class="la-axes"><span class="la-ay">' + esc(g.y || '') + ' <span aria-hidden="true">&#8593;</span></span><div class="la-grid4" role="group" aria-label="' + esc((g.y || '') + ' up, ' + (g.x || '') + ' across') + '">' + g.cells.map(bucket).join('') + '</div><span class="la-ax">' + esc(g.x || '') + ' <span aria-hidden="true">&#8594;</span></span></div>';
    } else h += '<div class="la-bks n' + B.length + '" role="group" aria-label="' + esc(cfg.groupLabel || 'Buckets') + '">' + B.map(function(_, b){ return bucket(b); }).join('') + '</div>';
    var right = items.filter(function(it, i){ return st.first[i] === it.a; }).length;
    return h + '</div>' + doneBar(api, right + ' of ' + items.length + ' right on the first try.');
  };
  function place(b){
    var c = cur(); if(c < 0) return; var it = items[c], ok = it.a === b;
    if(st.first[c] === undefined) st.first[c] = b;
    if(ok){ st.placed[c] = b; st.fb = { ok:1, m:'<b>Yes: ' + esc(B[b]) + '.</b> ' + (it.why || '') }; }
    else st.fb = { ok:0, m:'<b>Not ' + esc(B[b]) + '.</b> ' + (it.hint || 'Read it again and try another one.') };
    api.save(); api.paint(ok ? (cur() < 0 ? null : 'b-' + b) : 'b-' + b);
    api.say(strip(st.fb.m) + (ok && cur() >= 0 ? ' Next: ' + strip(items[cur()].t) : ''));
    if(cur() < 0 && !st.done){ var r = items.filter(function(x, i){ return st.first[i] === x.a; }).length; api.complete(r + ' of ' + items.length + ' right on the first try'); }
  }
  api.click = function(b){ if(b.hasAttribute('data-b')) place(+b.getAttribute('data-b')); };
  api.drag = function(){ draggable(api.root, '.la-card', '.la-bk', function(src, t){ place(+t.getAttribute('data-b')); }); };
  api.rows = function(){ return items.map(function(it, i){ return st.first[i] === undefined ? null : [strip(it.t), B[st.first[i]], B[it.a], st.first[i] === it.a]; }).filter(Boolean); };
  api.solve = function(){ var c; while((c = cur()) >= 0) api.q('button.la-bkb[data-b="' + items[c].a + '"]').click(); };
};

/* 4. order */
T.order = function(api){
  var cfg = api.cfg, st = api.st, items = cfg.items, n = items.length;
  if(!st.o){ st.o = (cfg.start || shuffle(n, api.key)).slice(); }
  var ends = cfg.ends || ['First', 'Last'];
  api.html = function(){
    var h = '<div class="la-order"><span class="la-end">' + esc(ends[0]) + '</span><ol class="la-ol">';
    st.o.forEach(function(ii, pos){
      var it = items[ii], mark = st.checked ? (ii === pos ? 'ok' : 'no') : '';
      h += '<li class="la-oi ' + mark + '" data-pos="' + pos + '"><span class="la-onum" aria-hidden="true">' + (mark === 'ok' ? CHECK : pos + 1) + '</span>' +
        '<span class="la-ot" data-touchdrag data-drag="' + pos + '">' + it.t + (st.done && it.why ? '<small>' + it.why + '</small>' : '') + '</span>' +
        (st.done ? '' : '<span class="la-mv"><button type="button" data-mv="-1" data-pos="' + pos + '" data-fk="u-' + ii + '" aria-label="Move up: ' + esc(strip(it.t)) + '"' + (pos === 0 ? ' disabled' : '') + '><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg></button>' +
        '<button type="button" data-mv="1" data-pos="' + pos + '" data-fk="d-' + ii + '" aria-label="Move down: ' + esc(strip(it.t)) + '"' + (pos === n - 1 ? ' disabled' : '') + '><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button></span>') + '</li>';
    });
    h += '</ol><span class="la-end">' + esc(ends[1]) + '</span>';
    if(st.fb) h += '<p class="la-fb ' + (st.done ? 'ok' : 'no') + '">' + (st.done ? CHECK : CROSS) + '<span>' + st.fb + '</span></p>';
    if(!st.done) h += '<button type="button" class="la-btn" data-check data-fk="check">Check my order</button>';
    return h + '</div>' + doneBar(api, st.tries === 1 ? 'Right on the first check.' : 'In order after ' + st.tries + ' checks.');
  };
  function move(pos, d){
    var to = pos + d; if(to < 0 || to >= n) return;
    var t = st.o[pos]; st.o[pos] = st.o[to]; st.o[to] = t; st.checked = false; st.fb = null; api.save();
    api.paint(); api.say(strip(items[t].t) + ' moved to position ' + (to + 1) + ' of ' + n + '.');
  }
  api.click = function(b){
    if(b.hasAttribute('data-mv')) return move(+b.getAttribute('data-pos'), +b.getAttribute('data-mv'));
    if(b.hasAttribute('data-check')){
      st.tries = (st.tries || 0) + 1; st.checked = true;
      var right = st.o.filter(function(ii, pos){ return ii === pos; }).length;
      if(right === n){ st.fb = '<b>That is the order.</b> ' + (cfg.why || ''); api.save(); api.complete(st.tries === 1 ? 'Right on the first check' : 'In order after ' + st.tries + ' checks'); api.say(strip(st.fb)); return; }
      st.fb = '<b>' + right + ' of ' + n + ' in the right place.</b> ' + (cfg.hint || 'The ones with a check are set. Move the others and check again.');
      api.save(); api.paint('check'); api.say(strip(st.fb));
    }
  };
  api.drag = function(){ draggable(api.root, '.la-ot', '.la-oi', function(src, t){
    var a = +src.getAttribute('data-drag'), b = +t.getAttribute('data-pos'); if(a === b) return;
    var it = st.o.splice(a, 1)[0]; st.o.splice(b, 0, it); st.checked = false; st.fb = null; api.save(); api.paint(); api.say(strip(items[it].t) + ' moved to position ' + (b + 1) + '.');
  }); };
  api.rows = function(){ return st.done ? [['Order', 'Placed in order' + (st.tries > 1 ? ' after ' + st.tries + ' checks' : ''), items.map(function(it){ return strip(it.t); }).join(' > '), st.tries === 1]] : []; };
  api.solve = function(){
    for(var target = 0; target < n; target++){
      var pos = st.o.indexOf(target);
      while(pos > target){ api.q('button[data-mv="-1"][data-pos="' + pos + '"]').click(); pos--; }
    }
    api.q('button[data-check]').click();
  };
};

/* 5. match */
T.match = function(api){
  var cfg = api.cfg, st = api.st, L = cfg.left, R = cfg.right, n = L.length, show = cfg.show || shuffle(n, api.key);
  st.m = st.m || {}; st.first = st.first || {};
  var heads = cfg.heads || ['', ''];
  api.html = function(){
    var sel = st.sel, h = '<div class="la-match"><div class="la-mcol"><span class="la-k">' + esc(heads[0]) + '</span>';
    h += L.map(function(it, i){ var m = st.m[i] !== undefined; return '<button type="button" class="la-ml' + (m ? ' ok' : '') + (sel === i ? ' sel' : '') + '" data-l="' + i + '" data-fk="l-' + i + '" aria-pressed="' + (sel === i) + '"' + (m ? ' aria-disabled="true"' : '') + '>' + (m ? '<span class="la-pair" aria-hidden="true">' + (i + 1) + '</span>' : '') + '<span>' + it.t + '</span>' + (m ? '<span class="sr">. Matched with ' + esc(strip(R[i].t)) + '.</span>' : '') + '</button>'; }).join('');
    h += '</div><div class="la-mcol r"><span class="la-k">' + esc(heads[1]) + '</span>';
    h += show.map(function(ri){ var by = -1; Object.keys(st.m).forEach(function(li){ if(+st.m[li] === ri) by = +li; }); return '<button type="button" class="la-mr' + (by > -1 ? ' ok' : '') + '" data-r="' + ri + '" data-fk="r-' + ri + '"' + (by > -1 ? ' aria-disabled="true"' : '') + '>' + (by > -1 ? '<span class="la-pair" aria-hidden="true">' + (by + 1) + '</span>' : '') + '<span>' + R[ri].t + '</span></button>'; }).join('');
    h += '</div></div>';
    if(st.fb) h += '<p class="la-fb ' + (st.fb.ok ? 'ok' : 'no') + '">' + (st.fb.ok ? CHECK : CROSS) + '<span>' + st.fb.m + '</span></p>';
    else if(!st.done) h += '<p class="la-fb hint"><span>Tap an item on the left, then its match on the right.</span></p>';
    var right = L.filter(function(_, i){ return st.first[i] === i; }).length;
    return h + doneBar(api, right + ' of ' + n + ' matched on the first try.');
  };
  function tryPair(li, ri){
    if(st.m[li] !== undefined) return;
    if(st.first[li] === undefined) st.first[li] = ri;
    st.sel = null;
    if(li === ri){ st.m[li] = ri; st.fb = { ok:1, m:'<b>Match.</b> ' + ((cfg.why || [])[li] || '') }; }
    else st.fb = { ok:0, m:'<b>Not a match.</b> ' + ((cfg.hint || [])[li] || 'Read both again, then try a different pair.') };
    api.save(); api.paint(li === ri ? null : 'l-' + li); api.say(strip(st.fb.m));
    if(Object.keys(st.m).length === n && !st.done){ var r = L.filter(function(_, i){ return st.first[i] === i; }).length; api.complete(r + ' of ' + n + ' matched on the first try'); }
    else if(li === ri){ var nx = L.map(function(_, i){ return i; }).filter(function(i){ return st.m[i] === undefined; })[0]; if(nx !== undefined) api.focus('l-' + nx); }
  }
  api.click = function(b){
    if(b.getAttribute('aria-disabled') === 'true') return;
    if(b.hasAttribute('data-l')){ var li = +b.getAttribute('data-l'); st.sel = st.sel === li ? null : li; st.fb = null; if(st.selR !== undefined && st.selR !== null && st.sel !== null){ var r = st.selR; st.selR = null; return tryPair(st.sel, r); } api.save(); api.paint(); api.say(st.sel === null ? 'Selection cleared.' : 'Selected: ' + strip(L[li].t) + '. Now choose its match on the right.'); return; }
    if(b.hasAttribute('data-r')){ var ri = +b.getAttribute('data-r'); if(st.sel === null || st.sel === undefined){ st.selR = ri; api.say('Now choose the item on the left that matches ' + strip(R[ri].t) + '.'); return; } tryPair(st.sel, ri); }
  };
  api.drag = function(){ draggable(api.root, '.la-ml:not(.ok)', '.la-mr:not(.ok)', function(src, t){ tryPair(+src.getAttribute('data-l'), +t.getAttribute('data-r')); }); };
  api.rows = function(){ return L.map(function(it, i){ return st.first[i] === undefined ? null : [strip(it.t), strip(R[st.first[i]].t), strip(R[i].t), st.first[i] === i]; }).filter(Boolean); };
  api.solve = function(){ st.selR = null; L.forEach(function(_, i){ if(st.m[i] !== undefined) return; if(st.sel !== i) api.q('[data-l="' + i + '"]').click(); api.q('[data-r="' + i + '"]').click(); }); };
};

/* 6. flip */
T.flip = function(api){
  var cfg = api.cfg, st = api.st, C = cfg.cards;
  st.seen = st.seen || {}; st.open = st.open || {};
  var just = null;
  api.html = function(){
    var h = '<div class="la-flipset' + (cfg.figure ? '' : ' nofig') + '">';
    if(cfg.figure){ var lit = C.map(function(c, i){ return st.open[i] ? c.hi : null; }).filter(Boolean); h += '<div class="la-ffig" data-lit="' + lit.join(' ') + '">' + cfg.figure + '</div>'; }
    h += '<div class="la-cards n' + C.length + '">' + C.map(function(c, i){ var o = !!st.open[i];
      return '<button type="button" class="la-flip' + (o ? ' open' : '') + (just === i ? ' just' : '') + (st.seen[i] ? ' seen' : '') + '" data-c="' + i + '" data-fk="c-' + i + '" aria-pressed="' + o + '"' + (c.hi ? ' data-hi="' + c.hi + '"' : '') + '>' +
        '<span class="la-in"><span class="la-face la-front"' + (o ? ' aria-hidden="true"' : '') + '>' + (c.icon || '') + '<b>' + c.front + '</b>' + (c.sub ? '<small>' + c.sub + '</small>' : '') + '<span class="la-turn" aria-hidden="true">Tap to turn</span></span>' +
        '<span class="la-face la-back"' + (o ? '' : ' aria-hidden="true"') + '><b class="la-bt">' + c.front + '</b>' + c.back + '</span></span>' +
        (st.seen[i] ? '<span class="la-seen" aria-hidden="true">' + CHECK + '</span>' : '') + '</button>'; }).join('') + '</div>';
    var n = Object.keys(st.seen).length;
    return h + (st.done ? doneBar(api, 'You turned all ' + C.length + '.') : '<p class="la-count">' + n + ' of ' + C.length + ' turned</p>') + '</div>';
  };
  api.click = function(b){
    var i = +b.getAttribute('data-c'); if(isNaN(i)) return;
    st.open[i] = !st.open[i]; st.seen[i] = 1; just = i;
    var n = Object.keys(st.seen).length;
    if(n === C.length && !st.done) api.complete('All ' + C.length + ' cards turned', 'c-' + i); else { api.save(); api.paint(); }
    just = null;
    api.say(st.open[i] ? strip(C[i].front) + '. ' + strip(C[i].back) + ' ' + n + ' of ' + C.length + ' turned.' : strip(C[i].front) + ', turned back.');
  };
  api.solve = function(){ C.forEach(function(_, i){ if(!st.seen[i]) api.q('[data-c="' + i + '"]').click(); }); };
};

/* 7. compare */
T.compare = function(api){
  var cfg = api.cfg, st = api.st, a = cfg.a, b = cfg.b;
  st.seen = st.seen || {};
  api.static = true;
  api.body.innerHTML = '<figure class="la-cmp"><div class="la-cframe" style="aspect-ratio:' + (cfg.w || 16) + ' / ' + (cfg.h || 9) + '">' +
    '<img class="la-ca" src="' + esc(a.src) + '" alt="' + esc(a.alt) + '" width="' + (cfg.w || '') + '" height="' + (cfg.h || '') + '" />' +
    '<img class="la-cb2" src="' + esc(b.src) + '" alt="' + esc(b.alt) + '" width="' + (cfg.w || '') + '" height="' + (cfg.h || '') + '" />' +
    '<span class="la-ctag a" aria-hidden="true">' + esc(a.label) + '</span><span class="la-ctag b" aria-hidden="true">' + esc(b.label) + '</span><span class="la-cline" aria-hidden="true"><i></i></span></div>' +
    '<div class="la-cctl"><button type="button" class="la-btn sm ghost" data-to="100" data-fk="ca">Show ' + esc(a.label) + '</button>' +
    '<input type="range" min="0" max="100" value="' + (cfg.start || 50) + '" aria-label="' + esc(cfg.label || 'Compare ' + a.label + ' and ' + b.label) + '" />' +
    '<button type="button" class="la-btn sm ghost" data-to="0" data-fk="cb">Show ' + esc(b.label) + '</button></div>' +
    (cfg.caption ? '<figcaption>' + cfg.caption + '</figcaption>' : '') + '<p class="la-count"></p></figure><div class="la-dslot"></div>';
  var fr = api.q('.la-cframe'), r = api.q('input[type=range]'), cnt = api.q('.la-count'), slot = api.q('.la-dslot');
  function paintSeen(){ cnt.textContent = (st.seen.a && st.seen.b) ? 'Both seen: ' + a.label + ' and ' + b.label + '.' : 'Seen so far: ' + ([st.seen.a ? a.label : '', st.seen.b ? b.label : ''].filter(Boolean).join(' and ') || 'neither, yet') + '.'; slot.innerHTML = doneBar(api, 'You compared ' + a.label + ' and ' + b.label + '.'); }
  function set(v, user){
    v = Math.max(0, Math.min(100, v)); fr.style.setProperty('--pos', v + '%'); r.value = v;
    r.setAttribute('aria-valuetext', v >= 95 ? a.label + ' only' : v <= 5 ? b.label + ' only' : a.label + ' on the left, ' + b.label + ' on the right, divided at ' + Math.round(v) + ' percent');
    if(!user) return;
    var was = st.seen.a && st.seen.b;
    if(v >= 90 && !st.seen.a){ st.seen.a = 1; api.save(); api.say('Showing ' + a.label + '. ' + (a.say || '')); }
    if(v <= 10 && !st.seen.b){ st.seen.b = 1; api.save(); api.say('Showing ' + b.label + '. ' + (b.say || '')); }
    paintSeen();
    if(!was && st.seen.a && st.seen.b && !st.done){ api.complete('Compared ' + a.label + ' and ' + b.label); paintSeen(); }
  }
  r.addEventListener('input', function(){ set(parseFloat(r.value), true); });
  api.click = function(btn){ if(btn.hasAttribute('data-to')) set(parseFloat(btn.getAttribute('data-to')), true); };
  var drag = false;
  function at(e){ var bx = fr.getBoundingClientRect(); set((e.clientX - bx.left) / bx.width * 100, true); }
  fr.addEventListener('pointerdown', function(e){ drag = true; try{ fr.setPointerCapture(e.pointerId); }catch(err){} at(e); });
  fr.addEventListener('pointermove', function(e){ if(drag) at(e); });
  fr.addEventListener('pointerup', function(){ drag = false; });
  fr.addEventListener('pointercancel', function(){ drag = false; });
  ['touchstart', 'touchend'].forEach(function(t){ fr.addEventListener(t, function(e){ e.stopPropagation(); }, { passive:true }); });
  set(cfg.start || 50, false); paintSeen();
  /* a short sweep the first time its page opens, so people see that it moves */
  var swept = false;
  document.addEventListener('chart:page', function(){ if(swept || reduce || !api.root.closest('.page.cur')) return; swept = true; var t0 = null; function sw(ts){ if(t0 === null) t0 = ts; var k = (ts - t0) / 1400; if(k >= 1){ set(50, false); return; } set(50 + Math.sin(k * Math.PI * 2) * 18, false); requestAnimationFrame(sw); } setTimeout(function(){ requestAnimationFrame(sw); }, 600); });
  api.solve = function(){ api.q('[data-to="100"]').click(); api.q('[data-to="0"]').click(); };
};

/* 8. predict */
T.predict = function(api){
  var cfg = api.cfg, st = api.st, R = cfg.rounds;
  st.g = st.g || {}; st.shown = st.shown || {}; st.r = st.r || 0;
  var just = false, justRun = false;
  function fmt(rd, v){ var t = Number(v).toFixed(rd.dec || 0); if(Math.abs(v) >= 1000) t = Number(t).toLocaleString('en-US', { minimumFractionDigits:rd.dec || 0, maximumFractionDigits:rd.dec || 0 }); return (rd.pre || '') + t + (rd.post || ''); }
  function close(rd, i){ return Math.abs(st.g[i] - rd.answer) <= (rd.close || 0); }
  api.html = function(){
    var i = st.r, rd = R[i], c = CH[rd.chart] || { bars:[], title:'' }, shown = !!st.shown[i];
    var g = st.g[i] !== undefined ? st.g[i] : (rd.start !== undefined ? rd.start : (rd.min + rd.max) / 2);
    var h = '<div class="la-pred"><div class="la-pq"><span class="la-k">Number ' + (i + 1) + ' of ' + R.length + ' &middot; ' + esc(rd.title || c.title) + '</span><p class="la-pqt">' + rd.q + '</p>';
    if(!shown){
      h += '<div class="la-slider"><output class="la-out" aria-hidden="true">' + fmt(rd, g) + '</output>' +
        '<input type="range" min="' + rd.min + '" max="' + rd.max + '" step="' + (rd.step || 1) + '" value="' + g + '" data-fk="range-' + i + '" aria-label="Your estimate: ' + esc(strip(rd.q)) + '" aria-valuetext="' + esc(fmt(rd, g)) + '" />' +
        '<span class="la-rl" aria-hidden="true"><span>' + fmt(rd, rd.min) + '</span><span>' + fmt(rd, rd.max) + '</span></span></div>' +
        '<button type="button" class="la-btn" data-lock data-fk="lock-' + i + '">Lock in my guess</button>';
    } else {
      var gg = st.g[i];
      h += '<div class="la-verdict" tabindex="-1" data-fk="v-' + i + '"><p class="la-big"><span class="la-real" data-fin="' + esc(fmt(rd, rd.answer)) + '">' + (just ? fmt(rd, 0) : fmt(rd, rd.answer)) + '</span></p>' +
        '<p class="la-you">' + (close(rd, i) ? CHECK + '<b>Close.</b> ' : '') + 'You guessed ' + fmt(rd, gg) + '.</p><p class="la-x">' + rd.x + '</p></div>';
      h += i < R.length - 1 ? '<button type="button" class="la-btn" data-next data-fk="next-' + i + '">Next number</button>' : '';
    }
    h += '</div><div class="la-pchart' + (shown && just ? ' grow' : '') + '">' + chartFig(c, { w:420, h:300, tall:1.25, guess:g, hide:!shown, reveal:shown, max:Math.max(c.max, rd.chartMax || 0), guessLab:'Your guess', nofoot:!shown, nosub:!shown }) +
      (shown ? '' : '<button type="button" class="la-btn sm ghost la-replay" data-replay data-fk="replay-' + i + '"><svg viewBox="0 0 24 24" aria-hidden="true" class="la-ic"><path d="M7 4.5v15l12-7.5z" fill="currentColor"/></svg>Play the chart</button>') + '</div>';
    h += '<ol class="la-pdots" aria-hidden="true">' + R.map(function(_, k){ return '<li class="' + (st.shown[k] ? 'seen' : '') + (k === i ? ' cur' : '') + '"></li>'; }).join('') + '</ol></div>';
    var n = Object.keys(st.shown).length, cl = R.filter(function(rr, k){ return st.shown[k] && close(rr, k); }).length;
    return h + doneBar(api, 'You predicted all ' + R.length + '; ' + cl + ' ' + (cl === 1 ? 'was' : 'were') + ' close.');
  };
  api.after = function(){
    var i = st.r, rd = R[i], r = api.q('input[type=range]'); if(!r) { var re = api.q('.la-real'); if(re && justRun){ justRun = false; countUp(re, re.getAttribute('data-fin')); } return; }
    var out = api.q('.la-out'), c = CH[rd.chart];
    r.addEventListener('input', function(){
      var v = parseFloat(r.value); st.g[i] = v; out.textContent = fmt(rd, v); r.setAttribute('aria-valuetext', fmt(rd, v));
      /* move the dashed guess bar live */
      var svg = api.q('.la-pchart svg'); if(!svg || !c) return; var tmp = document.createElement('div'); tmp.innerHTML = chartSVG(c, { w:420, h:300, tall:1.25, guess:v, hide:true, max:Math.max(c.max, rd.chartMax || 0) });
      var ng = tmp.querySelector('.la-guess'), og = svg.querySelector('.la-guess'); if(ng && og) og.parentNode.replaceChild(ng, og);
    });
    r.addEventListener('change', function(){ api.save(); });
  };
  /* the known bars or points draw in one by one: when the page opens, and on Play the chart */
  function drawIn(){ var c = api.q('.la-pchart'); if(!c || reduce) return; c.classList.remove('la-drawin'); void c.offsetWidth; c.classList.add('la-drawin'); }
  api.drawIn = drawIn;
  api.click = function(b){
    var i = st.r, rd = R[i];
    if(b.hasAttribute('data-replay')){ drawIn(); api.say('The chart draws in again: ' + strip((CH[rd.chart] || {}).title || '') + '.'); return; }
    if(b.hasAttribute('data-lock')){
      if(st.g[i] === undefined){ var r = api.q('input[type=range]'); st.g[i] = parseFloat(r.value); }
      st.shown[i] = 1; just = true; justRun = true;
      if(Object.keys(st.shown).length === R.length && !st.done){ var cl = R.filter(function(rr, k){ return close(rr, k); }).length; api.complete(R.length + ' of ' + R.length + ' predicted, ' + cl + ' close', 'v-' + i); }
      else { api.save(); api.paint('v-' + i); }
      just = false;
      api.say('You guessed ' + fmt(rd, st.g[i]) + '. The real figure: ' + fmt(rd, rd.answer) + '. ' + strip(rd.x));
      return;
    }
    if(b.hasAttribute('data-next')){ st.r = Math.min(R.length - 1, i + 1); api.save(); api.paint('range-' + st.r); drawIn(); api.say('Number ' + (st.r + 1) + ' of ' + R.length + '. ' + strip(R[st.r].q)); }
  };
  api.rows = function(){ return R.map(function(rd, k){ return st.shown[k] ? [strip(rd.q), fmt(rd, st.g[k]), fmt(rd, rd.answer), close(rd, k)] : null; }).filter(Boolean); };
  api.solve = function(){ R.forEach(function(_, k){ if(!st.shown[st.r]) api.q('button[data-lock]').click(); var nx = api.q('button[data-next]'); if(nx) nx.click(); }); if(!st.shown[st.r]) api.q('button[data-lock]').click(); };
};

/* 9. branch */
T.branch = function(api){
  var cfg = api.cfg, st = api.st, N = cfg.nodes;
  if(!st.cur){ st.cur = cfg.start; st.path = []; }
  function depth(){ return st.path.length + 1; }
  api.html = function(){
    var nd = N[st.cur], h = '<div class="la-branch">';
    h += '<ol class="la-trail" aria-label="Your path">' + st.path.map(function(p, k){ return '<li><span class="la-k">Decision ' + (k + 1) + '</span>' + strip(N[p.n].opts[p.o].t) + '</li>'; }).join('') + '</ol>';
    if(nd.end){
      h += '<div class="la-end-card" tabindex="-1" data-fk="end"><span class="la-k">' + esc(cfg.label || 'Outcome') + '</span><b class="la-pt">' + nd.h + '</b><p>' + nd.t + '</p>' + (nd.debrief ? '<p class="la-debrief"><b>Debrief.</b> ' + nd.debrief + '</p>' : '') +
        '<button type="button" class="la-btn ghost" data-restart data-fk="restart">Try another path</button></div>';
    } else {
      h += '<div class="la-node"><span class="la-k">' + (cfg.label ? esc(cfg.label) + ' &middot; ' : '') + 'Decision ' + depth() + '</span><p class="la-pqt">' + nd.t + '</p>';
      if(st.pend !== undefined && st.pend !== null){
        var o = nd.opts[st.pend];
        h += '<p class="la-chose">You chose: ' + o.t + '</p><div class="la-fb conseq" tabindex="-1" data-fk="out"><span><b>What happens.</b> ' + o.out + '</span></div><button type="button" class="la-btn" data-go data-fk="go">' + (N[o.next] && N[o.next].end ? 'See the outcome' : 'Continue') + '</button>';
      } else h += '<div class="la-opts" role="group" aria-label="Your choices">' + nd.opts.map(function(o, k){ return '<button type="button" class="la-opt" data-o="' + k + '" data-fk="o-' + k + '"><span class="la-ok" aria-hidden="true">' + String.fromCharCode(65 + k) + '</span><span>' + o.t + '</span></button>'; }).join('') + '</div>';
      h += '</div>';
    }
    return h + '</div>' + doneBar(api, 'You reached an outcome. Try another path to see how the choices change it.');
  };
  api.click = function(b){
    var nd = N[st.cur];
    if(b.hasAttribute('data-o')){ st.pend = +b.getAttribute('data-o'); api.save(); api.paint('out'); api.say('What happens: ' + strip(nd.opts[st.pend].out)); return; }
    if(b.hasAttribute('data-go')){
      st.path.push({ n:st.cur, o:st.pend }); st.cur = nd.opts[st.pend].next; st.pend = null; api.save();
      var nx = N[st.cur];
      if(nx.end){ st.ends = st.ends || {}; st.ends[st.cur] = 1; st.lastEnd = st.cur; api.save(); api.paint('end'); api.say(strip(nx.h) + '. ' + strip(nx.t) + ' ' + strip(nx.debrief || '')); if(!st.done) api.complete('Reached: ' + strip(nx.h)); else P.set('r-' + api.prog, 'Reached: ' + strip(nx.h)); }
      else { api.paint('o-0'); api.say('Decision ' + depth() + '. ' + strip(nx.t)); }
      return;
    }
    if(b.hasAttribute('data-restart')){ st.cur = cfg.start; st.path = []; st.pend = null; api.save(); api.paint('o-0'); api.say('Back to the start. ' + strip(N[st.cur].t)); }
  };
  api.rows = function(){ var e = st.lastEnd && N[st.lastEnd]; return e ? [['Path', st.path.map(function(p){ return strip(N[p.n].opts[p.o].t); }).join(' > '), strip(e.h), true]] : []; };
  api.solve = function(){ var guard = 0; while(!N[st.cur].end && guard++ < 20){ if(st.pend === null || st.pend === undefined) api.q('button[data-o="0"]').click(); api.q('button[data-go]').click(); } };
};

/* 10. rate */
T.rate = function(api){
  var cfg = api.cfg, st = api.st, Dm = cfg.dims, Lv = cfg.levels || ['Not yet', 'Partly', 'Strongly'], n = Dm.length;
  st.v = st.v || {};
  var cx = 130, cy = 120, Rr = 86;
  function pt(i, f){ var a = -Math.PI / 2 + i * 2 * Math.PI / n; return (cx + Math.cos(a) * Rr * f).toFixed(1) + ',' + (cy + Math.sin(a) * Rr * f).toFixed(1); }
  function lab(i){ var a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + Math.cos(a) * (Rr + 14), y = cy + Math.sin(a) * (Rr + 14) + 4, side = Math.abs(Math.cos(a)) >= .2;
    /* a long label on a side axis breaks onto two lines, so the radar keeps its size in a narrow column */
    var w = String(Dm[i]).split(' '), t = esc(Dm[i]);
    if(side && w.length > 1 && Dm[i].length > 10){ var m = Math.ceil(w.length / 2); t = '<tspan x="' + x.toFixed(1) + '" dy="-.5em">' + esc(w.slice(0, m).join(' ')) + '</tspan><tspan x="' + x.toFixed(1) + '" dy="1.15em">' + esc(w.slice(m).join(' ')) + '</tspan>'; }
    return '<text x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" text-anchor="' + (!side ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end') + '" class="la-rlab">' + t + '</text>'; }
  /* one line per level, shown once above the rows (the owner: explain the choices) */
  var hints = cfg.levelHints || (Lv.join('|') === 'Not yet|Partly|Strongly' ? ['we rarely do this.', 'sometimes, or only some of us.', 'it is how we work, even under pressure.'] : null);
  api.html = function(){
    var rings = [1, 2, 3].map(function(k){ return '<polygon class="la-ring" points="' + Dm.map(function(_, i){ return pt(i, k / 3); }).join(' ') + '"/>'; }).join('');
    var axes = Dm.map(function(_, i){ return '<line class="la-rax" x1="' + cx + '" y1="' + cy + '" x2="' + pt(i, 1).split(',')[0] + '" y2="' + pt(i, 1).split(',')[1] + '"/>'; }).join('');
    var shape = '<polygon class="la-shape" points="' + Dm.map(function(_, i){ var v = st.v[i]; return pt(i, v === undefined ? 0.05 : (v + 1) / Lv.length); }).join(' ') + '"/>';
    var h = '<div class="la-rate' + (n > 4 ? ' many' : '') + '"><svg viewBox="0 0 260 240" class="la-rsvg" role="img" aria-label="' + esc((cfg.title || 'Your team') + ': ' + Dm.map(function(d, i){ return d + ' ' + (st.v[i] === undefined ? 'not rated' : Lv[st.v[i]]); }).join(', ')) + '">' + rings + axes + shape + Dm.map(function(_, i){ return lab(i); }).join('') + '</svg>';
    /* the legend sits at the top of the rows; with more than four rows it moves under the radar, so every row still fits */
    var legend = hints ? '<p class="la-rlegend">' + Lv.map(function(l, li){ return '<span><b>' + esc(l) + ':</b> ' + esc(hints[li] || '') + '</span>'; }).join(' ') + '</p>' : '';
    if(n > 4) h += legend;
    h += '<div class="la-rqs">' + (n > 4 ? '' : legend) +
      Dm.map(function(d, i){ return '<div class="la-rq" role="group" aria-label="' + esc(d) + '"><span class="la-rqn">' + esc(d) + '</span><div class="la-chips2">' + Lv.map(function(l, li){ return '<button type="button" data-d="' + i + '" data-l="' + li + '" data-fk="r-' + i + '-' + li + '" aria-pressed="' + (st.v[i] === li) + '">' + esc(l) + '</button>'; }).join('') + '</div>' + (cfg.eg && cfg.eg[i] ? '<span class="la-rqe"><b>Looks like:</b> ' + cfg.eg[i] + '</span>' : '') + '</div>'; }).join('');
    /* the read-out sits inside the grid, under the radar on wide screens; once every row is rated it is also the completion bar */
    var full = Object.keys(st.v).length === n;
    h += '</div>' + (full && st.done ? '<div class="la-donebar la-rread">' + CHECK + '<span><b>Complete.</b> ' + read(true) + '</span></div>' : '<p class="la-fb hint"><span>' + read(true) + '</span></p>') + '</div>';
    return h;
  };
  function weakest(){ var low = Math.min.apply(null, Dm.map(function(_, i){ return st.v[i]; })); return { low:low, idx:Dm.map(function(_, i){ return i; }).filter(function(i){ return st.v[i] === low; }) }; }
  function read(html){
    var k = Object.keys(st.v).length; if(k < n) return k ? (n - k) + ' to go. Watch the shape fill in.' : 'Rate your team on each one. The shape draws as you go.';
    var w = weakest(), names = w.idx.map(function(i){ return Dm[i]; }), t;
    if(w.low === Lv.length - 1) return (cfg.high || 'Every side reaches the outer ring.') + (cfg.keep ? (html ? ' <b class="la-rtry">To keep it there:</b> ' : ' To keep it there: ') + cfg.keep : '');
    t = (cfg.low || 'Your thinnest side: {dims}.').replace('{dims}', names.length > 2 ? names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1] : names.join(' and '));
    if(!cfg.act) return t;
    /* one practical move for each thin side, two at most so the read-out fits beside the rows */
    var acts = w.idx.slice(0, 2).filter(function(i){ return cfg.act[i]; });
    if(!acts.length) return t;
    if(!html) return t + ' Try this with your team. ' + acts.map(function(i){ return Dm[i] + ': ' + strip(cfg.act[i]); }).join(' ') + (w.idx.length > 2 ? ' Start with these two.' : '');
    return t + '<b class="la-rtry">Try this with your team' + (w.idx.length > 2 ? ', starting with two' : '') + ':</b><ul class="la-racts">' + acts.map(function(i){ return '<li><b>' + esc(Dm[i]) + '.</b> ' + cfg.act[i] + '</li>'; }).join('') + '</ul>';
  }
  api.click = function(b){
    if(!b.hasAttribute('data-d')) return;
    st.v[b.getAttribute('data-d')] = +b.getAttribute('data-l');
    var k = Object.keys(st.v).length, sum = Dm.map(function(d, i){ return d + ' ' + Lv[st.v[i]]; }).join(', ');
    if(k === n){ if(!st.done) api.complete(sum); else { P.set('r-' + api.prog, sum); api.save(); api.paint(); } } else { api.save(); api.paint(); }
    api.say(Dm[+b.getAttribute('data-d')] + ': ' + Lv[+b.getAttribute('data-l')] + '. ' + read(false));
  };
  api.rows = function(){ return Dm.map(function(d, i){ return st.v[i] === undefined ? null : [d, Lv[st.v[i]], '', false]; }).filter(Boolean); };
  api.solve = function(){ Dm.forEach(function(_, i){ api.q('button[data-d="' + i + '"][data-l="' + (i % Lv.length) + '"]').click(); }); };
};

/* 11. build */
T.build = function(api){
  var cfg = api.cfg, st = api.st, S = cfg.slots;
  st.p = st.p || {};
  function sentence(blank){ return cfg.tpl.replace(/\{(\d+)\}/g, function(_, k){ var v = st.p[k]; return v === undefined ? (blank ? '<span class="la-blank">' + esc(S[k].label) + '</span>' : '___') : (blank ? '<b>' + esc(S[k].opts[v]) + '</b>' : S[k].opts[v]); }); }
  api.html = function(){
    var h = '<div class="la-build"><p class="la-sent" aria-hidden="true">' + sentence(true) + '</p>';
    h += S.map(function(s, k){ return '<div class="la-slot" role="group" aria-label="' + esc(s.label) + '"><span class="la-k">' + (k + 1) + '. ' + esc(s.label) + '</span><div class="la-chips2">' + s.opts.map(function(o, oi){ return '<button type="button" data-s="' + k + '" data-v="' + oi + '" data-fk="p-' + k + '-' + oi + '" aria-pressed="' + (st.p[k] === oi) + '">' + esc(o) + '</button>'; }).join('') + '</div></div>'; }).join('');
    return h + '</div>' + doneBar(api, cfg.doneText || 'Your statement is saved. It prints on your takeaway.');
  };
  api.click = function(b){
    if(!b.hasAttribute('data-s')) return;
    st.p[b.getAttribute('data-s')] = +b.getAttribute('data-v'); api.save(); api.paint();
    var full = S.every(function(_, k){ return st.p[k] !== undefined; });
    api.say(full ? 'Your statement: ' + sentence(false) : S[+b.getAttribute('data-s')].opts[+b.getAttribute('data-v')] + ' chosen. ' + S.filter(function(_, k){ return st.p[k] === undefined; }).length + ' to go.');
    if(full){ if(!st.done) api.complete(sentence(false)); else P.set('r-' + api.prog, sentence(false)); }
  };
  api.rows = function(){ return []; };
  api.solve = function(){ S.forEach(function(_, k){ api.q('button[data-s="' + k + '"][data-v="0"]').click(); }); };
};

/* 12. spot */
T.spot = function(api){
  var cfg = api.cfg, st = api.st, I = cfg.items, Lb = cfg.labels || ['True', 'False'];
  st.a = st.a || {}; st.i = st.i || 0;
  api.html = function(){
    var i = st.i, it = I[i], ans = st.a[i], h = '<div class="la-spotit"><ol class="la-pdots" aria-hidden="true">' + I.map(function(x, k){ return '<li class="' + (st.a[k] !== undefined ? (st.a[k] === x.a ? 'seen' : 'miss') : '') + (k === i ? ' cur' : '') + '"></li>'; }).join('') + '</ol>';
    h += '<div class="la-scard"><span class="la-k">' + (i + 1) + ' of ' + I.length + '</span><p class="la-pqt">' + it.t + '</p>';
    if(ans === undefined) h += '<div class="la-opts two" role="group" aria-label="Your call">' + Lb.map(function(l, k){ return '<button type="button" class="la-opt" data-a="' + k + '" data-fk="a-' + k + '"><span>' + esc(l) + '</span></button>'; }).join('') + '</div>';
    else h += '<div class="la-fb ' + (ans === it.a ? 'ok' : 'no') + '" tabindex="-1" data-fk="fb-' + i + '">' + (ans === it.a ? CHECK : CROSS) + '<span><b>' + (ans === it.a ? 'Right: ' : 'Not quite. It is ') + esc(Lb[it.a]) + '.</b> ' + it.why + '</span></div>' +
      (i < I.length - 1 ? '<button type="button" class="la-btn" data-next data-fk="next">Next</button>' : '');
    h += '</div></div>';
    var r = I.filter(function(x, k){ return st.a[k] === x.a; }).length;
    return h + doneBar(api, r + ' of ' + I.length + ' right.');
  };
  api.click = function(b){
    var i = st.i;
    if(b.hasAttribute('data-a')){ st.a[i] = +b.getAttribute('data-a'); api.save(); api.paint('fb-' + i);
      var ok = st.a[i] === I[i].a; api.say((ok ? 'Right: ' : 'Not quite. It is ') + Lb[I[i].a] + '. ' + strip(I[i].why));
      if(Object.keys(st.a).length === I.length && !st.done){ var r = I.filter(function(x, k){ return st.a[k] === x.a; }).length; api.complete(r + ' of ' + I.length + ' right'); }
      return; }
    if(b.hasAttribute('data-next')){ st.i = Math.min(I.length - 1, i + 1); api.save(); api.paint('a-0'); api.say((st.i + 1) + ' of ' + I.length + '. ' + strip(I[st.i].t)); }
  };
  api.rows = function(){ return I.map(function(it, k){ return st.a[k] === undefined ? null : [strip(it.t), Lb[st.a[k]], Lb[it.a], st.a[k] === it.a]; }).filter(Boolean); };
  api.solve = function(){ I.forEach(function(it, k){ if(st.a[st.i] === undefined) api.q('button[data-a="' + I[st.i].a + '"]').click(); var nx = api.q('button[data-next]'); if(nx) nx.click(); }); };
};

/* display helper: a set of the deck's charts, drawn in when the page opens */
T.chartset = function(api){
  api.static = true; api.untracked = true;
  api.body.innerHTML = '<div class="la-cset n' + api.cfg.charts.length + '">' + api.cfg.charts.map(function(k){ var c = CH[k]; return c ? chartFig(c, { small:true, w:300, h:190, nofoot:true }) : ''; }).join('') + '</div>';
  function grow(){ if(reduce || !api.root.closest('.page.cur')) return; var s = api.q('.la-cset'); s.classList.remove('grow'); void s.offsetWidth; s.classList.add('grow'); }
  document.addEventListener('chart:page', function(){ setTimeout(grow, 60); });
  api.solve = function(){};
};

/* 13. scrub (added for Course One): stages of a deck graphic on a slider; the marker can be dragged on the chart */
T.scrub = function(api){
  var cfg = api.cfg, st = api.st, S = cfg.steps, n = S.length;
  st.seen = st.seen || {}; if(st.at === undefined) st.at = 0;
  api.static = true;
  var vb = (String(cfg.figure).match(/viewBox="([\d.\-]+) [\d.\-]+ ([\d.]+) ([\d.]+)"/) || [0, 0, 16, 9]).slice(1), pid = 'la-' + api.key + '-sp';
  api.body.innerHTML = '<div class="la-scrub"><div class="la-fig"><div class="la-figbox" style="--rw:' + vb[1] + ';--rh:' + vb[2] + '">' + cfg.figure + '</div></div>' +
    '<div class="la-sctl"><button type="button" class="la-btn sm ghost" data-sb="-1" data-fk="sb-prev">Back</button>' +
    '<input type="range" min="0" max="' + (n - 1) + '" step="1" value="' + st.at + '" aria-label="' + esc(cfg.label || 'Move through the stages') + '" aria-controls="' + pid + '" />' +
    '<button type="button" class="la-btn sm" data-sb="1" data-fk="sb-next">Next</button></div>' +
    '<div class="la-panel" id="' + pid + '" tabindex="-1"></div><p class="la-count"></p></div><div class="la-dslot"></div>';
  var r = api.q('input[type=range]'), panel = api.q('.la-panel'), cnt = api.q('.la-count'), slot = api.q('.la-dslot'), box = api.q('.la-figbox');
  function seenN(){ return S.filter(function(_, i){ return st.seen[i]; }).length; }
  function paintDone(){ cnt.textContent = st.done ? '' : seenN() + ' of ' + n + ' stages seen'; cnt.hidden = !!st.done; slot.innerHTML = doneBar(api, 'You moved through all ' + n + ' stages.'); }
  api.after = paintDone;
  function show(at, user){
    at = Math.max(0, Math.min(n - 1, at)); var from = st.at; st.at = at;
    if(user){ for(var i = Math.min(from, at); i <= Math.max(from, at); i++) st.seen[i] = 1; }
    $$('[data-from], [data-until]', box).forEach(function(e){ var f = e.getAttribute('data-from'), u = e.getAttribute('data-until'); e.classList.toggle('la-off', (f !== null && at < +f) || (u !== null && at > +u)); });
    if(S[at].cx !== undefined || S[at].cy !== undefined) $$('[data-cursor]', box).forEach(function(e){ e.style.transform = 'translate(' + (S[at].cx || 0) + 'px, ' + (S[at].cy || 0) + 'px)'; });
    box.setAttribute('data-at', at);
    r.value = at; r.setAttribute('aria-valuetext', 'Stage ' + (at + 1) + ' of ' + n + ': ' + strip(S[at].label));
    api.q('[data-sb="-1"]').disabled = at === 0; api.q('[data-sb="1"]').disabled = at === n - 1;
    panel.innerHTML = '<span class="la-k">Stage ' + (at + 1) + ' of ' + n + '</span><b class="la-pt">' + S[at].label + '</b><p>' + S[at].t + '</p>';
    paintDone();
    if(!user) return;
    api.save(); api.say(strip(S[at].label) + '. ' + strip(S[at].t));
    if(seenN() === n && !st.done) api.complete('All ' + n + ' stages seen');
  }
  r.addEventListener('input', function(){ show(parseInt(r.value, 10), true); });
  /* the marker can also be dragged, or tapped into place, right on the chart (stages with cx) */
  if(S.some(function(s){ return s.cx !== undefined; })){
    box.classList.add('la-drag');
    var near = function(e){ var bx = box.getBoundingClientRect(), x = +vb[0] + (e.clientX - bx.left) / bx.width * +vb[1], best = 0, d = Infinity; S.forEach(function(s, i){ if(s.cx !== undefined && Math.abs(s.cx - x) < d){ d = Math.abs(s.cx - x); best = i; } }); return best; };
    var dragging = false;
    box.addEventListener('pointerdown', function(e){ dragging = true; try{ box.setPointerCapture(e.pointerId); }catch(err){} var k = near(e); if(k !== st.at) show(k, true); });
    box.addEventListener('pointermove', function(e){ if(!dragging) return; var k = near(e); if(k !== st.at) show(k, true); });
    box.addEventListener('pointerup', function(){ dragging = false; }); box.addEventListener('pointercancel', function(){ dragging = false; });
    ['touchstart', 'touchend'].forEach(function(t){ box.addEventListener(t, function(e){ e.stopPropagation(); }, { passive:true }); });
  }
  api.click = function(b){ if(b.hasAttribute('data-sb')){ show(st.at + parseInt(b.getAttribute('data-sb'), 10), true); if(b.disabled) try{ panel.focus({ preventScroll:true }); }catch(e){} } };
  show(st.at, false);
  api.rows = function(){ return []; };
  api.solve = function(){ var g = 0; if(st.at === n - 1) show(0, false); while(st.at < n - 1 && g++ < 50) api.q('[data-sb="1"]').click(); };
};

/* ── added for Course Two (version 3): the deck's line charts, for predict and chartset ──
   CHARTS entry: { type:'line', title, sub, fmt, max, step, axis, cats:['FY19', ...], w, h (optional drawing size),
     series:[ { name:'Overall Turnover', vals:[18.9, ...], labs:['18.9%', ...], color:'#B3C9CD', pos:'below' } ],
     hide:1 (the series a predict round hides the last point of; default the last series),
     arrow:{ from:4, to:9, label:'43% CAGR' } (optional, drawn under the line) } */
function lineSVG(c, o){
  var W = c.w || o.w || 560, H = Math.round((c.h || o.h || 300) * (o.tall || 1)), S = c.series, n = c.cats.length, hs = c.hide === undefined ? S.length - 1 : c.hide;
  var L = o.small ? 40 : 52, R = (o.guess !== undefined && o.guess !== null) ? 76 : 16, T = 24, B = 30 + (S.length > 1 ? 20 : 0) + (c.arrow ? 26 : 0);
  var max = o.max || c.max, bw = W - L - R, bh = H - T - B, slot = bw / n;
  var X = function(k){ return L + slot * (k + .5); }, Y = function(v){ return T + bh - Math.max(0, Math.min(v, max)) / max * bh; };
  var out = '', g;
  for(g = c.step; g <= max + 1e-9; g += c.step) out += '<line x1="' + L + '" x2="' + (L + bw) + '" y1="' + Y(g) + '" y2="' + Y(g) + '" class="la-cg"/><text x="' + (L - 6) + '" y="' + (Y(g) + 4) + '" text-anchor="end" class="la-ct">' + esc(tick(c, g)) + '</text>';
  out += '<line x1="' + L + '" x2="' + (L + bw) + '" y1="' + Y(0) + '" y2="' + Y(0) + '" class="la-cb"/>';
  if(o.hide) out += '<rect x="' + (X(n - 1) - 16) + '" y="' + (T + 4) + '" width="32" height="' + (Y(0) - T - 4) + '" class="la-q"/><text x="' + X(n - 1) + '" y="' + (T + bh / 2 + 12) + '" text-anchor="middle" class="la-qt">?</text>';
  S.forEach(function(s, si){
    var col = s.color || (si === hs ? '#CFAE70' : '#B3C9CD'), last = n - 1, hid = o.hide && si === hs;
    var pts = s.vals.map(function(v, k){ return [X(k), Y(v)]; }), shown = hid ? pts.slice(0, last) : pts;
    var d = function(a){ return a.map(function(p, k){ return (k ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' '); };
    var revealLast = o.reveal && si === hs;
    out += '<path d="' + d(revealLast ? pts.slice(0, last) : shown) + '" fill="none" stroke="' + col + '" stroke-width="2.5" stroke-linejoin="round" pathLength="1" class="la-dline" style="--n:' + shown.length + '"/>';
    if(revealLast) out += '<path d="' + d(pts.slice(last - 1)) + '" fill="none" stroke="' + col + '" stroke-width="2.5" class="la-newv"/>';
    shown.forEach(function(p, k){
      var nv = (revealLast && k === last ? ' la-newv' : '') + ' la-di';
      out += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5" fill="' + col + '" class="' + nv + '" style="--i:' + k + '"/>';
      out += '<text x="' + p[0].toFixed(1) + '" y="' + (s.pos === 'below' ? p[1] + 16 : p[1] - 8).toFixed(1) + '" text-anchor="middle" class="la-ct' + nv + '" style="--i:' + k + ';fill:' + col + ';font-size:11px;font-weight:600">' + esc(s.labs ? s.labs[k] : s.vals[k]) + '</text>';
    });
  });
  c.cats.forEach(function(x, k){ out += '<text x="' + X(k) + '" y="' + (T + bh + 18) + '" text-anchor="middle" class="la-ct">' + esc(x) + '</text>'; });
  if(c.arrow){ var ay = T + bh + 34, x1 = X(c.arrow.from), x2 = X(c.arrow.to);
    out += '<path d="M' + x1 + ' ' + ay + ' H' + (x2 - 8) + '" stroke="#CFAE70" stroke-width="10"/><path d="M' + (x2 - 10) + ' ' + (ay - 10) + ' L' + (x2 + 4) + ' ' + ay + ' L' + (x2 - 10) + ' ' + (ay + 10) + ' Z" fill="#CFAE70"/><text x="' + ((x1 + x2) / 2) + '" y="' + (ay + 4) + '" text-anchor="middle" class="la-ct" style="fill:#1C1C1C;font-weight:700;font-size:10px">' + esc(c.arrow.label) + '</text>'; }
  if(S.length > 1) out += S.map(function(s, si){ var lx = L + bw / 2 - 110 + si * 120, col = s.color || (si === hs ? '#CFAE70' : '#B3C9CD'); return '<line x1="' + lx + '" x2="' + (lx + 14) + '" y1="' + (H - 7) + '" y2="' + (H - 7) + '" stroke="' + col + '" stroke-width="3"/><text x="' + (lx + 18) + '" y="' + (H - 3) + '" class="la-ct">' + esc(s.name) + '</text>'; }).join('');
  if(o.guess !== undefined && o.guess !== null){ var gy = Y(o.guess), gx = X(n - 1);
    out += '<g class="la-guess"><line x1="' + (gx - 18) + '" x2="' + (gx + 18) + '" y1="' + gy + '" y2="' + gy + '" class="la-gl" stroke-dasharray="4 3"/><circle cx="' + gx + '" cy="' + gy + '" r="4" fill="#ECB748"/><text x="' + (gx + 22) + '" y="' + (gy + 4) + '" class="la-gt">' + (o.guessLab ? esc(o.guessLab) : 'Your guess') + '</text></g>'; }
  if(c.axis && !o.small) out += '<text class="la-ct la-cax" transform="translate(12 ' + (T + bh / 2) + ') rotate(-90)" text-anchor="middle">' + esc(c.axis) + '</text>';
  var said = S.map(function(s, si){ return s.name + ': ' + c.cats.map(function(x, k){ return x + ' ' + (o.hide && si === hs && k === n - 1 ? 'hidden until you guess' : (s.labs ? s.labs[k] : s.vals[k])); }).join(', '); }).join('. ');
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" class="la-svg" role="img" aria-label="' + esc(c.title + '. Line chart. ' + said + '.') + '">' + out + '</svg>';
}

/* ══════════ 14. reveal (owner feedback, November 2026): see the graphic first ══════════
   rvPlayer builds a figure part by part: parts carry data-rv="k" and show from step k. It drives the reveal type
   (a whole page that teaches one deck graphic) and the small Play bar on an activity's own figure. */
var PLAY_IC = '<svg viewBox="0 0 24 24" aria-hidden="true" class="la-ic"><path class="pl" d="M7 4.5v15l12-7.5z" fill="currentColor"/><path class="pa" d="M7 4h4v16H7zM13 4h4v16h-4z" fill="currentColor"/></svg>';
function rvPlayer(o){
  /* o: { box: element holding the parts, n: steps, bar: element for the controls, small: true for an activity's figure,
          pace: function(k) ms to hold step k, onStep: function(at, user), name: what the controls build } */
  var at = o.n, timer = null, playing = false, seen = false;
  o.box.classList.add('la-rvready');
  o.bar.className = 'la-rvbar' + (o.small ? ' sm' : '');
  o.bar.innerHTML = '<button type="button" class="la-btn sm' + (o.small ? ' ghost' : '') + ' la-rvplay" data-rvb="play" aria-pressed="false">' + PLAY_IC + '<span>Replay</span></button>' +
    (o.small ? '' : '<button type="button" class="la-btn sm ghost" data-rvb="back">Back</button>') +
    '<span class="la-rvdots" role="group" aria-label="' + esc(o.name || 'Steps') + '">' + Array.apply(null, { length:o.n }).map(function(_, k){ return '<button type="button" class="la-rvdot" data-rvk="' + (k + 1) + '" aria-label="Step ' + (k + 1) + ' of ' + o.n + '"></button>'; }).join('') + '</span>' +
    (o.small ? '' : '<button type="button" class="la-btn sm ghost" data-rvb="next">Next</button>');
  var btn = o.bar.querySelector('.la-rvplay'), lab = btn.querySelector('span');
  /* data-rv-until="k" hides a part again after step k (a line that a later step redraws) */
  function apply(){ $$('[data-rv]', o.box).forEach(function(e){ var u = e.getAttribute('data-rv-until'); e.classList.toggle('la-rv-on', +e.getAttribute('data-rv') <= at && (u === null || at <= +u)); }); o.box.setAttribute('data-rvat', at); }
  function ui(){
    btn.setAttribute('aria-pressed', playing ? 'true' : 'false'); btn.classList.toggle('on', playing);
    lab.textContent = playing ? 'Pause' : at >= o.n ? 'Replay' : 'Play';
    btn.setAttribute('aria-label', (playing ? 'Pause' : at >= o.n ? 'Replay' : 'Play') + ': ' + (o.name || 'the graphic') + ', part by part');
    $$('.la-rvdot', o.bar).forEach(function(d, j){ d.classList.toggle('seen', j < at); if(j + 1 === at) d.setAttribute('aria-current', 'step'); else d.removeAttribute('aria-current'); });
    var bk = o.bar.querySelector('[data-rvb="back"]'), nx = o.bar.querySelector('[data-rvb="next"]');
    if(bk) bk.disabled = at <= 1; if(nx) nx.disabled = at >= o.n;
  }
  function set(k, user){ at = Math.max(0, Math.min(o.n, k)); apply(); ui(); if(o.onStep) o.onStep(at, user); }
  function stop(){ playing = false; if(timer){ clearTimeout(timer); timer = null; } ui(); }
  function step(){ if(!playing) return; set(at + 1); if(at >= o.n){ stop(); return; } timer = setTimeout(step, o.pace(at)); }
  function play(){ if(timer) clearTimeout(timer); if(at >= o.n) set(0); playing = true; ui(); timer = setTimeout(step, at === 0 ? 350 : 60); }
  function auto(){ if(seen || reduce) return; seen = true; set(0); play(); }
  o.bar.addEventListener('click', function(e){
    var b = e.target.closest('button'); if(!b || b.disabled) return; e.stopPropagation();
    var k = b.getAttribute('data-rvk'), w = b.getAttribute('data-rvb');
    if(w === 'play'){ if(playing) stop(); else play(); return; }
    stop();
    if(k) set(+k, true); else if(w === 'back') set(Math.max(1, at - 1), true); else if(w === 'next') set(at + 1, true);
  });
  /* the first time its page opens, it builds; leaving the page shows it whole */
  function onPage(){ if(o.box.closest('.page.cur')) setTimeout(auto, 250); else if(playing || at < o.n){ stop(); set(o.n); } }
  document.addEventListener('chart:page', onPage);
  if(o.box.closest('.page.cur')) setTimeout(auto, 500);
  /* Listen on the page replays it from the start, beside the narration */
  if(!o.small) document.addEventListener('click', function(e){ var l = e.target.closest && e.target.closest('#bbListen'); if(!l || l.classList.contains('playing') || reduce || !o.box.closest('.page.cur')) return; set(0); play(); }, true);
  set(o.n);
  return { finish:function(){ if(playing || at < o.n){ stop(); set(o.n); } }, apply:apply, set:set, play:play, at:function(){ return at; }, bar:o.bar };
}

T.reveal = function(api){
  var cfg = api.cfg, S = cfg.steps, n = S.length, fig = String(cfg.figure), pid = 'la-' + api.key + '-rp';
  api.static = true; api.untracked = true;
  var vb = fig.match(/<svg[^>]*viewBox="[\d.\-]+ [\d.\-]+ ([\d.]+) ([\d.]+)"/);
  api.body.innerHTML = '<div class="la-reveal"><figure class="la-fig"' + (cfg.fh ? ' style="--fh:' + esc(cfg.fh) + '"' : '') + '>' +
    (vb ? '<div class="la-figbox" role="img" aria-label="' + esc(cfg.label || '') + '" style="--rw:' + vb[1] + ';--rh:' + vb[2] + '">' + fig + '</div>' : '<div class="la-rvhtml" role="img" aria-label="' + esc(cfg.label || '') + '">' + fig + '</div>') +
    (cfg.caption ? '<figcaption class="la-rvcap">' + cfg.caption + '</figcaption>' : '') + '</figure>' +
    '<div class="la-rvslot"></div><div class="la-panel" id="' + pid + '" tabindex="-1"></div></div>';
  var panel = api.q('.la-panel'), box = api.q('.la-figbox, .la-rvhtml');
  function words(t){ return (strip(t).match(/\S+/g) || []).length; }
  api.rv = rvPlayer({ box:box, n:n, bar:api.q('.la-rvslot'), name:cfg.label || 'the graphic',
    pace:function(k){ return Math.max(2400, words(S[k - 1] ? S[k - 1].t : '') * 250 + 700); },
    onStep:function(at, user){
      panel.innerHTML = at ? '<span class="la-k">Step ' + at + ' of ' + n + '</span><b class="la-pt">' + S[at - 1].label + '</b><p>' + S[at - 1].t + '</p>' : '<p class="la-empty">' + (cfg.prompt || 'Watch the slide build, one part at a time.') + '</p>';
      if(user && at) api.say(strip(S[at - 1].label) + '. ' + strip(S[at - 1].t));
    } });
  api.solve = function(){};
};

/* ══════════ mount ══════════ */
function mount(root){
  var key = root.getAttribute('data-act'), cfg = ACTS[key]; if(!cfg || !T[cfg.type] || root.lrAct) return;
  var prog = cfg.prog || key, st = load(key) || {};
  root.classList.add('lr-act', 'la-t-' + cfg.type);
  root.innerHTML = '<div class="la-body"></div><p class="la-status sr" role="status" aria-live="polite"></p>';
  var body = root.firstChild, status = root.lastChild;
  var api = {
    key:key, prog:prog, cfg:cfg, root:root, body:body, st:st,
    q:function(s){ return root.querySelector(s); },
    save:function(){ P.set('a-' + key, JSON.stringify(st)); },
    say:function(m){ status.textContent = ''; setTimeout(function(){ status.textContent = m; }, 40); },
    focus:function(fk){ var el = root.querySelector('[data-fk="' + fk + '"]'); if(el){ try{ el.focus({ preventScroll:true }); }catch(e){ el.focus(); } } },
    paint:function(next){
      var ae = document.activeElement, fk = ae && root.contains(ae) ? ae.getAttribute('data-fk') : null;
      body.innerHTML = api.html(); if(api.after) api.after();
      var want = next || fk; if(want && (root.contains(document.activeElement) || document.activeElement === document.body || fk)){ var el = root.querySelector('[data-fk="' + want + '"]') || (fk && root.querySelector('[data-fk="' + fk + '"]')); if(el){ try{ el.focus({ preventScroll:true }); }catch(e){ el.focus(); } } }
      root.classList.toggle('is-done', !!st.done);
    },
    complete:function(summary, next){
      st.done = 1; api.save(); P.set('r-' + prog, summary);
      root.classList.add('is-done');
      if(!api.static) api.paint(next); else if(api.after) api.after();
      window.LR_DONE(prog);
      setTimeout(function(){ status.textContent = status.textContent + ' Activity complete.'; }, 400);
    }
  };
  T[cfg.type](api);
  if(!api.static) api.paint();
  /* reveal on an activity's own figure (parts marked data-rv), or cfg.reveal on a flip without one: a small Play bar */
  if(cfg.type !== 'reveal'){
    if(cfg.reveal && cfg.type === 'flip') $$('.la-flip', root).forEach(function(c, i){ c.setAttribute('data-rv', i + 1); });
    var rvN = 0; $$('[data-rv]', root).forEach(function(e){ rvN = Math.max(rvN, +e.getAttribute('data-rv') || 0); });
    if(rvN){
      var rvHost = function(){ return root.querySelector('.la-fig, .la-ffig') || root.querySelector('.la-slides, .la-flipset'); };
      var rvBar = document.createElement('div');
      api.rv = rvPlayer({ box:root, n:rvN, bar:rvBar, small:true, name:cfg.rvName || 'the slide', pace:function(){ return cfg.type === 'flip' && !cfg.figure ? 420 : 650; } });
      /* after every repaint: the new parts take the current step, and the bar goes back under the figure */
      var rvPut = function(){ if(cfg.reveal && cfg.type === 'flip') $$('.la-flip', root).forEach(function(c, i){ c.setAttribute('data-rv', i + 1); }); var h = rvHost(); if(h){ var before = h.querySelector(':scope > .la-count, :scope > .la-donebar'); if(before) h.insertBefore(rvBar, before); else h.appendChild(rvBar); } api.rv.apply(); };
      if(!api.static){ var paint0 = api.paint; api.paint = function(nx){ paint0(nx); rvPut(); }; }
      rvPut();
    }
  }
  if(api.drag) api.drag();
  root.addEventListener('click', function(e){
    var b = e.target.closest('button'); if(!b || !root.contains(b) || b.disabled) return;
    if(root._noclick && Date.now() - root._noclick < 300) return;
    if(api.rv && !b.closest('.la-rvbar')) api.rv.finish();
    /* a decision stops the narration, so the audio never talks over the learner */
    if(/^(sort|place|order|match|predict|branch|spot)$/.test(cfg.type) && !b.hasAttribute('data-replay') && !b.closest('.la-rvbar') && window.LR_NARRSTOP) window.LR_NARRSTOP();
    if(api.click) api.click(b);
  });
  if(st.done && !api.untracked && P.is(prog)) P.turn(prog);
  if(api.drawIn){ document.addEventListener('chart:page', function(){ if(root.closest('.page.cur')) setTimeout(api.drawIn, 200); }); if(root.closest('.page.cur')) setTimeout(api.drawIn, 500); }
  root.lrAct = { type:cfg.type, key:key, prog:prog, tracked:!api.untracked, solve:function(){ api.solve(); }, done:function(){ return !!st.done; }, rows:function(){ return api.rows ? api.rows() : []; } };
  REG[key] = root;
}
$$('[data-act]').forEach(mount);

/* rows for the takeaway print: [item, my answer, expert answer, right?] for every activity on a progress key */
window.LR_ACT_ROWS = function(prog){ var out = []; Object.keys(REG).forEach(function(k){ var a = REG[k].lrAct; if(a.prog === prog) out = out.concat(a.rows()); }); return out; };
window.LR_ACT = { all:function(){ return Object.keys(REG).map(function(k){ return REG[k]; }); }, mount:mount, chart:chartSVG, types:Object.keys(T) };
})();

/* ══════════ LEADERSHIP REDEFINED · course engine ══════════
   The Vanderbilt Voyage Online engine (me5231979/Voyage_Online, app.js),
   made generic: narration, progress, tap cards, route, drills, your-call
   scenarios, guess-the-number tiles, knowledge check, commitments, plus
   builders and the portfolio allocator. Content lives in each course's
   content.js (window.LR_COURSE); settings in config.js (window.LR_CONFIG);
   narration in narration-scripts.js (window.LR_NARR). State: localStorage
   in this browser only. Nothing is sent anywhere. No em or en dashes. */
(function(){
'use strict';
var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var C = window.LR_CONFIG || {};
var D = window.LR_COURSE || {};
var yr = document.getElementById('yr'); if(yr) yr.textContent = new Date().getFullYear();
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]; }); }
function $(s, c){ return (c || document).querySelector(s); }
function $$(s, c){ return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

/* ── storage ── */
/* bump the version to start every learner fresh (review resets); old keys are cleared */
var KEY = C.storeKey || 'lr-';
var mem = {};
var store = (function(){ try{ var t = KEY + 'test'; window.localStorage.setItem(t, '1'); window.localStorage.removeItem(t); return window.localStorage; }catch(e){ return null; } })();
function get(k){ if(store){ try{ var v = store.getItem(KEY + k); if(v !== null) return v; }catch(e){} } return mem[k] === undefined ? null : mem[k]; }
function set(k, v){ mem[k] = v; if(store){ try{ v === null ? store.removeItem(KEY + k) : store.setItem(KEY + k, v); }catch(e){} } }

/* ── contact address from config.js ── */
if(C.contact){ $$('[data-contact]').forEach(function(a){ a.href = 'mailto:' + C.contact; if(a.hasAttribute('data-contact-text')) a.textContent = C.contact; }); }

/* ── hero video: plays only while the welcome page is open ── */
var vid = document.getElementById('heroVideo');
if(vid){
  if(reduce){ try{ vid.pause(); vid.removeAttribute('autoplay'); }catch(e){} }
  else {
    var heroSync = function(key){ try{ key === 'home' ? vid.play().catch(function(){}) : vid.pause(); }catch(e){} };
    document.addEventListener('chart:page', function(ev){ heroSync(ev.detail ? ev.detail.key : ''); });
    if(window.chartPager) heroSync(window.chartPager.current().key);
  }
}

var nav = $('#nav');
function navShade(idx){ if(nav) nav.classList.toggle('scrolled', idx > 0); }
document.addEventListener('chart:page', function(ev){ navShade(ev.detail ? ev.detail.index : 0); });
if(window.chartPager) navShade(window.chartPager.current().index);
$$('.reveal').forEach(function(el){ el.classList.add('in'); });


/* ══════════ NARRATION: Listen (this page) and Auto (every page) ══════════
   Plays <audioBase>/<key>.mp3, recorded from the exact words in
   narration-scripts.js. If the file is missing (or blocked inside an LMS),
   the browser's own speech synthesis reads the same words. */
var NARR = window.LR_NARR || {};
var narr = { audio:null, playing:false, key:'', auto: get('auto') !== '0', on: get('auto') !== '0', utter:null };
var narrPos = (function(){ try{ var v = JSON.parse(get('narrpos') || '{}'); return v && typeof v === 'object' ? v : {}; }catch(e){ return {}; } })();
function narrPosSave(){ try{ set('narrpos', JSON.stringify(narrPos)); }catch(e){} }
function narrRemember(){
  if(!narr.audio || !narr.key) return;
  var a = narr.audio, t = a.currentTime || 0;
  if(t > 2 && (!a.duration || !isFinite(a.duration) || t < a.duration - 2)) narrPos[narr.key] = Math.max(0, t - 0.6);
  else delete narrPos[narr.key];
  narrPosSave();
}
var bbListen = $('#bbListen'), bbListenT = $('#bbListenT'), bbAuto = $('#bbAuto'), narrToast = $('#narrToast'), toastT = null;
function toast(msg){
  if(!narrToast) return;
  narrToast.textContent = msg; narrToast.classList.add('show');
  if(toastT) window.clearTimeout(toastT);
  toastT = window.setTimeout(function(){ narrToast.classList.remove('show'); }, 2800);
}
function narrKey(){ var c = window.chartPager ? window.chartPager.current() : { key:'home', n:1 }; return c.key + '/' + (c.n || 1); }
function narrUI(){
  if(bbListen){
    bbListen.setAttribute('aria-pressed', narr.playing ? 'true' : 'false');
    bbListen.classList.toggle('playing', narr.playing);
    var backAt = !narr.playing && narrPos[narrKey()] > 0;
    var lab = narr.playing ? 'Stop narration' : backAt ? 'Resume narration where it stopped' : 'Listen to this page';
    bbListen.setAttribute('aria-label', lab); bbListen.setAttribute('title', lab);
    if(bbListenT) bbListenT.textContent = narr.playing ? 'Stop' : backAt ? 'Resume' : 'Listen';
  }
  if(bbAuto) bbAuto.setAttribute('aria-pressed', narr.auto ? 'true' : 'false');
  $$('[data-narr]').forEach(function(b){ var on = narr.playing && narr.key === b.getAttribute('data-narr'); b.classList.toggle('playing', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.setAttribute('aria-label', on ? 'Stop' : 'Listen to this one'); });
  $$('[data-nk]').forEach(function(c){ c.classList.toggle('playing', narr.playing && narr.key === c.getAttribute('data-nk')); });
}
function narrStop(){
  if(narr.audio){ try{ narrRemember(); narr.audio.pause(); narr.audio.src = ''; }catch(e){} narr.audio = null; }
  if(window.speechSynthesis){ try{ window.speechSynthesis.cancel(); }catch(e){} }
  narr.utter = null; narr.playing = false; narrUI();
}
function narrSpeak(text){
  if(!window.speechSynthesis || !window.SpeechSynthesisUtterance){ narr.playing = false; narrUI(); toast('Narration is not available in this browser.'); return; }
  try{
    var u = new SpeechSynthesisUtterance(text);
    u.rate = 1; u.pitch = 1; u.lang = 'en-US';
    var voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    var pick = voices.filter(function(v){ return /^en(-|_)?(US|GB)?/i.test(v.lang) && /Google|Samantha|Karen|Daniel|Serena|Zira|Aria|Natural/i.test(v.name); })[0] || voices.filter(function(v){ return /^en/i.test(v.lang); })[0];
    if(pick) u.voice = pick;
    u.onend = function(){ if(narr.utter === u){ narr.utter = null; narr.playing = false; narrUI(); } };
    u.onerror = function(){ if(narr.utter === u){ narr.utter = null; narr.playing = false; narrUI(); } };
    narr.utter = u; narr.playing = true; narrUI();
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
  }catch(e){ narr.playing = false; narrUI(); }
}
/* bumped whenever a clip is re-recorded, so browsers fetch the new file */
var MEDIA_V = C.mediaVersion || '1';
function textHash(t){ var h = 5381; for(var i = 0; i < t.length; i++){ h = ((h << 5) + h + t.charCodeAt(i)) | 0; } return (h >>> 0).toString(36); }
function pauseVideos(){
  $$('video').forEach(function(v){ if(v.id !== 'heroVideo' && !v.paused){ try{ v.pause(); }catch(e){} } });
  /* hosted players (Vimeo) pause through their postMessage API */
  $$('.v-video iframe').forEach(function(f){ try{ f.contentWindow.postMessage(JSON.stringify({ method:'pause' }), 'https://player.vimeo.com'); }catch(e){} });
}
/* a video starting, from our play button or the player's own controls, stops the narration */
window.addEventListener('message', function(e){
  if(!/^https:\/\/player\.vimeo\.com$/.test(e.origin)) return;
  var d = e.data; if(typeof d === 'string'){ try{ d = JSON.parse(d); }catch(err){ return; } }
  if(!d || !d.event) return;
  if(d.event === 'ready'){ ['play', 'playing'].forEach(function(ev){ try{ e.source.postMessage(JSON.stringify({ method:'addEventListener', value:ev }), e.origin); }catch(err){} }); }
  else if(d.event === 'play' || d.event === 'playing'){ if(narr.playing) narrStop(); }
});
function narrPlay(k){
  k = k || narrKey(); var text = NARR[k];
  narrStop(); pauseVideos();
  if(!text){ toast('No narration on this page.'); return; }
  narr.key = k; narr.playing = true; narrUI();
  /* the version carries a hash of the script, so a re-recorded clip is never served from an old cache */
  var a = new Audio((C.audioBase || './audio/') + k.replace(/\//g, '-') + '.mp3?v=' + MEDIA_V + '-' + textHash(text));
  a.preload = 'auto';
  a.addEventListener('ended', function(){ if(narr.audio === a){ narr.audio = null; narr.playing = false; delete narrPos[k]; narrPosSave(); narrUI(); } });
  a.addEventListener('error', function(){ if(narr.audio === a){ narr.audio = null; narrSpeak(text); } });
  narr.audio = a;
  var backTo = narrPos[k] || 0;
  if(backTo > 0){
    var seek = function(){ try{ if(narr.audio === a && (!a.duration || !isFinite(a.duration) || backTo < a.duration - 1)) a.currentTime = backTo; }catch(e){} };
    if(a.readyState >= 1) seek(); else a.addEventListener('loadedmetadata', seek);
  }
  var pr = a.play();
  if(pr && pr.catch) pr.catch(function(err){
    if(narr.audio !== a) return;
    narr.audio = null;
    if(err && err.name === 'NotAllowedError'){
      narr.playing = false; narrUI();
      /* the browser will not play sound before the first tap: start on that tap, without nagging */
      if(narr.auto && !narr.armed){ narr.armed = true; var arm = function(){ narr.armed = false; document.removeEventListener('pointerdown', arm, true); document.removeEventListener('keydown', arm, true); window.setTimeout(function(){ if(narr.auto && !narr.playing) narrPlay(); }, 350); }; document.addEventListener('pointerdown', arm, true); document.addEventListener('keydown', arm, true); }
      else if(!narr.auto) toast('Tap Listen to hear this page.');
    }
    else narrSpeak(text);
  });
}
if(bbListen) bbListen.addEventListener('click', function(){ if(narr.playing){ narr.on = false; narrStop(); } else { narr.on = true; narrPlay(); } });
/* a tab, card, or situation with its own clip plays when opened (if the learner is listening), or when its speaker is tapped */
function narrSub(k, force){
  if(!NARR[k]){ if(force) toast('No narration for this one.'); else if(narr.playing) narrStop(); return; }
  delete narrPos[k]; narrPosSave();
  if(force) narr.on = true;
  if(narr.on || narr.auto) narrPlay(k); else if(narr.playing) narrStop();
}
function subBtn(k){ return NARR[k] ? '<button type="button" class="sub-listen" data-narr="' + k + '" aria-pressed="false" aria-label="Listen to this one" title="Listen to this one"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path class="w1" d="M15.5 8.5a5 5 0 0 1 0 7"/><path class="w2" d="M19 5a9 9 0 0 1 0 14"/></svg></button>' : ''; }
document.addEventListener('click', function(e){
  var b = e.target.closest('[data-narr]'); if(b){ e.preventDefault(); narrSub(b.getAttribute('data-narr'), true); return; }
  /* clicking into an activity stops whatever is playing, so the audio never talks over the learner */
  if(e.target.closest('.scn button[data-o], [data-drill] button, .kq button, .cp-opts button, .v-commits button, .v-tile button')){ pauseVideos(); if(narr.playing) narrStop(); }
}, true);
if(bbAuto) bbAuto.addEventListener('click', function(){
  narr.auto = !narr.auto; narr.on = narr.auto; set('auto', narr.auto ? '1' : '0'); narrUI();
  if(narr.auto){ toast('Auto-narration on. Each page is read as it turns.'); narrPlay(); }
  else { toast('Auto-narration off.'); narrStop(); }
});
document.addEventListener('chart:page', function(){ narrStop(); delete narrPos[narrKey()]; narrPosSave(); narrUI(); if(narr.auto) window.setTimeout(narrPlay, reduce ? 0 : 380); });
var progFill = $('#progFill');
function pageLine(){ if(!progFill || !window.chartPager) return; var c = window.chartPager.current(), n = window.chartPager.count || 1; progFill.style.width = ((c.index + 1) / n * 100) + '%'; }
document.addEventListener('chart:page', pageLine); window.setTimeout(pageLine, 50);
document.addEventListener('visibilitychange', function(){ if(document.hidden && narr.playing) narrStop(); });
narrUI();
if(narr.auto) window.setTimeout(narrPlay, 600);

/* ══════════ course videos: a placeholder image until config.js names the file ══════════
   Swapping in a video is one line in config.js (videos.<slot>.src, plus
   captions). Until then the slot shows its still with "Video coming soon". */
$$('[data-video]').forEach(function(f){
  var key = f.getAttribute('data-video'), cfg = (C.videos || {})[key] || {}, cap = f.getAttribute('data-caption') || 'Video';
  var ph = f.querySelector('.v-ph');
  if(cfg.ratio) f.style.aspectRatio = cfg.ratio;
  /* a Vimeo slot takes the video's real shape, so the box always matches the video */
  else if(cfg.embed && /player\.vimeo\.com\/video\/(\d+)/.test(cfg.embed) && window.fetch){
    var vid = cfg.embed.match(/video\/(\d+)/)[1], vh = (cfg.embed.match(/[?&]h=([0-9a-f]+)/) || [])[1];
    try{ fetch('https://vimeo.com/api/oembed.json?url=' + encodeURIComponent('https://vimeo.com/' + vid + (vh ? '/' + vh : ''))).then(function(r){ return r.ok ? r.json() : null; }).then(function(d){ if(d && d.width && d.height) f.style.aspectRatio = d.width + ' / ' + d.height; }, function(){}); }catch(e){}
  }
  /* a hosted player (Vimeo, YouTube): the still stays until the learner taps play, then the player loads in place */
  if(cfg.embed){
    f.classList.add('facade');
    var play = document.createElement('button');
    play.type = 'button'; play.className = 'v-play';
    play.setAttribute('aria-label', 'Play video: ' + cap);
    play.innerHTML = '<span class="v-ph-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></span>';
    f.appendChild(play);
    var frame = null;
    play.addEventListener('click', function(){
      narrStop();
      frame = document.createElement('iframe');
      frame.src = cfg.embed + (cfg.embed.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1';
      frame.title = cfg.title || cap;
      frame.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share';
      frame.setAttribute('allowfullscreen', '');
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      f.appendChild(frame); f.classList.add('playing');
      frame.focus();
    });
    /* turning the page stops the video: the player goes, the still comes back */
    document.addEventListener('chart:page', function(){ if(frame){ frame.remove(); frame = null; f.classList.remove('playing'); } });
    return;
  }
  if(!cfg.src){ f.classList.add('nomedia'); f.setAttribute('role', 'img'); f.setAttribute('aria-label', cap + '. Video coming soon.'); return; }
  var v = document.createElement('video');
  v.controls = true; v.setAttribute('playsinline', ''); v.preload = 'metadata';
  if(ph) v.poster = ph.getAttribute('src');
  v.src = cfg.src; v.setAttribute('aria-label', cap + '. Video' + (cfg.captions ? ', with captions.' : '.'));
  if(cfg.captions){ var t = document.createElement('track'); t.kind = 'captions'; t.src = cfg.captions; t.srclang = 'en'; t.label = 'English'; t.default = true; v.appendChild(t); }
  f.insertBefore(v, f.firstChild);
  v.addEventListener('error', function(){ f.classList.add('nomedia'); });
  v.addEventListener('play', function(){ f.classList.add('playing'); narrStop(); });
  v.addEventListener('pause', function(){ f.classList.remove('playing'); });
  document.addEventListener('chart:page', function(){ if(!v.paused) v.pause(); });
});


/* ══════════ PROGRESS ══════════ */
var SECTIONS = D.SECTIONS || [];
function progIs(k){ return get('p-' + k) === '1'; }
function progWrite(k, v){ set('p-' + k, v ? '1' : null); }
var progList = $('#progList'), progCount = $('#progCount'), progSum = $('#progSum'), progStatus = $('#progStatus'),
    progBtn = $('#progBtn'), progPanel = $('#progPanel');
if(progList) progList.innerHTML = SECTIONS.map(function(s){
  return '<li data-prog-row="' + s.k + '"><a href="#p/' + s.k + '/1"><span class="p-no" aria-hidden="true">' + s.no + '</span>' +
    '<span class="p-name">' + s.name + '<span class="p-how">' + s.how + '</span></span></a>' +
    '<button type="button" class="p-state" data-prog="' + s.k + '" aria-pressed="false" aria-label="Mark ' + s.name + ' done">Mark done</button></li>';
}).join('');
function progRender(changedKey, nowDone){
  var total = SECTIONS.length, doneN = 0;
  SECTIONS.forEach(function(s){ if(progIs(s.k)) doneN++; });
  var left = total - doneN;
  if(progCount) progCount.textContent = doneN + '/' + total;
  if(progSum) progSum.textContent = doneN === total ? 'All ' + total + ' activities complete.' : doneN + ' of ' + total + ' activities complete. ' + left + ' left; each row is a shortcut.';
  SECTIONS.forEach(function(s){
    var done = progIs(s.k);
    var row = progList ? progList.querySelector('[data-prog-row="' + s.k + '"]') : null;
    if(row){
      row.classList.toggle('done', done);
      var st = row.querySelector('.p-state');
      if(st){ st.textContent = done ? 'Completed' : 'Mark done'; st.setAttribute('aria-pressed', done ? 'true' : 'false'); st.setAttribute('aria-label', done ? s.name + ' completed. Select to un-mark.' : 'Mark ' + s.name + ' done'); }
    }
    var dot = $('.bb-dot[data-rail="' + s.k + '"]');
    if(dot){ dot.classList.toggle('done', done); var base = dot.getAttribute('data-name') || s.name; dot.setAttribute('aria-label', base + ', activity ' + (done ? 'done' : 'not done')); dot.setAttribute('title', base + ' · ' + (done ? 'done' : 'not yet')); }
  });
  if(changedKey && progStatus){ var sec = SECTIONS.filter(function(s){ return s.k === changedKey; })[0]; if(sec) progStatus.textContent = (nowDone ? 'Activity complete: ' : 'Activity reopened: ') + sec.name + '. ' + doneN + ' of ' + total + ' complete.'; }
  bbDoneSync();
  if(doneN === total) allDone();
}
var bbDoneBtn = $('#bbDone');
function bbDoneSync(){
  if(!bbDoneBtn) return;
  var curKey = (window.chartPager && window.chartPager.current) ? window.chartPager.current().key : '';
  var sec = SECTIONS.filter(function(s){ return s.k === curKey; })[0];
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
function progDone(k){ if(progIs(k)) return; progWrite(k, true); progRender(k, true); turnDone(k); }
function progToggle(k){ var v = !progIs(k); progWrite(k, v); progRender(k, v); if(v) turnDone(k); }
function progOpen(open){ if(!progPanel || !progBtn) return; progPanel.hidden = !open; progBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
if(progBtn) progBtn.addEventListener('click', function(){ progOpen(progPanel && progPanel.hidden); });
if(progPanel) progPanel.addEventListener('click', function(e){
  var st = e.target.closest ? e.target.closest('button.p-state') : null;
  if(st){ progToggle(st.getAttribute('data-prog')); return; }
  if(e.target.closest('a')) progOpen(false);
});
document.addEventListener('click', function(e){ if(progPanel && !progPanel.hidden && !e.target.closest('#progPanel') && !e.target.closest('#progBtn')) progOpen(false); });
document.addEventListener('keydown', function(e){ if(e.key === 'Escape') progOpen(false); });
var progReset = $('#progReset');
if(progReset) progReset.addEventListener('click', function(){
  /* everything this course saved: progress, answers, compass, commitments, hunt, narration spots */
  mem = {};
  if(store){ try{ Object.keys(store).forEach(function(k){ if(k.indexOf(KEY) === 0 && k !== KEY + 'auto') store.removeItem(k); }); store.removeItem(KEY + 'page'); }catch(e){} }
  doneSeen = false;
  if(progStatus) progStatus.textContent = 'Progress reset. 0 of ' + SECTIONS.length + ' activities complete.';
  window.setTimeout(function(){ location.hash = '#p/home/1'; location.reload(); }, 400);
});
if(!store){ var pw = $('#progStorageNote'); if(pw) pw.hidden = false; }

/* ── completion modal (fires once when all nine are done) ── */
var doneSeen = get('done-seen') === '1';
var modalReturn = null;
function allDone(){
  if(doneSeen) return;
  doneSeen = true; set('done-seen', '1');
  window.setTimeout(modalShow, reduce ? 0 : 450);
}
function modalShow(){
  var m = $('#oracleModal'); if(!m || !m.hidden) return;
  var ae = document.activeElement; modalReturn = (ae && ae !== document.body) ? ae : null;
  m.hidden = false;
  if(reduce) m.classList.add('open'); else window.requestAnimationFrame(function(){ m.classList.add('open'); });
  document.body.classList.add('oracle-open');
  var go = $('#oracleGo'); if(go) go.focus();
}
function modalHide(){
  var m = $('#oracleModal'); if(!m || m.hidden) return;
  m.classList.remove('open'); document.body.classList.remove('oracle-open');
  window.setTimeout(function(){ m.hidden = true; }, reduce ? 0 : 260);
  if(modalReturn && modalReturn.focus){ try{ modalReturn.focus(); }catch(e){} } modalReturn = null;
}
['#oracleGo'].forEach(function(s){ var b = $(s); if(b) b.addEventListener('click', modalHide); });
var oOverlay = $('#oracleModal');
if(oOverlay) oOverlay.addEventListener('click', function(e){ if(e.target === oOverlay) modalHide(); });
document.addEventListener('keydown', function(e){
  var m = $('#oracleModal'); if(!m || m.hidden) return;
  if(e.key === 'Escape'){ modalHide(); return; }
  if(e.key !== 'Tab') return;
  var items = $$('a[href], button:not([disabled])', m); if(!items.length) return;
  var first = items[0], last = items[items.length - 1], active = document.activeElement, idx = items.indexOf(active);
  if(idx === -1){ e.preventDefault(); first.focus(); }
  else if(e.shiftKey && active === first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && active === last){ e.preventDefault(); first.focus(); }
});

/* ══════════ task chips: the instruction above each activity turns gold with a check when done ══════════ */
function turnDone(k){ $$('.v-task[data-task="' + k + '"]').forEach(function(t){ t.classList.add('done'); }); }

/* ══════════ lesson 1: the route, six stops ══════════ */
var STOPS = D.STOPS || [];
(function(){
  var route = $('#route'), port = $('#port'); if(!route) return;
  var btns = $$('button[data-stop]', route), seen = {};
  btns.forEach(function(b, i){ if(NARR[(D.ROUTE_NARR || 'welcome/g') + (i + 1)]) b.setAttribute('data-nk', (D.ROUTE_NARR || 'welcome/g') + (i + 1)); });
  route.addEventListener('click', function(e){
    var b = e.target.closest('button[data-stop]'); if(!b) return;
    var i = +b.getAttribute('data-stop'), s = STOPS[i]; seen[i] = 1;
    btns.forEach(function(x){ x.setAttribute('aria-expanded', x === b ? 'true' : 'false'); x.classList.toggle('seen', !!seen[+x.getAttribute('data-stop')]); });
    port.innerHTML = '<span class="v-label">Stop ' + (i + 1) + ' of 6</span><h3>' + s.h + subBtn((D.ROUTE_NARR || 'welcome/g') + (i + 1)) + '</h3><p>' + esc(s.p) + '</p><ul>' + s.tags.map(function(t){ return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
    narrSub((D.ROUTE_NARR || 'welcome/g') + (i + 1));
    if(Object.keys(seen).length === STOPS.length) progDone(D.ROUTE_PROG || 'welcome');
  });
})();


/* ══════════ your call: one scenario, three responses, consequences ══════════ */
var SCENARIOS = D.SCENARIOS || {};
function buildScenario(el){
  var name = el.getAttribute('data-scn'), sc = SCENARIOS[name]; if(!sc) return;
  var tried = {};
  el.innerHTML = '<p class="scn-s">' + esc(sc.s) + '</p><div class="scn-opts" role="group" aria-label="Choose your response">' +
    sc.opts.map(function(o, i){ return '<button type="button" data-o="' + i + '" aria-pressed="false"><span class="k" aria-hidden="true">' + String.fromCharCode(65 + i) + '</span><span>' + esc(o.t) + '</span></button>'; }).join('') +
    '</div><div class="scn-out" role="status" aria-live="polite"></div>';
  var out = el.querySelector('.scn-out');
  el.addEventListener('click', function(e){
    var b = e.target.closest('button[data-o]'); if(!b) return;
    var i = parseInt(b.getAttribute('data-o'), 10), o = sc.opts[i];
    tried[i] = 1;
    $$('button[data-o]', el).forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    if(o.best) b.classList.add('best-pick');
    var n = Object.keys(tried).length;
    out.innerHTML = '<span class="vtag' + (o.best ? ' best' : '') + '">' + (o.best ? (D.BEST_LABEL || 'The strongest move: ') : 'Consider: ') + esc(o.b) + '</span><p>' + esc(o.out) + '</p>' +
      (n < sc.opts.length ? '<p class="scn-again hinttxt">' + (o.best ? 'See what the other responses would have cost. ' : (D.TRY_AGAIN || 'Now find the strongest response. ')) + n + ' of ' + sc.opts.length + ' tried.</p>' : '<p class="scn-again hinttxt">All three tried.</p>');
    out.classList.add('show');
  });
}
/* a stepper of scenarios, one at a time; done when the best response is found in each */
var CALL_SETS = D.CALL_SETS || {};
var CALL_PROG = D.CALL_PROG || {};
function buildCalls(el){
  var name = el.getAttribute('data-calls'), keys = CALL_SETS[name]; if(!keys) return;
  var cfg = CALL_PROG[name], status = $(cfg.status), found = {}, cur = 0;
  el.innerHTML = keys.map(function(k, i){
    var sc = SCENARIOS[k];
    return '<div class="cq' + (i === 0 ? ' cur' : '') + '" data-k="' + k + '"><p class="cq-h">' + esc(sc.h) + subBtn(cfg.narr + (i + 1)) + '</p><div class="scn" data-scn="' + k + '"></div><div class="cq-nav">' +
      (i < keys.length - 1 ? '<button type="button" class="btn btn-primary btn-sm" data-next="1" hidden>Next situation<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>' : '') +
      (i > 0 ? '<button type="button" class="btn btn-ghost btn-sm" data-prev="1">Back</button>' : '') + '</div></div>';
  }).join('');
  $$('.scn[data-scn]', el).forEach(buildScenario);
  function pips(){ return '<span class="pips" aria-hidden="true">' + keys.map(function(k){ return '<i class="' + (found[k] ? 'ok' : '') + '"></i>'; }).join('') + '</span>'; }
  function paint(){ var n = Object.keys(found).length; if(status) status.innerHTML = pips() + '<span>' + n + ' of ' + keys.length + ' ' + cfg.noun + '.' + (n === keys.length ? ' Activity complete.' : '') + '</span>'; if(n === keys.length) progDone(cfg.prog); }
  function show(i){ $$('.cq', el).forEach(function(q, qi){ q.classList.toggle('cur', qi === i); }); cur = i; var f = $$('.cq', el)[i].querySelector('button:not([hidden])'); if(f) f.focus({ preventScroll:true }); narrSub(cfg.narr + (i + 1)); }
  el.addEventListener('click', function(e){
    if(e.target.closest('button[data-next]')){ show(cur + 1); return; }
    if(e.target.closest('button[data-prev]')){ show(cur - 1); return; }
    var b = e.target.closest('.scn button[data-o]'); if(!b) return;
    var q = b.closest('.cq'), k = q.getAttribute('data-k'), o = SCENARIOS[k].opts[parseInt(b.getAttribute('data-o'), 10)];
    var nx = q.querySelector('button[data-next]'); if(nx) nx.hidden = false;
    if(o.best){ found[k] = 1; paint(); }
  });
  paint();
}
$$('[data-calls]').forEach(buildCalls);


/* ══════════ drills: fact or fiction ══════════ */
var DRILLS = D.DRILLS || {};
function buildDrill(el){
  var name = el.getAttribute('data-drill'), d = DRILLS[name]; if(!d) return;
  var status = $('#' + name + 'Status'), done = {}, cur = 0, right = 0;
  el.innerHTML = d.items.map(function(it, i){
    var opts = it.opts || d.opts;
    return '<div class="dq' + (i === 0 ? ' cur' : '') + '" data-i="' + i + '"><p class="dq-s"><b>' + (i + 1) + ' of ' + d.items.length + '</b>' + esc(it.s) + subBtn(name + '/q' + (i + 1)) + '</p><div class="dq-opts" role="group" aria-label="Choose one">' +
      opts.map(function(o, oi){ return '<button type="button" data-o="' + oi + '" aria-pressed="false">' + esc(o) + '</button>'; }).join('') +
      '</div><p class="dq-x" role="status"></p><div class="dq-nav">' + (i < d.items.length - 1 ? '<button type="button" class="btn btn-primary btn-sm" data-next="1">Next<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>' : '') + '</div></div>';
  }).join('');
  function pips(){ return '<span class="pips" aria-hidden="true">' + d.items.map(function(it, i){ return '<i class="' + (done[i] === 1 ? 'ok' : done[i] === 2 ? 'no' : '') + '"></i>'; }).join('') + '</span>'; }
  function show(i){ $$('.dq', el).forEach(function(q, qi){ q.classList.toggle('cur', qi === i); }); cur = i; var f = $$('.dq', el)[i].querySelector('button:not([disabled])'); if(f) f.focus({ preventScroll:true }); }
  el.addEventListener('click', function(e){
    if(e.target.closest('button[data-narr]')) return;
    var nx = e.target.closest('button[data-next]');
    if(nx){ if(cur < d.items.length - 1) show(cur + 1); return; }
    var b = e.target.closest('button[data-o]'); if(!b || b.disabled) return;
    var q = b.closest('.dq'), i = parseInt(q.getAttribute('data-i'), 10), oi = parseInt(b.getAttribute('data-o'), 10), it = d.items[i], opts = it.opts || d.opts;
    var ok = oi === it.a;
    $$('button[data-o]', q).forEach(function(x){ x.disabled = true; x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); if(parseInt(x.getAttribute('data-o'), 10) === it.a) x.classList.add('is-answer'); });
    q.classList.add(ok ? 'right' : 'wrong');
    q.querySelector('.dq-x').innerHTML = '<b>' + (ok ? 'Right. ' : 'Not quite. The answer is ' + esc(opts[it.a]) + '. ') + '</b>' + esc(it.x);
    done[i] = ok ? 1 : 2; if(ok) right++;
    var n = Object.keys(done).length;
    if(status) status.innerHTML = pips() + '<span>' + n + ' of ' + d.items.length + ' ' + d.verb + '.' + (n === d.items.length ? ' ' + right + ' of ' + d.items.length + ' right. Activity complete.' : '') + '</span>';
    if(n === d.items.length) progDone(d.prog);
  });
  if(status) status.innerHTML = pips() + '<span>0 of ' + d.items.length + ' ' + d.verb + '.</span>';
}
$$('[data-drill]').forEach(buildDrill);


/* ══════════ guess the number: tiles you guess before the reveal (the pretesting effect) ══════════ */
var NUMS = D.NUMS || [];
(function(){
  var grid = $('#nums'), status = $('#numbersStatus'); if(!grid || !NUMS.length) return;
  var prog = D.NUM_PROG || 'numbers', done = {}, right = 0;
  grid.innerHTML = NUMS.map(function(n, i){
    return '<div class="v-tile" data-n="' + i + '"><button type="button" class="v-tile-face" aria-expanded="false"><span class="q" aria-hidden="true">?</span><span class="lab">' + esc(n.lab) + '</span></button></div>';
  }).join('');
  function paint(){ var n = Object.keys(done).length; if(status) status.textContent = n + ' of ' + NUMS.length + ' guessed.' + (n === NUMS.length ? ' ' + right + ' right. Activity complete.' : ''); if(n === NUMS.length) progDone(prog); }
  grid.addEventListener('click', function(e){
    var tile = e.target.closest('.v-tile'); if(!tile) return;
    var i = +tile.getAttribute('data-n'), n = NUMS[i];
    if(e.target.closest('.v-tile-face') && !tile.classList.contains('open') && !done[i]){
      tile.classList.add('open');
      tile.innerHTML = '<div class="v-guess"><span class="v-label">' + esc(n.lab) + '</span><p>' + esc(n.q) + '</p><div class="opts" role="group" aria-label="Your guess">' + n.opts.map(function(o, oi){ return '<button type="button" data-o="' + oi + '">' + esc(o) + '</button>'; }).join('') + '</div></div>';
      var fb = tile.querySelector('button[data-o]'); if(fb) fb.focus();
      return;
    }
    var b = e.target.closest('button[data-o]'); if(!b || done[i]) return;
    var ok = +b.getAttribute('data-o') === n.a; done[i] = 1; if(ok) right++;
    tile.classList.remove('open'); tile.classList.add('done');
    tile.innerHTML = '<div class="v-reveal" tabindex="-1"><span class="verdict' + (ok ? ' ok' : '') + '">' + (ok ? 'You got it' : 'You guessed ' + esc(n.opts[+b.getAttribute('data-o')])) + '</span><span class="big">' + esc(n.big) + '</span><span class="lab">' + esc(n.lab) + '</span><p>' + esc(n.x) + '</p></div>';
    tile.querySelector('.v-reveal').focus();
    paint();
  });
  paint();
})();

/* ══════════ tap cards: each card opens in place; done when every card is open ══════════
   <div class="v-focus" data-taps="key" data-narr-base="vision/f"> buttons with <b> and <span> */
$$('[data-taps]').forEach(function(list){
  var k = list.getAttribute('data-taps'), base = list.getAttribute('data-narr-base'), btns = $$('button', list), seen = {};
  btns.forEach(function(b, i){ b.addEventListener('click', function(){
    var o = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', o ? 'true' : 'false');
    if(!o){ if(base && narr.key === base + (i + 1) && narr.playing) narrStop(); return; }
    seen[i] = 1;
    if(base) narrSub(base + (i + 1));
    if(Object.keys(seen).length === btns.length){ if(SECTIONS.some(function(s){ return s.k === k; })) progDone(k); else turnDone(k); }
  }); });
});

/* ══════════ builders: a few fields that assemble into a draft, saved in this browser ══════════
   <div class="lr-build" data-build="story"> fields [data-f]; preview .lr-out; D.BUILDS[key] = { tpl(v), need:n } */
function bVal(key, f){ return (get('b-' + key + '-' + f) || '').trim(); }
function bAll(key){ var o = {}; ((D.BUILDS[key] || {}).fields || []).forEach(function(f){ o[f] = bVal(key, f); }); return o; }
window.LR_bVal = bVal;
$$('[data-build]').forEach(function(box){
  var key = box.getAttribute('data-build'), cfg = (D.BUILDS || {})[key]; if(!cfg) return;
  var out = box.querySelector('.lr-out'), copy = box.querySelector('.lr-copy'), status = box.querySelector('.lr-bstat');
  var fields = $$('[data-f]', box);
  fields.forEach(function(el){ var v = get('b-' + key + '-' + el.getAttribute('data-f')); if(v !== null) el.value = v; });
  function filled(){ return fields.filter(function(el){ return (el.value || '').trim(); }).length; }
  function paint(){
    var txt = cfg.tpl(bAll(key), bVal);
    if(out) out.textContent = txt;
    if(copy) copy.setAttribute('data-copytext', txt);
    var n = filled(), need = cfg.need || fields.length;
    if(status) status.textContent = n + ' of ' + fields.length + ' filled. Saved in this browser only.' + (n >= need ? ' Activity complete.' : '');
    if(n >= need) progDone(key);
    tellPaint();
  }
  fields.forEach(function(el){
    var h = function(){ set('b-' + key + '-' + el.getAttribute('data-f'), el.value); paint(); };
    el.addEventListener('input', h); el.addEventListener('change', h);
  });
  paint();
});

/* ══════════ allocator: spread points across activities, plotted live on a 2x2 ══════════
   <div class="lr-alloc" data-alloc="margin">; D.ALLOC[key] = { total, items:[{lab, tag, x, y}], quads } */
$$('[data-alloc]').forEach(function(box){
  var key = box.getAttribute('data-alloc'), cfg = (D.ALLOC || {})[key]; if(!cfg) return;
  var total = cfg.total || 100;
  var saved = (function(){ try{ var v = JSON.parse(get('a-' + key) || 'null'); return Array.isArray(v) ? v : null; }catch(e){ return null; } })();
  var vals = saved || cfg.items.map(function(){ return Math.round(total / cfg.items.length / 5) * 5; });
  var list = box.querySelector('.lr-sliders'), dot = box.querySelector('.mx-dot'), read = box.querySelector('.mx-read'), tot = box.querySelector('.lr-total');
  list.innerHTML = cfg.items.map(function(it, i){
    return '<div class="lr-slide"><label for="al-' + key + i + '"><b>' + esc(it.lab) + '</b><small>' + esc(it.tag) + '</small></label><div class="lr-row"><input type="range" id="al-' + key + i + '" min="0" max="' + (cfg.max || 50) + '" step="5" value="' + vals[i] + '" data-i="' + i + '" /><output for="al-' + key + i + '">' + vals[i] + '</output></div></div>';
  }).join('');
  function render(final){
    var sum = 0, x = 0, y = 0;
    vals.forEach(function(v, i){ sum += v; x += v * cfg.items[i].x; y += v * cfg.items[i].y; });
    var left = total - sum;
    if(tot) tot.textContent = 'Points placed: ' + sum + ' of ' + total + (left < 0 ? '. ' + (-left) + ' over; pull some back.' : left > 0 ? '. ' + left + ' left to place.' : '. Fully placed.');
    if(sum > 0){
      var nx = x / sum, ny = y / sum;
      dot.setAttribute('cx', (40 + nx * 320).toFixed(1)); dot.setAttribute('cy', (340 - ny * 320).toFixed(1)); dot.style.display = '';
      var q = (ny >= .5 ? 'top' : 'bottom') + (nx >= .5 ? 'right' : 'left');
      if(read) read.innerHTML = cfg.quads[q] || '';
    } else { dot.style.display = 'none'; if(read) read.textContent = 'Place some points to see where your portfolio lands.'; }
    if(final && left === 0) progDone(key);
  }
  list.addEventListener('input', function(e){ var r = e.target.closest('input[type=range]'); if(!r) return; vals[+r.getAttribute('data-i')] = +r.value; r.nextElementSibling.textContent = r.value; render(false); });
  list.addEventListener('change', function(e){ if(!e.target.closest('input[type=range]')) return; set('a-' + key, JSON.stringify(vals)); render(true); });
  render(false);
});


/* ══════════ next steps: four commitments, and the message to the manager ══════════ */
var COMMITS = D.COMMITS || [];
function tellPaint(){
  if(!D.tell) return;
  $$('[data-tell]').forEach(function(el){
    var msg = D.tell(el.getAttribute('data-tell'), get);
    var t = el.querySelector('.v-tell-text'), cp = el.querySelector('[data-copytext]');
    if(t) t.textContent = msg; if(cp) cp.setAttribute('data-copytext', msg);
  });
}
(function(){
  var list = $('#commitList'), status = $('#commitStatus'); if(!list) return;
  var on = (function(){ try{ var v = JSON.parse(get('commit') || '[]'); return Array.isArray(v) ? v : []; }catch(e){ return []; } })();
  list.innerHTML = COMMITS.map(function(t, i){ return '<button type="button" role="checkbox" aria-checked="false" data-c="' + i + '"><span class="cb" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg></span><b>' + esc(t[0]) + '</b><small>' + esc(t[1]) + '</small></button>'; }).join('');
  function paint(){
    $$('button[data-c]', list).forEach(function(b){ b.setAttribute('aria-checked', on[+b.getAttribute('data-c')] ? 'true' : 'false'); });
    var n = on.filter(Boolean).length;
    if(status) status.textContent = n + ' of ' + COMMITS.length + ' committed.' + (n === COMMITS.length ? ' Activity complete.' : '');
    if(n === COMMITS.length) progDone('nextstep');
  }
  list.addEventListener('click', function(e){ var b = e.target.closest('button[data-c]'); if(!b) return; var i = +b.getAttribute('data-c'); on[i] = !on[i]; set('commit', JSON.stringify(on)); paint(); });
  paint();
  tellPaint();
})();

/* ══════════ knowledge check: five questions, one at a time, feedback after each ══════════ */
var QUIZ = D.QUIZ || [];
(function(){ var POS = D.QUIZ_POS || []; QUIZ.forEach(function(q, i){ var t = POS[i]; if(t === undefined || t === q.a || t >= q.opts.length) return; var o = q.opts.splice(q.a, 1)[0]; q.opts.splice(t, 0, o); q.a = t; }); })();
(function(){
  var box = $('#quizBox'), status = $('#quizStatus'), done = $('#quizDone'); if(!box) return;
  var PASS = D.QUIZ_PASS || 4, cur = 0, score = 0, answered = {};
  function render(){
    cur = 0; score = 0; answered = {};
    box.innerHTML = QUIZ.map(function(it, i){
      return '<div class="kq' + (i === 0 ? ' cur' : '') + '" data-i="' + i + '"><p class="kq-q"><span class="qn">' + (i + 1) + ' of ' + QUIZ.length + ' &middot; ' + esc(it.seg) + '</span><br>' + esc(it.q) + '</p><div class="kq-opts" role="group" aria-label="Choose one">' +
        it.opts.map(function(o, oi){ return '<button type="button" data-o="' + oi + '" aria-pressed="false">' + esc(o) + '</button>'; }).join('') +
        '</div><p class="kq-x" role="status"></p><div class="kq-nav">' + (i < QUIZ.length - 1 ? '<button type="button" class="btn btn-primary btn-sm" data-next="1">Next question<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>' : '<button type="button" class="btn btn-primary btn-sm" data-finish="1">See my score</button>') + '</div></div>';
    }).join('');
    done.classList.remove('show'); done.innerHTML = '';
    if(status) status.textContent = '0 of ' + QUIZ.length + ' answered.';
  }
  function show(i){ $$('.kq', box).forEach(function(q, qi){ q.classList.toggle('cur', qi === i); }); cur = i; var f = $$('.kq', box)[i].querySelector('button:not([disabled])'); if(f) f.focus({ preventScroll:true }); }
  function finish(){
    var t = score === QUIZ.length ? ['Gold standard.', 'Perfect. Turn the page for your next steps.'] : score >= PASS ? ['Well done.', 'Reread the explanation under the one you missed, then turn the page.'] : ['Almost there.', 'You need ' + PASS + ' of ' + QUIZ.length + ' to finish the check. Each explanation names the lesson to revisit; then retake it.'];
    done.innerHTML = '<div class="big-score">' + score + ' / ' + QUIZ.length + '</div><h3>' + t[0] + '</h3><p>' + t[1] + '</p><button type="button" class="btn btn-ghost btn-sm" id="quizRetake">Retake the check</button>';
    done.classList.add('show');
    $$('.kq', box).forEach(function(q){ q.classList.remove('cur'); });
    set('quiz-score', String(score));
    if(score >= PASS) progDone('quiz');
    $('#quizRetake').addEventListener('click', render);
    if(window.chartPager) window.chartPager.goToEl(done);
  }
  box.addEventListener('click', function(e){
    if(e.target.closest('button[data-next]')){ show(cur + 1); return; }
    if(e.target.closest('button[data-finish]')){ finish(); return; }
    var b = e.target.closest('button[data-o]'); if(!b || b.disabled) return;
    var q = b.closest('.kq'), i = parseInt(q.getAttribute('data-i'), 10), oi = parseInt(b.getAttribute('data-o'), 10), it = QUIZ[i];
    var ok = oi === it.a;
    $$('button[data-o]', q).forEach(function(x){ x.disabled = true; x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); if(parseInt(x.getAttribute('data-o'), 10) === it.a) x.classList.add('is-answer'); });
    q.classList.add(ok ? 'right' : 'wrong');
    q.querySelector('.kq-x').innerHTML = '<b>' + (ok ? 'Right. ' : 'Not quite. The answer is: ' + esc(it.opts[it.a]) + '. ') + '</b>' + esc(it.x);
    if(!answered[i]){ answered[i] = 1; if(ok) score++; }
    if(status) status.textContent = Object.keys(answered).length + ' of ' + QUIZ.length + ' answered.';
  });
  render();
})();

SECTIONS.forEach(function(s){ if(progIs(s.k)) turnDone(s.k); });


/* ══════════ print my takeaway: the drafts, commitments, and score, on white ══════════ */
function buildPrint(){
  var sheet = $('#printSheet'); if(!sheet) return;
  var done = SECTIONS.filter(function(s){ return progIs(s.k); }).length;
  var score = get('quiz-score'), commits = (function(){ try{ var v = JSON.parse(get('commit') || '[]'); return Array.isArray(v) ? v : []; }catch(e){ return []; } })();
  var today = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  var html = '<header class="ps-head"><img src="../assets/img/vu-lockup-black.png" alt="Vanderbilt University" width="166" height="43" /><div><span class="ps-k">Leadership Redefined</span><h1>' + (D.PRINT_TITLE || 'My takeaway') + '</h1><p>' + esc(today) + '</p></div></header>';
  html += '<section class="ps-row"><div class="ps-stat"><b>' + done + '/' + SECTIONS.length + '</b><span>activities complete</span></div><div class="ps-stat"><b>' + (score === null ? '-' : esc(score) + '/' + QUIZ.length) + '</b><span>quick check score</span></div></section>';
  Object.keys(D.BUILDS || {}).forEach(function(k){
    var b = D.BUILDS[k]; var txt = b.tpl(bAll(k), bVal);
    html += '<section><h2>' + esc(b.title) + '</h2><p class="ps-write" style="white-space:pre-wrap">' + esc(txt) + '</p></section>';
  });
  html += '<section class="ps-moves"><h2>My commitments</h2><ol class="ps-checks">' + COMMITS.map(function(c, i){ return '<li class="' + (commits[i] ? 'on' : '') + '"><span class="ps-box" aria-hidden="true">' + (commits[i] ? '&#10003;' : '') + '</span><span class="ps-t"><b>' + esc(c[0]) + '.</b> ' + esc(c[1]) + '</span></li>'; }).join('') + '</ol></section>';
  html += '<p class="ps-foot">Crescere aude. Dare to grow.</p>';
  sheet.innerHTML = html;
}
window.addEventListener('beforeprint', buildPrint);
document.addEventListener('click', function(e){
  if(!e.target.closest('[data-print]')) return;
  narrStop(); buildPrint();
  try{ window.print(); }catch(err){ toast('Printing is not available here. Use your browser menu to print.'); }
});


/* ══════════ copy to clipboard ══════════ */
$$('[data-copytext]').forEach(function(b){
  b.addEventListener('click', function(){
    var txt = b.getAttribute('data-copytext').replace(/\\n/g, '\n');
    var ok = function(){ var o = b.textContent; b.textContent = 'Copied'; setTimeout(function(){ b.textContent = o; }, 1600); };
    if(navigator.clipboard) navigator.clipboard.writeText(txt).then(ok, function(){ window.prompt('Copy this:', txt); });
    else window.prompt('Copy this:', txt);
  });
});

/* ══════════ exit: close the window when the LMS opened it, otherwise back to the start ══════════ */
(function(){
  var b = $('#exitBtn'); if(!b) return;
  b.addEventListener('click', function(){
    narrStop();
    if(C.exitUrl){ location.href = C.exitUrl; return; }
    try{ window.close(); }catch(e){}
    window.setTimeout(function(){ if(window.chartPager) window.chartPager.go(0, { focus:true }); toast(D.EXIT_TOAST || 'You can close this tab.'); }, 200);
  });
})();

progRender();
/* for tests */
window.LR_ENGINE = { SCENARIOS: SCENARIOS, QUIZ: QUIZ, DRILLS: DRILLS };
})();

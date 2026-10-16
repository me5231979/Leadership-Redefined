/* Program home: the spoken welcome. One button plays and pauses the recorded clip;
   the same words are on the page under "Read the welcome". No dashes. */
(function(){
  'use strict';
  var b = document.querySelector('.lr-welcome'); if(!b) return;
  var lab = b.querySelector('span'), a = null;
  function ui(on){ b.setAttribute('aria-pressed', on ? 'true' : 'false'); lab.textContent = on ? 'Pause the welcome' : 'Listen: welcome and how to start'; }
  b.addEventListener('click', function(){
    if(!a){ a = new Audio(b.getAttribute('data-src')); a.addEventListener('ended', function(){ ui(false); a.currentTime = 0; }); a.addEventListener('error', function(){ ui(false); lab.textContent = 'Audio unavailable: read the welcome below'; }); }
    if(a.paused){ var p = a.play(); if(p && p.catch) p.catch(function(){ ui(false); }); ui(true); } else { a.pause(); ui(false); }
  });
})();

#!/usr/bin/env python3
"""Assemble each Leadership Redefined course into one self-contained HTML file.

Shell, styles, pager, and engine are shared (src/); each course supplies a
config (course.json) and its body (body.html). Output: <course>/index.html.
Run from the repo root: python3 tools/build.py
"""
import json, re, pathlib, html

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'src'
COURSES = ['course-two']  # course-one now uses the Voyage engine (course-one/index.html is hand-authored)


def brand_css():
    css = (SRC / 'ws.css').read_text()
    # Off-brand colors in the reference source: map to the approved palette.
    css = css.replace('--vu-oak:#8C6822', '--vu-oak:#946E24').replace('--vu-err:#A94438', '--vu-err:#777777')
    css = css.replace('#8C6822', '#946E24')
    # Oak drops below 4.5:1 on cream, so cream sections carry black accents.
    css = css.replace('#7A5C1E', '#1C1C1C')
    css = css.replace("url('../assets/fonts/", "url('../assets/fonts/")
    return css + '\n' + (SRC / 'extra.css').read_text()


ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'


def build(name):
    d = ROOT / name
    cfg = json.loads((d / 'course.json').read_text())
    body = '\n'.join(f.read_text() for f in sorted((d / 'parts').glob('*.html')))
    secs = cfg['sections']
    n = len(secs)
    nav_links = '\n'.join(f'          <a href="#{k}">{html.escape(t)}</a>' for k, t in cfg['nav'])
    mlinks = []
    for s in secs:
        mlinks.append(f'  <a class="mlink" href="#{s["k"]}" data-prog="{s["k"]}"><span class="mono">{s["no"]}</span>{html.escape(s["name"])}<span class="mdone" aria-hidden="true">Done</span></a>')
    lr = {'prefix': cfg['prefix'], 'course': cfg['title'], 'feedbackTo': cfg['contact'],
          'sections': secs, 'plan': cfg['plan']}
    out = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{html.escape(cfg['title'])} · Leadership Redefined</title>
<meta name="description" content="{html.escape(cfg['description'])}" />
<meta name="theme-color" content="#1C1C1C" />
<!--
  LEADERSHIP REDEFINED · {html.escape(cfg['title'])}
  Built by tools/build.py from src/ (shared shell, styles, pager, engine) and
  {name}/body.html + {name}/course.json. Edit those, then rebuild; do not
  hand-edit this file. Pattern, brand, and pager follow the Working Smarter
  reference course (me5231979/Course_Library, learn/index.html).
  Progress: per-section booleans plus the last-open page, in localStorage under
  "{cfg['prefix']}". Typed text is never stored and nothing is sent anywhere.
  An internal training prototype, not an official Vanderbilt University site.
-->
<link rel="icon" href="../assets/img/favicon.svg" type="image/svg+xml" />
<script>document.documentElement.classList.add('js','paged');</script>
<style>
{brand_css()}
</style>
</head>
<body>
<a href="#main" class="skip">Skip to content</a>

<header class="nav" id="nav">
  <div class="wrap">
    <div class="bar">
      <a class="logo" href="#top" aria-label="Vanderbilt University, {html.escape(cfg['title'])} home">
        <img src="../assets/img/v-lockup-white@2x.png" alt="Vanderbilt University" width="166" height="36" decoding="async" />
      </a>
      <div class="bar-r">
        <nav class="links" aria-label="Primary">
{nav_links}
          <a class="btn btn-gold btn-sm nav-cta" href="#capstone">Capstone</a>
        </nav>
        <button class="prog-btn" id="progBtn" aria-expanded="false" aria-controls="progPanel">
          <span class="pw">Progress</span> <b id="progCount">0/{n}</b>
        </button>
        <button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <span class="b b1" aria-hidden="true"></span><span class="b b2" aria-hidden="true"></span><span class="b b3" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>
  <span class="prog-track" aria-hidden="true"><span class="prog-fill" id="progFill"></span></span>
</header>

<div class="prog-panel" id="progPanel" role="region" aria-label="Your progress" hidden>
  <div class="pp-h">Your progress</div>
  <p class="prog-sum" id="progSum">0 of {n} sections complete.</p>
  <ol class="prog-list" id="progList"></ol>
  <p class="prog-fine">Progress is saved only in this browser: completion flags, nothing else. Nothing is sent or reported. Reset it anytime in the footer.</p>
  <p class="prog-fine prog-warn" id="progStorageNote" hidden>Heads up: your browser is blocking saved progress (this happens in private browsing). Marks work during this visit but reset when you close the tab.</p>
</div>
<p class="sr" id="progStatus" role="status" aria-live="polite"></p>

<nav class="mobile-menu" id="mobileMenu" aria-label="Mobile">
{chr(10).join(mlinks)}
  <div class="mprog" id="mprogLine">0 of {n} sections complete</div>
  <div class="mfoot">{html.escape(cfg['contact'])}</div>
</nav>

<main id="main"><span id="top"></span>
{body}
</main>

<footer>
  <div class="wrap">
    <div class="fcenter">
      <img src="../assets/img/vu-centered-white@2x.png" alt="Vanderbilt University" width="100" height="105" loading="lazy" decoding="async" />
      <p class="fprogram">Leadership Redefined &middot; {html.escape(cfg['title'])}</p>
      <p class="flegal">&copy; <span id="yr">2026</span> Leadership Redefined &middot; Vanderbilt. An internal training prototype, <b>not an official Vanderbilt University site</b>. Accessibility: this course is built to WCAG 2.2 Level AA; if anything here gets in your way, tell us at <a href="mailto:{cfg['contact']}">{cfg['contact']}</a> and we will fix it or get you the content another way. {cfg['crosslink']}</p>
      <button type="button" class="preset" id="progReset">Reset progress<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7M21 3v6h-6"/></svg></button>
    </div>
  </div>
</footer>

<div class="book-bar" id="bookBar" role="navigation" aria-label="Book controls">
  <div class="bb-left">
    <span class="bb-sec" id="bbSec" aria-hidden="true">Welcome</span>
    <button type="button" class="bb-done" id="bbDone" aria-pressed="false" hidden>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
      <span class="bb-done-t">Mark done</span></button>
  </div>
  <nav class="bb-dots" id="bbDots" aria-label="Course sections"></nav>
  <div class="bb-ctl">
    <span class="bb-count" id="bbCount" aria-live="polite">1 / 1</span>
    <button type="button" class="bb-btn" id="pgPrev" aria-label="Previous page">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg></button>
    <button type="button" class="bb-btn" id="pgNext" aria-label="Next page">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button>
  </div>
</div>

<script>window.LR = {json.dumps(lr, ensure_ascii=False)};</script>
<script>
{(SRC / 'pager.js').read_text()}
</script>
<script>
{(SRC / 'app.js').read_text()}
</script>
</body>
</html>
'''
    out = out.replace('{{ARROW}}', ARROW)
    (d / 'index.html').write_text(out)
    dashes = len(re.findall('[—–]|&mdash;|&ndash;', out))
    print(f'{name}/index.html  {len(out)//1024} KB  dashes={dashes}')


def build_hub():
    css = brand_css().replace("url('../assets/fonts/", "url('assets/fonts/")
    body = (SRC / 'hub.html').read_text().replace('{{ARROW}}', ARROW)
    out = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Leadership Redefined · After the Symposium</title>
<meta name="description" content="Leadership Redefined: the four self-paced weeks after the Symposium, two courses, and the capstone brief." />
<meta name="theme-color" content="#1C1C1C" />
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml" />
<style>
{css}
.hub .hero{{ min-height:auto; }}
@media (max-width:760px){{ .hub .resp-grid{{ grid-template-columns:1fr !important; }} }}
</style>
</head>
<body>
<a href="#main" class="skip">Skip to content</a>
{body}
</body>
</html>
'''
    (ROOT / 'index.html').write_text(out)
    print('index.html', len(out)//1024, 'KB')


if __name__ == '__main__':
    build_hub()
    for c in COURSES:
        if (ROOT / c / 'course.json').exists():
            build(c)

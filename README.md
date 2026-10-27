# Leadership Redefined: the weeks after the Symposium

Two self-paced, narrated courses for the Vanderbilt Leadership Redefined cohort, plus a program home page.

Both courses are built on the **Vanderbilt Voyage Online** engine (`me5231979/Voyage_Online`) and match its look and copy density:

- one idea per page
- each page has a headline, one line of why, and one activity
- narration carries the depth
- details sit one tap away

## Live site

GitHub Pages serves the site from the `gh-pages` branch, which mirrors the course branch.

| Page | Link |
|---|---|
| Program home | https://me5231979.github.io/Leadership-Redefined/ |
| Course One | https://me5231979.github.io/Leadership-Redefined/course-one/ |
| Course Two | https://me5231979.github.io/Leadership-Redefined/course-two/ |

To publish, run `git push -f origin claude/eloquent-mendel-0qq5xp:gh-pages`.

## The courses

Each course takes about 45 minutes: about 17 minutes of narration, short Chancellor videos, and activities that make the learner sort, decide, or write. Every teaching claim traces to the presenters' decks or the Chancellor's video transcripts; outside research appears only in collapsed Go deeper blocks and on the final page.

**Course One** (week of November 2): 20 pages, 16 tracked activities.

| Module | What it covers |
|---|---|
| 1. Vision, Strategy & the Future of Vanderbilt | The vision, the three areas of focus, and the four problems (sort four moments); the reputation engine and its three flywheels (sort four moments); the momentum numbers (guess, then see the Chancellor's charts); a wrap with one team rule and one move |
| 2. Mission and Margin | The Chancellor's video and two situations; his eight slides as a narrated story; the mission and margin statement (starts brief section 3); a wrap |
| 3. Reputational Stewardship | The Chancellor's video, the trust radar, and two situations; where reputation is made (a 14-scene narrated story, then place four stories); when to act (an 8-scene story, then sort six actions); the reputational statement (starts brief section 4); a wrap |
| Your brief | Focus area practice; sections 1 to 3 written in the live brief; a quick check; the week's moves and Teams prompt 1 |

**Course Two** (week of November 9): 21 pages, 19 tracked activities.

| Module | What it covers |
|---|---|
| 4. Communication, Storytelling & Brand | The Chancellor's video; Steven K. Ertel's brand and reputation gap, where Vanderbilt is today, the fighter brand and three reputation flywheels (sort six real brand and reputation assets), air cover and the ground game, the tempo, and the payoff in his numbers ($4.5B, 65.6% yield, Davos, 120+ universities). Source: Ertel's October 29, 2026 deck |
| 5. Entrepreneurial Mindset | The Chancellor's video and John M. Lutz's diagnosis (sort four weaknesses); the turnaround numbers; the change moves (sort four initiatives); radical collaboration (starts sections 4 and 5); reframe and pilot (starts sections 5 and 6); a wrap |
| 6. High-Performing Teams | The Chancellor's video and Candice S. Lee's six principles, each cited; three team moments; a wrap |
| Your brief | Strong metrics practice; sections 4 to 7 written in the live brief; a quick check; the week's moves and Teams prompt 2; carry it forward |

Every writing box opens with one line on its purpose: synthesize the idea in your own words, codify it as something your team can use, then apply it with your team.

### Screens, not scrolling

Every page is designed to fit one 1440 by 900 screen. A lesson with a video, story, or deck graphic is split into a concept screen (the idea on the left, the media on the right) and a separate Your turn screen for the activity (`data-pg` markers inside the section; PLAN mode `pages`). Ertel's and Lutz's key slides each get a deck screen of four cards. The two draft pages still scroll a little, because they hold writing.

### The live brief inside the courses

The draft pages embed the brief page itself (`brief/?embed=1&s=1-3` and `s=4-7`), so what a learner writes there is saved straight into the full brief: one copy, no drift. The frame reports its height and progress to the course page, which marks the page done when every section has text.

### Presenter cards

Each module's presenter appears with portrait, name, and title: Chancellor Daniel Diermeier (Modules 1, 2, and 3), Steven K. Ertel (Module 4), John M. Lutz (Module 5), and Candice S. Lee (Module 6). Portraits live in `assets/img/people/`; a card shows initials if its photo is missing.

### Core content and Go deeper

Each lesson's core pages teach only what the module decks and presenters taught: the Chancellor's University Strategy, Mission and Margin, and Reputation Stewardship presentations; Vice Chancellor Ertel on brand; Vice Chancellor Lutz on the fundraising turnaround; and Candice Storey Lee's own words on teams: six principles she reviewed for this program, cited to her and to Vanderbilt News.

Outside material (the Mission and Margin and Reputation Rules books, Duarte, Snowden and Boone, O'Reilly and Tushman, Edmondson, Hackman, Project Aristotle, and the value stick) is never taught as core. It sits in collapsed Go deeper blocks and in the links on each course's final page.

### Module wraps

Each module ends with a wrap: three key ideas and a short builder to synthesize the idea, codify it as a rule your team can use, and apply it this week. The answers feed the printable takeaway.

### The teaching layer

Added after an instructional audit, which found that concepts were named on screen but taught only in the narration.

- **"The idea" cards on every concept page.** Each card gives a definition, how the concept works, and an example. Learners see them before they practice.
- **Worked examples for every builder** ("See a strong example").
- **A "Read along" transcript of the narration on every page,** so the depth is on screen for anyone not listening.
- **A wrap-up page after Lessons 1, 2, and 3.** Each shows three key ideas, then asks learners to explain one back in their own words.
- **An eight-situation knowledge check.** It tests whether learners can apply each idea, not whether they remember a definition. Passing is six of eight.

Answers typed into the builders save in the learner's browser only. They fold into:

- the brief drafts
- a Teams post starter
- a printable takeaway

## Files

- `course-*/index.html`: the pages.
- `course-*/content.js`: everything that drives the activities (drills, situations, tiles, builders, quiz, commitments).
- `course-*/narration-scripts.js`: the words for every narration clip.
- `course-*/config.js`: the contact address, video files and caption slots, and the narration folder.
- `assets/js/lr-engine.js`: the shared engine. It is the Voyage `app.js` made generic, plus three additions: builders, the allocator, and the self-check.
- `assets/js/pager.js`: book mode.
- `assets/css/`: the Voyage styles (`course.css`, `foundation.css`, `voyage.css`, `nav.css`) plus `lr.css`.
- `assets/video/`: the Chancellor's five intros: Communication, Mission and Margin, Entrepreneurial Mindset, Reputational Stewardship, High-Performing Teams.

## Narration

The scripts are in `course-*/narration-scripts.js`. There is one script per page (about 35 minutes across both courses), plus short clips for each stop, card, principle, and situation.

Every page script follows the same adult learning arc:
- a breadcrumb back to the last page
- why it matters to the learner this month
- the idea taught plainly, with an example
- a prompt to connect it to the learner's own work
- what to do on the page
- a breadcrumb forward

`node tools/narration-check.mjs course-one` confirms four things:
- every page has a script
- every page has a forward breadcrumb
- every teaching page has an experience prompt
- Listen reads the page aloud

### Until the voice is recorded

While `useBrowserVoice: true` is set in each `config.js`, Listen and Auto read each script aloud in the browser's built-in voice.

### Recording the real voice

1. Add the `ELEVENLABS_API_KEY` repository secret.
2. Run **Record narration with ElevenLabs** from the Actions tab.

The workflow records the clips in ElevenLabs voice `v3p1kjzUvro6S76qmYmH` (set in `.github/tts.json`, with the same settings as Voyage Online), writes them to `assets/audio/<course>/`. It then sets `useBrowserVoice: false` so the recordings play, and publishes the site.

## Your capstone brief

`brief/` is one page for the whole brief: all seven sections, filled in automatically from what learners write in Course One (sections 1 to 3) and Course Two (sections 4 to 7). Both courses run from the same site and the same SCORM package, so the brief carries from course to course. Learners can edit any section (their edits are kept), print it or save it as a PDF, download it for Word, or copy it into the pod's shared document. It is linked from the program home, both courses' navigation, the draft pages, and the "This week" pages.

## Carousels

Any element with `data-car` becomes a carousel: one slide at a time, previous and next buttons, numbered dots, arrow keys, and no autoplay. With `data-car-prog="key"` it is also an activity, done when every slide has been seen. Module 1's nine charts, Module 3's eight Mission and Margin slides, and Module 5's five reputation slides each use one, so a run of the Chancellor's graphics takes one page.

## SCORM package

One SCORM package holds the landing page and both courses. Upload it to the LMS as a single activity.

- **Build:** `node scripts/build-scorm.mjs` writes `dist/leadership-redefined-oracle-scorm2004.zip`: SCORM 2004 3rd Edition, set up for Oracle Learning, full-quality media. Add `1.2` for a SCORM 1.2 build, `--light` for 720p video and 96 kbps narration (about half the size), `--one` for a single zip under 30 MB with the narration inside (48 kbps mono) and the videos played from the live site, or `--stream` for a 5 MB package that plays the videos and narration from the live site (the LMS must allow me5231979.github.io). The full-quality zip is also published on the `scorm-latest` release. The **Build SCORM package** workflow also attaches the Oracle package to each run under Artifacts.
- **Oracle Learning:** the manifest sits at the zip root, no path has a space, and the package (about 145 MB) is far under Oracle's 1 GB limit. SCORM 2004 is used because it reports completion and success separately, which Oracle reads reliably, and it saves up to 64,000 characters of work so learners resume with their answers.
- **Launch:** the LMS opens `lms.html`, which shows the landing page first. Learners open Course One and Course Two from there, all in one session.
- **Tracking:** progress and answers are saved to the LMS (`cmi.suspend_data`), and progress is reported as a share of all activities (`cmi.progress_measure`). Status is *incomplete* until every activity in both courses is done, then *completed* and *passed*. No score is reported.

## Before launch

- **Captions.** Add a WebVTT captions file for each video in `assets/video/`, and set `captions` in each `config.js`. Captions are required for WCAG 2.2 AA.
- **Video for Vision and Strategy.** That section has no Chancellor intro video yet.
- **Alumni series.** Set `alumni.text` (and optionally `alumni.link`) in `course-two/config.js` to show the alumni series card on the Carry it forward page. It stays hidden while empty.
- **Candice Storey Lee quotes.** Verify them against their linked sources. They were gathered from search results; the source pages themselves were not opened.

## Testing

Serve the repo root first:

```
python3 -m http.server 8765
```

Then run the two checks:

- `node tools/smoke-v.mjs course-one [shotsDir]` drives every activity, then checks progress, persistence, overflow at 320px, and the console.
- `node tools/takeaway-check.mjs course-one` enters something in every field and makes a choice in every activity, then checks that each one appears in the printed takeaway, both live and after a reload.
- `node tools/a11y-audit.mjs path/to/axe.min.js course-one/ course-two/ index.html` runs axe-core with the WCAG 2.x A/AA tags at 1440px and 320px.

**Last run, 2026-10-02:**

- Smoke test: every activity completes in both courses (15/15 and 17/17), answers persist after reload, nothing overflows at 320px, and the console is clean.
- axe: zero serious or critical violations on both courses and the home page.

# Leadership Redefined, version 3: the design standard

Every page and activity in Course One and Course Two is rebuilt to this standard. Read it before you touch a page.
Course One Module 1 (sections with class `v3`) is the approved model; match its look and patterns.

## 1. The owner's requirements (verbatim intent)
- Redo the ENTIRE course: every page, every activity. A fresh look.
- Use the content in the final decks, respected and represented as is. Keep Candice Storey Lee's
  Module 6 content (her six principles and their wording); her activities may be redesigned.
- Cool activities throughout. The old pattern, a "Your turn" page with a question and two or three
  buttons, is banned. No page is headed "Your turn". Multiple choice only as a branching scenario
  with consequences.
- No unneeded white space; consistent spacing; content fills the screen; nothing crammed.
- Unpack content packed into click-throughs (multi-scene stories, collapsibles) into real pages.
- Every module STARTS with its Chancellor video when one exists (Module 2 reputational stewardship,
  Module 3 mission and margin, Module 4 communication, Module 5 entrepreneurial mindset, Module 6
  high-performing teams). Module 1 has none.
- No Everest quote anywhere.
- No redundancy: no page repeats an earlier page.
- Graphics match the speaker's slides exactly (render the deck page and rebuild faithfully). Example:
  the reputation dynamics chart must be the Chancellor's p23 chart, and "find the moment to act"
  happens on that chart.
- Self-check graphics (the trust radar) are large: at least 45vh, generous controls.
- No small blurry images: never display an image larger than its native pixel width divided by 1.5.
  The 400px speaker portraits are avatars only (about 120 to 200px). Use the 1200px Symposium photos
  for large Chancellor images.
- Narration on EVERY page: openers, video pages, activities, wrap-ups, quick check, this week, end.
- The capstone is NOT inside the courses. No capstone pages, practice, or questions in either course.
  The capstone lives on its own page, brief/index.html (steps, seven sections, what good looks like,
  example, fillable PDF download). Top nav "Capstone" links to ../brief/ and there is no separate
  "Brief (PDF)" item. Each course ends: Quick check, then This week (commit taps, Teams prompt, copy
  button, one commit "Work on sections 1 to 3 (or 4 to 7) of your pod's brief" with a link to the
  capstone page beside the list), then the end page with a gold "Go to the capstone" button.
- Best in class: instructionally sound, amazing UI and UX, easy for everyone, drives outcomes.
- The owner reviews only finished work: never share half-done pages.

## 2. Sources (the only places facts come from)
- Course One (Chancellor Daniel Diermeier, Modules 1 to 3): his FINAL Symposium deck (36 pages), his videos
  already in the course, the 2020 and 2026 footprint maps, and the growth-sites map (`CITIES` in
  course-one/content.js, with why, what, where you meet it, and links).
  Module 1 = p1 to p16 (+ footprint, growth sites). Module 2 Reputational Stewardship = p17 to p23.
  Module 3 Mission and Margin = p24 to p34.
- Module 4: Steve Ertel's FINAL deck (17 pages). Title exactly: "Steve Ertel, Vice Chancellor for
  Communications and Marketing and Chief Communications Officer".
- Module 5: Vice Chancellor John Lutz's final deck (41 pages). "DO" = development officers.
- Module 6: Candice Storey Lee; keep the existing content.
- Decisions: yield is 65.6% everywhere. Focus area 3 is "Values Driven Leadership". Course order follows
  each deck's order. No baseball chart (not in the deck). Women's basketball shows 27 with the deck's
  subtitle 29-5, as on the slide.
- Anything not in a source: only as clearly labeled hypothetical practice, or inside "Go deeper".
  Never attribute invented content to a speaker.

## 3. Learning design
- Each module opens with its video (if any), why it matters to you, and 2 or 3 can-do verbs.
- One idea per page: a headline, one short paragraph (max 45 words), one deck graphic or one activity,
  at most 3 short bullets.
- SEE (faithful deck graphic) -> UNDERSTAND (plain explanation) -> DO (activity) -> APPLY (your team).
- Feedback explains why, in the deck's words. Practice scenarios labeled hypothetical.
- Every module ends with a wrap-up: three ideas (deck wording) and a Build it "take it to your team".
- No typing anywhere. About 45 minutes per course.

## 4. Activity library (assets/js/lr-activities.js; contracts documented in its header)
Types: explore (hotspots on a slide), sort, place (on the deck's chart), order, match, flip, compare,
predict (estimate then reveal), branch (2 or 3 decisions with consequences), rate (self-check),
build (assemble from chips), spot (true/false or fact/myth with reasons), scrub (stages of a figure
on a draggable time line), chartset (display). Markup: `<p class="v-task" data-task="KEY">..</p>
<div data-act="KEY"></div>`; data in `LR_COURSE.ACTIVITIES.KEY`.
Each module uses at least four types; never the same type on consecutive pages.
Every activity works with mouse, touch, and keyboard, announces results, gives a reason, shows
completion, respects reduced motion, 24px minimum targets.

## 5. Visual and UX
- Brand: Vanderbilt palette and type; Libre Caslon headlines with exactly one italic word ending in a
  period; Inter body; Antonio labels. No em or en dashes anywhere.
- Layout (assets/css/lr-v3.css, scoped to `section.v3`): fluid em sizing, 5/7 grid up to about 1600px,
  spacing 8/16/24/32/48, content fills and centers. Every page fits 1920x1080, 1440x900, 1366x768,
  and 1280x720 without scrolling, before and after its activity; 375 and 320 wide work.
- Motion: headline soft blur-up, then copy, then activity; count-up numbers; charts draw in; each step
  400ms or less; all off under prefers-reduced-motion.

## 6. Narration
- One fresh script per page, 30 to 70 seconds, says what is on screen and what to do, bridges to the
  next page, numbers written for speech, no dashes. Keys `section/n` in course-*/narration-scripts.js.
  Remove keys for removed pages and delete their mp3s. Voice: .github/tts.json.

## 7. Done means
- smoke test, axe (zero serious/critical at 1440 and 320), takeaway check, fit check at all four sizes,
  image sharpness check, no dashes, no console errors, screenshots of every page reviewed by eye.

## 8. Saving work
- Save finished, tested work to GitHub promptly (a container restart wipes unpushed work).

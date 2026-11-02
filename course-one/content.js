/* ══════════ LEADERSHIP REDEFINED · COURSE ONE · content ══════════
   The Chancellor's Symposium talk, in the order of his FINAL deck, every page rebuilt to
   the version 3 standard (docs/design-v3.md) with the activity library (ACTIVITIES below,
   drawn by ../assets/js/lr-activities.js):
   Module 1: Vision, Strategy & the Future of Vanderbilt (deck pages 1 to 16);
   Module 2: Reputational Stewardship (his video, then pages 17 to 23);
   Module 3: Mission and Margin (his video, then pages 24 to 34).
   Then a quick check and this week's moves. The capstone lives on its own page (../brief/).
   Every teaching claim traces to the FINAL deck or to the Chancellor's two videos.
   Practice items are hypothetical. Learners never type in the course.
   Read by ../assets/js/pager.js and ../assets/js/lr-engine.js. No em or en dashes. */
window.LR_COURSE = {
  PLAN:[
    { sel:'section.hero', key:'home', label:'Welcome', mode:'whole' },
    { sel:'#week', key:'route', label:'This week', mode:'whole' },
    { sel:'#m1open', key:'m1', label:'Module 1: Welcome', mode:'whole' },
    { sel:'#vision', key:'vision', label:'Module 1: The vision', mode:'whole' },
    { sel:'#numbers', key:'numbers', label:'Module 1: The numbers', mode:'whole' },
    { sel:'#charts', key:'charts', label:'Module 1: Six more numbers', mode:'whole' },
    { sel:'#growth', key:'growth', label:'Module 1: Growth sites', mode:'whole' },
    { sel:'#flywheels', key:'flywheels', label:'Module 1: Reputation flywheels', mode:'whole' },
    { sel:'#engine', key:'engine', label:'Module 1: Name the flywheel', mode:'whole' },
    { sel:'#loop', key:'loop', label:'Module 1: How reputation enables the mission', mode:'whole' },
    { sel:'#resources', key:'resources', label:'Module 1: Match the resources', mode:'whole' },
    { sel:'#wrap1', key:'wrap1', label:'Module 1: Wrap-up', mode:'whole' },
    { sel:'#m2', key:'m2', label:'Module 2: The Chancellor on reputation', mode:'whole' },
    { sel:'#shapes', key:'shapes', label:'Module 2: What shapes reputation', mode:'whole' },
    { sel:'#radar', key:'radar', label:'Module 2: The trust radar', mode:'whole' },
    { sel:'#teamradar', key:'teamradar', label:'Module 2: Your team’s radar', mode:'whole' },
    { sel:'#terrain', key:'terrain', label:'Module 2: See the reputation terrain', mode:'whole' },
    { sel:'#coverage', key:'coverage', label:'Module 2: Reputation terrain', mode:'whole' },
    { sel:'#athletics', key:'athletics', label:'Module 2: Example, athletics', mode:'whole' },
    { sel:'#circle', key:'circle', label:'Module 2: The second circle', mode:'whole' },
    { sel:'#transcare', key:'transcare', label:'Module 2: Example, transgender care', mode:'whole' },
    { sel:'#dynamics', key:'dynamics', label:'Module 2: Reputation dynamics', mode:'whole' },
    { sel:'#early', key:'early', label:'Module 2: Early or late', mode:'whole' },
    { sel:'#wrap2', key:'wrap2', label:'Module 2: Wrap-up', mode:'whole' },
    { sel:'#m3', key:'m3', label:'Module 3: The Chancellor on mission and margin', mode:'whole' },
    { sel:'#achieve', key:'achieve', label:'Module 3: Achieving the vision', mode:'whole' },
    { sel:'#areassee', key:'areassee', label:'Module 3: See the areas of focus', mode:'whole' },
    { sel:'#areas', key:'areas', label:'Module 3: Areas of focus', mode:'whole' },
    { sel:'#problems', key:'problems', label:'Module 3: Problems to solve', mode:'whole' },
    { sel:'#pressure', key:'pressure', label:'Module 3: Why it matters', mode:'whole' },
    { sel:'#peers', key:'peers', label:'Module 3: Peer responses vary', mode:'whole' },
    { sel:'#coresee', key:'coresee', label:'Module 3: See the core idea', mode:'whole' },
    { sel:'#core', key:'core', label:'Module 3: The core idea', mode:'whole' },
    { sel:'#atvu', key:'atvu', label:'Module 3: At Vanderbilt', mode:'whole' },
    { sel:'#mindsee', key:'mindsee', label:'Module 3: See the leadership mindset', mode:'whole' },
    { sel:'#mindset', key:'mindset', label:'Module 3: Leadership mindset', mode:'whole' },
    { sel:'#leverssee', key:'leverssee', label:'Module 3: See the key levers', mode:'whole' },
    { sel:'#levers', key:'levers', label:'Module 3: Key levers', mode:'whole' },
    { sel:'#wrap3', key:'wrap3', label:'Module 3: Wrap-up', mode:'whole' },
    { sel:'#quiz', key:'quiz', label:'Quick check', mode:'whole' },
    { sel:'#nextstep', key:'nextstep', label:'This week', mode:'whole' },
    { sel:'#deeper', key:'deeper', label:'Go deeper', mode:'whole' },
    { sel:'#learn', key:'learn', label:'Keep going', mode:'whole', extras:['footer'] }
  ],
  SECTIONS:[
    { k:'vision', no:'01', name:'The vision', how:'Open all four phrases' },
    { k:'numbers', no:'02', name:'The numbers', how:'Predict three numbers' },
    { k:'growth', no:'03', name:'Growth sites', how:'Open all four growth sites' },
    { k:'flywheels', no:'04', name:'Reputation flywheels', how:'Turn all three cards' },
    { k:'engine', no:'05', name:'Name the flywheel', how:'Sort six moments' },
    { k:'loop', no:'06', name:'The reputation loop', how:'Open all seven parts of the slide' },
    { k:'resources', no:'07', name:'Match the resources', how:'Match four moments' },
    { k:'shapes', no:'08', name:'What shapes reputation', how:'Open all four parts of the slide' },
    { k:'radar', no:'09', name:'The trust radar', how:'Turn all four drivers' },
    { k:'teamradar', no:'10', name:'Your team’s radar', how:'Rate your team on all four drivers' },
    { k:'coverage', no:'11', name:'Reputation terrain', how:'Place four stories on the terrain' },
    { k:'athletics', no:'12', name:'Example: athletics', how:'Follow the story to the end' },
    { k:'circle', no:'13', name:'The second circle', how:'Turn all four cards' },
    { k:'transcare', no:'14', name:'Example: transgender care', how:'Open all four steps' },
    { k:'dynamics', no:'15', name:'Reputation dynamics', how:'Move through all five stages' },
    { k:'early', no:'16', name:'Early or late', how:'Reach an outcome' },
    { k:'achieve', no:'17', name:'Achieving the vision', how:'Open all four phrases' },
    { k:'areas', no:'18', name:'Areas of focus', how:'Sort four initiatives' },
    { k:'problems', no:'19', name:'Problems to solve', how:'Open all four problems' },
    { k:'peers', no:'20', name:'Peer responses vary', how:'Predict three counts' },
    { k:'core', no:'21', name:'Mission and margin', how:'Sort five moments' },
    { k:'atvu', no:'22', name:'At Vanderbilt', how:'Reach an outcome' },
    { k:'mindset', no:'23', name:'Leadership mindset', how:'Match four moves' },
    { k:'levers', no:'24', name:'Key levers', how:'Rate your team on all four levers' },
    { k:'quiz', no:'25', name:'Quick check', how:'Score 6 of 8' },
    { k:'nextstep', no:'26', name:'This week', how:'Commit to all four moves' }
  ],
  ROUTE_PROG:'route',
  ROUTE_NARR:'route/g',
  STOPS:[
    {
      h:'Module 1: Vision, Strategy &amp; the Future of <em>Vanderbilt</em>',
      p:'Two visions, the numbers since 2020, Vanderbilt’s footprint and growth sites, and how reputation enables the mission.',
      tags:['The vision', 'The numbers', 'Footprint and growth sites', 'Reputation flywheels and the loop']
    },
    {
      h:'Module 2: Reputational <em>Stewardship</em>',
      p:'The Chancellor on video, then what shapes reputation, the trust radar, the reputation terrain and two stories that moved across it, and when to act.',
      tags:['The Chancellor’s video', 'The trust radar', 'The terrain and the second circle', 'When to act']
    },
    {
      h:'Module 3: Mission and <em>Margin</em>',
      p:'The Chancellor on video, then achieving the vision, the areas of focus and four problems, peers under pressure, mission and margin, and the leadership mindset.',
      tags:['The Chancellor’s video', 'Areas of focus and problems', 'Peer responses vary', 'Mindset and key levers']
    },
    {
      h:'Quick check and this <em>week</em>',
      p:'Eight situations to test what you learned, then your moves for the week: your pod, the Teams prompt, and the capstone page.',
      tags:['Quick check', 'Teams prompt 1', 'Your four moves', 'The capstone page']
    }
  ],
  /* ══════ Module 1 activities (version 3). Contracts: the header of ../assets/js/lr-activities.js ══════
     Every claim follows the FINAL deck wording; every practice moment is labeled hypothetical. */
  ACTIVITIES:{
    vision:{
      type:'explore',
      slides:[
        { label:'Vanderbilt Vision', html:'Vanderbilt will [[define|define, and be,]] the [[great|great university of the 21st century]].' },
        { label:'Industry Vision', html:'Vanderbilt will help [[reclaim|reclaim the essential role of leading research universities]] in [[prosperity|driving American prosperity]].' }
      ],
      spots:{
        define:{ title:'Define, and be', text:'Two jobs in one line. To define is to set the standard that others follow. To be is to meet that standard in the work itself, every day, including your team’s.' },
        great:{ title:'The great university of the 21st century', text:'The aim is greatness for this century. The next pages show the numbers since 2020, so you can judge the progress for yourself.' },
        reclaim:{ title:'Reclaim the essential role', text:'To reclaim a role is to win it back. This vision reaches past Vanderbilt, to leading research universities as a group.' },
        prosperity:{ title:'Driving American prosperity', text:'This is the role: research universities as drivers of the country’s prosperity. Vanderbilt will help lead that work.' }
      },
      prompt:'Tap a gold phrase on either slide. Each one opens here.',
      done:'You opened all four phrases in the two visions.'
    },
    numbers:{
      type:'predict',
      rounds:[
        { title:'Undergraduate Selectivity', chart:0, q:'In 2020-21, Vanderbilt admitted 11.6% of undergraduate applicants. What share did it admit in 2026-27?', min:0, max:15, step:0.1, start:9, post:'%', dec:1, answer:4.6, close:1.5, x:'Selectivity fell from 11.6% in 2020-21 to 4.6% in 2026-27. Yield, the share of admitted students who enroll, rose from 39.9% to 65.6%.' },
        { title:'Net New Commitments', chart:2, q:'Net new commitments were $127M in FY20. What were they in FY26?', min:0, max:800, step:5, start:300, pre:'$', post:'M', dec:0, answer:757, close:100, x:'Net new commitments rose to $757M in FY26, about six times the FY20 figure.' },
        { title:'Football Wins', chart:6, q:'The 2020 football team went 0-9, in a season shortened by the COVID-19 pandemic. How many regular-season games did the 2025 team win?', min:0, max:12, step:1, start:6, dec:0, answer:10, close:1, chartMax:12, x:'The 2025 football team had its first-ever 10-win regular season.' }
      ],
      done:'Three numbers predicted. The next page shows six more of the Chancellor’s charts.'
    },
    charts:{ type:'chartset', charts:[1, 3, 4, 5, 7, 8] },
    flywheels:{
      type:'flip',
      rvName:'the flywheels slide',
      figure:'<div class="lr-deck"><svg viewBox="20 20 420 420" aria-hidden="true" focusable="false"><defs><path id="lrFwT0" d="M72.1 281.3 A166 166 0 0 1 201.2 66.5"/><path id="lrFwT1" d="M264.5 67.6 A166 166 0 0 1 386.0 286.8"/><path id="lrFwT2" d="M102.8 336.7 A166 166 0 0 0 353.4 341.1"/><linearGradient id="lrVg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3DFA6"/><stop offset=".5" stop-color="#CFAE70"/><stop offset="1" stop-color="#946E24"/></linearGradient></defs><path data-rv="2" d="M48.3 303.4 A196 196 0 0 1 202.7 35.9 L227.1 64.0 L211.1 95.3 A136 136 0 0 0 103.9 280.9 L69.7 273.0 Z" class="fw fw1" data-hi="f1"/><text data-rv="2" class="fwt" dy="5"><textPath href="#lrFwT0" startOffset="50%" text-anchor="middle">Execution with Ambition</textPath></text><path data-rv="3" d="M257.3 35.9 A196 196 0 0 1 411.7 303.4 L375.2 310.5 L356.1 280.9 A136 136 0 0 0 248.9 95.3 L273.0 69.7 Z" class="fw fw2" data-hi="f2"/><text data-rv="3" class="fwt" dy="5"><textPath href="#lrFwT1" startOffset="50%" text-anchor="middle">Values-Driven Leadership</textPath></text><path data-rv="4" d="M384.5 350.7 A196 196 0 0 1 75.5 350.7 L87.7 315.5 L122.8 313.7 A136 136 0 0 0 337.2 313.7 L347.4 347.4 Z" class="fw fw3" data-hi="f3"/><text data-rv="4" class="fwt" dy="5"><textPath href="#lrFwT2" startOffset="50%" text-anchor="middle">Athletics Momentum</textPath></text><path data-rv="1" d="M168 178 H214 L230 232 L246 178 H292 L246 286 H214 Z" fill="url(#lrVg)"/><path data-rv="1" d="M214 178 L230 232 L230 286 H214 L190 230 Z" fill="#000" opacity=".12"/><text data-rv="1" x="230" y="318" text-anchor="middle" class="fwc">Reputation</text></svg></div>',
      cards:[
        { front:'Execution with Ambition', hi:'f1', back:'<p>Set big goals, then deliver them. Visible results add to Vanderbilt’s reputation.</p><p class="la-eg"><b>Hypothetical.</b> Facilities opens a renovated residence hall the week it promised.</p>' },
        { front:'Values-Driven Leadership', hi:'f2', back:'<p>Lead by the values the university says it holds: in public, and most of all under pressure.</p><p class="la-eg"><b>Hypothetical.</b> A student affairs director explains a hard decision plainly, by those values.</p>' },
        { front:'Athletics Momentum', hi:'f3', back:'<p>Wins put Vanderbilt in front of national audiences.</p><p class="la-eg"><b>From the numbers.</b> A first-ever 10-win football season and a Sweet 16 trip.</p>' }
      ],
      done:'All three flywheels turned. Next, sort six moments by the one each turns.'
    },
    engine:{
      type:'sort',
      noun:'moment',
      buckets:['Execution with Ambition', 'Values-Driven Leadership', 'Athletics Momentum'],
      groupLabel:'The three reputation flywheels',
      items:[
        { t:'<b>Facilities.</b> A residence hall renovation finishes on schedule, and students move in the week it was promised.', short:'Facilities: hall opens on time', a:0, why:'An ambitious goal, delivered as promised. Visible results add to Vanderbilt’s reputation.', hint:'What made it notable: a big goal, met on time.' },
        { t:'<b>Operations.</b> The events team runs a sold-out home game so smoothly that, for thousands of first-time visitors, it is a great first look at campus.', short:'Events: sold-out home game', a:2, why:'Success on the field puts Vanderbilt in front of new audiences, and the game becomes their first impression.', hint:'What drew the crowd to campus in the first place?' },
        { t:'<b>Student Relations.</b> A student affairs director makes a hard, public call on a campus event and explains it plainly, by the values the university holds.', short:'Student affairs: a hard call explained', a:1, why:'Acting on stated values in public, and explaining the call, turns this flywheel.', hint:'Look at how the decision was made and explained.' },
        { t:'<b>DAR.</b> Alumni watch parties for a national tournament run draw thousands, and many alumni reconnect with Vanderbilt.', short:'DAR: tournament watch parties', a:2, why:'Athletic success brings national attention, and alumni, back to the whole university.', hint:'What put Vanderbilt in front of all those alumni?' },
        { t:'<b>IT.</b> IT moves every campus account to a new sign-in system in one summer instead of three, with no lost access on move-in day.', short:'IT: new sign-in in one summer', a:0, why:'A bold goal, met with speed and visible results.', hint:'Speed, scale, and delivery point to one flywheel.' },
        { t:'<b>Operations.</b> HR keeps its promise of an open, respectful process for a policy change, even when a faster, quieter path is available.', short:'HR: open process kept', a:1, why:'People notice when leaders hold to their values under pressure.', hint:'What did HR hold to, when it would have been easier not to?' }
      ],
      done:'All six moments sorted.'
    },
    loop:{
      type:'explore',
      figure:'<div class="lr-deck"><svg viewBox="0 0 640 372" aria-hidden="true" focusable="false"> <defs><linearGradient id="lrLg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E7C77A"/><stop offset="1" stop-color="#8BA18E"/></linearGradient> <marker id="lrLa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#E7C77A"/></marker> <marker id="lrLb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8BA18E"/></marker> <marker id="lrLc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8BA18E"/></marker></defs> <path data-rv="2" d="M522 66 H584 V232 H526" fill="none" stroke="url(#lrLg)" stroke-width="4" marker-end="url(#lrLb)"/> <path data-rv="5" d="M118 232 H56 V66 H114" fill="none" stroke="url(#lrLg)" stroke-width="4" marker-end="url(#lrLa)"/> <rect data-rv="1" x="120" y="28" width="400" height="76" rx="8" class="lpg"/><text data-rv="1" x="320" y="78" text-anchor="middle" class="lpt">Reputation</text> <rect data-rv="3" x="120" y="194" width="400" height="76" rx="8" class="lps"/><text data-rv="3" x="320" y="244" text-anchor="middle" class="lpt">Resources</text> <path data-rv="4" d="M166 272 V292" class="lpa" marker-end="url(#lrLc)"/><path data-rv="4" d="M268 272 V292" class="lpa" marker-end="url(#lrLc)"/><path data-rv="4" d="M371 272 V292" class="lpa" marker-end="url(#lrLc)"/><path data-rv="4" d="M474 272 V292" class="lpa" marker-end="url(#lrLc)"/> <rect data-rv="4" x="120" y="298" width="92" height="56" rx="6" class="lpb"/><text data-rv="4" x="166" y="331" text-anchor="middle" class="lpu">Talent</text> <rect data-rv="4" x="222" y="298" width="92" height="56" rx="6" class="lpb"/><text data-rv="4" x="268" y="331" text-anchor="middle" class="lpu">Funding</text> <rect data-rv="4" x="325" y="298" width="92" height="56" rx="6" class="lpb"/><text data-rv="4" x="371" y="331" text-anchor="middle" class="lpu">Partnerships</text> <rect data-rv="4" x="428" y="298" width="92" height="56" rx="6" class="lpb"/><text data-rv="4" x="474" y="322" text-anchor="middle" class="lpu">Access and</text><text data-rv="4" x="474" y="340" text-anchor="middle" class="lpu">Influence</text> </svg></div>',
      pins:[
        { id:'rep', x:18.75, y:7.5 },
        { id:'attracts', x:91.25, y:40 },
        { id:'builds', x:8.75, y:40 },
        { id:'talent', x:18.75, y:80 },
        { id:'funding', x:34.7, y:80 },
        { id:'partners', x:50.8, y:80 },
        { id:'access', x:66.9, y:80 }
      ],
      spots:{
        rep:{ title:'Reputation', text:'The top of the Chancellor’s slide. Everything in the loop starts and ends here.' },
        attracts:{ title:'Reputation attracts resources', text:'The arrow down the right side. A strong reputation draws resources to Vanderbilt. The slide names four of them.' },
        builds:{ title:'Resources build reputation', text:'The arrow back up the left side. What those resources achieve builds more reputation, and the loop turns again.' },
        talent:{ title:'Talent', text:'The students, faculty, and staff who choose Vanderbilt. Remember yield: 65.6% of admitted students enrolled in 2026-27.' },
        funding:{ title:'Funding', text:'Gifts and research support. Net new commitments reached $757M in FY26, and research funding at VU and VUMC passed $1.4B in FY25.' },
        partners:{ title:'Partnerships', text:'Organizations that choose to work with Vanderbilt, like EPB, its partner in the Institute for Quantum Innovation in Chattanooga.' },
        access:{ title:'Access and influence', text:'A seat where decisions about research and higher education are made. It is how Vanderbilt can help reclaim the essential role of research universities.' }
      },
      prompt:'Tap each numbered spot on the slide, one through seven.',
      done:'You opened every part of the loop.'
    },
    resources:{
      type:'match',
      heads:['Hypothetical moment', 'Resource it brings'],
      left:[
        { t:'<b>IT.</b> A top security engineer turns down two other offers to join Vanderbilt IT.' },
        { t:'<b>DAR.</b> After years of DAR visits, an alumna makes her largest gift ever, to student scholarships.' },
        { t:'<b>Dining.</b> A national food company asks Vanderbilt Dining to co-design a new local-sourcing program.' },
        { t:'<b>Operations.</b> A federal agency invites Vanderbilt’s research finance office to help shape new grant rules.' }
      ],
      right:[ { t:'Talent' }, { t:'Funding' }, { t:'Partnerships' }, { t:'Access and influence' } ],
      show:[2, 0, 3, 1],
      why:[
        'Talent. A strong reputation helps every unit, IT included, win the people it wants most.',
        'Funding. Donors give where they trust the work will matter.',
        'Partnerships. Other organizations choose partners whose reputation adds to their own.',
        'Access and influence. A trusted reputation earns a seat where the rules for research are made.'
      ],
      hint:[
        'Who is choosing Vanderbilt here? A person.',
        'What did the alumna bring? Money for the work.',
        'An organization asking to work alongside Vanderbilt is which resource?',
        'Being asked into the room where the rules are made is which resource?'
      ],
      done:'All four matched. Each one, put to work, builds reputation again.'
    },
    /* ══════ Module 2: Reputational Stewardship (deck pages 17 to 23), version 3 ══════ */
    shapes:{
      type:'explore',
      figure:'<div class="c1g"><svg viewBox="0 0 440 440" aria-hidden="true" focusable="false"><defs><marker id="c1wsA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#D3AE6C"/></marker><marker id="c1wsG" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#A0A0A0"/></marker></defs><circle data-rv="3" cx="220" cy="220" r="180" fill="none" stroke="#5E5444" stroke-width="44"/><circle data-rv="3" cx="220" cy="220" r="202" fill="none" stroke="#C9A86B" stroke-width="1.5"/><circle data-rv="3" cx="220" cy="220" r="158" fill="none" stroke="#C9A86B" stroke-width="1.5"/><path id="c1wsR" d="M82.1 335.7 A180 180 0 0 0 357.9 335.7" fill="none"/><text data-rv="3" class="t-ring" dy="8"><textPath href="#c1wsR" startOffset="50%" text-anchor="middle">MEDIA</textPath></text><rect data-rv="1" x="130" y="128" width="180" height="48" fill="#2F3030" stroke="#8A8A8A"/><text data-rv="1" x="220" y="159" text-anchor="middle" class="t-box">UNIVERSITY</text><path data-rv="2" d="M220 178 V212" stroke="#A0A0A0" stroke-width="2" marker-end="url(#c1wsG)"/><rect data-rv="2" x="120" y="218" width="200" height="48" fill="#8BA18E"/><text data-rv="2" x="220" y="249" text-anchor="middle" class="t-box dk">AUDIENCES</text><path data-rv="4" d="M62 242 H112" stroke="#D3AE6C" stroke-width="2.5" marker-end="url(#c1wsA)"/><path data-rv="4" d="M378 242 H328" stroke="#D3AE6C" stroke-width="2.5" marker-end="url(#c1wsA)"/><path data-rv="4" d="M220 378 V274" stroke="#D3AE6C" stroke-width="2.5" marker-end="url(#c1wsA)"/></svg></div>',
      pins:[ { id:'uni', x:76, y:34.5 }, { id:'aud', x:80, y:66 }, { id:'media', x:50, y:9 }, { id:'arrows', x:50, y:76 } ],
      spots:{
        uni:{ title:'University', text:'The top box. The university speaks to its audiences: one arrow, from above. What Vanderbilt says and does, including what your team says and does, travels down this arrow.' },
        aud:{ title:'Audiences', text:'Everyone whose view of Vanderbilt matters, including the people your team serves. Their view of Vanderbilt is its reputation.' },
        media:{ title:'Media', text:'The ring around everything. The media surrounds the audiences, so people hear about Vanderbilt through the media, as well as from Vanderbilt itself.' },
        arrows:{ title:'Arrows from every side', text:'Count the arrows into the audiences: one from the university, three from the media, from the left, the right, and below. More voices reach your audiences than yours.' }
      },
      prompt:'Tap each numbered spot on the slide, one through four.',
      done:'You opened every part of the slide. Next, the trust radar.'
    },
    radar:{
      type:'flip',
      rvName:'the trust radar',
      figure:'<div class="c1g"><svg viewBox="-70 0 740 430" role="img" aria-label="The trust radar: a target of rings inside a gold ring, with a diamond reaching empathy at the top, transparency on the right, expertise at the bottom, and commitment on the left."><circle data-rv="1" cx="300" cy="215" r="146" fill="none" stroke="#D3AE6C" stroke-width="16"/><circle data-rv="1" cx="300" cy="215" r="134" fill="#6E7B6B"/><circle data-rv="1" cx="300" cy="215" r="118" fill="#A3AB8F"/><circle data-rv="1" cx="300" cy="215" r="100" fill="#6E7B6B"/><circle data-rv="1" cx="300" cy="215" r="84" fill="#A3AB8F"/><circle data-rv="1" cx="300" cy="215" r="66" fill="#6E7B6B"/><circle data-rv="1" cx="300" cy="215" r="50" fill="#A3AB8F"/><circle data-rv="1" cx="300" cy="215" r="32" fill="#6E7B6B"/><circle data-rv="1" cx="300" cy="215" r="18" fill="#A3AB8F"/><circle data-rv="1" cx="300" cy="215" r="7" fill="#6E7B6B"/><polygon data-rv="2" points="300,52 463,215 300,378 137,215" fill="#8BA18E" fill-opacity=".55"/><path data-rv="2" d="M300 52 V378 M137 215 H463" stroke="#6E7B6B" stroke-width="2"/><g data-rv="3" class="c1-hi" data-hi="em"><circle cx="300" cy="52" r="11"/><text x="300" y="30" text-anchor="middle" class="t-rad">EMPATHY</text></g><g data-rv="4" class="c1-hi" data-hi="tr"><circle cx="463" cy="215" r="11"/><text x="484" y="222" class="t-rad">TRANSPARENCY</text></g><g data-rv="5" class="c1-hi" data-hi="ex"><circle cx="300" cy="378" r="11"/><text x="300" y="414" text-anchor="middle" class="t-rad">EXPERTISE</text></g><g data-rv="6" class="c1-hi" data-hi="co"><circle cx="137" cy="215" r="11"/><text x="116" y="222" text-anchor="end" class="t-rad">COMMITMENT</text></g></svg></div>',
      cards:[
        { front:'Empathy', hi:'em', back:'<p>Show that you understand how the people affected feel.</p><p class="la-eg"><b>Sounds like.</b> &ldquo;We know the outage cost you a morning of work.&rdquo;</p>' },
        { front:'Transparency', hi:'tr', back:'<p>Say what you know, what you do not know yet, and what you are doing.</p><p class="la-eg"><b>Sounds like.</b> &ldquo;Here is what happened, and here is what we are still checking.&rdquo;</p>' },
        { front:'Expertise', hi:'ex', back:'<p>Show that the right people, with the right knowledge, are on it.</p><p class="la-eg"><b>Sounds like.</b> &ldquo;Our network engineers found the cause and tested the fix.&rdquo;</p>' },
        { front:'Commitment', hi:'co', back:'<p>Show that you will see it through, and own the result.</p><p class="la-eg"><b>Sounds like.</b> &ldquo;I own this. You will hear from me by Friday.&rdquo;</p>' }
      ],
      done:'All four drivers turned. Next, draw your own team&rsquo;s radar.'
    },
    teamradar:{
      type:'rate',
      title:'Your team&rsquo;s trust radar',
      eg:['We acknowledge how a decision lands on the people it affects before we explain it.', 'We share what happened and why, mistakes included, without waiting to be asked.', 'We answer with facts and the right experts, and say plainly when we do not know yet.', 'We do what we said we would do, by when we said, and follow up to confirm.'],
      dims:['Empathy', 'Transparency', 'Expertise', 'Commitment'],
      levels:['Not yet', 'Partly', 'Strongly'],
      low:'Your thinnest side: {dims}. That is where trust is thin. Invest there before you need it.',
      act:['Before your next announcement, ask: who does this affect most, and how will it land for them? Say that first.', 'Share one recent mistake and what you changed, in your next team update.', 'Name who on your team is the go-to expert for each topic, and route questions to them.', 'Pick one promise your team made this month, and report back on it by the date you gave.'],
      keep:'Rate it again after your next hard week, and ask one person you serve to rate it too.',
      high:'Every side reaches the outer ring, like the Chancellor&rsquo;s slide. Keep it there under pressure.'
    },
    terrain:{
      type:'reveal',
      label:'The Chancellor’s reputation terrain: societal importance up, audience interest across, with a kind of coverage in each corner',
      caption:'Reputation Terrain, from Chancellor Daniel Diermeier’s Symposium slides (p19).',
      figure:'<div class="c1g"><svg viewBox="0 0 640 420" aria-hidden="true" focusable="false"><defs><marker id="c1trW" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#fff"/></marker></defs>' +
        '<g data-rv="5"><path d="M84 382 V20" stroke="#fff" stroke-width="1.5" marker-end="url(#c1trW)"/><path d="M84 382 H624" stroke="#fff" stroke-width="1.5" marker-end="url(#c1trW)"/><text transform="translate(40 200) rotate(-90)" text-anchor="middle" class="t-ax">SOCIETAL</text><text transform="translate(62 200) rotate(-90)" text-anchor="middle" class="t-ax">IMPORTANCE</text><text x="354" y="412" text-anchor="middle" class="t-ax">AUDIENCE INTEREST</text></g>' +
        '<g data-rv="2"><text x="124" y="72" class="t-h">IN-DEPTH COVERAGE</text><text x="124" y="102" class="t-bul">• Experts</text><text x="124" y="128" class="t-bul">• Data</text><text x="124" y="160" class="t-note">The Economist</text></g>' +
        '<g data-rv="4"><text x="384" y="72" class="t-h">MASS-MARKET COVERAGE</text><text x="384" y="102" class="t-bul">• Testimony</text><text x="384" y="128" class="t-bul">• Drama</text><text x="384" y="160" class="t-note">60 Minutes</text></g>' +
        '<g data-rv="1"><text x="124" y="270" class="t-h">SIMPLE REPORTING</text><text x="124" y="300" class="t-note">Wire services</text></g>' +
        '<g data-rv="3"><text x="384" y="270" class="t-h">EXTENSIVE REPORTING</text><text x="384" y="300" class="t-note">Cable news (“infotainment”)</text></g></svg></div>',
      steps:[
        { label:'Simple reporting', t:'Bottom left. Few people follow the story, and little is at stake for society. Wire services cover it in a few lines.' },
        { label:'In-depth coverage', t:'Top left. The story matters to society, but a smaller audience follows it. Coverage runs on experts and data, like <i>The Economist</i>.' },
        { label:'Extensive reporting', t:'Bottom right. Many people are interested, but little is at stake. Cable news covers it as &ldquo;infotainment.&rdquo;' },
        { label:'Mass-market coverage', t:'Top right. High interest and high stakes. Coverage runs on testimony and drama, like <i>60 Minutes</i>.' },
        { label:'The two axes', t:'Societal importance runs up; audience interest runs across. Where a story sits on both decides the coverage it gets, and a story can move.' }
      ]
    },
    coverage:{
      type:'place',
      noun:'story',
      buckets:['In-depth coverage', 'Mass-market coverage', 'Simple reporting', 'Extensive reporting'],
      subs:['Experts, data. <i>The Economist</i>', 'Testimony, drama. <i>60 Minutes</i>', 'Wire services', 'Cable news (&ldquo;infotainment&rdquo;)'],
      grid:{ y:'Societal importance', x:'Audience interest', cells:[0, 1, 2, 3] },
      items:[
        { t:'<b>IT.</b> A wire service runs three paragraphs on Vanderbilt’s new chief information officer.', short:'IT: wire item on a new CIO', a:2, why:'Low on both axes: simple reporting, the wire services corner.', hint:'Few people outside campus will follow this, and little is at stake for society. Which corner is low on both?' },
        { t:'<b>Dining.</b> A national magazine analyzes how campus dining programs cut food waste, with data and expert interviews, featuring Vanderbilt Dining.', short:'Dining: magazine on food waste', a:0, why:'High importance, a narrower audience: in-depth coverage, which runs on experts and data.', hint:'It matters to society, but a smaller audience reads it. Look at the top left.' },
        { t:'<b>Student Relations.</b> Cable panels replay a viral clip of a move-in day mishap for two days.', short:'Student Relations: viral move-in clip', a:3, why:'High audience interest, little societal importance: extensive reporting, cable news &ldquo;infotainment.&rdquo;', hint:'Lots of viewers, not much at stake. Which corner is high interest, low importance?' },
        { t:'<b>Facilities.</b> A TV newsmagazine tells one student’s emotional story of a residence hall that lost heat for three days in a winter storm.', short:'Facilities: no heat, on TV', a:1, why:'High on both: mass-market coverage. On the slide it runs on testimony and drama, the <i>60 Minutes</i> corner.', hint:'A big audience and real stakes for student safety. Which corner is high on both?' }
      ],
      done:'All four stories placed. Next, watch a real story move across the terrain.'
    },
    athletics:{
      type:'scrub',
      label:'Example, athletics: move through the story',
      figure:'<div class="c1g"><svg viewBox="0 0 640 420" aria-hidden="true" focusable="false"><defs><marker id="c1axW" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#fff"/></marker></defs><path d="M84 382 V20" stroke="#fff" stroke-width="1.5" marker-end="url(#c1axW)"/><path d="M84 382 H624" stroke="#fff" stroke-width="1.5" marker-end="url(#c1axW)"/><text transform="translate(40 200) rotate(-90)" text-anchor="middle" class="t-ax">SOCIETAL</text><text transform="translate(62 200) rotate(-90)" text-anchor="middle" class="t-ax">IMPORTANCE</text><text x="354" y="412" text-anchor="middle" class="t-ax">AUDIENCE INTEREST</text><text x="430" y="336" class="t-h">TYPICAL SPORTS</text><text x="430" y="358" class="t-h">COVERAGE</text><g data-from="1"><path d="M452 296 V120" stroke="#fff" stroke-width="2" stroke-dasharray="2 6"/><path d="M444 132 L452 116 L460 132" fill="none" stroke="#fff" stroke-width="2"/><text x="470" y="214" class="t-note">Post on Kanye West</text></g><g data-from="2"><text x="400" y="92" class="t-h">RISE OF ANTISEMITISM</text></g><circle data-cursor cx="452" cy="308" r="12" fill="#D3AE6C" stroke="#1C1C1C" stroke-width="2.5"/></svg></div>',
      steps:[
        { label:'Typical sports coverage', t:'Where the story starts on the Chancellor&rsquo;s slide: high on audience interest, low on societal importance.', cy:0 },
        { label:'Post on Kanye West', t:'On the slide, a post on Kanye West is what moves the story. It climbs straight up the terrain.', cy:-96 },
        { label:'Rise of antisemitism', t:'Where it lands: a story about the rise of antisemitism. Audience interest is about the same. Societal importance is far higher, and the coverage changes with it.', cy:-190 }
      ],
      done:'You followed the story from start to finish. Next, why stories move: the second circle.'
    },
    circle:{
      type:'flip',
      rvName:'the second circle slide',
      figure:'<div class="c1g"><svg viewBox="0 0 480 480" role="img" aria-label="The second circle: a box labeled university points down to a box labeled constituents. A ring labeled media surrounds them. A second, outer ring labeled activists surrounds the media, with arrows pointing inward from every side."><defs><marker id="c1scA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#E0B23C"/></marker><marker id="c1scG" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#A0A0A0"/></marker></defs><g data-rv="4" class="c1-hi" data-hi="ca"><circle cx="240" cy="240" r="205" fill="none" stroke="#4B554E" stroke-width="38"/><circle cx="240" cy="240" r="224" fill="none" stroke="#E0B23C" stroke-width="1.5"/><circle cx="240" cy="240" r="186" fill="none" stroke="#E0B23C" stroke-width="1.5"/><path id="c1scR2" d="M83 372 A205 205 0 0 0 397 372" fill="none"/><text class="t-ring" dy="7"><textPath href="#c1scR2" startOffset="50%" text-anchor="middle">ACTIVISTS</textPath></text></g><g data-rv="3" class="c1-hi" data-hi="cm"><circle cx="240" cy="240" r="140" fill="none" stroke="#5E5444" stroke-width="34"/><circle cx="240" cy="240" r="157" fill="none" stroke="#E0B23C" stroke-width="1.5"/><circle cx="240" cy="240" r="123" fill="none" stroke="#E0B23C" stroke-width="1.5"/><path id="c1scR1" d="M133 330 A140 140 0 0 0 347 330" fill="none"/><text class="t-ring sm" dy="6"><textPath href="#c1scR1" startOffset="50%" text-anchor="middle">MEDIA</textPath></text></g><path data-rv="4" d="M240 18 V96" stroke="#E0B23C" stroke-width="2.5" marker-end="url(#c1scA)"/><path data-rv="4" d="M18 240 H96" stroke="#E0B23C" stroke-width="2.5" marker-end="url(#c1scA)"/><path data-rv="4" d="M462 240 H384" stroke="#E0B23C" stroke-width="2.5" marker-end="url(#c1scA)"/><path data-rv="3" d="M118 250 H150" stroke="#E0B23C" stroke-width="2.5" marker-end="url(#c1scA)"/><path data-rv="3" d="M362 250 H330" stroke="#E0B23C" stroke-width="2.5" marker-end="url(#c1scA)"/><path data-rv="4" d="M240 462 V276" stroke="#E0B23C" stroke-width="2.5" marker-end="url(#c1scA)"/><g data-rv="1" class="c1-hi" data-hi="cu"><rect x="172" y="160" width="136" height="40" fill="#2F3030" stroke="#8A8A8A"/><text x="240" y="186" text-anchor="middle" class="t-box sm">UNIVERSITY</text></g><path data-rv="2" d="M240 202 V224" stroke="#A0A0A0" stroke-width="2" marker-end="url(#c1scG)"/><g data-rv="2" class="c1-hi" data-hi="cc"><rect x="154" y="230" width="172" height="40" fill="#8BA18E"/><text x="240" y="256" text-anchor="middle" class="t-box sm dk">CONSTITUENTS</text></g></svg></div>',
      cards:[
        { front:'University', hi:'cu', back:'<p>The top box, as on the first map. The university speaks to its constituents.</p>' },
        { front:'Constituents', hi:'cc', back:'<p>The inner box: the people the university serves. The first map called them audiences.</p>' },
        { front:'Media', hi:'cm', back:'<p>The first ring. It surrounds the constituents and reaches them from the sides.</p>' },
        { front:'Activists', hi:'ca', back:'<p>The second circle, around the media. Its arrows press in on the media from every side, and one reaches the constituents directly.</p>' }
      ],
      done:'All four parts lit. Notice: in both of the Chancellor&rsquo;s examples, the push came from outside the university and the media. Next, his second example.'
    },
    transcare:{
      type:'explore',
      figure:'<div class="c1g"><svg viewBox="0 0 700 420" aria-hidden="true" focusable="false"><defs><marker id="c1axW2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#fff"/></marker><marker id="c1tgA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#D3AE6C"/></marker></defs><path d="M84 382 V20" stroke="#fff" stroke-width="1.5" marker-end="url(#c1axW2)"/><path d="M84 382 H684" stroke="#fff" stroke-width="1.5" marker-end="url(#c1axW2)"/><text transform="translate(40 200) rotate(-90)" text-anchor="middle" class="t-ax">SOCIETAL</text><text transform="translate(62 200) rotate(-90)" text-anchor="middle" class="t-ax">IMPORTANCE</text><text x="384" y="412" text-anchor="middle" class="t-ax">AUDIENCE INTEREST</text><text x="104" y="318" class="t-h">CLINICAL CARE</text><text x="104" y="340" class="t-h">GUIDELINES</text><path d="M252 300 H514" stroke="#D3AE6C" stroke-width="2" stroke-dasharray="2 6" marker-end="url(#c1tgA)"/><text x="384" y="282" text-anchor="middle" class="t-note">Social Media Campaign</text><path d="M530 290 V118" stroke="#D3AE6C" stroke-width="2" stroke-dasharray="2 6" marker-end="url(#c1tgA)"/><text x="548" y="196" class="t-note">Political Controversy</text><text x="548" y="216" class="t-note">About Transgender</text><text x="548" y="236" class="t-note">Issues</text><path d="M252 290 L516 112" stroke="#D3AE6C" stroke-width="1.5" stroke-dasharray="2 6" marker-end="url(#c1tgA)"/><text x="548" y="86" class="t-h">HARMING</text><text x="548" y="108" class="t-h">CHILDREN</text></svg></div>',
      pins:[ { id:'start', x:34, y:71.4 }, { id:'campaign', x:56, y:71.4 }, { id:'controversy', x:75.7, y:46 }, { id:'end', x:75.7, y:20 } ],
      spots:{
        start:{ title:'Clinical care guidelines', text:'Where the story starts on the slide: low on audience interest, and low on societal importance. Few people outside medicine would read it.' },
        campaign:{ title:'Social media campaign', text:'The first move is across. A social media campaign raises audience interest: many more people are now paying attention.' },
        controversy:{ title:'Political controversy about transgender issues', text:'The second move is up. Political controversy raises the societal importance of the same story.' },
        end:{ title:'Harming children', text:'Where it lands: high on both axes, framed as &ldquo;harming children.&rdquo; The dotted diagonal on the slide shows the whole journey, from one corner of the terrain to the other.' }
      },
      prompt:'Tap each numbered spot on the slide, one through four.',
      done:'You traced the whole story. Next, when to act.'
    },
    dynamics:{
      type:'scrub',
      rvName:'the reputation dynamics slide',
      label:'Reputation dynamics: move the marker through time',
      figure:'<div class="c1g c1dyn"><svg viewBox="30 228 1200 600" aria-hidden="true" focusable="false"><defs><marker id="c1dyW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#fff"/></marker><marker id="c1dyC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#E8B53A"/></marker><marker id="c1dyS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#98AE9A"/></marker></defs><rect data-from="1" data-until="1" x="280" y="240" width="262" height="84" rx="6" class="c1-glow"/><rect data-from="3" data-until="3" x="638" y="240" width="250" height="84" rx="6" class="c1-glow"/><text data-rv="1" x="227" y="342" text-anchor="end" class="d-int">INTENSITY</text><path data-rv="1" d="M252 764 V326" stroke="#fff" stroke-width="1.6" marker-end="url(#c1dyW)"/><path data-rv="1" d="M252 764 H1186" stroke="#fff" stroke-width="1.6" marker-end="url(#c1dyW)"/><text data-rv="1" x="1092" y="810" class="d-time">TIME</text><path data-rv="4" d="M301 323 V764" stroke="#fff" stroke-width="1.2" stroke-dasharray="1.5 3"/><path data-rv="4" d="M658 323 V764" stroke="#fff" stroke-width="1.2" stroke-dasharray="1.5 3"/><text data-rv="4" x="291" y="270" class="d-hd"><tspan class="go">OPTIMAL</tspan> TIME</text><text data-rv="4" x="291" y="310" class="d-hd">TO ACT</text><text data-rv="4" x="650" y="270" class="d-hd"><tspan class="go">TYPICAL</tspan> TIME</text><text data-rv="4" x="650" y="310" class="d-hd">TO ACT</text><path data-rv="2" d="M280 370 C320 362, 370 352, 420 362 C480 374, 530 410, 570 450 C610 492, 630 525, 658 557 C690 595, 730 640, 790 675 C850 705, 920 715, 1052 713" fill="none" stroke="#E8B53A" stroke-width="3" stroke-dasharray="10 7" marker-end="url(#c1dyC)"/><text data-rv="2" x="1080" y="723" class="d-ctl">CONTROL</text><path data-rv="3" data-rv-draw pathLength="1" d="M290 693 C360 700, 440 706, 520 695 C580 685, 615 660, 635 610 C648 585, 652 570, 658 557 C672 520, 690 450, 720 420 C770 375, 900 352, 1052 345" fill="none" stroke="#98AE9A" stroke-width="2.6" marker-end="url(#c1dyS)"/><text data-rv="3" x="1080" y="355" class="d-stk">STAKES</text><g data-from="0" data-until="0"><circle cx="282" cy="370" r="10" class="c1-dc"/><circle cx="292" cy="694" r="10" class="c1-ds"/></g><g data-from="1" data-until="1"><circle cx="301" cy="366" r="10" class="c1-dc"/><circle cx="301" cy="695" r="10" class="c1-ds"/></g><g data-from="2" data-until="2"><circle cx="480" cy="383" r="10" class="c1-dc"/><circle cx="480" cy="701" r="10" class="c1-ds"/></g><g data-from="3" data-until="3"><circle cx="658" cy="557" r="13" class="c1-dx"/></g><g data-from="4" data-until="4"><circle cx="950" cy="712" r="10" class="c1-dc"/><circle cx="950" cy="350" r="10" class="c1-ds"/></g><g data-cursor class="c1-cur"><path d="M0 330 V764" stroke="#fff" stroke-width="3" opacity=".85"/><circle cx="0" cy="764" r="16" fill="#CFAE70" stroke="#1C1C1C" stroke-width="3"/><path d="M-6 758 L-10 764 L-6 770 M6 758 L10 764 L6 770" fill="none" stroke="#1C1C1C" stroke-width="2.5" stroke-linecap="round"/></g></svg></div>',
      steps:[
        { label:'The first sign', t:'Control (dashed gold) starts high. The stakes (green) start low. Nothing feels urgent yet.', cx:282 },
        { label:'Optimal time to act', t:'Control is near its highest and the stakes are near their lowest. Acting here can feel early, and it is the best moment you will get.', cx:301 },
        { label:'Control slips', t:'Control starts to fall away. The stakes still look low, so it is easy to wait.', cx:480 },
        { label:'Typical time to act', t:'The lines cross: the stakes shoot up just as control falls. On the slide, this is when leaders typically act.', cx:658 },
        { label:'Too late to shape it', t:'The stakes are high and control is low. Acting now means acting with little say in what happens next.', cx:950 }
      ],
      done:'You found both times on the chart. Next, try it on one unfolding issue.'
    },
    early:{
      type:'branch',
      start:'n1',
      label:'Hypothetical',
      nodes:{
        n1:{ t:'<b>Monday morning. You lead a Dining team.</b> A student posts that a dining hall label called a dish nut-free, and it was not. She had a mild reaction. Ten replies, several saying &ldquo;the labels are wrong.&rdquo; Your team confirms a labeling error. What do you do first?',
          opts:[
            { t:'Fix the labels today, post a plain correction, and reach out to the student and anyone who reported a problem.', out:'By evening the labels are fixed and checked, the student has heard from you directly, and your correction sits under the original post. A few students reply with thanks.', next:'n2a' },
            { t:'Fix the labels quietly, and wait to see whether the post grows.', out:'The labels are fixed, but nobody hears from you. The post keeps collecting replies from students who have stopped trusting the labels.', next:'n2b' },
            { t:'Say nothing until you have every fact confirmed.', out:'Your team spends two days on a full review. Meanwhile, the post is shared far beyond the students involved.', next:'n2b' }
          ] },
        n2a:{ t:'<b>Tuesday.</b> A student asks whether it will happen again. What do you say?',
          opts:[
            { t:'Explain what failed, what you changed, and who checks every label now, and promise an update by Friday.', out:'Students hear transparency, expertise, and commitment in one reply. The thread goes quiet.', next:'e1' },
            { t:'Nothing more. It is fixed.', out:'Most students move on. A few are left wondering, and the question is still open on the thread.', next:'e2' }
          ] },
        n2b:{ t:'<b>Thursday.</b> The post has been shared thousands of times. A reporter asks for comment, and a student group is organizing online. What now?',
          opts:[
            { t:'Respond now: apologize, explain the fix and the new label checks, and bring in Communications.', out:'Your reply runs in the story, next to the students&rsquo; posts. It helps, and it arrives after the story has already been told without you.', next:'e3' },
            { t:'Decline to comment until it blows over.', out:'The story runs with &ldquo;Dining declined to comment.&rdquo; The student group&rsquo;s posts now frame what happened.', next:'e4' }
          ] },
        e1:{ end:true, h:'Small, and it stayed small', t:'You acted Monday, while control was high and the stakes were low, and your reply reached all four drivers of trust.', debrief:'This is the optimal time to act on the Chancellor&rsquo;s reputation dynamics slide: early, before it feels urgent.' },
        e2:{ end:true, h:'Fixed, with one loose end', t:'You acted early, which kept control. Leaving the open question unanswered left a small gap in transparency and commitment.', debrief:'Acting early is most of the win. A full answer, on all four drivers of trust, finishes it.' },
        e3:{ end:true, h:'Recovered, at a cost', t:'You acted where the lines cross: the typical time to act. The stakes were high and control had slipped, so the story was already shaped by others, including activists in the second circle.', debrief:'Same fix, same apology, three days later. The optimal time to act was Monday.' },
        e4:{ end:true, h:'The story is told without you', t:'Silence let others define the issue. The media and the second circle filled the gap, and a labeling error became a story about whether Dining cares about student safety.', debrief:'Late and silent misses every driver of trust. On the dynamics slide, control is now low and the stakes are high.' }
      }
    },
    /* ══════ Module 3: Mission and Margin (deck pages 24 to 34), version 3 ══════ */
    achieve:{
      type:'explore',
      slides:[
        { label:'Achieving the Vision', html:'To achieve our vision and address the [[challenges|primary challenges we face]], Vanderbilt will operate at [[speed|uncommon speed, agility and scale]] to address [[societal|relevant societal challenges]] [[means|through education and research]].' }
      ],
      spots:{
        challenges:{ title:'The primary challenges we face', text:'The problems the vision has to overcome. Two pages from now, the Chancellor names four of them: the problems to solve.' },
        speed:{ title:'Uncommon speed, agility and scale', text:'The how. Good work is not enough; the aim is to do it faster, more flexibly, and at a larger scale than universities usually do. The phrase runs through the areas of focus, next.' },
        societal:{ title:'Relevant societal challenges', text:'The what: problems that matter to people and society, beyond the campus.' },
        means:{ title:'Through education and research', text:'The means: Vanderbilt&rsquo;s mission. Every area of focus serves education and research.' }
      },
      prompt:'Tap a gold phrase. Each one opens here.',
      done:'You opened all four phrases. Next, the three areas of focus.'
    },
    areassee:{
      type:'reveal',
      label:'Areas of Focus: three numbered areas, each with the Chancellor’s definition',
      caption:'Areas of Focus, from Chancellor Daniel Diermeier’s Symposium slides (p25).',
      figure:'<div class="lr-tslide ts-long"><p class="ts-h">Areas of focus</p><div class="ts-lines">' +
        '<p data-rv="1"><b>1. Exceptional Core Operations:</b> With speed, agility and scale, Vanderbilt will distinguish itself with innovative and impactful capabilities to ensure that we have the talent, resources and reputation necessary to deliver on our vision.</p>' +
        '<p data-rv="2"><b>2. Bold Strategic Initiatives:</b> With &ldquo;exceptional core operations&rdquo; as our fuel, Vanderbilt will pursue increasingly bold initiatives that enable and enhance the reach and impact of our education and research mission.</p>' +
        '<p data-rv="3"><b>3. Values Driven Leadership:</b> Through strategic advocacy efforts and modeling the role of an essential research university, Vanderbilt will stimulate industry change and combat existential threats to our education and research mission.</p></div></div>',
      steps:[
        { label:'1. Exceptional Core Operations', t:'The fuel. Work Vanderbilt already does, done with speed, agility and scale, so the talent, resources and reputation are there to deliver the vision.' },
        { label:'2. Bold Strategic Initiatives', t:'Built on that fuel: increasingly bold initiatives that extend the reach and impact of education and research, into new programs and new places.' },
        { label:'3. Values Driven Leadership', t:'Beyond the campus: strategic advocacy, and modeling the role of an essential research university, to stimulate industry change. All three areas serve the education and research mission.' }
      ]
    },
    areas:{
      type:'sort',
      noun:'initiative',
      buckets:['1. Exceptional Core Operations', '2. Bold Strategic Initiatives', '3. Values Driven Leadership'],
      subs:[
        'The fuel: <b>innovative and impactful capabilities</b>, with speed, agility and scale.',
        '<b>Increasingly bold initiatives</b> that extend the reach and impact of the mission.',
        '<b>Strategic advocacy</b>, and modeling the role of an essential research university.'
      ],
      groupLabel:'The three areas of focus',
      items:[
        { t:'<b>IT.</b> Setting up a new employee’s accounts drops from two weeks to one day, with the same care.', short:'IT: accounts in one day', a:0, why:'Core work done with speed, agility and scale: the fuel for everything else.', hint:'Is this something new, or work Vanderbilt already does, done better?' },
        { t:'<b>Student Relations.</b> A new residential program brings research mentors into the residence halls, so first-year students join research in their first term.', short:'Student Relations: research in the halls', a:1, why:'A bold initiative that enhances the reach and impact of the education and research mission.', hint:'It is new, and it extends what the mission reaches. Which area is about reach?' },
        { t:'<b>DAR.</b> DAR hosts state lawmakers and peer universities to show how Vanderbilt research helped people across Tennessee.', short:'DAR: hosting lawmakers and peers', a:2, why:'Strategic advocacy, and modeling the role of an essential research university.', hint:'Who is it trying to persuade? Look past the campus.' },
        { t:'<b>Operations.</b> Three offices that collect the same vendor data in three forms move to one shared procurement form.', short:'Procurement: one shared form', a:0, why:'Existing work, run better: an innovative and impactful capability.', hint:'Nothing new is created; existing work runs better.' }
      ],
      done:'All four sorted. Next, the problems these areas answer.'
    },
    problems:{
      type:'explore',
      rvName:'the problems slide',
      slides:[
        { label:'Problems to Solve', html:'<span class="c1-pl" data-rv="1"><b>1.</b> America&rsquo;s leading research universities [[p1|lack core capabilities to deliver innovation at the speed and scale]] necessary for our modern world.</span><span class="c1-pl" data-rv="2"><b>2.</b> America&rsquo;s leading research universities are [[p2|no longer viewed as primary drivers of solutions]] to the important problems facing people and society.</span><span class="c1-pl" data-rv="3"><b>3.</b> Elite universities are viewed as [[p3|politicized bastions of ideology]].</span><span class="c1-pl" data-rv="4"><b>4.</b> A university education is [[p4|no longer viewed as essential]] for achieving the American dream.</span>' }
      ],
      spots:{
        p1:{ title:'Speed and scale', text:'The capabilities gap. <b>Hypothetical, in Operations:</b> a vendor partner walks away after a contract sits in procurement approvals for four months.' },
        p2:{ title:'Drivers of solutions', text:'A question of relevance. <b>Hypothetical, in DAR:</b> at an alumni event, a guest says universities talk a lot but solve little, and no one at the table has a local example ready.' },
        p3:{ title:'Politicized bastions', text:'A question of trust. <b>Hypothetical, in Student Relations:</b> a student speaker series is reported as proof that the university welcomes only one side of a debate.' },
        p4:{ title:'No longer essential', text:'A question of value. <b>Hypothetical, in Dining:</b> a student worker asks her supervisor whether finishing her degree is still worth the debt.' }
      },
      prompt:'Tap a gold phrase. Each opens a small, everyday version of the problem.',
      done:'You opened all four problems. Next, why margin matters now.'
    },
    peers:{
      type:'predict',
      rounds:[
        { title:'Hiring Freeze', chart:9, q:'Of the 24 peer universities on the slide, how many communicated or confirmed a hiring freeze?', min:0, max:24, step:1, start:8, dec:0, answer:19, close:2, x:'19 of the 24 peers communicated or confirmed a hiring freeze, and 3 more had one under review. Vanderbilt&rsquo;s column on the slide is empty: none reported.' },
        { title:'Layoffs', chart:10, q:'How many of the 24 communicated or confirmed layoffs?', min:0, max:24, step:1, start:6, dec:0, answer:13, close:2, x:'13 of the 24 peers communicated or confirmed layoffs, and 4 more expected them. Vanderbilt: none reported.' },
        { title:'Budget Reductions', chart:11, q:'How many of the 24 communicated or confirmed budget reductions?', min:0, max:24, step:1, start:10, dec:0, answer:19, close:2, x:'19 of the 24 peers communicated or confirmed budget reductions, some of 5% to 10%. Vanderbilt: none reported.' }
      ],
      done:'Three counts predicted. Next, the core idea behind the Chancellor&rsquo;s approach.'
    },
    coresee:{
      type:'reveal',
      label:'Core idea, mission and margin: a box reading Mission equals Purpose above a box reading Margin equals Capacity, joined by two curved arrows in one cycle',
      caption:'Core Idea: Mission and Margin, from Chancellor Daniel Diermeier’s Symposium slides (p31).',
      figure:'<div class="c1g"><svg viewBox="0 0 640 400" aria-hidden="true" focusable="false">' +
        '<g data-rv="1"><rect x="182" y="14" width="276" height="160" rx="18" fill="none" stroke="#D3AE6C" stroke-width="3"/><text x="320" y="60" text-anchor="middle" class="t-mm">MISSION</text><text x="320" y="92" text-anchor="middle" class="t-mm">=</text><text x="320" y="126" text-anchor="middle" class="t-mm">PURPOSE</text><text x="320" y="156" text-anchor="middle" class="t-mms">Research, teaching, discovery</text></g>' +
        '<g data-rv="2"><rect x="182" y="226" width="276" height="160" rx="18" fill="none" stroke="#D3AE6C" stroke-width="3"/><text x="320" y="272" text-anchor="middle" class="t-mm">MARGIN</text><text x="320" y="304" text-anchor="middle" class="t-mm">=</text><text x="320" y="338" text-anchor="middle" class="t-mm">CAPACITY</text><text x="320" y="368" text-anchor="middle" class="t-mms">Financial strength to pursue mission</text></g>' +
        '<path data-rv="3" data-rv-draw pathLength="1" d="M492 72 A 112 112 0 0 1 504 300" fill="none" stroke="#CFAE70" stroke-width="34"/><polygon data-rv="3" points="516,262 462,304 516,346" fill="#CFAE70"/>' +
        '<path data-rv="4" data-rv-draw pathLength="1" d="M148 328 A 112 112 0 0 1 136 100" fill="none" stroke="#CFAE70" stroke-width="34"/><polygon data-rv="4" points="124,56 178,98 124,140" fill="#CFAE70"/></svg></div>',
      steps:[
        { label:'Mission = Purpose', t:'Research, teaching, discovery: the reason Vanderbilt exists, and the work every unit ultimately serves.' },
        { label:'Margin = Capacity', t:'Financial strength to pursue mission. Margin is not the goal by itself; it is the capacity that keeps the mission going.' },
        { label:'Mission builds margin', t:'The arrow on the right runs from mission down to margin: purpose gives every dollar its reason.' },
        { label:'Margin builds mission', t:'The arrow on the left runs back up: capacity funds the next mission work. In the Chancellor&rsquo;s words, mission without margin is unsustainable, and margin without mission is meaningless.' }
      ]
    },
    core:{
      type:'sort',
      noun:'moment',
      buckets:['Mission = Purpose', 'Margin = Capacity'],
      subs:['Research, teaching, discovery', 'Financial strength to pursue mission'],
      groupLabel:'Mission and margin',
      items:[
        { t:'<b>IT.</b> With help from IT’s research computing team, a lab publishes a discovery about early cancer detection.', short:'IT: a lab’s discovery', a:0, why:'Discovery is mission: purpose, the reason the work exists. IT’s help served it.', hint:'Is this the work itself, or the strength to do it?' },
        { t:'<b>Operations.</b> Procurement renegotiates a software contract and saves $200,000 a year.', short:'Procurement: a cheaper contract', a:1, why:'Margin: financial strength. The savings become capacity to pursue the mission.', hint:'Nothing was taught or discovered. What did it build?' },
        { t:'<b>Student Relations.</b> A new residential learning community lets first-year students take a seminar together in their hall.', short:'Student Relations: a hall seminar', a:0, why:'Teaching is mission.', hint:'Teaching, research, discovery: which side?' },
        { t:'<b>Facilities.</b> New lighting controls cut the campus energy bill by 8%, every year.', short:'Facilities: a lower energy bill', a:1, why:'Margin: capacity. Money not spent on energy is money the mission can use.', hint:'The lights are the same; the bill is lower. Which side grows?' },
        { t:'<b>Dining.</b> Dining and catering share one ordering system instead of paying for two.', short:'Dining: one shared system', a:1, why:'Margin: the same work for less, which frees money for mission work.', hint:'Same work, lower cost. Which side grows?' }
      ],
      done:'All five sorted. Margin is never the goal by itself: it is the capacity that keeps the mission going.'
    },
    atvu:{
      type:'branch',
      start:'n1',
      label:'Hypothetical',
      nodes:{
        n1:{ t:'<b>Spring. You lead a Facilities team.</b> Switching to scheduled preventive maintenance has cut emergency repairs, saving hours of staff time and about $40,000 this year. What do you do with the savings?',
          opts:[
            { t:'Spend it before the year ends, so next year&rsquo;s budget is not cut.', out:'The money goes to items nobody had planned for. The maintenance change that saved it is soon forgotten.', next:'n2a' },
            { t:'Report it, and propose investing it in a small pilot that serves students: faster repairs in the residence halls.', out:'Your leader and your finance partner like that the savings are visible, and ask how you would know the pilot works.', next:'n2b' }
          ] },
        n2a:{ t:'<b>Next fall.</b> A parts supplier raises prices, and your unit is short. What now?',
          opts:[
            { t:'Cut the service that is easiest to cut.', out:'You close the gap. The cut lands on weekend repairs that students relied on, and there was no plan behind it.', next:'e1' },
            { t:'Sit down with your finance partner and look at where the money comes from and where it goes.', out:'Together you find two costs to trim and protect weekend repairs. You wish you had started this conversation in the spring.', next:'e2' }
          ] },
        n2b:{ t:'<b>Summer.</b> The pilot is approved. How do you run it?',
          opts:[
            { t:'Run it in two residence halls for one term with two clear measures, then decide whether to scale it or stop.', out:'The measures show repairs are faster in most cases. You scale what worked and drop what did not.', next:'e3' },
            { t:'Launch it in every residence hall at once, to make the biggest impact.', out:'It costs more than planned, and when parts struggle you cannot tell which ones.', next:'e4' }
          ] },
        e1:{ end:true, h:'Margin spent, mission cut', t:'The savings disappeared at year end, and students paid for it later.', debrief:'The Chancellor&rsquo;s slide: financial discipline enables strategic investments. Spending to protect a budget is the opposite of discipline.' },
        e2:{ end:true, h:'Recovered, with a partner', t:'Working with finance saved the service. Starting in the spring would have saved it sooner.', debrief:'Two key levers at work: understand where money comes from and where it goes, and collaborate in an academic and finance partnership. Building financial capacity is everybody&rsquo;s job.' },
        e3:{ end:true, h:'Discipline became investment', t:'Savings turned into a tested investment in students.', debrief:'Financial discipline enables strategic investments, and one key lever is to pilot, learn, scale. That is building financial capacity, done by a unit, not only by the finance office.' },
        e4:{ end:true, h:'Bold, but blind', t:'A good idea, at a scale nobody had tested.', debrief:'The key lever is pilot, learn, scale, in that order. Use data and discipline to inform choices before you scale.' }
      }
    },
    mindsee:{
      type:'reveal',
      label:'Leadership Mindset: four lines, steward purpose and performance, use mission to guide priorities, build trust through transparency and consistency, think long-term and manage trade-offs',
      caption:'Leadership Mindset, from Chancellor Daniel Diermeier’s Mission and Margin slides (p33).',
      figure:'<div class="lr-tslide"><p class="ts-h">Leadership mindset</p><p class="ts-sub">Mission and margin</p><div class="ts-lines">' +
        '<p data-rv="1"><b>Steward</b> purpose <strong>and</strong> performance</p><p data-rv="2"><b>Use mission</b> to guide priorities</p><p data-rv="3"><b>Build trust</b> through transparency and consistency</p><p data-rv="4"><b>Think long-term:</b> manage trade-offs</p></div></div>',
      steps:[
        { label:'Steward purpose and performance', t:'Hold on to both at once: what the work does for people, and how well and how efficiently it runs.' },
        { label:'Use mission to guide priorities', t:'When there is more to do than time or money allows, what serves students and research comes first.' },
        { label:'Build trust through transparency and consistency', t:'Share the numbers openly, and the same way every time, so people can trust the choices made with them.' },
        { label:'Think long-term: manage trade-offs', t:'Weigh what a choice costs now against what it returns over years, and say the trade-off out loud.' }
      ]
    },
    mindset:{
      type:'match',
      heads:['Hypothetical move', 'Leadership mindset'],
      left:[
        { t:'<b>Dining.</b> A director keeps a late-night meal program students rely on, and sets a cost target for it too.' },
        { t:'<b>IT.</b> With five project requests and staff for two, a team takes on the two that serve students and research most.' },
        { t:'<b>DAR.</b> A manager shares the unit&rsquo;s budget with her team every quarter, in the same format each time.' },
        { t:'<b>Facilities.</b> The team pays more this year for a roof that will last thirty years instead of fifteen.' }
      ],
      right:[ { t:'Steward purpose and performance' }, { t:'Use mission to guide priorities' }, { t:'Build trust through transparency and consistency' }, { t:'Think long-term: manage trade-offs' } ],
      show:[3, 1, 0, 2],
      why:[
        'Purpose and performance: keep what the program does for students, and hold it to a cost.',
        'Mission guides the priorities: what serves students and research comes first.',
        'Transparency, and consistency: the same open view, every quarter.',
        'Long-term thinking: a trade-off accepted now, for a return over decades.'
      ],
      hint:[
        'The director holds on to two things at once. Which line names two things?',
        'What decided which two requests won?',
        'Two words matter here: shares, and every quarter in the same format.',
        'Look at the time frame: one year against thirty.'
      ],
      done:'All four matched. Next, the key levers.'
    },
    leverssee:{
      type:'reveal',
      label:'Key Levers: understand where money comes from and where it goes; use data and discipline to inform choices; collaborate, academic and finance partnership; pilot, learn, scale',
      caption:'Key Levers, from Chancellor Daniel Diermeier’s Mission and Margin slides (p34).',
      figure:'<div class="lr-tslide"><p class="ts-h">Key levers</p><p class="ts-sub">Mission and margin</p><div class="ts-lines">' +
        '<p data-rv="1"><b>Understand</b> where money comes from and where it goes</p><p data-rv="2"><b>Use data</b> and discipline to inform choices</p><p data-rv="3"><b>Collaborate:</b> Academic + Finance partnership</p><p data-rv="4"><b>Pilot, learn, scale</b></p></div></div>',
      steps:[
        { label:'Understand', t:'Know where your unit’s money comes from, and the few places most of it goes.' },
        { label:'Use data', t:'Let a number, not only a hunch, guide the choice, and hold to the plan you made with it.' },
        { label:'Collaborate', t:'An academic and finance partnership: bring finance partners in early, as partners in the work, not only at approval.' },
        { label:'Pilot, learn, scale', t:'Start small, measure, learn what works, and only then go bigger. Next, rate your team on all four.' }
      ]
    },
    levers:{
      type:'rate',
      title:'Your team on the key levers',
      eg:['Your team can say where its budget comes from and where most of it goes.', 'Choices cite a number, like cost per person served, not just a hunch.', 'Finance partners join early, not only at the approval step.', 'New ideas start small, with a date to check results before going bigger.'],
      dims:['Understand', 'Use data', 'Collaborate', 'Pilot, learn, scale'],
      levels:['Not yet', 'Partly', 'Strongly'],
      low:'Your thinnest lever: {dims}. Start there: it is where the next gain is.',
      act:['Walk your team through your budget: where the money comes from and the three biggest places it goes.', 'Pick one number to track this month, like cost per request or response time, and review it together.', 'Invite your finance partner to your next planning meeting, not just the approval.', 'Turn your next idea into a 30-day pilot with one clear measure before rolling it out.'],
      keep:'Show a peer unit how your team does it, and ask what they would add.',
      high:'Every lever reaches the outer ring. Share how your team does it with a peer unit.'
    },
  },
  CHARTS:[
    {
      num:0,
      type:'bars',
      title:'Undergraduate Selectivity',
      sub:'Selectivity fell from 11.6% in 2020-21 to 4.6% in 2026-27.',
      fmt:'pct',
      max:15,
      step:5,
      axis:'Admissions Rate (%)',
      bars:[{ x:'2020-21', v:11.6, lab:'11.6%' }, { x:'2026-27', v:4.6, lab:'4.6%' }]
    },
    {
      num:0,
      type:'bars',
      title:'Undergraduate Yield',
      sub:'Yield increased from 39.9% in 2020-21 to 65.6% in 2026-27.',
      fmt:'pct',
      max:80,
      step:20,
      axis:'Yield (%)',
      bars:[{ x:'2020-21', v:39.9, lab:'39.9%' }, { x:'2026-27', v:65.6, lab:'65.6%' }]
    },
    {
      num:1,
      type:'bars',
      title:'Net New Commitments',
      sub:'Net new commitments rose to $757M in FY26.',
      fmt:'usd',
      max:800,
      step:200,
      axis:'Net New Commitments ($M)',
      col:'Fiscal year',
      bars:[{ x:'FY20', v:127, lab:'$127' }, { x:'FY26', v:757, lab:'$757' }]
    },
    {
      num:2,
      type:'bars',
      title:'Research Funding at VU and VUMC',
      sub:'Total research funding surpassed $1.4B in FY25.',
      fmt:'usd',
      max:1500,
      step:500,
      axis:'Research Funding ($ in M)',
      col:'Fiscal year',
      legend:['VU', 'VUMC'],
      bars:[
        { x:'FY20', seg:[360.21, 464.6], labs:['$360.21', '$464.60'], lab:'$824.81' },
        { x:'FY25', seg:[520.45, 883.23], labs:['$520.45', '$883.23'], lab:'$1,403.68' }
      ]
    },
    {
      num:3,
      type:'bars',
      title:'Endowment Value',
      sub:'The endowment grew from $6.95B in FY20 to $12.09B in FY26.',
      fmt:'usd',
      max:15000,
      step:5000,
      axis:'$ in Millions',
      col:'Date',
      bars:[{ x:'6/30/20', v:6951, lab:'$6,951' }, { x:'6/30/26', v:12088, lab:'$12,088' }]
    },
    {
      num:3,
      type:'bars',
      title:'Net Assets',
      sub:'Vanderbilt’s net assets have nearly doubled since FY20.',
      fmt:'usd',
      max:15,
      step:5,
      axis:'Net Asset Value ($B)',
      col:'Fiscal year',
      bars:[{ x:'FY20', v:6.6, lab:'$6.6' }, { x:'FY26', v:13.1, lab:'$13.1' }]
    },
    {
      num:4,
      type:'bars',
      title:'Football Wins',
      sub:'The 2025 football team had its first-ever 10-win regular season.',
      fmt:'n',
      max:10,
      step:5,
      axis:'Regular Season Wins',
      col:'Season',
      bars:[{ x:'2020', v:0, lab:'', note:'1' }, { x:'2025', v:10, lab:'10', inside:true }],
      foot:'(1) The 2020 season was shortened by the COVID-19 pandemic. The team’s final record was 0-9 that year.'
    },
    {
      num:4,
      type:'bars',
      title:'Vanderbilt Men’s Basketball Wins',
      sub:'The 2025-26 team compiled a 27-9 regular season record.',
      fmt:'n',
      max:30,
      step:10,
      axis:'Regular Season Wins',
      col:'Season',
      bars:[{ x:'2020-21', v:9, lab:'9', note:'1' }, { x:'2025-26', v:27, lab:'27' }],
      foot:'(1) The 2020-21 season was shortened by the COVID-19 pandemic. The team’s final record was 9-16 that year.'
    },
    {
      num:4,
      type:'bars',
      title:'Vanderbilt Women’s Basketball Wins',
      sub:'The 2025-26 team finished 29-5 and secured a trip to the Sweet 16.',
      fmt:'n',
      max:30,
      step:10,
      axis:'Regular Season Wins',
      col:'Season',
      bars:[{ x:'2021-22', v:16, lab:'16' }, { x:'2025-26', v:27, lab:'27' }]
    },
    { num:5, type:'bars', title:'Hiring Freeze', sub:'Communicated or confirmed, out of 24 peer universities on the slide.', fmt:'n', max:24, step:8, axis:'Universities', bars:[{ x:'Vanderbilt', v:0, lab:'0' }, { x:'24 peers', v:19, lab:'19' }] },
    { num:5, type:'bars', title:'Layoffs', sub:'Communicated or confirmed, out of 24 peer universities on the slide.', fmt:'n', max:24, step:8, axis:'Universities', bars:[{ x:'Vanderbilt', v:0, lab:'0' }, { x:'24 peers', v:13, lab:'13' }] },
    { num:5, type:'bars', title:'Budget Reductions', sub:'Communicated or confirmed, out of 24 peer universities on the slide.', fmt:'n', max:24, step:8, axis:'Universities', bars:[{ x:'Vanderbilt', v:0, lab:'0' }, { x:'24 peers', v:19, lab:'19' }] }
  ],
  CITIES:{
    nyc:{
      why:'It takes Vanderbilt to students and employers in New York, with an undergraduate semester and a master’s in business and technology.',
      name:'Vanderbilt NYC',
      focus:'New York City, NY',
      narr:'growth/f1',
      line:'Vanderbilt’s first campus beyond Nashville, open since August 2026: 13 buildings on 2.7 acres in Chelsea, with an undergraduate semester program and a Master of Science in Business and Technology.',
      meet:'Any service a student or colleague in New York needs from Nashville.',
      url:'https://www.vanderbilt.edu/nyc/'
    },
    wpb:{
      why:'It grows graduate education in business, engineering, data science, and AI, the fields that drive the prosperity the Industry Vision is about.',
      name:'Vanderbilt WPB',
      focus:'West Palm Beach, FL',
      narr:'growth/f2',
      line:'A graduate campus for business, engineering, data science, and AI, with programs planned in finance and in space and defense technology: about 1,000 graduate students and 100 faculty.',
      meet:'The programs, hiring, and systems built for a second home.',
      url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/west-palm-beach/'
    },
    sf:{
      why:'It joins art and design with engineering and AI, alongside the technology and creative sectors.',
      name:'Vanderbilt SF',
      focus:'San Francisco, CA',
      narr:'growth/f3',
      line:'Opens for the 2027 to 2028 school year on the California College of the Arts campus, home to the Huang College of Art, Architecture and Design, which blends art and design with engineering and AI: about 1,000 students.',
      meet:'Partnerships with the technology and creative sectors.',
      url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/san-francisco/'
    },
    chattanooga:{
      why:'It puts Vanderbilt research at the front of quantum technology, with access no other U.S. site offers.',
      name:'Quantum Innovation',
      focus:'Chattanooga, TN',
      narr:'growth/f4',
      line:'The Institute for Quantum Innovation, launched with EPB in July 2026: about 250 researchers, faculty, and staff, working with the first U.S. site with commercial access to both a trapped-ion quantum computer and a quantum network.',
      meet:'Research administration and partnerships across Tennessee.',
      url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/quantum-innovation/'
    },
    nashville:{
      why:'Every growth site runs on the systems and people built here.',
      name:'Nashville',
      focus:'Home',
      narr:'growth/f5',
      line:'Home since 1873: the residential campus and the heart of the university.',
      meet:'Every day. The back office Nashville already has is what each new site needs on day one.',
      url:'https://www.vanderbilt.edu/'
    }
  },
  COMMITS:[
    ['Meet your pod', 'About 45 minutes. Agree on one challenge and one focus area.'],
    ['Work on sections 1 to 3 of your pod’s brief', 'On the capstone page: the focus area, the challenge, and the connection to Vanderbilt’s priorities.'],
    ['Respond to Teams prompt 1', 'Post your response under Discussions in the Teams channel by Friday, November 6.'],
    ['Reply to a colleague', 'Highlight a connection or perspective that strengthens a colleague’s idea.']
  ],
  tell:function(which){
    if(which === 'teams') return 'This week’s vision work landed for me here: [one idea from the Chancellor that stuck with you, and why]. One way I can connect my own team’s work to the vision is [one change you will make]. What would you add?';
    return '';
  },
  QUIZ:[
    {
      seg:'Vision',
      q:'After a national story about Vanderbilt, DAR sees gifts rise and HR sees more applicants for open staff jobs. Which idea explains why?',
      opts:['The three areas of focus', 'How reputation enables the mission', 'Mission and margin', 'The trust radar'],
      a:1,
      x:'Reputation attracts resources, like talent and funding, and what they achieve builds more reputation. Module 1, How Reputation Enables the Mission.'
    },
    {
      seg:'Reputation',
      q:'An IT error sent students the wrong class locations this morning. Which response reaches all four drivers on the trust radar?',
      opts:[
        'Wait until every fact is confirmed',
        'Acknowledge how it affected students, say what you know and do not, show who is fixing it, and commit to an update',
        'Explain that it was a vendor’s fault',
        'Fix it quietly'
      ],
      a:1,
      x:'Empathy, transparency, expertise, and commitment: a strong response reaches all four sides of the radar.'
    },
    {
      seg:'Reputation',
      q:'A story about a residence hall closing moves from a short wire item to a national TV segment built around one student’s experience. Where on the reputation terrain has it landed?',
      opts:['Simple reporting', 'In-depth coverage', 'Extensive reporting', 'Mass-market coverage'],
      a:3,
      x:'High on societal importance and audience interest: mass-market coverage, which runs on testimony and drama. The story has migrated across the terrain.'
    },
    {
      seg:'Reputation',
      q:'A quiet story about where Dining buys its food gets picked up by an advocacy group that campaigns about it online. Which part of the Chancellor’s slides describes this?',
      opts:['The second circle: activists outside the media, pressing in', 'Simple reporting', 'The key levers', 'The reputation flywheels'],
      a:0,
      x:'On the second circle slide, activists surround the media and the constituents, and press in from every side. In both of his examples, a push from outside moved the story.'
    },
    {
      seg:'Reputation',
      q:'A complaint about slow repairs in one residence hall is starting to spread online but has not reached the news. When should Facilities act?',
      opts:[
        'Now, while your control is high and the stakes are still low',
        'When a reporter calls, so you know it matters',
        'After it peaks, so you have the full story',
        'Only if senior leadership asks you to'
      ],
      a:0,
      x:'Reputation dynamics: as an issue grows, control falls and the stakes rise. The optimal time to act comes early, well before the typical time.'
    },
    {
      seg:'Mission and margin',
      q:'A vendor partner walked away after a contract sat in procurement approvals for four months. Which of the four problems to solve does it speak to most directly?',
      opts:[
        'Research universities lack core capabilities to deliver innovation at the speed and scale necessary for our modern world',
        'Elite universities are viewed as politicized bastions of ideology',
        'A university education is no longer viewed as essential for achieving the American dream',
        'None; it is only an internal process issue'
      ],
      a:0,
      x:'Problem 1: core capabilities to deliver innovation at speed and scale. Small delays are small versions of it.'
    },
    {
      seg:'Mission and margin',
      q:'An Operations team builds a faster research-contracting process and presents it at a national meeting so other universities can adopt it. Which area of focus fits best?',
      opts:['Exceptional Core Operations', 'Bold Strategic Initiatives', 'Values Driven Leadership', 'It does not fit any'],
      a:2,
      x:'Sharing it to change how other universities work models the role of an essential research university and stimulates industry change: Values Driven Leadership.'
    },
    {
      seg:'Mission and margin',
      q:'A Student Relations peer-mentoring program has high impact but costs more than planned, and budgets are flat. Which move reflects the leadership mindset?',
      opts:[
        'Close it',
        'Protect it and change nothing',
        'Keep the outcome, redesign the delivery, and name what pays for it',
        'Move it to another unit'
      ],
      a:2,
      x:'Steward purpose and performance: keep what students get, change how it is delivered, and think long-term about what pays for it.'
    }
  ],
  QUIZ_POS:[0, 1, 3, 2, 1, 3, 0, 2],
  QUIZ_PASS:6,
  OVERVIEW:{
    week:'Course One · Week of November 2',
    topics:'Vision, Strategy and the Future of Vanderbilt · Reputational Stewardship · Mission and Margin',
    due:'Fri, Nov 6',
    dueLabel:'finish this course by',
    goals:[
      '<b>Explain</b> Vanderbilt’s vision and industry vision, and read the numbers behind them.',
      '<b>Trace</b> how reputation enables the mission, and name the three reputation flywheels.',
      '<b>Read</b> what shapes reputation and the trust radar, place a story on the reputation terrain, and spot the optimal time to act.',
      '<b>Explain</b> the three areas of focus and the four problems they answer.',
      '<b>Weigh</b> a decision on mission and margin, and name the leadership mindset and key levers.'
    ],
    lessons:[
      {
        title:'Vision, Strategy & the Future of Vanderbilt',
        no:'Module 1',
        keys:['vision', 'numbers', 'growth', 'flywheels', 'engine', 'loop', 'resources'],
        ideas:[
          [
            'Two visions.',
            'Vanderbilt will define, and be, the great university of the 21st century, and help reclaim the essential role of leading research universities in driving American prosperity.'
          ],
          [
            'The numbers since 2020.',
            'Selectivity, yield, net new commitments, research funding, the endowment, net assets, and wins, plus a footprint well beyond Nashville.'
          ],
          [
            'Reputation enables the mission.',
            'Three flywheels turn it: Execution with Ambition, Values-Driven Leadership, and Athletics Momentum. Reputation attracts talent, funding, partnerships, and access and influence; resources build reputation.'
          ]
        ]
      },
      {
        title:'Reputational Stewardship',
        no:'Module 2',
        keys:['shapes', 'radar', 'teamradar', 'coverage', 'athletics', 'circle', 'transcare', 'dynamics', 'early'],
        ideas:[
          ['Reputation is made in public.', 'The university speaks to its audiences. The media surrounds them, and activists form a second circle.'],
          ['Trust has four drivers.', 'Empathy, transparency, expertise, and commitment. A strong response reaches all four.'],
          ['Stories migrate, so act early.', 'A story can move across the reputation terrain. The optimal time to act comes while control is high and the stakes are low.']
        ]
      },
      {
        title:'Mission and Margin',
        no:'Module 3',
        keys:['achieve', 'areas', 'problems', 'peers', 'core', 'atvu', 'mindset', 'levers'],
        ideas:[
          [
            'Uncommon speed, agility and scale.',
            'Three areas of focus carry the vision: Exceptional Core Operations, Bold Strategic Initiatives, and Values Driven Leadership, aimed at four problems to solve.'
          ],
          ['Mission is purpose; margin is capacity.', 'Research, teaching, discovery, and the financial strength to pursue them. Leaders must connect values and viability.'],
          ['Building financial capacity is everybody’s job.', 'Financial discipline enables strategic investments. Understand where money comes from and where it goes, then pilot, learn, scale.']
        ]
      },
      {
        title:'Quick check and this week',
        no:'This week',
        keys:['quiz', 'nextstep'],
        ideas:[
          ['Apply it.', 'Eight new situations, one idea each from the Chancellor’s talk.'],
          ['Take it to your pod.', 'Meet your pod, and work on sections 1 to 3 of your brief on the capstone page.'],
          ['Post in Teams.', 'Respond to prompt 1 and reply to a colleague by Friday, November 6.']
        ]
      }
    ],
    footer:'Your pod’s brief is due Friday, November 20. Everything you need is on the capstone page.'
  },
  PRINT_TITLE:'Course One, my weekly <em>takeaway</em>.',
  EXIT_TOAST:'You can close this tab. See you in Course Two.'
};

/* ══════════ LEADERSHIP REDEFINED · COURSE ONE · content ══════════
   The Chancellor's Symposium talk, in the order of his FINAL deck:
   Module 1: Vision, Strategy & the Future of Vanderbilt (deck pages 1 to 16), rebuilt to
   the version 3 standard (docs/design-v3.md) with the activity library (ACTIVITIES below,
   drawn by ../assets/js/lr-activities.js);
   Module 2: Reputational Stewardship (pages 17 to 23);
   Module 3: Mission and Margin (pages 24 to 35, closing on the Everest quote).
   Then a quick check and the capstone, its own section at the end. Week of November 2.
   Every teaching claim traces to the FINAL deck or to the Chancellor's two videos.
   Practice items are hypothetical. Learners never type in the course: the brief is
   the fillable PDF. Read by ../assets/js/pager.js and ../assets/js/lr-engine.js.
   No em or en dashes. */
window.LR_COURSE = {
  PLAN:[
    { sel:'section.hero', key:'home', label:'Welcome', mode:'whole' },
    { sel:'#week', key:'route', label:'This week', mode:'whole' },
    { sel:'#m1open', key:'m1', label:'Module 1: Welcome', mode:'whole' },
    { sel:'#vision', key:'vision', label:'Module 1: The vision', mode:'whole' },
    { sel:'#numbers', key:'numbers', label:'Module 1: The numbers', mode:'whole' },
    { sel:'#charts', key:'charts', label:'Module 1: Six more numbers', mode:'whole' },
    { sel:'#footprint', key:'footprint', label:'Module 1: Footprint', mode:'whole' },
    { sel:'#growth', key:'growth', label:'Module 1: Growth sites', mode:'whole' },
    { sel:'#flywheels', key:'flywheels', label:'Module 1: Reputation flywheels', mode:'whole' },
    { sel:'#engine', key:'engine', label:'Module 1: Name the flywheel', mode:'whole' },
    { sel:'#loop', key:'loop', label:'Module 1: How reputation enables the mission', mode:'whole' },
    { sel:'#resources', key:'resources', label:'Module 1: Match the resources', mode:'whole' },
    { sel:'#wrap1', key:'wrap1', label:'Module 1: Wrap-up', mode:'whole' },
    { sel:'#reputation', key:'trust', label:'Module 2: Reputational stewardship', mode:'pages' },
    { sel:'#terrain', key:'terrain', label:'Module 2: Reputation terrain', mode:'pages' },
    { sel:'#timing', key:'timing', label:'Module 2: Reputation dynamics', mode:'pages' },
    { sel:'#wrap2', key:'wrap2', label:'Module 2: Wrap-up', mode:'whole' },
    { sel:'#mission', key:'mission', label:'Module 3: Achieving the vision', mode:'pages' },
    { sel:'#margin', key:'margin', label:'Module 3: Mission and margin', mode:'pages' },
    { sel:'#peers', key:'peers', label:'Module 3: The Chancellor’s slides', mode:'whole' },
    { sel:'#wrap3', key:'wrap3', label:'Module 3: Wrap-up', mode:'whole' },
    { sel:'#everest', key:'everest', label:'Module 3: Closing words', mode:'whole' },
    { sel:'#quiz', key:'quiz', label:'Quick check', mode:'whole' },
    { sel:'#capstone', key:'capstone', label:'Capstone: The capstone', mode:'pages' },
    { sel:'#brief', key:'brief', label:'Capstone: Your brief', mode:'whole' },
    { sel:'#nextstep', key:'nextstep', label:'Capstone: This week', mode:'whole' },
    { sel:'#deeper', key:'deeper', label:'Go deeper', mode:'whole' },
    { sel:'#learn', key:'learn', label:'Keep going', mode:'whole', extras:['footer'] }
  ],
  SECTIONS:[
    { k:'vision', no:'01', name:'The vision', how:'Open all four phrases' },
    { k:'numbers', no:'02', name:'The numbers', how:'Predict three numbers' },
    { k:'footprint', no:'03', name:'Footprint', how:'Compare 2020 and 2026' },
    { k:'growth', no:'04', name:'Growth sites', how:'Open all four growth sites' },
    { k:'flywheels', no:'05', name:'Reputation flywheels', how:'Turn all three cards' },
    { k:'engine', no:'06', name:'Name the flywheel', how:'Sort six moments' },
    { k:'loop', no:'07', name:'The reputation loop', how:'Open all seven parts of the slide' },
    { k:'resources', no:'08', name:'Match the resources', how:'Match four moments' },
    { k:'wrap1', no:'09', name:'Take it to your team', how:'Build your sentence' },
    { k:'trust', no:'10', name:'The trust radar', how:'Find the strongest call in two situations' },
    { k:'terrain', no:'11', name:'Reputation terrain', how:'Place four stories' },
    { k:'timing', no:'12', name:'Reputation dynamics', how:'Sort five moments' },
    { k:'mission', no:'13', name:'Problems to solve', how:'Match four moments to the problem they speak to' },
    { k:'margin', no:'14', name:'Mission and margin', how:'Find the strongest call in two situations' },
    { k:'quiz', no:'15', name:'Quick check', how:'Score 6 of 8' },
    { k:'capstone', no:'16', name:'Capstone: your focus area', how:'Sort five challenges' },
    { k:'brief', no:'17', name:'Capstone: your brief', how:'Download the fillable brief' },
    { k:'nextstep', no:'18', name:'Capstone: this week', how:'Commit to all four moves' }
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
      p:'The Chancellor on video, what shapes reputation, the trust radar, the reputation terrain, and when to act.',
      tags:['A video and two situations', 'What shapes reputation', 'The terrain', 'Reputation dynamics']
    },
    {
      h:'Module 3: Mission and <em>Margin</em>',
      p:'Achieving the vision, the areas of focus, the four problems, then mission and margin, closing on the Chancellor’s own words.',
      tags:['Areas of focus', 'Problems to solve', 'A video and two situations', 'The Chancellor’s slides']
    },
    {
      h:'The <em>capstone</em>',
      p:'A quick check, then your pod’s capstone: what it is, your focus area, the fillable brief, and this week’s moves.',
      tags:['Quick check', 'Focus area', 'Your brief', 'This week']
    }
  ],
  BEST_LABEL:'The strongest call: ',
  TRY_AGAIN:'Now find the strongest call. ',
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
    footprint:{
      type:'compare',
      a:{ src:'../assets/img/deck/chancellor-footprint-2020.jpg', alt:'Vanderbilt University Footprint in 2020: a map of the United States with one gold marker, at Nashville.', label:'2020', say:'One marker: Nashville.' },
      b:{ src:'../assets/img/deck/chancellor-footprint-2026.jpg', alt:'Vanderbilt University Footprint in 2026: gold markers at Nashville, Chattanooga, New York, San Francisco, and West Palm Beach, each linked to Nashville by an arc.', label:'2026', say:'Five markers: Nashville, Chattanooga, New York, San Francisco, and West Palm Beach.' },
      w:1600, h:835,
      label:'Compare the 2020 and 2026 footprint maps',
      caption:'Vanderbilt University Footprint in 2020 and in 2026, from Chancellor Daniel Diermeier’s Symposium slides.',
      done:'You compared the 2020 and 2026 maps.'
    },
    flywheels:{
      type:'flip',
      figure:'<div class="lr-deck"><svg viewBox="20 20 420 420" aria-hidden="true" focusable="false"><defs><path id="lrFwT0" d="M72.1 281.3 A166 166 0 0 1 201.2 66.5"/><path id="lrFwT1" d="M264.5 67.6 A166 166 0 0 1 386.0 286.8"/><path id="lrFwT2" d="M102.8 336.7 A166 166 0 0 0 353.4 341.1"/><linearGradient id="lrVg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3DFA6"/><stop offset=".5" stop-color="#CFAE70"/><stop offset="1" stop-color="#946E24"/></linearGradient></defs><path d="M48.3 303.4 A196 196 0 0 1 202.7 35.9 L227.1 64.0 L211.1 95.3 A136 136 0 0 0 103.9 280.9 L69.7 273.0 Z" class="fw fw1" data-hi="f1"/><text class="fwt" dy="5"><textPath href="#lrFwT0" startOffset="50%" text-anchor="middle">Execution with Ambition</textPath></text><path d="M257.3 35.9 A196 196 0 0 1 411.7 303.4 L375.2 310.5 L356.1 280.9 A136 136 0 0 0 248.9 95.3 L273.0 69.7 Z" class="fw fw2" data-hi="f2"/><text class="fwt" dy="5"><textPath href="#lrFwT1" startOffset="50%" text-anchor="middle">Values-Driven Leadership</textPath></text><path d="M384.5 350.7 A196 196 0 0 1 75.5 350.7 L87.7 315.5 L122.8 313.7 A136 136 0 0 0 337.2 313.7 L347.4 347.4 Z" class="fw fw3" data-hi="f3"/><text class="fwt" dy="5"><textPath href="#lrFwT2" startOffset="50%" text-anchor="middle">Athletics Momentum</textPath></text><path d="M168 178 H214 L230 232 L246 178 H292 L246 286 H214 Z" fill="url(#lrVg)"/><path d="M214 178 L230 232 L230 286 H214 L190 230 Z" fill="#000" opacity=".12"/><text x="230" y="318" text-anchor="middle" class="fwc">Reputation</text></svg></div>',
      cards:[
        { front:'Execution with Ambition', hi:'f1', back:'<p>Set big goals, then deliver them. Visible results add to Vanderbilt’s reputation.</p><p class="la-eg"><b>Hypothetical.</b> A new residential college opens the week it was promised.</p>' },
        { front:'Values-Driven Leadership', hi:'f2', back:'<p>Lead by the values the university says it holds: in public, and most of all under pressure.</p><p class="la-eg"><b>Hypothetical.</b> A dean explains a hard decision plainly, by those values.</p>' },
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
        { t:'A new residential college opens on schedule, and students move in the week it was promised.', short:'College opens on schedule', a:0, why:'An ambitious goal, delivered as promised.', hint:'What made it notable: a big goal, met on time.' },
        { t:'A sold-out home game becomes the first campus visit for hundreds of prospective families.', short:'Sold-out home game', a:2, why:'Success on the field becomes a first impression of the university.', hint:'Where did those families first meet Vanderbilt?' },
        { t:'A dean faces a hard, public decision and explains it plainly, by the values the university says it holds.', short:'Dean explains a hard call', a:1, why:'Acting on stated values in public, and explaining the call, turns this flywheel.', hint:'Look at how the decision was made and explained.' },
        { t:'A national broadcast of a basketball win shows the campus to millions of viewers.', short:'National broadcast', a:2, why:'Athletic success brings national attention to the whole university.', hint:'What put Vanderbilt in front of millions?' },
        { t:'A research team stands up a new institute in one year instead of three, and delivers its first results on time.', short:'Institute in one year', a:0, why:'A bold goal, met with speed and visible results.', hint:'Speed, scale, and delivery point to one flywheel.' },
        { t:'A campus leader keeps a promise to an open, respectful process, even when a faster, quieter path is available.', short:'Open process kept', a:1, why:'People notice when leaders hold to their values under pressure.', hint:'What did the leader hold to, when it would have been easier not to?' }
      ],
      done:'All six moments sorted.'
    },
    loop:{
      type:'explore',
      figure:'<div class="lr-deck"><svg viewBox="0 0 640 372" aria-hidden="true" focusable="false"> <defs><linearGradient id="lrLg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E7C77A"/><stop offset="1" stop-color="#8BA18E"/></linearGradient> <marker id="lrLa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#E7C77A"/></marker> <marker id="lrLb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8BA18E"/></marker> <marker id="lrLc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8BA18E"/></marker></defs> <path d="M522 66 H584 V232 H526" fill="none" stroke="url(#lrLg)" stroke-width="4" marker-end="url(#lrLb)"/> <path d="M118 232 H56 V66 H114" fill="none" stroke="url(#lrLg)" stroke-width="4" marker-end="url(#lrLa)"/> <rect x="120" y="28" width="400" height="76" rx="8" class="lpg"/><text x="320" y="78" text-anchor="middle" class="lpt">Reputation</text> <rect x="120" y="194" width="400" height="76" rx="8" class="lps"/><text x="320" y="244" text-anchor="middle" class="lpt">Resources</text> <path d="M166 272 V292" class="lpa" marker-end="url(#lrLc)"/><path d="M268 272 V292" class="lpa" marker-end="url(#lrLc)"/><path d="M371 272 V292" class="lpa" marker-end="url(#lrLc)"/><path d="M474 272 V292" class="lpa" marker-end="url(#lrLc)"/> <rect x="120" y="298" width="92" height="56" rx="6" class="lpb"/><text x="166" y="331" text-anchor="middle" class="lpu">Talent</text> <rect x="222" y="298" width="92" height="56" rx="6" class="lpb"/><text x="268" y="331" text-anchor="middle" class="lpu">Funding</text> <rect x="325" y="298" width="92" height="56" rx="6" class="lpb"/><text x="371" y="331" text-anchor="middle" class="lpu">Partnerships</text> <rect x="428" y="298" width="92" height="56" rx="6" class="lpb"/><text x="474" y="322" text-anchor="middle" class="lpu">Access and</text><text x="474" y="340" text-anchor="middle" class="lpu">Influence</text> </svg></div>',
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
        { t:'A leading cancer researcher turns down two other offers to join a Vanderbilt lab.' },
        { t:'A family foundation makes its largest gift ever to a Vanderbilt program.' },
        { t:'A national laboratory invites Vanderbilt to co-lead a new research center.' },
        { t:'A congressional committee asks a Vanderbilt expert to testify on research policy.' }
      ],
      right:[ { t:'Talent' }, { t:'Funding' }, { t:'Partnerships' }, { t:'Access and influence' } ],
      show:[2, 0, 3, 1],
      why:[
        'Talent. A strong reputation helps a lab win the people it wants most.',
        'Funding. Donors give where they trust the work will matter.',
        'Partnerships. Other institutions choose partners whose reputation adds to their own.',
        'Access and influence. A trusted reputation earns a seat where policy is shaped.'
      ],
      hint:[
        'Who is choosing Vanderbilt here? A person.',
        'What did the foundation bring? Money for the work.',
        'An organization asking to work alongside Vanderbilt is which resource?',
        'Being asked into the room where policy is made is which resource?'
      ],
      done:'All four matched. Each one, put to work, builds reputation again.'
    },
    wrap1:{
      type:'build',
      tpl:'Our team’s work serves {0}. Our next win could turn {1} and attract {2}. At our next team meeting, I will {3}.',
      slots:[
        { label:'Which vision', opts:['the Vanderbilt Vision', 'the Industry Vision'] },
        { label:'Which flywheel', opts:['Execution with Ambition', 'Values-Driven Leadership', 'Athletics Momentum'] },
        { label:'Which resource', opts:['talent', 'funding', 'partnerships', 'access and influence'] },
        { label:'Your move', opts:['share one number from this module', 'show the 2020 and 2026 maps', 'ask which flywheel our work turns'] }
      ],
      doneText:'Your sentence prints on your takeaway. Bring it to your team. Next, Module 2.'
    }
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
    }
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
      why:'Home. Every growth site runs on the systems and people built here.',
      name:'Nashville',
      focus:'Home',
      line:'Home since 1873: the residential campus and the heart of the university. Every growth site runs on the systems built here.',
      meet:'Every day. The back office Nashville already has is what each new site needs on day one.',
      url:'https://www.vanderbilt.edu/'
    }
  },
  DRILLS:{
    terrain:{
      opts:['Simple reporting', 'In-depth coverage', 'Extensive reporting', 'Mass-market coverage'],
      layout:'grid',
      grid:{ y:'Societal importance', x:'Audience interest', cells:[1, 3, 0, 2] },
      prog:'terrain',
      verb:'placed',
      items:[
        {
          s:'A wire service runs three paragraphs on a new dean’s appointment.',
          a:0,
          x:'Low importance, low interest: simple reporting, the wire services corner.'
        },
        {
          s:'A national magazine analyzes research funding with data and interviews with experts.',
          a:1,
          x:'Important, with a narrower audience: in-depth coverage, which runs on experts and data.'
        },
        {
          s:'Cable panels replay a viral clip from a campus event for two days.',
          a:2,
          x:'High interest, light substance: extensive reporting, the cable news infotainment corner.'
        },
        {
          s:'A TV newsmagazine tells one family’s emotional story about a university decision.',
          a:3,
          x:'High on both: mass-market coverage. On the Chancellor’s slide, it runs on testimony and drama.'
        }
      ]
    },
    timing:{
      opts:['Optimal time to act', 'Typical time to act'],
      layout:'track',
      prog:'timing',
      verb:'sorted',
      items:[
        {
          s:'A few families ask about a confusing line on a form, and the team rewrites it that afternoon.',
          a:0,
          x:'Optimal: control is high and the stakes are still low.'
        },
        {
          s:'A complaint has been shared thousands of times, and a reporter asks for comment before your office has said anything.',
          a:1,
          x:'Typical: the stakes are high now, and control has slipped away.'
        },
        {
          s:'Before a high-profile campus event, your unit agrees who will speak for it and what it will say.',
          a:0,
          x:'Optimal: you act before there is an issue at all, while you have the most control.'
        },
        {
          s:'Your office first discusses a recurring problem after it appears in the student newspaper.',
          a:1,
          x:'Typical: the lines have crossed. The story is already public.'
        },
        {
          s:'A post about a mistake in your area gets a handful of replies, and you correct it and tell the people affected that morning.',
          a:0,
          x:'Optimal: early, while the issue is small and you still shape what happens next.'
        }
      ]
    },
    problems:{
      opts:['Problem 1: speed and scale', 'Problem 2: relevance', 'Problem 3: trust', 'Problem 4: value of a degree'],
      prog:'mission',
      verb:'sorted',
      items:[
        {
          s:'A research partner walks away after a contract sits in approvals for four months.',
          a:0,
          x:'Problem 1: America’s leading research universities lack core capabilities to deliver innovation at the speed and scale necessary for our modern world.'
        },
        {
          s:'A family asks an admissions counselor whether a degree is still worth the cost.',
          a:3,
          x:'Problem 4: a university education is no longer viewed as essential for achieving the American dream.'
        },
        {
          s:'A campus event is reported as proof that the university welcomes only one side of a debate.',
          a:2,
          x:'Problem 3: elite universities are viewed as politicized bastions of ideology.'
        },
        {
          s:'A state legislator has never heard how a campus research result helped people in her district.',
          a:1,
          x:'Problem 2: America’s leading research universities are no longer viewed as primary drivers of solutions to the important problems facing people and society.'
        }
      ]
    },
    focus:{
      opts:['Exceptional Core Operations', 'Bold Strategic Initiatives', 'Values Driven Leadership'],
      prog:'capstone',
      verb:'sorted',
      items:[
        {
          s:'Departments pay outside consultants for short projects that staff could do.',
          a:0,
          x:'Running the place well. Fix it and you free time and talent for everything else.'
        },
        {
          s:'A cross-school program pairing Nashville employers with student researchers on regional health problems.',
          a:1,
          x:'A new bet that extends the reach of education and research.'
        },
        {
          s:'A public report on how Vanderbilt research improved health across Tennessee, shared with lawmakers and peer universities.',
          a:2,
          x:'Advocacy, and modeling the role of an essential research university: it changes how others see, and support, research universities.'
        },
        {
          s:'Three offices collect the same vendor data in three different forms.',
          a:0,
          x:'Duplicated process. Solve it and you return money and hours to the mission.'
        },
        {
          s:'Scaling one school’s successful pilot into a university-wide offering for working adults.',
          a:1,
          x:'A strategic bet on new learners. A pod could argue Exceptional Core Operations if the brief were about delivery; make the call on purpose.'
        }
      ]
    }
  },
  SCENARIOS:{
    m1:{
      h:'Situation 1 · The beloved program',
      s:'A small program serves 40 students a year with real impact. It costs three times what similar programs cost per student, and your budget is flat next year.',
      opts:[
        {
          t:'Protect it as is. Impact matters more than cost.',
          b:'Mission without margin',
          best:false,
          out:'It survives this year, and quietly eats the margin that funds next year. Heart programs are worth keeping when you are honest about what pays for them.'
        },
        {
          t:'Keep the outcome, redesign the delivery, and set a cost target.',
          b:'Values and viability, together',
          best:true,
          out:'You protect what students get and change how you deliver it. That is the leadership mindset: steward both purpose and performance.'
        },
        {
          t:'Close it. The numbers do not work.',
          b:'Margin without mission',
          best:false,
          out:'The budget balances, and a real mission result disappears that you could have kept with a redesign.'
        }
      ]
    },
    m2:{
      h:'Situation 2 · The revenue offer',
      s:'An outside partner offers to pay well to use your unit’s space and staff time. It would fund two positions, but it has nothing to do with your mission.',
      opts:[
        { t:'Take it. Money is money.', b:'Drift', best:false, out:'Margin with no mission tie can pull a team off its purpose a few hours at a time.' },
        {
          t:'Take it with limits, and name the mission work the margin will fund.',
          b:'Margin, on purpose',
          best:true,
          out:'Cap the staff time, decide in advance where the money goes, and write it down before you sign.'
        },
        {
          t:'Decline. It is off-mission.',
          b:'Principled, and costly',
          best:false,
          out:'You may be turning down the very capacity that would fund mission work you care about.'
        }
      ]
    },
    r1:{
      h:'Situation 1 · The mistake that went public',
      s:'Your office emailed admitted students the wrong deadline. A parent’s post about it is spreading. Your team found the error an hour ago.',
      opts:[
        {
          t:'Fix it quietly and hope the post fades.',
          b:'Silence reads as hiding',
          best:false,
          out:'The story keeps growing without you, and people fill the silence with the worst version.'
        },
        {
          t:'Correct it fast, apologize plainly, bring in Communications, and confirm the fix.',
          b:'Transparency, commitment, and empathy',
          best:true,
          out:'Speed and honesty shrink a mistake. Communications helps the university speak with one voice.'
        },
        {
          t:'Reply to the parent that it was a system error.',
          b:'Accurate, and defensive',
          best:false,
          out:'True, and it sounds like an excuse to the families who were confused.'
        }
      ]
    },
    r2:{
      h:'Situation 2 · The controversial speaker',
      s:'A group your unit supports invited a speaker whose views upset many on campus. You are getting calls to cancel.',
      opts:[
        {
          t:'Cancel it to keep the peace.',
          b:'Quiet today, costly later',
          best:false,
          out:'The calls stop, and everyone learns which views are welcome. That feeds the perception that universities are politicized.'
        },
        {
          t:'Keep it within policy, plan for safety and a respectful format, and listen to the people who are upset.',
          b:'Principle and empathy, together',
          best:true,
          out:'It reaches all four drivers: transparency about the policy, expertise from the offices that run events, commitment to a safe format, and empathy for the people who are upset.'
        },
        {
          t:'Stay out of it. It is not your event.',
          b:'Absent, not neutral',
          best:false,
          out:'People needed to hear from someone. Neutral is not the same as silent.'
        }
      ]
    }
  },
  CALL_SETS:{ margin:['m1', 'm2'], pressure:['r1', 'r2'] },
  CALL_PROG:{
    margin:{ prog:'margin', noun:'situations', status:'#marginStatus', narr:'margin/s' },
    pressure:{ prog:'trust', noun:'situations', status:'#trustStatus', narr:'trust/s' }
  },
  COMMITS:[
    ['Meet your pod', 'About 45 minutes. Agree on one challenge and one focus area.'],
    ['Draft sections 1 to 3 in the fillable brief', 'One brief per pod. Name one person to keep the file.'],
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
      q:'After a burst of national attention, applications and gifts both rose. Which idea explains why?',
      opts:['The three areas of focus', 'How reputation enables the mission', 'Mission and margin', 'The trust radar'],
      a:1,
      x:'Reputation attracts resources, like talent and funding, and what they achieve builds more reputation. Module 1, How Reputation Enables the Mission.'
    },
    {
      seg:'Reputation',
      q:'A data error from your office reached students this morning. Which response protects trust best?',
      opts:[
        'Wait until every fact is confirmed',
        'Correct it fast, say what you know and do not, name the owner of the fix, and bring in Communications',
        'Explain that it was a vendor’s fault',
        'Fix it quietly'
      ],
      a:1,
      x:'It reaches all four drivers on the trust radar: transparency, expertise, commitment, and empathy.'
    },
    {
      seg:'Reputation',
      q:'A story about a campus decision moves from a short wire item to a national TV segment built around one family’s experience. What should your response lead with?',
      opts:[
        'More data tables',
        'No comment until it fades',
        'A longer press release',
        'Testimony from the people affected, backed by the facts'
      ],
      a:3,
      x:'The story has migrated to mass-market coverage, which the Chancellor’s slide says runs on testimony and drama. A response needs voices from the people affected, with the facts behind them.'
    },
    {
      seg:'Reputation',
      q:'A small complaint about your office is starting to spread online but has not reached the news. When is the best time to act?',
      opts:[
        'Now, while your control is high and the stakes are still low',
        'When a reporter calls, so you know it matters',
        'After it peaks, so you have the full story',
        'Only if senior leadership asks you to'
      ],
      a:0,
      x:'Reputation dynamics: as an issue grows, control falls and the stakes rise. The optimal time to act is early, before it feels urgent.'
    },
    {
      seg:'Mission and margin',
      q:'Your pod’s challenge: a research partner walked away after a contract sat in approvals for four months. Which of the Chancellor’s four problems does it speak to most directly?',
      opts:[
        'Research universities lack core capabilities to deliver innovation at the speed and scale necessary for our modern world',
        'Elite universities are viewed as politicized bastions of ideology',
        'A university education is no longer viewed as essential for achieving the American dream',
        'None; it is only an internal process issue'
      ],
      a:0,
      x:'Problem 1: speed and scale. Naming the problem gives your brief its why it matters.'
    },
    {
      seg:'Mission and margin',
      q:'Your pod proposes a toolkit that lets other universities adopt a faster research-contracting process Vanderbilt built, presented at a national meeting. Which area of focus fits best?',
      opts:['Exceptional Core Operations', 'Bold Strategic Initiatives', 'Values Driven Leadership', 'It does not fit any'],
      a:2,
      x:'It models the role of an essential research university and stimulates industry change. That is Values Driven Leadership, the area of focus.'
    },
    {
      seg:'Mission and margin',
      q:'A high-impact mentoring program costs more than it brings in, and budgets are flat. What is the strongest move?',
      opts:[
        'Close it',
        'Protect it and change nothing',
        'Keep the outcome, redesign the delivery, and name what pays for it',
        'Move it to another unit'
      ],
      a:2,
      x:'Mission and margin together: keep what students get, change how it is delivered, and name the money that pays for it.'
    },
    {
      seg:'Mission and margin',
      q:'Which case for a new project would a judge find strongest on mission and margin?',
      opts:[
        'It will be great for everyone.',
        'It saves weeks of research time per hire, costs one checklist tool funded by two departments, and names who pays after the pilot year.',
        'It needs new funding, details to come.',
        'It is important to the mission.'
      ],
      a:1,
      x:'Specific mission benefit, cost and source, return, and the long-term trade-off after year one. The Chancellor’s leadership mindset: think long term and manage trade-offs.'
    }
  ],
  SCEN_POS:{ m1:0, m2:2, r1:2, r2:0 },
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
      '<b>Judge</b> a response with the trust radar, place a story on the reputation terrain, and spot the optimal time to act.',
      '<b>Explain</b> the three areas of focus and the four problems they answer.',
      '<b>Weigh</b> a decision on mission and margin.',
      '<b>Start</b> your pod’s capstone: choose a focus area and plan sections 1 to 3 of the brief.'
    ],
    lessons:[
      {
        title:'Vision, Strategy & the Future of Vanderbilt',
        no:'Module 1',
        keys:['vision', 'numbers', 'footprint', 'growth', 'flywheels', 'engine', 'loop', 'resources', 'wrap1'],
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
        keys:['trust', 'terrain', 'timing'],
        ideas:[
          ['Most people hear about Vanderbilt through others.', 'The media surrounds your audiences, and activists form a second circle around both.'],
          ['Trust has four drivers.', 'Transparency, expertise, commitment, and empathy. A strong response reaches all four.'],
          ['Stories migrate, so act early.', 'A story can move across the reputation terrain. The optimal time to act is while control is high and the stakes are low.']
        ]
      },
      {
        title:'Mission and Margin',
        no:'Module 3',
        keys:['mission', 'margin'],
        ideas:[
          [
            'Uncommon speed, agility and scale.',
            'Three areas of focus: Exceptional Core Operations, Bold Strategic Initiatives, and Values Driven Leadership, answering four problems.'
          ],
          ['Mission is purpose; margin is capacity.', 'Mission without margin is unsustainable, and margin without mission is meaningless.'],
          ['Building financial capacity is everybody’s job.', 'Financial discipline enables strategic investments.']
        ]
      },
      {
        title:'Quick check and capstone',
        no:'Capstone',
        keys:['quiz', 'capstone', 'brief', 'nextstep'],
        ideas:[
          ['Choose your focus area on purpose.', 'Your brief is judged only against others in the same area.'],
          [
            'Make the case on page one.',
            'Focus area, the challenge and why it matters, and the connection to Vanderbilt’s priorities.'
          ],
          ['Use the fillable brief.', 'One brief per pod, seven sections, three pages at most, due Friday, November 20.']
        ]
      }
    ],
    footer:'Your pod’s brief is due Friday, November 20, three pages at most.'
  },
  PRINT_TITLE:'Course One, my weekly <em>takeaway</em>.',
  EXIT_TOAST:'You can close this tab. See you in Course Two.'
};

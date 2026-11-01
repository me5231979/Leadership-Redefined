/* ══════════ LEADERSHIP REDEFINED · COURSE TWO · content ══════════
   Module 4: Communication, Storytelling and Brand (Steve Ertel's deck, pages 1 to 16);
   Module 5: Entrepreneurial Mindset (Vice Chancellor John Lutz's deck, pages 1 to 40);
   Module 6: High-Performing Teams (Candice Storey Lee, her principles and cited interviews).
   Every page is built to the version 3 standard (docs/design-v3.md) with the activity
   library (ACTIVITIES below, drawn by ../assets/js/lr-activities.js), in each deck's order.
   Each module opens with the Chancellor's video. Then a quick check and this week's moves.
   The capstone lives on its own page (../brief/), not in the course. Week of November 9.
   Every teaching claim traces to the decks, the Chancellor's three videos, or Lee's cited
   sources. Practice moments are labeled hypothetical. Learners never type in the course.
   Read by ../assets/js/pager.js and ../assets/js/lr-engine.js. No em or en dashes. */
window.LR_COURSE = {
  PLAN:[
    { sel:'section.hero', key:'home', label:'Welcome', mode:'whole' },
    { sel:'#week', key:'route', label:'This week', mode:'whole' },
    { sel:'#m4open', key:'m4', label:'Module 4: Welcome', mode:'whole' },
    { sel:'#brandrep', key:'brandrep', label:'Module 4: Brand and reputation', mode:'whole' },
    { sel:'#today', key:'today', label:'Module 4: Where are we today?', mode:'whole' },
    { sel:'#fighter', key:'fighter', label:'Module 4: The fighter brand', mode:'whole' },
    { sel:'#ring', key:'ring', label:'Module 4: Three flywheels', mode:'whole' },
    { sel:'#assets', key:'assets', label:'Module 4: Brand or reputation asset', mode:'whole' },
    { sel:'#aircover', key:'aircover', label:'Module 4: Air cover and ground game', mode:'whole' },
    { sel:'#spread', key:'spread', label:'Module 4: Heard or spread', mode:'whole' },
    { sel:'#groundgame', key:'groundgame', label:'Module 4: Unpacking the ground game', mode:'whole' },
    { sel:'#tempo', key:'tempo', label:'Module 4: The tempo', mode:'whole' },
    { sel:'#payoff', key:'payoff', label:'Module 4: Reputation to resources', mode:'whole' },
    { sel:'#wrap4', key:'wrap4', label:'Module 4: Wrap-up', mode:'whole' },
    { sel:'#m5open', key:'m5', label:'Module 5: Welcome', mode:'whole' },
    { sel:'#moment', key:'moment', label:'Module 5: Setting the stage', mode:'whole' },
    { sel:'#swot', key:'swot', label:'Module 5: Root causes', mode:'whole' },
    { sel:'#first100', key:'first100', label:'Module 5: First 100 days', mode:'whole' },
    { sel:'#connect', key:'connect', label:'Module 5: Key constituents', mode:'whole' },
    { sel:'#radical', key:'radical', label:'Module 5: Radical Collaboration', mode:'whole' },
    { sel:'#categories', key:'categories', label:'Module 5: Four categories', mode:'whole' },
    { sel:'#acorns', key:'acorns', label:'Module 5: ACORNS values', mode:'whole' },
    { sel:'#invest', key:'invest', label:'Module 5: Invest in people', mode:'whole' },
    { sel:'#structures', key:'structures', label:'Module 5: Retaining key talent', mode:'whole' },
    { sel:'#turnover', key:'turnover', label:'Module 5: Turnover', mode:'whole' },
    { sel:'#wins', key:'wins', label:'Module 5: Early wins', mode:'whole' },
    { sel:'#landscape', key:'landscape', label:'Module 5: The Vanderbilt Way', mode:'whole' },
    { sel:'#potential', key:'potential', label:'Module 5: Untapped potential', mode:'whole' },
    { sel:'#commitments', key:'commitments', label:'Module 5: Fundraising success', mode:'whole' },
    { sel:'#results', key:'results', label:'Module 5: Driving value', mode:'whole' },
    { sel:'#wrap5', key:'wrap5', label:'Module 5: Wrap-up', mode:'whole' },
    { sel:'#m6open', key:'m6', label:'Module 6: Welcome', mode:'whole' },
    { sel:'#principles', key:'principles', label:'Module 6: Six principles', mode:'whole' },
    { sel:'#teammoments', key:'teammoments', label:'Module 6: Team moments', mode:'whole' },
    { sel:'#rateteam', key:'rateteam', label:'Module 6: Rate your team', mode:'whole' },
    { sel:'#wrap6', key:'wrap6', label:'Module 6: Wrap-up', mode:'whole' },
    { sel:'#quiz', key:'quiz', label:'Quick check', mode:'whole' },
    { sel:'#nextstep', key:'nextstep', label:'This week', mode:'whole' },
    { sel:'#learn', key:'learn', label:'Keep going', mode:'whole', extras:['footer'] }
  ],
  SECTIONS:[
    { k:'route', no:'01', name:'This week', how:'Preview the three modules and the quick check' },
    { k:'brandrep', no:'02', name:'Brand and reputation', how:'Open all four parts of the slides' },
    { k:'today', no:'03', name:'Where are we today?', how:'Turn all three challenges' },
    { k:'fighter', no:'04', name:'The fighter brand', how:'Answer four true or false cards' },
    { k:'ring', no:'05', name:'Three flywheels', how:'Open all four parts of the ring' },
    { k:'assets', no:'06', name:'Brand or reputation asset', how:'Sort six of Ertel’s assets' },
    { k:'aircover', no:'07', name:'Air cover and ground game', how:'Turn both cards' },
    { k:'spread', no:'08', name:'Heard or spread', how:'Compare the two halves of the slide' },
    { k:'groundgame', no:'09', name:'Unpacking the ground game', how:'Put four steps in order' },
    { k:'tempo', no:'10', name:'The tempo', how:'Sort six moments: spike or drumbeat' },
    { k:'payoff', no:'11', name:'Reputation to resources', how:'Match four numbers to their resource' },
    { k:'moment', no:'12', name:'Before and today', how:'Answer eight cards' },
    { k:'swot', no:'13', name:'Root causes', how:'Open all four quadrants' },
    { k:'first100', no:'14', name:'First 100 days', how:'Reach an outcome in the scenario' },
    { k:'connect', no:'15', name:'Key constituents', how:'Match five moves' },
    { k:'radical', no:'16', name:'Radical Collaboration', how:'Turn all three principles' },
    { k:'categories', no:'17', name:'Four categories', how:'Sort six initiatives' },
    { k:'acorns', no:'18', name:'ACORNS values', how:'Match six behaviors' },
    { k:'invest', no:'19', name:'Invest in people', how:'Turn all four cards' },
    { k:'structures', no:'20', name:'Retaining key talent', how:'Open all five parts of the slide' },
    { k:'turnover', no:'21', name:'Turnover', how:'Predict DO turnover in FY26' },
    { k:'landscape', no:'22', name:'The Vanderbilt Way', how:'Turn both cards' },
    { k:'potential', no:'23', name:'Untapped potential', how:'Open all four parts of the table' },
    { k:'commitments', no:'24', name:'Fundraising success', how:'Predict new commitments in 2026' },
    { k:'results', no:'25', name:'Driving value', how:'Answer five true or false cards' },
    { k:'principles', no:'26', name:'Six principles', how:'Turn all six cards' },
    { k:'teammoments', no:'27', name:'Team moments', how:'Reach an outcome in the scenario' },
    { k:'rateteam', no:'28', name:'Rate your team', how:'Rate all six principles' },
    { k:'quiz', no:'29', name:'Quick check', how:'Score 6 of 8' },
    { k:'nextstep', no:'30', name:'This week', how:'Commit to all four moves' }
  ],
  ROUTE_PROG:'route',
  ROUTE_NARR:'route/g',
  STOPS:[
    {
      h:'Module 4: Communication, Storytelling &amp; <em>Brand</em>',
      p:'The Chancellor on video, then Steve Ertel on brand and reputation, the three flywheels, the ground game, the tempo, and what reputation pays back.',
      tags:['Brand and reputation', 'Flywheel assets', 'The ground game', 'The tempo']
    },
    {
      h:'Module 5: Entrepreneurial <em>Mindset</em>',
      p:'The Chancellor on video, then Vice Chancellor John Lutz on DAR Transformational Change, from root causes and the first 100 days to culture, talent, and results.',
      tags:['Root causes', 'First 100 days', 'Culture and talent', 'Results']
    },
    {
      h:'Module 6: High-Performing <em>Teams</em>',
      p:'The Chancellor on video, then Candice Storey Lee’s six principles, three team moments, and a self-check of your own team.',
      tags:['Six principles', 'Team moments', 'Rate your team']
    },
    {
      h:'Quick check and this <em>week</em>',
      p:'Eight situations from all three modules, then your moves for the week: Teams prompt 2, and sections 4 to 7 of your pod’s brief on the capstone page.',
      tags:['Quick check', 'Teams prompt 2', 'Your pod’s brief']
    }
  ],
  /* ══════ activities (version 3). Contracts: the header of ../assets/js/lr-activities.js ══════ */
  ACTIVITIES:{
    /* ── Module 4 · Steve Ertel ── */
    brandrep:{
      type:'explore',
      figure:'<div class="lr-deck"><svg viewBox="0 0 640 380" aria-hidden="true" focusable="false"><circle cx="196" cy="104" r="92" fill="#CFAE70" fill-opacity=".9"/><circle cx="444" cy="104" r="92" fill="#4F6F73" fill-opacity=".95"/><text x="196" y="92" text-anchor="middle" fill="#1C1C1C" font-family="Inter, sans-serif" font-weight="700" font-size="24">Brand</text><text x="196" y="122" text-anchor="middle" fill="#1C1C1C" font-family="Inter, sans-serif" font-size="15">What you say</text><text x="196" y="141" text-anchor="middle" fill="#1C1C1C" font-family="Inter, sans-serif" font-size="15">about yourself</text><text x="444" y="92" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-weight="700" font-size="24">Reputation</text><text x="444" y="122" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-size="15">What others</text><text x="444" y="141" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-size="15">say about you</text><path d="M298 104 H342 M298 104 l9 -8 M298 104 l9 8 M342 104 l-9 -8 M342 104 l-9 8" stroke="#ECB748" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="40" y1="222" x2="600" y2="222" stroke="rgba(255,255,255,.14)" stroke-dasharray="4 6"/><defs><marker id="c2Ba" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#E7C77A"/></marker><marker id="c2Bb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#fff"/></marker></defs><path d="M472 266 H520 V334 H476" fill="none" stroke="#E7C77A" stroke-width="3" marker-end="url(#c2Ba)"/><path d="M168 334 H120 V266 H164" fill="none" stroke="#fff" stroke-width="3" marker-end="url(#c2Bb)"/><rect x="170" y="244" width="300" height="44" rx="6" fill="rgba(207,174,112,.12)" stroke="#E7C77A" stroke-width="2"/><text x="320" y="274" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-weight="700" font-size="22">Reputation</text><rect x="170" y="312" width="300" height="44" rx="6" fill="rgba(255,255,255,.04)" stroke="#fff" stroke-width="2"/><text x="320" y="342" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-weight="700" font-size="22">Resources</text></svg></div>',
      pins:[ { id:'brand', x:18.4, y:10.5 }, { id:'rep', x:81.6, y:10.5 }, { id:'gap', x:50, y:14 }, { id:'loop', x:87, y:76 } ],
      spots:{
        brand:{ title:'Brand', text:'What you say about yourself. Later in this module you will see brand assets: Vanderbilt telling its own story, in its own voice.' },
        rep:{ title:'Reputation', text:'What others say about you. Reputation assets are other people telling Vanderbilt’s story: national outlets, honors, and coverage Vanderbilt does not write.' },
        gap:{ title:'Close the gap', text:'Brand and reputation are separate but related. The goal is to close the gap in order to achieve successful business results.' },
        loop:{ title:'Reputation and resources', text:'Ertel’s next slide is a loop. Reputation brings resources, and resources build reputation. He comes back to it at the end, with the evidence.' }
      },
      prompt:'Tap each numbered spot on Ertel’s two slides.',
      done:'You opened all four parts. Next, where Vanderbilt stands today.'
    },
    today:{
      type:'flip',
      cards:[
        { front:'Limited Brand Saliency', sub:'Challenge 1', back:'<p>Vanderbilt currently has strong brand awareness in the Southern region but struggles to gain the same level of recognition nationally.</p>' },
        { front:'Lack of Differentiation', sub:'Challenge 2', back:'<p>For many, Vanderbilt lacks distinction compared to peer institutions. This perceived lack of differentiation reduces the university’s ability to effectively convert awareness to consideration.</p>' },
        { front:'Universities Under Fire', sub:'Challenge 3', back:'<p>Vanderbilt, like all universities, must navigate the devaluation of the higher education industry, driven by issues around affordability, the admissions process, political ideologies and increasing polarization.</p>' }
      ],
      done:'All three challenges turned. Next, how Ertel describes the Vanderbilt brand.'
    },
    fighter:{
      type:'spot',
      labels:['True', 'False'],
      items:[
        { t:'Ertel calls Vanderbilt a fighter brand: not the loudest.', a:0, why:'His slide: the fighter brand. Not the loudest. Deeply valued once discovered.' },
        { t:'People who discover Vanderbilt tend to value it only a little.', a:1, why:'Deeply valued once discovered. High affinity: people who know Vanderbilt, value it.' },
        { t:'Vanderbilt’s main brand challenge is saliency: too few people know it.', a:0, why:'High affinity, low saliency. That matches the first challenge on his previous slide: limited brand saliency.' },
        { t:'Vanderbilt is equally well known in every region of the country.', a:1, why:'Vanderbilt has strong brand awareness in the Southern region but struggles to gain the same level of recognition nationally.' }
      ],
      done:'All four answered. Next, Ertel’s answer: differentiation as a design principle.'
    },
    ring:{
      type:'explore',
      figure:'<div class="lr-deck"><svg viewBox="0 0 460 460" aria-hidden="true" focusable="false"><defs><path id="c2FwT0" d="M72.1 281.3 A166 166 0 0 1 201.2 66.5"/><path id="c2FwT1" d="M264.5 67.6 A166 166 0 0 1 386.0 286.8"/><path id="c2FwT2" d="M102.8 336.7 A166 166 0 0 0 353.4 341.1"/><linearGradient id="c2Vg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3DFA6"/><stop offset=".5" stop-color="#CFAE70"/><stop offset="1" stop-color="#946E24"/></linearGradient></defs><path d="M48.3 303.4 A196 196 0 0 1 202.7 35.9 L227.1 64.0 L211.1 95.3 A136 136 0 0 0 103.9 280.9 L69.7 273.0 Z" class="fw fw1" data-hi="f1"/><text class="fwt" dy="5"><textPath href="#c2FwT0" startOffset="50%" text-anchor="middle">Execution with Ambition</textPath></text><path d="M257.3 35.9 A196 196 0 0 1 411.7 303.4 L375.2 310.5 L356.1 280.9 A136 136 0 0 0 248.9 95.3 L273.0 69.7 Z" class="fw fw2" data-hi="f2"/><text class="fwt" dy="5"><textPath href="#c2FwT1" startOffset="50%" text-anchor="middle">Values-Driven Leadership</textPath></text><path d="M384.5 350.7 A196 196 0 0 1 75.5 350.7 L87.7 315.5 L122.8 313.7 A136 136 0 0 0 337.2 313.7 L347.4 347.4 Z" class="fw fw3" data-hi="f3"/><text class="fwt" dy="5"><textPath href="#c2FwT2" startOffset="50%" text-anchor="middle">Athletics Momentum</textPath></text><path d="M168 178 H214 L230 232 L246 178 H292 L246 286 H214 Z" fill="url(#c2Vg)"/><path d="M214 178 L230 232 L230 286 H214 L190 230 Z" fill="#000" opacity=".12"/><text x="230" y="318" text-anchor="middle" class="fwc">Reputation</text></svg></div>',
      pins:[ { id:'f1', x:13.5, y:28 }, { id:'f2', x:87.2, y:29.3 }, { id:'f3', x:49.3, y:92.6 }, { id:'center', x:50, y:76 } ],
      spots:{
        f1:{ title:'Execution with Ambition', text:'The first flywheel of differentiation. Set big goals, then deliver them, so results speak for Vanderbilt. The Chancellor named the same three flywheels in Course One.' },
        f2:{ title:'Values-Driven Leadership', text:'The second flywheel. Leading by the values the university holds, in public, is something people notice and repeat.' },
        f3:{ title:'Athletics Momentum', text:'The third flywheel. Wins put Vanderbilt in front of national audiences, including people who do not know it yet.' },
        center:{ title:'Reputation, at the center', text:'Each flywheel turns reputation. On his next three slides, Ertel shows two assets for each flywheel: one brand asset and one reputation asset. You sort them next.' }
      },
      prompt:'Tap each numbered spot on the ring.',
      done:'You opened all four. Next, sort the six assets from his slides.'
    },
    assets:{
      type:'sort',
      noun:'asset',
      buckets:['Brand asset: what Vanderbilt says', 'Reputation asset: what others say'],
      groupLabel:'Brand asset or reputation asset',
      items:[
        { t:'<span class="c2-ast"><img src="../assets/img/deck/ertel-values-brand.jpg" alt="" width="560" height="705" /><span>Forbes: “The University And Its Purpose: A Declaration of First Principles,” by Daniel Diermeier.</span></span>', short:'Forbes essay by the Chancellor', a:0, why:'Values-Driven Leadership. The Chancellor says, in his own words, what Vanderbilt stands for.', hint:'Who wrote it? The byline is Vanderbilt’s own Chancellor.' },
        { t:'<span class="c2-ast"><img src="../assets/img/deck/ertel-values-reputation.jpg" alt="" width="560" height="705" /><span>New York magazine: “How Vandy Bested the Ivies.”</span></span>', short:'New York magazine', a:1, why:'Values-Driven Leadership. A national magazine tells Vanderbilt’s story in its own words.', hint:'Who is telling this story: Vanderbilt, or a magazine?' },
        { t:'<span class="c2-ast"><img src="../assets/img/deck/ertel-athletics-brand.jpg" alt="" width="560" height="700" /><span>“Some Think”: a Vanderbilt athletics piece.</span></span>', short:'“Some Think”', a:0, why:'Athletics Momentum. Vanderbilt telling its own story.', hint:'Ertel shows this as Vanderbilt speaking for itself.' },
        { t:'<span class="c2-ast"><img src="../assets/img/deck/ertel-athletics-reputation.jpg" alt="" width="560" height="705" /><span>The Tennessean: “Diego Pavia, Candice Lee among Vanderbilt honorees by Tennessee Sports Hall of Fame.”</span></span>', short:'The Tennessean', a:1, why:'Athletics Momentum. Others honor Vanderbilt people, and a newspaper reports it.', hint:'Who gave the honor, and who wrote the story?' },
        { t:'<span class="c2-ast"><img src="../assets/img/deck/ertel-execution-brand.jpg" alt="" width="560" height="700" /><span>Quantum Potential: “Vanderbilt’s Next Era: Campuses, Partnerships and the Power of Place with Chancellor Daniel Diermeier.”</span></span>', short:'Quantum Potential episode', a:0, why:'Execution with Ambition. Vanderbilt’s own episode, in the Chancellor’s voice.', hint:'Whose voice carries this episode?' },
        { t:'<span class="c2-ast"><img src="../assets/img/deck/ertel-execution-reputation.jpg" alt="" width="560" height="757" /><span>Bloomberg: “Nvidia CEO Pledges $75 Million for Vanderbilt in San Francisco.”</span></span>', short:'Bloomberg', a:1, why:'Execution with Ambition. A national business outlet reports what Vanderbilt did.', hint:'Bloomberg wrote this. Is that Vanderbilt speaking, or others?' }
      ],
      done:'All six sorted: one brand asset and one reputation asset for each flywheel.'
    },
    aircover:{
      type:'flip',
      figure:'<div class="lr-deck"><svg viewBox="0 0 420 300" aria-hidden="true" focusable="false"><defs><marker id="c2Aa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#E7C77A"/></marker><marker id="c2Ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8BA18E"/></marker></defs><path d="M352 72 H396 V222 H356" fill="none" stroke="#E7C77A" stroke-width="3" marker-end="url(#c2Aa)"/><path d="M68 222 H24 V72 H64" fill="none" stroke="#8BA18E" stroke-width="3" marker-end="url(#c2Ab)"/><rect x="70" y="40" width="280" height="64" rx="8" class="fw fw1" data-hi="f1"/><text x="210" y="82" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-weight="700" font-size="28" letter-spacing="1">AIR COVER</text><rect x="70" y="190" width="280" height="64" rx="8" class="fw fw2" data-hi="f2"/><text x="210" y="232" text-anchor="middle" fill="#fff" font-family="Inter, sans-serif" font-weight="700" font-size="28">Ground Game</text><text x="210" y="150" text-anchor="middle" fill="rgba(255,255,255,.7)" font-family="Inter, sans-serif" font-size="14">carried through</text></svg></div>',
      cards:[
        { front:'Air cover', hi:'f1', back:'<p>Reputation creates resources when air cover is carried through ground game.</p><p class="la-eg"><b>In plain words.</b> What reaches many people at once, like media coverage.</p>' },
        { front:'Ground game', hi:'f2', back:'<p>The ground game then compounds reputation.</p><p class="la-eg"><b>In plain words.</b> People sharing directly with the stakeholders they know.</p>' }
      ],
      done:'Both turned. Next, what the ground game is for.'
    },
    spread:{
      type:'compare',
      a:{ src:'../assets/img/deck/ertel-heard.jpg', alt:'Ertel’s slide with its left half lit: a crowd of figures, all facing forward, and the line, the goal is not simply to be heard.', label:'Heard', say:'A crowd, all facing one way. The goal is not simply to be heard.' },
      b:{ src:'../assets/img/deck/ertel-spread.jpg', alt:'Ertel’s slide with its right half lit: figures in pairs, each passing the message to the next, and the line, the goal is for the message to spread.', label:'Spread', say:'People in pairs, passing it on. The goal is for the message to spread.' },
      w:1907, h:720,
      label:'Compare heard and spread on Ertel’s slide',
      caption:'From Steve Ertel’s slide: the goal is not simply to be heard. The goal is for the message to spread.',
      done:'You compared heard and spread.'
    },
    groundgame:{
      type:'order',
      ends:['First', 'Last'],
      items:[
        { t:'Assets are created or emerge', why:'Stories, speeches, earned media, paid media, social media.' },
        { t:'Assets are shared directly with priority stakeholders and influencers', why:'Government, donors, business, prospective parents.' },
        { t:'Impact is multiplied through peer-to-peer engagement', why:'People pass the message on to people they know.' },
        { t:'The ground game compounds reputation', why:'From his air cover slide: the ground game then compounds reputation.' }
      ],
      start:[2, 0, 3, 1],
      why:'Created, shared directly, multiplied peer to peer, and reputation compounds.',
      hint:'Start with where an asset comes from. End with what the ground game does for reputation.',
      done:'In order. Next, the tempo.'
    },
    tempo:{
      type:'sort',
      noun:'moment',
      buckets:['Spike moment', 'Drumbeat'],
      groupLabel:'Spike moment or drumbeat',
      items:[
        { t:'A national news story features your unit’s program for one day.', short:'National story, one day', a:0, why:'A spike: a burst of attention. A spike without a system is noise.', hint:'One big moment, or a steady rhythm?' },
        { t:'Every month, your team sends key partners one short story of a result.', short:'Monthly story to partners', a:1, why:'A drumbeat: steady and repeated. It builds shared meaning, credibility and trust over time.', hint:'Look at the word every.' },
        { t:'A major gift announcement draws a burst of attention for a week.', short:'Gift announcement', a:0, why:'A spike. Valuable, and it needs a system behind it.', hint:'How long does the attention last?' },
        { t:'Each week, staff share one student or alumni story with people they know.', short:'Weekly stories, peer to peer', a:1, why:'A drumbeat, carried through the ground game: peer to peer, week after week.', hint:'One moment, or a rhythm?' },
        { t:'A big event draws a crowd and a day of social posts.', short:'Big event', a:0, why:'A spike. The days after decide whether it becomes more than noise.', hint:'Think about what happens the next day.' },
        { t:'Each term, leaders brief the same priority stakeholders on progress.', short:'Termly briefings', a:1, why:'A drumbeat: the same stakeholders, on a steady schedule.', hint:'A repeated schedule points to one answer.' }
      ],
      done:'All six sorted. Spikes matter, and the drumbeat is the system that keeps them from being noise.'
    },
    payoff:{
      type:'match',
      heads:['From Ertel’s slide', 'The resource it shows'],
      left:[
        { t:'<b>$4.5B</b> Dare to Grow campaign' },
        { t:'<b>65.6%</b> admissions yield rate' },
        { t:'<b>Davos</b> and other key international forums' },
        { t:'<b>120+</b> universities adopted institutional neutrality' }
      ],
      right:[ { t:'Funding' }, { t:'Talent' }, { t:'Access' }, { t:'Influence' } ],
      show:[2, 0, 3, 1],
      why:[
        'Funding. Reputation helps a campaign raise $4.5B.',
        'Talent. 65.6% of admitted students chose to enroll.',
        'Access. A seat at Davos and other key international forums.',
        'Influence. More than 120 universities adopted institutional neutrality, a position Vanderbilt took.'
      ],
      hint:[
        'A campaign raises what?',
        'Who chooses to enroll? People.',
        'Being in the room at a forum is which resource?',
        'Others adopting the same position is which resource?'
      ],
      done:'All four matched. Reputation creates resources, and resources build reputation.'
    },
    /* ── Module 5 · Vice Chancellor John Lutz ── */
    moment:{
      type:'spot',
      labels:['Before', 'Today'],
      items:[
        { t:'DAR work was very siloed.', a:0, why:'Before. The first condition on his slide, but it wasn’t always that way.' },
        { t:'50,000 applications and high selectivity.', a:1, why:'Today. Vanderbilt is having a moment.' },
        { t:'An in-office, clock-in 8 to 5 mentality, reinforced by a culture of fear.', a:0, why:'Before. A culture problem, not only a schedule problem.' },
        { t:'High turnover, limited paths for promotion, lack of professional development.', a:0, why:'Before. Watch for how each of these is answered later in this module.' },
        { t:'Surpassing the campaign goal by more than 40%, and over two years ahead of schedule.', a:1, why:'Today. The highest fundraising results in VU history.' },
        { t:'No shared credit and minimal collaboration across the department.', a:0, why:'Before. Shared credit comes back in his fundraising principles.' },
        { t:'Out of date processes and systems.', a:0, why:'Before. One of the four categories of change answers it.' },
        { t:'Stagnant fundraising results.', a:0, why:'Before. Teams were underperforming in a variety of ways.' }
      ],
      done:'All eight answered. Next, how Lutz found the root causes.'
    },
    swot:{
      type:'explore',
      figure:'<div class="lr-deck"><svg viewBox="0 0 640 400" aria-hidden="true" focusable="false"><rect x="8" y="8" width="306" height="186" rx="6" fill="rgba(139,161,142,.16)" stroke="#8BA18E" stroke-width="2"/><rect x="326" y="8" width="306" height="186" rx="6" fill="rgba(207,174,112,.16)" stroke="#E7C77A" stroke-width="2"/><rect x="8" y="206" width="306" height="186" rx="6" fill="rgba(207,174,112,.08)" stroke="#CFAE70" stroke-width="2"/><rect x="326" y="206" width="306" height="186" rx="6" fill="rgba(179,201,205,.14)" stroke="#B3C9CD" stroke-width="2"/><g font-family="Inter, sans-serif" fill="#fff"><g font-weight="700" font-size="22"><text x="28" y="44">Strengths</text><text x="346" y="44">Weaknesses</text><text x="28" y="242">Opportunities</text><text x="346" y="242">Threats</text></g><g font-size="16" fill="rgba(255,255,255,.86)"><text x="28" y="80">Strong brand</text><text x="28" y="106">Pockets of talented people</text><text x="28" y="132">Chancellor and Board</text><text x="28" y="152">of Trust support</text><text x="346" y="80">Silo mentality</text><text x="346" y="106">Rigid culture</text><text x="346" y="132">Hostile environment</text><text x="346" y="158">Out of date processes</text><text x="346" y="178">and systems</text><text x="28" y="278">New leadership</text><text x="28" y="304">Investment mentality</text><text x="28" y="330">Willing fellow travelers</text><text x="346" y="278">Time not on our side</text><text x="346" y="304">Pressure</text><text x="346" y="330">Urgency within a fragile</text><text x="346" y="350">environment</text></g></g></svg></div>',
      pins:[ { id:'s', x:45.3, y:8.5 }, { id:'w', x:95, y:8.5 }, { id:'o', x:45.3, y:58 }, { id:'t', x:95, y:58 } ],
      spots:{
        s:{ title:'Strengths', text:'Strong brand, pockets of talented people, and Chancellor and Board of Trust support. Something real to build on.' },
        w:{ title:'Weaknesses', text:'Silo mentality, rigid culture, hostile environment, and out of date processes and systems. Three of the four are about people and culture, which is where Lutz started the transformation.' },
        o:{ title:'Opportunities', text:'New leadership, an investment mentality, and willing fellow travelers: openings a new leader can use.' },
        t:{ title:'Threats', text:'Time not on our side, pressure, and urgency within a fragile environment. The reason he had to move quickly.' }
      },
      prompt:'Tap each numbered quadrant of his slide.',
      done:'All four quadrants opened. Next, the first 100 days.'
    },
    first100:{
      type:'branch',
      label:'Hypothetical',
      start:'n1',
      nodes:{
        n1:{ t:'You have just taken over a team that is underperforming. In week three, still meeting people one by one, you learn that a key process is failing right now.', opts:[
          { t:'Keep listening. Act only once the listening tour is done.', out:'The process fails for another month. People learn that listening means waiting.', next:'r2' },
          { t:'Keep listening, and fix the failing process now, telling people why.', out:'Listen carefully to key constituents while reinforcing necessary actions. The fix lands, and people see you heard them.', next:'n2' },
          { t:'Stop the meetings and overhaul everything yourself.', out:'You move quickly, but without clear-eyed assessments you fix the wrong things first.', next:'r2' } ] },
        n2:{ t:'Week six. Trust is building. A long-tenured colleague openly resists the new plan. A newer staff member is eager to help.', opts:[
          { t:'Ignore the resistance and hope it fades.', out:'The resistance spreads, and the eager staff member learns that pushing back works.', next:'r3' },
          { t:'Address the resistance directly, and give the newer staff member a visible role.', out:'Deal with resistance and underperformance while giving hope to future leaders.', next:'n3' },
          { t:'Move the resister off every project right away.', out:'You dealt with resistance, but everyone watching learns that disagreement ends careers.', next:'r3' } ] },
        r2:{ t:'Week six. Trust is thin after a rough start. A long-tenured colleague now openly resists the plan, and others are watching.', opts:[
          { t:'Address the resistance directly, and give a newer staff member a visible role.', out:'Deal with resistance and underperformance while giving hope to future leaders. The room starts to turn.', next:'n3' },
          { t:'Wait for the colleague to come around.', out:'Others take the silence as permission to resist too.', next:'r3' },
          { t:'Announce that the plan is not up for discussion.', out:'You send a serious signal, but you lose the people you need to carry it.', next:'r3' } ] },
        n3:{ t:'Month three. The team has momentum. A new data system arrives next month.', opts:[
          { t:'Install it and let people figure it out.', out:'New technology on old habits rarely changes results.', next:'e2' },
          { t:'Plan the training, roles, and process changes alongside the launch.', out:'Drive simultaneous people, process, technology agendas.', next:'e1' },
          { t:'Delay the system until the culture is fixed.', out:'Waiting on one agenda slows them all.', next:'e2' } ] },
        r3:{ t:'Month three. The team is wary. A new data system arrives next month.', opts:[
          { t:'Plan the training, roles, and process changes alongside the launch.', out:'Drive simultaneous people, process, technology agendas. The launch gives the team a shared win.', next:'e3' },
          { t:'Install it and let people figure it out.', out:'Frustration with the tool adds to the frustration with the change.', next:'e4' },
          { t:'Delay the system until the culture is fixed.', out:'The wait becomes one more reason to doubt the plan.', next:'e4' } ] },
        e1:{ end:true, h:'Momentum', t:'You listened and acted, dealt with resistance while giving hope, and moved people, process, and technology together. The team starts to perform.', debrief:'Change leadership requires ambidexterity. Lutz held both at once in his first 100 days.' },
        e2:{ end:true, h:'Strong start, stalled finish', t:'Your people work was strong, but the system arrived without the people and process changes it needed.', debrief:'Drive simultaneous people, process, technology agendas. One without the others stalls.' },
        e3:{ end:true, h:'A recovery', t:'A rough start, and then you found the balance. The team is moving again, though it cost you time you did not have.', debrief:'Time not on our side was one of his threats. Make clear-eyed assessments, but move quickly.' },
        e4:{ end:true, h:'Stuck', t:'The team is wary and the plan has stalled.', debrief:'Each choice favored one side. Change leadership requires ambidexterity: listen while acting, assess while moving, deal with resistance while giving hope.' }
      },
      done:'You reached an outcome. Try another path to see how the choices change it.'
    },
    connect:{
      type:'match',
      heads:['Hypothetical move', 'What it does, from his slide'],
      left:[
        { t:'A skeptical board member gets a 30-day check-in, and your promise to report back on results.' },
        { t:'In week one, you replace a broken process and say plainly that more changes are coming.' },
        { t:'You ask a dean what DAR has gotten wrong, then deliver one fix the dean asked for.' },
        { t:'You meet one on one with the top gift officers, and ask what gets in their way.' },
        { t:'You bring in an idea from outside higher education that solves a problem the team has lived with for years.' }
      ],
      right:[ { t:'Buy time with potential critics' }, { t:'Send serious signals that I mean business' }, { t:'Reverse DAR’s image as a poor partner' }, { t:'Build trust and loyalty with top producers' }, { t:'Deliver distinctive value and outside perspective' } ],
      show:[3, 0, 4, 1, 2],
      why:[
        'Buy time with potential critics. A clear date to report back gives the change room to work.',
        'Send serious signals that I mean business. A visible early action shows the change is real.',
        'Reverse DAR’s image as a poor partner. Asking, then delivering, rebuilds a relationship.',
        'Build trust and loyalty with top producers. The people who deliver most need to be heard first.',
        'Deliver distinctive value and outside perspective. Look beyond best practices for new ideas.'
      ],
      hint:[
        'Who is the audience here, and what does the check-in buy you?',
        'What does a fast, visible action tell everyone watching?',
        'This is about a campus partner who has doubted DAR.',
        'Who are the top producers in a fundraising team?',
        'The idea comes from outside higher education.'
      ],
      done:'All five matched. Leadership demands connectivity and communications to all key constituents.'
    },
    radical:{
      type:'flip',
      cards:[
        { front:'We are always donor-centric', sub:'Principle 1', back:'<p>Our gift proposals will reflect donor interests and passions in alignment with the university’s goals and mission.</p><p>University priorities are best served by working with donors, rather than trying to steer them in a particular direction.</p>' },
        { front:'Fundraising is a team sport', sub:'Principle 2', back:'<p>Multiple roles are needed to execute our strategies.</p><p>Every Vanderbilt leader is a fundraiser.</p>' },
        { front:'We operate as One Vanderbilt', sub:'Principle 3', back:'<p>Donors who support multiple areas give the most.</p><p>All key prospects have cross-Vanderbilt strategies supported by “shared credit” mechanisms.</p>' }
      ],
      done:'All three principles turned. Next, the four categories of change.'
    },
    categories:{
      type:'sort',
      noun:'initiative',
      buckets:['1. People and Culture', '2. Collaboration and Engagement', '3. Motivation and Incentives', '4. Processes and Systems'],
      groupLabel:'The four categories of change initiatives',
      items:[
        { t:'Invest in professional development', short:'Professional development', a:0, why:'People and culture, where the transformation started, with core values, leadership, communications, and talent.', hint:'Who does this initiative grow?' },
        { t:'Rebuild relationships with deans and other campus partners', short:'Rebuild relationships with deans', a:1, why:'Collaboration and engagement, crucial both intramurally and extramurally.', hint:'This is about partners across campus.' },
        { t:'Create kaizen culture', short:'Kaizen culture', a:3, why:'Processes and systems. Kaizen means steady, small improvement to how work gets done.', hint:'Kaizen is about continuous improvement of the work itself.' },
        { t:'Balanced performance indicators for gift officers', short:'Balanced indicators', a:2, why:'Motivation and incentives: structures that drive change and recognize performance.', hint:'What does a performance indicator reward?' },
        { t:'Create infrastructure to encourage collaboration on cross-institutional gifts', short:'Cross-institutional gifts', a:1, why:'Collaboration and engagement. One Vanderbilt, with shared credit.', hint:'The key word is collaboration.' },
        { t:'Introduce data analytics', short:'Data analytics', a:3, why:'Processes and systems, crucial to change drivers, with a new CRM and better data.', hint:'Data and tools belong to one category.' }
      ],
      done:'All six sorted into the four categories.'
    },
    acorns:{
      type:'match',
      heads:['Hypothetical behavior', 'ACORNS value'],
      left:[
        { t:'A priority shifts mid-year, and the team re-plans its month in one meeting.' },
        { t:'A gift officer brings a colleague from another school into a donor visit, and they share the credit.' },
        { t:'A staff member spots a data error, fixes it, and shows the team how to prevent it.' },
        { t:'A colleague answers an alum’s question fully and quickly, though it is not their area.' },
        { t:'A team borrows an idea from restaurant hospitality to plan donor events.' },
        { t:'In a tense meeting, a leader listens fully to a view she disagrees with.' }
      ],
      right:[ { t:'Agility' }, { t:'Collaboration' }, { t:'Ownership' }, { t:'Service' }, { t:'New Ideas' }, { t:'Respect' } ],
      show:[2, 5, 0, 4, 1, 3],
      why:[
        'Agility: adjusting quickly when things change.',
        'Collaboration: working across lines, and sharing the credit.',
        'Ownership: treating the problem as yours to solve.',
        'Service: taking care of the person in front of you.',
        'New Ideas, from outside higher ed, like the hospitality book on his professional development slide.',
        'Respect: hearing people out, most of all in disagreement.'
      ],
      hint:[
        'How fast did the team adjust?',
        'Two people from two units, one shared result.',
        'Whose problem did the staff member treat it as?',
        'Who was taken care of here?',
        'Where did the idea come from?',
        'How did she treat a view she disagreed with?'
      ],
      done:'All six matched. Our ACORNS values are a foundation for culture.'
    },
    invest:{
      type:'flip',
      cards:[
        { front:'Expanding leadership capacity', sub:'Two groups', back:'<p><b>VC Strategic Council, 16 members:</b> develops and deploys key strategies, shepherding our OKRs. <b>Senior Leaders Group, 40 members:</b> socializes strategic information and values.</p><p class="la-eg">Why: contributions outside the “day” job, knitting together leadership levels, innovation and ideation, intentional community building.</p>' },
        { front:'Communications and team building', sub:'Connection', back:'<p>Aligning internal communications into a modern intranet platform. Connecting across teams in new ways, making meetings fun and informative. Fostering connection through team building and celebration.</p>' },
        { front:'Professional development', sub:'Learning', back:'<p>A regular cadence of professional development workshops. Connecting colleagues to career development resources. Exploring innovations and insights outside of higher ed.</p>' },
        { front:'Recruiting and promoting', sub:'Talent', back:'<p>Deliberate recruiting and onboarding. Significant investment in education and training. An intentional talent development strategy.</p><p class="la-eg"><b>73 internal promotions</b> during the growth period.</p>' }
      ],
      done:'All four turned. Next, the structures that keep talent.'
    },
    structures:{
      type:'explore',
      figure:'<div class="lr-deck"><svg viewBox="0 0 640 320" aria-hidden="true" focusable="false"><g font-family="Inter, sans-serif" fill="#fff"><rect x="8" y="20" width="250" height="124" rx="6" fill="rgba(139,161,142,.14)" stroke="#8BA18E" stroke-width="2"/><circle cx="62" cy="82" r="30" fill="none" stroke="#E7C77A" stroke-width="3"/><circle cx="62" cy="82" r="17" fill="none" stroke="#E7C77A" stroke-width="3"/><circle cx="62" cy="82" r="5" fill="#E7C77A"/><text x="104" y="74" font-weight="700" font-size="16">Rigorous Goal</text><text x="104" y="96" font-weight="700" font-size="16">Setting Process</text><rect x="8" y="164" width="250" height="124" rx="6" fill="rgba(139,161,142,.14)" stroke="#8BA18E" stroke-width="2"/><path d="M38 252 V222 M56 252 V204 M74 252 V214 M92 252 V196" stroke="#E7C77A" stroke-width="10" stroke-linecap="round"/><text x="118" y="210" font-weight="700" font-size="16">Balanced</text><text x="118" y="232" font-weight="700" font-size="16">Performance</text><text x="118" y="254" font-weight="700" font-size="16">Indicators for</text><text x="118" y="276" font-weight="700" font-size="16">Gift Officers</text><line x1="300" y1="190" x2="628" y2="190" stroke="#E7C77A" stroke-width="5" stroke-linecap="round"/><path d="M464 192 L428 262 H500 Z" fill="rgba(207,174,112,.2)" stroke="#E7C77A" stroke-width="3" stroke-linejoin="round"/><rect x="318" y="128" width="96" height="58" rx="6" fill="rgba(207,174,112,.18)" stroke="#E7C77A" stroke-width="2"/><text x="366" y="153" text-anchor="middle" font-size="13" font-weight="700">Individual Goal</text><text x="366" y="172" text-anchor="middle" font-size="13" font-weight="700">Achievement</text><rect x="514" y="128" width="96" height="58" rx="6" fill="rgba(179,201,205,.16)" stroke="#B3C9CD" stroke-width="2"/><text x="562" y="153" text-anchor="middle" font-size="13" font-weight="700">Team</text><text x="562" y="172" text-anchor="middle" font-size="13" font-weight="700">Recognition</text><text x="464" y="290" text-anchor="middle" font-size="15" fill="#E7C77A" font-weight="700">Balance Point</text></g></svg></div>',
      pins:[ { id:'goal', x:37.5, y:12.5 }, { id:'ind', x:37.5, y:57.5 }, { id:'indiv', x:57.2, y:34.5 }, { id:'team', x:87.8, y:34.5 }, { id:'bal', x:72.5, y:72 } ],
      spots:{
        goal:{ title:'Rigorous Goal Setting Process', text:'The first structure on his slide. Goals are set through a rigorous process, so each person knows what counts.' },
        ind:{ title:'Balanced Performance Indicators for Gift Officers', text:'More than one measure for the people who raise the gifts, held in balance.' },
        indiv:{ title:'Individual Goal Achievement', text:'One side of the scale: each person is recognized for reaching their own goals.' },
        team:{ title:'Team Recognition', text:'The other side: the team is recognized for what it achieves together. Later you will see that 7 of 11 top gifts were closed by collaborative teams.' },
        bal:{ title:'The Balance Point', text:'Lutz holds individual goal achievement and team recognition at a balance point, so neither one crowds out the other.' }
      },
      prompt:'Tap each numbered part of his slide.',
      done:'All five opened. Next, what these structures did to turnover.'
    },
    turnover:{
      type:'predict',
      rounds:[
        { title:'DO turnover', chart:0, q:'For development officers (DO), turnover was 26.5% in FY19. What was it in FY26?', min:0, max:30, step:0.5, start:20, post:'%', dec:1, answer:10.6, close:2, x:'10.6% in FY26, down from 26.5% in FY19. Overall turnover fell from 18.9% to 9.5%. The biggest drop for both came between FY23 and FY24.' }
      ],
      done:'Predicted. We are making typical DAR job hopping more difficult.'
    },
    landscape:{
      type:'flip',
      cards:[
        { front:'Traditional Model', sub:'Traditional alumni giving alone is not enough', back:'<p>Alumni giving focus.</p><p>Transactional fundraising.</p><p>Siloed relationships.</p>' },
        { front:'The Vanderbilt Way', sub:'Growth requires a stronger donor-centric engagement model', back:'<p>Reaching families and new donors.</p><p>Increased affinity.</p><p>Accelerated gift conversations.</p><p>Deepened stewardship.</p>' }
      ],
      done:'Both turned. The philanthropic landscape has changed.'
    },
    potential:{
      type:'explore',
      figure:'<div class="lr-deck"><svg viewBox="0 0 640 360" aria-hidden="true" focusable="false"><g font-family="Inter, sans-serif" font-size="13"><rect x="8" y="8" width="624" height="30" fill="#4F6F73"/><text x="320" y="28" text-anchor="middle" fill="#fff" font-weight="700" letter-spacing="1">UNASSIGNED PROSPECTS</text><rect x="8" y="40" width="624" height="26" fill="rgba(207,174,112,.18)"/><text x="14" y="58" fill="#fff" font-weight="700">Rating bands</text><text x="167.7" y="58" text-anchor="middle" fill="#fff" font-weight="700" font-size="12">Low RFM</text><text x="239.1" y="58" text-anchor="middle" fill="#fff" font-weight="700" font-size="12">High RFM</text><text x="310.6" y="58" text-anchor="middle" fill="#fff" font-weight="700" font-size="12">Parents</text><text x="382.0" y="58" text-anchor="middle" fill="#fff" font-weight="700" font-size="12">Corp/Fdn</text><text x="453.4" y="58" text-anchor="middle" fill="#fff" font-weight="700" font-size="12">Intl</text><text x="524.9" y="58" text-anchor="middle" fill="#fff" font-weight="700" font-size="12">Unaffil.</text><text x="596.3" y="58" text-anchor="middle" fill="#fff" font-weight="700" font-size="12">Total</text><text x="14" y="82" fill="rgba(255,255,255,.6)" font-style="italic" font-size="12">Low</text><text x="74" y="82" fill="rgba(255,255,255,.6)" font-style="italic" font-size="12">High</text><rect x="8" y="88" width="624" height="28" fill="rgba(255,255,255,.04)"/><text x="14" y="107" fill="#fff">$10M</text><text x="74" y="107" fill="#fff">$100M+</text><text x="195.4" y="107" text-anchor="end" fill="#fff">22</text><text x="266.9" y="107" text-anchor="end" fill="#fff">12</text><text x="338.3" y="107" text-anchor="end" fill="#fff"></text><text x="409.7" y="107" text-anchor="end" fill="#fff"></text><text x="481.1" y="107" text-anchor="end" fill="#fff"></text><text x="552.6" y="107" text-anchor="end" fill="#fff"></text><text x="624.0" y="107" text-anchor="end" fill="#E7C77A" font-weight="700">34</text><text x="14" y="135" fill="#fff">$5M</text><text x="74" y="135" fill="#fff">$10M</text><text x="195.4" y="135" text-anchor="end" fill="#fff">36</text><text x="266.9" y="135" text-anchor="end" fill="#fff">13</text><text x="338.3" y="135" text-anchor="end" fill="#fff"></text><text x="409.7" y="135" text-anchor="end" fill="#fff"></text><text x="481.1" y="135" text-anchor="end" fill="#fff"></text><text x="552.6" y="135" text-anchor="end" fill="#fff"></text><text x="624.0" y="135" text-anchor="end" fill="#E7C77A" font-weight="700">49</text><rect x="8" y="144" width="624" height="28" fill="rgba(255,255,255,.04)"/><text x="14" y="163" fill="#fff">$1M</text><text x="74" y="163" fill="#fff">$5M</text><text x="195.4" y="163" text-anchor="end" fill="#fff">1681</text><text x="266.9" y="163" text-anchor="end" fill="#fff">438</text><text x="338.3" y="163" text-anchor="end" fill="#fff">326</text><text x="409.7" y="163" text-anchor="end" fill="#fff">10</text><text x="481.1" y="163" text-anchor="end" fill="#fff">25</text><text x="552.6" y="163" text-anchor="end" fill="#fff">10</text><text x="624.0" y="163" text-anchor="end" fill="#E7C77A" font-weight="700">2490</text><text x="14" y="191" fill="#fff">$500K</text><text x="74" y="191" fill="#fff">$1M</text><text x="195.4" y="191" text-anchor="end" fill="#fff">2721</text><text x="266.9" y="191" text-anchor="end" fill="#fff">646</text><text x="338.3" y="191" text-anchor="end" fill="#fff">390</text><text x="409.7" y="191" text-anchor="end" fill="#fff">20</text><text x="481.1" y="191" text-anchor="end" fill="#fff">40</text><text x="552.6" y="191" text-anchor="end" fill="#fff">20</text><text x="624.0" y="191" text-anchor="end" fill="#E7C77A" font-weight="700">3837</text><rect x="8" y="200" width="624" height="28" fill="rgba(255,255,255,.04)"/><text x="14" y="219" fill="#fff">$250K</text><text x="74" y="219" fill="#fff">$500K</text><text x="195.4" y="219" text-anchor="end" fill="#fff">1634</text><text x="266.9" y="219" text-anchor="end" fill="#fff">446</text><text x="338.3" y="219" text-anchor="end" fill="#fff">215</text><text x="409.7" y="219" text-anchor="end" fill="#fff">30</text><text x="481.1" y="219" text-anchor="end" fill="#fff">75</text><text x="552.6" y="219" text-anchor="end" fill="#fff">40</text><text x="624.0" y="219" text-anchor="end" fill="#E7C77A" font-weight="700">2440</text><text x="14" y="247" fill="#fff">$100K</text><text x="74" y="247" fill="#fff">$250K</text><text x="195.4" y="247" text-anchor="end" fill="#fff">10,748</text><text x="266.9" y="247" text-anchor="end" fill="#fff">2247</text><text x="338.3" y="247" text-anchor="end" fill="#fff">1185</text><text x="409.7" y="247" text-anchor="end" fill="#fff">85</text><text x="481.1" y="247" text-anchor="end" fill="#fff">100</text><text x="552.6" y="247" text-anchor="end" fill="#fff">80</text><text x="624.0" y="247" text-anchor="end" fill="#E7C77A" font-weight="700">14,445</text><line x1="8" x2="632" y1="256" y2="256" stroke="#E7C77A" stroke-width="1.5"/><text x="74" y="276" fill="#fff" font-weight="700">Total</text><text x="195.4" y="276" text-anchor="end" fill="#fff" font-weight="700">16,842</text><text x="266.9" y="276" text-anchor="end" fill="#fff" font-weight="700">3802</text><text x="338.3" y="276" text-anchor="end" fill="#fff" font-weight="700">2116</text><text x="409.7" y="276" text-anchor="end" fill="#fff" font-weight="700">145</text><text x="481.1" y="276" text-anchor="end" fill="#fff" font-weight="700">240</text><text x="552.6" y="276" text-anchor="end" fill="#fff" font-weight="700">150</text><text x="624.0" y="276" text-anchor="end" fill="#E7C77A" font-weight="700">23,295</text><ellipse cx="592.3" cy="271" rx="34" ry="14" fill="none" stroke="#E7C77A" stroke-width="2"/><text x="8" y="296" fill="rgba(255,255,255,.86)" font-size="14">We have determined that, with our typical engagement rate* of <tspan fill="#E7C77A" font-weight="700">8%</tspan>, we can develop</text><text x="8" y="316" fill="#E7C77A" font-size="14" font-weight="700">1800 new major gift relationships.</text><text x="8" y="336" fill="rgba(255,255,255,.55)" font-size="11" font-style="italic">*Derived from recent Vanderbilt efforts with this prospect group</text></g></svg></div>',
      pins:[ { id:'top', x:55.5, y:28.3 }, { id:'big', x:55.5, y:66.5 }, { id:'total', x:93.3, y:82 }, { id:'eng', x:80, y:94.5 } ],
      spots:{
        top:{ title:'The top bands', text:'34 prospects rated $10M to $100M and more, and 49 rated $5M to $10M, with no one assigned to them.' },
        big:{ title:'The largest band', text:'14,445 prospects rated $100K to $250K: the biggest group on the table.' },
        total:{ title:'23,295 unassigned prospects', text:'Significant improvements in systems, data, and analytical abilities revealed many promising but unassigned prospects, representing untapped potential.' },
        eng:{ title:'1,800 new relationships', text:'With a typical engagement rate of 8%, derived from recent Vanderbilt efforts with this prospect group, the team can develop 1,800 new major gift relationships.' }
      },
      prompt:'Tap each numbered spot on his table.',
      done:'All four opened. Next, what that potential became.'
    },
    commitments:{
      type:'predict',
      rounds:[
        { title:'New commitments', chart:1, q:'New commitments were $149M in 2017 and $346M in 2025. What were they in 2026?', min:0, max:900, step:5, start:450, pre:'$', post:'M', dec:0, answer:757, close:75, x:'$757M in 2026. His chart marks a 43% CAGR, compound annual growth rate.' }
      ],
      done:'Predicted. Our fundraising success continues to accelerate.'
    },
    results:{
      type:'spot',
      labels:['True', 'False'],
      items:[
        { t:'From 2020 to 2026, DAR grew its frontline headcount by 50%.', a:0, why:'Grew frontline headcount by 50% and invested in all areas.' },
        { t:'Most top gifts were closed by one gift officer working alone.', a:1, why:'7 of 11 top gifts were closed by collaborative teams.' },
        { t:'DAR had multiple record-breaking fundraising years.', a:0, why:'Multiple record-breaking fundraising years, with the lowest staff turnover in a decade.' },
        { t:'The gains came in a few gift bands only.', a:1, why:'Visits are up, qualifications are up, and DAR grew in all gift bands.' },
        { t:'Lutz sees the transformation as finished.', a:1, why:'In his words: and we know that transformation, fueled by innovation, is never complete.' }
      ],
      done:'All five answered. DAR is now a strategic asset for Vanderbilt.'
    },
    /* ── Module 6 · Candice Storey Lee (her principles and wording, unchanged) ── */
    principles:{
      type:'flip',
      cards:[
        { front:'Every decision, values-based', sub:'Principle 1', back:'<p>Lee says every decision she makes is values-based, every single time: name the core values, then act on them consistently.</p><p class="la-eg">Source: Vanderbilt News, May 2026</p>' },
        { front:'Create the conditions for success', sub:'Principle 2', back:'<p>Leaders are responsible for building an environment that equips and empowers people to contribute at their highest level.</p><p class="la-eg">Source: Candice Storey Lee</p>' },
        { front:'Emotional agility', sub:'Principle 3', back:'<p>“It’s okay to feel how you feel, but what really matters is what you do. You are accountable for what you do, how you act and how you respond.”</p><p class="la-eg">Source: Vanderbilt News, May 2026</p>' },
        { front:'Find the joy in the process', sub:'Principle 4', back:'<p>Winning is a result, she says, but the joy comes from commitment to the process, pushing yourself, and reaching your potential.</p><p class="la-eg">Source: Vanderbilt News, May 2026</p>' },
        { front:'Identify and develop talent', sub:'Principle 5', back:'<p>Great teams are not just assembled, they’re built. As leaders, our job is to nurture potential in people and then give them the support to optimize it.</p><p class="la-eg">Source: Candice Storey Lee</p>' },
        { front:'Responsibility of leadership', sub:'Principle 6', back:'<p>Leaders have a responsibility to model what we expect of others. That includes being steady when things are hard, discreet with what’s been entrusted to us, and consistent in how we show up for our people.</p><p class="la-eg">Source: Candice Storey Lee</p>' }
      ],
      done:'All six principles turned. Next, put them to work.'
    },
    teammoments:{
      type:'branch',
      label:'Hypothetical',
      start:'n1',
      nodes:{
        n1:{ t:'The Monday after. Your team’s project is being praised all the way to the Chancellor’s office, and everyone is still celebrating.', opts:[
          { t:'Let the glow carry the team for a few weeks.', out:'Without a next goal, energy drifts.', next:'r2' },
          { t:'Celebrate people by name, capture what made it work, and point at the next goal.', out:'Lee says winning is a result; the joy comes from commitment to the process. You named what worked and set the next goal.', next:'n2' },
          { t:'Skip the celebration and go to the next deadline.', out:'You lose the lesson, and the energy that came with the win.', next:'r2' } ] },
        n2:{ t:'Two weeks later. Your best performer posts something unprofessional about a partner office. Colleagues across campus saw it.', opts:[
          { t:'Let it go. They deliver more than anyone.', out:'The team learns the rules depend on who you are.', next:'r3' },
          { t:'Name it as unacceptable, expect a repair, and keep supporting them.', out:'Emotional agility, in Lee’s words: it is okay to feel how you feel, but you are accountable for how you act and respond. Work with HR on anything that rises to a conduct issue.', next:'n3' },
          { t:'Pull them off every project right away.', out:'Everyone learns one mistake ends you, and people stop taking risks.', next:'r3' } ] },
        r2:{ t:'Two weeks later. Energy has drifted since the win. Now your best performer posts something unprofessional about a partner office, and colleagues across campus saw it.', opts:[
          { t:'Name it as unacceptable, expect a repair, and keep supporting them.', out:'You are accountable for how you act and respond, and so are they. The team sees the standard hold.', next:'n3' },
          { t:'Let it go. Morale is low enough already.', out:'The team learns the rules depend on who you are.', next:'r3' },
          { t:'Pull them off every project right away.', out:'Everyone learns one mistake ends you.', next:'r3' } ] },
        n3:{ t:'A month later. A vendor delay outside your control puts the team’s key project two weeks behind. The team is frustrated.', opts:[
          { t:'Spend the team meeting on what the vendor got wrong.', out:'Lee: it is easy to lament things you cannot control, and we never want to do that.', next:'e2' },
          { t:'Lower the goal so no one is disappointed.', out:'The team learns the standard bends when things get hard.', next:'e2' },
          { t:'Acknowledge the frustration, then focus the team on what it controls this week.', out:'Leaders create the conditions for success, even when a delay is out of their hands.', next:'e1' } ] },
        r3:{ t:'A month later. Trust is shaky. A vendor delay outside your control puts the team’s key project two weeks behind.', opts:[
          { t:'Acknowledge the frustration, then focus the team on what it controls this week.', out:'Leaders create the conditions for success. The team has something to steady itself on.', next:'e3' },
          { t:'Spend the team meeting on what the vendor got wrong.', out:'It is easy to lament things you cannot control, and we never want to do that.', next:'e4' },
          { t:'Lower the goal so no one is disappointed.', out:'The standard bends, and the team notices.', next:'e4' } ] },
        e1:{ end:true, h:'A team that keeps building', t:'You found joy in the process, held the standard with emotional agility, and created the conditions for success when things went wrong.', debrief:'Lee’s principles at work: every decision values-based, every single time, and leaders who model what they expect of others.' },
        e2:{ end:true, h:'A strong team, tested', t:'Two strong calls, and then the delay pulled the team toward what it cannot control.', debrief:'Create the conditions for success: an environment that equips and empowers people to contribute at their highest level.' },
        e3:{ end:true, h:'Steady again', t:'A rough patch, and then you steadied the team on what it controls.', debrief:'Responsibility of leadership: being steady when things are hard, and consistent in how we show up for our people.' },
        e4:{ end:true, h:'Drifting', t:'The team is frustrated, and the standard has slipped.', debrief:'Values decide every time. Name them, then let them decide the hard calls, especially when things are hard.' }
      },
      done:'You reached an outcome. Try another path to see how the choices change it.'
    },
    rateteam:{
      type:'rate',
      title:'Your team on Lee’s six principles',
      dims:['Values first', 'Conditions', 'Emotional agility', 'Joy in the process', 'Talent', 'Modeling'],
      levels:['Not yet', 'Partly', 'Strongly'],
      low:'Your thinnest side: {dims}. Pick one move there for your next team meeting. The wrap-up helps you plan it.',
      high:'Every side reaches the outer ring. Ask your team to rate it too, and compare.',
      done:'Just for you. Nothing is scored.'
    },
  },
  CHARTS:[
    { type:'line', title:'We are making typical DAR job hopping more difficult', sub:'Turnover, FY19 to FY26. DO: development officers.', fmt:'pct', max:30, step:5, w:640, h:380, cats:['FY19', 'FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'FY26'], hide:1,
      series:[
        { name:'Overall Turnover', color:'#B3C9CD', pos:'below', vals:[18.9, 20.0, 22.0, 18.5, 18.1, 10.6, 8.6, 9.5], labs:['18.9%', '20.0%', '22.0%', '18.5%', '18.1%', '10.6%', '8.6%', '9.5%'] },
        { name:'DO Turnover', color:'#CFAE70', vals:[26.5, 20.0, 24.5, 23.5, 23.9, 13.7, 11.0, 10.6], labs:['26.5%', '20.0%', '24.5%', '23.5%', '23.9%', '13.7%', '11.0%', '10.6%'] }
      ] },
    { type:'line', title:'Our fundraising success continues to accelerate', sub:'New commitments, in millions of dollars, 2017 to 2026.', fmt:'usd', max:800, step:200, w:640, h:380, axis:'Millions', cats:['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'], hide:0,
      arrow:{ from:4, to:8, label:'43% CAGR' },
      series:[ { name:'New commitments', color:'#B3C9CD', vals:[149, 158, 179, 125, 168, 185, 319, 265, 346, 757], labs:['$149', '$158', '$179', '$125', '$168', '$185', '$319', '$265', '$346', '$757'] } ] }
  ],
  COMMITS:[
    ['Work on sections 4 to 7 of your pod’s brief', 'On the capstone page: solution, steps, metrics, sustainability.'],
    ['Respond to Teams prompt 2', 'Post under Discussions by Friday, November 13.'],
    ['Reply to a colleague', 'Build on their idea, or offer a practical way to apply it.'],
    ['Meet your pod', 'Week of November 16. Turn in one brief by Friday, November 20.']
  ],
  tell:function(which){
    if(which === 'teams') return 'One way I will apply entrepreneurial thinking in my role: [reframe a challenge, run a small pilot, or borrow an idea from outside higher education]. A bold idea that could advance Vanderbilt’s vision: [your idea, and why it matters]. What would you try first in your area?';
    return '';
  },
  QUIZ:[
    {
      seg:'Brand',
      q:'A new campaign says your office offers fast, personal service, but the people you serve describe it as slow. What is the real problem?',
      opts:['The campaign needs a bigger budget', 'A gap between brand and reputation: what you say and what others say', 'The people you serve are not the audience', 'Reputation cannot be changed'],
      a:1,
      x:'Brand is what you say about yourself; reputation is what others say about you. The goal is to close the gap. (Module 4)'
    },
    {
      seg:'Brand',
      q:'Your unit gets one big national story. In Ertel’s tempo, what turns that spike into lasting trust?',
      opts:['Waiting for the next big story', 'A drumbeat: steady sharing with priority stakeholders, carried peer to peer', 'One large ad around the story', 'Leaving it to Communications'],
      a:1,
      x:'A spike without a system is noise. The drumbeat builds shared meaning, credibility and trust over time, and the ground game makes the message spread. (Module 4)'
    },
    {
      seg:'Mindset',
      q:'You are new to leading a team that is underperforming. Which approach matches Lutz’s point that change leadership requires ambidexterity?',
      opts:['Listen for six months before changing anything', 'Act fast on your own plan without listening', 'Listen carefully to key constituents while reinforcing necessary actions', 'Change only the technology first'],
      a:2,
      x:'His first 100 days paired listening with action: make clear-eyed assessments but move quickly. (Module 5)'
    },
    {
      seg:'Mindset',
      q:'Two schools both want to approach the same donor, who cares about both. What do Lutz’s fundraising principles suggest?',
      opts:['Let the first school to call win the donor', 'One cross-Vanderbilt strategy, built around the donor’s interests, with shared credit', 'Steer the donor toward the larger school’s priority', 'Ask the donor to choose one school'],
      a:1,
      x:'Donors who support multiple areas give the most. Be donor-centric and operate as One Vanderbilt, with shared credit. (Module 5)'
    },
    {
      seg:'Mindset',
      q:'To retain key talent, Lutz’s team held individual goal achievement and team recognition at what?',
      opts:['A balance point', 'Individual goals first, team later', 'Team recognition only', 'Whatever each manager prefers'],
      a:0,
      x:'A rigorous goal setting process, balanced performance indicators, and individual goal achievement and team recognition at a balance point. DO turnover fell from 26.5% in FY19 to 10.6% in FY26. (Module 5)'
    },
    {
      seg:'Teams',
      q:'A vendor delay outside your control puts a key project behind. Which response matches Candice Storey Lee’s approach?',
      opts:['Spend the team meeting on what went wrong with the vendor', 'Acknowledge the frustration, then focus the team on what it controls', 'Wait for the vendor before doing anything', 'Lower the goal so no one is disappointed'],
      a:1,
      x:'It is easy to lament things you cannot control, and we never want to do that. Leaders create the conditions for success. (Module 6)'
    },
    {
      seg:'Teams',
      q:'Your team is upset about a hard decision you made. What does Lee’s principle of emotional agility suggest?',
      opts:['Tell them not to feel that way', 'Reverse the decision to restore morale', 'Acknowledge the feeling, then hold everyone, including you, to how you act and respond', 'Avoid the topic until it blows over'],
      a:2,
      x:'It’s okay to feel how you feel, but what really matters is what you do: how you act and how you respond. (Module 6)'
    },
    {
      seg:'Brand',
      q:'A national newspaper runs a story praising your program, written by its own reporter. In Ertel’s terms, what is it?',
      opts:['A brand asset', 'A reputation asset', 'Air cover only', 'A spike without a system'],
      a:1,
      x:'A reputation asset: what others say about Vanderbilt. A brand asset is what Vanderbilt says about itself. (Module 4)'
    }
  ],
  QUIZ_POS:[1, 3, 0, 2, 3, 0, 2, 0],
  QUIZ_PASS:6,
  OVERVIEW:{
    week:'Course Two · Week of November 9',
    topics:'Communication, Storytelling and Brand · Entrepreneurial Mindset · High-Performing Teams',
    due:'Fri, Nov 13',
    dueLabel:'Teams post and reply by',
    goals:[
      '<b>Distinguish</b> brand from reputation, and a brand asset from a reputation asset.',
      '<b>Explain</b> how the ground game makes a message spread, and why a spike needs a drumbeat.',
      '<b>Diagnose</b> root causes, and lead change with ambidexterity, as Lutz did in his first 100 days.',
      '<b>Connect</b> culture, values, and talent choices to DAR’s results.',
      '<b>Apply</b> Candice Storey Lee’s six principles to real team moments, and rate your own team.',
      '<b>Bring</b> each module to the team you lead, and to your pod’s brief.'
    ],
    lessons:[
      {
        title:'Communication, Storytelling & Brand',
        no:'Module 4',
        keys:['route', 'brandrep', 'today', 'fighter', 'ring', 'assets', 'aircover', 'spread', 'groundgame', 'tempo', 'payoff'],
        ideas:[
          ['Brand and reputation are separate but related.', 'Brand is what you say about yourself; reputation is what others say about you. The goal is to close the gap.'],
          ['The goal is for the message to spread.', 'Reputation creates resources when air cover is carried through ground game.'],
          ['A spike without a system is noise.', 'Share reputation assets to engage stakeholders, and equip others to share Vanderbilt’s story.']
        ]
      },
      {
        title:'Entrepreneurial Mindset',
        no:'Module 5',
        keys:['moment', 'swot', 'first100', 'connect', 'radical', 'categories', 'acorns', 'invest', 'structures', 'turnover', 'landscape', 'potential', 'commitments', 'results'],
        ideas:[
          ['Drill into root causes.', 'Unlocking performance required that we drill into root causes.'],
          ['Change leadership requires ambidexterity.', 'Listen carefully to key constituents while reinforcing necessary actions.'],
          ['Transformation is never complete.', 'A culture rooted in trust, collaboration, and radical ownership. Transformation, fueled by innovation, is never complete.']
        ]
      },
      {
        title:'High-Performing Teams',
        no:'Module 6',
        keys:['principles', 'teammoments', 'rateteam'],
        ideas:[
          ['Every decision, values-based.', 'Name the core values, then act on them consistently.'],
          ['Create the conditions for success.', 'Build an environment that equips and empowers people to contribute at their highest level.'],
          ['Emotional agility.', 'It’s okay to feel how you feel, but what really matters is what you do.']
        ]
      },
      {
        title:'Quick check and this week',
        no:'This week',
        keys:['quiz', 'nextstep'],
        ideas:[
          ['Post in Teams.', 'Respond to discussion prompt 2 and reply to one colleague by Friday, November 13.'],
          ['Plan sections 4 to 7.', 'Use the capstone page to draft the plan: solution, steps, metrics, and sustainability.'],
          ['Finish together.', 'Week of November 16: put your drafts together and turn in one brief by Friday, November 20.']
        ]
      }
    ],
    footer:'Your pod’s brief is due Friday, November 20, three pages at most. Three winners, one per focus area.'
  },
  PRINT_TITLE:'Course Two, my weekly <em>takeaway</em>.',
  EXIT_TOAST:'You can close this tab. Next, the capstone page: turn in your pod’s brief by Friday, November 20.'
};

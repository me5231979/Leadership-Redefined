/* ══════════ LEADERSHIP REDEFINED · COURSE ONE · content ══════════
   Module 1: Vision, Strategy & the Future of Vanderbilt; Module 3: Mission and Margin;
   Module 5: Reputational Stewardship. The Chancellor’s modules. Week of November 2.
   Read by ../assets/js/pager.js and ../assets/js/lr-engine.js. No em or en dashes. */
window.LR_COURSE = {
  PLAN:[
    { sel:'section.hero', key:'home', label:'Welcome', mode:'whole' },
    { sel:'#week', key:'route', label:'This week', mode:'whole' },
    { sel:'#mission', key:'mission', label:'Module 1: The vision', mode:'whole' },
    { sel:'#problems', key:'problems', label:'Module 1: Four problems', mode:'whole' },
    { sel:'#engine', key:'engine', label:'Module 1: The reputation engine', mode:'whole' },
    { sel:'#momentum', key:'numbers', label:'Module 1: Momentum', mode:'whole' },
    { sel:'#growth', key:'growth', label:'Module 1: Four growth sites', mode:'whole' },
    { sel:'#me1', key:'me1', label:'Module 1: What this means for me', mode:'whole' },
    { sel:'#recap1', key:'recap1', label:'Module 1: Wrap-up', mode:'whole' },
    { sel:'#valuestick', key:'valuestick', label:'Module 1: Go deeper, the value stick', mode:'whole' },
    { sel:'#margin', key:'margin', label:'Module 3: Mission and margin', mode:'whole' },
    { sel:'#peers', key:'peers', label:'Module 3: Why it matters now', mode:'whole' },
    { sel:'#portfolio', key:'portfolio', label:'Module 3: The whole cost', mode:'whole' },
    { sel:'#statement', key:'statement', label:'Module 3: Your statement', mode:'whole' },
    { sel:'#me2', key:'me2', label:'Module 3: What this means for me', mode:'whole' },
    { sel:'#recap2', key:'recap2', label:'Module 3: Wrap-up', mode:'whole' },
    { sel:'#gdmargin', key:'gdmargin', label:'Module 3: Go deeper, Mission and Margin', mode:'whole' },
    { sel:'#reputation', key:'trust', label:'Module 5: Reputational stewardship', mode:'whole' },
    { sel:'#terrain', key:'terrain', label:'Module 5: Where reputation is made', mode:'whole' },
    { sel:'#timing', key:'timing', label:'Module 5: Act while you have control', mode:'whole' },
    { sel:'#pressure', key:'pressure', label:'Module 5: Calls under pressure', mode:'whole' },
    { sel:'#repstatement', key:'repstatement', label:'Module 5: Your statement', mode:'whole' },
    { sel:'#me3', key:'me3', label:'Module 5: What this means for me', mode:'whole' },
    { sel:'#recap3', key:'recap3', label:'Module 5: Wrap-up', mode:'whole' },
    { sel:'#gdrep', key:'gdrep', label:'Module 5: Go deeper, Reputation Rules', mode:'whole' },
    { sel:'#focus', key:'focus', label:'Your brief: Your focus area', mode:'whole' },
    { sel:'#draft', key:'draft', label:'Your brief: Draft the brief', mode:'whole' },
    { sel:'#quiz', key:'quiz', label:'Your brief: Quick check', mode:'whole' },
    { sel:'#nextstep', key:'nextstep', label:'Your brief: This week', mode:'whole' },
    { sel:'#learn', key:'learn', label:'Keep going', mode:'whole', extras:['footer'] }
  ],
  SECTIONS:[
    { k:'route', no:'01', name:'This week', how:'Preview the three modules and your brief' },
    { k:'mission', no:'02', name:'The vision', how:'Open all three areas of focus' },
    { k:'problems', no:'03', name:'Four problems', how:'Open all four problems' },
    { k:'engine', no:'04', name:'The reputation engine', how:'Sort six moments' },
    { k:'numbers', no:'05', name:'Momentum', how:'Guess all five numbers' },
    { k:'growth', no:'06', name:'Four growth sites', how:'Open all four sites' },
    { k:'margin', no:'07', name:'Mission and margin', how:'Find the strongest call in two situations' },
    { k:'peers', no:'08', name:'Why it matters now', how:'See all eight slides' },
    { k:'portfolio', no:'09', name:'The whole cost', how:'Find six hidden costs' },
    { k:'statement', no:'10', name:'Your statement', how:'Fill in three of four lines' },
    { k:'trust', no:'11', name:'The trust radar', how:'Open all four drivers' },
    { k:'terrain', no:'12', name:'The reputation terrain', how:'Place six stories' },
    { k:'timing', no:'13', name:'Act while you have control', how:'Sort six actions' },
    { k:'pressure', no:'14', name:'Calls under pressure', how:'Find the strongest call in three situations' },
    { k:'repstatement', no:'15', name:'Your reputational statement', how:'Fill in three of four lines' },
    { k:'focus', no:'16', name:'Your focus area', how:'Sort five challenges' },
    { k:'draft', no:'17', name:'Draft sections 1 to 3', how:'Fill in all four parts' },
    { k:'quiz', no:'18', name:'Apply it', how:'Score 6 of 8' },
    { k:'nextstep', no:'19', name:'This week', how:'Commit to all four moves' }
  ],
  ROUTE_PROG:'route',
  ROUTE_NARR:'route/g',
  STOPS:[
    {
      h:'Module 1: Vision, Strategy &amp; the Future of <em>Vanderbilt</em>',
      p:'What the vision asks of you, and how reputation becomes resources.',
      tags:['Three areas of focus', 'The reputation engine', 'Four growth sites', 'Go deeper: the value stick']
    },
    {
      h:'Module 3: Mission and <em>Margin</em>',
      p:'The Chancellor on mission and margin, then the trade-offs.',
      tags:['A video', 'Two situations', 'The Chancellor’s slides', 'The whole cost']
    },
    {
      h:'Module 5: Reputational <em>Stewardship</em>',
      p:'The trust radar, where reputation is made, when to act, and three calls under pressure.',
      tags:['The Chancellor', 'The trust radar', 'The terrain', 'When to act', 'Your statement']
    },
    {
      h:'Start your <em>brief</em>',
      p:'Pick your focus area and draft sections 1 to 3 for your pod. Course Two covers sections 4 to 7.',
      tags:['Focus area', 'Draft', 'Quick check']
    }
  ],
  BEST_LABEL:'The strongest call: ',
  TRY_AGAIN:'Now find the strongest call. ',
  NUMS:[
    {
      lab:'Selectivity',
      q:'In 2020-21, Vanderbilt admitted 11.6% of undergraduate applicants. In 2026-27?',
      opts:['About 9%', 'About 7%', '4.6%'],
      a:2,
      big:'4.6%',
      x:'Selectivity fell from 11.6% in 2020-21 to 4.6% in 2026-27, and yield, the share of admitted students who enroll, rose from 39.9% to 65.4%. More of the best students choose Vanderbilt first.'
    },
    {
      lab:'Net new commitments',
      q:'Net new commitments were $127 million in FY20. In FY26?',
      opts:['About $300M', 'About $500M', '$757M'],
      a:2,
      big:'$757M',
      x:'Net new commitments rose from $127 million in FY20 to $757 million in FY26, about six times as much.'
    },
    {
      lab:'Research funding',
      q:'Research funding at VU and VUMC together was about $825 million in FY20. In FY25?',
      opts:['About $1.0B', 'About $1.2B', 'More than $1.4B'],
      a:2,
      big:'$1.4B+',
      x:'Total research funding passed $1.4 billion in FY25: $520 million at VU and $883 million at VUMC.'
    },
    {
      lab:'Endowment',
      q:'The endowment was $6.95 billion on June 30, 2020. On June 30, 2026?',
      opts:['About $8.5B', 'About $10B', '$12.09B'],
      a:2,
      big:'$12.09B',
      x:'The endowment grew from $6.95 billion to $12.09 billion, and net assets nearly doubled, from $6.6 billion to $13.1 billion.'
    },
    {
      lab:'Football wins',
      q:'The 2020 football team went 0-9. How many regular-season games did the 2025 team win?',
      opts:['7', '8', '10'],
      a:2,
      big:'10',
      x:'The 2025 team had the first 10-win regular season in program history. Men’s basketball went 27-9 in 2025-26, and women’s basketball finished 29-5 and reached the Sweet 16.'
    }
  ],
  CITIES:{
    nyc:{
      name:'Vanderbilt NYC',
      focus:'New York City, NY',
      narr:'growth/f1',
      line:'Vanderbilt’s first campus beyond Nashville, open since August 2026: 13 buildings on 2.7 acres in Chelsea, with an undergraduate semester program and a Master of Science in Business and Technology.',
      meet:'Any service a student or colleague in New York needs from Nashville.',
      url:'https://www.vanderbilt.edu/nyc/'
    },
    wpb:{
      name:'Vanderbilt WPB',
      focus:'West Palm Beach, FL',
      narr:'growth/f2',
      line:'A graduate campus for business, engineering, data science, and AI, with programs planned in finance and in space and defense technology: about 1,000 graduate students and 100 faculty.',
      meet:'The programs, hiring, and systems built for a second home.',
      url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/west-palm-beach/'
    },
    sf:{
      name:'Vanderbilt SF',
      focus:'San Francisco, CA',
      narr:'growth/f3',
      line:'Opens for the 2027 to 2028 school year on the California College of the Arts campus, home to the Huang College of Art, Architecture and Design, which blends art and design with engineering and AI: about 1,000 students.',
      meet:'Partnerships with the technology and creative sectors.',
      url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/san-francisco/'
    },
    chattanooga:{
      name:'Quantum Innovation',
      focus:'Chattanooga, TN',
      narr:'growth/f4',
      line:'The Institute for Quantum Innovation, launched with EPB in July 2026: about 250 researchers, faculty, and staff, working with the first U.S. site with commercial access to both a trapped-ion quantum computer and a quantum network.',
      meet:'Research administration and partnerships across Tennessee.',
      url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/quantum-innovation/'
    },
    nashville:{
      name:'Nashville',
      focus:'Home',
      line:'Home since 1873: the residential campus and the heart of the university. Every growth site runs on the systems built here.',
      meet:'Every day. The back office Nashville already has is what each new site needs on day one.',
      url:'https://www.vanderbilt.edu/'
    }
  },
  NUM_PROG:'numbers',
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
      sub:'Yield increased from 39.9% in 2020-21 to 65.4% in 2026-27.',
      fmt:'pct',
      max:80,
      step:20,
      axis:'Yield (%)',
      bars:[{ x:'2020-21', v:39.9, lab:'39.9%' }, { x:'2026-27', v:65.4, lab:'65.4%' }]
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
      bars:[{ x:'2020-21', v:9, lab:'9' }, { x:'2025-26', v:27, lab:'27' }],
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
  DRILLS:{
    engine:{
      opts:['Execution with ambition', 'Values-driven leadership', 'Athletics momentum'],
      prog:'engine',
      verb:'sorted',
      items:[
        {
          s:'A new residential college opens on schedule, and students move in the week it was promised.',
          a:0,
          x:'Big things, done well. Delivery on a promise is the result that builds reputation.'
        },
        {
          s:'A campus forum where speakers who disagree sharply are each heard in full.',
          a:1,
          x:'Open forums and civil discourse. Trust is earned when every view gets a fair hearing.'
        },
        {
          s:'The university declines to take an official position on a political controversy, so every voice on campus stays free to speak.',
          a:1,
          x:'Institutional neutrality. It protects open inquiry, which is the point of a university.'
        },
        {
          s:'A national TV audience watches a big win, and alumni giving and applications rise the next month.',
          a:2,
          x:'Attention that turns into affinity. Athletics puts the name in front of people who never read a research paper.'
        },
        {
          s:'A growth campus enrolls its first students with programs, systems, and services ready on day one.',
          a:0,
          x:'Ambition, executed. The announcement is the promise; working systems on day one are the proof.'
        },
        {
          s:'A sold-out home game becomes the first campus visit for hundreds of prospective families.',
          a:2,
          x:'Momentum on the field becomes a first impression of the university. Then operations have to match it.'
        }
      ]
    },
    valuestick:{
      opts:['Raises willingness to pay', 'Lowers willingness to sell', 'Activity, not strategy'],
      prog:'valuestick',
      verb:'sorted',
      items:[
        {
          s:'Admitted students get a financial aid answer in three days instead of three weeks.',
          a:0,
          x:'Families weighing two offers value speed and clarity. Same aid, faster, and Vanderbilt is the easier yes.'
        },
        {
          s:'Staff finish a purchase request in one system instead of three.',
          a:1,
          x:'No one outside campus sees it. Colleagues do. Less friction makes Vanderbilt a better place to stay and do good work.'
        },
        {
          s:'A new monthly report no one asked for and no decision depends on.',
          a:2,
          x:'It costs time and moves no one’s choice. If no stakeholder decides differently, it is activity.'
        },
        {
          s:'Major donors get one coordinated Vanderbilt relationship instead of five separate asks.',
          a:0,
          x:'Donors who support several areas give the most. A better donor experience raises what they are willing to give.'
        },
        {
          s:'A clear career path for early-career staff in your division.',
          a:1,
          x:'Growth and a future make good people choose Vanderbilt and stay. That widens the value from the bottom.'
        },
        {
          s:'Renaming a committee, with the same members and the same charge.',
          a:2,
          x:'A new name changes nothing anyone experiences. Brand matters only when a real difference stands behind it.'
        }
      ]
    },
    fullcost:{
      opts:['Follow the cash', 'Upkeep and depreciation', 'Space'],
      prog:'portfolio',
      verb:'found',
      items:[
        {
          s:'A donor gives $20 million to build a new lab building.',
          opts:['Follow the cash', 'Upkeep and depreciation', 'Debt and ratings'],
          a:1,
          x:'The gift covers construction. The building costs money every year it stands: upkeep, renewal, and depreciation.'
        },
        {
          s:'A five-year pledge funds a new program that starts hiring this fall.',
          opts:['Follow the cash', 'Space', 'Research costs'],
          a:0,
          x:'The budget says funded; the cash arrives over five years. Someone covers the gap until it does.'
        },
        {
          s:'A department asks for two more offices for a growing team.',
          opts:['Research costs', 'Space', 'Debt and ratings'],
          a:1,
          x:'Space is a resource with a cost: upkeep, utilities, and the next request it displaces.'
        },
        {
          s:'A new federal grant pays for researchers and equipment.',
          opts:['Research costs', 'Follow the cash', 'Upkeep and depreciation'],
          a:0,
          x:'Research costs more than its direct dollars. Facilities and administrative costs, from labs to compliance, are real.'
        },
        {
          s:'A new named scholarship will fund ten students a year.',
          opts:['Space', 'Scholarships need analysis', 'Debt and ratings'],
          a:1,
          x:'Scholarships and fundraising deserve the same financial analysis as any commitment: what it covers, for how long, and what happens when the fund falls short.'
        },
        {
          s:'The university borrows to build a new residence hall.',
          opts:['Debt and ratings', 'Follow the cash', 'Space'],
          a:0,
          x:'Borrowing carries interest and limits for years, and it shapes the credit rating that sets the price of the next loan.'
        }
      ]
    },
    focus:{
      opts:['Core Operations', 'Bold Initiatives', 'Industry Leadership'],
      prog:'focus',
      verb:'sorted',
      items:[
        {
          s:'New staff wait three to five weeks for system access.',
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
          x:'A strategic bet on new learners. A pod could argue Core Operations if the brief were about delivery; make the call on purpose.'
        }
      ]
    },
    terrain:{
      opts:['Simple reporting', 'In-depth coverage', 'Extensive reporting', 'Mass-market coverage'],
      prog:'terrain',
      verb:'placed',
      items:[
        {
          s:'A wire service runs three paragraphs on a new dean’s appointment.',
          a:0,
          x:'Low importance, low interest. Get the facts right and fast; that is the whole job.'
        },
        {
          s:'A national magazine analyzes research funding with data and interviews with experts.',
          a:1,
          x:'Important, but a niche audience. Bring experts and data, and credibility transfers from them to you.'
        },
        {
          s:'Cable panels replay a viral clip from a campus event for two days.',
          a:2,
          x:'High interest, little substance. Keep one clear, consistent line, and do not feed the cycle.'
        },
        {
          s:'A TV newsmagazine tells one family’s emotional story about a university decision.',
          a:3,
          x:'Important and popular. Data alone will lose to testimony; lead with empathy and a human voice of your own.'
        },
        {
          s:'A trade newsletter reports that your office switched software vendors.',
          a:0,
          x:'Routine and quiet. Accurate facts, quickly. Watch only for signs it is starting to migrate.'
        },
        {
          s:'A long-form report weighs the evidence on whether a college degree is worth the cost.',
          a:1,
          x:'A serious question for society with a thoughtful audience. Your outcomes data and your experts matter most here.'
        }
      ]
    },
    timing:{
      opts:['Before', 'During', 'After'],
      prog:'timing',
      verb:'sorted',
      items:[
        {
          s:'Before admissions season, your team fixes a deadline that families often misread.',
          a:0,
          x:'Prevention: remove the problem before anyone feels it. The cheapest crisis is the one that never starts.'
        },
        {
          s:'Ahead of a high-profile campus event, you agree who speaks for the unit and draft a holding statement.',
          a:0,
          x:'Preparation: decide roles and words while control is high, not when the phone rings.'
        },
        {
          s:'A staff member sees a post about your office gaining traction and alerts Communications that morning.',
          a:1,
          x:'Identification: spotting it early is the optimal time to act. The earlier you see it, the more control you keep.'
        },
        {
          s:'You pause the affected process and tell the people affected what happened and what comes next.',
          a:1,
          x:'Containment: stop the spread and start with the people affected. Empathy and transparency, in that order.'
        },
        {
          s:'You fix the root cause and announce the fix, with an owner and a date.',
          a:1,
          x:'Solution: expertise and commitment on the radar. Then report back when you said you would.'
        },
        {
          s:'Two weeks later, your team reviews what happened and updates its checklist.',
          a:2,
          x:'Learning: it feeds the next round of prevention and preparation. Always learning.'
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
          out:'The calls stop, and everyone learns which views are welcome. That feeds the politicized perception.'
        },
        {
          t:'Keep it within policy, plan for safety and a respectful format, and listen to the people who are upset.',
          b:'Open forums and civil discourse',
          best:true,
          out:'Principle and empathy together. Partner with the offices that own events and speech policy.'
        },
        {
          t:'Stay out of it. It is not your event.',
          b:'Absent, not neutral',
          best:false,
          out:'People needed to hear from someone. Neutral is not the same as silent.'
        }
      ]
    },
    r3:{
      h:'Situation 3 · The tempting sponsor',
      s:'A company offers generous sponsorship if the Vanderbilt name appears prominently in its consumer ads.',
      opts:[
        {
          t:'Accept. The program needs the money.',
          b:'Lending the name',
          best:false,
          out:'The money is real. So is attaching Vanderbilt to claims you do not control.'
        },
        {
          t:'Bring in the offices that govern the name and sponsorships, and negotiate terms that protect it.',
          b:'Stewardship',
          best:true,
          out:'The name is an asset you borrow. Protect it, and keep the partnership if fair terms are possible.'
        },
        { t:'Decline any use of the name.', b:'Safe, and maybe too safe', best:false, out:'You may turn away a partner who would have accepted fair terms.' }
      ]
    }
  },
  CALL_SETS:{ margin:['m1', 'm2'], pressure:['r1', 'r2', 'r3'] },
  CALL_PROG:{
    margin:{ prog:'margin', noun:'situations', status:'#marginStatus', narr:'margin/s' },
    pressure:{ prog:'pressure', noun:'situations', status:'#pressureStatus', narr:'pressure/s' }
  },
  FEEDBACK:{
    statement:{ mission:['who'], cost:['money'], ret:['number'], quad:['money', 'when'] },
    draft:{ area:['area'], challenge:['who', 'number'], why:['stakes'], priorities:['vision'] },
    repstatement:{ stmt:['who'], up:['who'], risk:[], mit:['who'] },
    recap1:{ txt:['own'] },
    me1:{ txt:['own', 'when'] },
    recap2:{ txt:['own'] },
    me2:{ txt:['own', 'when'] },
    recap3:{ txt:['own'] },
    me3:{ txt:['own', 'when'] }
  },
  BUILDS:{
    me1:{ title:'As a manager, after module 1', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap1:{ title:'Module 1, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    me2:{ title:'As a manager, after module 3', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap2:{ title:'Module 3, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    me3:{ title:'As a manager, after module 5', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap3:{ title:'Module 5, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    statement:{
      title:'My mission and margin statement',
      fields:['mission', 'cost', 'ret', 'quad'],
      need:3,
      tpl:function(v){
      return 'Our project strengthens Vanderbilt’s mission by ' + (v.mission || '[what it preserves or strengthens]') + '\nIt is sustainable because ' + (v.cost || '[what it costs, and where the money comes from]') + '\nIn return: ' + (v.ret || '[what it saves, earns, or protects]') + '\nAfter year one: ' + (v.quad || '[what it costs later, and who pays]'); }
    },
    repstatement:{
      title:'My reputational statement',
      fields:['stmt', 'up', 'risk', 'mit'],
      need:3,
      tpl:function(v){
      return 'STATEMENT: ' + (v.stmt || '[why this project matters for Vanderbilt’s credibility and visibility]') + '\nUPSIDE: ' + (v.up || '[who will notice, and what they will say]') + '\nTOP RISKS: ' + (v.risk || '[what could go wrong in public]') + '\nHOW WE PROTECT TRUST: ' + (v.mit || '[transparency, expertise, commitment, empathy]'); }
    },
    draft:{
      title:'My draft of brief sections 1 to 3',
      fields:['area', 'challenge', 'why', 'priorities'],
      need:4,
      tpl:function(v, b){
      return '1. FOCUS AREA: ' + (v.area || '[choose one]') + '\n\n2. THE CHALLENGE: ' + (v.challenge || '[who is affected, and what happens today]') + '\n\nWHY IT MATTERS STRATEGICALLY: ' + (v.why || '[what it costs to wait, in mission, money, people, or reputation]') + '\n\n3. CONNECTION TO VANDERBILT\u2019S PRIORITIES: ' + (v.priorities || '[the vision line and focus area it serves]') +
        (b('statement', 'mission') ? '\n\nMISSION AND MARGIN: strengthens the mission by ' + b('statement', 'mission') : '') + (b('repstatement', 'stmt') ? '\n\nREPUTATION: ' + b('repstatement', 'stmt') : ''); }
    }
  },
  COMMITS:[
    ['Meet your pod', 'About 45 minutes. Agree on one challenge and one focus area.'],
    ['Share your draft', 'Put your sections 1 to 3 in the pod’s shared document.'],
    ['Respond to Teams prompt 1', 'Post your response under Discussions in the Teams channel by Friday, November 6.'],
    ['Reply to a colleague', 'Highlight a connection or perspective that strengthens a colleague’s idea.']
  ],
  tell:function(which, get){
    var b = function(k, f){ return (get('b-' + k + '-' + f) || '').trim(); };
    if(which === 'teams'){
      var ch = b('draft', 'challenge'), area = b('draft', 'area');
      return 'This week’s vision work landed for me here: ' + (ch ? 'our pod is looking at ' + ch.replace(/[.!?]$/, '') + (area ? ', under ' + area : '') + '.' : '[one challenge you care about, and why].') + ' One way I can connect my own team’s work to the vision is [one change you will make]. What would you add?';
    }
    return '';
  },
  QUIZ:[
    {
      seg:'Strategy',
      q:'A new growth campus needs hiring, IT, and student services working on day one. Which area of focus does that work serve?',
      opts:[
        'Exceptional Core Operations',
        'Industry Leadership',
        'Neither; campuses are a facilities project',
        'Only the campus leadership team'
      ],
      a:0,
      x:'Core operations are the fuel for bold initiatives. The campus is bold; making it run at speed is Exceptional Core Operations.'
    },
    {
      seg:'Strategy',
      q:'Your pod proposes a toolkit that lets other universities adopt a faster research-contracting process Vanderbilt built, presented at a national meeting. Which focus area fits best?',
      opts:['Exceptional Core Operations', 'Bold Strategic Initiatives', 'Industry Leadership', 'It does not fit any'],
      a:2,
      x:'It models the role of an essential research university and stimulates industry change. That is Industry Leadership.'
    },
    {
      seg:'Strategy',
      q:'After a burst of national attention, applications and gifts both rose. Which idea explains why?',
      opts:['The three areas of focus', 'The reputation feedback loop', 'Counting the whole cost', 'The ground game'],
      a:1,
      x:'Reputation attracts resources, like students and funding, and the results build more reputation.'
    },
    {
      seg:'Margin',
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
      seg:'Margin',
      q:'Which mission and margin statement would a judge find strongest?',
      opts:[
        'It will be great for everyone.',
        'It saves weeks of research time per hire, costs one checklist tool funded by two departments, and names who pays after the pilot year.',
        'It needs new funding, details to come.',
        'It is important to the mission.'
      ],
      a:1,
      x:'Specific mission benefit, cost and source, return, and the whole cost after year one.'
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
      x:'Transparency, expertise, commitment, and empathy, with one university voice.'
    },
    {
      seg:'Reputation',
      q:'Which statement best describes reputation as infrastructure?',
      opts:[
        'A campaign the communications office runs each year',
        'Something only rankings measure',
        'A system built every day by operations and decisions, which turns visibility into resources',
        'A crisis plan'
      ],
      a:2,
      x:'A system, a source of options, a platform for momentum, and a converter of visibility into resources.'
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
    }
  ],
  SCEN_POS:{ m1:0, m2:2, r1:2, r2:0, r3:1 },
  NUMS_POS:[1, 0, 2, 0, 1],
  QUIZ_POS:[1, 3, 0, 2, 1, 0, 3, 2],
  QUIZ_PASS:6,
  OVERVIEW:{
    week:'Course One · Week of November 2',
    topics:'Vision, Strategy and the Future of Vanderbilt · Mission and Margin · Reputational Stewardship',
    due:'Fri, Nov 6',
    dueLabel:'finish this course by',
    goals:[
      '<b>Explain</b> Vanderbilt’s vision and its three areas of focus, and connect your own work to them.',
      '<b>Trace</b> how reputation turns into resources, and name the four growth sites the strategy is building.',
      '<b>Weigh</b> a decision on mission and margin, and state your capstone’s case in both.',
      '<b>Judge</b> a decision through the trust radar, and place a story on the reputation terrain.',
      '<b>Time</b> your response: act before, during, and after an issue while you still have control.',
      '<b>Write</b> your capstone’s reputational statement, with risks and mitigations.',
      '<b>Draft</b> sections 1 to 3 of your pod’s capstone brief.'
    ],
    lessons:[
      {
        title:'Vision, Strategy & the Future of Vanderbilt',
        no:'Module 1',
        keys:['route', 'mission', 'problems', 'engine', 'numbers', 'growth'],
        deep:['valuestick'],
        recap:'recap1',
        ideas:[
          [
            'The vision is an instruction.',
            'Define the great university of the 21st century, and be it, through uncommon speed, agility, and scale, in three areas of focus.'
          ],
          [
            'Reputation is an engine.',
            'Reputation brings resources, resources produce results, and results build reputation; three flywheels speed it up. Four growth sites show the bold bets it funds.'
          ],
          [
            'Bold has an address.',
            'Four growth sites carry the vision beyond Nashville, and each one runs on core operations.'
          ]
        ]
      },
      {
        title:'Mission and Margin',
        no:'Module 3',
        keys:['margin', 'peers', 'portfolio', 'statement'],
        recap:'recap2',
        ideas:[
          ['No margin, no mission.', 'Mission is purpose and margin is capacity. A leader stewards both.'],
          [
            'Count the whole cost.',
            'Follow the cash, and count buildings, space, research costs, and debt past year one.'
          ],
          ['Answer both questions.', 'Every proposal names its mission benefit, its cost and source, and its return.']
        ]
      },
      {
        title:'Reputational Stewardship',
        no:'Module 5',
        keys:['trust', 'terrain', 'timing', 'pressure', 'repstatement'],
        recap:'recap3',
        ideas:[
          [
            'Reputation is infrastructure.',
            'It turns visibility into talent, funding, partners, and access, and it is built every day.'
          ],
          [
            'Trust has four drivers, and timing matters.',
            'Transparency, expertise, commitment, and empathy; a crisis finds the dent in the radar. Act early, while you still have control, because stories migrate toward the loud corner of the terrain.'
          ],
          [
            'Every leader is a steward.',
            'Move fast, tell the truth, show the plan, start with the people affected, and bring in the right offices.'
          ]
        ]
      },
      {
        title:'Your brief',
        no:'Your brief',
        keys:['focus', 'draft', 'quiz', 'nextstep'],
        ideas:[
          ['Choose your focus area on purpose.', 'Your brief is judged only against others in the same area.'],
          [
            'Make the case on page one.',
            'Focus area, the challenge and why it matters, and the connection to Vanderbilt’s priorities.'
          ],
          ['Bring it to your pod.', 'Merge drafts into one version, with one editor, this week.']
        ]
      }
    ],
    work:['statement', 'repstatement', 'draft'],
    footer:'Your pod’s brief is due Friday, November 20, three pages at most.'
  },
  PRINT_TITLE:'Course One, my weekly <em>takeaway</em>.',
  EXIT_TOAST:'You can close this tab. See you in Course Two.'
};

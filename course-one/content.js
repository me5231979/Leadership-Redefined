/* ══════════ LEADERSHIP REDEFINED · COURSE ONE · content ══════════
   The Chancellor's Symposium talk, in the order of his FINAL deck:
   Module 1: Vision, Strategy & the Future of Vanderbilt (deck pages 2 to 16);
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
    { sel:'#vision', key:'vision', label:'Module 1: The vision', mode:'pages' },
    { sel:'#momentum', key:'numbers', label:'Module 1: Momentum', mode:'whole' },
    { sel:'#footprint', key:'footprint', label:'Module 1: Footprint', mode:'pages' },
    { sel:'#engine', key:'engine', label:'Module 1: How reputation enables the mission', mode:'pages' },
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
    { k:'numbers', no:'01', name:'Momentum', how:'Guess all five numbers' },
    { k:'engine', no:'02', name:'Reputation flywheels', how:'Sort four moments by flywheel' },
    { k:'trust', no:'03', name:'The trust radar', how:'Find the strongest call in two situations' },
    { k:'terrain', no:'04', name:'Reputation terrain', how:'Place four stories' },
    { k:'timing', no:'05', name:'Reputation dynamics', how:'Sort five moments' },
    { k:'mission', no:'06', name:'Problems to solve', how:'Match four moments to the problem they speak to' },
    { k:'margin', no:'07', name:'Mission and margin', how:'Find the strongest call in two situations' },
    { k:'quiz', no:'08', name:'Quick check', how:'Score 6 of 8' },
    { k:'capstone', no:'09', name:'Capstone: your focus area', how:'Sort five challenges' },
    { k:'brief', no:'10', name:'Capstone: your brief', how:'Download the fillable brief' },
    { k:'nextstep', no:'11', name:'Capstone: this week', how:'Commit to all four moves' }
  ],
  ROUTE_PROG:'route',
  ROUTE_NARR:'route/g',
  STOPS:[
    {
      h:'Module 1: Vision, Strategy &amp; the Future of <em>Vanderbilt</em>',
      p:'The vision, the numbers since 2020, Vanderbilt’s footprint, and how reputation enables the mission.',
      tags:['The vision', 'Momentum', 'Footprint', 'Reputation flywheels']
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
  NUMS:[
    {
      lab:'Selectivity',
      q:'In 2020-21, Vanderbilt admitted 11.6% of undergraduate applicants. In 2026-27?',
      opts:['About 9%', 'About 7%', '4.6%'],
      a:2,
      big:'4.6%',
      x:'The admission rate fell from 11.6% in 2020-21 to 4.6% in 2026-27, so Vanderbilt grew far more selective, and yield, the share of admitted students who enroll, rose from 39.9% to 65.6%. More of the best students choose Vanderbilt first.'
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
      opts:['Execution with Ambition', 'Values-Driven Leadership', 'Athletics Momentum'],
      prog:'engine',
      verb:'sorted',
      items:[
        {
          s:'A new residential college opens on schedule, and students move in the week it was promised.',
          a:0,
          x:'Execution with Ambition: an ambitious goal, delivered as promised. That result feeds the reputation loop.'
        },
        {
          s:'A dean faces a hard, public decision and explains it plainly, by the values the university says it holds.',
          a:1,
          x:'Values-Driven Leadership: acting on stated values in public, and explaining the call, turns this flywheel.'
        },
        {
          s:'A sold-out home game becomes the first campus visit for hundreds of prospective families.',
          a:2,
          x:'Athletics Momentum: success on the field becomes a first impression of the university.'
        },
        {
          s:'A campus leader keeps a promise to an open, respectful process, even when a faster, quieter path is available.',
          a:1,
          x:'Values-Driven Leadership again: people notice when leaders hold to their values under pressure.'
        }
      ]
    },
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
  NUMS_POS:[1, 0, 2, 0, 1],
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
        keys:['numbers', 'engine'],
        ideas:[
          [
            'The vision is an instruction.',
            'Vanderbilt will define, and be, the great university of the 21st century, and help reclaim the essential role of leading research universities.'
          ],
          [
            'The momentum is real.',
            'Selectivity, yield, commitments, research funding, the endowment, and wins all moved since 2020, and the footprint grew beyond Nashville.'
          ],
          [
            'Reputation enables the mission.',
            'Reputation attracts talent, funding, partnerships, and access and influence; three flywheels speed it up.'
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

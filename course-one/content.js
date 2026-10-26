/* ══════════ LEADERSHIP REDEFINED · COURSE ONE · content ══════════
   Module 1: Vision, Strategy & the Future of Vanderbilt; Module 2: Mission and Margin;
   Module 3: Reputational Stewardship. The Chancellor’s modules. Week of November 2.
   Every teaching claim traces to the Chancellor’s FINAL Symposium deck, his earlier
   Module 1, 3, and 5 decks, or his two intro videos. Practice items are hypothetical.
   Read by ../assets/js/pager.js and ../assets/js/lr-engine.js. No em or en dashes. */
window.LR_COURSE = {
  PLAN:[
    { sel:'section.hero', key:'home', label:'Welcome', mode:'whole' },
    { sel:'#week', key:'route', label:'This week', mode:'whole' },
    { sel:'#mission', key:'mission', label:'Module 1: The vision', mode:'pages' },
    { sel:'#engine', key:'engine', label:'Module 1: The reputation engine', mode:'pages' },
    { sel:'#momentum', key:'numbers', label:'Module 1: Momentum', mode:'whole' },
    { sel:'#recap1', key:'recap1', label:'Module 1: Wrap-up', mode:'whole' },
    { sel:'#margin', key:'margin', label:'Module 2: Mission and margin', mode:'pages' },
    { sel:'#peers', key:'peers', label:'Module 2: The Chancellor’s slides', mode:'whole' },
    { sel:'#statement', key:'statement', label:'Module 2: Your statement', mode:'whole' },
    { sel:'#recap2', key:'recap2', label:'Module 2: Wrap-up', mode:'whole' },
    { sel:'#reputation', key:'trust', label:'Module 3: The trust radar', mode:'pages' },
    { sel:'#terrain', key:'terrain', label:'Module 3: Where reputation is made', mode:'pages' },
    { sel:'#timing', key:'timing', label:'Module 3: Act while you have control', mode:'pages' },
    { sel:'#repstatement', key:'repstatement', label:'Module 3: Your statement', mode:'whole' },
    { sel:'#recap3', key:'recap3', label:'Module 3: Wrap-up', mode:'whole' },
    { sel:'#focus', key:'focus', label:'Your brief: Your focus area', mode:'whole' },
    { sel:'#draft', key:'draft', label:'Your brief: Draft the brief', mode:'whole' },
    { sel:'#quiz', key:'quiz', label:'Your brief: Quick check', mode:'whole' },
    { sel:'#nextstep', key:'nextstep', label:'Your brief: This week', mode:'whole' },
    { sel:'#deeper', key:'deeper', label:'Go deeper', mode:'whole' },
    { sel:'#learn', key:'learn', label:'Keep going', mode:'whole', extras:['footer'] }
  ],
  SECTIONS:[
    { k:'mission', no:'01', name:'The vision', how:'Match four moments to the problem they speak to' },
    { k:'engine', no:'02', name:'The reputation engine', how:'Sort four moments by flywheel' },
    { k:'numbers', no:'03', name:'Momentum', how:'Guess all five numbers' },
    { k:'recap1', no:'04', name:'Module 1 for my team', how:'Write one rule and one move' },
    { k:'margin', no:'05', name:'Mission and margin', how:'Find the strongest call in two situations' },
    { k:'statement', no:'06', name:'Your mission and margin statement', how:'Fill in three of four lines' },
    { k:'recap2', no:'07', name:'Module 2 for my team', how:'Write one rule and one move' },
    { k:'trust', no:'08', name:'The trust radar', how:'Find the strongest call in two situations' },
    { k:'terrain', no:'09', name:'The reputation terrain', how:'Place four stories' },
    { k:'timing', no:'10', name:'Act while you have control', how:'Sort six actions' },
    { k:'repstatement', no:'11', name:'Your reputational statement', how:'Fill in three of four lines' },
    { k:'recap3', no:'12', name:'Module 3 for my team', how:'Write one rule and one move' },
    { k:'focus', no:'13', name:'Your focus area', how:'Sort five challenges' },
    { k:'draft', no:'14', name:'Draft sections 1 to 3', how:'Write all three sections in your brief' },
    { k:'quiz', no:'15', name:'Quick check', how:'Score 6 of 8' },
    { k:'nextstep', no:'16', name:'This week', how:'Commit to all four moves' }
  ],
  ROUTE_PROG:'route',
  ROUTE_NARR:'route/g',
  STOPS:[
    {
      h:'Module 1: Vision, Strategy &amp; the Future of <em>Vanderbilt</em>',
      p:'The vision, the four problems it answers, and how reputation becomes resources.',
      tags:['The vision and four problems', 'The reputation engine', 'Momentum', 'Rule and move for your team']
    },
    {
      h:'Module 2: Mission and <em>Margin</em>',
      p:'The Chancellor on mission and margin, his slides, and your pod’s statement.',
      tags:['A video and two situations', 'The Chancellor’s slides', 'Your statement', 'Rule and move for your team']
    },
    {
      h:'Module 3: Reputational <em>Stewardship</em>',
      p:'The trust radar, where reputation is made, when to act, and your pod’s statement.',
      tags:['A video and two situations', 'The terrain', 'When to act', 'Your statement', 'Rule and move for your team']
    },
    {
      h:'Start your <em>brief</em>',
      p:'Pick your focus area and draft sections 1 to 3 for your pod. Course Two covers sections 4 to 7.',
      tags:['Focus area', 'Draft', 'Quick check', 'This week']
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
    problems:{
      opts:['Speed and scale', 'Relevance', 'Trust', 'Value of a degree'],
      prog:'mission',
      verb:'sorted',
      items:[
        {
          s:'A research partner walks away after a contract sits in approvals for four months.',
          a:0,
          x:'Speed and scale. The first problem: research universities lack the capabilities to deliver innovation at the speed the modern world needs.'
        },
        {
          s:'A family asks an admissions counselor whether a degree is still worth the cost.',
          a:3,
          x:'Value of a degree. The fourth problem: a university education is no longer viewed as essential for achieving the American dream.'
        },
        {
          s:'A campus event is reported as proof that the university welcomes only one side of a debate.',
          a:2,
          x:'Trust. The third problem: elite universities are viewed as politicized bastions of ideology.'
        },
        {
          s:'A state legislator has never heard how a campus research result helped people in her district.',
          a:1,
          x:'Relevance. The second problem: research universities are no longer viewed as primary drivers of solutions to the problems people face.'
        }
      ]
    },
    engine:{
      opts:['Execution with ambition', 'Values-driven leadership', 'Athletics momentum'],
      prog:'engine',
      verb:'sorted',
      items:[
        {
          s:'A new residential college opens on schedule, and students move in the week it was promised.',
          a:0,
          x:'An ambitious goal, delivered as promised. That result feeds the reputation loop.'
        },
        {
          s:'A campus forum where speakers who disagree sharply are each heard in full.',
          a:1,
          x:'Open forums and civil discourse: two of the values the Chancellor names.'
        },
        {
          s:'A sold-out home game becomes the first campus visit for hundreds of prospective families.',
          a:2,
          x:'Momentum on the field becomes a first impression of the university.'
        },
        {
          s:'The university declines to take an official position on a political controversy.',
          a:1,
          x:'Institutional neutrality, another of the values the Chancellor names. It keeps every voice on campus free to speak.'
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
          x:'Low importance, low interest: simple reporting. Get the facts right and fast.'
        },
        {
          s:'A national magazine analyzes research funding with data and interviews with experts.',
          a:1,
          x:'Important, with a niche audience: in-depth coverage, which runs on experts and data.'
        },
        {
          s:'Cable panels replay a viral clip from a campus event for two days.',
          a:2,
          x:'High interest, light substance: extensive reporting, the cable news infotainment corner.'
        },
        {
          s:'A TV newsmagazine tells one family’s emotional story about a university decision.',
          a:3,
          x:'High on both: mass-market coverage, which runs on testimony and drama. Data alone will not carry your side.'
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
          x:'Prevention: remove the problem before anyone feels it.'
        },
        {
          s:'Ahead of a high-profile campus event, you agree who speaks for the unit and draft a holding statement.',
          a:0,
          x:'Preparation: decide roles and words while control is high.'
        },
        {
          s:'A staff member sees a post about your office gaining traction and alerts Communications that morning.',
          a:1,
          x:'Identification: spotting it early keeps you near the optimal time to act.'
        },
        {
          s:'You pause the affected process and tell the people affected what happened and what comes next.',
          a:1,
          x:'Containment: stop the spread, starting with the people affected.'
        },
        {
          s:'You fix the root cause and announce the fix, with an owner and a date.',
          a:1,
          x:'Solution: expertise and commitment from the trust radar.'
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
    }
  },
  CALL_SETS:{ margin:['m1', 'm2'], pressure:['r1', 'r2'] },
  CALL_PROG:{
    margin:{ prog:'margin', noun:'situations', status:'#marginStatus', narr:'margin/s' },
    pressure:{ prog:'trust', noun:'situations', status:'#trustStatus', narr:'trust/s' }
  },
  FEEDBACK:{
    statement:{ mission:['who'], cost:['money'], ret:['number'], quad:['money', 'when'] },
    repstatement:{ stmt:['who'], up:['who'], risk:[], mit:['who'] },
    recap1:{ txt:['own'], apply:['when', 'action'] },
    recap2:{ txt:['own'], apply:['when', 'action'] },
    recap3:{ txt:['own'], apply:['when', 'action'] }
  },
  BUILDS:{
    recap1:{ title:'Module 1, for my team', fields:['txt', 'apply'], need:2, tpl:function(v){ return 'OUR RULE: ' + (v.txt || '[not written yet]') + '\nTHIS WEEK WITH MY TEAM: ' + (v.apply || '[not written yet]'); } },
    recap2:{ title:'Module 2, for my team', fields:['txt', 'apply'], need:2, tpl:function(v){ return 'OUR RULE: ' + (v.txt || '[not written yet]') + '\nTHIS WEEK WITH MY TEAM: ' + (v.apply || '[not written yet]'); } },
    recap3:{ title:'Module 3, for my team', fields:['txt', 'apply'], need:2, tpl:function(v){ return 'OUR RULE: ' + (v.txt || '[not written yet]') + '\nTHIS WEEK WITH MY TEAM: ' + (v.apply || '[not written yet]'); } },
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
  },
  COMMITS:[
    ['Meet your pod', 'About 45 minutes. Agree on one challenge and one focus area.'],
    ['Share sections 1 to 3', 'Open your brief, then copy or download your sections for the pod’s shared document.'],
    ['Respond to Teams prompt 1', 'Post your response under Discussions in the Teams channel by Friday, November 6.'],
    ['Reply to a colleague', 'Highlight a connection or perspective that strengthens a colleague’s idea.']
  ],
  tell:function(which, get){
    var b = function(k, f){ return (get('b-' + k + '-' + f) || '').trim(); };
    if(which === 'teams'){
      /* the challenge and focus area now live in the brief itself (lrb-s2, lrb-s1); older course drafts still count */
      var raw = function(k){ try{ return (localStorage.getItem(k) || '').trim(); }catch(e){ return ''; } };
      var line = raw('lrb-s2').split('\n').filter(function(x){ return /^The challenge:/.test(x); })[0] || raw('lrb-s2').split('\n')[0] || '';
      line = line.replace(/^(Opening|The challenge|What could be|Why it matters strategically):\s*/, '');
      var ch = ((line.match(/^[^.!?]*/) || [''])[0]).trim() || b('draft', 'challenge'), area = raw('lrb-s1') || b('draft', 'area');
      return 'This week’s vision work landed for me here: ' + (ch ? 'our pod is looking at ' + ch.replace(/[.!?]$/, '') + (area ? ', under ' + area : '') + '.' : '[one challenge you care about, and why].') + ' One way I can connect my own team’s work to the vision is [one change you will make]. What would you add?';
    }
    return '';
  },
  QUIZ:[
    {
      seg:'Strategy',
      q:'Your pod’s challenge: a research partner walked away after a contract sat in approvals for four months. Which of the Chancellor’s four problems does it speak to most directly?',
      opts:[
        'Universities lack the capabilities to deliver innovation at speed and scale',
        'Elite universities are viewed as politicized',
        'A degree is no longer seen as essential to the American dream',
        'None; it is only an internal process issue'
      ],
      a:0,
      x:'The first problem: the capability gap in speed and scale. Naming the problem gives your brief its why it matters.'
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
      opts:['The three areas of focus', 'The reputation feedback loop', 'Mission and margin', 'The trust radar'],
      a:1,
      x:'Reputation attracts resources, like talent and funding, and what they achieve builds more reputation.'
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
      x:'Specific mission benefit, cost and source, return, and the long-term trade-off after year one.'
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
      x:'The story has migrated to mass-market coverage, which runs on testimony and drama. Data alone will not carry it.'
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
  SCEN_POS:{ m1:0, m2:2, r1:2, r2:0 },
  NUMS_POS:[1, 0, 2, 0, 1],
  QUIZ_POS:[1, 3, 0, 2, 1, 0, 3, 2],
  QUIZ_PASS:6,
  OVERVIEW:{
    week:'Course One · Week of November 2',
    topics:'Vision, Strategy and the Future of Vanderbilt · Mission and Margin · Reputational Stewardship',
    due:'Fri, Nov 6',
    dueLabel:'finish this course by',
    goals:[
      '<b>Explain</b> Vanderbilt’s vision, its three areas of focus, and the four problems it answers.',
      '<b>Trace</b> how reputation turns into resources, and read the momentum numbers as that loop.',
      '<b>Weigh</b> a decision on mission and margin, and state your pod’s case in both.',
      '<b>Judge</b> a response with the trust radar, place a story on the terrain, and time your response.',
      '<b>Turn</b> each module into one rule and one move for your team.',
      '<b>Draft</b> sections 1 to 3 of your pod’s capstone brief.'
    ],
    lessons:[
      {
        title:'Vision, Strategy & the Future of Vanderbilt',
        no:'Module 1',
        keys:['mission', 'engine', 'numbers', 'recap1'],
        ideas:[
          [
            'The vision is an instruction.',
            'Define the great university of the 21st century, and be it, through uncommon speed, agility, and scale, in three areas of focus.'
          ],
          ['A strategy answers problems.', 'Speed and scale, relevance, trust, and the value of a degree.'],
          [
            'Reputation is an engine.',
            'Reputation attracts talent, funding, partnerships, and access and influence; three flywheels speed it up.'
          ]
        ]
      },
      {
        title:'Mission and Margin',
        no:'Module 2',
        keys:['margin', 'statement', 'recap2'],
        ideas:[
          ['Mission is purpose; margin is capacity.', 'Mission without margin is unsustainable, and margin without mission is meaningless.'],
          ['Financial discipline enables strategic investments.', 'Building financial capacity is everybody’s job.'],
          ['Answer both questions.', 'Name the mission benefit, the cost and its source, the return, and the trade-off after year one.']
        ]
      },
      {
        title:'Reputational Stewardship',
        no:'Module 3',
        keys:['trust', 'terrain', 'timing', 'repstatement', 'recap3'],
        ideas:[
          ['Trust has four drivers.', 'Transparency, expertise, commitment, and empathy. A strong response reaches all four.'],
          ['Stories migrate.', 'Coverage sits on societal importance and audience interest; up and to the right, testimony and drama beat data.'],
          ['Act early.', 'The optimal time to act is while control is high: prevent and prepare before, identify, contain, and solve during, and learn after.']
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
    work:['recap1', 'statement', 'recap2', 'repstatement', 'recap3'],
    footer:'Your pod’s brief is due Friday, November 20, three pages at most.'
  },
  PRINT_TITLE:'Course One, my weekly <em>takeaway</em>.',
  EXIT_TOAST:'You can close this tab. See you in Course Two.'
};

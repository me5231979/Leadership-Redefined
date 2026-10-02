/* ══════════ LEADERSHIP REDEFINED · COURSE ONE · content ══════════
   Vision, Strategy and the Future of Vanderbilt; Communication, Storytelling
   and Brand; Mission and Margin. Week of November 2. Read by
   ../assets/js/pager.js and ../assets/js/lr-engine.js. No em or en dashes. */
window.LR_COURSE = {
  PLAN: [
    { sel:'section.hero', key:'home',       label:'Welcome',                       mode:'whole' },
    { sel:'#week',        key:'route',      label:'Lesson 1: This week',           mode:'whole' },
    { sel:'#mission',     key:'mission',    label:'Lesson 1: The vision',          mode:'whole' },
    { sel:'#problems',    key:'problems',   label:'Lesson 1: Four problems',       mode:'whole' },
    { sel:'#momentum',    key:'numbers',    label:'Lesson 1: Momentum',            mode:'whole' },
    { sel:'#valuestick',  key:'valuestick', label:'Lesson 1: The value stick',     mode:'whole' },
    { sel:'#recap1',      key:'recap1',     label:'Lesson 1: Wrap-up',             mode:'whole' },
    { sel:'#brand',       key:'brand',      label:'Lesson 2: Brand and reputation', mode:'whole' },
    { sel:'#fighter',     key:'fighter',    label:'Lesson 2: Spikes and systems',  mode:'whole' },
    { sel:'#story',       key:'story',      label:'Lesson 2: Your storyline',      mode:'whole' },
    { sel:'#recap2',      key:'recap2',     label:'Lesson 2: Wrap-up',             mode:'whole' },
    { sel:'#margin',      key:'margin',     label:'Lesson 3: Mission and margin',  mode:'whole' },
    { sel:'#portfolio',   key:'portfolio',  label:'Lesson 3: The portfolio',       mode:'whole' },
    { sel:'#statement',   key:'statement',  label:'Lesson 3: Your statement',      mode:'whole' },
    { sel:'#recap3',      key:'recap3',     label:'Lesson 3: Wrap-up',             mode:'whole' },
    { sel:'#focus',       key:'focus',      label:'Lesson 4: Your focus area',     mode:'whole' },
    { sel:'#draft',       key:'draft',      label:'Lesson 4: Draft the brief',     mode:'whole' },
    { sel:'#quiz',        key:'quiz',       label:'Lesson 4: Quick check',         mode:'whole' },
    { sel:'#nextstep',    key:'nextstep',   label:'Lesson 4: This week',           mode:'whole' },
    { sel:'#learn',       key:'learn',      label:'Keep going',                    mode:'whole', extras:['footer'] }
  ],
  SECTIONS: [
    { k:'route',      no:'01', name:'This week',             how:'Visit all four stops' },
    { k:'mission',    no:'02', name:'The vision',            how:'Open all three areas of focus' },
    { k:'problems',   no:'03', name:'Four problems',         how:'Open all four problems' },
    { k:'numbers',    no:'04', name:'Momentum',              how:'Guess all four numbers' },
    { k:'valuestick', no:'05', name:'The value stick',       how:'Sort six initiatives' },
    { k:'brand',      no:'06', name:'Brand or reputation',   how:'Decide six statements' },
    { k:'fighter',    no:'07', name:'Spikes and systems',    how:'Open all four moves' },
    { k:'story',      no:'08', name:'Your storyline',        how:'Fill in four of five lines' },
    { k:'margin',     no:'09', name:'Mission and margin',    how:'Find the strongest call in two situations' },
    { k:'portfolio',  no:'10', name:'The portfolio',         how:'Place all 100 points' },
    { k:'statement',  no:'11', name:'Your statement',        how:'Fill in three of four lines' },
    { k:'focus',      no:'12', name:'Your focus area',       how:'Sort five challenges' },
    { k:'draft',      no:'13', name:'Draft sections 1 to 3', how:'Fill in all four parts' },
    { k:'quiz',       no:'14', name:'Apply it',              how:'Score 6 of 8' },
    { k:'nextstep',   no:'15', name:'This week',             how:'Commit to all four moves' }
  ],
  ROUTE_PROG: 'route', ROUTE_NARR: 'route/g',
  STOPS: [
    { h:'Vision and <em>strategy</em>', p:'What the vision asks of you, and how to tell strategy from activity.', tags:['Three areas of focus', 'Guess the momentum', 'The value stick'] },
    { h:'Story and <em>brand</em>', p:'The Chancellor on communication, then your pod’s storyline.', tags:['A video', 'Brand or reputation', 'Your storyline'] },
    { h:'Mission and <em>margin</em>', p:'The Chancellor on mission and margin, then the trade-offs.', tags:['A video', 'Two situations', 'The portfolio'] },
    { h:'Your <em>brief</em>', p:'Pick your focus area and draft sections 1 to 3 for your pod.', tags:['Focus area', 'Draft', 'Quick check'] }
  ],
  BEST_LABEL: 'The strongest call: ',
  TRY_AGAIN: 'Now find the call that serves both mission and margin. ',
  NUMS: [
    { lab:'Media mentions', q:'High-priority media mentions, fiscal 2026 to date. Before 2020 it was 50,000 to 70,000 a year. Now?', opts:['About 90,000', 'About 140,000', 'More than 320,000'], a:2, big:'322,296', x:'As of January 2026. Attention is the first step in the reputation loop.' },
    { lab:'Early Decision', q:'Early Decision applications were about 1,200 in 2007. The 2026 projection?', opts:['About 2,500', 'About 4,800', 'About 7,800'], a:2, big:'7,810', x:'Projected for 2026. More students choosing Vanderbilt first.' },
    { lab:'New commitments', q:'2025 set a record at $345 million in new gifts and pledges. The FY26 forecast?', opts:['About $350M', 'About $450M', '$600M or more'], a:2, big:'$600M+', x:'A forecast for the current fiscal year. Resources follow reputation.' },
    { lab:'New campuses', q:'How many growth sites beyond Nashville did the Chancellor name?', opts:['One', 'Two', 'Four'], a:2, big:'4', x:'New York City, San Francisco, West Palm Beach, and Quantum Innovation in Chattanooga.' }
  ],
  NUM_PROG: 'numbers',
  DRILLS: {
    valuestick: { opts:['Raises willingness to pay', 'Lowers willingness to sell', 'Activity, not strategy'], prog:'valuestick', verb:'sorted', items:[
      { s:'Admitted students get a financial aid answer in three days instead of three weeks.', a:0, x:'Families weighing two offers value speed and clarity. Same aid, faster, and Vanderbilt is the easier yes.' },
      { s:'Staff finish a purchase request in one system instead of three.', a:1, x:'No one outside campus sees it. Colleagues do. Less friction makes Vanderbilt a better place to stay and do good work.' },
      { s:'A new monthly report no one asked for and no decision depends on.', a:2, x:'It costs time and moves no one’s choice. If no stakeholder decides differently, it is activity.' },
      { s:'Major donors get one coordinated Vanderbilt relationship instead of five separate asks.', a:0, x:'Donors who support several areas give the most. A better donor experience raises what they are willing to give.' },
      { s:'A clear career path for early-career staff in your division.', a:1, x:'Growth and a future make good people choose Vanderbilt and stay. That widens the value from the bottom.' },
      { s:'Renaming a committee, with the same members and the same charge.', a:2, x:'A new name changes nothing anyone experiences. Brand matters only when a real difference stands behind it.' }
    ]},
    brand: { opts:['Brand', 'Reputation'], prog:'brand', verb:'decided', items:[
      { s:'The university’s statement of its core values.', a:0, x:'What Vanderbilt says about itself. Necessary, and only half of the picture.' },
      { s:'A parent in Ohio telling a neighbor that Vanderbilt really takes care of its students.', a:1, x:'Someone else talking about Vanderbilt. Peer to peer, this is where trust multiplies.' },
      { s:'A national news story written by an outside reporter.', a:1, x:'Earned, not owned. You shape it by what you do, not by what you say.' },
      { s:'A campaign ad on what makes a Vanderbilt education different.', a:0, x:'Paid and owned communication is brand. It works when the experience matches the claim.' },
      { s:'A vendor telling another university that Vanderbilt pays on time and is easy to work with.', a:1, x:'Reputation is built in operations too. Staff leaders shape it every day.' },
      { s:'The talking points your office writes for a program launch.', a:0, x:'What you plan to say. It becomes reputation only when others repeat it, and believe it.' }
    ]},
    focus: { opts:['Core Operations', 'Bold Initiatives', 'Values Leadership'], prog:'focus', verb:'sorted', items:[
      { s:'New staff wait three to five weeks for system access.', a:0, x:'Running the place well. Fix it and you free time and talent for everything else.' },
      { s:'A cross-school program pairing Nashville employers with student researchers on regional health problems.', a:1, x:'A new bet that extends the reach of education and research.' },
      { s:'A shared practice for events where people who disagree sharply still hear each other out.', a:2, x:'Modeling what an essential research university stands for: open inquiry and civil discourse.' },
      { s:'Three offices collect the same vendor data in three different forms.', a:0, x:'Duplicated process. Solve it and you return money and hours to the mission.' },
      { s:'Scaling one school’s successful pilot into a university-wide offering for working adults.', a:1, x:'A strategic bet on new learners. A pod could argue Core Operations if the brief were about delivery; make the call on purpose.' }
    ]}
  },
  SCENARIOS: {
    m1: { h:'Situation 1 · The beloved program', s:'A small program serves 40 students a year with real impact. It costs three times what similar programs cost per student, and your budget is flat next year.', opts:[
      { t:'Protect it as is. Impact matters more than cost.', b:'Mission without margin', best:false, out:'It survives this year, and quietly eats the margin that funds next year. Heart programs are worth keeping when you are honest about what pays for them.' },
      { t:'Keep the outcome, redesign the delivery, and set a cost target.', b:'Values and viability, together', best:true, out:'You protect what students get and change how you deliver it. That is the leadership mindset: steward both purpose and performance.' },
      { t:'Close it. The numbers do not work.', b:'Margin without mission', best:false, out:'The budget balances, and a real mission result disappears that you could have kept with a redesign.' }
    ]},
    m2: { h:'Situation 2 · The revenue offer', s:'An outside partner offers to pay well to use your unit’s space and staff time. It would fund two positions, but it has nothing to do with your mission.', opts:[
      { t:'Take it. Money is money.', b:'Drift', best:false, out:'Margin with no mission tie can pull a team off its purpose a few hours at a time.' },
      { t:'Take it with limits, and name the mission work the margin will fund.', b:'A disciplined Money Tree', best:true, out:'Cap the staff time, decide in advance where the money goes, and write it down before you sign.' },
      { t:'Decline. It is off-mission.', b:'Principled, and costly', best:false, out:'You may be turning down the very capacity that would fund mission work you care about.' }
    ]}
  },
  CALL_SETS: { margin:['m1', 'm2'] },
  CALL_PROG: { margin:{ prog:'margin', noun:'situations', status:'#marginStatus', narr:'margin/s' } },
  ALLOC: {
    portfolio: { total:100, max:50, items:[
      { lab:'First-generation student mentoring', tag:'High mission, low margin', x:.12, y:.9 },
      { lab:'Research partnership with an industry sponsor', tag:'High mission, good margin', x:.72, y:.85 },
      { lab:'Executive education certificate', tag:'Some mission, high margin', x:.9, y:.5 },
      { lab:'Summer rental of event space', tag:'Low mission, good margin', x:.8, y:.15 },
      { lab:'A print newsletter few people read', tag:'Low mission, low margin', x:.15, y:.12 }
    ], quads:{
      topright:'<b>Your portfolio leans Star.</b> High mission, and it earns margin. Keep investing, and name the Hearts it funds.',
      topleft:'<b>Your portfolio leans Heart.</b> Deeply mission-driven, and it costs money. Healthy only if you can name what pays the bill.',
      bottomright:'<b>Your portfolio leans Money Tree.</b> It funds the place but drifts from purpose. Harvest on purpose and send the margin to mission.',
      bottomleft:'<b>Your portfolio leans Stop Sign.</b> Low on both. What would you stop doing to fund what matters?'
    }}
  },
  BUILDS: {
    recap1: { title:'Lesson 1, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap2: { title:'Lesson 2, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap3: { title:'Lesson 3, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    story: { title:'My storyline', fields:['person', 'is', 'could', 'ask', 'aud'], need:4, tpl:function(v){
      return 'OPENING: ' + (v.person || '[a real person and a real moment]') + '\nWHAT IS: ' + (v.is || '[the frustrating present]') + '\nWHAT COULD BE: ' + (v.could || '[the better future your idea creates]') + '\nTHE ASK: ' + (v.ask || '[what you need your audience to say yes to]') + '\nAUDIENCES: ' + (v.aud || '[who must hear it, and what each one cares about]'); } },
    statement: { title:'My mission and margin statement', fields:['mission', 'cost', 'ret', 'quad'], need:3, tpl:function(v){
      return 'Our project strengthens Vanderbilt’s mission by ' + (v.mission || '[what it preserves or strengthens]') + '\nIt is sustainable because ' + (v.cost || '[what it costs, and where the money comes from]') + '\nIn return: ' + (v.ret || '[what it saves, earns, or protects]') + '\nOn the matrix: ' + (v.quad || '[Star, Heart, or Money Tree]'); } },
    draft: { title:'My draft of brief sections 1 to 3', fields:['area', 'challenge', 'why', 'priorities'], need:4, tpl:function(v, b){
      return '1. FOCUS AREA: ' + (v.area || '[choose one]') + '\n\n2. THE CHALLENGE: ' + (v.challenge || '[who is affected, and what happens today]') + '\n\nWHY IT MATTERS STRATEGICALLY: ' + (v.why || '[what it costs to wait, in mission, money, people, or reputation]') + '\n\n3. CONNECTION TO VANDERBILT’S PRIORITIES: ' + (v.priorities || '[the vision line and focus area it serves]') +
        (b('story', 'person') ? '\n\nOPENING STORY: ' + b('story', 'person') : '') + (b('statement', 'mission') ? '\n\nMISSION AND MARGIN: strengthens the mission by ' + b('statement', 'mission') : ''); } }
  },
  COMMITS: [
    ['Meet your pod', 'About 45 minutes. Agree on one challenge and one focus area.'],
    ['Share your draft', 'Put your sections 1 to 3 and your storyline in the pod’s shared document.'],
    ['Post in Teams', 'Answer this week’s topic in your cohort channel.'],
    ['Reply to a colleague', 'Build on one colleague’s post with a connection or idea.']
  ],
  tell: function(which, get){
    var b = function(k, f){ return (get('b-' + k + '-' + f) || '').trim(); };
    if(which === 'teams'){
      var ch = b('draft', 'challenge'), area = b('draft', 'area');
      return 'This week’s vision work landed for me here: ' + (ch ? 'our pod is looking at ' + ch.replace(/[.!?]$/, '') + (area ? ', under ' + area : '') + '.' : '[one challenge you care about, and why].') + ' One way I can connect my own team’s work to the vision is [one change you will make]. What would you add?';
    }
    return '';
  },
  QUIZ: [
    { seg:'Strategy', q:'Your team has one month. Option A cuts student wait times for advising in half. Option B launches a quarterly newsletter no one has asked for. Which is strategic?', opts:['A: it changes students\u2019 choices, so it raises willingness to pay', 'B: more communication is always strategic', 'Both equally', 'Neither; strategy is set by senior leaders'], a:0, x:'Ask whose choice changes. Faster help makes Vanderbilt the better choice. The newsletter moves no one.' },
    { seg:'Strategy', q:'Your pod proposes a shared practice for hosting respectful debate events. Which focus area fits best?', opts:['Exceptional Core Operations', 'Bold Strategic Initiatives', 'Values Leadership', 'It does not fit any'], a:2, x:'It models what an essential research university stands for: open inquiry and civil discourse.' },
    { seg:'Strategy', q:'After a burst of national attention, applications and gifts both rose. Which idea explains why?', opts:['The value stick', 'The reputation feedback loop', 'The mission and margin matrix', 'Duarte\u2019s story structure'], a:1, x:'Reputation attracts resources, like students and funding, and the results build more reputation.' },
    { seg:'Brand', q:'A new campaign ad praises fast, personal service, but students say offices are slow to respond. What is the real problem?', opts:['The ad needs a bigger budget', 'A gap between brand and reputation; fix the experience, then tell true stories', 'Students are not the audience', 'Reputation cannot be changed'], a:1, x:'Brand is what you say; reputation is what others say. When the experience misses the claim, the gap grows.' },
    { seg:'Brand', q:'Your unit just had a big win in the news. How do you make the attention last?', opts:['Wait for the next big win', 'Run one large ad', 'Keep a drumbeat of stories and carry them to priority people yourself', 'Let Communications handle it'], a:2, x:'A spike without a system is noise. The ground game turns attention into trust.' },
    { seg:'Story', q:'Which opening is strongest for your pod\u2019s capstone pitch?', opts:['A table of statistics', 'One real person in one real moment, then what could be', 'The history of the department', 'A list of everyone on the pod'], a:1, x:'Open with what is, through one person, then contrast it with what could be, and end with one ask.' },
    { seg:'Margin', q:'A high-impact mentoring program costs more than it brings in, and budgets are flat. What is the strongest move?', opts:['Close it', 'Protect it and change nothing', 'Keep the outcome, redesign the delivery, and name what pays for it', 'Move it to another unit'], a:2, x:'It is a Heart. Keep it on purpose, contain its cost, and name the Star or Money Tree that funds it.' },
    { seg:'Margin', q:'Which mission and margin statement would a judge find strongest?', opts:['It will be great for everyone.', 'It saves weeks of research time per hire, costs one checklist tool funded by two departments, and sits in the Star quadrant.', 'It needs new funding, details to come.', 'It is important to the mission.'], a:1, x:'Specific mission benefit, cost and source, return, and a place on the matrix.' }
  ],
  QUIZ_POS: [1, 3, 0, 2, 1, 0, 3, 2],
  QUIZ_PASS: 6,
  PRINT_TITLE: 'Course One, my <em>takeaway</em>.',
  EXIT_TOAST: 'You can close this tab. See you in Course Two.'
};

/* ══════════ LEADERSHIP REDEFINED · COURSE ONE · content ══════════
   Vision, Strategy and the Future of Vanderbilt; Communication, Storytelling
   and Brand; Mission and Margin. Week of November 2. Read by
   ../assets/js/pager.js and ../assets/js/lr-engine.js. No em or en dashes. */
window.LR_COURSE = {
  PLAN: [
    { sel:'section.hero', key:'home',       label:'Welcome',                       mode:'whole' },
    { sel:'#week',        key:'route',      label:'This week',           mode:'whole' },
    { sel:'#mission',     key:'mission',    label:'Module 1: The vision',          mode:'whole' },
    { sel:'#problems',    key:'problems',   label:'Module 1: Four problems',       mode:'whole' },
    { sel:'#engine',      key:'engine',     label:'Module 1: The reputation engine', mode:'whole' },
    { sel:'#momentum',    key:'numbers',    label:'Module 1: Momentum',            mode:'whole' },
    { sel:'#growth',      key:'growth',     label:'Module 1: Four growth sites',   mode:'whole' },
    { sel:'#me1',          key:'me1',        label:'Module 1: What this means for me', mode:'whole' },
    { sel:'#recap1',      key:'recap1',     label:'Module 1: Wrap-up',             mode:'whole' },
    { sel:'#valuestick',  key:'valuestick', label:'Module 1: Go deeper, the value stick',     mode:'whole' },
    { sel:'#brand',       key:'brand',      label:'Module 2: Brand and reputation', mode:'whole' },
    { sel:'#fighter',     key:'fighter',    label:'Module 2: Spikes and systems',  mode:'whole' },
    { sel:'#ground',      key:'ground',     label:'Module 2: The ground game',     mode:'whole' },
    { sel:'#story',       key:'story',      label:'Module 2: Your storyline',      mode:'whole' },
    { sel:'#me2',          key:'me2',        label:'Module 2: What this means for me', mode:'whole' },
    { sel:'#recap2',      key:'recap2',     label:'Module 2: Wrap-up',             mode:'whole' },
    { sel:'#gdstory', key:'gdstory', label:'Module 2: Go deeper, the shape of a great talk', mode:'whole' },
    { sel:'#margin',      key:'margin',     label:'Module 3: Mission and margin',  mode:'whole' },
    { sel:'#portfolio',   key:'portfolio',  label:'Module 3: The whole cost',       mode:'whole' },
    { sel:'#statement',   key:'statement',  label:'Module 3: Your statement',      mode:'whole' },
    { sel:'#me3',          key:'me3',        label:'Module 3: What this means for me', mode:'whole' },
    { sel:'#recap3',      key:'recap3',     label:'Module 3: Wrap-up',             mode:'whole' },
    { sel:'#gdmargin', key:'gdmargin', label:'Module 3: Go deeper, Mission and Margin', mode:'whole' },
    { sel:'#focus',       key:'focus',      label:'Your brief: Your focus area',     mode:'whole' },
    { sel:'#draft',       key:'draft',      label:'Your brief: Draft the brief',     mode:'whole' },
    { sel:'#quiz',        key:'quiz',       label:'Your brief: Quick check',         mode:'whole' },
    { sel:'#nextstep',    key:'nextstep',   label:'Your brief: This week',           mode:'whole' },
    { sel:'#learn',       key:'learn',      label:'Keep going',                    mode:'whole', extras:['footer'] }
  ],
  SECTIONS: [
    { k:'route',      no:'01', name:'This week',             how:'Visit all four stops' },
    { k:'mission',    no:'02', name:'The vision',            how:'Open all three areas of focus' },
    { k:'problems',   no:'03', name:'Four problems',         how:'Open all four problems' },
    { k:'engine',     no:'04', name:'The reputation engine', how:'Sort six moments' },
    { k:'numbers',    no:'05', name:'Momentum',              how:'Guess all four numbers' },
    { k:'growth',     no:'06', name:'Four growth sites',     how:'Open all four sites' },
    { k:'brand',      no:'07', name:'Brand or reputation',   how:'Decide six statements' },
    { k:'fighter',    no:'08', name:'Spikes and systems',    how:'Open all four moves' },
    { k:'ground',     no:'09', name:'The ground game',       how:'Fill in three of four lines' },
    { k:'story',      no:'10', name:'Your storyline',        how:'Fill in four of five lines' },
    { k:'margin',     no:'11', name:'Mission and margin',    how:'Find the strongest call in two situations' },
    { k:'portfolio',  no:'12', name:'The whole cost',        how:'Find six hidden costs' },
    { k:'statement',  no:'13', name:'Your statement',        how:'Fill in three of four lines' },
    { k:'focus',      no:'14', name:'Your focus area',       how:'Sort five challenges' },
    { k:'draft',      no:'15', name:'Draft sections 1 to 3', how:'Fill in all four parts' },
    { k:'quiz',       no:'16', name:'Apply it',              how:'Score 6 of 8' },
    { k:'nextstep',   no:'17', name:'This week',             how:'Commit to all four moves' }
  ],
  ROUTE_PROG: 'route', ROUTE_NARR: 'route/g',
  STOPS: [
    { h:'Vision and <em>strategy</em>', p:'What the vision asks of you, and how reputation becomes resources.', tags:['Three areas of focus', 'The reputation engine', 'Four growth sites', 'Go deeper: the value stick'] },
    { h:'Story and <em>brand</em>', p:'The Chancellor on communication, then your pod’s storyline.', tags:['A video', 'Brand or reputation', 'The ground game', 'Your storyline'] },
    { h:'Mission and <em>margin</em>', p:'The Chancellor on mission and margin, then the trade-offs.', tags:['A video', 'Two situations', 'The whole cost'] },
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
  /* growth map: the four growth sites plus home. narr = the tap clip; meet = where staff meet it */
  CITIES: {
    nyc:         { name:'Vanderbilt NYC', focus:'New York City, NY', narr:'growth/f1', line:'Vanderbilt’s first campus beyond Nashville, open since August 2026: 13 buildings on 2.7 acres in Chelsea, with an undergraduate semester program and a Master of Science in Business and Technology.', meet:'Any service a student or colleague in New York needs from Nashville.', url:'https://www.vanderbilt.edu/nyc/' },
    wpb:         { name:'Vanderbilt WPB', focus:'West Palm Beach, FL', narr:'growth/f2', line:'A graduate campus for business, engineering, data science, and AI, with programs planned in finance and in space and defense technology: about 1,000 graduate students and 100 faculty.', meet:'The programs, hiring, and systems built for a second home.', url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/west-palm-beach/' },
    sf:          { name:'Vanderbilt SF', focus:'San Francisco, CA', narr:'growth/f3', line:'Opens for the 2027 to 2028 school year on the California College of the Arts campus, home to the Huang College of Art, Architecture and Design, which blends art and design with engineering and AI: about 1,000 students.', meet:'Partnerships with the technology and creative sectors.', url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/san-francisco/' },
    chattanooga: { name:'Quantum Innovation', focus:'Chattanooga, TN', narr:'growth/f4', line:'The Institute for Quantum Innovation, launched with EPB in July 2026: about 250 researchers, faculty, and staff, working with the first U.S. site with commercial access to both a trapped-ion quantum computer and a quantum network.', meet:'Research administration and partnerships across Tennessee.', url:'https://www.vanderbilt.edu/chancellor/initiatives-and-outreach/growth/quantum-innovation/' },
    nashville:   { name:'Nashville', focus:'Home', line:'Home since 1873: the residential campus and the heart of the university. Every growth site runs on the systems built here.', meet:'Every day. The back office Nashville already has is what each new site needs on day one.', url:'https://www.vanderbilt.edu/' }
  },
  NUM_PROG: 'numbers',
  /* trend charts on the momentum page, one per guess tile (num = the tile index), unlocked after the guess.
     Labeled values (the last point) are from the Chancellor's slides; the rest are read from his charts and are approximate. */
  CHARTS: [
    { num:0, title:'High-priority media mentions', sub:'Fiscal years 2015 to 2026 (2026 is year to date, as of January 2026)', fmt:'n',
      x:['FY15','FY16','FY17','FY18','FY19','FY20','FY21','FY22','FY23','FY24','FY25','FY26'],
      y:[56000,70000,72000,64000,65000,69000,111000,121000,138000,134000,137000,322296], proj:-1, max:350000, step:50000, end:'322,296', endNote:'as of Jan. 2026' },
    { num:1, title:'Early Decision applications', sub:'2007 to 2026 (2026 is a projection)', fmt:'n',
      x:['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'],
      y:[1200,1460,1650,2150,2550,2820,3180,3170,3580,3700,3580,4140,4320,4220,5020,5100,5600,5830,6650,7810], proj:18, max:8000, step:1000, end:'7,810', endNote:'projected',
      foot:'Starting in 2022, some Early Decision applicants were deferred to Regular Decision for space; they are still counted here.' },
    { num:2, title:'New commitments', sub:'Gifts and pledges, fiscal 2007 to 2026, nominal dollars (2026 is a forecast)', fmt:'m',
      x:['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'],
      y:[120,121,137,119,109,111,109,125,118,122,177,160,193,126,171,187,320,265,345,600], proj:18, max:600, step:100, end:'$600M+', endNote:'forecast' }
  ],
  DRILLS: {
    fullcost: { opts:['Follow the cash', 'Upkeep and depreciation', 'Space'], prog:'portfolio', verb:'found', items:[
      { s:'A donor gives $20 million to build a new lab building.', opts:['Follow the cash', 'Upkeep and depreciation', 'Debt and ratings'], a:1, x:'The gift covers construction. The building costs money every year it stands: upkeep, renewal, and depreciation.' },
      { s:'A five-year pledge funds a new program that starts hiring this fall.', opts:['Follow the cash', 'Space', 'Research costs'], a:0, x:'The budget says funded; the cash arrives over five years. Someone covers the gap until it does.' },
      { s:'A department asks for two more offices for a growing team.', opts:['Research costs', 'Space', 'Debt and ratings'], a:1, x:'Space is a resource with a cost: upkeep, utilities, and the next request it displaces.' },
      { s:'A new federal grant pays for researchers and equipment.', opts:['Research costs', 'Follow the cash', 'Upkeep and depreciation'], a:0, x:'Research costs more than its direct dollars. Facilities and administrative costs, from labs to compliance, are real.' },
      { s:'A new named scholarship will fund ten students a year.', opts:['Space', 'Scholarships need analysis', 'Debt and ratings'], a:1, x:'Scholarships and fundraising deserve the same financial analysis as any commitment: what it covers, for how long, and what happens when the fund falls short.' },
      { s:'The university borrows to build a new residence hall.', opts:['Debt and ratings', 'Follow the cash', 'Space'], a:0, x:'Borrowing carries interest and limits for years, and it shapes the credit rating that sets the price of the next loan.' }
    ]},
    engine: { opts:['Execution with ambition', 'Values-driven leadership', 'Athletics momentum'], prog:'engine', verb:'sorted', items:[
      { s:'A new residential college opens on schedule, and students move in the week it was promised.', a:0, x:'Big things, done well. Delivery on a promise is the result that builds reputation.' },
      { s:'A campus forum where speakers who disagree sharply are each heard in full.', a:1, x:'Open forums and civil discourse. Trust is earned when every view gets a fair hearing.' },
      { s:'The university declines to take an official position on a political controversy, so every voice on campus stays free to speak.', a:1, x:'Institutional neutrality. It protects open inquiry, which is the point of a university.' },
      { s:'A national TV audience watches a big win, and alumni giving and applications rise the next month.', a:2, x:'Attention that turns into affinity. Athletics puts the name in front of people who never read a research paper.' },
      { s:'A growth campus enrolls its first students with programs, systems, and services ready on day one.', a:0, x:'Ambition, executed. The announcement is the promise; working systems on day one are the proof.' },
      { s:'A sold-out home game becomes the first campus visit for hundreds of prospective families.', a:2, x:'Momentum on the field becomes a first impression of the university. Then operations have to match it.' }
    ]},
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
      { t:'Take it with limits, and name the mission work the margin will fund.', b:'Margin, on purpose', best:true, out:'Cap the staff time, decide in advance where the money goes, and write it down before you sign.' },
      { t:'Decline. It is off-mission.', b:'Principled, and costly', best:false, out:'You may be turning down the very capacity that would fund mission work you care about.' }
    ]}
  },
  CALL_SETS: { margin:['m1', 'm2'] },
  CALL_PROG: { margin:{ prog:'margin', noun:'situations', status:'#marginStatus', narr:'margin/s' } },
  /* coaching under each text box: which checks a strong answer passes (see lr-engine.js, feedback) */
  FEEDBACK: {
    story: { person:['who'], is:['who', 'number'], could:['who'], ask:['ask'], aud:['who'] },
    ground: { asset:['number'], who:['who'], how:['when'], pass:['who'] },
    statement: { mission:['who'], cost:['money'], ret:['number'], quad:['money', 'when'] },
    draft: { area:['area'], challenge:['who', 'number'], why:['stakes'], priorities:['vision'] },
    recap1:{ txt:['own'] }, recap2:{ txt:['own'] }, recap3:{ txt:['own'] },
    me1:{ txt:['own', 'when'] }, me2:{ txt:['own', 'when'] }, me3:{ txt:['own', 'when'] }
  },
  BUILDS: {
    me3: { title:'As a manager, after module 3', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    me2: { title:'As a manager, after module 2', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    me1: { title:'As a manager, after module 1', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    ground: { title:'My ground game play', fields:['asset', 'who', 'how', 'pass'], need:3, tpl:function(v){
      return 'THE ASSET: ' + (v.asset || '[a story, a number, or a result]') + '\nWHO SHOULD HEAR IT: ' + (v.who || '[a priority person or group]') + '\nHOW I WILL SHARE IT: ' + (v.how || '[directly, and when]') + '\nHOW THEY PASS IT ON: ' + (v.pass || '[peer to peer]'); } },
    recap1: { title:'Module 1, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap2: { title:'Module 2, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap3: { title:'Module 3, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    story: { title:'My storyline', fields:['person', 'is', 'could', 'ask', 'aud'], need:4, tpl:function(v){
      return 'OPENING: ' + (v.person || '[a real person and a real moment]') + '\nWHAT IS: ' + (v.is || '[the frustrating present]') + '\nWHAT COULD BE: ' + (v.could || '[the better future your idea creates]') + '\nTHE ASK: ' + (v.ask || '[what you need your audience to say yes to]') + '\nAUDIENCES: ' + (v.aud || '[who must hear it, and what each one cares about]'); } },
    statement: { title:'My mission and margin statement', fields:['mission', 'cost', 'ret', 'quad'], need:3, tpl:function(v){
      return 'Our project strengthens Vanderbilt’s mission by ' + (v.mission || '[what it preserves or strengthens]') + '\nIt is sustainable because ' + (v.cost || '[what it costs, and where the money comes from]') + '\nIn return: ' + (v.ret || '[what it saves, earns, or protects]') + '\nAfter year one: ' + (v.quad || '[what it costs later, and who pays]'); } },
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
    { seg:'Strategy', q:'A new growth campus needs hiring, IT, and student services working on day one. Which area of focus does that work serve?', opts:['Exceptional Core Operations', 'Values Leadership', 'Neither; campuses are a facilities project', 'Only the campus leadership team'], a:0, x:'Core operations are the fuel for bold initiatives. The campus is bold; making it run at speed is Exceptional Core Operations.' },
    { seg:'Strategy', q:'Your pod proposes a shared practice for hosting respectful debate events. Which focus area fits best?', opts:['Exceptional Core Operations', 'Bold Strategic Initiatives', 'Values Leadership', 'It does not fit any'], a:2, x:'It models what an essential research university stands for: open inquiry and civil discourse.' },
    { seg:'Strategy', q:'After a burst of national attention, applications and gifts both rose. Which idea explains why?', opts:['The three areas of focus', 'The reputation feedback loop', 'Counting the whole cost', 'The ground game'], a:1, x:'Reputation attracts resources, like students and funding, and the results build more reputation.' },
    { seg:'Brand', q:'A new campaign ad praises fast, personal service, but students say offices are slow to respond. What is the real problem?', opts:['The ad needs a bigger budget', 'A gap between brand and reputation; fix the experience, then tell true stories', 'Students are not the audience', 'Reputation cannot be changed'], a:1, x:'Brand is what you say; reputation is what others say. When the experience misses the claim, the gap grows.' },
    { seg:'Brand', q:'Your unit just had a big win in the news. How do you make the attention last?', opts:['Wait for the next big win', 'Run one large ad', 'Keep a drumbeat of stories and carry them to priority people yourself', 'Let Communications handle it'], a:2, x:'A spike without a system is noise. The ground game turns attention into trust.' },
    { seg:'Story', q:'Which opening is strongest for your pod\u2019s capstone pitch?', opts:['A table of statistics', 'One real person in one real moment, then why it matters', 'The history of the department', 'A list of everyone on the pod'], a:1, x:'Ertel\u2019s ask: connect your audience to the why. Start with one person, show the difference, and end with one ask.' },
    { seg:'Margin', q:'A high-impact mentoring program costs more than it brings in, and budgets are flat. What is the strongest move?', opts:['Close it', 'Protect it and change nothing', 'Keep the outcome, redesign the delivery, and name what pays for it', 'Move it to another unit'], a:2, x:'Mission and margin together: keep what students get, change how it is delivered, and name the money that pays for it.' },
    { seg:'Margin', q:'Which mission and margin statement would a judge find strongest?', opts:['It will be great for everyone.', 'It saves weeks of research time per hire, costs one checklist tool funded by two departments, and names who pays after the pilot year.', 'It needs new funding, details to come.', 'It is important to the mission.'], a:1, x:'Specific mission benefit, cost and source, return, and the whole cost after year one.' }
  ],
  SCEN_POS: { m1:0, m2:2 },
  NUMS_POS: [1, 0, 2, 1],
  QUIZ_POS: [1, 3, 0, 2, 1, 0, 3, 2],
  QUIZ_PASS: 6,
  OVERVIEW: {
    week: 'Course One · Week of November 2',
    topics: 'Vision, Strategy and the Future of Vanderbilt · Communication, Storytelling and Brand · Mission and Margin',
    due: 'Fri, Nov 6', dueLabel: 'finish this course by',
    goals: ['<b>Explain</b> Vanderbilt’s vision and its three areas of focus, and connect your own work to them.', '<b>Trace</b> how reputation turns into resources, and name the four growth sites the strategy is building.', '<b>Distinguish</b> brand from reputation, and a spike from a system.', '<b>Build</b> a storyline that moves a named audience from what is to what could be, and plan how you will carry it as the ground game.', '<b>Weigh</b> a decision on mission and margin, and state your capstone’s case in both.', '<b>Draft</b> sections 1 to 3 of your pod’s capstone brief.'],
    lessons: [
      { title:'Vision and strategy', no:'Module 1', keys:['route', 'mission', 'problems', 'engine', 'numbers', 'growth'], deep:['valuestick'], recap:'recap1', ideas:[
        ['The vision is an instruction.', 'Define the great university of the 21st century, and be it, through uncommon speed, agility, and scale, in three areas of focus.'],
        ['Reputation is an engine.', 'Reputation brings resources, resources produce results, and results build reputation; three flywheels speed it up. Four growth sites show the bold bets it funds.'],
        ['Bold has an address.', 'Four growth sites carry the vision beyond Nashville, and each one runs on core operations.'] ] },
      { title:'Communication, storytelling and brand', no:'Module 2', keys:['brand', 'fighter', 'ground', 'story'], recap:'recap2', ideas:[
        ['Close the gap.', 'Brand is what we say; reputation is what others say. Deliver the claim, then tell true stories about it.'],
        ['A spike needs a system.', 'Attention climbs from relevance to consideration, trust, and commitment only with a steady drumbeat, carried by leaders.'],
        ['Connect people to the why.', 'One real person, the difference your idea makes, and one clear ask, carried by the people who hear it.'] ] },
      { title:'Mission and margin', no:'Module 3', keys:['margin', 'portfolio', 'statement'], recap:'recap3', ideas:[
        ['No margin, no mission.', 'Mission is purpose and margin is capacity. A leader stewards both.'],
        ['Count the whole cost.', 'Follow the cash, and count buildings, space, research costs, and debt past year one.'],
        ['Answer both questions.', 'Every proposal names its mission benefit, its cost and source, and its return.'] ] },
      { title:'Your brief', no:'Your brief', keys:['focus', 'draft', 'quiz', 'nextstep'], ideas:[
        ['Choose your focus area on purpose.', 'Your brief is judged only against others in the same area.'],
        ['Make the case on page one.', 'Focus area, the challenge and why it matters, and the connection to Vanderbilt’s priorities.'],
        ['Bring it to your pod.', 'Merge drafts into one version, with one editor, this week.'] ] }
    ],
    work: ['ground', 'story', 'statement', 'draft'],
    footer: 'Your pod’s brief is due Friday, November 20, three pages at most.'
  },
  PRINT_TITLE: 'Course One, my weekly <em>takeaway</em>.',
  EXIT_TOAST: 'You can close this tab. See you in Course Two.'
};

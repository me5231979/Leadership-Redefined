/* ══════════ LEADERSHIP REDEFINED · COURSE TWO · content ══════════
   Entrepreneurial Mindset; Reputational Stewardship; High-Performing Teams.
   Week of November 9. Read by ../assets/js/pager.js and
   ../assets/js/lr-engine.js. Strings shown through esc() use plain
   characters, not HTML entities. No em or en dashes. */
window.LR_COURSE = {
  PLAN: [
    { sel:'section.hero',  key:'home',       label:'Welcome',                        mode:'whole' },
    { sel:'#week',         key:'route',      label:'This week',            mode:'whole' },
    { sel:'#venture',      key:'swot',       label:'Module 4: Entrepreneurial mindset', mode:'whole' },
    { sel:'#turnaround',   key:'numbers',    label:'Module 4: The turnaround',       mode:'whole' },
    { sel:'#moves',        key:'moves',      label:'Module 4: The change moves',     mode:'whole' },
    { sel:'#collab',       key:'collab',     label:'Module 4: Radical collaboration', mode:'whole' },
    { sel:'#reframe',      key:'reframe',    label:'Module 4: Your pilot',           mode:'whole' },
    { sel:'#me1',          key:'me1',        label:'Module 4: What this means for me', mode:'whole' },
    { sel:'#recap1',       key:'recap1',     label:'Module 4: Wrap-up',              mode:'whole' },
    { sel:'#kind',         key:'kind',       label:'Module 4: Go deeper, kinds of problems',    mode:'whole' },
    { sel:'#reputation',   key:'trust',      label:'Module 5: Reputational stewardship', mode:'whole' },
    { sel:'#terrain',      key:'terrain',    label:'Module 5: Where reputation is made', mode:'whole' },
    { sel:'#timing',       key:'timing',     label:'Module 5: Act while you have control', mode:'whole' },
    { sel:'#pressure',     key:'pressure',   label:'Module 5: Calls under pressure', mode:'whole' },
    { sel:'#repstatement', key:'repstatement', label:'Module 5: Your statement',     mode:'whole' },
    { sel:'#me2',          key:'me2',        label:'Module 5: What this means for me', mode:'whole' },
    { sel:'#recap2',       key:'recap2',     label:'Module 5: Wrap-up',              mode:'whole' },
    { sel:'#gdrep', key:'gdrep', label:'Module 5: Go deeper, Reputation Rules', mode:'whole' },
    { sel:'#teams',        key:'lee',        label:'Module 6: High-performing teams', mode:'whole' },
    { sel:'#principles',   key:'principles', label:'Module 6: Six principles',       mode:'whole' },
    { sel:'#me3',          key:'me3',        label:'Module 6: What this means for me', mode:'whole' },
    { sel:'#recap3',       key:'recap3',     label:'Module 6: Wrap-up',              mode:'whole' },
    { sel:'#zone',         key:'teamcalls',  label:'Module 6: Go deeper, the learning zone',    mode:'whole' },
    { sel:'#health',       key:'health',     label:'Module 6: Go deeper, team health',             mode:'whole' },
    { sel:'#metrics',      key:'metrics',    label:'Your brief: Strong metrics',       mode:'whole' },
    { sel:'#draft',        key:'draft',      label:'Your brief: Draft the brief',      mode:'whole' },
    { sel:'#quiz',         key:'quiz',       label:'Your brief: Quick check',          mode:'whole' },
    { sel:'#nextstep',     key:'nextstep',   label:'Your brief: This week',            mode:'whole' },
    { sel:'#carry',        key:'carry',      label:'Your brief: Carry it forward',     mode:'whole' },
    { sel:'#learn',        key:'learn',      label:'Keep going',                     mode:'whole', extras:['footer'] }
  ],
  SECTIONS: [
    { k:'route',        no:'01', name:'This week',            how:'Visit all four stops' },
    { k:'swot',         no:'02', name:'The diagnosis',        how:'Open all four quadrants' },
    { k:'numbers',      no:'03', name:'The turnaround',       how:'Guess all four numbers' },
    { k:'moves',        no:'04', name:'The change moves',     how:'Sort six tactics' },
    { k:'collab',       no:'05', name:'Radical collaboration', how:'Fill in three of four lines' },
    { k:'reframe',      no:'06', name:'Your pilot',           how:'Fill in four of five lines' },
    { k:'trust',        no:'07', name:'The trust radar',      how:'Open all four drivers' },
    { k:'terrain',      no:'08', name:'The reputation terrain', how:'Place six stories' },
    { k:'timing',       no:'09', name:'Act while you have control', how:'Sort six actions' },
    { k:'pressure',     no:'10', name:'Calls under pressure', how:'Find the strongest call in three situations' },
    { k:'repstatement', no:'11', name:'Your reputational statement', how:'Fill in three of four lines' },
    { k:'lee',          no:'12', name:'Meet the leader',      how:'Fact or fiction, four statements' },
    { k:'principles',   no:'13', name:'Six principles',       how:'Open all six' },
    { k:'metrics',      no:'14', name:'Strong metrics',       how:'Sort six metrics' },
    { k:'draft',        no:'15', name:'Draft sections 4 to 7', how:'Fill in five of six parts' },
    { k:'quiz',         no:'16', name:'Apply it',             how:'Score 6 of 8' },
    { k:'nextstep',     no:'17', name:'This week',            how:'Commit to all four moves' },
    { k:'carry',        no:'18', name:'Carry it forward',     how:'Fill in three of four lines' }
  ],
  ROUTE_PROG: 'route', ROUTE_NARR: 'route/g',
  STOPS: [
    { h:'Entrepreneurial <em>mindset</em>', p:'A real Vanderbilt turnaround, radical collaboration, and your pod’s first pilot.', tags:['The Chancellor', 'The turnaround', 'Radical collaboration', 'Your pilot'] },
    { h:'Reputational <em>stewardship</em>', p:'The trust radar, where reputation is made, when to act, and three calls under pressure.', tags:['The Chancellor', 'The trust radar', 'The terrain', 'When to act', 'Your statement'] },
    { h:'High-performing <em>teams</em>', p:'How Candice Storey Lee builds teams that win, and a check on your pod.', tags:['The Chancellor', 'Six principles', 'Go deeper: the learning zone'] },
    { h:'Your <em>brief</em>', p:'Draft sections 4 to 7, so your pod has a full first draft.', tags:['Strong metrics', 'Draft', 'Quick check'] }
  ],
  BEST_LABEL: 'The strongest call: ',
  TRY_AGAIN: 'Now find the strongest call. ',
  NUMS: [
    { lab:'New commitments, 2025', q:'In 1998, new commitments were $63 million. In 2025?', opts:['About $150M', 'About $250M', '$345M, a record'], a:2, big:'$345M', x:'Another record-breaking year, and the FY26 forecast is $600M or more.' },
    { lab:'Cash, 2025', q:'How much cash came in during 2025?', opts:['$98M', '$148M', '$198M'], a:2, big:'$198M', x:'The best cash year since the VUMC split.' },
    { lab:'Growth rate', q:'Average yearly growth in new commitments, 2020 to 2025?', opts:['About 5%', 'About 12%', 'About 22%'], a:2, big:'+22%', x:'Compound annual growth. Cash grew about 10% a year.' },
    { lab:'The starting gap', q:'Before the turnaround, Vanderbilt raised about how much per living alumnus? Leaders raised $1,200 to $3,000.', opts:['$240', '$900', '$1,500'], a:0, big:'$240', x:'Fiscal 2017 to 2021 average. A clear-eyed benchmark against the best, not the average.' }
  ],
  NUM_PROG: 'numbers',
  DRILLS: {
    terrain: { opts:['Simple reporting', 'In-depth coverage', 'Extensive reporting', 'Mass-market coverage'], prog:'terrain', verb:'placed', items:[
      { s:'A wire service runs three paragraphs on a new dean’s appointment.', a:0, x:'Low importance, low interest. Get the facts right and fast; that is the whole job.' },
      { s:'A national magazine analyzes research funding with data and interviews with experts.', a:1, x:'Important, but a niche audience. Bring experts and data, and credibility transfers from them to you.' },
      { s:'Cable panels replay a viral clip from a campus event for two days.', a:2, x:'High interest, little substance. Keep one clear, consistent line, and do not feed the cycle.' },
      { s:'A TV newsmagazine tells one family’s emotional story about a university decision.', a:3, x:'Important and popular. Data alone will lose to testimony; lead with empathy and a human voice of your own.' },
      { s:'A trade newsletter reports that your office switched software vendors.', a:0, x:'Routine and quiet. Accurate facts, quickly. Watch only for signs it is starting to migrate.' },
      { s:'A long-form report weighs the evidence on whether a college degree is worth the cost.', a:1, x:'A serious question for society with a thoughtful audience. Your outcomes data and your experts matter most here.' }
    ]},
    timing: { opts:['Before', 'During', 'After'], prog:'timing', verb:'sorted', items:[
      { s:'Before admissions season, your team fixes a deadline that families often misread.', a:0, x:'Prevention: remove the problem before anyone feels it. The cheapest crisis is the one that never starts.' },
      { s:'Ahead of a high-profile campus event, you agree who speaks for the unit and draft a holding statement.', a:0, x:'Preparation: decide roles and words while control is high, not when the phone rings.' },
      { s:'A staff member sees a post about your office gaining traction and alerts Communications that morning.', a:1, x:'Identification: spotting it early is the optimal time to act. The earlier you see it, the more control you keep.' },
      { s:'You pause the affected process and tell the people affected what happened and what comes next.', a:1, x:'Containment: stop the spread and start with the people affected. Empathy and transparency, in that order.' },
      { s:'You fix the root cause and announce the fix, with an owner and a date.', a:1, x:'Solution: expertise and commitment on the radar. Then report back when you said you would.' },
      { s:'Two weeks later, your team reviews what happened and updates its checklist.', a:2, x:'Learning: it feeds the next round of prevention and preparation. Always learning.' }
    ]},
    moves: { opts:['People and Culture', 'Collaboration', 'Motivation and Incentives', 'Process and Systems'], prog:'moves', verb:'sorted', items:[
      { s:'Establish an internal academy to develop fundraisers.', a:0, x:'Growing and keeping top talent is where the transformation started.' },
      { s:'Implement a new donor relationship system (CRM).', a:3, x:'The technology agenda, paired with better data and analytics.' },
      { s:'Balanced performance goals for every gift officer.', a:2, x:'Ambitious goals and aligned motivation were key change drivers.' },
      { s:'Rebuild relationships with deans and campus partners.', a:1, x:'It reversed the team’s image as a poor partner, under the Chancellor’s call for radical collaboration.' },
      { s:'Shared credit, so schools work together on gifts that cross Vanderbilt.', a:1, x:'We operate as One Vanderbilt. Donors who support several areas give the most.' },
      { s:'A kaizen culture of small, continuous improvements.', a:3, x:'Borrowed from manufacturing: look beyond best practices for new ideas.' }
    ]},
    kind: { opts:['Simple', 'Complicated', 'Complex', 'Chaotic'], prog:'kind', verb:'sorted', items:[
      { s:'Processing a routine form with a clear, documented procedure.', a:0, x:'Follow the best practice. Sense, categorize, respond.' },
      { s:'Choosing between three vendor systems with full specifications and references.', a:1, x:'There is a right answer and experts can find it. Sense, analyze, respond.' },
      { s:'Getting more students to attend career programs they say they value.', a:2, x:'Behavior, many causes, no known answer. Probe with a small pilot, then scale what works.' },
      { s:'A building loses power during a major event and no one knows the plan.', a:3, x:'Act first to make people safe. Then sense and respond, and write the plan afterward.' }
    ]},
    lee: { opts:['Fact', 'Fiction'], prog:'lee', verb:'decided', items:[
      { s:'Candice Storey Lee was the first Black woman to lead an athletics department in the SEC.', a:0, x:'Fact. She was named Vanderbilt’s athletic director in 2020, and also its first woman in the role.' },
      { s:'She came to Vanderbilt from another university’s athletics department.', a:1, x:'Fiction. She arrived as a student-athlete, captained the women’s basketball team, and rose through Vanderbilt for more than two decades.' },
      { s:'She holds three Vanderbilt degrees.', a:0, x:'Fact. A BS in human and organizational development, an MEd, and an EdD in higher education leadership and policy.' },
      { s:'Vanderbilt football’s first ten-win season came in 2025.', a:0, x:'Fact. It followed the October 2024 upset of No. 1 Alabama. Coach Clark Lea, her 2020 hire, signed a six-year extension.' }
    ]},
    metrics: { opts:['Strong', 'Weak'], prog:'metrics', verb:'sorted', items:[
      { s:'Increase awareness of the new process.', a:1, x:'No number, no date. Try: 80% of administrators can find it in under a minute by March.' },
      { s:'Median days from hire to full system access drops from 21 to 5 by the end of spring.', a:0, x:'A baseline, a target, a date, and an outcome people feel.' },
      { s:'Launch the new website.', a:1, x:'A milestone, not a result. Put it in the timeline and measure what it changes.' },
      { s:'At least 70% of staff use the tool in year one.', a:0, x:'A past pod’s metric. Clear and countable.' },
      { s:'Number of emails sent promoting the program.', a:1, x:'Activity, not impact.' },
      { s:'Pilot attendance rises 25% over last spring, and 60% of attendees come back.', a:0, x:'One number for reach and one for value.' }
    ]}
  },
  SCENARIOS: {
    r1: { h:'Situation 1 · The mistake that went public', s:'Your office emailed admitted students the wrong deadline. A parent’s post about it is spreading. Your team found the error an hour ago.', opts:[
      { t:'Fix it quietly and hope the post fades.', b:'Silence reads as hiding', best:false, out:'The story keeps growing without you, and people fill the silence with the worst version.' },
      { t:'Correct it fast, apologize plainly, bring in Communications, and confirm the fix.', b:'Transparency, commitment, and empathy', best:true, out:'Speed and honesty shrink a mistake. Communications helps the university speak with one voice.' },
      { t:'Reply to the parent that it was a system error.', b:'Accurate, and defensive', best:false, out:'True, and it sounds like an excuse to the families who were confused.' }
    ]},
    r2: { h:'Situation 2 · The controversial speaker', s:'A group your unit supports invited a speaker whose views upset many on campus. You are getting calls to cancel.', opts:[
      { t:'Cancel it to keep the peace.', b:'Quiet today, costly later', best:false, out:'The calls stop, and everyone learns which views are welcome. That feeds the politicized perception.' },
      { t:'Keep it within policy, plan for safety and a respectful format, and listen to the people who are upset.', b:'Open forums and civil discourse', best:true, out:'Principle and empathy together. Partner with the offices that own events and speech policy.' },
      { t:'Stay out of it. It is not your event.', b:'Absent, not neutral', best:false, out:'People needed to hear from someone. Neutral is not the same as silent.' }
    ]},
    r3: { h:'Situation 3 · The tempting sponsor', s:'A company offers generous sponsorship if the Vanderbilt name appears prominently in its consumer ads.', opts:[
      { t:'Accept. The program needs the money.', b:'Lending the name', best:false, out:'The money is real. So is attaching Vanderbilt to claims you do not control.' },
      { t:'Bring in the offices that govern the name and sponsorships, and negotiate terms that protect it.', b:'Stewardship', best:true, out:'The name is an asset you borrow. Protect it, and keep the partnership if fair terms are possible.' },
      { t:'Decline any use of the name.', b:'Safe, and maybe too safe', best:false, out:'You may turn away a partner who would have accepted fair terms.' }
    ]},
    t1: { h:'Situation 1 · The Monday after', s:'Your team’s project is being praised all the way to the Chancellor’s office. It is Monday morning and everyone is still celebrating.', opts:[
      { t:'Let the glow carry the team for a few weeks.', b:'Momentum fades', best:false, out:'Without a next target, energy drifts.' },
      { t:'Celebrate people by name, capture what made it work, and point at the next goal.', b:'Proud but not satisfied', best:true, out:'Lee says winning is a result; the joy is in the commitment to the process. Name what worked, then set the next goal.' },
      { t:'Skip the celebration and go to the next deadline.', b:'Earned joy, skipped', best:false, out:'You lose the lesson and the energy that came with the win.' }
    ]},
    t2: { h:'Situation 2 · The star’s bad moment', s:'Your best performer posts something unprofessional about a partner office. Colleagues across campus saw it.', opts:[
      { t:'Let it go. They deliver more than anyone.', b:'A double standard', best:false, out:'The team learns the rules depend on who you are.' },
      { t:'Name it as unacceptable, expect a repair, and keep supporting them.', b:'Own the response', best:true, out:'Lee’s standard: it is okay to feel how you feel, but you are accountable for how you act and respond. Work with HR on anything that rises to a conduct issue.' },
      { t:'Pull them off every project right away.', b:'Accountable, and harsh', best:false, out:'Everyone learns one mistake ends you, and people stop taking risks.' }
    ]},
    t3: { h:'Situation 3 · The slow start', s:'A manager you hired has the right values and a strong plan. A year in, results are below target and people are questioning the hire.', opts:[
      { t:'Replace them before it gets worse.', b:'Too fast', best:false, out:'You may cut off a build just before it pays off.' },
      { t:'Look at the leading signs, adjust support, and set clear milestones for year two.', b:'Patient, with eyes open', best:true, out:'Lee backed Clark Lea through a 2-10 first season in 2021; in 2024 his team upset No. 1 Alabama.' },
      { t:'Defend them and change nothing.', b:'Loyal, and unclear', best:false, out:'The team is left without a standard.' }
    ]}
  },
  CALL_SETS: { pressure:['r1', 'r2', 'r3'], teamcalls:['t1', 't2', 't3'] },
  CALL_PROG: {
    pressure:{ prog:'pressure', noun:'situations', status:'#pressureStatus', narr:'pressure/s' },
    teamcalls:{ prog:'teamcalls', noun:'situations', status:'#teamcallsStatus', narr:'teamcalls/s' }
  },
  ASSESS: {
    health: { lo:'Not true', hi:'Very true', items:[
      { d:'Safety', t:'It is safe to disagree or say an idea will not work.' },
      { d:'Dependability', t:'When we commit to a task, we deliver it on time.' },
      { d:'Clarity', t:'We know who owns each part of the brief, and when it is due.' },
      { d:'Meaning', t:'The challenge we chose matters to me.' },
      { d:'Impact', t:'If Vanderbilt adopted our idea, it would make a real difference.' }
    ], reads:{
      Safety:{ high:'People speak up. Ask the quietest member to poke holes in the brief.', low:'Open the next meeting by asking each person for one concern, and thank them for it.' },
      Dependability:{ high:'Work arrives when promised. Keep owners and dates visible through week four.', low:'Give every open task one owner and one date, written where everyone can see it.' },
      Clarity:{ high:'Roles are clear. Make the brief just as clear.', low:'Agree today on who edits, who checks the seven requirements, and when.' },
      Meaning:{ high:'Let that conviction show in the story the brief tells.', low:'Ask each member why this challenge matters to them. Use the best answer in the opening.' },
      Impact:{ high:'Name who will notice the difference first.', low:'Shrink the pilot until everyone can see the difference it would make.' }
    }}
  },
  /* coaching under each text box: which checks a strong answer passes (see lr-engine.js, feedback) */
  FEEDBACK: {
    reframe: { assume:[], whatif:['whatif'], borrow:['outside'], pilot:['number', 'when'], proof:['number'] },
    collab: { share:['who'], critic:['who'], top:['who'], win:['number', 'when'] },
    repstatement: { stmt:['who'], up:['who'], risk:[], mit:['who'] },
    draft: { people:['who'], process:[], tech:[], steps:['who', 'when'], metrics:['number', 'when'], sustain:['who', 'money'] },
    carry: { idea:[], live:['action'], teach:['who', 'when'], next:['who'] },
    recap1:{ txt:['own'] }, recap2:{ txt:['own'] }, recap3:{ txt:['own'] },
    me1:{ txt:['own', 'when'] }, me2:{ txt:['own', 'when'] }, me3:{ txt:['own', 'when'] }
  },
  BUILDS: {
    me3: { title:'As a manager, after module 6', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    me2: { title:'As a manager, after module 5', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    me1: { title:'As a manager, after module 4', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    collab: { title:'My collaboration map', fields:['share', 'critic', 'top', 'win'], need:3, tpl:function(v){
      return 'SHARE THE CREDIT: ' + (v.share || '[partners who must share the credit]') + '\nA LIKELY CRITIC: ' + (v.critic || '[who, and how we listen first]') + '\nTOP PRODUCERS: ' + (v.top || '[who already does this well, and how we back them]') + '\nTHE EARLY WIN: ' + (v.win || '[the first result that shows we mean business]'); } },
    carry: { title:'My plan to carry it forward', fields:['idea', 'live', 'teach', 'next'], need:3, tpl:function(v){
      return 'THE IDEA MY TEAM NEEDS MOST: ' + (v.idea || '[one idea from the program]') + '\nHOW I WILL LIVE IT: ' + (v.live || '[a decision, habit, or question people will see me use]') + '\nHOW I WILL TEACH IT: ' + (v.teach || '[to whom, and by when]') + '\nTHE NEXT LEADER: ' + (v.next || '[someone I will encourage toward a future cohort, and why]'); } },
    recap1: { title:'Module 4, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap2: { title:'Module 5, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap3: { title:'Module 6, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    reframe: { title:'My reframe and pilot', fields:['assume', 'whatif', 'borrow', 'pilot', 'proof'], need:4, tpl:function(v){
      return 'THE USUAL ASSUMPTION: ' + (v.assume || '[what everyone believes about this problem]') + '\nTHE REFRAME: What if ' + (v.whatif || '[...]') + '\nBORROWED FROM OUTSIDE HIGHER ED: ' + (v.borrow || '[an idea from another industry]') + '\nTHE PILOT: ' + (v.pilot || '[who, where, how long, roughly what it costs]') + '\nWE SCALE IF: ' + (v.proof || '[the result that proves it]'); } },
    repstatement: { title:'My reputational statement', fields:['stmt', 'up', 'risk', 'mit'], need:3, tpl:function(v){
      return 'STATEMENT: ' + (v.stmt || '[why this project matters for Vanderbilt’s credibility and visibility]') + '\nUPSIDE: ' + (v.up || '[who will notice, and what they will say]') + '\nTOP RISKS: ' + (v.risk || '[what could go wrong in public]') + '\nHOW WE PROTECT TRUST: ' + (v.mit || '[transparency, expertise, commitment, empathy]'); } },
    draft: { title:'My draft of brief sections 4 to 7', fields:['people', 'process', 'tech', 'steps', 'metrics', 'sustain'], need:5, tpl:function(v, b){
      return '4. INTEGRATED SOLUTION\nPeople: ' + (v.people || '[roles, skills, culture]') + '\nProcess: ' + (v.process || '[steps removed, handoffs fixed]') + '\nTechnology: ' + (v.tech || '[tools added, retired, or connected]') +
        '\n\n5. STEPS, OWNERS, TIMELINE\n' + (v.steps || (b('reframe', 'pilot') ? 'Start with the pilot: ' + b('reframe', 'pilot') : '[one line per step: what, owner role, by when]')) +
        '\n\n6. SUCCESS METRICS\n' + (v.metrics || (b('reframe', 'proof') ? b('reframe', 'proof') : '[baseline, target, date]')) +
        '\n\n7. SUSTAINABILITY PLAN\n' + (v.sustain || '[who owns it after the pod, and how year two is funded]') +
        (b('repstatement', 'stmt') ? '\n\nREPUTATION: ' + b('repstatement', 'stmt') : '') + (b('repstatement', 'risk') ? '\nRisks and mitigation: ' + b('repstatement', 'risk') + (b('repstatement', 'mit') ? ' ' + b('repstatement', 'mit') : '') : ''); } }
  },
  COMMITS: [
    ['Meet your pod', 'About 60 minutes. Merge drafts, compare health checks, set owners for week four.'],
    ['Finish a full draft', 'All seven sections in one document, about three pages, by Friday, November 13.'],
    ['Post in Teams', 'Answer this week’s topic in your cohort channel.'],
    ['Reply to a colleague', 'Share an example, encouragement, or an idea that builds on theirs.']
  ],
  tell: function(which, get){
    var b = function(k, f){ return (get('b-' + k + '-' + f) || '').trim(); };
    if(which === 'teams'){
      var w = b('reframe', 'whatif');
      return 'One principle I am taking back to my team from Candice Storey Lee: [values first, control the controllables, own your response, or another]. ' + (w ? 'Our pod’s reframe this week: what if ' + w.replace(/[.!?]$/, '') + '?' : 'Our pod’s reframe this week: [your what if].') + ' Which of her principles does your team live best?';
    }
    return '';
  },
  QUIZ: [
    { seg:'Mindset', q:'Your pod wants staff to adopt a new shared service. Behavior is involved, there are many causes, and no one knows the answer. What is the best first step?', opts:['Commission a full analysis before acting', 'Run a small pilot, measure, and scale what works', 'Copy what the largest peer does', 'Roll it out everywhere at once'], a:1, x:'That is a complex problem. Probe, sense, respond: a pilot teaches what analysis cannot.' },
    { seg:'Mindset', q:'You inherit an underperforming team. Based on Lutz\u2019s turnaround, what comes first?', opts:['A new logo for the team', 'Replacing every system', 'Listen to key people and benchmark honestly against the best', 'Wait a year to see what happens'], a:2, x:'Diagnosis before solutions: listen carefully and make a clear-eyed assessment.' },
    { seg:'Mindset', q:'A plan buys new software and changes nothing else. What is missing?', opts:['Nothing; tools fix problems', 'Changes to people and process, driven at the same time', 'A bigger software budget', 'A press release'], a:1, x:'Drive people, process, and technology agendas together. A tool alone fixes nothing.' },
    { seg:'Reputation', q:'A data error from your office reached students this morning. Which response protects trust best?', opts:['Wait until every fact is confirmed', 'Correct it fast, say what you know and do not, name the owner of the fix, and bring in Communications', 'Explain that it was a vendor\u2019s fault', 'Fix it quietly'], a:1, x:'Transparency, expertise, commitment, and empathy, with one university voice.' },
    { seg:'Reputation', q:'Which statement best describes reputation as infrastructure?', opts:['A campaign the communications office runs each year', 'Something only rankings measure', 'A system built every day by operations and decisions, which turns visibility into resources', 'A crisis plan'], a:2, x:'A system, a source of options, a platform for momentum, and a converter of visibility into resources.' },
    { seg:'Teams', q:'A vendor delay outside your control puts a key project behind. Which response matches Candice Storey Lee\u2019s approach?', opts:['Spend the team meeting on what went wrong with the vendor', 'Skip the lament and focus the team on what it controls: preparation, effort, and response', 'Wait for the vendor before doing anything', 'Lower the goal so no one is disappointed'], a:1, x:'In her words: it is easy to lament things you cannot control, and we never want to do that. Leaders create the conditions; each person brings maximum effort.' },
    { seg:'Teams', q:'Your team is upset about a hard decision you made. What does Lee\u2019s view of accountability suggest?', opts:['Tell them not to feel that way', 'Reverse the decision to restore morale', 'Acknowledge the feeling, then hold everyone, including you, to how you act and respond', 'Avoid the topic until it blows over'], a:2, x:'It is okay to feel how you feel, but what really matters is what you do: how you act and how you respond.' },
    { seg:'Your brief', q:'Which success metric is strongest?', opts:['Launch the new process', 'Increase awareness', 'Median days to full system access drops from 21 to 2 in the pilot by March', 'Send weekly updates'], a:2, x:'A baseline, a target, a date, and an outcome people feel.' }
  ],
  SCEN_POS: { r1:2, r2:0, r3:1, t1:0, t2:2, t3:1 },
  NUMS_POS: [0, 2, 1, 1],
  QUIZ_POS: [1, 2, 0, 3, 1, 3, 0, 2],
  QUIZ_PASS: 6,
  OVERVIEW: {
    week: 'Course Two · Week of November 9',
    topics: 'Entrepreneurial Mindset · Reputational Stewardship · High-Performing Teams',
    due: 'Fri, Nov 13', dueLabel: 'full first draft by',
    goals: ['<b>Apply</b> the change moves and Radical Collaboration behind Vanderbilt’s fundraising turnaround to your challenge.', '<b>Reframe</b> a challenge and design the smallest pilot that would prove it.', '<b>Judge</b> a decision through the trust radar, and place a story on the reputation terrain.', '<b>Time</b> your response: act before, during, and after an issue while you still have control.', '<b>Write</b> your capstone’s reputational statement, with risks and mitigations.', '<b>Describe</b> how Candice Storey Lee builds high-performing teams, and apply her principles to your pod and your team.', '<b>Draft</b> sections 4 to 7 of your pod’s brief.', '<b>Plan</b> how you will embody the program and teach it to your team.'],
    lessons: [
      { title:'Entrepreneurial mindset', no:'Module 4', keys:['route', 'swot', 'numbers', 'moves', 'collab', 'reframe'], deep:['kind'], recap:'recap1', ideas:[
        ['Diagnose before you build.', 'The turnaround began with an honest benchmark and root causes, and three of four weaknesses were about people.'],
        ['Change three things at once.', 'People, process, and technology together, with every tactic owned and dated.'],
        ['Win together.', 'Radical collaboration: start from the people you serve, treat it as a team sport, and share the credit as One Vanderbilt.'] ] },
      { title:'Reputational stewardship', no:'Module 5', keys:['trust', 'terrain', 'timing', 'pressure', 'repstatement'], recap:'recap2', ideas:[
        ['Reputation is infrastructure.', 'It turns visibility into talent, funding, partners, and access, and it is built every day.'],
        ['Trust has four drivers, and timing matters.', 'Transparency, expertise, commitment, and empathy; a crisis finds the dent in the radar. Act early, while you still have control, because stories migrate toward the loud corner of the terrain.'],
        ['Every leader is a steward.', 'Move fast, tell the truth, show the plan, start with the people affected, and bring in the right offices.'] ] },
      { title:'High-performing teams', no:'Module 6', keys:['lee', 'principles'], deep:['teamcalls', 'health'], recap:'recap3', ideas:[
        ['Values first, every time.', 'Name the values, then let them decide the hard calls: integrity, leadership, resilience, passion, and competitiveness.'],
        ['Control the controllables.', 'Leaders create the conditions; each person brings maximum effort.'],
        ['Own your response.', 'It is okay to feel how you feel; what matters is how you act and respond.'] ] },
      { title:'Your brief', no:'Your brief', keys:['metrics', 'draft', 'quiz', 'nextstep', 'carry'], ideas:[
        ['Measure outcomes.', 'Every metric has a baseline, a target, and a date.'],
        ['Write the plan half.', 'An integrated solution, steps with owners and dates, metrics, and a sustainability plan.'],
        ['Finish together.', 'A full first draft this week; polish in week four.'] ] }
    ],
    work: ['reframe', 'collab', 'repstatement', 'draft', 'carry'],
    footer: 'Your pod’s brief is due Friday, November 20, three pages at most. Three winners, one per focus area.'
  },
  PRINT_TITLE: 'Course Two, my weekly <em>takeaway</em>.',
  EXIT_TOAST: 'You can close this tab. Finish the brief by Friday, November 20.'
};

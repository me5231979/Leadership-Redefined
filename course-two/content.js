/* ══════════ LEADERSHIP REDEFINED · COURSE TWO · content ══════════
   Entrepreneurial Mindset; Reputational Stewardship; High-Performing Teams.
   Week of November 9. Read by ../assets/js/pager.js and
   ../assets/js/lr-engine.js. Strings shown through esc() use plain
   characters, not HTML entities. No em or en dashes. */
window.LR_COURSE = {
  PLAN: [
    { sel:'section.hero',  key:'home',       label:'Welcome',                        mode:'whole' },
    { sel:'#week',         key:'route',      label:'Lesson 1: This week',            mode:'whole' },
    { sel:'#venture',      key:'swot',       label:'Lesson 1: Entrepreneurial mindset', mode:'whole' },
    { sel:'#turnaround',   key:'numbers',    label:'Lesson 1: The turnaround',       mode:'whole' },
    { sel:'#moves',        key:'moves',      label:'Lesson 1: The change moves',     mode:'whole' },
    { sel:'#kind',         key:'kind',       label:'Lesson 1: Know your problem',    mode:'whole' },
    { sel:'#reframe',      key:'reframe',    label:'Lesson 1: Your pilot',           mode:'whole' },
    { sel:'#reputation',   key:'trust',      label:'Lesson 2: Reputational stewardship', mode:'whole' },
    { sel:'#pressure',     key:'pressure',   label:'Lesson 2: Calls under pressure', mode:'whole' },
    { sel:'#repstatement', key:'repstatement', label:'Lesson 2: Your statement',     mode:'whole' },
    { sel:'#teams',        key:'lee',        label:'Lesson 3: High-performing teams', mode:'whole' },
    { sel:'#principles',   key:'principles', label:'Lesson 3: Six principles',       mode:'whole' },
    { sel:'#zone',         key:'teamcalls',  label:'Lesson 3: The learning zone',    mode:'whole' },
    { sel:'#health',       key:'health',     label:'Lesson 3: Your pod',             mode:'whole' },
    { sel:'#metrics',      key:'metrics',    label:'Lesson 4: Strong metrics',       mode:'whole' },
    { sel:'#draft',        key:'draft',      label:'Lesson 4: Draft the brief',      mode:'whole' },
    { sel:'#quiz',         key:'quiz',       label:'Lesson 4: Quick check',          mode:'whole' },
    { sel:'#nextstep',     key:'nextstep',   label:'Lesson 4: This week',            mode:'whole' },
    { sel:'#learn',        key:'learn',      label:'Keep going',                     mode:'whole', extras:['footer'] }
  ],
  SECTIONS: [
    { k:'route',        no:'01', name:'This week',            how:'Visit all four stops' },
    { k:'swot',         no:'02', name:'The diagnosis',        how:'Open all four quadrants' },
    { k:'numbers',      no:'03', name:'The turnaround',       how:'Guess all four numbers' },
    { k:'moves',        no:'04', name:'The change moves',     how:'Sort six tactics' },
    { k:'kind',         no:'05', name:'Know your problem',    how:'Sort four situations' },
    { k:'reframe',      no:'06', name:'Your pilot',           how:'Fill in four of five lines' },
    { k:'trust',        no:'07', name:'How trust is earned',  how:'Open all four drivers' },
    { k:'pressure',     no:'08', name:'Calls under pressure', how:'Find the strongest call in three situations' },
    { k:'repstatement', no:'09', name:'Your reputational statement', how:'Fill in three of four lines' },
    { k:'lee',          no:'10', name:'Meet the leader',      how:'Fact or fiction, four statements' },
    { k:'principles',   no:'11', name:'Six principles',       how:'Open all six' },
    { k:'teamcalls',    no:'12', name:'The learning zone',    how:'Find the strongest call in three situations' },
    { k:'health',       no:'13', name:'Your pod',             how:'Rate your pod' },
    { k:'metrics',      no:'14', name:'Strong metrics',       how:'Sort six metrics' },
    { k:'draft',        no:'15', name:'Draft sections 4 to 7', how:'Fill in five of six parts' },
    { k:'quiz',         no:'16', name:'Quick check',          how:'Score 4 of 5' },
    { k:'nextstep',     no:'17', name:'This week',            how:'Commit to all four moves' }
  ],
  ROUTE_PROG: 'route', ROUTE_NARR: 'route/g',
  STOPS: [
    { h:'Entrepreneurial <em>mindset</em>', p:'A real Vanderbilt turnaround, and your pod’s first pilot.', tags:['The Chancellor', 'The turnaround', 'Your pilot'] },
    { h:'Reputational <em>stewardship</em>', p:'How trust is earned, and three calls under pressure.', tags:['The Chancellor', 'Four drivers of trust', 'Your statement'] },
    { h:'High-performing <em>teams</em>', p:'How Candice Storey Lee builds teams that win, and a check on your pod.', tags:['The Chancellor', 'Six principles', 'Your pod'] },
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
      { t:'Celebrate people by name, capture what made it work, and point at the next goal.', b:'Proud but not satisfied', best:true, out:'After beating No. 1 Alabama, Lee called it just the beginning.' },
      { t:'Skip the celebration and go to the next deadline.', b:'Earned joy, skipped', best:false, out:'You lose the lesson and the energy that came with the win.' }
    ]},
    t2: { h:'Situation 2 · The star’s bad moment', s:'Your best performer posts something unprofessional about a partner office. Colleagues across campus saw it.', opts:[
      { t:'Let it go. They deliver more than anyone.', b:'A double standard', best:false, out:'The team learns the rules depend on who you are.' },
      { t:'Name it as unacceptable, expect a repair, and keep supporting them.', b:'Growth and accountability', best:true, out:'Lee did this publicly when a star player posted a profane message in 2025. Work with HR on anything that rises to a conduct issue.' },
      { t:'Pull them off every project right away.', b:'Accountable, and harsh', best:false, out:'Everyone learns one mistake ends you, and people stop taking risks.' }
    ]},
    t3: { h:'Situation 3 · The slow start', s:'A manager you hired has the right values and a strong plan. A year in, results are below target and people are questioning the hire.', opts:[
      { t:'Replace them before it gets worse.', b:'Too fast', best:false, out:'You may cut off a build just before it pays off.' },
      { t:'Look at the leading signs, adjust support, and set clear milestones for year two.', b:'Patient, with eyes open', best:true, out:'Lee backed Clark Lea through a 2-10 first season. The culture came first, and the results caught up.' },
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
  BUILDS: {
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
    ['Finish a full draft', 'All seven sections in one document, about three pages, by Sunday, November 15.'],
    ['Post in Teams', 'Answer this week’s topic in your cohort channel.'],
    ['Reply to a colleague', 'Share an example, encouragement, or an idea that builds on theirs.']
  ],
  tell: function(which, get){
    var b = function(k, f){ return (get('b-' + k + '-' + f) || '').trim(); };
    if(which === 'teams'){
      var w = b('reframe', 'whatif');
      return 'One principle I am taking back to my team from Candice Storey Lee: [control the controllables, growth with accountability, or another]. ' + (w ? 'Our pod’s reframe this week: what if ' + w.replace(/[.!?]$/, '') + '?' : 'Our pod’s reframe this week: [your what if].') + ' How do you keep a team in the learning zone?';
    }
    return '';
  },
  QUIZ: [
    { seg:'Mindset', q:'Your pod’s challenge has many causes and no known answer. What is the right move?', opts:['Apply the best practice', 'Hire an expert to find the answer', 'Run a small pilot, learn, and scale what works', 'Act immediately to restore order'], a:2, x:'Complex problems call for probe, sense, respond. Pilot, learn, scale.' },
    { seg:'Mindset', q:'What did Lutz mean by driving three agendas at once?', opts:['Budget, staff, and events', 'People, process, and technology together', 'Donors, alumni, and parents', 'Speed, agility, and scale'], a:1, x:'A new tool alone fixes nothing. Your brief asks for the same.' },
    { seg:'Reputation', q:'A mistake from your office is spreading online. What protects trust best?', opts:['Fix it quietly', 'Explain it was a system error', 'Say nothing until every fact is final', 'Correct it fast, apologize, involve Communications, confirm the fix'], a:3, x:'Transparency, expertise, commitment, and empathy together.' },
    { seg:'Teams', q:'High standards with low psychological safety put a team in which zone?', opts:['Anxiety', 'Learning', 'Comfort', 'Apathy'], a:0, x:'People work hard and hide problems. Add safety to reach the learning zone.' },
    { seg:'Your brief', q:'Which is a strong success metric?', opts:['Launch the new website', 'Increase awareness', 'Median days to system access drops from 21 to 5 by spring', 'Emails sent'], a:2, x:'Baseline, target, date, and an outcome people feel.' }
  ],
  QUIZ_POS: [2, 1, 3, 0, 2],
  PRINT_TITLE: 'Course Two, my <em>takeaway</em>.',
  EXIT_TOAST: 'You can close this tab. Finish the brief by Friday, November 20.'
};

/* ══════════ LEADERSHIP REDEFINED · COURSE TWO · content ══════════
   Module 4: Communication, Storytelling & Brand; Module 5: Entrepreneurial Mindset;
   Module 6: High-Performing Teams. Week of November 9.
   Read by ../assets/js/pager.js and ../assets/js/lr-engine.js. No em or en dashes. */
window.LR_COURSE = {
  PLAN:[
    { sel:'section.hero', key:'home', label:'Welcome', mode:'whole' },
    { sel:'#week', key:'route', label:'This week', mode:'whole' },
    { sel:'#brand', key:'brand', label:'Module 4: Brand and reputation', mode:'whole' },
    { sel:'#fighter', key:'fighter', label:'Module 4: Spikes and systems', mode:'whole' },
    { sel:'#ground', key:'ground', label:'Module 4: The ground game', mode:'whole' },
    { sel:'#story', key:'story', label:'Module 4: Your storyline', mode:'whole' },
    { sel:'#me1', key:'me1', label:'Module 4: What this means for me', mode:'whole' },
    { sel:'#recap1', key:'recap1', label:'Module 4: Wrap-up', mode:'whole' },
    { sel:'#gdstory', key:'gdstory', label:'Module 4: Go deeper, the shape of a great talk', mode:'whole' },
    { sel:'#venture', key:'swot', label:'Module 5: Entrepreneurial mindset', mode:'whole' },
    { sel:'#turnaround', key:'numbers', label:'Module 5: The turnaround', mode:'whole' },
    { sel:'#moves', key:'moves', label:'Module 5: The change moves', mode:'whole' },
    { sel:'#collab', key:'collab', label:'Module 5: Radical collaboration', mode:'whole' },
    { sel:'#reframe', key:'reframe', label:'Module 5: Your pilot', mode:'whole' },
    { sel:'#me2', key:'me2', label:'Module 5: What this means for me', mode:'whole' },
    { sel:'#recap2', key:'recap2', label:'Module 5: Wrap-up', mode:'whole' },
    { sel:'#kind', key:'kind', label:'Module 5: Go deeper, kinds of problems', mode:'whole' },
    { sel:'#teams', key:'lee', label:'Module 6: High-performing teams', mode:'whole' },
    { sel:'#principles', key:'principles', label:'Module 6: Six principles', mode:'whole' },
    { sel:'#me3', key:'me3', label:'Module 6: What this means for me', mode:'whole' },
    { sel:'#recap3', key:'recap3', label:'Module 6: Wrap-up', mode:'whole' },
    { sel:'#zone', key:'teamcalls', label:'Module 6: Go deeper, the learning zone', mode:'whole' },
    { sel:'#health', key:'health', label:'Module 6: Go deeper, team health', mode:'whole' },
    { sel:'#metrics', key:'metrics', label:'Your brief: Strong metrics', mode:'whole' },
    { sel:'#draft', key:'draft', label:'Your brief: Draft the brief', mode:'whole' },
    { sel:'#quiz', key:'quiz', label:'Your brief: Quick check', mode:'whole' },
    { sel:'#nextstep', key:'nextstep', label:'Your brief: This week', mode:'whole' },
    { sel:'#carry', key:'carry', label:'Your brief: Carry it forward', mode:'whole' },
    { sel:'#learn', key:'learn', label:'Keep going', mode:'whole', extras:['footer'] }
  ],
  SECTIONS:[
    { k:'route', no:'01', name:'This week', how:'Preview the three modules and your brief' },
    { k:'brand', no:'02', name:'Brand or reputation', how:'Decide six statements' },
    { k:'fighter', no:'03', name:'Spikes and systems', how:'Open all four moves' },
    { k:'ground', no:'04', name:'The ground game', how:'Fill in three of four lines' },
    { k:'story', no:'05', name:'Your storyline', how:'Fill in four of five lines' },
    { k:'swot', no:'06', name:'The diagnosis', how:'Open all four quadrants' },
    { k:'numbers', no:'07', name:'The turnaround', how:'Guess all four numbers' },
    { k:'moves', no:'08', name:'The change moves', how:'Sort six tactics' },
    { k:'collab', no:'09', name:'Radical collaboration', how:'Fill in three of four lines' },
    { k:'reframe', no:'10', name:'Your pilot', how:'Fill in four of five lines' },
    { k:'lee', no:'11', name:'Meet the leader', how:'Fact or fiction, four statements' },
    { k:'principles', no:'12', name:'Six principles', how:'Open all six' },
    { k:'metrics', no:'13', name:'Strong metrics', how:'Sort six metrics' },
    { k:'draft', no:'14', name:'Draft sections 4 to 7', how:'Fill in five of six parts' },
    { k:'quiz', no:'15', name:'Quick check', how:'Score 6 of 8' },
    { k:'nextstep', no:'16', name:'This week', how:'Commit to all four moves' },
    { k:'carry', no:'17', name:'Carry it forward', how:'Fill in three of four lines' }
  ],
  ROUTE_PROG:'route',
  ROUTE_NARR:'route/g',
  STOPS:[
    {
      h:'Module 4: Communication, Storytelling &amp; <em>Brand</em>',
      p:'The Chancellor on communication, then your pod’s storyline.',
      tags:['The Chancellor', 'Brand or reputation', 'The ground game', 'Your storyline']
    },
    {
      h:'Module 5: Entrepreneurial <em>Mindset</em>',
      p:'A real Vanderbilt turnaround, radical collaboration, and your pod’s first pilot.',
      tags:['The Chancellor', 'The turnaround', 'Radical collaboration', 'Your pilot']
    },
    {
      h:'Module 6: High-Performing <em>Teams</em>',
      p:'How Candice Storey Lee builds teams that win, and a check on your pod.',
      tags:['The Chancellor', 'Six principles', 'Go deeper: the learning zone']
    },
    { h:'Finish your <em>brief</em>', p:'Draft sections 4 to 7, so your pod has a full first draft.', tags:['Strong metrics', 'Draft', 'Quick check'] }
  ],
  BEST_LABEL:'The strongest call: ',
  TRY_AGAIN:'Now find the strongest call. ',
  NUMS:[
    {
      lab:'New commitments, 2025',
      q:'In 1998, new commitments were $63 million. In 2025?',
      opts:['About $150M', 'About $250M', '$345M, a record'],
      a:2,
      big:'$345M',
      x:'Another record-breaking year, and the FY26 forecast is $600M or more.'
    },
    {
      lab:'Cash, 2025',
      q:'How much cash came in during 2025?',
      opts:['$98M', '$148M', '$198M'],
      a:2,
      big:'$198M',
      x:'The best cash year since the VUMC split.'
    },
    {
      lab:'Growth rate',
      q:'Average yearly growth in new commitments, 2020 to 2025?',
      opts:['About 5%', 'About 12%', 'About 22%'],
      a:2,
      big:'+22%',
      x:'Compound annual growth. Cash grew about 10% a year.'
    },
    {
      lab:'The starting gap',
      q:'Before the turnaround, Vanderbilt raised about how much per living alumnus? Leaders raised $1,200 to $3,000.',
      opts:['$240', '$900', '$1,500'],
      a:0,
      big:'$240',
      x:'Fiscal 2017 to 2021 average. A clear-eyed benchmark against the best, not the average.'
    }
  ],
  NUM_PROG:'numbers',
  DRILLS:{
    brand:{
      opts:['Brand', 'Reputation'],
      prog:'brand',
      verb:'decided',
      items:[
        { s:'The university’s statement of its core values.', a:0, x:'What Vanderbilt says about itself. Necessary, and only half of the picture.' },
        {
          s:'A parent in Ohio telling a neighbor that Vanderbilt really takes care of its students.',
          a:1,
          x:'Someone else talking about Vanderbilt. Peer to peer, this is where trust multiplies.'
        },
        { s:'A national news story written by an outside reporter.', a:1, x:'Earned, not owned. You shape it by what you do, not by what you say.' },
        {
          s:'A campaign ad on what makes a Vanderbilt education different.',
          a:0,
          x:'Paid and owned communication is brand. It works when the experience matches the claim.'
        },
        {
          s:'A vendor telling another university that Vanderbilt pays on time and is easy to work with.',
          a:1,
          x:'Reputation is built in operations too. Staff leaders shape it every day.'
        },
        {
          s:'The talking points your office writes for a program launch.',
          a:0,
          x:'What you plan to say. It becomes reputation only when others repeat it, and believe it.'
        }
      ]
    },
    moves:{
      opts:['People and Culture', 'Collaboration', 'Motivation and Incentives', 'Process and Systems'],
      prog:'moves',
      verb:'sorted',
      items:[
        { s:'Establish an internal academy to develop fundraisers.', a:0, x:'Growing and keeping top talent is where the transformation started.' },
        { s:'Implement a new donor relationship system (CRM).', a:3, x:'The technology agenda, paired with better data and analytics.' },
        { s:'Balanced performance goals for every gift officer.', a:2, x:'Ambitious goals and aligned motivation were key change drivers.' },
        {
          s:'Rebuild relationships with deans and campus partners.',
          a:1,
          x:'It reversed the team’s image as a poor partner, under the Chancellor’s call for radical collaboration.'
        },
        {
          s:'Shared credit, so schools work together on gifts that cross Vanderbilt.',
          a:1,
          x:'We operate as One Vanderbilt. Donors who support several areas give the most.'
        },
        { s:'A kaizen culture of small, continuous improvements.', a:3, x:'Borrowed from manufacturing: look beyond best practices for new ideas.' }
      ]
    },
    kind:{
      opts:['Simple', 'Complicated', 'Complex', 'Chaotic'],
      prog:'kind',
      verb:'sorted',
      items:[
        { s:'Processing a routine form with a clear, documented procedure.', a:0, x:'Follow the best practice. Sense, categorize, respond.' },
        {
          s:'Choosing between three vendor systems with full specifications and references.',
          a:1,
          x:'There is a right answer and experts can find it. Sense, analyze, respond.'
        },
        {
          s:'Getting more students to attend career programs they say they value.',
          a:2,
          x:'Behavior, many causes, no known answer. Probe with a small pilot, then scale what works.'
        },
        {
          s:'A building loses power during a major event and no one knows the plan.',
          a:3,
          x:'Act first to make people safe. Then sense and respond, and write the plan afterward.'
        }
      ]
    },
    lee:{
      opts:['Fact', 'Fiction'],
      prog:'lee',
      verb:'decided',
      items:[
        {
          s:'Candice Storey Lee was the first Black woman to lead an athletics department in the SEC.',
          a:0,
          x:'Fact. She was named Vanderbilt’s athletic director in 2020, and also its first woman in the role.'
        },
        {
          s:'She came to Vanderbilt from another university’s athletics department.',
          a:1,
          x:'Fiction. She arrived as a student-athlete, captained the women’s basketball team, and rose through Vanderbilt for more than two decades.'
        },
        {
          s:'She holds three Vanderbilt degrees.',
          a:0,
          x:'Fact. A BS in human and organizational development, an MEd, and an EdD in higher education leadership and policy.'
        },
        {
          s:'Vanderbilt football’s first ten-win season came in 2025.',
          a:0,
          x:'Fact. It followed the October 2024 upset of No. 1 Alabama. Coach Clark Lea, her 2020 hire, signed a six-year extension.'
        }
      ]
    },
    metrics:{
      opts:['Strong', 'Weak'],
      prog:'metrics',
      verb:'sorted',
      items:[
        { s:'Increase awareness of the new process.', a:1, x:'No number, no date. Try: 80% of administrators can find it in under a minute by March.' },
        {
          s:'Median days from hire to full system access drops from 21 to 2 in the pilot by March.',
          a:0,
          x:'A baseline, a target, a date, and an outcome people feel.'
        },
        { s:'Launch the new website.', a:1, x:'A milestone, not a result. Put it in the timeline and measure what it changes.' },
        { s:'At least 70% of staff use the tool in year one.', a:0, x:'A past pod’s metric. Clear and countable.' },
        { s:'Number of emails sent promoting the program.', a:1, x:'Activity, not impact.' },
        { s:'Pilot attendance rises 25% over last spring, and 60% of attendees come back.', a:0, x:'One number for reach and one for value.' }
      ]
    }
  },
  SCENARIOS:{
    t1:{
      h:'Situation 1 · The Monday after',
      s:'Your team’s project is being praised all the way to the Chancellor’s office. It is Monday morning and everyone is still celebrating.',
      opts:[
        { t:'Let the glow carry the team for a few weeks.', b:'Momentum fades', best:false, out:'Without a next target, energy drifts.' },
        {
          t:'Celebrate people by name, capture what made it work, and point at the next goal.',
          b:'Proud but not satisfied',
          best:true,
          out:'Lee says winning is a result; the joy is in the commitment to the process. Name what worked, then set the next goal.'
        },
        {
          t:'Skip the celebration and go to the next deadline.',
          b:'Earned joy, skipped',
          best:false,
          out:'You lose the lesson and the energy that came with the win.'
        }
      ]
    },
    t2:{
      h:'Situation 2 · The star’s bad moment',
      s:'Your best performer posts something unprofessional about a partner office. Colleagues across campus saw it.',
      opts:[
        { t:'Let it go. They deliver more than anyone.', b:'A double standard', best:false, out:'The team learns the rules depend on who you are.' },
        {
          t:'Name it as unacceptable, expect a repair, and keep supporting them.',
          b:'Own the response',
          best:true,
          out:'Lee’s standard: it is okay to feel how you feel, but you are accountable for how you act and respond. Work with HR on anything that rises to a conduct issue.'
        },
        {
          t:'Pull them off every project right away.',
          b:'Accountable, and harsh',
          best:false,
          out:'Everyone learns one mistake ends you, and people stop taking risks.'
        }
      ]
    },
    t3:{
      h:'Situation 3 · The slow start',
      s:'A manager you hired has the right values and a strong plan. A year in, results are below target and people are questioning the hire.',
      opts:[
        { t:'Replace them before it gets worse.', b:'Too fast', best:false, out:'You may cut off a build just before it pays off.' },
        {
          t:'Look at the leading signs, adjust support, and set clear milestones for year two.',
          b:'Patient, with eyes open',
          best:true,
          out:'Lee backed Clark Lea through a 2-10 first season in 2021; in 2024 his team upset No. 1 Alabama.'
        },
        { t:'Defend them and change nothing.', b:'Loyal, and unclear', best:false, out:'The team is left without a standard.' }
      ]
    }
  },
  CALL_SETS:{ teamcalls:['t1', 't2', 't3'] },
  CALL_PROG:{ teamcalls:{ prog:'teamcalls', noun:'situations', status:'#teamcallsStatus', narr:'teamcalls/s' } },
  ASSESS:{
    health:{
      lo:'Not true',
      hi:'Very true',
      items:[
        { d:'Safety', t:'It is safe to disagree or say an idea will not work.' },
        { d:'Dependability', t:'When we commit to a task, we deliver it on time.' },
        { d:'Clarity', t:'We know who owns each part of the brief, and when it is due.' },
        { d:'Meaning', t:'The challenge we chose matters to me.' },
        { d:'Impact', t:'If Vanderbilt adopted our idea, it would make a real difference.' }
      ],
      reads:{
        Safety:{
          high:'People speak up. Ask the quietest member to poke holes in the brief.',
          low:'Open the next meeting by asking each person for one concern, and thank them for it.'
        },
        Dependability:{
          high:'Work arrives when promised. Keep owners and dates visible through week four.',
          low:'Give every open task one owner and one date, written where everyone can see it.'
        },
        Clarity:{ high:'Roles are clear. Make the brief just as clear.', low:'Agree today on who edits, who checks the seven requirements, and when.' },
        Meaning:{
          high:'Let that conviction show in the story the brief tells.',
          low:'Ask each member why this challenge matters to them. Use the best answer in the opening.'
        },
        Impact:{ high:'Name who will notice the difference first.', low:'Shrink the pilot until everyone can see the difference it would make.' }
      }
    }
  },
  FEEDBACK:{
    story:{ person:['who'], is:['who', 'number'], could:['who'], ask:['ask'], aud:['who'] },
    ground:{ asset:['number'], who:['who'], how:['when'], pass:['who'] },
    reframe:{ assume:[], whatif:['whatif'], borrow:['outside'], pilot:['number', 'when'], proof:['number'] },
    collab:{ share:['who'], critic:['who'], top:['who'], win:['number', 'when'] },
    draft:{ people:['who'], process:[], tech:[], steps:['who', 'when'], metrics:['number', 'when'], sustain:['who', 'money'] },
    carry:{ idea:[], live:['action'], teach:['who', 'when'], next:['who'] },
    recap1:{ txt:['own'] },
    me1:{ txt:['own', 'when'] },
    recap2:{ txt:['own'] },
    me2:{ txt:['own', 'when'] },
    recap3:{ txt:['own'] },
    me3:{ txt:['own', 'when'] }
  },
  BUILDS:{
    me1:{ title:'As a manager, after Module 4', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap1:{ title:'Module 4, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    me2:{ title:'As a manager, after Module 5', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap2:{ title:'Module 5, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    me3:{ title:'As a manager, after Module 6', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    recap3:{ title:'Module 6, in my words', fields:['txt'], need:1, tpl:function(v){ return v.txt || '[not written yet]'; } },
    ground:{
      title:'My ground game play',
      fields:['asset', 'who', 'how', 'pass'],
      need:3,
      tpl:function(v){
      return 'THE ASSET: ' + (v.asset || '[a story, a number, or a result]') + '\nWHO SHOULD HEAR IT: ' + (v.who || '[a priority person or group]') + '\nHOW I WILL SHARE IT: ' + (v.how || '[directly, and when]') + '\nHOW THEY PASS IT ON: ' + (v.pass || '[peer to peer]'); }
    },
    story:{
      title:'My storyline',
      fields:['person', 'is', 'could', 'ask', 'aud'],
      need:4,
      tpl:function(v){
      return 'OPENING: ' + (v.person || '[a real person and a real moment]') + '\nWHAT IS: ' + (v.is || '[the frustrating present]') + '\nWHAT COULD BE: ' + (v.could || '[the better future your idea creates]') + '\nTHE ASK: ' + (v.ask || '[what you need your audience to say yes to]') + '\nAUDIENCES: ' + (v.aud || '[who must hear it, and what each one cares about]'); }
    },
    collab:{
      title:'My collaboration map',
      fields:['share', 'critic', 'top', 'win'],
      need:3,
      tpl:function(v){
      return 'SHARE THE CREDIT: ' + (v.share || '[partners who must share the credit]') + '\nA LIKELY CRITIC: ' + (v.critic || '[who, and how we listen first]') + '\nTOP PRODUCERS: ' + (v.top || '[who already does this well, and how we back them]') + '\nTHE EARLY WIN: ' + (v.win || '[the first result that shows we mean business]'); }
    },
    reframe:{
      title:'My reframe and pilot',
      fields:['assume', 'whatif', 'borrow', 'pilot', 'proof'],
      need:4,
      tpl:function(v){
      return 'THE USUAL ASSUMPTION: ' + (v.assume || '[what everyone believes about this problem]') + '\nTHE REFRAME: What if ' + (v.whatif || '[...]') + '\nBORROWED FROM OUTSIDE HIGHER ED: ' + (v.borrow || '[an idea from another industry]') + '\nTHE PILOT: ' + (v.pilot || '[who, where, how long, roughly what it costs]') + '\nWE SCALE IF: ' + (v.proof || '[the result that proves it]'); }
    },
    carry:{
      title:'My plan to carry it forward',
      fields:['idea', 'live', 'teach', 'next'],
      need:3,
      tpl:function(v){
      return 'THE IDEA MY TEAM NEEDS MOST: ' + (v.idea || '[one idea from the program]') + '\nHOW I WILL LIVE IT: ' + (v.live || '[a decision, habit, or question people will see me use]') + '\nHOW I WILL TEACH IT: ' + (v.teach || '[to whom, and by when]') + '\nTHE NEXT LEADER: ' + (v.next || '[someone I will encourage toward a future cohort, and why]'); }
    },
    draft:{
      title:'My draft of brief sections 4 to 7',
      fields:['people', 'process', 'tech', 'steps', 'metrics', 'sustain'],
      need:5,
      tpl:function(v, b){
      return '4. INTEGRATED SOLUTION\nPeople: ' + (v.people || '[roles, skills, culture]') + '\nProcess: ' + (v.process || '[steps removed, handoffs fixed]') + '\nTechnology: ' + (v.tech || '[tools added, retired, or connected]') +
        '\n\n5. STEPS, OWNERS, TIMELINE\n' + (v.steps || (b('reframe', 'pilot') ? 'Start with the pilot: ' + b('reframe', 'pilot') : '[one line per step: what, owner role, by when]')) +
        '\n\n6. SUCCESS METRICS\n' + (v.metrics || (b('reframe', 'proof') ? b('reframe', 'proof') : '[baseline, target, date]')) +
        '\n\n7. SUSTAINABILITY PLAN\n' + (v.sustain || '[who owns it after the pod, and how year two is funded]') +
        (b('collab', 'share') ? '\n\nPARTNERS WHO SHARE THE CREDIT: ' + b('collab', 'share') : ''); }
    }
  },
  COMMITS:[
    ['Meet your pod', 'About 60 minutes. Merge drafts, compare health checks, set owners for week four.'],
    ['Finish a full draft', 'All seven sections in one document, about three pages, by Friday, November 13.'],
    ['Respond to Teams prompt 2', 'Post your response under Discussions in the Teams channel by Friday, November 13.'],
    ['Reply to a colleague', 'Build on a colleague’s idea, or offer a practical way it could be applied.']
  ],
  tell:function(which, get){
    var b = function(k, f){ return (get('b-' + k + '-' + f) || '').trim(); };
    if(which === 'teams'){
      var w = b('reframe', 'whatif');
      return 'One way I will apply entrepreneurial thinking in my role: [reframe a challenge, run a small pilot, or borrow an idea from outside higher ed]. ' + (w ? 'Our pod’s reframe this week: what if ' + w.replace(/[.!?]$/, '') + '?' : 'Our pod’s reframe this week: [your what if].') + ' A bold idea that could advance Vanderbilt’s vision: [your idea, and why it matters]. What would you pilot first in your area?';
    }
    return '';
  },
  QUIZ:[
    {
      seg:'Brand',
      q:'A new campaign ad praises fast, personal service, but students say offices are slow to respond. What is the real problem?',
      opts:[
        'The ad needs a bigger budget',
        'A gap between brand and reputation; fix the experience, then tell true stories',
        'Students are not the audience',
        'Reputation cannot be changed'
      ],
      a:1,
      x:'Brand is what you say; reputation is what others say. When the experience misses the claim, the gap grows.'
    },
    {
      seg:'Brand',
      q:'Your unit just had a big win in the news. How do you make the attention last?',
      opts:[
        'Wait for the next big win',
        'Run one large ad',
        'Keep a drumbeat of stories and carry them to priority people yourself',
        'Let Communications handle it'
      ],
      a:2,
      x:'A spike without a system is noise. The ground game turns attention into trust.'
    },
    {
      seg:'Story',
      q:'Which opening is strongest for your pod’s capstone pitch?',
      opts:[
        'A table of statistics',
        'One real person in one real moment, then why it matters',
        'The history of the department',
        'A list of everyone on the pod'
      ],
      a:1,
      x:'Ertel’s ask: connect your audience to the why. Start with one person, show the difference, and end with one ask.'
    },
    {
      seg:'Mindset',
      q:'Your pod wants staff to adopt a new shared service. Behavior is involved, there are many causes, and no one knows the answer. What is the best first step?',
      opts:[
        'Commission a full analysis before acting',
        'Run a small pilot, measure, and scale what works',
        'Copy what the largest peer does',
        'Roll it out everywhere at once'
      ],
      a:1,
      x:'That is a complex problem. Probe, sense, respond: a pilot teaches what analysis cannot.'
    },
    {
      seg:'Mindset',
      q:'You inherit an underperforming team. Based on Lutz’s turnaround, what comes first?',
      opts:[
        'A new logo for the team',
        'Replacing every system',
        'Listen to key people and benchmark honestly against the best',
        'Wait a year to see what happens'
      ],
      a:2,
      x:'Diagnosis before solutions: listen carefully and make a clear-eyed assessment.'
    },
    {
      seg:'Teams',
      q:'A vendor delay outside your control puts a key project behind. Which response matches Candice Storey Lee’s approach?',
      opts:[
        'Spend the team meeting on what went wrong with the vendor',
        'Skip the lament and focus the team on what it controls: preparation, effort, and response',
        'Wait for the vendor before doing anything',
        'Lower the goal so no one is disappointed'
      ],
      a:1,
      x:'In her words: it is easy to lament things you cannot control, and we never want to do that. Leaders create the conditions; each person brings maximum effort.'
    },
    {
      seg:'Teams',
      q:'Your team is upset about a hard decision you made. What does Lee’s view of accountability suggest?',
      opts:[
        'Tell them not to feel that way',
        'Reverse the decision to restore morale',
        'Acknowledge the feeling, then hold everyone, including you, to how you act and respond',
        'Avoid the topic until it blows over'
      ],
      a:2,
      x:'It is okay to feel how you feel, but what really matters is what you do: how you act and how you respond.'
    },
    {
      seg:'Your brief',
      q:'Which success metric is strongest?',
      opts:[
        'Launch the new process',
        'Increase awareness',
        'Median days to full system access drops from 21 to 2 in the pilot by March',
        'Send weekly updates'
      ],
      a:2,
      x:'A baseline, a target, a date, and an outcome people feel.'
    }
  ],
  SCEN_POS:{ t1:0, t2:2, t3:1 },
  NUMS_POS:[0, 2, 1, 1],
  QUIZ_POS:[2, 0, 3, 1, 2, 0, 3, 1],
  QUIZ_PASS:6,
  OVERVIEW:{
    week:'Course Two · Week of November 9',
    topics:'Communication, Storytelling and Brand · Entrepreneurial Mindset · High-Performing Teams',
    due:'Fri, Nov 13',
    dueLabel:'full first draft by',
    goals:[
      '<b>Distinguish</b> brand from reputation, and a spike from a system.',
      '<b>Build</b> a storyline that moves a named audience from what is to what could be, and plan how you will carry it as the ground game.',
      '<b>Apply</b> the change moves and Radical Collaboration behind Vanderbilt’s fundraising turnaround to your challenge.',
      '<b>Reframe</b> a challenge and design the smallest pilot that would prove it.',
      '<b>Describe</b> how Candice Storey Lee builds high-performing teams, and apply her principles to your pod and your team.',
      '<b>Draft</b> sections 4 to 7 of your pod’s brief.',
      '<b>Plan</b> how you will embody the program and teach it to your team.'
    ],
    lessons:[
      {
        title:'Communication, Storytelling & Brand',
        no:'Module 4',
        keys:['route', 'brand', 'fighter', 'ground', 'story'],
        recap:'recap1',
        ideas:[
          [
            'Close the gap.',
            'Brand is what we say; reputation is what others say. Deliver the claim, then tell true stories about it.'
          ],
          [
            'A spike needs a system.',
            'Attention climbs from relevance to consideration, trust, and commitment only with a steady drumbeat, carried by leaders.'
          ],
          [
            'Connect people to the why.',
            'One real person, the difference your idea makes, and one clear ask, carried by the people who hear it.'
          ]
        ]
      },
      {
        title:'Entrepreneurial Mindset',
        no:'Module 5',
        keys:['swot', 'numbers', 'moves', 'collab', 'reframe'],
        deep:['kind'],
        recap:'recap2',
        ideas:[
          [
            'Diagnose before you build.',
            'The turnaround began with an honest benchmark and root causes, and three of four weaknesses were about people.'
          ],
          [
            'Change three things at once.',
            'People, process, and technology together, with every tactic owned and dated.'
          ],
          [
            'Win together.',
            'Radical collaboration: start from the people you serve, treat it as a team sport, and share the credit as One Vanderbilt.'
          ]
        ]
      },
      {
        title:'High-Performing Teams',
        no:'Module 6',
        keys:['lee', 'principles'],
        deep:['teamcalls', 'health'],
        recap:'recap3',
        ideas:[
          [
            'Values first, every time.',
            'Name the values, then let them decide the hard calls: integrity, leadership, resilience, passion, and competitiveness.'
          ],
          ['Control the controllables.', 'Leaders create the conditions; each person brings maximum effort.'],
          ['Own your response.', 'It is okay to feel how you feel; what matters is how you act and respond.']
        ]
      },
      {
        title:'Your brief',
        no:'Your brief',
        keys:['metrics', 'draft', 'quiz', 'nextstep', 'carry'],
        ideas:[
          ['Measure outcomes.', 'Every metric has a baseline, a target, and a date.'],
          [
            'Write the plan half.',
            'An integrated solution, steps with owners and dates, metrics, and a sustainability plan.'
          ],
          ['Finish together.', 'A full first draft this week; polish in week four.']
        ]
      }
    ],
    work:['ground', 'story', 'reframe', 'collab', 'draft', 'carry'],
    footer:'Your pod’s brief is due Friday, November 20, three pages at most. Three winners, one per focus area.'
  },
  PRINT_TITLE:'Course Two, my weekly <em>takeaway</em>.',
  EXIT_TOAST:'You can close this tab. Finish the brief by Friday, November 20.'
};

/* ══════════ LEADERSHIP REDEFINED · COURSE TWO · content ══════════
   Module 4: Communication, Storytelling & Brand; Module 5: Entrepreneurial Mindset;
   Module 6: High-Performing Teams. Week of November 9.
   Teaching content traces to the presenters' decks, the Chancellor's intro videos, and
   (Module 6) Candice Storey Lee's cited interviews. Practice items are hypothetical.
   Read by ../assets/js/pager.js and ../assets/js/lr-engine.js. No em or en dashes. */
window.LR_COURSE = {
  PLAN:[
    { sel:'section.hero', key:'home', label:'Welcome', mode:'whole' },
    { sel:'#week', key:'route', label:'This week', mode:'whole' },
    { sel:'#brand', key:'brand', label:'Module 4: Brand and reputation', mode:'pages' },
    { sel:'#ground', key:'ground', label:'Module 4: The ground game', mode:'pages' },
    { sel:'#story', key:'story', label:'Module 4: Your storyline', mode:'whole' },
    { sel:'#wrap4', key:'wrap4', label:'Module 4: Wrap-up', mode:'whole' },
    { sel:'#venture', key:'swot', label:'Module 5: Entrepreneurial mindset', mode:'pages' },
    { sel:'#turnaround', key:'numbers', label:'Module 5: The turnaround', mode:'whole' },
    { sel:'#moves', key:'moves', label:'Module 5: The change moves', mode:'pages' },
    { sel:'#collab', key:'collab', label:'Module 5: Radical collaboration', mode:'whole' },
    { sel:'#reframe', key:'reframe', label:'Module 5: Your pilot', mode:'whole' },
    { sel:'#wrap5', key:'wrap5', label:'Module 5: Wrap-up', mode:'whole' },
    { sel:'#teams', key:'principles', label:'Module 6: High-performing teams', mode:'pages' },
    { sel:'#teamcalls', key:'teamcalls', label:'Module 6: Your call', mode:'whole' },
    { sel:'#wrap6', key:'wrap6', label:'Module 6: Wrap-up', mode:'whole' },
    { sel:'#metrics', key:'metrics', label:'Your brief: Strong metrics', mode:'whole' },
    { sel:'#draft', key:'draft', label:'Your brief: Draft the brief', mode:'whole' },
    { sel:'#quiz', key:'quiz', label:'Your brief: Quick check', mode:'whole' },
    { sel:'#nextstep', key:'nextstep', label:'Your brief: This week', mode:'whole' },
    { sel:'#carry', key:'carry', label:'Your brief: Carry it forward', mode:'whole' },
    { sel:'#deeper', key:'deeper', label:'Go deeper', mode:'whole' },
    { sel:'#learn', key:'learn', label:'Keep going', mode:'whole', extras:['footer'] }
  ],
  SECTIONS:[
    { k:'route', no:'01', name:'This week', how:'Preview the three modules and your brief' },
    { k:'brand', no:'02', name:'Brand or reputation', how:'Sort six of Ertel’s assets' },
    { k:'ground', no:'03', name:'The ground game', how:'Find the strongest call in three moments' },
    { k:'story', no:'04', name:'Your storyline', how:'Fill in three of four lines' },
    { k:'wrap4', no:'05', name:'Module 4 wrap-up', how:'Synthesize, codify, apply' },
    { k:'swot', no:'06', name:'The diagnosis', how:'Sort four weaknesses' },
    { k:'numbers', no:'07', name:'The turnaround', how:'Guess all four numbers' },
    { k:'moves', no:'08', name:'The change moves', how:'Sort four initiatives' },
    { k:'collab', no:'09', name:'Radical collaboration', how:'Fill in three of four lines' },
    { k:'reframe', no:'10', name:'Your pilot', how:'Fill in three of four lines' },
    { k:'wrap5', no:'11', name:'Module 5 wrap-up', how:'Synthesize, codify, apply' },
    { k:'principles', no:'12', name:'Six principles', how:'Open all six' },
    { k:'teamcalls', no:'13', name:'Your call', how:'Find the strongest call in three moments' },
    { k:'wrap6', no:'14', name:'Module 6 wrap-up', how:'Synthesize, codify, apply' },
    { k:'metrics', no:'15', name:'Strong metrics', how:'Sort four metrics' },
    { k:'draft', no:'16', name:'Draft sections 4 to 7', how:'Write all four sections in your brief' },
    { k:'quiz', no:'17', name:'Quick check', how:'Score 6 of 8' },
    { k:'nextstep', no:'18', name:'This week', how:'Commit to all four moves' },
    { k:'carry', no:'19', name:'Carry it forward', how:'Fill in two of three lines' }
  ],
  ROUTE_PROG:'route',
  ROUTE_NARR:'route/g',
  STOPS:[
    {
      h:'Module 4: Communication, Storytelling &amp; <em>Brand</em>',
      p:'The Chancellor on communication, brand and reputation, the ground game, then your pod’s storyline.',
      tags:['The Chancellor', 'Brand or reputation', 'The ground game', 'Your storyline']
    },
    {
      h:'Module 5: Entrepreneurial <em>Mindset</em>',
      p:'A real Vanderbilt turnaround, radical collaboration, and your pod’s first pilot.',
      tags:['The Chancellor', 'The turnaround', 'Radical collaboration', 'Your pilot']
    },
    {
      h:'Module 6: High-Performing <em>Teams</em>',
      p:'The Chancellor, then Candice Storey Lee’s principles, applied to three team moments.',
      tags:['The Chancellor', 'Six principles', 'Your call']
    },
    { h:'Finish your <em>brief</em>', p:'Draft sections 4 to 7, so your pod has a full first draft.', tags:['Strong metrics', 'Draft', 'Quick check'] }
  ],
  BEST_LABEL:'The strongest call: ',
  TRY_AGAIN:'Now find the strongest call. ',
  NUMS:[
    {
      lab:'New commitments, 2025',
      q:'2025 was a banner year for fundraising. New commitments reached about how much?',
      opts:['About $150M', 'About $250M', '$345M, a record'],
      a:2,
      big:'$345M',
      x:'Another record-breaking year.'
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
      lab:'Return on investment',
      q:'In 2020, each $1 invested in fundraising brought in about $4.26 in new commitments. By 2025?',
      opts:['About $3', 'About $4.50', 'About $6'],
      a:2,
      big:'$6.13',
      x:'Three-year rolling averages. Results grew faster than spending.'
    }
  ],
  NUM_PROG:'numbers',
  DRILLS:{
    brand:{
      opts:['Brand asset', 'Reputation asset'],
      prog:'brand',
      verb:'sorted',
      items:[
        { img:'../assets/img/deck/ertel-athletics-brand.jpg', s:'“Some Think,” a Vanderbilt campaign image.', a:0, x:'A brand asset for athletics momentum: Vanderbilt telling its own story, in its own campaign.' },
        { img:'../assets/img/deck/ertel-execution-reputation.jpg', s:'Bloomberg: “Nvidia CEO Pledges $75 Million for Vanderbilt in San Francisco.”', a:1, x:'A reputation asset for execution with ambition: a national outlet reporting what Vanderbilt did.' },
        { img:'../assets/img/deck/ertel-values-brand.jpg', s:'Forbes: “The University And Its Purpose: A Declaration of First Principles,” by Daniel Diermeier.', a:0, x:'A brand asset for values-driven leadership: the Chancellor saying, in his own words, what Vanderbilt stands for.' },
        { img:'../assets/img/deck/ertel-athletics-reputation.jpg', s:'The Tennessean: “Diego Pavia, Candice Lee among Vanderbilt honorees by Tennessee Sports Hall of Fame.”', a:1, x:'A reputation asset for athletics momentum: others honoring Vanderbilt people.' },
        { img:'../assets/img/deck/ertel-values-reputation.jpg', s:'New York magazine: “How Vandy Bested the Ivies.”', a:1, x:'A reputation asset for values-driven leadership: a national magazine telling Vanderbilt’s story.' },
        { img:'../assets/img/deck/ertel-execution-brand.jpg', s:'Quantum Potential: “Vanderbilt’s Next Era: Campuses, Partnerships and the Power of Place with Chancellor Daniel Diermeier.”', a:0, x:'A brand asset for execution with ambition: Vanderbilt’s own episode, in the Chancellor’s voice.' }
      ]
    },
    swot:{
      opts:['People and culture', 'Process and systems'],
      prog:'swot',
      verb:'sorted',
      items:[
        { s:'Silo mentality.', a:0, x:'About how people work together, not about tools.' },
        { s:'Out-of-date processes and systems.', a:1, x:'The only one of the four weaknesses about tools.' },
        { s:'A rigid culture.', a:0, x:'Culture is people. That makes two of four so far.' },
        {
          s:'A hostile environment.',
          a:0,
          x:'Three of four weaknesses were about people and culture, so the transformation started with people and culture.'
        }
      ]
    },
    moves:{
      opts:['People and Culture', 'Collaboration and Engagement', 'Motivation and Incentives', 'Process and Systems'],
      prog:'moves',
      verb:'sorted',
      items:[
        { s:'Retain and develop top talent.', a:0, x:'People and culture: where the transformation started.' },
        { s:'Implement a new CRM and introduce data analytics.', a:3, x:'Process and systems: the technology agenda.' },
        { s:'Develop balanced performance indicators for gift officers.', a:2, x:'Motivation and incentives: ambitious goals, properly aligned.' },
        { s:'Rebuild relationships with deans and other campus partners.', a:1, x:'Collaboration and engagement: partnerships inside and outside the university.' }
      ]
    },
    metrics:{
      opts:['Strong', 'Weak'],
      prog:'metrics',
      verb:'sorted',
      items:[
        {
          s:'Spending on outside contractors in the pilot divisions drops 15% from last year by June.',
          a:0,
          x:'A baseline, a target, a date, and a result you can count.'
        },
        { s:'Increase awareness of the new process.', a:1, x:'No number, no date. Try: 80% of administrators can find it in under a minute by March.' },
        { s:'Number of emails sent promoting the program.', a:1, x:'Activity, not impact. Put it in the timeline and measure what it changes.' },
        { s:'At least 70% of staff use the tool in year one.', a:0, x:'A past pod’s metric. Clear and countable.' }
      ]
    }
  },
  SCENARIOS:{
    g1:{
      h:'Moment 1 · The spike',
      s:'Your unit’s program is featured in a national news story. Everyone in the office is thrilled.',
      opts:[
        { t:'Enjoy it. The story speaks for itself.', b:'A spike, alone', best:false, out:'A spike without a system is noise. The attention fades.' },
        {
          t:'Send the story with a short note to the partners who matter most, and plan next month’s story.',
          b:'Spike plus drumbeat',
          best:true,
          out:'You carry the asset directly to priority people and keep a drumbeat going. That is the ground game.'
        },
        {
          t:'Ask Communications to buy ads around it.',
          b:'More air cover',
          best:false,
          out:'Air cover helps, but reputation creates resources when air cover is carried through the ground game.'
        }
      ]
    },
    g2:{
      h:'Moment 2 · The quiet win',
      s:'Your team cut a process from weeks to days. No one outside the office knows yet.',
      opts:[
        { t:'Wait until it is big enough for the news.', b:'Waiting for a spike', best:false, out:'A spike without a system is noise. Small true stories, shared steadily, are the drumbeat.' },
        {
          t:'Share the result with the people it helps most, and give your team a two-line version to tell.',
          b:'Share and equip',
          best:true,
          out:'What Ertel asks of every leader: share reputation assets to engage stakeholders, and equip others to share Vanderbilt’s story.'
        },
        {
          t:'Mention it in the annual report.',
          b:'Too far away',
          best:false,
          out:'The goal is not simply to be heard; it is for the message to spread. Carry it person to person first.'
        }
      ]
    },
    g3:{
      h:'Moment 3 · The hard question',
      s:'At a partner event, a guest asks you a pointed question about a controversial topic in higher education.',
      opts:[
        { t:'Change the subject quickly.', b:'A missed chance', best:false, out:'Ertel asks leaders to think of difficult or controversial topics as an opportunity to engage.' },
        {
          t:'Listen, engage respectfully, and connect your answer to what Vanderbilt stands for.',
          b:'Engage',
          best:true,
          out:'You engaged and tied your answer to what Vanderbilt stands for: values-driven leadership, one of the three reputation flywheels.'
        },
        {
          t:'Say you cannot comment on anything like that.',
          b:'Silence',
          best:false,
          out:'Silence leaves the story to others. Reputation is what others say about you.'
        }
      ]
    },
    t1:{
      h:'Moment 1 · The Monday after',
      s:'Your team’s project is being praised all the way to the Chancellor’s office. It is Monday morning and everyone is still celebrating.',
      opts:[
        { t:'Let the glow carry the team for a few weeks.', b:'Momentum fades', best:false, out:'Without a next goal, energy drifts.' },
        {
          t:'Celebrate people by name, capture what made it work, and point at the next goal.',
          b:'Joy in the process',
          best:true,
          out:'Lee says winning is a result; the joy comes from commitment to the process. Name what worked, then set the next goal.'
        },
        {
          t:'Skip the celebration and go to the next deadline.',
          b:'Joy skipped',
          best:false,
          out:'You lose the lesson and the energy that came with the win.'
        }
      ]
    },
    t2:{
      h:'Moment 2 · The star’s bad moment',
      s:'Your best performer posts something unprofessional about a partner office. Colleagues across campus saw it.',
      opts:[
        { t:'Let it go. They deliver more than anyone.', b:'A double standard', best:false, out:'The team learns the rules depend on who you are. Values decide every time.' },
        {
          t:'Name it as unacceptable, expect a repair, and keep supporting them.',
          b:'Emotional agility',
          best:true,
          out:'Emotional agility, in Lee’s words: it is okay to feel how you feel, but you are accountable for how you act and respond. Work with HR on anything that rises to a conduct issue.'
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
      h:'Moment 3 · The delay you cannot control',
      s:'A vendor delay outside your control puts your team’s key project two weeks behind. The team is frustrated.',
      opts:[
        { t:'Spend the team meeting on what the vendor got wrong.', b:'Lamenting', best:false, out:'Lee: it is easy to lament things you cannot control, and we never want to do that.' },
        {
          t:'Acknowledge the frustration, then focus the team on what it controls this week.',
          b:'Create the conditions',
          best:true,
          out:'Leaders create the conditions for success: an environment that equips and empowers people to contribute at their highest level, even when a delay is out of their hands.'
        },
        { t:'Lower the goal so no one is disappointed.', b:'Standards slip', best:false, out:'The team learns the standard bends when things get hard.' }
      ]
    }
  },
  CALL_SETS:{ spikecalls:['g1', 'g2', 'g3'], teamcalls:['t1', 't2', 't3'] },
  CALL_PROG:{
    spikecalls:{ prog:'ground', noun:'moments', status:'#groundStatus', narr:'ground/s' },
    teamcalls:{ prog:'teamcalls', noun:'moments', status:'#teamcallsStatus', narr:'teamcalls/s' }
  },
  FEEDBACK:{
    story:{ person:['who'], could:['who'], ask:['ask'], aud:['who'] },
    reframe:{ whatif:['whatif'], borrow:['outside'], pilot:['number', 'when'], proof:['number'] },
    collab:{ share:['who'], critic:['who'], top:['who'], win:['number', 'when'] },
    carry:{ idea:[], live:['action'], teach:['who', 'when'] },
    wrap4:{ syn:['own'], cod:['action'], app:['who', 'when'] },
    wrap5:{ syn:['own'], cod:['action'], app:['who', 'when'] },
    wrap6:{ syn:['own'], cod:['action'], app:['who', 'when'] }
  },
  BUILDS:{
    wrap4:{ title:'Module 4: synthesize, codify, apply', fields:['syn', 'cod', 'app'], need:3, tpl:function(v){ return 'SYNTHESIZE: ' + (v.syn || '[the idea, in my words]') + '\nCODIFY: ' + (v.cod || '[a habit, question, or rule my team will use]') + '\nAPPLY: ' + (v.app || '[what I will do with my team, and when]'); } },
    wrap5:{ title:'Module 5: synthesize, codify, apply', fields:['syn', 'cod', 'app'], need:3, tpl:function(v){ return 'SYNTHESIZE: ' + (v.syn || '[the idea, in my words]') + '\nCODIFY: ' + (v.cod || '[a habit, question, or rule my team will use]') + '\nAPPLY: ' + (v.app || '[what I will do with my team, and when]'); } },
    wrap6:{ title:'Module 6: synthesize, codify, apply', fields:['syn', 'cod', 'app'], need:3, tpl:function(v){ return 'SYNTHESIZE: ' + (v.syn || '[the idea, in my words]') + '\nCODIFY: ' + (v.cod || '[a habit, question, or rule my team will use]') + '\nAPPLY: ' + (v.app || '[what I will do with my team, and when]'); } },
    story:{
      title:'My storyline',
      fields:['person', 'could', 'ask', 'aud'],
      need:3,
      tpl:function(v){
      return 'OPENING: ' + (v.person || '[a real person and a moment that shows the problem]') + '\nWHAT COULD BE: ' + (v.could || '[what changes for them if your idea works]') + '\nTHE ASK: ' + (v.ask || '[what you need your audience to say yes to]') + '\nAUDIENCES: ' + (v.aud || '[who must hear it, and what each one cares about]'); }
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
      fields:['whatif', 'borrow', 'pilot', 'proof'],
      need:3,
      tpl:function(v){
      return 'THE REFRAME: ' + (v.whatif || '[what if...]') + '\nBORROWED: ' + (v.borrow || '[an idea from outside higher education, or a peer]') + '\nTHE PILOT: ' + (v.pilot || '[who, where, how long, roughly what it costs]') + '\nWE SCALE IF: ' + (v.proof || '[the result that proves it]'); }
    },
    carry:{
      title:'My plan to carry it forward',
      fields:['idea', 'live', 'teach'],
      need:2,
      tpl:function(v){
      return 'THE IDEA MY TEAM NEEDS MOST: ' + (v.idea || '[one idea from the program]') + '\nHOW I WILL LIVE IT: ' + (v.live || '[a decision, habit, or question people will see me use]') + '\nHOW I WILL TEACH IT: ' + (v.teach || '[to whom, and by when]'); }
    },
  },
  COMMITS:[
    ['Meet your pod', 'About 60 minutes. Merge drafts and set owners and dates for the final week.'],
    ['Finish a full draft', 'All seven sections in one document, about three pages, by Friday, November 13.'],
    ['Respond to Teams prompt 2', 'Post your response under Discussions in the Teams channel by Friday, November 13.'],
    ['Reply to a colleague', 'Build on a colleague’s idea, or offer a practical way it could be applied.']
  ],
  tell:function(which, get){
    var b = function(k, f){ return (get('b-' + k + '-' + f) || '').trim(); };
    if(which === 'teams'){
      var w = b('reframe', 'whatif').replace(/^what if\s*/i, '').replace(/[.!?]$/, '');
      return 'One way I will apply entrepreneurial thinking in my role: [reframe a challenge, run a small pilot, or borrow an idea from outside higher ed]. ' + (w ? 'Our pod’s reframe this week: what if ' + w + '?' : 'Our pod’s reframe this week: [your what if].') + ' A bold idea that could advance Vanderbilt’s vision: [your idea, and why it matters]. What would you pilot first in your area?';
    }
    return '';
  },
  QUIZ:[
    {
      seg:'Brand',
      q:'A new campaign says your office offers fast, personal service, but the people you serve describe it as slow. What is the real problem?',
      opts:[
        'The campaign needs a bigger budget',
        'A gap between brand and reputation: what you say and what others say',
        'The people you serve are not the audience',
        'Reputation cannot be changed'
      ],
      a:1,
      x:'Brand is what you say about yourself; reputation is what others say about you. The goal is to close the gap.'
    },
    {
      seg:'Brand',
      q:'Your unit just had a big win in the news. How do you make the attention last?',
      opts:[
        'Wait for the next big win',
        'Run one large ad',
        'Keep a drumbeat of stories and carry them to priority people yourself',
        'Leave it to Communications'
      ],
      a:2,
      x:'A spike without a system is noise. The ground game turns attention into trust.'
    },
    {
      seg:'Mindset',
      q:'You inherit an underperforming team. Based on Lutz’s turnaround, what comes first?',
      opts:[
        'A new logo for the team',
        'Replacing every system',
        'Listen to key constituents and make a clear-eyed assessment of root causes',
        'Wait a year to see what happens'
      ],
      a:2,
      x:'Diagnosis before solutions. In the turnaround, three of four weaknesses were about people and culture.'
    },
    {
      seg:'Mindset',
      q:'Two schools both want to approach the same donor, who cares about both. What does Radical Collaboration suggest?',
      opts:[
        'Let the first school to call win the donor',
        'One cross-Vanderbilt strategy, built around the donor’s interests, with shared credit',
        'Steer the donor toward the larger school’s priority',
        'Ask the donor to choose one school'
      ],
      a:1,
      x:'Donors who support multiple areas give the most. Be donor-centric and operate as One Vanderbilt, with shared credit.'
    },
    {
      seg:'Mindset',
      q:'Your pod’s idea is promising but untested, and a full rollout needs approvals you do not have yet. What is the best first step?',
      opts:[
        'Wait until every approval is in place',
        'Roll it out everywhere at once',
        'Run a small pilot, validate it, then scale what works',
        'Copy what the largest peer does'
      ],
      a:2,
      x:'Take a calculated risk. Past pods piloted, validated, then scaled, and early wins build momentum.'
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
      x:'In her words: it is easy to lament things you cannot control, and we never want to do that. Leaders create the conditions for success, so people can contribute at their highest level.'
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
        'Outside contractor spending in the pilot drops 15% from last year by June',
        'Send weekly updates'
      ],
      a:2,
      x:'A baseline, a target, a date, and a result you can count.'
    }
  ],
  SCEN_POS:{ g1:2, g2:0, g3:1, t1:0, t2:2, t3:1 },
  NUMS_POS:[0, 2, 1, 1],
  QUIZ_POS:[1, 3, 0, 2, 3, 0, 2, 1],
  QUIZ_PASS:6,
  OVERVIEW:{
    week:'Course Two · Week of November 9',
    topics:'Communication, Storytelling and Brand · Entrepreneurial Mindset · High-Performing Teams',
    due:'Fri, Nov 13',
    dueLabel:'full first draft by',
    goals:[
      '<b>Distinguish</b> brand from reputation, and a spike from a system.',
      '<b>Build</b> a storyline that connects a named audience to the why behind your pod’s idea.',
      '<b>Apply</b> the change moves and Radical Collaboration behind Vanderbilt’s fundraising turnaround to your challenge.',
      '<b>Reframe</b> a challenge and design the smallest pilot that would prove it.',
      '<b>Apply</b> Candice Storey Lee’s principles to real team moments.',
      '<b>Draft</b> sections 4 to 7 of your pod’s brief.',
      '<b>Synthesize, codify, and apply</b> each module with the team you lead.'
    ],
    lessons:[
      {
        title:'Communication, Storytelling & Brand',
        no:'Module 4',
        keys:['route', 'brand', 'ground', 'story', 'wrap4'],
        ideas:[
          ['Close the gap.', 'Brand is what you say about yourself; reputation is what others say about you.'],
          ['Make the message spread.', 'Air cover is carried through the ground game: share assets directly, and equip others to pass them on.'],
          ['A spike needs a system.', 'Spike moments land on a steady drumbeat, and reputation becomes resources.']
        ]
      },
      {
        title:'Entrepreneurial Mindset',
        no:'Module 5',
        keys:['swot', 'numbers', 'moves', 'collab', 'reframe', 'wrap5'],
        ideas:[
          ['Diagnose before you build.', 'Root causes first. Three of four weaknesses were about people and culture.'],
          ['Change it together.', 'People, process, and technology at once, alternating assessment and action.'],
          ['Win together.', 'Radical Collaboration: serve people, play as a team, and share credit as One Vanderbilt.']
        ]
      },
      {
        title:'High-Performing Teams',
        no:'Module 6',
        keys:['principles', 'teamcalls', 'wrap6'],
        ideas:[
          ['Values first, every time.', 'Name the values, then let them decide the hard calls.'],
          ['Create the conditions for success.', 'Build an environment that equips and empowers people to contribute at their highest level.'],
          ['Emotional agility.', 'It is okay to feel how you feel; what matters is how you act and respond.']
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
    work:['story', 'collab', 'reframe', 'wrap4', 'wrap5', 'wrap6', 'carry'],
    footer:'Your pod’s brief is due Friday, November 20, three pages at most. Three winners, one per focus area.'
  },
  PRINT_TITLE:'Course Two, my weekly <em>takeaway</em>.',
  EXIT_TOAST:'You can close this tab. Finish the brief by Friday, November 20.'
};

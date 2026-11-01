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
    { sel:'#wrap4', key:'wrap4', label:'Module 4: Wrap-up', mode:'whole' },
    { sel:'#venture', key:'swot', label:'Module 5: Setting the stage', mode:'pages' },
    { sel:'#first100', key:'ambi', label:'Module 5: First 100 days', mode:'pages' },
    { sel:'#program', key:'moves', label:'Module 5: A transformation program', mode:'pages' },
    { sel:'#culture', key:'acorns', label:'Module 5: Building a culture', mode:'pages' },
    { sel:'#talent', key:'turnover', label:'Module 5: Retaining key talent', mode:'whole' },
    { sel:'#potential', key:'numbers', label:'Module 5: Unlocking new potential', mode:'pages' },
    { sel:'#wrap5', key:'wrap5', label:'Module 5: Wrap-up', mode:'whole' },
    { sel:'#teams', key:'principles', label:'Module 6: High-performing teams', mode:'pages' },
    { sel:'#teamcalls', key:'teamcalls', label:'Module 6: Your call', mode:'whole' },
    { sel:'#wrap6', key:'wrap6', label:'Module 6: Wrap-up', mode:'whole' },
    { sel:'#quiz', key:'quiz', label:'Quick check', mode:'whole' },
    { sel:'#capstone', key:'capstone', label:'Capstone: The capstone', mode:'whole' },
    { sel:'#brief', key:'brief', label:'Capstone: Your brief', mode:'whole' },
    { sel:'#nextstep', key:'nextstep', label:'Capstone: This week', mode:'whole' },
    { sel:'#deeper', key:'deeper', label:'Go deeper', mode:'whole' },
    { sel:'#learn', key:'learn', label:'Keep going', mode:'whole', extras:['footer'] }
  ],
  SECTIONS:[
    { k:'route', no:'01', name:'This week', how:'Preview the three modules and the capstone' },
    { k:'brand', no:'02', name:'Brand or reputation', how:'Sort six of Ertel’s assets' },
    { k:'ground', no:'03', name:'The ground game', how:'Find the strongest call in three moments' },
    { k:'swot', no:'04', name:'Root causes', how:'Sort four weaknesses' },
    { k:'ambi', no:'05', name:'Ambidexterity', how:'Find the strongest call in three moments' },
    { k:'moves', no:'06', name:'Four categories', how:'Sort five initiatives' },
    { k:'acorns', no:'07', name:'ACORNS values', how:'Match six moments' },
    { k:'turnover', no:'08', name:'Retaining key talent', how:'Read the chart: four statements' },
    { k:'numbers', no:'09', name:'Untapped potential', how:'Guess all four numbers' },
    { k:'principles', no:'10', name:'Six principles', how:'Open all six' },
    { k:'teamcalls', no:'11', name:'Your call', how:'Find the strongest call in three moments' },
    { k:'quiz', no:'12', name:'Quick check', how:'Score 6 of 8' },
    { k:'capstone', no:'13', name:'The capstone', how:'Sort four success metrics' },
    { k:'brief', no:'14', name:'Your brief', how:'Download the brief, then mark done' },
    { k:'nextstep', no:'15', name:'This week', how:'Commit to all four moves' }
  ],
  ROUTE_PROG:'route',
  ROUTE_NARR:'route/g',
  STOPS:[
    {
      h:'Module 4: Communication, Storytelling &amp; <em>Brand</em>',
      p:'The Chancellor on communication, then Steve Ertel on brand and reputation, the ground game, and what reputation pays back.',
      tags:['The Chancellor', 'Brand or reputation', 'The ground game', 'The payoff']
    },
    {
      h:'Module 5: Entrepreneurial <em>Mindset</em>',
      p:'The Chancellor, then Vice Chancellor John Lutz on DAR Transformational Change, from the first 100 days to the results.',
      tags:['The Chancellor', 'Root causes', 'Ambidexterity', 'Culture and talent', 'Untapped potential']
    },
    {
      h:'Module 6: High-Performing <em>Teams</em>',
      p:'The Chancellor, then Candice Storey Lee’s principles, applied to three team moments.',
      tags:['The Chancellor', 'Six principles', 'Your call']
    },
    { h:'Quick check and the <em>capstone</em>', p:'Eight situations, then what good looks like for sections 4 to 7 and the fillable brief.', tags:['Quick check', 'The capstone', 'Your brief'] }
  ],
  BEST_LABEL:'The strongest call: ',
  TRY_AGAIN:'Now find the strongest call. ',
  NUMS:[
    {
      lab:'Unassigned prospects',
      q:'Better systems and data revealed promising prospects, rated from $100K to more than $100M, with no one assigned to them. About how many?',
      opts:['About 2,300', '23,295', 'About 90,000'],
      a:1,
      big:'23,295',
      x:'Many promising but unassigned prospects, representing untapped potential.'
    },
    {
      lab:'New relationships',
      q:'With a typical engagement rate of 8%, how many new major gift relationships did the team determine it could develop?',
      opts:['About 180', 'About 600', '1,800'],
      a:2,
      big:'1,800',
      x:'The 8% engagement rate is derived from recent Vanderbilt efforts with this prospect group.'
    },
    {
      lab:'New commitments, 2026',
      q:'New commitments were $149M in 2017. What were they in 2026?',
      opts:['$346M', '$757M', '$1.2B'],
      a:1,
      big:'$757M',
      x:'Up from $346M in 2025. His chart marks a 43% CAGR, compound annual growth rate.'
    },
    {
      lab:'Frontline headcount',
      q:'From 2020 to 2026, how much did DAR grow its frontline headcount?',
      opts:['About 15%', '50%', 'It doubled'],
      a:1,
      big:'50%',
      x:'Grew frontline headcount by 50% and invested in all areas, with the lowest staff turnover in a decade.'
    }
  ],
  NUM_PROG:'numbers',
  DRILLS:{
    brand:{
      opts:['Brand asset', 'Reputation asset'],
      prog:'brand',
      verb:'sorted',
      items:[
        { img:'../assets/img/deck/ertel-athletics-brand.jpg', s:'“Some Think,” labeled a brand asset for athletics momentum.', a:0, x:'Ertel labels it a brand asset for athletics momentum: Vanderbilt telling its own story.' },
        { img:'../assets/img/deck/ertel-execution-reputation.jpg', s:'Bloomberg: “Nvidia CEO Pledges $75 Million for Vanderbilt in San Francisco.”', a:1, x:'A reputation asset for execution with ambition: a national outlet reporting what Vanderbilt did.' },
        { img:'../assets/img/deck/ertel-values-brand.jpg', s:'Forbes: “The University And Its Purpose: A Declaration of First Principles,” by Daniel Diermeier.', a:0, x:'A brand asset for values-driven leadership: the Chancellor saying, in his own words, what Vanderbilt stands for.' },
        { img:'../assets/img/deck/ertel-athletics-reputation.jpg', s:'The Tennessean: “Diego Pavia, Candice Lee among Vanderbilt honorees by Tennessee Sports Hall of Fame.”', a:1, x:'A reputation asset for athletics momentum: others honoring Vanderbilt people.' },
        { img:'../assets/img/deck/ertel-values-reputation.jpg', s:'New York magazine: “How Vandy Bested the Ivies.”', a:1, x:'A reputation asset for values-driven leadership: a national magazine telling Vanderbilt’s story.' },
        { img:'../assets/img/deck/ertel-execution-brand.jpg', s:'Quantum Potential: “Vanderbilt’s Next Era: Campuses, Partnerships and the Power of Place with Chancellor Daniel Diermeier.”', a:0, x:'A brand asset for execution with ambition: Vanderbilt’s own episode, in the Chancellor’s voice.' }
      ]
    },
    swot:{
      opts:['People and culture', 'Processes and systems'],
      prog:'swot',
      verb:'sorted',
      items:[
        { s:'Silo mentality.', a:0, x:'About how people work together, not about tools.' },
        { s:'Out of date processes and systems.', a:1, x:'The only one of the four weaknesses about tools.' },
        { s:'Rigid culture.', a:0, x:'Culture is people. That makes two of four so far.' },
        { s:'Hostile environment.', a:0, x:'Three of four weaknesses were about people and culture. Lutz: we started our transformation through a focus on people and culture.' }
      ]
    },
    moves:{
      opts:['1. People and Culture', '2. Collaboration and Engagement', '3. Motivation and Incentives', '4. Processes and Systems'],
      prog:'moves',
      verb:'sorted',
      items:[
        { s:'Invest in professional development.', a:0, x:'People and culture, where the transformation started, alongside core values, leadership, communications, and talent.' },
        { s:'Create infrastructure to encourage collaboration on cross-institutional gifts.', a:1, x:'Collaboration and engagement, crucial both intramurally and extramurally.' },
        { s:'Create kaizen culture.', a:3, x:'Processes and systems, crucial to change drivers, with a new CRM and data analytics.' },
        { s:'Balanced performance indicators for gift officers.', a:2, x:'Motivation and incentives: structures that drive change and recognize performance.' },
        { s:'Drive more intention to donor centricity.', a:1, x:'Collaboration and engagement. We are always donor-centric is also the first of the fundraising principles.' }
      ]
    },
    acorns:{
      opts:['Agility', 'Collaboration', 'Ownership'],
      prog:'acorns',
      verb:'matched',
      items:[
        { s:'A gift officer brings a colleague from another school into a donor visit, and they share the credit.', opts:['Respect', 'Collaboration', 'Agility'], a:1, x:'Collaboration. An invented moment for practice; the value names are Lutz’s.' },
        { s:'A priority shifts mid-year, and the team re-plans its next month in one meeting.', opts:['Agility', 'Service', 'Ownership'], a:0, x:'Agility: adjusting quickly when things change.' },
        { s:'A staff member spots a data error, fixes it, and shows the team how to prevent it.', opts:['New Ideas', 'Respect', 'Ownership'], a:2, x:'Ownership: treating the problem as yours to solve.' },
        { s:'A team borrows an idea from restaurant hospitality to plan donor events.', opts:['Service', 'New Ideas', 'Collaboration'], a:1, x:'New Ideas, from outside higher ed, like the hospitality book on Lutz’s slide.' },
        { s:'A colleague answers an alum’s question fully and quickly, even though it is not their area.', opts:['Agility', 'Ownership', 'Service'], a:2, x:'Service: taking care of the person in front of you.' },
        { s:'In a tense meeting, a leader listens fully to a view she disagrees with.', opts:['Respect', 'New Ideas', 'Collaboration'], a:0, x:'Respect: hearing people out, especially in disagreement.' }
      ]
    },
    turnover:{
      opts:['True', 'False'],
      prog:'turnover',
      verb:'answered',
      items:[
        { s:'DO turnover fell by more than half, from FY19 to FY26.', a:0, x:'True. It went from 26.5% to 10.6%.' },
        { s:'DO turnover was lower than overall turnover in every year.', a:1, x:'False. DO turnover was the same in FY20, at 20.0%, and higher in every other year.' },
        { s:'The biggest one-year drop, for both lines, came between FY23 and FY24.', a:0, x:'True. Overall fell from 18.1% to 10.6%, and DO from 23.9% to 13.7%.' },
        { s:'Overall turnover kept falling every year after FY21.', a:1, x:'False. It ticked up from 8.6% in FY25 to 9.5% in FY26, still near a decade low.' }
      ]
    },
    metrics:{
      opts:['Strong', 'Weak'],
      prog:'capstone',
      verb:'sorted',
      items:[
        { s:'Contractor and consulting spend in the pilot divisions drops 15% from last year by June.', a:0, x:'A starting number, a target, and a date, and it measures a result.' },
        { s:'Increase awareness of the new process.', a:1, x:'No number, no date. Try: 80% of administrators can find it in under a minute by March.' },
        { s:'Number of emails sent promoting the program.', a:1, x:'Activity, not results. Put it in the timeline and measure what it changes.' },
        { s:'At least 70% of staff use the tool in year one.', a:0, x:'A past pod’s metric. Clear and countable.' }
      ]
    }
  },
  SCENARIOS:{
    g1:{
      h:'Moment 1 · The spike',
      s:'Your unit’s program is featured in a national news story. Everyone in the office is thrilled.',
      opts:[
        { t:'Enjoy it. The story speaks for itself.', b:'A spike, alone', best:false, out:'A spike without a system is noise.' },
        {
          t:'Send the story with a short note to the partners who matter most, and plan what you will share next.',
          b:'Share it directly',
          best:true,
          out:'You share the asset directly with priority stakeholders and keep going. That is the ground game.'
        },
        {
          t:'Ask Communications to buy ads around it.',
          b:'More air cover',
          best:false,
          out:'Air cover helps, but reputation creates resources when air cover is carried through ground game.'
        }
      ]
    },
    g2:{
      h:'Moment 2 · The quiet win',
      s:'Your team cut a process from weeks to days. No one outside the office knows yet.',
      opts:[
        { t:'Wait until it is big enough for the news.', b:'Waiting for a spike', best:false, out:'Waiting for the big moment leaves the win unshared, and a spike without a system is noise.' },
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
          out:'The goal is not simply to be heard. The goal is for the message to spread, person to person.'
        }
      ]
    },
    g3:{
      h:'Moment 3 · The hard question',
      s:'At a partner event, a guest asks you a pointed question about a controversial topic in higher education.',
      opts:[
        { t:'Change the subject quickly.', b:'A missed chance', best:false, out:'Ertel asks leaders to think of difficult or controversial topics as an opportunity to engage.' },
        {
          t:'Listen, engage respectfully, and answer what you can.',
          b:'Engage',
          best:true,
          out:'You engaged. Ertel asks leaders to think of difficult or controversial topics as an opportunity to engage.'
        },
        {
          t:'Say you cannot comment on anything like that.',
          b:'Silence',
          best:false,
          out:'Silence leaves the story to others. Reputation is what others say about you.'
        }
      ]
    },
    a1:{
      h:'Moment 1 · The listening tour',
      s:'You are three weeks into leading a new team, still meeting people one by one. A key process is failing right now.',
      opts:[
        { t:'Keep listening. Act only once the listening tour is done.', b:'Assessment only', best:false, out:'The failing process keeps failing, and people learn that listening means waiting.' },
        {
          t:'Keep listening, and fix the failing process now, telling people why.',
          b:'Listen and act',
          best:true,
          out:'Listen carefully to key constituents while reinforcing necessary actions. Both at once.'
        },
        { t:'Stop the meetings and overhaul everything yourself.', b:'Action only', best:false, out:'You move quickly, but without clear-eyed assessments you may fix the wrong things.' }
      ]
    },
    a2:{
      h:'Moment 2 · The resister',
      s:'A long-tenured colleague openly resists the new plan. A newer staff member is eager to help.',
      opts:[
        { t:'Ignore the resistance and hope it fades.', b:'Resistance left alone', best:false, out:'Unaddressed resistance spreads, and the eager staff member learns that pushing back works.' },
        { t:'Move the resister out of every project right away.', b:'Harsh, and no hope', best:false, out:'You dealt with resistance, but everyone watching learns that disagreement ends careers.' },
        {
          t:'Address the resistance directly, and give the newer staff member a visible role.',
          b:'Deal with it, give hope',
          best:true,
          out:'Deal with resistance and underperformance while giving hope to future leaders.'
        }
      ]
    },
    a3:{
      h:'Moment 3 · The new system',
      s:'Your team gets a new data system next month.',
      opts:[
        {
          t:'Plan the training, roles, and process changes alongside the system launch.',
          b:'People, process, technology',
          best:true,
          out:'Drive simultaneous people, process, technology agendas. The tool works when the people and the process change with it.'
        },
        { t:'Install it and let people figure it out.', b:'Technology only', best:false, out:'New technology on old habits and old processes rarely changes results.' },
        { t:'Delay the system until the culture is fixed.', b:'One thing at a time', best:false, out:'Waiting on one agenda slows them all. Lutz drove them at the same time.' }
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
  CALL_SETS:{ spikecalls:['g1', 'g2', 'g3'], ambicalls:['a1', 'a2', 'a3'], teamcalls:['t1', 't2', 't3'] },
  CALL_PROG:{
    spikecalls:{ prog:'ground', noun:'moments', status:'#groundStatus', narr:'ground/s' },
    ambicalls:{ prog:'ambi', noun:'moments', status:'#ambiStatus', narr:'ambi/s' },
    teamcalls:{ prog:'teamcalls', noun:'moments', status:'#teamcallsStatus', narr:'teamcalls/s' }
  },
  COMMITS:[
    ['Download the brief', 'Save the fillable PDF and open it in Adobe Acrobat Reader or another PDF app that fills forms.'],
    ['Respond to Teams prompt 2', 'Post your response under Discussions in the Teams channel by Friday, November 13.'],
    ['Reply to a colleague', 'Build on a colleague’s idea, or offer a practical way it could be applied.'],
    ['Meet your pod', 'Week of November 16: put your drafts together and turn in one brief by Friday, November 20.']
  ],
  tell:function(which){
    if(which === 'teams') return 'One way I will apply entrepreneurial thinking in my role: [reframe a challenge, run a small pilot, or borrow an idea from outside higher education]. A bold idea that could advance Vanderbilt’s vision: [your idea, and why it matters]. What would you try first in your area?';
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
        'Keep sharing stories, and carry them directly to priority stakeholders yourself',
        'Leave it to Communications'
      ],
      a:2,
      x:'A spike without a system is noise. Ertel asks leaders to share reputation assets to engage stakeholders, and to equip others to share Vanderbilt’s story.'
    },
    {
      seg:'Mindset',
      q:'You are new to leading a team that is underperforming. Which approach matches Lutz’s point that change leadership requires ambidexterity?',
      opts:[
        'Listen for six months before changing anything',
        'Act fast on your own plan without listening',
        'Listen carefully to key constituents while reinforcing necessary actions',
        'Change only the technology first'
      ],
      a:2,
      x:'His first 100 days paired listening with action: make clear-eyed assessments but move quickly.'
    },
    {
      seg:'Mindset',
      q:'Two schools both want to approach the same donor, who cares about both. What do Lutz’s fundraising principles suggest?',
      opts:[
        'Let the first school to call win the donor',
        'One cross-Vanderbilt strategy, built around the donor’s interests, with shared credit',
        'Steer the donor toward the larger school’s priority',
        'Ask the donor to choose one school'
      ],
      a:1,
      x:'Donors who support multiple areas give the most. Be donor-centric and operate as One Vanderbilt: all key prospects have cross-Vanderbilt strategies supported by shared credit.'
    },
    {
      seg:'Mindset',
      q:'Turnover is high and paths for promotion are limited. Which mix did Lutz’s team use to retain key talent?',
      opts:[
        'Raise every salary and change nothing else',
        'Rigorous goal setting, balanced performance indicators, recognition of both individual and team results, and flexible work',
        'Hire only from outside',
        'Stop measuring performance'
      ],
      a:1,
      x:'They updated structures to drive change and recognize performance, and flexible work expanded their ability to attract top talent. DO turnover fell from 26.5% in FY19 to 10.6% in FY26.'
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
      seg:'Capstone',
      q:'Which success metric is strongest?',
      opts:[
        'Launch the new process',
        'Increase awareness',
        'Contractor spending in the pilot divisions drops 15% from last year by June',
        'Send weekly updates'
      ],
      a:2,
      x:'A starting number, a target, and a date, and it measures a result, not activity.'
    }
  ],
  SCEN_POS:{ g1:2, g2:0, g3:1, a1:1, a2:2, a3:0, t1:0, t2:2, t3:1 },
  QUIZ_POS:[1, 3, 0, 2, 3, 0, 2, 1],
  QUIZ_PASS:6,
  OVERVIEW:{
    week:'Course Two · Week of November 9',
    topics:'Communication, Storytelling and Brand · Entrepreneurial Mindset · High-Performing Teams · Capstone',
    due:'Fri, Nov 13',
    dueLabel:'Teams post and reply by',
    goals:[
      '<b>Distinguish</b> brand from reputation, and a spike from a system.',
      '<b>Explain</b> how reputation creates resources when air cover is carried through ground game.',
      '<b>Apply</b> the change leadership behind DAR’s transformation: ambidexterity, Radical Collaboration, and four categories of change.',
      '<b>Connect</b> culture and talent choices to results, using DAR’s turnover and fundraising data.',
      '<b>Apply</b> Candice Storey Lee’s principles to real team moments.',
      '<b>Plan</b> sections 4 to 7 of your pod’s brief.',
      '<b>Synthesize, codify, and apply</b> each module with the team you lead.'
    ],
    lessons:[
      {
        title:'Communication, Storytelling & Brand',
        no:'Module 4',
        keys:['route', 'brand', 'ground'],
        ideas:[
          ['Close the gap.', 'Brand is what you say about yourself; reputation is what others say about you.'],
          ['Make the message spread.', 'Reputation creates resources when air cover is carried through ground game.'],
          ['A spike without a system is noise.', 'Share reputation assets with stakeholders, and equip others to share Vanderbilt’s story.']
        ]
      },
      {
        title:'Entrepreneurial Mindset',
        no:'Module 5',
        keys:['swot', 'ambi', 'moves', 'acorns', 'turnover', 'numbers'],
        ideas:[
          ['Drill into root causes.', 'Unlocking performance required an honest look at strengths, weaknesses, opportunities, and threats.'],
          ['Hold both at once.', 'Change leadership requires ambidexterity: listen while you act, assess but move quickly.'],
          ['Build the culture.', 'A culture rooted in trust, collaboration, and radical ownership. Transformation, fueled by innovation, is never complete.']
        ]
      },
      {
        title:'High-Performing Teams',
        no:'Module 6',
        keys:['principles', 'teamcalls'],
        ideas:[
          ['Values first, every time.', 'Name the values, then let them decide the hard calls.'],
          ['Create the conditions for success.', 'Build an environment that equips and empowers people to contribute at their highest level.'],
          ['Emotional agility.', 'It is okay to feel how you feel; what matters is how you act and respond.']
        ]
      },
      {
        title:'Quick check and capstone',
        no:'Capstone',
        keys:['quiz', 'capstone', 'brief', 'nextstep'],
        ideas:[
          ['Measure results.', 'Each metric has a starting number, a target, and a date, and measures results, not activity.'],
          ['Plan sections 4 to 7.', 'An integrated solution, steps with owners and dates, metrics, and a sustainability plan.'],
          ['Finish together.', 'Week of November 16: put your drafts together and turn in one brief by Friday, November 20.']
        ]
      }
    ],
    footer:'Your pod’s brief is due Friday, November 20, three pages at most. Three winners, one per focus area.'
  },
  PRINT_TITLE:'Course Two, my weekly <em>takeaway</em>.',
  EXIT_TOAST:'You can close this tab. Turn in your pod’s brief by Friday, November 20.'
};

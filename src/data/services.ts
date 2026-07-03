import type { Audience, Service } from './types';

export const services: Service[] = [
  // Actors
  {
    audience: 'actors',
    slug: 'accent-prep',
    format: '1:1 Coaching',
    title: 'Accent Prep',
    summary:
      'Build a dialect foundation before cameras roll—so you walk onto set sounding grounded from the first take.',
    cardDescription:
      'Structured prep for a specific accent or dialect before production begins. Phonetics, rhythm, and embodied practice tailored to your role.',
    whoItsFor:
      'Actors preparing for a role with a specific accent or dialect requirement, with lead time before filming or rehearsal.',
    ctaText: 'See how it works',
    headerImage: '/images/service-accent-prep.jpg',
    paragraphs: [
      'Accent prep is where the work begins—mapping sounds, rhythm, and placement before you step into the room. We build a foundation that holds up under pressure, so you\'re not scrambling when rehearsal starts.',
      'Sessions combine technical phonetic work with embodied practice: how the accent lives in your body, connects to character, and stays consistent take after take. Every prep plan is tailored to your role, timeline, and learning style.',
      'Whether you\'re working toward a general American sound, a specific regional dialect, or a global accent, we move at a pace that builds real fluency—not surface imitation.',
    ],
    highlights: [
      'Custom prep plan aligned to your production schedule',
      'Phonetic breakdowns and recorded practice materials',
      'Embodied work connecting accent to character',
      'Consistency drills for sustained performance',
    ],
  },
  {
    audience: 'actors',
    slug: 'role-intensive',
    format: 'Intensive',
    title: 'Role Intensive',
    summary:
      'Focused, immersive dialect work for a single role—when you need depth fast and the character demands it.',
    cardDescription:
      'A concentrated coaching intensive built around one role. Deep dialect immersion when your timeline is tight and the stakes are high.',
    whoItsFor:
      'Actors with a demanding dialect role and limited prep time who want immersive, focused coaching.',
    ctaText: 'Explore this coaching',
    headerImage: '/images/service-role-intensive.jpg',
    paragraphs: [
      'Some roles don\'t wait. A Role Intensive is designed for performers who need to go deep, fast—compressing weeks of dialect work into a focused, immersive experience built around your specific character.',
      'We work intensively on sound, rhythm, physicality, and emotional connection to the voice. The goal isn\'t just accuracy—it\'s ownership. You leave sounding like the character thinks in this dialect.',
      'Intensives can be structured as multi-day blocks or concentrated weekly sessions, depending on your schedule and production demands.',
    ],
    highlights: [
      'Immersive sessions tailored to one role',
      'Accelerated phonetic and rhythmic training',
      'Character-voice integration work',
      'Flexible scheduling around production',
    ],
  },
  {
    audience: 'actors',
    slug: 'on-set-coaching',
    format: 'On-Set',
    title: 'On-Set Coaching',
    summary:
      'Dialect support where it matters most—on set, in the moment, keeping your performance alive take after take.',
    cardDescription:
      'Real-time dialect coaching during production. Audrey joins you on set to keep accent consistency sharp and performance grounded.',
    whoItsFor:
      'Productions and performers who want dedicated dialect support during filming, including last-minute adjustments and continuity.',
    ctaText: 'Take a closer look',
    headerImage: '/images/service-on-set.jpg',
    paragraphs: [
      'On-set coaching is for when the cameras are rolling and there\'s no room for the accent to slip. I work alongside you during production—listening, adjusting, and keeping the dialect alive in real time.',
      'This isn\'t about hovering over every line. It\'s about being the partner who catches what fatigue, pressure, or long days can erode: consistency, ease, and the emotional truth underneath the sound.',
      'I\'ve coached on award-winning film and television productions, supporting performers from first take to wrap with the rigor the work deserves.',
    ],
    highlights: [
      'Real-time dialect support during filming',
      'Continuity and consistency across takes and days',
      'Quick adjustments without breaking performance flow',
      'Experience on major film and TV productions',
    ],
    testimonial: {
      quote:
        'Having Audrey on set was invaluable. She kept our lead consistent through long days without ever pulling them out of the scene. The kind of quiet excellence every producer hopes for.',
      name: 'Line Producer',
      role: 'Feature Film Production',
    },
  },
  {
    audience: 'actors',
    slug: 'american-accent',
    format: '1:1 Coaching',
    title: 'American Accent',
    summary:
      'Master a natural, grounded American sound—general or regional—that feels like yours, not a textbook.',
    cardDescription:
      'One-on-one coaching for performers building or refining an American accent. General American, regional varieties, and everything in between.',
    whoItsFor:
      'International actors and performers who need a convincing, embodied American sound for stage or screen.',
    ctaText: 'Learn more',
    headerImage: '/images/service-american-accent.jpg',
    paragraphs: [
      'A great American accent doesn\'t sound studied—it sounds lived-in. We work on the sounds, rhythms, and musicality of American English, building toward a voice that feels natural in your body and true to your character.',
      'Whether you need General American, a specific regional sound, or flexibility across American dialects, coaching is tailored to where you\'re starting from and where the role needs you to land.',
      'Sessions blend technical work with scene practice, so the accent holds up not just in drills, but in the emotional demands of performance.',
    ],
    highlights: [
      'General American and regional varieties',
      'Phonetic training grounded in real speech patterns',
      'Scene and monologue integration',
      'Recorded materials for independent practice',
    ],
    onlineCourse: {
      url: 'https://aacamericanaccentcoaching.teachable.com/p/courses',
      title: 'Prefer self-paced learning?',
      description:
        'Private coaching isn\'t the only path. Explore my online American accent course and learn at your own pace.',
      ctaLabel: 'Buy the online course',
    },
  },

  // Professionals
  {
    audience: 'professionals',
    slug: 'executive-communication',
    format: '1:1 Coaching',
    title: 'Executive Communication',
    summary:
      'Lead with voice and presence that commands the room—without losing the human connection that makes people lean in.',
    cardDescription:
      'Private coaching for leaders who need to communicate with clarity, authority, and warmth in high-stakes settings.',
    whoItsFor:
      'Executives, founders, and senior leaders preparing for board meetings, investor pitches, media appearances, or leadership transitions.',
    ctaText: 'Discover more',
    outcome: 'Clearer authority and authentic presence in leadership moments.',
    headerImage: '/images/service-executive.jpg',
    paragraphs: [
      'Executive communication isn\'t about performing a persona—it\'s about showing up as the fullest version of your leadership voice. We work on how you sound when the stakes are high: boardrooms, keynotes, press, and the conversations that define your trajectory.',
      'Coaching addresses vocal presence, pacing, clarity, and the subtle habits that either build trust or undermine it. We also explore how nerves show up in your voice—and how to channel that energy into connection.',
      'From Oscar-winning performers to Fortune 500 executives, I bring the same rigor and warmth to every coaching relationship.',
    ],
    highlights: [
      'Vocal presence and authority without stiffness',
      'Nervous-system-aware techniques for high-pressure moments',
      'Tailored work for your specific upcoming events',
      'Ongoing refinement as your leadership evolves',
    ],
  },
  {
    audience: 'professionals',
    slug: 'american-accent-clarity',
    format: '1:1 Coaching',
    title: 'American Accent Clarity',
    summary:
      'Be understood the first time—refine your American English so clarity and confidence go hand in hand.',
    cardDescription:
      'Focused coaching for non-native English speakers who want greater clarity and confidence in professional American English.',
    whoItsFor:
      'Global professionals who are fluent in English but want greater clarity, confidence, and ease in American professional settings.',
    ctaText: 'See what\'s possible',
    outcome: 'Greater clarity and ease in professional American English.',
    headerImage: '/images/service-accent-clarity.jpg',
    paragraphs: [
      'You\'re already accomplished—your ideas deserve to land the first time. American Accent Clarity coaching focuses on the specific sounds, rhythms, and patterns that make professional American English clear and confident.',
      'This isn\'t about erasing your identity or your accent. It\'s about giving you the tools to be understood effortlessly in the settings that matter: presentations, negotiations, leadership meetings, and public conversations.',
      'We work practically and respectfully, building on the communication strengths you already have.',
    ],
    highlights: [
      'Targeted work on clarity-critical sounds and patterns',
      'Professional context practice (meetings, presentations, calls)',
      'Respectful, identity-affirming approach',
      'Practice materials for daily integration',
    ],
    onlineCourse: {
      url: 'https://aacamericanaccentcoaching.teachable.com/p/courses',
      title: 'Prefer self-paced learning?',
      description:
        'Private coaching isn\'t the only path. Explore my online American accent course and build clarity at your own pace.',
      ctaLabel: 'Buy the online course',
    },
  },
  {
    audience: 'professionals',
    slug: 'presentation-interview',
    format: '1:1 Coaching',
    title: 'Presentation & Interview Prep',
    summary:
      'Walk into the room sounding prepared, present, and unmistakably you—whether it\'s a keynote or a career-defining interview.',
    cardDescription:
      'Targeted coaching for a specific presentation, interview, or public moment. Rehearsal, feedback, and refinement until you\'re ready.',
    whoItsFor:
      'Professionals with an upcoming presentation, keynote, media appearance, or high-stakes interview.',
    ctaText: 'Find your edge',
    outcome: 'Polished delivery that still sounds like you.',
    headerImage: '/images/service-presentation.jpg',
    paragraphs: [
      'The best presentations don\'t feel rehearsed—they feel inevitable. We work on your specific upcoming moment: structure, delivery, vocal dynamics, and the presence that makes an audience trust you.',
      'For interviews, we focus on sounding confident and authentic under scrutiny—managing nerves, clarifying your message, and projecting the energy that makes interviewers remember you.',
      'Sessions include rehearsal, real-time feedback, and practical adjustments you can use immediately.',
    ],
    highlights: [
      'Rehearsal and feedback on your actual material',
      'Vocal dynamics: pace, pause, emphasis, energy',
      'Nerve management for live performance',
      'Tailored to your specific event or opportunity',
    ],
  },
  {
    audience: 'professionals',
    slug: 'ongoing-coaching',
    format: 'Ongoing',
    title: 'Ongoing Coaching',
    summary:
      'A sustained partnership for professionals who want continuous growth in voice, presence, and communication.',
    cardDescription:
      'Regular coaching sessions for leaders building long-term communication excellence across evolving roles and challenges.',
    whoItsFor:
      'Professionals who want a trusted coaching partner for ongoing development—not just one event.',
    ctaText: 'Explore coaching',
    outcome: 'Sustained growth in voice, presence, and executive impact.',
    headerImage: '/images/service-ongoing.jpg',
    paragraphs: [
      'Communication mastery isn\'t a one-time fix—it\'s a practice. Ongoing coaching gives you a dedicated partner for the long arc of your career: new roles, bigger stages, harder conversations.',
      'We build on previous work, track your growth, and adapt as your needs evolve. Whether you\'re navigating a promotion, expanding your public presence, or refining how you lead, sessions stay focused on what matters now.',
      'Frequency and format are flexible—typically biweekly or monthly, with check-ins around major milestones.',
    ],
    highlights: [
      'Flexible ongoing session schedule',
      'Long-term partnership and continuity',
      'Adapts as your role and goals evolve',
      'Integration of voice, accent, and presence work',
    ],
  },

  // Organizations
  {
    audience: 'organizations',
    slug: 'global-team-workshop',
    format: 'Workshop',
    title: 'Global Team Communication Workshop',
    summary:
      'Help international teams communicate with clarity, confidence, and inclusion across accents and cultures.',
    cardDescription:
      'Interactive workshop for global teams navigating cross-cultural communication, accent diversity, and inclusive meeting culture.',
    whoItsFor:
      'HR leaders, DEI teams, and managers building communication skills across globally distributed teams.',
    ctaText: 'Explore the program',
    outcome: 'Stronger cross-cultural communication and more inclusive team dynamics.',
    headerImage: '/images/service-global-workshop.jpg',
    paragraphs: [
      'Global teams bring extraordinary talent—and real communication friction. This workshop creates space for teams to understand how accent, culture, and communication style shape who gets heard in the room.',
      'Through interactive exercises, practical tools, and honest conversation, participants build skills for clearer communication and more inclusive collaboration. The tone is empowering, not corrective.',
      'Workshops are customized to your team\'s size, industry, and specific challenges. Half-day, full-day, and multi-session formats available.',
    ],
    highlights: [
      'Customized for your team\'s industry and challenges',
      'Interactive, engaging format—not lecture-style',
      'Practical tools for meetings, presentations, and collaboration',
      'Inclusive framing that honors accent diversity',
    ],
  },
  {
    audience: 'organizations',
    slug: 'executive-presence',
    format: 'Workshop',
    title: 'Executive Presence Program',
    summary:
      'Equip your leadership bench with the vocal presence and communication skills that inspire trust and drive results.',
    cardDescription:
      'A structured program for leadership teams building executive presence, vocal authority, and high-stakes communication skills.',
    whoItsFor:
      'Organizations investing in leadership development for senior managers, directors, and emerging executives.',
    ctaText: 'See how we work',
    outcome: 'Leadership teams that communicate with greater authority and authenticity.',
    headerImage: '/images/service-exec-presence.jpg',
    paragraphs: [
      'Executive presence isn\'t a personality trait—it\'s a set of skills. This program gives your leaders practical tools for showing up with vocal authority, clear messaging, and authentic connection in the moments that define their impact.',
      'Sessions combine group workshops with optional individual coaching, creating both shared language and personalized growth. Content adapts to your organization\'s culture and leadership competencies.',
      'Ideal for leadership cohorts, high-potential programs, and teams preparing for expanded visibility.',
    ],
    highlights: [
      'Group workshops plus optional 1:1 coaching',
      'Tailored to your leadership framework',
      'Vocal presence, messaging, and nerve management',
      'Measurable growth across a leadership cohort',
    ],
  },
  {
    audience: 'organizations',
    slug: 'accent-inclusion',
    format: 'Workshop',
    title: 'Accent Inclusion Workshop',
    summary:
      'Build a workplace culture where every accent is valued—and every voice can be heard.',
    cardDescription:
      'A workshop addressing accent bias, communication inclusion, and practical strategies for teams with diverse linguistic backgrounds.',
    whoItsFor:
      'DEI leaders, people managers, and organizations committed to building truly inclusive communication cultures.',
    ctaText: 'Learn more',
    outcome: 'More inclusive communication norms and reduced accent bias in the workplace.',
    headerImage: '/images/service-accent-inclusion.jpg',
    paragraphs: [
      'Accent bias is one of the last openly tolerated forms of workplace discrimination. This workshop names it, unpacks it, and gives teams practical tools for change—without shame, without blame.',
      'Participants explore how accent shapes perceptions of competence, leadership, and belonging. They leave with actionable strategies for meetings, feedback, hiring, and everyday collaboration.',
      'Audrey brings both expertise and warmth to difficult conversations, creating space for honest dialogue and real progress.',
    ],
    highlights: [
      'Evidence-based exploration of accent bias',
      'Practical tools for managers and team members',
      'Safe, engaging facilitation style',
      'Customizable for your DEI goals and culture',
    ],
  },
  {
    audience: 'organizations',
    slug: 'keynote',
    format: 'Keynote',
    title: 'Keynote Speaking',
    summary:
      'Bring Audrey to your event for a keynote that electrifies the room on voice, presence, and the power of sounding human.',
    cardDescription:
      'Dynamic keynote presentations on communication, dialect, accent inclusion, and showing up authentically when everyone\'s watching.',
    whoItsFor:
      'Conference organizers, corporate events, universities, and leadership summits seeking an engaging, expert speaker.',
    ctaText: 'Explore the program',
    outcome: 'An energized audience with fresh perspective on voice and communication.',
    headerImage: '/images/service-keynote.jpg',
    paragraphs: [
      'Audrey\'s keynotes blend Hollywood craft, corporate insight, and genuine warmth. Topics include the power of voice in leadership, accent inclusion in the global workplace, and what performers can teach professionals about performing under pressure.',
      'Every keynote is tailored to your audience, event theme, and desired outcomes. Expect stories that land, ideas that stick, and an energy that lingers long after the applause.',
      'Available for conferences, corporate offsites, university events, and leadership summits worldwide—in person or virtual.',
    ],
    highlights: [
      'Customized to your event theme and audience',
      'Engaging blend of expertise and storytelling',
      'Topics: voice, presence, accent inclusion, high-stakes performance',
      'In-person and virtual formats',
    ],
  },
];

export function getServicesByAudience(audience: Audience): Service[] {
  return services.filter((s) => s.audience === audience);
}

export function getService(audience: Audience, slug: string): Service | undefined {
  return services.find((s) => s.audience === audience && s.slug === slug);
}

export function getAllServicePaths() {
  return services.map((s) => ({
    params: { audience: s.audience, slug: s.slug },
    props: { service: s },
  }));
}

import type { MediaFeature } from './types';

export const about = {
  portrait: '/images/about-portrait.jpg',
  headline: 'Meet Audrey LeCrone',
  intro:
    'Nice to meet you! I am a Hollywood dialect coach, communication expert, and performer whose work explores the intersection of voice, presence, and authentic human connection.',
  bio: [
    'Drawing on years of coaching the best of the best—as well as my own experience as a professional performer—I help clients communicate with greater confidence, clarity, and impact. That\'s whether we\'re doing accent or communication work.',
    'From Oscar winners to Fortune 500 executives, I bring rigor and artistry to every client relationship. My approach blends technical precision with emotional truth, because dialect work isn\'t about sounding correct—it\'s about sounding alive.',
    'I\'ve coached performers and professionals in over 70 countries, on award-winning film and television productions, and with leaders at some of the world\'s most recognized organizations. Every engagement is different; the standard of care is not.',
  ],
  background: {
    title: 'Background & Training',
    content: [
      'I\'m an award-winning dialect coach with deep roots in performance. My training spans classical voice work, phonetics, and years of hands-on coaching across film, television, theatre, and corporate settings.',
      'As a performer myself, I understand the pressure of high-stakes moments—from the audition room to the boardroom. That dual perspective shapes everything about how I coach: technically rigorous, emotionally attuned, and always human.',
      'I\'ve worked with Oscar and Emmy-winning talent, supported major studio productions on set, and designed communication programs for global organizations navigating inclusion, leadership, and cross-cultural collaboration.',
    ],
  },
  philosophy: {
    title: 'Philosophy',
    content: [
      'I believe voice is identity. How you sound shapes how you\'re perceived, how you connect, and how fully you can show up in the world. My job isn\'t to make you sound like someone else—it\'s to help you sound like the fullest version of yourself.',
      'Dialect coaching and communication coaching share the same foundation: technical skill in service of emotional truth. Whether we\'re mapping phonemes or preparing for a keynote, the goal is always aliveness—sound that carries intention, presence, and heart.',
      'Coaching is a collaboration, not a transaction. I meet you where you are, honor what you bring, and build toward what you\'re reaching for—with warmth, honesty, and the highest standard of craft.',
    ],
  },
  credentials: [
    'Award-winning Hollywood dialect coach',
    'Coach to Oscar and Emmy-winning performers',
    'On-set dialect coaching for major film & TV productions',
    'Clients in 70+ countries worldwide',
    'Fortune 500 executive communication coaching',
    'Keynote speaker and workshop facilitator',
    'Professional performer and voice artist',
    'Specialist in American, regional, and global accents',
  ],
  featuredOn: {
    title: 'Featured on',
    intro:
      'I\'ve been invited to share my expertise on podcasts, interviews, and panels about voice, dialect, and communication.',
    items: [
      {
        title: 'Podcast Interview — Voice & Performance',
        description: 'A conversation on dialect coaching, emotional truth, and performing under pressure.',
        href: 'https://example.com/podcast-placeholder',
        type: 'podcast',
      },
      {
        title: 'Interview — The Art of Accent Coaching',
        description: 'Behind the scenes of Hollywood dialect work and what it takes to sound alive on camera.',
        href: 'https://example.com/interview-placeholder',
        type: 'interview',
      },
      {
        title: 'Panel — Communication in High-Stakes Moments',
        description: 'How voice, presence, and preparation shape performance when everyone is watching.',
        href: 'https://example.com/video-placeholder',
        type: 'video',
      },
    ] satisfies MediaFeature[],
  },
  unmutedShow: {
    title: 'The Unmuted Show',
    description:
      'I\'m the creator and host of The Unmuted Show, a celebrity podcast exploring voice, authenticity, and the stories behind how we show up in the world.',
    href: 'https://unmutedshow.com',
    cta: 'Visit UnmutedShow.com',
    video: '/videos/unmuted-show-loop.mp4',
    poster: '/images/unmuted-show-poster.jpg',
  },
};

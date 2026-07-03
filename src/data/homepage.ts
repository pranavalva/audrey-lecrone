import type { MethodPillar, PathCard } from './types';

export const hero = {
  headline: 'DIALECT COACHING & SPEAKING SKILLS',
  subheadline: 'Accents, Authenticity, Personality, & Presence',
  subhead:
    'Helping actors, professionals, & organizations communicate when the performance can\'t afford to be flat.',
  portrait: '/images/hero-portrait.jpg',
  primaryCta: { label: 'Work with me', href: '/contact' },
  secondaryCta: { label: 'Explore Services', href: '#paths' },
};

export const promise = {
  eyebrow: 'The promise',
  headline: 'More than getting the sounds right.',
  body: [
    'Dialect work isn\'t about sounding correct—it\'s about sounding alive. My award-winning approach blends technical precision with emotional truth, helping you sound natural, grounded, and fully embodied in high-stakes performances and conversations.',
    'Whether you\'re stepping into a role, stepping up to lead, or stepping onto a stage, I help you build the voice that meets the moment.',
  ],
  image: '/images/kaluuya-oscar.jpg',
  imageAlt: 'Daniel Kaluuya holding an Oscar',
};

export const pathCards: PathCard[] = [
  {
    audience: 'actors',
    title: 'Actors',
    description:
      'Film, TV, and theatre dialect coaching—from accent prep to on-set support when cameras are rolling.',
    href: '/actors',
    image: '/images/path-actors.jpg',
  },
  {
    audience: 'professionals',
    title: 'Professionals',
    description:
      'Executive communication, accent clarity, and presentation coaching for leaders who perform under pressure.',
    href: '/professionals',
    image: '/images/path-professionals.jpg',
  },
  {
    audience: 'organizations',
    title: 'Organizations',
    description:
      'Workshops, keynotes, and custom programs for teams building global communication and inclusive leadership.',
    href: '/organizations',
    image: '/images/path-organizations.jpg',
  },
];

export const methodPillars: MethodPillar[] = [
  {
    title: 'Technical precision',
    description:
      'Phonetics, rhythm, and placement grounded in real dialect work—including shortcuts I\'ve crafted over the last ten years to help you reach your goals faster, without falling apart under pressure.',
  },
  {
    title: 'Emotional truth',
    description:
      'Voice lives in the body. I connect sound to story, breath, intention, and the feeling underneath every line.',
  },
  {
    title: 'High-stakes readiness',
    description:
      'Coaching built for the moments that count: cameras rolling, boards watching, rooms full of people.',
  },
  {
    title: 'Collaborative partnership',
    description:
      'Every client relationship is bespoke. I move at your pace, toward your goals, with warmth and rigor.',
  },
];

export const closingCta = {
  eyebrow: 'Ready when you are',
  headline: 'Say hello.',
  body: 'Every great coaching relationship starts with a conversation. Tell me what you\'re working toward—I\'d love to hear from you.',
  cta: { label: 'Get in touch', href: '/contact' },
};

import type { NavItem } from './types';

export const site = {
  name: 'Audrey LeCrone',
  tagline:
    'Dialect, accent, and communication coaching when the stakes are high.',
  email: 'americanaccentcoaching@gmail.com',
  url: 'https://www.audreylecrone.com',
  defaultOgImage: '/og-default.svg',
  onlineCourseUrl: 'https://aacamericanaccentcoaching.teachable.com/p/courses',
} as const;

export const newsletterSignupUrl = import.meta.env.PUBLIC_NEWSLETTER_SIGNUP_URL ?? '';

export const nav: NavItem[] = [
  { label: 'Actors', href: '/actors' },
  { label: 'Professionals', href: '/professionals' },
  { label: 'Organizations', href: '/organizations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: NavItem[] = [
  { label: 'Portfolio', href: '/credits' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Privacy', href: '/privacy' },
];

export const trustStats = [
  { value: '70+', label: 'Countries coached' },
  { value: 'Oscar & Emmy', label: 'Award-winning projects' },
  { value: 'Fortune 500', label: 'Corporate leaders' },
  { value: 'Award-Winning', label: 'Dialect coach' },
] as const;

export const seo = {
  defaultTitle: 'Audrey LeCrone — Dialect & Communication Coaching',
  defaultDescription:
    'Hollywood dialect coach for actors, executives, and global professionals. Technical precision meets emotional truth—so you sound alive when it matters.',
} as const;

export const audienceMeta = {
  actors: {
    title: 'Dialect Coaching for Actors',
    description:
      'Award-winning dialect and accent coaching for film, television, and theatre. Sound natural, grounded, and fully embodied in every role.',
    intro:
      'From first read to final take, Audrey helps performers inhabit voice and dialect with technical rigor and emotional truth—so the character sounds alive, not performed.',
    headerImage: '/images/audience-actors.jpg',
  },
  professionals: {
    title: 'Communication Coaching for Professionals',
    description:
      'Executive communication, American accent clarity, and presentation coaching for leaders who need to perform under pressure.',
    intro:
      'When the room is watching and the stakes are real, how you sound shapes how you\'re heard. Audrey helps global professionals communicate with confidence, clarity, and authentic presence.',
    headerImage: '/images/audience-professionals.jpg',
  },
  organizations: {
    title: 'Dialect & Communication Programs for Organizations',
    description:
      'Workshops, keynotes, and custom programs for teams navigating global communication, inclusion, and executive presence.',
    intro:
      'Audrey partners with organizations to build communication cultures where every voice is heard—and every leader can show up with impact when it counts.',
    headerImage: '/images/audience-organizations.jpg',
  },
} as const;

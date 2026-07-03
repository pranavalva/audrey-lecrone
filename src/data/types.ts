export type Audience = 'actors' | 'professionals' | 'organizations';

export type FormatBadge =
  | '1:1 Coaching'
  | 'On-Set'
  | 'Workshop'
  | 'Keynote'
  | 'Intensive'
  | 'Ongoing';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface OnlineCourse {
  url: string;
  title: string;
  description: string;
  ctaLabel: string;
}

export interface Service {
  audience: Audience;
  slug: string;
  format: FormatBadge;
  title: string;
  summary: string;
  cardDescription: string;
  whoItsFor: string;
  ctaText: string;
  outcome?: string;
  headerImage: string;
  paragraphs: string[];
  highlights: string[];
  testimonial?: ServiceTestimonial;
  onlineCourse?: OnlineCourse;
}

export interface MediaFeature {
  title: string;
  description: string;
  href: string;
  type: 'podcast' | 'interview' | 'video';
}

export interface Credit {
  id: string;
  title: string;
  projectType: 'Film/TV' | 'Corporate' | 'Theatre';
  clientName: string;
  image: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  featured: boolean;
}

export interface MethodPillar {
  title: string;
  description: string;
}

export interface PathCard {
  audience: Audience;
  title: string;
  description: string;
  href: string;
  image: string;
}

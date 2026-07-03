import type { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 'actor-1',
    quote:
      'Audrey doesn\'t just teach you the sounds—she helps you find the character\'s voice in your body. I walked onto set feeling grounded and ready, not anxious about the accent.',
    name: 'Series Regular',
    role: 'Television Actor',
    image: '/images/testimonial-actor-1.jpg',
    featured: true,
  },
  {
    id: 'executive-1',
    quote:
      'I\'ve worked with communication coaches before, but Audrey is different. She brought the precision of a dialect coach and the warmth of a true partner. My board presentation was the best I\'ve ever delivered.',
    name: 'VP of Strategy',
    role: 'Fortune 500 Technology Company',
    image: '/images/testimonial-exec-1.jpg',
    featured: true,
  },
  {
    id: 'actor-2',
    quote:
      'Working with Audrey on set was a game-changer. She caught things I didn\'t even notice and kept me sounding consistent through twelve-hour days. Absolute pro.',
    name: 'Feature Film Lead',
    role: 'Film Actor',
    image: '/images/testimonial-actor-2.jpg',
    featured: true,
  },
  {
    id: 'org-1',
    quote:
      'Our global team workshop with Audrey was the highest-rated session of our leadership offsite. People said they finally felt seen—and left with tools they actually use.',
    name: 'Director of People',
    role: 'International Professional Services Firm',
    image: '/images/testimonial-org-1.jpg',
    featured: false,
  },
  {
    id: 'professional-1',
    quote:
      'As a non-native English speaker leading a US team, I was hesitant about accent coaching. Audrey made it feel empowering, not corrective. I\'m clearer, more confident, and still fully myself.',
    name: 'Engineering Director',
    role: 'Global Technology Company',
    image: '/images/testimonial-prof-1.jpg',
    featured: false,
  },
  {
    id: 'actor-3',
    quote:
      'The role intensive was exactly what I needed. In a week, I went from uncertain to owning the dialect. Audrey\'s combination of rigor and encouragement is rare.',
    name: 'Theatre Performer',
    role: 'Regional Theatre',
    image: '/images/testimonial-actor-3.jpg',
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);

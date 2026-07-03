import type { Credit } from './types';

export const credits: Credit[] = [
  {
    id: 'judas-black-messiah',
    title: 'Judas and the Black Messiah',
    projectType: 'Film/TV',
    clientName: 'Daniel Kaluuya',
    image: '/images/credit-judas.jpg',
    featured: true,
  },
  {
    id: 'feature-film-1',
    title: 'Major Feature Film',
    projectType: 'Film/TV',
    clientName: 'Lead Cast',
    image: '/images/credit-feature-1.jpg',
    featured: true,
  },
  {
    id: 'television-series',
    title: 'Prestige Television Series',
    projectType: 'Film/TV',
    clientName: 'Series Regular',
    image: '/images/credit-tv.jpg',
    featured: true,
  },
  {
    id: 'fortune-500',
    title: 'Global Leadership Program',
    projectType: 'Corporate',
    clientName: 'Fortune 500 Executive Team',
    image: '/images/credit-corporate.jpg',
    featured: false,
  },
  {
    id: 'theatre-production',
    title: 'Broadway-Adjacent Production',
    projectType: 'Theatre',
    clientName: 'Principal Cast',
    image: '/images/credit-theatre.jpg',
    featured: false,
  },
  {
    id: 'streaming-series',
    title: 'Streaming Limited Series',
    projectType: 'Film/TV',
    clientName: 'Ensemble Cast',
    image: '/images/credit-streaming.jpg',
    featured: false,
  },
  {
    id: 'corporate-keynote',
    title: 'International Leadership Summit',
    projectType: 'Corporate',
    clientName: 'Global Organization',
    image: '/images/credit-keynote.jpg',
    featured: false,
  },
  {
    id: 'award-film',
    title: 'Award-Nominated Feature',
    projectType: 'Film/TV',
    clientName: 'Supporting Cast',
    image: '/images/credit-award.jpg',
    featured: true,
  },
];

export const featuredCredits = credits.filter((c) => c.featured);

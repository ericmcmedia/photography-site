// Central site content. Most copy edits (contact info, services, videos)
// happen here instead of inside the page files.

export const site = {
  brand: 'EricMcMedia',
  name: 'Eric McGill',
  url: 'https://ericmcmedia.com',
  tagline: 'Bold images. Real moments. Your story.',
  location: 'DeKalb, Illinois',
  region: 'Greater Chicago Area and the Midwest',
  email: 'ericmcmedia@gmail.com',
  instagram: {
    handle: '@ericmcmedia',
    url: 'https://instagram.com/ericmcmedia',
  },
  defaultDescription:
    'EricMcMedia is the photography and video work of Eric McGill, a DeKalb, Illinois photographer and videographer serving the Greater Chicago Area and the Midwest. Portraits, events, and couples.',
  ogImage: '/og-image.jpg',
};

// ---------------------------------------------------------------------------
// FORMSPREE PLACEHOLDER
// Replace YOUR_FORMSPREE_FORM_ID with the ID from your Formspree dashboard.
// Example: if your endpoint is https://formspree.io/f/abcdwxyz, use 'abcdwxyz'.
// ---------------------------------------------------------------------------
export const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID';
export const formspreeEndpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

export const nav = [
  { href: '/galleries/', label: 'Galleries' },
  { href: '/video/', label: 'Video' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
];

// Gallery categories. The slug must match a folder in src/assets/galleries/.
export const categories = [
  {
    slug: 'portraits',
    title: 'Portraits',
    blurb: 'Seniors, headshots, athletes, and personal brands. Confident portraits with real personality.',
    description:
      'Portrait photography in DeKalb and the Chicago area by Eric McGill. Senior portraits, headshots, athletes, and personal branding sessions.',
  },
  {
    slug: 'events',
    title: 'Events',
    blurb: 'Parties, games, campus nights, and corporate events. The energy of the room, captured as it happens.',
    description:
      'Event photography in DeKalb and the Chicago area by Eric McGill. Sports, campus, corporate, and private events covered with a photojournalist eye.',
  },
  {
    slug: 'couples',
    title: 'Couples',
    blurb: 'Engagements, anniversaries, and everything in between. Honest moments between two people.',
    description:
      'Couples and engagement photography in DeKalb and the Chicago area by Eric McGill. Natural, story driven sessions across the Midwest.',
  },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export const services = [
  {
    id: 'photography',
    title: 'Photography',
    price: 'Starting at $150',
    summary: 'Portraits, events, and couples sessions with a fully edited gallery delivered online.',
    details: [
      'Pre-session planning for locations, outfits, and shot ideas',
      'Professionally edited high resolution images',
      'Private online gallery for viewing and downloads',
      'Available in DeKalb, Greater Chicago, and across the Midwest',
    ],
    cta: { label: 'Book Photography', href: '/contact/?service=Photography' },
  },
  {
    id: 'video',
    title: 'Video',
    price: 'Starting at $250',
    summary: 'Highlight reels, event recaps, promos, and social content shot and cut to move people.',
    details: [
      'Event recaps and highlight videos',
      'Short form edits sized for Instagram, TikTok, and Reels',
      'Music licensed and synced to the action',
      'Sports and broadcast experience behind every shoot',
    ],
    cta: { label: 'Book Video', href: '/contact/?service=Video' },
  },
  {
    id: 'editing',
    title: 'Editing',
    price: 'Pricing by inquiry',
    summary: 'Already have the footage or photos? Hand them off for a polished, consistent finish.',
    details: [
      'Photo culling, color correction, and retouching',
      'Video editing, color grading, and captions',
      'Social cutdowns from longer projects',
      'Quotes based on project size and turnaround',
    ],
    cta: { label: 'Request a Quote', href: '/contact/?service=Editing' },
  },
];

// Video work. Leave `id` empty to show a "coming soon" placeholder.
// provider: 'youtube' uses the video ID from youtube.com/watch?v=<ID>
// provider: 'vimeo' uses the numeric ID from vimeo.com/<ID>
export const videos: {
  title: string;
  description: string;
  provider: 'youtube' | 'vimeo';
  id: string;
}[] = [
  {
    title: 'Atlanta Vibe Highlight',
    description: 'Match highlight that drew over 500K impressions on Instagram.',
    provider: 'youtube',
    id: '',
  },
  {
    title: 'Game Day Recap',
    description: 'Broadcast style recap from a minor league baseball game day.',
    provider: 'youtube',
    id: '',
  },
  {
    title: 'Event Recap',
    description: 'A fast paced recap built for social.',
    provider: 'vimeo',
    id: '',
  },
  {
    title: 'Portrait Session Film',
    description: 'Behind the scenes of a portrait session.',
    provider: 'vimeo',
    id: '',
  },
];

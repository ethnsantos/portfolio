// ─────────────────────────────────────────────────────────────
//  SERVICES PAGE (/services) — all copy and prices live here.
//  Edit a package's text or price in place; add a package by
//  copying one. `featured: true` gives a card the "Most Popular"
//  badge and accent border.
// ─────────────────────────────────────────────────────────────

import { site } from './site';

export interface Package {
  name: string;
  /** Shown small above the price, e.g. "starting at". */
  pricePrefix: string;
  price: string;
  /** Small line under the price, e.g. "ad spend paid separately". */
  priceNote?: string;
  items: string[];
  featured?: boolean;
}

export interface ServiceGroup {
  id: string;
  label: string;
  title: string;
  intro: string;
  packages: Package[];
  /** Small highlighted note, placed after the package named in `after`. */
  note?: { text: string; after: string };
}

export const servicesIntro = {
  label: './services',
  title: 'work with me',
  text: 'I create cinematic short-form video for businesses, brands, and artists across the Bay Area and beyond. Everything is shot on cinema-grade gear and made to stop the scroll.',
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'businesses',
    label: './for-businesses',
    title: 'for businesses',
    intro: 'Consistent content that makes your business look as good as it is.',
    note: { text: 'Save 10% with a 3-month commitment on Growth or Full Service.', after: 'Full Service + Ads' },
    packages: [
      {
        name: 'Starter',
        pricePrefix: 'starting at',
        price: '$1,200/month',
        items: ['1 shoot day per month', '4 edited short-form videos (Reels, TikTok, Shorts)', '1 round of revisions'],
      },
      {
        name: 'Growth',
        pricePrefix: 'starting at',
        price: '$2,200/month',
        featured: true,
        items: [
          '2 shoot days per month',
          '8 edited short-form videos',
          'Monthly content plan (ideas, hooks, shot list)',
          'Captions and on-screen text',
          'Photos for posts and Stories',
          '2 rounds of revisions per video',
        ],
      },
      {
        name: 'Full Service',
        pricePrefix: 'starting at',
        price: '$3,000/month',
        items: [
          'Everything in Growth',
          'Full social media management for up to 2 platforms',
          'Posting and scheduling for feed posts and Stories (3–5 Stories per week)',
          'Caption copywriting and hashtags',
          'Comment and DM engagement',
          'Monthly performance report and strategy call',
        ],
      },
      {
        name: 'Full Service + Ads',
        pricePrefix: 'starting at',
        price: '$3,800/month',
        priceNote: 'ad spend paid separately',
        items: [
          'Everything in Full Service',
          'Meta ads setup and management (Instagram and Facebook), handled with our ads specialist',
          'Ad creative cut from your monthly content',
          'Audience targeting and testing',
          'Monthly ad performance report',
        ],
      },
      {
        name: 'Event Recap',
        pricePrefix: 'starting at',
        price: '$650',
        items: ['Coverage of your event, launch, or pop-up', '2 edited recap videos'],
      },
    ],
  },
  {
    id: 'brands',
    label: './for-brands',
    title: 'for brands',
    intro: 'Creative, high-quality content for your socials, ads, and launches.',
    packages: [
      {
        name: 'Creator Content',
        pricePrefix: 'starting at',
        price: '$450/video',
        items: [
          '1 short-form video (15–60s)',
          'Concept and script included',
          '2 hook variations for testing',
          '1 round of revisions',
        ],
      },
      {
        name: 'Content Bundle',
        pricePrefix: 'starting at',
        price: '$1,200',
        items: ['3 videos', 'Multiple hooks and formats per video'],
      },
      {
        name: 'Campaign Content',
        pricePrefix: 'starting at',
        price: '$2,500',
        items: [
          'Creative direction and concept',
          'Full production day (filming, talent, location)',
          'Hero video plus cutdowns for every platform',
        ],
      },
    ],
  },
  {
    id: 'artists',
    label: './for-music-artists',
    title: 'for music artists',
    intro: 'Visuals that match your sound and push your release.',
    packages: [
      {
        name: 'Release Pack',
        pricePrefix: 'starting at',
        price: '$500',
        items: ['1 shoot', '2–3 short-form promo videos for your single or project', 'Formatted for Reels and TikTok'],
      },
      {
        name: 'Live Show Recap',
        pricePrefix: 'starting at',
        price: '$400',
        items: ['Coverage of your show', '1 recap video (60–90s) plus 2–3 short clips'],
      },
      {
        name: 'Music Video / Creative Direction',
        pricePrefix: 'starting at',
        price: '$2,000',
        priceNote: 'custom quote',
        items: ['Concept development and treatment', 'Full production', 'Edited music video plus social cutdowns'],
      },
    ],
  },
];

export const addOns: { name: string; price: string }[] = [
  { name: 'Paid ad usage', price: '+$250 per video (30 days)' },
  { name: 'Raw footage', price: '+$200' },
  { name: 'Rush delivery (under 72 hrs)', price: '+25%' },
  { name: 'Extra revision round', price: '$75' },
  { name: 'On-camera talent', price: 'quoted per project' },
  { name: 'Photography', price: 'quoted per project' },
];

export const howItWorks: { step: string; text: string }[] = [
  { step: 'Inquire.', text: 'Tell me about your business, brand, or release.' },
  { step: 'Plan.', text: 'We lock in the package, concept, and shoot date.' },
  { step: 'Shoot.', text: 'I handle filming on-site.' },
  { step: 'Deliver.', text: 'Edited content, ready to post.' },
];

export const servicesFinePrint = 'All packages can be customized. Pricing varies with scope, location, and usage.';

// Both buttons open an email to you (the site has no form or booking link yet).
// Swap these for a Calendly / form URL whenever you have one.
const mail = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
export const bookCallHref = mail('Book a call');
export const inquiryHref = mail('Project inquiry');

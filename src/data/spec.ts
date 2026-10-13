// ─────────────────────────────────────────────────────────────
//  SPEC WORK — self-initiated spec ads and campaigns.
//  Kept separate from client work (projects.ts) and from the
//  "who i've worked with" wall (brands.ts).
//
//  Each entry uses the same fields as a project in projects.ts and
//  gets its own page at /spec/<slug>, with a small "spec ad" tag on
//  its card and a "spec work · not affiliated with <client>" line.
//  Clips go in public/projects/spec-<slug>/ to keep them apart.
//
//  While this list is empty the /spec page, the ./spec nav link and the
//  "see spec work" button are all hidden. Add an entry and they appear.
// ─────────────────────────────────────────────────────────────

import type { Project } from './projects';

export const specProjects: Project[] = [
  // Example — copy, uncomment and fill in:
  // {
  //   slug: 'brand-campaign-name',
  //   brand: 'brand',
  //   client: 'Brand',
  //   title: 'Campaign name',
  //   summary: 'Campaign name · Spec ad',
  //   role: ['Director', 'Cinematographer', 'Editor'],
  //   deliverables: '1 spec ad',
  //   year: '2026',
  //   hook: 'One line about the idea.',
  //   story: [],
  //   thumbnail: '/projects/spec-brand-campaign-name/thumb.webp',
  //   heroVideo: '/projects/spec-brand-campaign-name/hero.mp4',
  //   heroPoster: '/projects/spec-brand-campaign-name/hero.webp',
  //   cardVideo: '/projects/spec-brand-campaign-name/card.mp4',
  //   tint: '#2a3238',
  //   mainVideo: 'https://www.instagram.com/reel/…/',
  //   reels: [],
  // },
];

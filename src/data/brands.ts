// ─────────────────────────────────────────────────────────────
//  "WHO I'VE WORKED WITH" — the homepage wall of names.
//  Add a name to a group, or add a new group. Optional fields:
//    project: the slug of a project in projects.ts — links the name to it
//    logo:    an image path like '/brands/moft.svg' — shown instead of the name
//
//  Each group has a pinned polaroid. To swap a placeholder for a real BTS
//  photo, drop a square image in public/images/bts/ and set `photo.src`.
// ─────────────────────────────────────────────────────────────

import { projects } from './projects';

export interface Brand {
  name: string;
  project?: string;
  logo?: string;
}

export interface BrandGroup {
  label: string;
  photo: {
    /** e.g. '/images/bts/brands.webp'. Leave out to show a placeholder. */
    src?: string;
    alt: string;
    caption: string;
  };
  brands: Brand[];
}

export const brandGroups: BrandGroup[] = [
  {
    label: 'brands',
    photo: {
      src: '/images/bts/brands.webp',
      alt: 'Close-up of a black trail shoe on a log in the forest',
      caption: 'on set',
    },
    brands: [
      { name: 'Insta360', project: 'insta360' },
      { name: 'SPUNGE', project: 'spunge' },
      { name: 'Skincare Junkie', project: 'skincare-junkie' },
      { name: 'Genic', project: 'genic' },
      { name: 'ARIH', project: 'arih' },
      { name: 'BetterHelp' },
      { name: 'AOCHUAN' },
      { name: 'Tsingtao' },
      { name: 'PGYTECH', project: 'pgytech' },
      { name: 'MOFT' },
      { name: 'AVIO' },
      { name: 'Happylamb' },
      { name: 'WYATT', project: 'wyatt-clo' },
      { name: 'SAGO STUDIOS' },
      { name: 'The Common Club', project: 'the-common-club' },
    ],
  },
  {
    label: 'artists',
    photo: {
      src: '/images/bts/artists.webp',
      alt: 'TwinSoundz outside San Pedro Square Market for the Drive You Crazy release',
      caption: 'release day :)',
    },
    brands: [
      { name: 'Peachtree Rascals', project: 'peach-tree-rascals' },
      { name: 'TwinSoundz', project: 'twinsoundz' },
      { name: 'RAPVILLE', project: 'rapville' },
      { name: 'RC AVENUE' },
      { name: 'Academy Rejects' },
      { name: 'Summer Solstice' },
    ],
  },
  {
    label: 'businesses',
    photo: {
      src: '/images/bts/businesses.webp',
      alt: 'A tattoo artist mid-session in the studio',
      caption: 'in the shop',
    },
    brands: [
      { name: 'Sashatattoo Essential Tattoo', project: 'sashatattoo-essential' },
      { name: 'New Generation Tattoo' },
      { name: 'Mr. Poppy HVAC & Electrical' },
      { name: 'Loopy' },
    ],
  },
];

// Catch typos in `project` at build time instead of shipping a broken link.
for (const group of brandGroups) {
  for (const brand of group.brands) {
    if (brand.project && !projects.some((p) => p.slug === brand.project)) {
      throw new Error(`brands.ts: "${brand.name}" links to unknown project "${brand.project}"`);
    }
  }
}

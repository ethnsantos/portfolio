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
    photo: { alt: 'Behind the scenes on a brand shoot', caption: 'on set' },
    brands: [
      { name: 'Insta360', project: 'insta360' },
      { name: 'SPUNGE', project: 'spunge' },
      { name: 'Skincare Junkie', project: 'skincare-junkie' },
      { name: 'Genic', project: 'genic' },
      { name: 'ARIH', project: 'arih' },
      { name: 'BetterHelp' },
      { name: 'AOCHUAN' },
      { name: 'Tsingtao' },
      { name: 'PGYTECH' },
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
    photo: { alt: 'Behind the scenes with an artist', caption: 'side of stage' },
    brands: [
      { name: 'Peachtree Rascals', project: 'peach-tree-rascals' },
      { name: 'TwinSoundz', project: 'twinsoundz' },
      { name: 'RAPVILLE' },
      { name: 'RC AVENUE' },
      { name: 'Academy Rejects' },
      { name: 'Summer Solstice' },
    ],
  },
  {
    label: 'businesses',
    photo: { alt: 'Behind the scenes at a local business', caption: 'in the shop' },
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

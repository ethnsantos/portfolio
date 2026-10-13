// ─────────────────────────────────────────────────────────────
//  ALL YOUR WORK LIVES HERE.
//  To add a project: copy one entry, paste it where you want it
//  in the list, and change the fields. Order here = order on
//  the site (and the "next project" chain).
//
//  Clips: put them in public/projects/<slug>/ (see README for the
//  ffmpeg commands) and point heroVideo / heroPoster / cardVideo at them.
// ─────────────────────────────────────────────────────────────

export interface Project {
  /** URL of the page: /work/<slug>. Lowercase, dashes, no spaces. */
  slug: string;
  /** Shown huge. Write it the way you want it to look (lowercase). */
  brand: string;
  /** Proper client name for the details column. */
  client: string;
  /** Short project name, shown under the brand on the project page. */
  title: string;
  /** One line on the homepage card. */
  summary: string;
  role: string[];
  deliverables: string;
  year: string;
  /** Big opening line of the story. */
  hook: string;
  /** Optional extra paragraphs under the hook (behind the shoot, results). */
  story: string[];
  /** Optional Caveat note under the story, e.g. "fav shot is at 0:14". */
  note?: string;
  /** Optional small label in the details column, e.g. "filmed by me · edited by …". */
  credit?: string;

  /** Optional card image, e.g. '/projects/insta360/thumb.webp' (16:10). */
  thumbnail?: string;
  /** Optional short silent loop for the full-screen hero (mp4, ~5–10s, 720p). */
  heroVideo?: string;
  /** Optional still shown before / instead of the loop. Falls back to the thumbnail. */
  heroPoster?: string;
  /** Optional small 16:10 loop for the homepage card (plays on hover / in view). */
  cardVideo?: string;
  /** Background tint used while there's no image/video yet. */
  tint: string;

  /** Main video: an Instagram, TikTok, YouTube or Vimeo link. */
  mainVideo?: string;
  /** More vertical reels: Instagram or TikTok links. Leave empty to hide the section. */
  reels: string[];
  /** Optional: videos grouped under headings (e.g. by artist) instead of one main video. */
  videoGroups?: { title: string; videos: string[] }[];
}

export const projects: Project[] = [
  {
    slug: 'insta360',
    brand: 'insta360',
    client: 'Insta360',
    title: 'Ace Pro 2 & Luna Ultra',
    summary: 'Ace Pro 2 & Luna Ultra · Video creator',
    role: ['Video creator'],
    deliverables: '6 Instagram reels',
    year: '2026',
    hook: 'Cinematic product and lifestyle content showing what both cameras can do in real-world shooting.',
    story: [],
    thumbnail: '/projects/insta360/thumb.webp',
    heroVideo: '/projects/insta360/hero.mp4',
    heroPoster: '/projects/insta360/hero.webp',
    cardVideo: '/projects/insta360/card.mp4',
    tint: '#2a3238',
    mainVideo: 'https://www.instagram.com/reel/DchxIifB9eW/',
    reels: [
      'https://www.instagram.com/reel/Dbw844qN5y0/',
      'https://www.instagram.com/p/Da9gbZelF8t/',
      'https://www.instagram.com/reel/DaKIhZmNF0T/',
      'https://www.instagram.com/reel/DZiSxCOs46e/',
      'https://www.instagram.com/reel/DddPwRZsgXd/',
    ],
  },
  {
    slug: 'spunge',
    brand: 'spunge',
    client: 'Spunge',
    title: 'Osmosis',
    summary: 'Osmosis · UGC creator',
    role: ['UGC creator'],
    deliverables: '1 Instagram reel',
    year: '2026',
    hook: 'Authentic, scroll-stopping UGC that puts the Osmosis on feet and in motion.',
    story: [],
    tint: '#3a2a22',
    mainVideo: 'https://www.instagram.com/reel/DcosRz9y8LQ/',
    reels: [],
  },
  {
    slug: 'peach-tree-rascals',
    brand: 'peach tree rascals',
    client: 'Peach Tree Rascals',
    title: 'Live at Levitt Pavilion',
    summary: 'Live at Levitt Pavilion · Videographer',
    role: ['Videographer'],
    deliverables: '1 Instagram reel',
    year: '2026',
    hook: "A live recap that captures the band's energy and the crowd's reaction, from the pit to the stage.",
    story: [],
    tint: '#2e2235',
    mainVideo: 'https://www.instagram.com/reel/Dd_-K5Ip7Ct/',
    reels: [],
  },
  {
    slug: 'skincare-junkie',
    brand: 'skincare junkie',
    client: 'Skincare Junkie',
    title: 'By Dr. Blaire Rose',
    summary: 'By Dr. Blaire Rose · Content creator',
    role: ['Content creator'],
    deliverables: 'Weekly reels, photo sets',
    year: '2026',
    hook: 'Weekly reels and photo sets that make skincare routines feel fresh, glowy and real, featuring rotating on-camera talent.',
    story: [],
    thumbnail: '/projects/skincare-junkie/thumb.webp',
    heroVideo: '/projects/skincare-junkie/hero.mp4',
    heroPoster: '/projects/skincare-junkie/hero.webp',
    cardVideo: '/projects/skincare-junkie/card.mp4',
    tint: '#3a3322',
    mainVideo: 'https://www.instagram.com/p/DeNMlMou0D5/',
    reels: [],
  },
  {
    slug: 'sashatattoo-essential',
    brand: 'sashatattoo essential',
    client: 'Sashatattoo Essential',
    title: 'Artist spotlight',
    summary: 'Artist spotlight · Videographer',
    role: ['Videographer'],
    deliverables: '5 Instagram reels',
    year: '2026',
    hook: "A cinematic look inside the studio, capturing the artist's process from first line to finished piece.",
    story: [],
    thumbnail: '/projects/sashatattoo-essential/thumb.webp',
    heroVideo: '/projects/sashatattoo-essential/hero.mp4',
    heroPoster: '/projects/sashatattoo-essential/hero.webp',
    cardVideo: '/projects/sashatattoo-essential/card.mp4',
    tint: '#33262a',
    mainVideo: 'https://www.instagram.com/reel/Dc_qSiVy8iW/',
    reels: [
      'https://www.instagram.com/reel/DcSIeg1S0-6/',
      'https://www.instagram.com/reel/Db_rPFnzMzs/',
      'https://www.instagram.com/reel/DbtWbo1Srb0/',
      'https://www.instagram.com/reel/DbrOnolyO6o/',
    ],
  },
  {
    slug: 'wyatt-clo',
    brand: 'wyatt clo',
    client: 'Wyatt Clo',
    title: 'Framework II',
    summary: 'Framework II · Creative director',
    role: ['Creative director'],
    deliverables: '1 Instagram reel',
    year: '2026',
    hook: 'Directed the visual story behind the Framework II drop, from concept to behind-the-scenes content.',
    story: [],
    thumbnail: '/projects/wyatt-clo/thumb.webp',
    heroVideo: '/projects/wyatt-clo/hero.mp4',
    heroPoster: '/projects/wyatt-clo/hero.webp',
    cardVideo: '/projects/wyatt-clo/card.mp4',
    tint: '#22283a',
    mainVideo: 'https://www.instagram.com/reel/DcMlW5cyXEU/',
    reels: [],
  },
  {
    slug: 'twinsoundz',
    brand: 'twinsoundz',
    client: 'Twinsoundz',
    title: 'Drive You Crazy',
    summary: 'Drive You Crazy · Creative director',
    role: ['Creative director'],
    deliverables: '2 Instagram reels',
    year: '2026',
    hook: "Performance-driven visuals built to push the R&B duo's new single across social.",
    story: [],
    thumbnail: '/projects/twinsoundz/thumb.webp',
    heroVideo: '/projects/twinsoundz/hero.mp4',
    heroPoster: '/projects/twinsoundz/hero.webp',
    cardVideo: '/projects/twinsoundz/card.mp4',
    tint: '#1f3330',
    mainVideo: 'https://www.instagram.com/reel/Dd9gaIWTs9J/',
    reels: [
      'https://www.instagram.com/reel/DdcPeAZyzha/',
    ],
  },
  {
    slug: 'genic',
    brand: 'genic',
    client: 'Genic',
    title: 'Genic Capsule',
    summary: 'Genic Capsule · Content creator',
    role: ['Content creator'],
    deliverables: '1 Instagram reel',
    year: '2026',
    hook: 'Lifestyle content introducing the capsule collection, styled to feel effortless and wearable.',
    story: [],
    thumbnail: '/projects/genic/thumb.webp',
    heroVideo: '/projects/genic/hero.mp4',
    heroPoster: '/projects/genic/hero.webp',
    cardVideo: '/projects/genic/card.mp4',
    tint: '#352c22',
    mainVideo: 'https://www.instagram.com/reel/DbULj7Ip0tn/',
    reels: [],
  },
  {
    slug: 'arih',
    brand: 'arih',
    client: 'ARIH',
    title: 'Mukbang',
    summary: 'Mukbang · Content creator',
    role: ['Content creator'],
    deliverables: '1 Instagram reel',
    year: '2026',
    hook: "Mukbang-style content promoting ARIH's ramen and drinks, including their BTS collab lineup.",
    story: [],
    thumbnail: '/projects/arih/thumb.webp',
    heroVideo: '/projects/arih/hero.mp4',
    heroPoster: '/projects/arih/hero.webp',
    cardVideo: '/projects/arih/card.mp4',
    tint: '#2b2238',
    mainVideo: 'https://www.instagram.com/reel/DZdY09nShrA/',
    reels: [],
  },
  {
    slug: 'the-common-club',
    brand: 'the common club',
    client: 'The Common Club',
    title: 'Event recap',
    summary: 'Event recap · Videographer',
    role: ['Videographer'],
    deliverables: '1 Instagram reel',
    year: '2025–2026',
    hook: 'Recap films that capture the energy and community of each event.',
    story: [],
    thumbnail: '/projects/the-common-club/thumb.webp',
    heroVideo: '/projects/the-common-club/hero.mp4',
    heroPoster: '/projects/the-common-club/hero.webp',
    cardVideo: '/projects/the-common-club/card.mp4',
    tint: '#25302a',
    mainVideo: 'https://www.instagram.com/reel/DabJ5iYyqlM/',
    reels: [],
  },
  {
    slug: 'rapville',
    brand: 'rapville',
    client: 'RAPVILLE',
    title: 'Roster content',
    summary: 'Roster content · Videographer',
    role: ['Videographer (filming only)'],
    deliverables: 'Social content for the roster',
    year: '2026',
    hook: 'Filming social content for artists on the RAPVILLE roster.',
    story: [],
    credit: 'filmed by me · edited by the RAPVILLE team',
    thumbnail: '/projects/rapville/thumb.webp',
    heroVideo: '/projects/rapville/hero.mp4',
    heroPoster: '/projects/rapville/hero.webp',
    cardVideo: '/projects/rapville/card.mp4',
    tint: '#2f2a24',
    reels: [],
    // Group the videos by artist. Example:
    // videoGroups: [
    //   { title: 'artist name', videos: ['https://www.instagram.com/reel/…/', '…'] },
    // ],
    videoGroups: [],
  },
  {
    slug: 'pgytech',
    brand: 'pgytech',
    client: 'PGYTECH',
    title: 'Camera gear content',
    summary: 'Camera gear content · Content creator',
    role: ['Content creator'],
    deliverables: 'Product content',
    year: '2026',
    hook: "Cinematic product content showing PGYTECH's camera gear in real shoots.",
    story: [],
    thumbnail: '/projects/pgytech/thumb.webp',
    heroVideo: '/projects/pgytech/hero.mp4',
    heroPoster: '/projects/pgytech/hero.webp',
    cardVideo: '/projects/pgytech/card.mp4',
    tint: '#23302e',
    reels: [],
  },
];

/** "01", "02", … */
export const pad = (n: number) => String(n).padStart(2, '0');

/** e.g. "2024–2026", from whichever projects have a real year filled in. */
export function yearRange(list: Project[] = projects): string {
  const years = list.flatMap((p) => (p.year.match(/\d{4}/g) ?? []).map(Number));
  if (!years.length) return '';
  const min = Math.min(...years);
  const max = Math.max(...years);
  return min === max ? String(min) : `${min}–${max}`;
}

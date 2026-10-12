// ─────────────────────────────────────────────────────────────
//  ALL YOUR WORK LIVES HERE.
//  To add a project: copy one entry, paste it where you want it
//  in the list, and change the fields. Order here = order on
//  the site (and the "next project" chain). Anything in
//  [ BRACKETS ] is a placeholder waiting for your real text.
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
  /** 2–3 short paragraphs. */
  story: string[];
  /** Optional Caveat note under the story, e.g. "fav shot is at 0:14". */
  note?: string;

  /** Optional card image, e.g. '/projects/insta360/thumb.webp' (16:10). */
  thumbnail?: string;
  /** Optional short silent loop for the full-screen hero (mp4, ~5–8s, 720p). */
  heroVideo?: string;
  /** Optional still shown before / instead of the loop. */
  heroPoster?: string;
  /** Background tint used while there's no image/video yet. */
  tint: string;

  /** Main video: an Instagram, TikTok, YouTube or Vimeo link. */
  mainVideo?: string;
  /** Vertical reels: Instagram or TikTok links. */
  reels: string[];
}

export const projects: Project[] = [
  {
    slug: 'insta360',
    brand: 'insta360',
    client: 'Insta360',
    title: 'Luna Ultra launch campaign',
    summary: 'Luna Ultra launch · Campaign + unboxing carousel',
    role: ['Director', 'Cinematographer', 'Editor'],
    deliverables: 'Launch reel, unboxing carousel',
    year: '[YEAR]',
    hook: '[ One-line hook: what the brief was and the feeling you went for. ]',
    story: [
      '[ The story behind the shoot: the idea, where you filmed, a creative choice you’re proud of. 2–3 sentences. ]',
      '[ Result: views, reposts, or what the brand said. Only real numbers. ]',
    ],
    note: '[ fav shot is at 0:14 ]',
    tint: '#2a3238',
    mainVideo: '',
    reels: [],
  },
  {
    slug: 'spunge',
    brand: 'spunge',
    client: 'Spunge',
    title: 'Monthly short-form',
    summary: 'Monthly short-form · Product + lifestyle reels',
    role: ['Cinematographer', 'Editor'],
    deliverables: 'Product + lifestyle reels',
    year: '[YEAR]',
    hook: '[ One-line hook: what the brief was and the feeling you went for. ]',
    story: [
      '[ The story behind the shoot. 2–3 sentences. ]',
      '[ Result: views, reposts, or what the brand said. ]',
    ],
    tint: '#3a2a22',
    reels: [],
  },
  {
    slug: 'peach-tree-rascals',
    brand: 'peach tree rascals',
    client: 'Peach Tree Rascals',
    title: 'Levitt Pavilion live recap',
    summary: 'Levitt Pavilion live recap · Shot + edited',
    role: ['Cinematographer', 'Editor'],
    deliverables: 'Live recap video',
    year: '[YEAR]',
    hook: '[ One-line hook: what the night felt like. ]',
    story: [
      '[ The story behind the shoot. 2–3 sentences. ]',
      '[ Result: views, reposts, or what the band said. ]',
    ],
    tint: '#2e2235',
    reels: [],
  },
  {
    slug: 'skincare-junkie',
    brand: 'skincare junkie',
    client: 'Skincare Junkie',
    title: 'Weekly reels + photo sets',
    summary: 'Weekly reels + photo sets · Content creator',
    role: ['Content creator', 'Cinematographer', 'Photographer'],
    deliverables: 'Weekly reels, photo sets',
    year: '[YEAR]',
    hook: '[ One-line hook. ]',
    story: ['[ The story behind the work. 2–3 sentences. ]', '[ Result. ]'],
    tint: '#3a3322',
    reels: [],
  },
  {
    slug: 'sashatattoo-essential',
    brand: 'sashatattoo essential',
    client: 'Sashatattoo Essential',
    title: '[ Project name ]',
    summary: '[ One-line description ]',
    role: ['[ Your role ]'],
    deliverables: '[ Deliverables ]',
    year: '[YEAR]',
    hook: '[ One-line hook. ]',
    story: ['[ The story behind the shoot. 2–3 sentences. ]', '[ Result. ]'],
    tint: '#33262a',
    reels: [],
  },
  {
    slug: 'wyatt-clo',
    brand: 'wyatt clo',
    client: 'Wyatt Clo',
    title: 'Behind-the-scenes carousel',
    summary: 'Behind-the-scenes carousel · Clothing brand',
    role: ['Cinematographer', 'Editor'],
    deliverables: 'BTS carousel',
    year: '[YEAR]',
    hook: '[ One-line hook. ]',
    story: ['[ The story behind the shoot. 2–3 sentences. ]', '[ Result. ]'],
    tint: '#22283a',
    reels: [],
  },
  {
    slug: 'twinsoundz',
    brand: 'twinsoundz',
    client: 'Twinsoundz',
    title: '[ Project name ]',
    summary: '[ One-line description ]',
    role: ['[ Your role ]'],
    deliverables: '[ Deliverables ]',
    year: '[YEAR]',
    hook: '[ One-line hook. ]',
    story: ['[ The story behind the shoot. 2–3 sentences. ]', '[ Result. ]'],
    tint: '#1f3330',
    reels: [],
  },
  {
    slug: 'genic',
    brand: 'genic',
    client: 'Genic',
    title: '[ Project name ]',
    summary: '[ One-line description ]',
    role: ['[ Your role ]'],
    deliverables: '[ Deliverables ]',
    year: '[YEAR]',
    hook: '[ One-line hook. ]',
    story: ['[ The story behind the shoot. 2–3 sentences. ]', '[ Result. ]'],
    tint: '#352c22',
    reels: [],
  },
  {
    slug: 'arih',
    brand: 'arih',
    client: 'Arih',
    title: '[ Project name ]',
    summary: '[ One-line description ]',
    role: ['[ Your role ]'],
    deliverables: '[ Deliverables ]',
    year: '[YEAR]',
    hook: '[ One-line hook. ]',
    story: ['[ The story behind the shoot. 2–3 sentences. ]', '[ Result. ]'],
    tint: '#2b2238',
    reels: [],
  },
  {
    slug: 'the-common-club',
    brand: 'the common club',
    client: 'The Common Club',
    title: '[ Project name ]',
    summary: '[ One-line description ]',
    role: ['[ Your role ]'],
    deliverables: '[ Deliverables ]',
    year: '[YEAR]',
    hook: '[ One-line hook. ]',
    story: ['[ The story behind the shoot. 2–3 sentences. ]', '[ Result. ]'],
    tint: '#25302a',
    reels: [],
  },
];

/** "01", "02", … */
export const pad = (n: number) => String(n).padStart(2, '0');

/** e.g. "2024–2026", from whichever projects have a real year filled in. */
export function yearRange(list: Project[] = projects): string {
  const years = list.map((p) => Number(p.year)).filter((y) => Number.isFinite(y) && y > 0);
  if (!years.length) return '';
  const min = Math.min(...years);
  const max = Math.max(...years);
  return min === max ? String(min) : `${min}–${max}`;
}

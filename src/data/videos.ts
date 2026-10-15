// Turns a pasted video link into what a video card needs: platform, post id,
// shape and label. Instagram and TikTok don't let a static site read a post's
// shape or thumbnail, so the shape comes from the link type unless you set it:
//
//   'https://www.instagram.com/reel/ABC123/'                     → 9:16
//   { url: 'https://www.instagram.com/p/ABC123/', ratio: '4:5' }  → 4:5
//   { url: '…', still: '/projects/insta360/stills/my-frame.webp' }
//
// Stills: a card uses `still` if set, else public/projects/<slug>/stills/<post-id>.webp
// if that file exists, else the project's hero still / thumbnail.

export type Video = string | { url: string; ratio?: string; still?: string };

export type Platform = 'instagram' | 'tiktok' | 'youtube' | 'vimeo' | 'link';

export interface VideoInfo {
  url: string;
  platform: Platform;
  /** Post / video id, used to find a still file. */
  id: string;
  /** Width / height, e.g. 0.5625 for 9:16. */
  ratio: number;
  /** The ratio as written, e.g. "9:16" (for alt text / debugging). */
  ratioLabel: string;
  /** True when the shape was guessed from the link type rather than set. */
  ratioGuessed: boolean;
  still?: string;
  label: string;
}

const LABELS: Record<Platform, string> = {
  instagram: 'watch on instagram ↗',
  tiktok: 'watch on tiktok ↗',
  youtube: 'watch on youtube ↗',
  vimeo: 'watch on vimeo ↗',
  link: 'watch ↗',
};

function parseRatio(r: string): number | undefined {
  const m = r.match(/^\s*(\d+(?:\.\d+)?)\s*[:/x]\s*(\d+(?:\.\d+)?)\s*$/);
  return m ? Number(m[1]) / Number(m[2]) : undefined;
}

function identify(url: string): { platform: Platform; id: string; defaultRatio: string } {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return { platform: 'link', id: '', defaultRatio: '16:9' };
  }
  const host = u.hostname.replace(/^www\.|^m\./, '');
  const parts = u.pathname.split('/').filter(Boolean);

  if (host === 'instagram.com') {
    const i = parts.findIndex((p) => ['p', 'reel', 'reels', 'tv'].includes(p));
    const kind = parts[i];
    // Reels are vertical; a /p/ post can be any shape, so it's flagged as a guess.
    return { platform: 'instagram', id: parts[i + 1] ?? '', defaultRatio: kind === 'p' ? '4:5' : '9:16' };
  }
  if (host === 'tiktok.com' || host.endsWith('.tiktok.com')) {
    const i = parts.indexOf('video');
    return { platform: 'tiktok', id: i >= 0 ? parts[i + 1] : parts.at(-1) ?? '', defaultRatio: '9:16' };
  }
  if (host === 'youtube.com' || host === 'youtu.be') {
    const id = host === 'youtu.be' ? parts[0] : u.searchParams.get('v') ?? parts[1] ?? '';
    return { platform: 'youtube', id, defaultRatio: parts[0] === 'shorts' ? '9:16' : '16:9' };
  }
  if (host === 'vimeo.com' || host === 'player.vimeo.com') {
    return { platform: 'vimeo', id: parts.find((p) => /^\d+$/.test(p)) ?? '', defaultRatio: '16:9' };
  }
  return { platform: 'link', id: '', defaultRatio: '16:9' };
}

export function videoInfo(video: Video): VideoInfo {
  const v = typeof video === 'string' ? { url: video } : video;
  const { platform, id, defaultRatio } = identify(v.url);
  const ratioLabel = v.ratio ?? defaultRatio;
  const ratio = parseRatio(ratioLabel);
  if (ratio === undefined) throw new Error(`Bad video ratio "${v.ratio}" for ${v.url} — use e.g. "9:16"`);
  return {
    url: v.url,
    platform,
    id,
    ratio,
    ratioLabel,
    ratioGuessed: !v.ratio,
    still: v.still,
    label: LABELS[platform],
  };
}

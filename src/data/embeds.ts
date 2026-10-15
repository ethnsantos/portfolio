// Turns a pasted Instagram / TikTok / YouTube / Vimeo link into an
// embeddable iframe URL. Unknown links fall back to a plain "watch" link.

export type Embed =
  | { kind: 'instagram' | 'tiktok' | 'youtube' | 'vimeo'; src: string; vertical: boolean; url: string }
  | { kind: 'link'; url: string; vertical: boolean };

export function toEmbed(url: string): Embed {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return { kind: 'link', url, vertical: true };
  }
  const host = u.hostname.replace(/^www\.|^m\./, '');
  const parts = u.pathname.split('/').filter(Boolean);

  if (host === 'instagram.com') {
    // /p/ID, /reel/ID, /reels/ID, /tv/ID (optionally prefixed by a username)
    const i = parts.findIndex((p) => ['p', 'reel', 'reels', 'tv'].includes(p));
    const id = i >= 0 ? parts[i + 1] : undefined;
    if (id) return { kind: 'instagram', src: `https://www.instagram.com/p/${id}/embed/`, vertical: true, url };
  }

  if (host === 'tiktok.com') {
    // /@user/video/ID  (short vm.tiktok.com links can't be resolved at build time)
    const i = parts.indexOf('video');
    const id = i >= 0 ? parts[i + 1] : undefined;
    if (id && /^\d+$/.test(id)) {
      return {
        kind: 'tiktok',
        src: `https://www.tiktok.com/player/v1/${id}?music_info=1&description=1&rel=0`,
        vertical: true,
        url,
      };
    }
  }

  if (host === 'youtube.com' || host === 'youtu.be') {
    const id =
      host === 'youtu.be'
        ? parts[0]
        : u.searchParams.get('v') ?? (['shorts', 'embed', 'live'].includes(parts[0]) ? parts[1] : undefined);
    if (id) {
      return {
        kind: 'youtube',
        src: `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`,
        vertical: parts[0] === 'shorts',
        url,
      };
    }
  }

  if (host === 'vimeo.com' || host === 'player.vimeo.com') {
    const id = parts.find((p) => /^\d+$/.test(p));
    if (id) return { kind: 'vimeo', src: `https://player.vimeo.com/video/${id}?dnt=1`, vertical: false, url };
  }

  return { kind: 'link', url, vertical: true };
}

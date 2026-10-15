# ethan santos — portfolio

Astro static site. Deploys to Vercel with zero config (import the repo, hit deploy).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Add or edit a project

Everything lives in **`src/data/projects.ts`**. Copy an entry, paste it where you
want it in the list, change the fields. Order in the file = order on the site
and the "next project" chain. A page is created automatically at `/work/<slug>`.

- `mainVideo` / `reels`: paste Instagram or TikTok post links
  (`instagram.com/reel/…`, `tiktok.com/@ethnsantos/video/…`). YouTube and Vimeo
  work for `mainVideo` too. Short `vm.tiktok.com` links won't embed — open them
  in a browser and copy the full URL.
- Media goes in `public/projects/<slug>/`:
  - `thumb.webp` — card still, 16:10, 960×600 → `thumbnail`
  - `card.mp4` — small 16:10 loop for the card (plays on hover / in view) → `cardVideo`
  - `hero.mp4` — full-screen silent loop, 5–10s, 720p → `heroVideo`
  - `hero.webp` — first frame of the loop, shown while it loads → `heroPoster`

  Making them from a clip (`-ss` = start second, `-t` = length;
  use `scale=-2:720` for a landscape clip, `scale=720:-2` for a vertical one):

  ```bash
  ffmpeg -ss 0 -t 10 -i clip.mov -an -vf "scale=720:-2,fps=24" -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart hero.mp4
  ffmpeg -ss 0 -t 10 -i clip.mov -an -vf "crop='min(iw,ih*16/10)':'min(ih,iw*10/16)',scale=640:400,fps=24" -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart card.mp4
  ffmpeg -i hero.mp4 -frames:v 1 hero.webp
  ```

- `videoGroups` shows videos under headings instead of one main video, e.g. by
  artist: `videoGroups: [{ title: 'artist name', videos: ['https://…', '…'] }]`.
- `credit` adds a small orange line under the details, e.g. who edited it.
- `localVideos`: your own video files played in the site's player instead of the
  Instagram embeds. Easiest: `localVideos: ownVideos('<slug>', [1, 2, 3])`, which uses
  `public/projects/<slug>/videos/<slug>-<n>.mp4` with a `<slug>-<n>.webp` poster, in
  that order (first one is the main video; all 9:16 unless you pass a ratio). Compress with
  `ffmpeg -i in.mov -vf scale=720:-2 -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart out.mp4`.

## Spec work

Self-initiated spec ads live in **`src/data/spec.ts`**, separate from client work.
Entries use the same fields as projects, get a page at `/spec/<slug>`, an orange
"spec ad" tag on their card, and a "spec work · not affiliated with …" line.
While the list is empty, the `/spec` page, the `./spec` nav link and the
"see spec work" button are hidden; adding the first entry brings them back.

Your name, tagline, about text, email and socials are in `src/data/site.ts`.

The "who i've worked with" wall is in `src/data/brands.ts`. Add a name to a group
(or a new group). Give it `project: '<slug>'` to link it to that project page, or
`logo: '/brands/<file>.svg'` to show a logo instead of the name. Each group's pinned
polaroid shows a placeholder until you set `photo.src` (put a square image in
`public/images/bts/`, e.g. `'/images/bts/artists.webp'`) and its `caption`.

## Fonts

Acumin Pro comes from Adobe Fonts (kit `xii8bhd`). In the Adobe Fonts web
project settings, add your Vercel domain (and any custom domain), or headings
fall back to Helvetica/Arial on the live site.

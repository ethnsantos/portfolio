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
  - `thumb.webp` — card image, 16:10, ~1200px wide → `thumbnail: '/projects/<slug>/thumb.webp'`
  - `hero.mp4` — 5–8s silent loop, 720p, under ~4 MB → `heroVideo`
  - `hero.webp` — still frame from the loop → `heroPoster`

  Quick way to make the loop + poster from a clip:

  ```bash
  ffmpeg -i clip.mov -t 8 -an -vf "scale=-2:720" -c:v libx264 -crf 28 -preset slow -movflags +faststart hero.mp4
  ffmpeg -i hero.mp4 -frames:v 1 -vf "scale=-2:720" hero.webp
  ```

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

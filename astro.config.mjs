// @ts-check
import { defineConfig } from 'astro/config';

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time, so share links
// and canonical URLs point at the live domain. Set SITE_URL to override
// (e.g. once you connect a custom domain).
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});

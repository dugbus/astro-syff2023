import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://syff.scot',
  redirects: {
    '/films-of-scotland': '/filmsofscotland'
  },
  integrations: [sitemap()]
});
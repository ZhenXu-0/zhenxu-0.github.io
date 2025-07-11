
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// IMPORTANT: Update the `site` and `base` settings
export default defineConfig({
  site: 'https://zhenxu-0.github.io/zhenxu.github.io',
  base: '/zhenxu.github.io/',
  integrations: [mdx(), sitemap(), tailwind()]
});

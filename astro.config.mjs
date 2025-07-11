import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://zhenxu-0.github.io/zhenxu.github.io/',
  base: '/zhenxu.github.io/',
  integrations: [mdx(), sitemap(), tailwind()]
});

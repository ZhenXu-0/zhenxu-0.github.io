import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://zhen-xu.com',   // 👈 custom domain
  base: '/',                     // 👈 root (or just omit this line entirely)
  integrations: [mdx(), sitemap(), tailwind()]
});

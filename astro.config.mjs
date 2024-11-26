import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

export default defineConfig({
  base: '/beta_02',
  trailingSlash: 'always',
  output: 'static',
  build: {
    assets: '_assets',
  },
  integrations: [
    tailwind(), 
    svelte()
  ],
});
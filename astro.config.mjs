import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

export default defineConfig({
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
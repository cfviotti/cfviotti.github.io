import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://caio.viotti.me/',
  server: {
    allowedHosts: ['llkkg-187-89-214-30.a.free.pinggy.link'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [compress()],
});

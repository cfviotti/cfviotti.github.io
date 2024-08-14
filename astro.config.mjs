import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: "https://caio.viotti.me/",
  integrations: [tailwind()],
});

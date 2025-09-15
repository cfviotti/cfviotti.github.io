import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://caio.viotti.me/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [compress()],
});

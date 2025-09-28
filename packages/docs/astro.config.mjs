// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      customCss: [
        "@scouterna/design-tokens/tokens.css",
        "./src/styles/global.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Design System",
          autogenerate: { directory: "design-system" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

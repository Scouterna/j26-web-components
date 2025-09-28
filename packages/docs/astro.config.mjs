// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Scouterna UI",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
        alt: "Scouterna",
      },
      customCss: [
        "@scouterna/design-tokens/tokens.css",
        "./src/styles/global.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Scouterna/j26-web-components",
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
          items: [{ label: "Design Tokens", link: "/design-system/tokens" }],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

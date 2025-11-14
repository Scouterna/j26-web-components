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
        "@fontsource-variable/source-sans-3",
        "@scouterna/design-tokens/tokens.css",
        "./src/styles/global.css",
        "./src/styles/components.css",
        "./src/styles/highlight.css",
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "/component-loader.js",
            type: "module",
          },
        },
      ],
      components: {
        Head: "./src/components/ComponentLoader.astro",
      },
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
          label: "Components",
          autogenerate: { directory: "components" },
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
    server: {
      watch: {
        // Watch the ui-webc source files for faster HMR
        ignored: ["!**/node_modules/@scouterna/ui-webc/**"],
      },
      fs: {
        // Allow serving files from the monorepo root
        allow: ["../.."],
      },
    },
    optimizeDeps: {
      // Don't pre-bundle the components so changes are picked up faster
      exclude: ["@scouterna/ui-webc"],
    },
  },
});

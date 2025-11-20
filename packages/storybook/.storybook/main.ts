import type { StorybookConfig } from "@storybook/react-vite";
import type { UserConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      plugins: [
        // Force full reload for components to re-register
        {
          name: "full-reload",
          handleHotUpdate({ server }) {
            server.ws.send({ type: "full-reload" });
            return [];
          },
        },
      ],
    } satisfies UserConfig);
  },
};
export default config;

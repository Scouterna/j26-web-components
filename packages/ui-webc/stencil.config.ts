import type { Config } from "@stencil/core";
import { postcss } from "@stencil-community/postcss";
import postcssImport from "postcss-import";

import postcssPresetEnv from "postcss-preset-env";
export const config: Config = {
  namespace: "ui-webc",
  globalStyle: "src/global/global.css",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
      externalRuntime: false,
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
  plugins: [
    postcss({
      plugins: [postcssImport(), postcssPresetEnv()],
    }),
  ],
};

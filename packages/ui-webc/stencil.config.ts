import type { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import { postcss } from "@stencil-community/postcss";
import postcssImport from "postcss-import";

import postcssPresetEnv from "postcss-preset-env";
export const config: Config = {
  namespace: "ui-webc",
  globalStyle: "src/global/global.css",
  extras: {
    addGlobalStyleToComponents: true,
  },
  outputTargets: [
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: "../ui-react/lib/components/stencil-generated/",
    }),
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
    {
      type: "docs-json",
      file: "dist/custom-elements.json",
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
  devServer: {
    reloadStrategy: "pageReload",
    openBrowser: false,
  },
  // Enable faster incremental builds in watch mode
  watchIgnoredRegex: /node_modules|dist|\.cache/,
  buildEs5: false, // Skip ES5 builds for faster compilation
};

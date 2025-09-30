import type { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import tailwind, {
  setPluginConfigurationDefaults,
  tailwindGlobal,
  tailwindHMR,
} from "stencil-tailwind-plugin";

setPluginConfigurationDefaults({
  tailwindCssPath: "./src/style.css",
  minify: false,
  enableDebug: true,
  optimise: true,
  stripComments: false,
});

export const config: Config = {
  namespace: "ui-webc",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "auto-define-custom-elements",
      externalRuntime: false,
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: "../ui-react/src/components/stencil-generated/",
    }),
  ],
  testing: {
    browserHeadless: "shell",
  },
  plugins: [tailwind(), tailwindHMR()],
  devServer: {
    reloadStrategy: "pageReload",
    initialLoadUrl: "/lab/output/",
    root: ".",
  },
};

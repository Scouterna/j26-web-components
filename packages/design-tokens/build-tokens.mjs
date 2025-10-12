import { globSync } from "glob";
import StyleDictionary from "style-dictionary";
import { fixCalc } from "./fix-calc.mjs";

const source = globSync("./tokens/**/*.json", {
  ignore: ["**/**/$*.json", "Misc.json"],
});

const sd = new StyleDictionary({
  source,
  platforms: {
    css: {
      transformGroup: "css",
      options: {
        formatting: {
          commentPosition: "above",
        },
      },
      files: [
        {
          format: "css/variables",
          destination: "dist/tokens.css",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    javascript: {
      transformGroup: "js",
      files: [
        {
          format: "javascript/esm",
          destination: "dist/tokens.js",
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();

await fixCalc("dist/tokens.css");

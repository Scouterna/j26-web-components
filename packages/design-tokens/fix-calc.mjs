import { readFile, writeFile } from "node:fs/promises";

const varRegex = /(?<prefix>^\s*--[^:]+:\s*)(?<value>[^;]+?)(?<suffix>\s*;)/gm;
const operatorRegex = /(?:\s\+\s|\s-\s|\/|\*)/;

/**
 * Fixes CSS variable definitions that use arithmetic without `calc()`.
 */
export async function fixCalc(cssPath) {
  const content = await readFile(cssPath, "utf-8");

  const fixedContent = content.replace(
    varRegex,
    (match, prefix, value, suffix) => {
      if (!value.match(operatorRegex)) {
        return match;
      }

      return `${prefix}calc(${value})${suffix}`;
    },
  );

  await writeFile(cssPath, fixedContent);
}

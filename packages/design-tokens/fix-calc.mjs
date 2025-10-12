import { readFile, writeFile } from "node:fs/promises";

const varRegex = /(?<prefix>^\s*--[^:]+:\s*)(?<value>[^;]+?)(?<suffix>\s*;)/gm;
const operatorRegex = /(?:\s\+\s|\s-\s|\/|\*)/;

export async function fixCalc(filePath) {
  const content = await readFile(filePath, "utf-8");

  const fixedContent = content.replace(
    varRegex,
    (match, prefix, value, suffix) => {
      if (!value.match(operatorRegex)) {
        return match;
      }

      return `${prefix}calc(${value})${suffix}`;
    },
  );

  await writeFile(filePath, fixedContent);
}

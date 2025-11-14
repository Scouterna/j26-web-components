import { readFile, writeFile } from "node:fs/promises";

const typeVarRegex = /^\s*--type-.*\n/gm;
const fontFamilySansRegex =
  /(?<prefix>^\s*--fontfamily-sans:\s*)(?<value>.*)(?<suffix>;)/gm;

/**
 * Replaces references in a value with CSS variables.
 * Example: "{fontsize.base}*16" -> "var(--fontsize-base)*16"
 */
function replaceReferences(value) {
  return value.replace(/\{([a-zA-Z0-9_.-]+)\}/g, (_, ref) => {
    const varName = `--${ref.replace(/\./g, "-")}`;
    return `var(${varName})`;
  });
}

export async function fixType(cssPath, jsPath) {
  const { default: tokens } = await import(jsPath);

  let content = await readFile(cssPath, "utf-8");

  content = content.replace(typeVarRegex, "");
  content = content.replace(
    fontFamilySansRegex,
    '$1"Source Sans 3 Variable", sans-serif$3',
  );

  const newLines = [];

  for (const typeFamily of Object.values(tokens.type)) {
    for (const variant of Object.values(typeFamily)) {
      const varName = `--${variant.path.join("-")}`;

      const value = variant.original.$value;

      const fontFamilies = value.fontFamilies
        .map((family) => replaceReferences(family))
        .join(", ");
      const fontSize = replaceReferences(value.fontSizes);
      const fontWeight = replaceReferences(value.fontWeights);
      const lineHeight = replaceReferences(value.lineHeights);

      newLines.push(
        `  ${varName}: ${fontWeight} ${fontSize}/${lineHeight} ${fontFamilies};`,
      );
    }
  }

  content = content.replace(/(\}\s*$)/, (_, p1) => {
    return `${newLines.join("\n")}\n${p1}`;
  });

  await writeFile(cssPath, content);
}

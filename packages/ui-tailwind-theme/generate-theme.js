import { mkdir, readFile, writeFile } from "node:fs/promises";

const tokensPath = import.meta.resolve("@scouterna/design-tokens/tokens.css");
const tokensContent = await readFile(new URL(tokensPath), "utf-8");

const lines = tokensContent.split("\n").map((line) => line.trim());
const colorLines = lines.filter((line) => line.match(/\s*--color-/));

const baseColors = colorLines.filter((line) => !line.includes("var("));
const derivedColors = colorLines.filter((line) => line.includes("var("));

let file = await readFile("theme.template.css", "utf-8");

file = file.replace(/([^\S\r\n]*)\/\*BASE_COLORS\*\//, (_, space) =>
  baseColors.map((line) => space + line).join("\n"),
);

file = file.replace(/([^\S\r\n]*)\/\*DERIVED_COLORS\*\//, (_, space) =>
  derivedColors.map((line) => space + line).join("\n"),
);

await mkdir("dist", { recursive: true });
await writeFile("dist/theme.css", file);

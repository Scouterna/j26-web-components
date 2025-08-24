import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, parse, sep } from "node:path";
import { watch } from "chokidar";
import { bundleMDX } from "mdx-bundler";

const outputDir = new URL("./output", import.meta.url);
const templateDir = new URL("./template", import.meta.url);

type Page = {
  group: string;
  name: string;
  path: string;
};

const pages: Record<string, Page> = {};

async function writePagesJS() {
  await writeFile(
    join(outputDir.pathname, "pages.js"),
    `window.__lab_pages = ${JSON.stringify(pages, null, 2)};`,
  );
}

async function initialize() {
  await mkdir(outputDir, { recursive: true });

  cp(
    join(templateDir.pathname, "index.html"),
    join(outputDir.pathname, "index.html"),
  );
  cp(
    join(templateDir.pathname, "placeholder.html"),
    join(outputDir.pathname, "placeholder.html"),
  );
}

async function generatePageContent(mdxPath: string) {
  const mdxContent = await readFile(mdxPath, "utf-8");
  const result = await bundleMDX({
    source: mdxContent,
  });

  const content = `
  <div id="root"></div>
  <script type="module">
    import mdxBundler from "https://esm.sh/mdx-bundler@10.1.1/client";
    import { createRoot } from "https://esm.sh/react-dom@19.1.1/client";

    const code = ${JSON.stringify(result.code)};

    createRoot(document.getElementById("root")).render(
      mdxBundler.getMDXComponent(code)({}),
    );
  </script>
  `.trim();

  return {
    content,
    frontmatter: result.frontmatter,
  };
}

function indent(str: string, spaces: number) {
  const indentation = " ".repeat(spaces);
  return str
    .split("\n")
    .map((line) => indentation + line)
    .join("\n");
}

async function generatePageWrapper(pageContent: string) {
  const templatePath = join(templateDir.pathname, "page.html");
  const template = await readFile(templatePath, "utf-8");

  const placeholderRegex = /^(\s+)<!--\s*PLACEHOLDER\s*-->/m;

  const placeholderLine = template.match(placeholderRegex);
  const spaces = placeholderLine?.[1]?.length ?? 0;
  const indentedContent = indent(pageContent, spaces);

  return template.replace(placeholderRegex, indentedContent);
}

function getInfoFromPath(path: string) {
  // components/my-component/lab/overview.html
  const match = path.match(
    /components\/(?<component>[^/]+).*\/(?<page>.*)\.mdx/,
  );

  if (!match) return null;

  const { component, page } = match?.groups ?? {};

  return {
    group: component,
    name: page,
  };
}

async function writePage(pagePath: string) {
  const info = getInfoFromPath(pagePath);

  if (!info) {
    console.warn(`Could not extract info from path: ${pagePath}`);
    return;
  }

  const { content, frontmatter } = await generatePageContent(pagePath);
  const finalHtml = await generatePageWrapper(content);
  const parsed = parse(pagePath);
  const dirWithoutSrc = parsed.dir.split(sep).slice(1).join(sep);
  const relativePath = join(dirWithoutSrc, `${parsed.name}.html`);
  const fullPath = join(outputDir.pathname, "pages", relativePath);

  const baseDir = dirname(fullPath);

  await mkdir(baseDir, { recursive: true });
  await writeFile(fullPath, finalHtml);

  const group = info.group;
  const name = frontmatter.name ?? info.name;

  pages[relativePath] = {
    group,
    name,
    path: relativePath,
  };
  await writePagesJS();
}

async function removePage(pagePath: string) {
  const { dir, name } = parse(pagePath);
  const dirWithoutSrc = dir.split(sep).slice(1).join(sep);
  const relativePath = join(dirWithoutSrc, `${name}.html`);
  const fullPath = join(outputDir.pathname, "pages", relativePath);

  await rm(fullPath);
  delete pages[relativePath];
  await writePagesJS();
}

async function start() {
  await initialize();

  const watcher = watch("src", {
    ignored: (path, stats) => stats?.isFile() && !path.endsWith(".mdx"),
    persistent: true,
  });

  watcher
    .on("add", (path) => {
      console.log(`File ${path} has been added`);
      writePage(path).catch((err) =>
        console.error("generatePage failed:", err),
      );
    })
    .on("change", (path) => {
      console.log(`File ${path} has been changed`);
      writePage(path).catch((err) =>
        console.error("generatePage failed:", err),
      );
    })
    .on("unlink", (path) => {
      console.log(`File ${path} has been removed`);
      removePage(path).catch((err) => console.error("removePage failed:", err));
    });
}

await start();

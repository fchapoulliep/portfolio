/// <reference types="vitest/config" />
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { PAGES, SITE_URL, type PageMeta } from "./src/pageMeta";

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Rewrites one tag of index.html, and fails the build if the tag is missing. */
const rewrite = (html: string, tag: RegExp, replacement: string) => {
  if (!tag.test(html)) {
    throw new Error(`github-pages-routes: ${tag} not found in index.html`);
  }
  return html.replace(tag, () => replacement);
};

/** index.html with the title, description and canonical URL of one page. */
const withMeta = (index: string, page: PageMeta) => {
  const url = SITE_URL + page.path;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  let html = rewrite(index, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = rewrite(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  const metas = [
    ["name", "description", description],
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:url", url],
  ];
  for (const [attr, key, value] of metas) {
    html = rewrite(
      html,
      new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/>`),
      `<meta ${attr}="${key}" content="${value}" />`,
    );
  }
  return html;
};

/**
 * GitHub Pages has no fallback for a single-page app: it serves a file, or
 * else its 404 page. Each route gets its own copy of index.html (about.html
 * answers /portfolio/about) with the title, description and canonical URL of
 * src/pageMeta.ts, so that search engines index it as a page of its own rather
 * than a copy of the home page. 404.html loads the app on any other path, for
 * the router to send it home, and the sitemap lists every page.
 */
const githubPagesRoutes = (): Plugin => ({
  name: "github-pages-routes",
  apply: "build",
  writeBundle({ dir = "build" }) {
    const index = readFileSync(join(dir, "index.html"), "utf-8");
    for (const page of PAGES) {
      writeFileSync(join(dir, `${page.path || "index"}.html`), withMeta(index, page));
    }
    writeFileSync(
      join(dir, "404.html"),
      index.replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>'),
    );
    writeFileSync(
      join(dir, "sitemap.xml"),
      [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...PAGES.map((page) => `  <url><loc>${SITE_URL}${page.path}</loc></url>`),
        "</urlset>",
        "",
      ].join("\n"),
    );
  },
});

export default defineConfig({
  // The pages of App.tsx are listed in src/pageMeta.ts
  plugins: [react(), tailwindcss(), githubPagesRoutes()],
  // Served by GitHub Pages under fchapoulliep.github.io/portfolio/
  base: "/portfolio/",
  // gh-pages publishes this folder (see the deploy script)
  build: { outDir: "build" },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
});

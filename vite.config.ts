/// <reference types="vitest/config" />
import { copyFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * GitHub Pages has no fallback for a single-page app: it serves a file, or
 * else its 404 page. Each route gets a copy of index.html (about.html answers
 * /portfolio/about), and 404.html loads the app on any other path, for the
 * router to send it home.
 */
const githubPagesRoutes = (routes: string[]): Plugin => ({
  name: "github-pages-routes",
  apply: "build",
  writeBundle({ dir = "build" }) {
    const index = join(dir, "index.html");
    for (const name of [...routes, "404"]) {
      copyFileSync(index, join(dir, `${name}.html`));
    }
  },
});

export default defineConfig({
  // The routes of App.tsx, besides the home page
  plugins: [react(), tailwindcss(), githubPagesRoutes(["about", "contact"])],
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

/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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

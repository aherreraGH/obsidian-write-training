/*
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      formats: ["cjs"],
      fileName: () => "main.js",
    },
    outDir: "G:/ObsidianVaults/TVault/.obsidian/plugins/elegant-markdown",
    emptyOutDir: false,
    rollupOptions: {
      external: ["obsidian"],
      output: {
        exports: "default",
      },
    },
  },
});
*/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: "G:/ObsidianVaults/TVault/.obsidian/plugins/elegant-markdown",
    emptyOutDir: false,
    cssCodeSplit: false,
    lib: {
      entry: "src/main.tsx",
      formats: ["cjs"],
      fileName: () => "main.js",
    },
    rollupOptions: {
      external: ["obsidian"],
      output: {
        exports: "default",
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.some(n => n.endsWith(".css"))) {
            return "styles.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
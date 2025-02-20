import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@scss": path.resolve(__dirname, "./src/scss"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@consts": path.resolve(__dirname, "./src/consts"),
    },
  },
});

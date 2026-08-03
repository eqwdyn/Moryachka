import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 500,
    cssMinify: "lightningcss",
  },
  server: {
    allowedHosts: ["forbiddingly-cerebral-greenshank.cloudpub.ru"],
    port: 80,
    // host: "0.0.0.0",
  },
  preview: {
    allowedHosts: ["audibly-diligent-tayra.cloudpub.ru"],
    port: 80,
    // host: "0.0.0.0",
  },
});

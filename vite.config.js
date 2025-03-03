import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/<store-market>/",
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ["antd-mobile"], // Добавьте antd-mobile в external
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
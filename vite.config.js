import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    VitePluginStaticCopy({
      targets: [
        {
          src: "_redirects", // Path to the _redirects file
          dest: "", // Destination directory in the build output
        },
      ],
    }),
  ],
  assetsInclude: ["**/*.glb"],
});

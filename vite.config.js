import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { staticCopy } from "vite-plugin-static-copy";
export default defineConfig({
  plugins: [
    react(),
    staticCopy({
      targets: [
        {
          src: "_redirects",
          dest: "", // Destination directory in the build output
        },
      ],
    }),
  ],
  assetsInclude: ["**/*.glb"],
});

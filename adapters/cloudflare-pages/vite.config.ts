import { cloudflarePagesAdapter } from "@builder.io/qwik-city/adapters/cloudflare-pages/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    // Force the project root to the repository root when this nested config is used
    root: process.cwd(),
    build: {
      ssr: true,
      rollupOptions: {
        input: ["./src/entry.cloudflare-pages.tsx", "@qwik-city-plan"],
      },
      // Output to project root dist folder. Using a relative path ensures CI doesn't attempt to write to /opt/dist.
      // emptyOutDir MUST be false: build.client runs first and emits dist/build/*.js
      // (the client chunks the HTML references via q:base="/build/"). If the server
      // build wipes dist/, the client chunks vanish and the deployed site loads
      // empty HTML with 404'd scripts — no hydration, no 3D, no interactivity.
      emptyOutDir: false,
    },
    plugins: [
      cloudflarePagesAdapter({
        ssg: {
          include: ["/*"],
        },
      }),
    ],
  };
});

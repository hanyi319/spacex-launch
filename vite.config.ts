import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // replace({
    //   "process.env.API_BASE_URL": JSON.stringify("https://api.spacexdata.com/v5"),
    // }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://api.spacexdata.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

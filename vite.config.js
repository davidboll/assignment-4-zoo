import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // binds to 0.0.0.0 instead of localhost
    port: 5173, // make sure this is the port Render is scanning for
  },
});

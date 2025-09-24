import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // This alias maps "@" to the "./src" folder
  // It makes imports cleaner, so instead of writing
  //    import Hero from "../../components/Hero"
  // you can just write
  //    import Hero from "@/components/Hero"
  // Make sure this matches the "paths" setting in tsconfig.json
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain when you have one
  site: 'https://roop-trading.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  }
});

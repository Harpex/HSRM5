import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base: GitHub Pages alt-yolu (https://harpex.github.io/HSRM5/).
// Yerel geliştirmede '/' kalır, sadece production build'de '/HSRM5/' olur.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/HSRM5/' : '/',
  plugins: [react(), tailwindcss()],
}))

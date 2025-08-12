import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match the repo name for GitHub Pages project sites
export default defineConfig({
  base: '/SlickPlanner/',
  plugins: [react()],
})
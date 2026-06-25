import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev + preview both run on port 3100 (host exposed for remote/mobile preview).
// base: './' emits relative asset paths so the build works when hosted under a
// subpath (e.g. GitHub Pages project sites like username.github.io/Date/) or
// opened directly from disk — not just from the domain root.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 3100, host: true },
  preview: { port: 3100, host: true },
})

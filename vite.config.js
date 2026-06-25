import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev + preview both run on port 3100 (host exposed for remote/mobile preview).
export default defineConfig({
  plugins: [react()],
  server: { port: 3100, host: true },
  preview: { port: 3100, host: true },
})

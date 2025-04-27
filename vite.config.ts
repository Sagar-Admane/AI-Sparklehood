import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server : {
    allowedHosts : ['cfb4-125-16-189-246.ngrok-free.app'],
  },
  plugins: [react()],
})

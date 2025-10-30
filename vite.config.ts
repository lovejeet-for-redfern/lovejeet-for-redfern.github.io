import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This line is essential for your repo name
  base: '/', 
  plugins: [react()],
})
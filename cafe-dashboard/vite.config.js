import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/coffee-vending-etl-eda-analytics/',
  plugins: [react()],
})

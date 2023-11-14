/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const resolvePath = (path: string) => resolve(__dirname, path)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'test/setup.ts')],
    coverage: {
      reporter: ['text', 'json', 'html'],
      enabled: true,
    },
  },
  resolve: {
    alias: {
      '@': resolvePath('./src'),
    },
  },
})

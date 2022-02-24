import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    runtimeEnv: 'dom',
    previewSetupFiles: [
      'peeky-preview.ts',
    ],
  },
})

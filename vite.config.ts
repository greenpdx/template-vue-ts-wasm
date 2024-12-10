import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vite.dev/config/
export default defineConfig({
  plugins: 
    [
      wasm(),
      topLevelAwait(),
      vue(),
    ],
  server: {
    host: '0.0.0.0'
  }
})

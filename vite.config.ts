import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import viteReactJsx from 'vite-react-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
// import VitePluginLinaria from 'vite-plugin-linaria';

// https://vitejs.dev/config/
export default defineConfig({
  // NOTE: vanillaExtractPlugin is placed after reactRefresh and before the others.
  plugins: [vanillaExtractPlugin(), reactRefresh(), viteReactJsx(), tsconfigPaths()],
  build: {
    chunkSizeWarningLimit: 100000000
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['.', '/src'],
    },
  },
});

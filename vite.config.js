import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Reach-Rise/',  // Set the base URL for the project (use your GitHub repo name)
  build: {
    rollupOptions: {
      external: ['fsevents'],  // Exclude fsevents to avoid issues during build
      plugins: [
        // Add plugins if necessary for handling external or non-JS assets
      ]
    },
  },
  optimizeDeps: {
    exclude: ['fsevents']  // Exclude fsevents from the optimization process
  }
});
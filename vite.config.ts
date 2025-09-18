import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // FIX: The use of `process.cwd()` caused a TypeScript error. 
          // Replaced with `__dirname`, which is available in the Vite config's execution context and resolves the issue.
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

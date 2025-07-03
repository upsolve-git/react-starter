import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [svgr(), react()],
    resolve: {
      alias: {
        // Core aliases
        '@': path.resolve(__dirname, './src'),
        '@utils': path.resolve(__dirname, './src/utils'),
        
        // Component structure
        '@components': path.resolve(__dirname, './src/components'),
        '@atoms': path.resolve(__dirname, './src/components/atoms'),
        
        // Other aliases (keep your existing structure)
        './runtimeConfig': './runtimeConfig.browser',
        '@animations': path.resolve(__dirname, './src/animations'),
        '@constants': path.resolve(__dirname, './src/constants'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@public': path.resolve(__dirname, './public'),
        '@services': path.resolve(__dirname, './src/services'),
        '@stores': path.resolve(__dirname, './src/stores'),
        '@routes': path.resolve(__dirname, './src/routes'),
        '@validations': path.resolve(__dirname, './src/validations'),
        '@interface': path.resolve(__dirname, './src/interface'),
      } 
    },
    server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8000', // Ensure this matches Django's port
      changeOrigin: true,
    }
  }
},
    preview: {
      host: true,
      strictPort: true,
      port: parseInt(env.VITE_PORT || '5173', 10),
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setup-tests.ts',
    },
    optimizeDeps: {
      include: ['clsx', 'tailwind-merge'], // Add these if using cn utility
    },
  });
};
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      output: {
        library: {
          name: 'qiankun1',
          type: 'umd',
        },
      },
      plugins: [
        tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
  server: {
    port: 3001,
  },
});

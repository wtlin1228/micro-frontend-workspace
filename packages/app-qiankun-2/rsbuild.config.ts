import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  tools: {
    rspack: {
      output: {
        library: {
          name: 'qiankun2',
          type: 'umd',
        },
      },
    },
  },
  plugins: [pluginReact()],
  server: {
    port: 3002,
  },
});

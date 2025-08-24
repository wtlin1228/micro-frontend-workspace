import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  tools: {
    rspack: {
      output: {
        library: {
          name: 'qiankun1',
          type: 'umd',
        },
      },
    },
  },
  plugins: [pluginReact()],
  server: {
    port: 3001,
  },
});

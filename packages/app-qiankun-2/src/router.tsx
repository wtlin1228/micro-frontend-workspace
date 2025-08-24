import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export const router = createRouter({
  routeTree,
  basepath: '/apps/qiankun/app2',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

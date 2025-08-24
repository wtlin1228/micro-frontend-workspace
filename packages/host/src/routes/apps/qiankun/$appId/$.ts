import { createFileRoute } from '@tanstack/react-router';

// the routes under /apps/qiankun/$appId/ is handled by qiankun app's router
export const Route = createFileRoute('/apps/qiankun/$appId/$')({});

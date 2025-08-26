import { createFileRoute } from '@tanstack/react-router';

// the routes under /apps/mf/app1/ is handled by mf-1 app's router
export const Route = createFileRoute('/apps/mf/app1/$')({});

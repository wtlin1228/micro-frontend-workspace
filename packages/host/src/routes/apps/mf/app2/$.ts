import { createFileRoute } from '@tanstack/react-router';

// the routes under /apps/mf/app2/ is handled by mf-2 app's router
export const Route = createFileRoute('/apps/mf/app2/$')({});

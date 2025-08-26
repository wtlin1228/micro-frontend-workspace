import { createFileRoute } from '@tanstack/react-router';
import { App } from 'mf2';

export const Route = createFileRoute('/apps/mf/app2')({
  component: RouteComponent,
});

function RouteComponent() {
  return <App />;
}

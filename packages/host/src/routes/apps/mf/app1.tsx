import { createFileRoute } from '@tanstack/react-router';
import { App } from 'mf1';

export const Route = createFileRoute('/apps/mf/app1')({
  component: RouteComponent,
});

function RouteComponent() {
  return <App />;
}

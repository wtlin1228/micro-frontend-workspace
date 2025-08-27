import { createFileRoute } from '@tanstack/react-router';
import { getRootComponent } from 'mf2';

const RootComponent = getRootComponent({ basepath: '/apps/mf/app2' });

export const Route = createFileRoute('/apps/mf/app2')({
  component: RouteComponent,
});

function RouteComponent() {
  return <RootComponent />;
}

import { createFileRoute } from '@tanstack/react-router';
import { getRootComponent } from 'mf1';

const RootComponent = getRootComponent({ basepath: '/apps/mf/app1' });

export const Route = createFileRoute('/apps/mf/app1')({
  component: RouteComponent,
});

function RouteComponent() {
  return <RootComponent />;
}

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/apps/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Please select an app</div>;
}

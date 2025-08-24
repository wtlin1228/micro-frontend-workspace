import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/apps/qiankun/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Please select a qiankun app</div>;
}

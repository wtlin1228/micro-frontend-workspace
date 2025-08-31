import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/apps/$baseRoute')({
  component: RouteComponent,
});

function RouteComponent() {
  const baseRoute = useParams({
    from: '/apps/$baseRoute',
    select: (params) => params.baseRoute,
  });

  return <div>App, baseRoute = {baseRoute}</div>;
}

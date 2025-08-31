import {
  createFileRoute,
  useLoaderData,
  useParams,
} from '@tanstack/react-router';
import * as React from 'react';
import { ModuleFederationRemoteManager } from '../app-loaders';
import { APP_CONFIGS } from '../configs';

const remoteManager = new ModuleFederationRemoteManager();

export const Route = createFileRoute('/apps/$baseRoute')({
  loader: ({ params: { baseRoute } }) => {
    const mfAppConfig = APP_CONFIGS.find(
      (appConfig) =>
        appConfig.architecture === 'Module Federation' &&
        appConfig.id === baseRoute
    );

    if (!mfAppConfig) {
      return;
    }

    return remoteManager.getRemote(mfAppConfig);
  },
  component: RouteComponent,
});

function RouteComponent() {
  const remote = useLoaderData({ from: Route.id });

  const baseRoute = useParams({
    from: '/apps/$baseRoute',
    select: (params) => params.baseRoute,
  });

  if (!remote) {
    return null;
  }

  const RootComponent = React.lazy(async () => {
    return { default: await remote.RootComponent };
  });

  return (
    <React.Suspense fallback={<div>Loading {baseRoute} ...</div>}>
      <RootComponent />
    </React.Suspense>
  );
}

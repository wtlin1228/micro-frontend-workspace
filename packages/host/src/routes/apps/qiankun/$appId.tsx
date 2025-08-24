import { createFileRoute } from '@tanstack/react-router';
import { QIANKUN_CONTAINER } from '../../../components/register-qiankun-apps';

export const Route = createFileRoute('/apps/qiankun/$appId')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div id={QIANKUN_CONTAINER}>Hello "/apps/qiankun/$appId"!</div>;
}

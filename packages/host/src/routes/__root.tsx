import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/apps/qiankun/$appId" params={{ appId: 'app1' }}>
          Qiankun 1
        </Link>
        <Link to="/apps/qiankun/$appId" params={{ appId: 'app2' }}>
          Qiankun 2
        </Link>
        <Link to="/apps/mf/app1">MF 1</Link>
        <Link to="/apps/mf/app1">MF 2</Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

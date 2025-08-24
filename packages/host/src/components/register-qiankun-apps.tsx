import { registerMicroApps, RegistrableApp, start } from 'qiankun';
import { useEffect, useMemo } from 'react';

export const QIANKUN_CONTAINER = 'qiankun-container';

export const useRegisterQiankunApps = () => {
  const registerableApps = useMemo(() => {
    const apps: RegistrableApp<{}>[] = [
      {
        name: 'app-qiankun-1',
        entry: 'http://localhost:3001/index.html',
        container: `#${QIANKUN_CONTAINER}`,
        loader: (loading: boolean) => {
          console.log('host::qiankun::loader::qiankun-1', loading);
        },
        activeRule: '/apps/qiankun/app1',
        props: {},
      },
      {
        name: 'app-qiankun-2',
        entry: 'http://localhost:3002/index.html',
        container: `#${QIANKUN_CONTAINER}`,
        loader: (loading: boolean) => {
          console.log('host::qiankun::loader::qiankun-2', loading);
        },
        activeRule: '/apps/qiankun/app2',
        props: {},
      },
    ];

    return apps;
  }, []);

  useEffect(() => {
    registerMicroApps(registerableApps);
    start({ prefetch: false });
  }, [registerableApps]);
};

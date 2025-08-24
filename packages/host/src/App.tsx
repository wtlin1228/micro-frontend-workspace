import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { useRegisterQiankunApps } from './components/register-qiankun-apps';

const App = () => {
  useRegisterQiankunApps();

  return <RouterProvider router={router} />;
};

export default App;

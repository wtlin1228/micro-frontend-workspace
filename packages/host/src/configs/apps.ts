export interface AppConfig {
  id: string;
  name: string;
  architecture: 'Module Federation' | 'Qiankun';
  entry: string;
}

// In a real-world scenario, these configs would be provided by the backend API
export const APP_CONFIGS: AppConfig[] = [
  {
    id: 'app-mf-1',
    name: 'MF1',
    architecture: 'Module Federation',
    entry: 'http://localhost:4001/mf-manifest.json',
  },
  {
    id: 'app-mf-2',
    name: 'MF2',
    architecture: 'Module Federation',
    entry: 'http://localhost:4002/mf-manifest.json',
  },
  {
    id: 'app-qiankun-1',
    name: 'Qiankun1',
    architecture: 'Qiankun',
    entry: 'http://localhost:3001/index.html',
  },
  {
    id: 'app-qiankun-2',
    name: 'Qiankun2',
    architecture: 'Qiankun',
    entry: 'http://localhost:3002/index.html',
  },
];

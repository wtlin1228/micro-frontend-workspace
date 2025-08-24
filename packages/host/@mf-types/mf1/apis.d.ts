
    export type RemoteKeys = 'mf1';
    type PackageType<T> = T extends 'mf1' ? typeof import('mf1') :any;
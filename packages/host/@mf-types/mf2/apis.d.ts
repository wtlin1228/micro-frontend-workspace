
    export type RemoteKeys = 'mf2';
    type PackageType<T> = T extends 'mf2' ? typeof import('mf2') :any;
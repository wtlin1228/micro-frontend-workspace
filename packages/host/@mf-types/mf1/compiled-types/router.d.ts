export declare const getRouter: ({ basepath }: {
    basepath: string;
}) => import("@tanstack/router-core").RouterCore<import("@tanstack/router-core").Route<any, "/", "/", string, "__root__", undefined, {}, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, import("./routeTree.gen").RootRouteChildren, import("./routeTree.gen").FileRouteTypes>, "never", false, import("@tanstack/history").RouterHistory, Record<string, any>>;
export type RouterType = ReturnType<typeof getRouter>;
declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof getRouter>;
    }
}

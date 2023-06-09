export interface IRoutesSidebar {
    name: string;
    path: string;
}

export interface IDrawer {
    open: boolean;
    routes: Array<IRoutesSidebar>;
    onClose: () => void;
}
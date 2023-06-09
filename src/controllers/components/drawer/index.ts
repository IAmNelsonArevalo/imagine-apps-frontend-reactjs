import React from "react";
/** Interfaces & Types */
import { IRoutesSidebar } from "models/interfaces/components/drawer.interfaces";

const useDrawer = () => {
    /** Variables */
    const routes: Array<IRoutesSidebar> = [
        {
            name: "Productos",
            path: "/admin/products"
        },
        {
            name: "Ir A La Tienda",
            path: "/"
        }
    ];

    /** States */
    const [open, setOpen] = React.useState<boolean>(false);

    /**
     * Opens the drawer.
     * @function
     * @returns {void}
     */
    const openDrawer = () => setOpen(true);

    /**
     * Closes the drawer.
     * @function
     * @returns {void}
     */
    const closeDrawer = () => setOpen(false);

    return {
        open,
        routes,
        openDrawer,
        closeDrawer
    };
}

export default useDrawer;
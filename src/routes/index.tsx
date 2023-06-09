import React from "react";
import { RouterProvider } from "react-router-dom";
/** Local Modules */
import useRouterPaths from "./router";
import useControllers from "controllers";


const Router = () => {
    /** Hook */
    const { router } = useRouterPaths();

    return (
        <RouterProvider router={router} />
    );
}

export default Router;
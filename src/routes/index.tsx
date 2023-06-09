import { RouterProvider } from "react-router-dom";
/** Local Modules */
import useRouterPaths from "./router";


const Router = () => {
    /** Hook */
    const { router } = useRouterPaths();

    return (
        <RouterProvider router={router} />
    );
}

export default Router;
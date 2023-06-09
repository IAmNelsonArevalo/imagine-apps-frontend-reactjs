import { createBrowserRouter } from "react-router-dom";
/** Local Modules */
import useViews from "views";
import PublicRoute from "./PublicRoute";

const useRouterPaths = () => {
    const { usePages } = useViews();
    const Pages = usePages();


    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoute component={Pages.Home} />
        }
    ]);

    return {
        router
    }

}



export default useRouterPaths;
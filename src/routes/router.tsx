import { createBrowserRouter } from "react-router-dom";
/** Local Modules */
import useViews from "views";
import PublicRoute from "./PublicRoute";

const useRouterPaths = () => {
    const { usePages, useLayouts } = useViews();
    const Layouts = useLayouts();
    const Pages = usePages();


    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoute component={Pages.Home} Layout={Layouts.ShopLayout}/>,

        },
        {
            path: "admin",
            children: [
                {
                    path: "products",
                    element: <PublicRoute component={Pages.Products} Layout={Layouts.DashboardLayout} />
                }
            ]

        }
    ]);

    return {
        router
    }

}



export default useRouterPaths;
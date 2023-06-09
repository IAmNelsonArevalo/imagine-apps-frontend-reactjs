import useCartButton from "./cart-button";
import useDrawer from "./drawer";
import useRoutes from "./routes";

const useComponentsHooks = () => {
    return {
        useDrawer,
        useRoutes,
        useCartButton
    };
}

export default useComponentsHooks;
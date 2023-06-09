import { useSelector } from "react-redux";
/** Selectors */
import useAuthSelectors from "./auth";
import useProductsSelectors from "./products";

const useSelectors = () => {
    return {
        useSelector,
        useAuthSelectors,
        useProductsSelectors
    };
}

export default useSelectors;
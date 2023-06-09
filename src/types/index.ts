import useAuthTypes from "./auth";
import useProductsTypes from "./products";

const useTypes = () => {
    return {
        useAuthTypes,
        useProductsTypes
    };
}

export default useTypes;
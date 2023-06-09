import axios from "axios";
import useAuthProviders from "./auth";
import useProductsProviders from "./products";

const useProviders = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api'
    return {
        useAuthProviders,
        useProductsProviders,
    };
}

export default useProviders;
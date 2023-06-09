import { gql, useApolloClient } from "@apollo/client";
import axios from "axios";
/** Local Modules */
import useConfig from "config";
import { trackPromise } from "react-promise-tracker";

const useAuthProviders = () => {
    /** Config */
    const { useGraphql } = useConfig();
    const { adminProductsClient } = useGraphql();

    /** Variables */
    const instance = useApolloClient(adminProductsClient);

    /**
     * Makes a request to create a new user.
     * @param {any} data - The name of the user.
     * @returns {Promise} - A promise that resolves with the created user data.
     */
    const createUser = (data: any): Promise<any> => {
        const request = axios.post('/auth/register', data);
        return trackPromise(request);
    };

    const login = (data: any): Promise<any> => {
        const request = axios.post('/auth/login', data);
        return trackPromise(request);
    };

    return {
        createUser,
        login
    };
}

export default useAuthProviders;
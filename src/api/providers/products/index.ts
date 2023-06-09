import axios from "axios";
import { useApolloClient, gql } from "@apollo/client";
import { trackPromise } from "react-promise-tracker";
/** Local Modules */
import useConfig from "config";

const useProductsProviders = () => {
  /** Config */
  const { useGraphql } = useConfig();
  const { adminProductsClient } = useGraphql();

  /** Variables */
  const instance = useApolloClient(adminProductsClient);

  const getAllProducts = () => {
    const request = axios.get('/admin/products/get-all-products');
    return trackPromise(request);
  }

  const createProduct = (data: any) => {
    const request = axios.post('/admin/products/create-product', data);

    return trackPromise(request);
  }


  const getActiveProducts = () => {
    const request = axios.get('/products/get-products');
    return trackPromise(request);
  }

  return {
    getAllProducts,
    createProduct,
    getActiveProducts
  };
}

export default useProductsProviders;
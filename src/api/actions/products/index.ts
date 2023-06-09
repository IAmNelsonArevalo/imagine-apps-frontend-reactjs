/** Local Modules */
import useApi from "api";
import useTypes from "types";
/** Interfaces & Types */
import { TAction, TRequest } from "models/interfaces/general.interfaces";
import { Dispatch } from "react";

const useProductsActions = () => {
    /** Api */
    const { useProviders } = useApi();
    const { useProductsProviders } = useProviders();
    const { getAllProducts, createProduct, getActiveProducts } = useProductsProviders();

    /** Types */
    const { useProductsTypes } = useTypes();
    const {
        GET_ALL_PRODUCTS,
        SET_REFERENCE_CREATE_REFERENCE,
        SAVE_SHOPPING_CART,
        GET_ACTIVE_PRODUCTS
    } = useProductsTypes();

    const actGetAllProducts = (args: TRequest<any>) => {
        const { onError } = args;

        return async (dispatch: Dispatch<TAction<any>>) => {
            try {
                const res: any = await getAllProducts();

                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: res.data.data
                })
            } catch (error) {
                onError && onError(error);
            }
        }
    }

    const actSetReferenceCreateProduct = (args: TRequest<any>) => {
        const { onError, data } = args;

        return async (dispatch: Dispatch<TAction<any>>) => {
            try {
                dispatch({
                    type: SET_REFERENCE_CREATE_REFERENCE,
                    payload: data
                })
            } catch (error) {
                onError && onError(error);
            }
        }
    }

    const actCreateProduct = (args: TRequest<any>) => {
        const { data, onError, onSuccess } = args;

        return async (dispatch: Dispatch<TAction<any>>) => {
            try {
                const res = await createProduct(data);

                onSuccess && onSuccess(res);
            } catch (error) {
                onError && onError(error);
            }
        }
    }

    const actSaveShoppingCart = (args: TRequest<any>) => {
        const { data, onError, onSuccess } = args;

        return async (dispatch: Dispatch<TAction<any>>) => {
            try {
                const res = await createProduct(data);

                dispatch({
                    type: SAVE_SHOPPING_CART,
                    payload: DataView
                });

                onSuccess && onSuccess(res);
            } catch (error) {
                onError && onError(error);
            }
        }
    }

    const actGetActiveProducts = (args: TRequest<any>) => {
        const { onError } = args;

        return async (dispatch: Dispatch<TAction<any>>) => {
            try {
                const res = await getActiveProducts();

                dispatch({
                    type: GET_ACTIVE_PRODUCTS,
                    payload: res.data.data
                });

            } catch (error) {
                onError && onError(error);
            }
        }
    }

    const actSetShoppingCart = (args: TRequest<any>) => {
        const { data, onError, onSuccess } = args;

        return async (dispatch: Dispatch<TAction<any>>) => {
            try {
                dispatch({
                    type: GET_ACTIVE_PRODUCTS,
                    payload: data
                });

                onSuccess && onSuccess()
            } catch (error) {
                onError && onError(error);
            }
        }
    }

    return {
        actGetAllProducts,
        actSetReferenceCreateProduct,
        actCreateProduct,
        actSaveShoppingCart,
        actGetActiveProducts,
        actSetShoppingCart
    };
}

export default useProductsActions;
/** Local Modules */
import useHelpers from "helpers";
import useTypes from "types";
/** Interfaces & Types */
import type { TAction, TStates } from "models/interfaces/general.interfaces";

const useProductsReducers = () => {
    /** Helpers */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    /** Types */
    const { useProductsTypes } = useTypes();
    const { GET_ALL_PRODUCTS, SET_REFERENCE_CREATE_REFERENCE, GET_ACTIVE_PRODUCTS } = useProductsTypes();

    const allProducts = createReducer({ products: [] }, {
        [GET_ALL_PRODUCTS](state: TStates, action: TAction<any>) {
            return {
                ...state,
                products: action.payload
            }
        }
    })

    const referencesCreateReference = createReducer({ references: [] }, {
        [SET_REFERENCE_CREATE_REFERENCE](state: TStates, action: TAction<any>) {
            return {
                ...state,
                references: action.payload
            }
        }
    });

    const shoppingCart = createReducer({ cart: {total: 0, products: [], items: 0} }, {
        [SET_REFERENCE_CREATE_REFERENCE](state: TStates, action: TAction<any>) {
            return {
                ...state,
                cart: action.payload
            }
        }
    })

    const activeProducts = createReducer({ products: [] }, {
        [GET_ACTIVE_PRODUCTS](state: TStates, action: TAction<any>) {
            return {
                ...state,
                products: action.payload
            }
        }
    })

    return {
        allProducts,
        referencesCreateReference,
        shoppingCart,
        activeProducts
    };
}

export default useProductsReducers;
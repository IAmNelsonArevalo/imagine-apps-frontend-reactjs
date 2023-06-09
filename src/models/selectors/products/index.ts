/** Interfaces & Types */
import type { TStates } from "models/interfaces/general.interfaces";
/** Local Modules */
import useHelpers from "helpers";
/** Interfaces & Types */
import { IShoppingCart } from "models/interfaces/components/cart-button.interfaces";

const useProductsSelectors = () => {
    /** Helpers */
    const { useCreateSelector } = useHelpers();
    const { createSelector } = useCreateSelector();

    const allProductsSelector = createSelector(
        (state: TStates) => state.allProducts,
        (allProducts: any) => allProducts.products
    );

    const referencesCreateProductSelector = createSelector(
        (state: any) => state.referencesCreateReference,
        (referencesCreateReference: any) => referencesCreateReference.references
    );

    const shoppingCartSelector = createSelector(
        (state: any) => state.shoppingCart,
        (shoppingCart: {cart: IShoppingCart}) => shoppingCart.cart
    );

    const activeProductsSelector = createSelector(
        (state: any) => state.activeProducts,
        (activeProducts: any) => activeProducts.products
    );


    return {
        allProductsSelector,
        referencesCreateProductSelector,
        shoppingCartSelector,
        activeProductsSelector
    };
}

export default useProductsSelectors;
import useApi from "api";
import useModels from "models";
import { useCallback } from "react";

const useHome = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useProductsActions } = useActions();
    const { actGetActiveProducts, actSetShoppingCart } = useProductsActions();

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useProductsSelectors } = useSelectors();
    const { activeProductsSelector, shoppingCartSelector } = useProductsSelectors();
    const products = useSelector(activeProductsSelector);
    const cart = useSelector(shoppingCartSelector);

    const getProducts = useCallback(() => {
        dispatch(actGetActiveProducts({
            onError: (error: any) => console.error("GET_ACTIVE_PRODUCTS: ", error)
        }))
    }, []);

    const getMinValue = (array: Array<any>) => {
        let minValue = parseInt(array[0].price); // Asignar el primer elemento como valor inicial mínimo

        for (let i = 1; i < array.length; i++) {
            if (parseInt(array[i].price) < minValue) {
                minValue = parseInt(array[i].price); // Actualizar el valor mínimo si se encuentra un valor más bajo
            }
        }

        return minValue;
    }

    const setToCart = (item: any, quantity: any) => {
        
        let product = cart.products.find((product) => product.id === item.id);
        console.log('ite',  cart.products)

        if (product) {
            product.quantity += 1;
            cart.total = cart.total + parseInt(item.price);
            dispatch(actSetShoppingCart({
                data: cart,
                onError: (error: any) => console.error("SHOPPING_CART: ", error)
            }))
        } else {
            let newItem = { ...item, quantity }
            cart.total = cart.total + parseInt(item.price);
            cart.items = cart.products.length + 1;
            cart.products.push(newItem);

            dispatch(actSetShoppingCart({
                data: cart,
                onError: (error: any) => console.error("SHOPPING_CART: ", error)
            }))
        }

    }

    return {
        products,
        getProducts,
        getMinValue,
        setToCart

    };
}

export default useHome;
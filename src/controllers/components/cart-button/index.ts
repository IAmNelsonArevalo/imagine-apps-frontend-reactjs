import React from "react";
import { useNavigate } from "react-router-dom";
/** Local Modules */
import useModels from "models";

const useCartButton = () => {
    /** Variables */
    const router = useNavigate();

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useProductsSelectors, useAuthSelectors } = useSelectors();
    const { authSelector } = useAuthSelectors();
    const { shoppingCartSelector } = useProductsSelectors();
    const { token } = useSelector(authSelector);
    const cart = useSelector(shoppingCartSelector);

    /** States */
    const [showTooltip, setShowTooltip] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);

    const validateToCheckout = () => {
        if(!token || token === "") {
            setOpen(false);
            document.getElementById('login')!.style.display = "flex";
        } else {
            setOpen(false);
            router('/checkout');
        }
    }

    return {
        cart,
        open,
        showTooltip,
        setShowTooltip,
        setOpen,
        validateToCheckout,
    };
}

export default useCartButton;
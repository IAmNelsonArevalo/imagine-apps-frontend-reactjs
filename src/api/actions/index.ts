import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import useProductsActions from "./products";
import useAuthActions from "./auth";

const useActions = () => {
    const dispatch: Dispatch<any> = useDispatch();

    return {
        dispatch,
        useAuthActions,
        useProductsActions
    };
}

export default useActions;
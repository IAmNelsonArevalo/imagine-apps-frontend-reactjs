import { useNavigate } from "react-router-dom";
/** Local Modules */
import useModels from "models";

const useRoutes = () => {
    /** Variables */
    const router = useNavigate();
    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useAuthSelectors} = useSelectors();
    const {authSelector} = useAuthSelectors();
    const {token} = useSelector(authSelector);

    const validateToken = () => {
        if(!token || token === "") {
            router('/login');
        }
    }

    return {
        validateToken,
    };
}

export default useRoutes;
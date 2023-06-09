import useHome from "./home";
import useLogin from "./login";
import useProducts from "./products";
import useRegister from "./register";

const useScreenHooks = () => {
    return {
        useProducts,
        useRegister,
        useLogin,
        useHome
    };
}

export default useScreenHooks;
import useComponentsHooks from "./components";
import useScreenHooks from "./screens";

const useControllers = () => {
    return {
        useComponentsHooks,
        useScreenHooks
    };
}

export default useControllers;
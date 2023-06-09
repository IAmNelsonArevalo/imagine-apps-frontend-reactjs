import useComponents from "./components";
import useLayouts from "./layouts";
import usePages from "./pages";

const useViews = () => {
    return {
        usePages,
        useLayouts,
        useComponents
    };
}

export default useViews;
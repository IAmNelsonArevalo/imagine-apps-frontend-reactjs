import persistedReducer from "./reducers";
import useSelectors from "./selectors";

const useModels = () => {
    return {
        persistedReducer,
        useSelectors
    };
}

export default useModels;
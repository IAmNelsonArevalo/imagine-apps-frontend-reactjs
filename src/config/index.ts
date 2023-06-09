import useGraphql from "./graphql";
import useRedux from "./redux";

const useConfig = () => {
    return {
        useGraphql,
        useRedux,
    };
}

export default useConfig;
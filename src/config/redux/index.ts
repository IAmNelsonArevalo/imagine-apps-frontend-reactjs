import {applyMiddleware, createStore} from "redux";
import {persistStore} from "redux-persist";
import useModels from "models";
import * as process from "process";
import thunk from "redux-thunk";

const useRedux = () => {
    /** Models */
    const {persistedReducer} = useModels();

    const bindMiddleware = (middleware: any) => {
        if(process.env.NODE_ENV !== "production") {
            const {composeWithDevTools} = require('redux-devtools-extension');
            return composeWithDevTools(applyMiddleware(...middleware));
        }
    }

    const store = createStore(persistedReducer, bindMiddleware([thunk]));
    const persist = persistStore(store);

    return {
        store,
        persist
    };
}

export default useRedux;
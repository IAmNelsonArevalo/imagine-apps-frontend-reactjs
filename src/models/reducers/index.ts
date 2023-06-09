import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
/** Reducers */
import useAuthReducers from "./auth";

const useReducers = () => {
    return combineReducers({
        ...useAuthReducers()
    });
}

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, useReducers);

export default persistedReducer;
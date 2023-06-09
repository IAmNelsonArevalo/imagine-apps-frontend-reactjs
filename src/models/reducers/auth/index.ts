/** Local Modules */
import useHelpers from "helpers";
import useTypes from "types";
/** Interfaces & Types */
import type { TAction, TStates } from "models/interfaces/general.interfaces";
import type { IAuth } from "models/interfaces/auth.interfaces";

const useAuthReducers = () => {
    /** Helpers */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    /** Types */
    const { useAuthTypes } = useTypes();
    const { LOGIN } = useAuthTypes();

    /**
     * Creates a reducer function for managing authentication state.
     *
     * @param {Object} initialState - The initial state for the authentication.
     * @param {Object} handlers - An object containing the action handlers.
     * @returns {Function} - The reducer function.
     */
    const auth = createReducer({ token: "", user: {} }, {
        /**
         * Handles the LOGIN action to update the authentication state.
         *
         * @param {Object} state - The current state of the reducer.
         * @param {Object} action - The action object containing the payload.
         * @returns {Object} - The updated state after handling the action.
         */
        [LOGIN](state: TStates, action: TAction<IAuth>) {
            return {
                ...state,
                ...action.payload
            }
        }
    });

    return {
        auth
    };
}

export default useAuthReducers;
/** Local Modules */
import useHelpers from "helpers";
/** Interfaces & Types */
import type { TStates } from "models/interfaces/general.interfaces";
import type { IAuth } from "models/interfaces/auth.interfaces";

const useAuthSelectors = () => {
    /** Helpers */
    const { useCreateSelector } = useHelpers();
    const { createSelector } = useCreateSelector();

    /**
     * Creates a selector function for retrieving the auth state from the given TStates state object.
     * @param {TStates} state - The state object.
     * @returns {IAuth} - The auth state.
     */
    const authSelector = createSelector(
        (state: TStates) => state.auth,
        (auth: IAuth) => auth
    );

    return {
        authSelector
    };
}

export default useAuthSelectors;
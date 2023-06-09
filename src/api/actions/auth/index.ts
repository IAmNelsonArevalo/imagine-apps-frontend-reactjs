import useApi from "api";
import useTypes from "types";
/** Interfaces & Types */
import type { Dispatch } from "redux";
import type { TAction, TRequest } from "models/interfaces/general.interfaces";

const useAuthActions = () => {
    /** Api */
    const { useProviders } = useApi();
    const { useAuthProviders } = useProviders();
    const { createUser, login } = useAuthProviders();

    /** Types */
    const { useAuthTypes } = useTypes();
    const {LOGIN} = useAuthTypes();

    /**
     * Action to create a user.
     * @param {TRequest<CreateUserVariables>} args - The arguments for the action.
     * @param {Function} args.onError - Callback function to handle errors.
     * @param {string} args.name - The name of the user.
     * @param {string} args.email - The email of the user.
     * @param {string} args.password - The password of the user.
     * @param {string} args.phone - The phone number of the user.
     * @param {string} args.document - The document of the user.
     * @returns {Function} - An async function that dispatches the action.
     */
    const createUserAction = (args: TRequest<any>): Function => {
        const { onError, data, onSuccess } = args;

        return async (dispatch: Dispatch<TAction<any>>) => {
            try {
                const res: any = await createUser(data);

                onSuccess && onSuccess(res)
            } catch (error) {
                onError && onError(error);
            }
        };
    }

    const loginAction = (args: TRequest<any>): Function => {
        const { onError, data, onSuccess } = args;

        return async (dispatch: Dispatch<TAction<any>>) => {
            try {
                const res: any = await login(data);

                dispatch({
                    type: LOGIN,
                    payload: res.data.data
                })
                onSuccess && onSuccess(res)
            } catch (error) {
                onError && onError(error);
            }
        };
    }

    return {
        createUserAction,
        loginAction
    };
}

export default useAuthActions;
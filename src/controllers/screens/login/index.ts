/** Local Modules */
import useApi from "api";
import useModels from "models";
import { useForm } from "react-hook-form";

const useLogin = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { loginAction } = useAuthActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useAuthSelectors} = useSelectors();
    const {authSelector} = useAuthSelectors();
    const {token, user} = useSelector(authSelector);

    /** Use Form */
    const {reset, register, handleSubmit} = useForm({mode: "onChange"});

    const handleRegister = handleSubmit((data: any) => {
        dispatch(loginAction({
            data,
            onError: (error: any) => console.error('REGISTER: ', error),
            onSuccess: () => {
                reset();
                document.getElementById('login')!.style.display = "none";
            }
        }))
    })

    return {
        register,
        handleRegister,
        token,
        user
    };
}

export default useLogin;
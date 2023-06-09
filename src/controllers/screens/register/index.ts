/** Local Modules */
import useApi from "api";
import { useForm } from "react-hook-form";

const useRegister = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { createUserAction } = useAuthActions();

    /** Use Form */
    const {reset, register, handleSubmit} = useForm({mode: "onChange"});

    const handleRegister = handleSubmit((data: any) => {
        dispatch(createUserAction({
            data,
            onError: (error: any) => console.error('REGISTER: ', error),
            onSuccess: () => {
                reset();
                document.getElementById('register')!.style.display = "none";
                document.getElementById('login')!.style.display = "flex";
            }
        }))
    })

    return {
        register,
        handleRegister
    };
}

export default useRegister;
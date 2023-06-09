import useControllers from "controllers";
import RegisterStyles from "../Register/Register.styles";

const Login = () => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useLogin } = useScreenHooks();
    const { register, handleRegister } = useLogin();

    return (
        <div className="relative z-10 hidden" id="login" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg w-full">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                        Regístrate en tu cuenta.
                                    </h2>
                                </div>

                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <form className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                                Correo electronico
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    {...register('email')}
                                                    required
                                                    className="px-[10px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                                Contrasena
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    {...register('password')}
                                                    type="password"
                                                    required className="px-[10px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <RegisterStyles.Button onClick={handleRegister}>
                                                Ingresar!
                                            </RegisterStyles.Button >
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
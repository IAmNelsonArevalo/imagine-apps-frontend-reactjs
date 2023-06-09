import React from "react";
import {
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Navbar,
    Typography
} from "@material-tailwind/react";
import Register from "../Register/Register";
import Login from "../Login";
import useControllers from "controllers";

const Header: React.FC = (): JSX.Element => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useLogin } = useScreenHooks();
    const { token, user } = useLogin();
    return (
        <React.Fragment>
            <Navbar className="relative inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Imagine Shopping
                    </Typography>

                    {
                        token !== "" ? (
                            <Menu>
                                <MenuHandler>
                                    <div className="flex justify-center items-center gap-[20px]">
                                        <img src="/avatar.png" alt="" className="w-[50px] h-[50px] rounded-[100%]" />
                                        <p className="font-semibold">{user.name}</p>
                                    </div>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Mis Pedidos</MenuItem>
                                    <MenuItem>Cerrar Sesion</MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <div className="flex items-center">
                                <div className="mx-[10px] font-semibold cursor-pointer" onClick={() => {
                                    document.getElementById('login')!.style.display = "block";
                                    document.getElementById('register')!.style.display = "none";
                                }}>Ingreso</div>
                                <div className="mx-[10px] font-semibold  cursor-pointer" onClick={() => {
                                    document.getElementById('login')!.style.display = "none";
                                    document.getElementById('register')!.style.display = "block";
                                }}>Registro</div>
                            </div>
                        )
                    }


                </div>
            </Navbar>
            <Register />
            <Login />
        </React.Fragment>
    );
}

export default Header;
import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
/** Local Modules */
import useControllers from "controllers";

const CartButton: React.FC = (): JSX.Element => {
    /** Controllers */
    const { useComponentsHooks } = useControllers();
    const { useCartButton } = useComponentsHooks();
    const { cart, open, showTooltip, validateToCheckout, setShowTooltip, setOpen } = useCartButton();

    const [total, setTotal] = React.useState<number>(0);

    function calculateTotal(products: any) {
        let total = 0;

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            total += parseInt(product.references[0].price) * product.quantity;
        }

        return total;
    }

    return (
        <React.Fragment>
            <div className="fixed bottom-[5%] max-500:right-[8%] right-[3%]">
                <button
                    className="w-[70px] h-[70px] bg-indigo-600 rounded-full flex items-center justify-center text-white focus:outline-none shadow-lg"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={() => setOpen(true)}
                >
                    <div className="absolute top-[-20%] right-[-5%] bg-[#D50000] w-[30px] h-[30px] rounded-[100%] flex justify-center items-center">
                        <h3>{cart.items}</h3>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
                {showTooltip && (
                    <div className="absolute top-[-40%] right-[104%] mt-12 ml-1 px-2 py-1 bg-gray-800 text-white rounded text-sm w-[150px]">
                        Cart Value: {cart.total}
                    </div>
                )}
            </div>
            <Transition.Root show={open} as={React.Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={React.Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg text-gray-900 font-bold">Tu carrito de compras</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {cart.products.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={product.images[0].url}
                                                                            alt={product.imageAlt}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <a href={product.href}>{product.name}</a>
                                                                                </h3>
                                                                                <p className="ml-4">$ {product.references[0].price}</p>
                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <p className="text-gray-500">Cantidad {product.quantity}</p>

                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>$ {calculateTotal(cart.products).toLocaleString('co-ES')}</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Este valor es solo el valor del carrito de compras sin impuestos.</p>
                                                <div className="mt-6">
                                                    <a
                                                        href="#"
                                                        onClick={validateToCheckout}
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base text-white shadow-sm hover:bg-indigo-700 text-semibold"
                                                    >
                                                        Ir a pagar!
                                                    </a>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        or
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500 ml-[10px]"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            Continuar comprando
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </React.Fragment>
    );
}

export default CartButton;
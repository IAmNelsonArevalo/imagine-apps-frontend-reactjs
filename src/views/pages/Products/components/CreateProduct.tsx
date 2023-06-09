import React from "react";
/** Interfaces & Types */
import type { ICreateProduct } from "./ProductComponents.interfaces";

const CreateProduct: React.FC<ICreateProduct> = ({
    onClose,
    onSubmit,
    open,
    register,
    references,
    addReference,
    removeReference
}): JSX.Element => {
    return (
        <div className={`bg-gray-500 bg-opacity-50 absolute inset-0 ${open ? 'flex' : 'hidden'} justify-center items-center w-screen h-screen`}>
            <div className={`inset-0 items-center justify-center z-50  max-w-[800px] w-full `}>
                <div className="bg-white p-4 rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Crear Producto</h2>

                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Nombre del Producto
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name')}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                                Descripción
                            </label>
                            <textarea
                                id="description"
                                {...register('description')}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2">Referencias</h3>
                            <table className="w-full mb-2">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Nombre</th>
                                        <th className="px-4 py-2">Precio</th>
                                        <th className="px-4 py-2">Stock</th>
                                        <th className="px-4 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {references.map((reference, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(`references.${index}.name`)}
                                                    className="w-full px-4 py-2 bg-[red]"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(`references.${index}.price`)}
                                                    className="w-full px-4 py-2"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(`references.${index}.stock`)}
                                                    className="w-full px-4 py-2"
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => removeReference(index)}
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                type="button"
                                onClick={addReference}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Agregar Referencia
                            </button>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="mr-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;
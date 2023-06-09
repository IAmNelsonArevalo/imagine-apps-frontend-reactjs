import React from "react";
/** Local Modules */
import useControllers from "controllers";
import { Card } from "@material-tailwind/react";
import CreateProduct from "./components/CreateProduct";
import _ from "lodash";

const Products: React.FC = (): JSX.Element => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useProducts } = useScreenHooks();
    const { expandedRows, products, isModalOpen, references, handleGetAllProducts, toggleRow, openModal, register, closeModal, handleCreateProduct, addReference, removeReference } = useProducts();

    React.useEffect(() => {
        handleGetAllProducts();
    }, []);

    return (
        <React.Fragment>
            <Card className="p-[20px]">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
                    Crear Producto
                </button>
                <table className="min-w-full divide-y divide-gray-200 mt-[20px]">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((item: any) => (
                            <React.Fragment key={item.id}>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-black text-[14px] text-center">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-black text-[14px] text-center">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-black text-[14px] text-center">{item.description}</td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-white text-[14px] text-center`}>
                                        <p style={{ background: item.status?.color_status }} className="flex justify-center items-center font-semibold h-[30px] rounded-[10px] max-w-[100px] cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>

                                            <span className="ml-[10px]">{item.status?.translation_status}</span>
                                        </p>

                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center">
                                        <button
                                            className="text-indigo-600 hover:text-indigo-900 text-[14px] bg-indigo-500 rounded-[10px] font-semibold text-white w-[100%] max-w-[150px] h-[30px]"
                                            onClick={() => toggleRow(item.id)}
                                        >
                                            Ver Referencias
                                        </button>
                                    </td>
                                </tr>
                                {expandedRows.includes(item.id) && (
                                    <tr>
                                        <td colSpan={10}>
                                            <table className="min-w-full divide-y divide-gray-200 mt-[20px]">
                                                <thead className="bg-gray-50">
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        ID
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Referencia
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Precio
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Stock
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Estado
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Options
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        _.map(item.references, (reference: any, index: number) => (
                                                            <tr key={index}>
                                                                <td className="px-6 py-4 whitespace-nowrap text-black text-[14px] text-center">{reference.id}</td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-black text-[14px] text-center">{reference.reference}</td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-black text-[14px] text-center">{reference.price}</td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-black text-[14px] text-center">{reference.stock}</td>
                                                                <td className={`px-6 py-4 whitespace-nowrap text-white text-[14px] text-center`}>
                                                                    <p style={{ background: item.status?.color_status }} className="flex justify-center items-center font-semibold h-[30px] rounded-[10px] max-w-[100px] cursor-pointer">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                        </svg>

                                                                        <span className="ml-[10px]">{item.status?.translation_status}</span>
                                                                    </p>

                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center">
                                                                    <button
                                                                        className="text-indigo-600 hover:text-indigo-900 text-[14px] bg-indigo-500 rounded-[10px] font-semibold text-white w-[100%] max-w-[150px] h-[30px]  justify-center items-center flex"
                                                                        onClick={() => toggleRow(item.id)}
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                        </svg>
                                                                        <span className="ml-[10px]">
                                                                            Editar
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                )}
                                {expandedRows.includes(item.id) && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-4">
                                            <div className="max-h-400 overflow-y-auto">
                                                {item.images.map((image: any) => (
                                                    <img key={image} src={image} alt="Product Image" className="h-40 w-auto" />
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </Card>
            <CreateProduct
                onClose={closeModal}
                onSubmit={handleCreateProduct}
                open={isModalOpen}
                register={register}
                references={references}
                addReference={addReference}
                removeReference={removeReference}
            />
        </React.Fragment>
    )
}

export default Products;
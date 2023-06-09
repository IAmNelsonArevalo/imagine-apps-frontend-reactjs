import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
/** Local Modules */
import useApi from "api";
import useModels from "models";
import Swal from "sweetalert2";

const useProducts = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useProductsActions } = useActions();
    const { actGetAllProducts, actSetReferenceCreateProduct, actCreateProduct } = useProductsActions();

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useProductsSelectors } = useSelectors();
    const { allProductsSelector, referencesCreateProductSelector } = useProductsSelectors();
    const products = useSelector(allProductsSelector);
    const references = useSelector(referencesCreateProductSelector);

    /** States */
    const [expandedRows, setExpandedRows] = React.useState<Array<number>>([]);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    /** Use Form */
    const { register, reset, handleSubmit } = useForm({ mode: "onChange" });

    /**
     * Handles the action to get all products.
     *
     * @function handleGetAllProducts
     * @callback
     * @returns {void}
     */
    const handleGetAllProducts = useCallback(() => {
        dispatch(actGetAllProducts({
            onError: (error: any) => console.error('GET_ALL_PRODUCTS: ', error)
        }));
    }, []);

    const toggleRow = (productId: number) => {
        const index = expandedRows.indexOf(productId);
        if (index > -1) {
            setExpandedRows((prevState) => prevState.filter((rowId) => rowId !== productId));
        } else {
            setExpandedRows((prevState) => [...prevState, productId]);
        }
    };

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateProduct = handleSubmit((data: any) => {
        console.log(data)
        if (data.name === "" || data.description === "" || !data.name || !data.description) {
            Swal.fire({
                icon: "error",
                text: "Debes ingresar al menos un nombre y una descripcion al producto.",
                title: "Completa los campos"
            });
        } else {
            dispatch(
                actCreateProduct({
                    data,
                    onError: (error) => console.error('CREATE_PRODUCT: ', error),
                    onSuccess: () => {
                        reset();
                        dispatch(actGetAllProducts({
                            onError: (error: any) => console.error('GET_ALL_PRODUCTS_POST_CREATE_PRODUCT: ', error)
                        }));
                        dispatch(actSetReferenceCreateProduct({
                            data: []
                        }));
                        setIsModalOpen(false);
                    }
                })
            )
        }
    });

    const removeReference = (index: number) => {
        let newReferences = [...references];
        newReferences.splice(index, 1);

        dispatch(actSetReferenceCreateProduct({
            data: newReferences,
        }));
    };

    const addReference = () => {
        let newReferences = [...references]
        newReferences.push({ name: '1', price: '2', stock: '3' });

        dispatch(actSetReferenceCreateProduct({
            data: newReferences
        }));
    };

    return {
        products,
        expandedRows,
        isModalOpen,
        references,
        handleGetAllProducts,
        toggleRow,
        openModal,
        register,
        handleCreateProduct,
        closeModal,
        removeReference,
        addReference
    };
}

export default useProducts;
export interface ICreateProduct {
    register: any;
    onSubmit: any;
    open: boolean;
    onClose: () => void; 
    references: Array<any>;
    addReference: (prop?: any) => void;
    removeReference: (index: number) => void;
}

export interface IEditProduct {
    
}
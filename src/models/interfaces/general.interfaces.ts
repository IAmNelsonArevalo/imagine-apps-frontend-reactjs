import { IAuth } from "./auth.interfaces"

export type TStates = {
    auth: IAuth;
    allProducts: any;
}

export type TAction<T> = {
    type: string;
    payload: T;
}

export type TRequest<T> = {
    data?: T,
    onError?: (error?: any) => void;
    onSuccess?: (data?: any) => void;
}
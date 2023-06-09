import { IAuth } from "./auth.interfaces"

export type TStates = {
    auth: IAuth;
}

export type TAction<T> = {
    type: string;
    payload: T;
}
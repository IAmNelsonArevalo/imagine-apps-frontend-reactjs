export interface IUser {
    name: string;
}

export interface IAuth {
    token: string;
    user: IUser;
}
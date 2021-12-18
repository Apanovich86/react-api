import {array} from "yup";

export enum AuthActionTypes {
    REGISTER = "REGISTER",
}

export interface IRegisterModel {
    name: string,
    email: string,
    password: string,
    confirmpassword: string,
    photo: string
}

export interface IUser {
    email: string
}

export interface AuthState {
    user: IUser|null,
    isAuth: boolean
}

export interface RegisterAuthAction {
    type: AuthActionTypes.REGISTER,
    payload: IUser
}

export type AuthAction = RegisterAuthAction;

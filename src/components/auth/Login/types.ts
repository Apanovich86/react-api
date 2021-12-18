export enum AuthActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    REGISTER = "REGISTER",
}

export interface ILoginModel {
    email: string,
    password: string
}

export interface IUser {
    email: string
}

export interface AuthState {
    user: IUser|null,
    isAuth: boolean
}

export interface LoginAuthAction {
    type: AuthActionTypes.LOGIN,
    payload: IUser
}

export interface LogoutAuthAction {
    type: AuthActionTypes.LOGOUT
}

export interface IRegisterModel {
    name: string,
    email: string,
    password: string,
    confirmpassword: string
}

export interface RegisterAuthAction {
    type: AuthActionTypes.REGISTER,
    payload: IUser
}

export type AuthAction = LoginAuthAction | LogoutAuthAction | RegisterAuthAction;

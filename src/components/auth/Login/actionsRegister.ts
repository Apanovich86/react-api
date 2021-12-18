import http from '../../../http_common';
import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes, IRegisterModel } from './typesRegister';

export const RegisterUser = (data: IRegisterModel) => async(dispatch: Dispatch<AuthAction>) => {

    try {

        const resp = await http.post("api/auth/register", data);

        dispatch({
            type: AuthActionTypes.REGISTER,
            payload: {
                email: data.email
            }
        })
        return Promise.resolve();
    }
    catch(ex) {
        return Promise.reject();
    }
}

import http from '../../../http_common';
import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes, ILoginModel } from './types';

//actions які відбуваються в системі
export const LoginUser = (data: ILoginModel) => async(dispatch: Dispatch<AuthAction>) => { //ф-ція огорнута dispatch, в нього можна передати любий action, описаний в AuthAction;

    try {

        const resp = await http.post("api/auth/login", data);

        dispatch({
            type: AuthActionTypes.LOGIN,
            payload: {
                email: data.email //дані з форми передаються в систему
            }
        })
        return Promise.resolve();//повертає правильну відповідь
    }
    catch(ex) {
        return Promise.reject();//повертає помилкову відповідь
    }
}

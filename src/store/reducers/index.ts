import { combineReducers } from "redux";
import {authReducer} from "../../components/auth/Login/reducer";

//головний reducer
export const rootReducer = combineReducers({
    auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

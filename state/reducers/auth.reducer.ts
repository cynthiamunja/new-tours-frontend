import { createReducer, on } from "@ngrx/store";
import { authActions } from "../actions/auth.action";

export interface AuthInterface {
    loginSuccessMessage: string;
    loginErrorMessage: string;
    loginLoading: boolean;
}

const initialState: AuthInterface = {
    loginSuccessMessage: '',
    loginErrorMessage: '',
    loginLoading: false
};

export const authReducer = createReducer(
    initialState,
    on(authActions.login, (state) => ({
        ...state,
        loginErrorMessage: '',
        loginSuccessMessage: '',
        loginLoading: true
    })),

    on(authActions.loginSuccess, (state, action)=>{
        return{
            ...state,
            loginErrorMessage:'',
            loginSuccessMessage:action.response.message,
            loginLoading:false
        }
    }),
    on(authActions.loginFailure, (state, {message})=>{
        return{
            ...state,
            loginErrorMessage:message,
            loginSuccessMessage:'',
            loginLoading:false
        }
    }),
    on(authActions.register, (state)=>{
        return{
            ...state,
            registerErrorMessage:'',
            registerSuccessMessage:'',
            registerLoading:true
        }
    }),
    on(authActions.registerSuccess, (state,action)=>{
        return{
            ...state,
            registerErrorMessage:'',
            registerSuccessMessage:action.response.message,
            registerLoading:false
        }
    }),
    on(authActions.registerFailure, (state, {message})=>{
        return{
            ...state,
            registerErrorMessage:message,
            registerSuccessMessage:'',
            registerLoading:false
        }
    }),
);



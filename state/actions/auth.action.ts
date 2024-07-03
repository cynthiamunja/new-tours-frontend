import { createActionGroup, props } from "@ngrx/store";
import { addUser, loginResponse, loginUser, registerResponse } from "../../models";

export const authActions=createActionGroup({
    source:"Auth API",
    events:{
        'login':props<{user:loginUser}>(),
        'login success':props<{response:loginResponse}>(),
        'login failure':props<{message:string}>(),

        
        'register':props<{user:addUser}>(),
        'register success':props<{response:registerResponse}>(),
        'register failure':props<{message:string}>()
    }
})
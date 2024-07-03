import { createActionGroup, props } from "@ngrx/store";
import { addUser, loginResponse,  registerResponse } from "../../models";
import { hotel } from "../../models/hotels";

export const HotelActions=createActionGroup({
    source:"Auth API",
    events:{
        'add':props<{hotel:hotel}>(),
        'add success':props<{response:loginResponse}>(),
        'add failure':props<{message:string}>(),

        
        'get':props<{user:addUser}>(),
        'get success':props<{response:registerResponse}>(),
        'get failure':props<{message:string}>()
    }
})
import { createAction, createReducer, on } from "@ngrx/store"
import { Toggle } from "../actions/dummy.action"



 export interface dummmyRE{
    showParagraph:boolean,
    dummyData:string

}
const initialstate:dummmyRE={
    showParagraph:false,
    dummyData:''
    
}
export const dummyreducer=createReducer(
    initialstate,
    on(Toggle, (state)=>{
        return{
            ...state, 
            showParagraph:!state.showParagraph
        }
    })
)

export interface CounterInterface{
    count:number
}

const initialStatecount:CounterInterface={
    count:12
}
export const counterReducer = createReducer(
    initialStatecount,

    on(createAction('Increment'), (state)=>{
        return {
            ...state,
            count:state.count+1
        }
    }),
    on(createAction('Decrement'), (state)=>{
        return {
            ...state,
            count:state.count-1
        }
    }),

    on(createAction('Reset'), (state)=>{
        return {
            ...state,
            count:0
        }
    })
)
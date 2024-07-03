import { createFeatureSelector, createSelector } from "@ngrx/store";
import { dummmyRE } from "../reducers/dummy.reducer";

const dummyselector=createFeatureSelector<dummmyRE>('dummy')

export const dummyParagraphSelector=createSelector(
    dummyselector,
    (state)=>state.showParagraph
)
export const dummyDataSelector=createSelector(
    dummyselector,
    (state)=>state.dummyData
)
import {createReducer} from "redux-act";
import * as Actions from "./actions";


const initialState: boolean = false;
export const blockUIReducer = createReducer<boolean>({}, initialState)
    .on(Actions.blockUI, (state, payload) => {
        return true;
    })
    .on(Actions.unBlockUI, (state, payload) => {
        return false;
    });
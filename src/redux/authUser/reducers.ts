import {createReducer} from "redux-act";
import {AuthenticatedUser} from "../../Types";
import * as Actions from "./actions";
import {setToken} from "../../helpers/authHelper";

export interface AuthenticatedUserState {
    authUser: AuthenticatedUser
}

const initialState: AuthenticatedUserState = {
    authUser: {
        email: '',
        token: '',
        username: '',
        bio: '',
        image: ''
    }
};
export const authUserReducer = createReducer<AuthenticatedUserState>({}, initialState)
    .on(Actions.authenticateUser, (state, payload: AuthenticatedUser) => {
        setToken(payload.token);
        return {
            ...state,
            authUser: payload
        };
    });
import {createSelector} from "reselect";
import {AuthenticatedUserState} from "./reducers";
import {AuthenticatedUser, IStore} from "../../Types";

export const authenticatedUserSelector = (state: IStore): AuthenticatedUserState => state.authUser;


export const selectAuthenticatedUser = createSelector(
    authenticatedUserSelector,
    (state: AuthenticatedUserState) => state.authUser
);
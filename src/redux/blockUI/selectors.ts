import {IStore} from "../../Types";

export const selectIsLoading = (state: IStore): boolean => state.isLoading;
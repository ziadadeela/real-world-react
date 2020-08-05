import { createAction } from "redux-act";
import {AuthenticatedUser} from "../../Types";


export const authenticateUser = createAction<AuthenticatedUser>("AUTHENTICATE_USER");
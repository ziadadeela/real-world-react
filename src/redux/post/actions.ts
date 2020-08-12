import { createAction } from "redux-act";
import {PostState} from "../../Types";


export const createNewPost = createAction<PostState>("CREATE_NEW_POST");
export const createNewPostSuccess = createAction<PostState>("CREATE_NEW_POST_SUCCESS");
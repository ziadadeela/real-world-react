import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {PostState, Post} from "../Types";
import {CreatePost} from "../apis/postsAPI";
import {createNewPost, createNewPostSuccess} from "../redux/post/actions";
import {push} from 'connected-react-router'
import {blockUI, unBlockUI} from "../redux/blockUI/actions";

export interface OnCreateNewPostParams {
    type: string;
    payload: PostState;
    error: boolean;
}

export interface OnCreateNewPostSuccessParams {
    type: string;
    payload: Post;
    error: boolean;
}

export function* onCreateNewPost({payload}: OnCreateNewPostParams) {
    yield put(blockUI());
    try {
        const result = yield CreatePost(payload);
        yield put(createNewPostSuccess(result.post));
    } catch (e) {
        console.log(e);
    }
    finally {
        yield put(unBlockUI());

    }
}

export function* onCreateNewPostSuccess({payload}: OnCreateNewPostSuccessParams) {
    yield put(push(`article/${payload?.slug}`));
}


export function* createNewPostSaga() {
    yield takeLatest(createNewPost, onCreateNewPost)
}

export function* createNewPostSuccessSaga() {
    yield takeLatest(createNewPostSuccess, onCreateNewPostSuccess);
}
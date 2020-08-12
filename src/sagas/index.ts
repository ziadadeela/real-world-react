import {all} from 'redux-saga/effects'
import {createNewPostSaga, createNewPostSuccessSaga} from "./postSaga";


export default function* rootSaga() {
    yield all([
        createNewPostSaga(),
        createNewPostSuccessSaga(),
    ]);
}
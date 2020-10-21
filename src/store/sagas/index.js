import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, authCheckTimeoutSaga, authUserSaga, authCheckStateSaga, authUserChangePasswordSaga } from './auth'
import { pictureUploadSaga, pictureCreateSaga } from './picture'
import { userCreateSaga, userFetchSaga, userUpdateSaga } from './user'

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER_CHECK_TIMEOUT, authCheckTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_USER_CHECK_STATE, authCheckStateSaga),
    takeEvery(actionTypes.AUTH_USER_CHANGE_PASSWORD, authUserChangePasswordSaga)
  ])
}

export function* watchPicture() {
  yield all([
    takeEvery(actionTypes.PICTURE_UPLOAD, pictureUploadSaga),
    takeEvery(actionTypes.PICTURE_CREATE, pictureCreateSaga)
  ])
}

export function* watchUser() {
  yield all([
    takeEvery(actionTypes.USER_CREATE, userCreateSaga),
    takeEvery(actionTypes.USER_FETCH, userFetchSaga),
    takeEvery(actionTypes.USER_UPDATE, userUpdateSaga)
  ])
}

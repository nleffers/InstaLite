import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, authUserCheckTimeoutSaga, authUserSignInSaga, authCheckStateSaga, authUserSignUpSaga, authUserFetchSaga, authUserUpdateSaga, authUserChangePasswordSaga, authUserFollowSaga, authUserUnfollowSaga } from './auth'

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER_CHECK_TIMEOUT, authUserCheckTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER_SIGN_IN, authUserSignInSaga),
    takeEvery(actionTypes.AUTH_USER_CHECK_STATE, authCheckStateSaga),
    takeEvery(actionTypes.AUTH_USER_SIGN_UP, authUserSignUpSaga),
    takeEvery(actionTypes.AUTH_USER_FETCH, authUserFetchSaga),
    takeEvery(actionTypes.AUTH_USER_UPDATE, authUserUpdateSaga),
    takeEvery(actionTypes.AUTH_USER_FOLLOW, authUserFollowSaga),
    takeEvery(actionTypes.AUTH_USER_UNFOLLOW, authUserUnfollowSaga),
    takeEvery(actionTypes.AUTH_USER_CHANGE_PASSWORD, authUserChangePasswordSaga)
  ])
}

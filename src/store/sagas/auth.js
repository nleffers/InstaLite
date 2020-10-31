import { call, delay, put } from 'redux-saga/effects'

import { auth, database } from '../../firebase/firebase'
import * as actions from '../actions/index'

export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token')
  yield call([localStorage, 'removeItem'], 'expirationDate')
  yield call([localStorage, 'removeItem'], 'userId')
  yield put(actions.authUserLogoutSuccess())
}

export function* authUserCheckTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000)
  yield put(actions.authUserLogout())
}

export function* authUserSignUpSaga(action) {
  yield put(actions.authUserSignUpStart())
  try {
    const resp = yield auth.createUserWithEmailAndPassword(action.email, action.password)
      .then(authUser => {
        database.ref(`/users/${authUser.user.uid}`).set({
          username: action.username,
          email: action.email,
          fullName: action.fullName,
          phone: action.phone,
          website: '',
          bio: '',
          gender: ''
        })
        return authUser
      })
    const user = resp.user.toJSON()
    const expirationDate = yield new Date(new Date().getTime() + user.stsTokenManager.expirationTime * 1000)

    yield call([localStorage, 'setItem'], 'token', user.stsTokenManager.accessToken)
    yield call([localStorage, 'setItem'], 'expirationDate', expirationDate)
    yield call([localStorage, 'setItem'], 'userId', user.uid)
    yield put(actions.authUserSignInSuccess(user))
  } catch (err) {
    yield put(actions.authUserSignUpFail(err.response.data.error))
  }
}

export function* authUserSignInSaga(action) {
  yield put(actions.authUserSignInStart())
  try {
    const resp = yield auth.signInWithEmailAndPassword(action.email, action.password)
    const user = resp.user.toJSON()
    const expirationDate = yield new Date(new Date().getTime() + user.stsTokenManager.expirationTime * 1000)

    yield call([localStorage, 'setItem'], 'token', user.stsTokenManager.accessToken)
    yield call([localStorage, 'setItem'], 'expirationDate', expirationDate)
    yield call([localStorage, 'setItem'], 'userId', user.uid)
    yield put(actions.authUserSignInSuccess(user))
  } catch (err) {
    yield put(actions.authUserSignInFail(err.response.data.error))
  }
}

export function* authCheckStateSaga() {
  const token = yield localStorage.getItem('token')
  if (!token) {
    yield put(actions.authUserLogout())
  } else {
    const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
    if (expirationDate > new Date()) {
      const userId = yield localStorage.getItem('userId')
      yield put(actions.authUserAutoSignIn(userId, token))
    } else {
      yield put(actions.authUserLogout())
    }
  }
}

export function* authUserFetchSaga(action) {
  yield put(actions.authUserFetchStart())
  try {
    const resp = yield database.ref(`/users/${action.userId}`).once('value')
    yield put(actions.authUserFetchSuccess(resp))
  } catch (err) {
    yield put(actions.authUserFetchFail(err.response.data.error))
  }
}

export function* authUserUpdateSaga(action) {
  yield put(actions.authUserUpdateStart())
  try {
    const userData = {
      username: action.username,
      fullName: action.fullName,
      website: action.website,
      bio: action.bio,
      email: action.email,
      phone: action.phone,
      gender: action.gender
    }
    yield database.ref(`/users/${action.userId}`).set(userData)
    yield put(actions.authUserUpdateSuccess(userData))
  } catch (err) {
    yield put(actions.authUserUpdateFail(err.response.data.error))
  }
}

export function* authUserChangePasswordSaga(action) {
  yield put(actions.authUserChangePasswordStart())
  try {
    yield put(actions.authUserChangePasswordSuccess())
  } catch (err) {
    yield put(actions.authUserChangePasswordFail(err.response.data.error))
  }
}

export function* authUserFollowSaga(action) {
  yield put(actions.authUserFollowStart())
  try {
    const userData = {
      username: action.username,
      userId: action.userId
    }
    const resp = yield database.ref(`/users/${action.authUserId}/following`).push(userData)
    yield put(actions.authUserFollowSuccess(resp, action.userId, action.username))
  } catch (err) {
    yield put(actions.authUserFollowFail(err.response.data.error))
  }
}

export function* authUserUnfollowSaga(action) {
  yield put(actions.authUserUnfollowStart())
  try {
    yield database.ref(`/users/${action.authUserId}/following/${action.followingUserId}`).remove()
    yield put(actions.authUserUnfollowSuccess(action.followingUserId))
  } catch (err) {
    console.log(err)
    // yield put(actions.authUserUnfollowFail(err.response.data.error))
  }
}

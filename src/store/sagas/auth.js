import { delay } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token')
  yield call([localStorage, 'removeItem'], 'expirationDate')
  yield call([localStorage, 'removeItem'], 'userId')
  yield put(actions.authUserLogoutSuccess())
}

export function* authCheckTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000)
  yield put(actions.authUserLogout())
}

export function* authUserSaga(action) {
  yield put(actions.authUserStart())
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
  if (!action.isSignUp) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
  }
  try {
    const resp = yield axios.post(url, authData)

    const expirationDate = yield new Date(new Date().getTime() + resp.data.expiresIn * 1000)
    yield call([localStorage, 'setItem'], 'token', resp.data.idToken)
    yield call([localStorage, 'setItem'], 'expirationDate', expirationDate)
    yield call([localStorage, 'setItem'], 'userId', resp.data.localId)
    if (action.isSignUp) {
      yield put(actions.userCreate(resp.data.localId, action.username, action.fullName, action.email, action.phone, resp.data.idToken))
    }
    yield put(actions.authUserSuccess(resp.data.idToken, resp.data.localId))
    yield put(actions.authUserCheckTimeout(resp.data.expiresIn))
  } catch (err) {
    yield put(actions.authUserFail(err.response.data.error))
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
      yield put(actions.authUserSuccess(token, userId))
      yield put(actions.authUserCheckTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
    } else {
      yield put(actions.authUserLogout())
    }
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

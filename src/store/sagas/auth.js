import { delay } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import axios from '../../axios/axios';

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

export function* authUserLoginSaga(action) {
  yield put(actions.authUserLoginStart())
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
      yield put(actions.authUserCreate(resp.data.localId, action.username, action.fullName, action.email, action.phone, resp.data.idToken))
    }
    yield put(actions.authUserLoginSuccess(resp.data.idToken, resp.data.localId))
    yield put(actions.authUserCheckTimeout(resp.data.expiresIn))
  } catch (err) {
    yield put(actions.authUserLoginFail(err.response.data.error))
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
      yield put(actions.authUserLoginSuccess(token, userId))
      yield put(actions.authUserCheckTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
    } else {
      yield put(actions.authUserLogout())
    }
  }
}

export function* authUserCreateSaga(action) {
  yield put(actions.authUserCreateStart())
  try {
    const userData = {
      userId: action.userId,
      username: action.username,
      email: action.email,
      fullName: action.fullName,
      phone: action.phone,
      website: '',
      bio: '',
      gender: ''
    }
    yield axios.post(`/users.json?auth=${action.token}`, userData)
    yield put(actions.authUserCreateSuccess())
  } catch (err) {
    yield put(actions.authUserCreateFail(err.response.data.error))
  }
}

export function* authUserFetchSaga(action) {
  yield put(actions.authUserFetchStart())
  try {
    const resp = yield axios.get(`/users.json?auth=${action.token}&userId=${action.userId}`)
    yield put(actions.authUserFetchSuccess(resp))
  } catch (err) {
    yield put(actions.authUserFetchFail(err.response.data.error))
  }
}

export function* authUserUpdateSaga(action) {
  yield put(actions.authUserUpdateStart())
  try {
    const userData = {
      [action.userObjectId]: {
        userId: action.userId,
        username: action.username,
        fullName: action.fullName,
        website: action.website,
        bio: action.bio,
        email: action.email,
        phone: action.phone,
        gender: action.gender
      }
    }
    const resp = yield axios.put(`/users.json?auth=${action.token}&userId=${action.userId}`, userData)
    yield put(actions.authUserUpdateSuccess(resp))
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

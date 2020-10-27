import { call, delay, put } from 'redux-saga/effects'

import { auth, database } from '../../firebase/firebase'
import axios from '../../axios/axios'
import * as actions from '../actions/index'

export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token')
  yield call([localStorage, 'removeItem'], 'expirationDate')
  yield call([localStorage, 'removeItem'], 'userId')
  yield put(actions.authUserLogoutSuccess())
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
          phone: action.phone
        })
        return authUser
      })
    const user = resp.user.toJSON()
    const expirationDate = yield new Date(new Date().getTime() + user.stsTokenManager.expirationTime)

    yield call([localStorage, 'setItem'], 'token', user.stsTokenManager.accessToken)
    yield call([localStorage, 'setItem'], 'expirationDate', expirationDate)
    yield call([localStorage, 'setItem'], 'userId', user.uid)
    yield put(actions.authUserSignInSuccess(user))
  } catch (err) {
    console.log(err)
    yield put(actions.authUserSignUpFail(err.response.data.error))
  }
}

export function* authUserSignInSaga(action) {
  yield put(actions.authUserSignInStart())
  try {
    const resp = yield auth.signInWithEmailAndPassword(action.email, action.password)
    const user = resp.user.toJSON()
    const expirationDate = yield new Date(new Date().getTime() + user.stsTokenManager.expirationTime)

    yield call([localStorage, 'setItem'], 'token', user.stsTokenManager.accessToken)
    yield call([localStorage, 'setItem'], 'expirationDate', expirationDate)
    yield call([localStorage, 'setItem'], 'userId', user.uid)
    yield put(actions.authUserSignInSuccess(user))
  } catch (err) {
    console.log(err)
    // yield put(actions.authUserSignInFail(err.response.data.error))
  }
}

// export function* authUserLoginSaga(action) {
//   yield put(actions.authUserLoginStart())
//   const authData = {
//     email: action.email,
//     password: action.password,
//     returnSecureToken: true
//   }
//   let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
//   if (!action.isSignUp) {
//     url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
//   }
//   try {
//     const resp = yield axios.post(url, authData)

//     const expirationDate = yield new Date(new Date().getTime() + resp.data.expiresIn * 1000)
//     yield call([localStorage, 'setItem'], 'token', resp.data.idToken)
//     yield call([localStorage, 'setItem'], 'expirationDate', expirationDate)
//     yield call([localStorage, 'setItem'], 'userId', resp.data.localId)
//     if (action.isSignUp) {
//       yield put(actions.authUserCreate(resp.data.localId, action.username, action.fullName, action.email, action.phone, resp.data.idToken))
//     }
//     yield put(actions.authUserLoginSuccess(resp.data.idToken, resp.data.localId))
//     yield put(actions.authUserCheckTimeout(resp.data.expiresIn))
//   } catch (err) {
//     yield put(actions.authUserLoginFail(err.response.data.error))
//   }
// }

export function* authCheckStateSaga() {
  const token = yield localStorage.getItem('token')
  if (!token) {
    yield put(actions.authUserLogout())
  } else {

    const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
    if (expirationDate > new Date()) {
      const userId = yield localStorage.getItem('userId')
      yield put(actions.authUserSignInSuccess(token, userId))
    } else {
      yield put(actions.authUserLogout())
    }
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

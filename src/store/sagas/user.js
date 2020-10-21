import { put } from 'redux-saga/effects';
import axios from '../../axios/axios';

import * as actions from '../actions/index';

export function* userCreateSaga(action) {
  yield put(actions.userCreateStart())
  try {
    const userData = {
      userId: action.userId,
      username: action.username,
      email: action.email,
      fullName: action.fullName,
      phone: action.phone
    }
    yield axios.post(`/users.json?auth=${action.token}`, userData)
    yield put(actions.userCreateSuccess())
  } catch (err) {
    yield put(actions.userCreateFail(err.response.data.error))
  }
}

export function* userFetchSaga(action) {
  yield put(actions.userFetchStart())
  try {
    const resp = yield axios.get(`/users.json?auth=${action.token}&userId=${action.userId}`)
    yield put(actions.userFetchSuccess(resp))
  } catch(err) {
    yield put(actions.userFetchFail(err.response.data.error))
  }
}

export function* userUpdateSaga(action) {
  yield put(actions.userUpdateStart())
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
    yield axios.put(`/users/${action.userId}/.json?auth=${action.token}`, userData)
    yield put(actions.userUpdateSuccess(userData))
  } catch (err) {
    yield put(actions.userUpdateFail(err.response.data.error))
  }
}

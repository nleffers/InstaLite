import { put } from 'redux-saga/effects';
import axios from '../../axios/axios';

import * as actions from '../actions/index';

export function* userFetchSaga(action) {
  yield put(actions.userFetchStart())
  try {
    const resp = yield axios.get(`/users.json?auth=${action.token}&userId=${action.userId}`)
    yield put(actions.userFetchSuccess(resp))
  } catch(err) {
    yield put(actions.userFetchFail(err.response.data.error))
  }
}
export function* userPicturesFetchSaga(action) {
  yield put(actions.userPicturesFetchStart())
  try {
    const resp = yield axios.get(`/pictures.json?auth=${action.token}&userId=${action.userId}`)
    yield put(actions.userPicturesFetchSuccess(resp))
  } catch(err) {
    yield put(actions.userPicturesFetchFail(err.response.data.error))
  }
}

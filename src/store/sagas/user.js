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

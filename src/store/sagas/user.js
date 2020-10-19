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
    yield axios.post('/users.json?auth=' + action.token, userData)
    yield put(actions.userCreateSuccess())
  } catch (err) {
    yield put(actions.userCreateFail(err.response.data.error))
  }
}

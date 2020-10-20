import { put } from 'redux-saga/effects';
import axios from '../../axios/axios';

import { storage } from '../../firebase/firebase'
import * as actions from '../actions/index';

export function* pictureUploadSaga(action) {
  yield put(actions.pictureUploadStart())
  try {
    if (action.image === '') { return console.log('not an image') }
    const uploadTask = storage.ref(`/images/${action.image.name}`).put(action.image)
    // initiates the firebase side uploading
    uploadTask.on(
      'state_changed',
      (snapShot) => {
        // put code here that creates a picture in firebase db
        // yield put(actions.pictureCreate(snapShot, action.userId, action.token))
        console.log(snapShot)
      }, err => {
        console.log(err)
      }
    )
    yield put(actions.pictureUploadSuccess())
  } catch (err) {
    yield put(actions.pictureUploadFail(err.response.data.error))
  }
}

export function* pictureCreateSaga(action) {
  yield put(actions.pictureCreateStart())
  try {
    yield axios.post('/pictures.json?auth=' + action.token, action.snapShot)
    yield put(actions.pictureCreateSuccess())
  } catch (err) {
    yield put(actions.pictureCreateFail(err.response.data.error))
  }
}

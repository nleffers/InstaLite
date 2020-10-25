import { put } from 'redux-saga/effects';
import axios from '../../axios/axios';

import { storage } from '../../firebase/firebase'
import * as actions from '../actions/index';

export function* pictureUploadSaga(action) {
  if (action.image === '') { return console.log('not an image') }
  yield put(actions.pictureUploadStart())
  try {
    const uploadTask = yield storage.ref(`/images/${action.image.name}`).put(action.image)
    yield put(actions.pictureUploadSuccess(uploadTask))
  } catch (err) {
    yield put(actions.pictureUploadFail(err.response && err.response.data && err.response.data.error))
  }
}

export function* pictureCreateSaga(action) {
  yield put(actions.pictureCreateStart())
  try {
    const pictureData = {
      bucket: action.snapShot.metadata.bucket,
      path: action.snapShot.metadata.fullPath,
      profilePicture: false,
      userId: action.userId
    }
    yield axios.post('/pictures.json?auth=' + action.token, pictureData)
    yield put(actions.pictureCreateSuccess())
  } catch (err) {
    yield put(actions.pictureCreateFail(err.response && err.response.data && err.response.data.error))
  }
}

export function* pictureSetProfilePictureSaga(action) {
  yield put(actions.pictureSetProfilePictureStart())
  try {
    // yield axios.post('/')
    yield put(actions.pictureSetProfilePictureSuccess())
  } catch (err) {
    yield put(actions.pictureSetProfilePictureFail(err.response && err.response.data && err.response.data.error))
  }
}

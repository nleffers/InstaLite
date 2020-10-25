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
    yield put(actions.pictureUploadFail(err.response.data.error))
  }
}

export function* pictureCreateSaga(action) {
  yield put(actions.pictureCreateStart())
  try {
    const getUrlTask = yield storage.ref(`/${action.snapShot.metadata.fullPath}`).getDownloadURL()
    const pictureData = {
      url: getUrlTask,
      profilePicture: false,
      userId: action.userId
    }
    yield axios.post('/pictures.json?auth=' + action.token, pictureData)
    yield put(actions.pictureCreateSuccess())
  } catch (err) {
    yield put(actions.pictureCreateFail(err.response.data.error))
  }
}

export function* pictureCreateProfilePictureSaga(action) {
  yield put(actions.pictureCreateProfilePictureStart())
  try {
    // yield axios.post('/')
    yield put(actions.pictureCreateProfilePictureSuccess())
  } catch (err) {
    yield put(actions.pictureCreateProfilePictureFail(err.response.data.error))
  }
}

export function* pictureFetchUrlSaga(action) {
  yield put(actions.pictureFetchUrlStart())
  try {
    const getUrlTask = yield storage.ref(`/${action.picture.path}`).getDownloadURL()
    yield put(actions.pictureFetchUrlSuccess(getUrlTask))
  } catch (err) {
    yield put(actions.pictureFetchUrlFail(err.response.data.error))
  }
}

import * as actionTypes from './actionTypes'

export const pictureUpload = (image, userId, token) => {
  return {
    type: actionTypes.PICTURE_UPLOAD,
    image: image,
    userId: userId,
    token: token
  }
}

export const pictureUploadStart = () => {
  return {
    type: actionTypes.PICTURE_UPLOAD_START
  }
}

export const pictureUploadSuccess = snapShot => {
  return {
    type: actionTypes.PICTURE_UPLOAD_SUCCESS,
    snapShot: snapShot
  }
}

export const pictureUploadFail = error => {
  return {
    type: actionTypes.PICTURE_UPLOAD_FAIL,
    error: error
  }
}

export const pictureCreate = (snapShot, userId, token) => {
  return {
    type: actionTypes.PICTURE_CREATE,
    snapShot: snapShot,
    userId: userId,
    token: token
  }
}

export const pictureCreateStart = () => {
  return {
    type: actionTypes.PICTURE_CREATE_START
  }
}

export const pictureCreateSuccess = () => {
  return {
    type: actionTypes.PICTURE_CREATE_SUCCESS
  }
}

export const pictureCreateFail = error => {
  return {
    type: actionTypes.PICTURE_CREATE_FAIL,
    error: error
  }
}

export const pictureCreateProfilePicture = (snapShot, userId, token) => {
  return {
    type: actionTypes.PICTURE_CREATE_PROFILE_PICTURE,
    snapShot: snapShot,
    userId: userId,
    token: token
  }
}

export const pictureCreateProfilePictureStart = () => {
  return {
    type: actionTypes.PICTURE_CREATE_PROFILE_PICTURE_START
  }
}

export const pictureCreateProfilePictureSuccess = () => {
  return {
    type: actionTypes.PICTURE_CREATE_PROFILE_PICTURE_SUCCESS
  }
}

export const pictureCreateProfilePictureFail = error => {
  return {
    type: actionTypes.PICTURE_CREATE_PROFILE_PICTURE_FAIL,
    error: error
  }
}

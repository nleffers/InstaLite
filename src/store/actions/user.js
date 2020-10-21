import * as actionTypes from './actionTypes';

export const userCreate = (userId, username, fullName, email, phone, token) => {
  return {
    type: actionTypes.USER_CREATE,
    userId: userId,
    username: username,
    fullName: fullName,
    email: email,
    phone: phone,
    token: token
  }
}

export const userCreateStart = () => {
  return {
    type: actionTypes.USER_CREATE_START
  }
}

export const userCreateSuccess = () => {
  return {
    type: actionTypes.USER_CREATE_SUCCESS
  }
}

export const userCreateFail = error => {
  return {
    type: actionTypes.USER_CREATE_FAIL,
    error: error
  }
}

export const userFetch = (userId, token) => {
  return {
    type: actionTypes.USER_FETCH,
    userId: userId,
    token: token
  }
}

export const userFetchStart = () => {
  return {
    type: actionTypes.USER_FETCH_START
  }
}

export const userFetchSuccess = snapShot => {
  return {
    type: actionTypes.USER_FETCH_SUCCESS,
    data: snapShot.data
  }
}

export const userFetchFail = error => {
  return {
    type: actionTypes.USER_FETCH_FAIL,
    error: error
  }
}

export const userUpdate = (userId, username, fullName, website, bio, email, phone, gender, token) => {
  return {
    type: actionTypes.USER_UPDATE,
    userId: userId,
    username: username,
    fullName: fullName,
    website: website,
    bio: bio,
    email: email,
    phone: phone,
    gender: gender,
    token: token
  }
}

export const userUpdateStart = () => {
  return {
    type: actionTypes.USER_UPDATE_START
  }
}

export const userUpdateSuccess = response => {
  return {
    type: actionTypes.USER_UPDATE_SUCCESS,
    response: response
  }
}

export const userUpdateFail = error => {
  return {
    type: actionTypes.USER_UPDATE_FAIL,
    error: error
  }
}

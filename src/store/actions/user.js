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

export const userCreateFail = (error) => {
  return {
    type: actionTypes.USER_CREATE_FAIL,
    error: error
  }
}

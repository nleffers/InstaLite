import * as actionTypes from './actionTypes';

export const authUser = (email, password, isSignUp, username, fullName, phone) => {
  return {
    type: actionTypes.AUTH_USER,
    username: username,
    fullName: fullName,
    email: email,
    phone: phone,
    password: password,
    isSignUp: isSignUp
  }
}

export const authUserStart = () => {
  return {
    type: actionTypes.AUTH_USER_START
  }
}

export const authUserSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_USER_SUCCESS,
    idToken: idToken,
    userId: userId
  }
}

export const authUserFail = (err) => {
  return {
    type: actionTypes.AUTH_USER_FAIL,
    error: err
  }
}

export const authUserLogout = () => {
  return {
    type: actionTypes.AUTH_USER_LOGOUT
  }
}

export const authUserLogoutSuccess = () => {
  return {
    type: actionTypes.AUTH_USER_LOGOUT_SUCCESS
  }
}

export const authUserCheckTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTH_USER_CHECK_TIMEOUT,
    expirationTime: expirationTime
  }
}

export const authSetRedirectPath = path => {
  return {
    type: actionTypes.AUTH_SET_REDIRECT_PATH,
    path: path
  }
}

export const authUserCheckState = () => {
  return {
    type: actionTypes.AUTH_USER_CHECK_STATE
  }
}

export const authUserChangePassword = (userId, token, oldPassword, newPassword) => {
  return {
    type: actionTypes.AUTH_USER_CHANGE_PASSWORD,
    userId: userId,
    token: token,
    oldPassword: oldPassword,
    newPassword: newPassword
  }
}

export const authUserChangePasswordStart = () => {
  return {
    type: actionTypes.AUTH_USER_CHANGE_PASSWORD_START
  }
}

export const authUserChangePasswordSuccess = () => {
  return {
    type: actionTypes.AUTH_USER_CHANGE_PASSWORD_SUCCESS
  }
}

export const authUserChangePasswordFail = error => {
  return {
    type: actionTypes.AUTH_USER_CHANGE_PASSWORD_FAIL,
    error: error
  }
}

export const authUserCreate = (userId, username, fullName, email, phone, token) => {
  return {
    type: actionTypes.AUTH_USER_CREATE,
    userId: userId,
    username: username,
    fullName: fullName,
    email: email,
    phone: phone,
    token: token
  }
}

export const authUserCreateStart = () => {
  return {
    type: actionTypes.AUTH_USER_CREATE_START
  }
}

export const authUserCreateSuccess = () => {
  return {
    type: actionTypes.AUTH_USER_CREATE_SUCCESS
  }
}

export const authUserCreateFail = error => {
  return {
    type: actionTypes.AUTH_USER_CREATE_FAIL,
    error: error
  }
}

export const authUserFetch = (userId, token) => {
  return {
    type: actionTypes.AUTH_USER_FETCH,
    userId: userId,
    token: token
  }
}

export const authUserFetchStart = () => {
  return {
    type: actionTypes.AUTH_USER_FETCH_START
  }
}

export const authUserFetchSuccess = snapShot => {
  return {
    type: actionTypes.AUTH_USER_FETCH_SUCCESS,
    data: snapShot.data
  }
}

export const authUserFetchFail = error => {
  return {
    type: actionTypes.AUTH_USER_FETCH_FAIL,
    error: error
  }
}

export const authUserUpdate = (userId, username, fullName, website, bio, email, phone, gender, token) => {
  return {
    type: actionTypes.AUTH_USER_UPDATE,
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

export const authUserUpdateStart = () => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_START
  }
}

export const authUserUpdateSuccess = response => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_SUCCESS,
    response: response
  }
}

export const authUserUpdateFail = error => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_FAIL,
    error: error
  }
}

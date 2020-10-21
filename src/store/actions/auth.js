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

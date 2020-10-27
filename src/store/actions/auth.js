import * as actionTypes from './actionTypes';

export const authUserSignIn = (email, password) => {
  return {
    type: actionTypes.AUTH_USER_SIGN_IN,
    email: email,
    password: password
  }
}

export const authUserSignInStart = () => {
  return {
    type: actionTypes.AUTH_USER_SIGN_IN_START
  }
}

export const authUserSignInSuccess = user => {
  return {
    type: actionTypes.AUTH_USER_SIGN_IN_SUCCESS,
    user: user
  }
}

export const authUserSignInFail = (err) => {
  return {
    type: actionTypes.AUTH_USER_SIGN_IN_FAIL,
    error: err
  }
}

export const authUserSignUp = (username, fullName, email, phone, password) => {
  return {
    type: actionTypes.AUTH_USER_SIGN_UP,
    username: username,
    fullName: fullName,
    email: email,
    phone: phone,
    password: password
  }
}

export const authUserSignUpStart = () => {
  return {
    type: actionTypes.AUTH_USER_SIGN_UP_START
  }
}

export const authUserSignUpSuccess = user => {
  return {
    type: actionTypes.AUTH_USER_SIGN_UP_SUCCESS,
    user: user
  }
}

export const authUserSignUpFail = error => {
  return {
    type: actionTypes.AUTH_USER_SIGN_UP_FAIL,
    error: error
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

export const authUserUpdate = (userId, userObjectId, fullName, username, website, bio, email, phone, gender, token) => {
  return {
    type: actionTypes.AUTH_USER_UPDATE,
    userId: userId,
    userObjectId: userObjectId,
    fullName: fullName,
    username: username,
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

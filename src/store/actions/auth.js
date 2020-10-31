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

export const authUserFetch = userId => {
  return {
    type: actionTypes.AUTH_USER_FETCH,
    userId: userId
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
    snapShot: snapShot
  }
}

export const authUserFetchFail = error => {
  return {
    type: actionTypes.AUTH_USER_FETCH_FAIL,
    error: error
  }
}

export const authUserUpdate = (userId, fullName, username, website, bio, email, phone, gender) => {
  return {
    type: actionTypes.AUTH_USER_UPDATE,
    userId: userId,
    fullName: fullName,
    username: username,
    website: website,
    bio: bio,
    email: email,
    phone: phone,
    gender: gender
  }
}

export const authUserUpdateStart = () => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_START
  }
}

export const authUserUpdateSuccess = userData => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_SUCCESS,
    userData: userData
  }
}

export const authUserUpdateFail = error => {
  return {
    type: actionTypes.AUTH_USER_UPDATE_FAIL,
    error: error
  }
}

export const authUserCheckTimeout = expirationTime => {
  return {
    type: actionTypes.AUTH_USER_CHECK_TIMEOUT,
    expirationTime: expirationTime
  }
}

export const authUserAutoSignIn = (userId, token) => {
  return {
    type: actionTypes.AUTH_USER_AUTO_SIGN_IN,
    userId: userId,
    token: token
  }
}

export const authUserFollow = (authUserId, userId, username) => {
  return {
    type: actionTypes.AUTH_USER_FOLLOW,
    authUserId: authUserId,
    userId: userId,
    username: username
  }
}

export const authUserFollowStart = () => {
  return {
    type: actionTypes.AUTH_USER_FOLLOW_START
  }
}

export const authUserFollowSuccess = (response, userId, username) => {
  return {
    type: actionTypes.AUTH_USER_FOLLOW_SUCCESS,
    response: response,
    userId: userId,
    username: username
  }
}

export const authUserFollowFail = error => {
  return {
    type: actionTypes.AUTH_USER_FOLLOW_FAIL,
    error: error
  }
}

export const authUserUnfollow = (authUserId, followingUserId) => {
  return {
    type: actionTypes.AUTH_USER_UNFOLLOW,
    authUserId: authUserId,
    followingUserId: followingUserId
  }
}

export const authUserUnfollowStart = () => {
  return {
    type: actionTypes.AUTH_USER_UNFOLLOW_START
  }
}

export const authUserUnfollowSuccess = followingUserId => {
  return {
    type: actionTypes.AUTH_USER_UNFOLLOW_SUCCESS,
    followingUserId: followingUserId
  }
}

export const authUserUnfollowFail = error => {
  return {
    type: actionTypes.AUTH_USER_UNFOLLOW_FAIL,
    error: error
  }
}

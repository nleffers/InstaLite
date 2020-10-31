import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  token: null,
  userId: null,
  username: '',
  fullName: '',
  email: '',
  phone: '',
  website: '',
  bio: '',
  gender: '',
  followers: [],
  following: [],
  pictures: [],
  error: null,
  loading: false,
  authRedirectPath: '/'
}

const authUserSignUpOrSignInSuccess = (state, user) => {
  return updateObject(
    state,
    {
      token: user.stsTokenManager.accessToken,
      userId: user.uid,
      loading: false
    }
  )
}

const authUserFetchSuccess = (state, snapShot) => {
  const key = snapShot.key
  const user = snapShot.val()
  return updateObject(
    state,
    {
      userId: key,
      username: user.username,
      fullName: user.fullName,
      website: user.website,
      bio: user.bio,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      loading: false
    }
  )
}

const authUserUpdateSuccess = (state, userData) => {
  return updateObject(
    state,
    {
      username: userData.username,
      fullName: userData.fullName,
      website: userData.website,
      bio: userData.bio,
      email: userData.email,
      phone: userData.phone,
      gender: userData.gender,
      loading: false
    }
  )
}

const authUserFollowSuccess = (state, action) => {
  const authFollowing = [...state.following]
  authFollowing.push({
    id: action.response.key,
    userId: action.userId,
    username: action.username
  })
  return updateObject(
    state,
    { following: authFollowing }
  )
}

const authUserUnfollowSuccess = (state, action) => {
  const authFollowing = [...state.following]
  const followingIndex = state.following.findIndex(following => following.userId === action.userId)
  authFollowing.splice(followingIndex, 1)
  return updateObject(
    state,
    { following: authFollowing }
  )
}

const authUserLogoutSuccess = state => {
  return updateObject(state, initialState)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER_SIGN_IN_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_SIGN_IN_SUCCESS: return authUserSignUpOrSignInSuccess(state, action.user)
    case actionTypes.AUTH_USER_SIGN_IN_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_SIGN_UP_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_SIGN_UP_SUCCESS: return authUserSignUpOrSignInSuccess(state, action.user)
    case actionTypes.AUTH_USER_SIGN_UP_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_UPDATE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_UPDATE_SUCCESS: return authUserUpdateSuccess(state, action.userData)
    case actionTypes.AUTH_USER_UPDATE_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_FETCH_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_FETCH_SUCCESS: return authUserFetchSuccess(state, action.snapShot)
    case actionTypes.AUTH_USER_FETCH_FAIL: return updateObject(state, { error: null, loading: false })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_SUCCESS: return updateObject(state, { loading: false })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_LOGOUT_SUCCESS: return authUserLogoutSuccess(state)
    case actionTypes.AUTH_SET_REDIRECT_PATH: return updateObject(state, { authRedirectPath: action.path })
    case actionTypes.AUTH_USER_AUTO_SIGN_IN: return updateObject(state, { userId: action.userId, token: action.token })
    case actionTypes.AUTH_USER_FOLLOW_START: return updateObject(state, { error: null })
    case actionTypes.AUTH_USER_FOLLOW_SUCCESS: return authUserFollowSuccess(state, action)
    case actionTypes.AUTH_USER_FOLLOW_FAIL: return updateObject(state, { error: action.error })
    case actionTypes.AUTH_USER_UNFOLLOW_START: return updateObject(state, { error: null })
    case actionTypes.AUTH_USER_UNFOLLOW_SUCCESS: return authUserUnfollowSuccess(state, action)
    case actionTypes.AUTH_USER_UNFOLLOW_FAIL: return updateObject(state, { error: action.error })
    default: return state;
  }
}

export default reducer;

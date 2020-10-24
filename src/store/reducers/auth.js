import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  userObjectId: null,
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
  directMessages: [],
  pictures: [],
  taggedPictures: [],
  comments: [],
  error: null,
  loading: false,
  authRedirectPath: '/'
}

const authUserFetchSuccess = (state, data) => {
  const userObjectId = Object.keys(data)[0]
  const userObject = data[userObjectId]
  return updateObject(
    state,
    {
      userObjectId: userObjectId,
      username: userObject.username,
      fullName: userObject.fullName,
      website: userObject.website,
      bio: userObject.bio,
      email: userObject.email,
      phone: userObject.phone,
      gender: userObject.gender,
      loading: false
    }
  )
}

const authUserUpdateSuccess = (state, action) => {
  const userObjectId = Object.keys(action)[0]
  const data = action[userObjectId]
  return updateObject(
    state,
    {
      username: data.username,
      fullName: data.fullName,
      website: data.website,
      bio: data.bio,
      email: data.email,
      phone: data.phone,
      gender: data.gender,
      loading: false
    }
  )
}

const authUserLogoutSuccess = state => {
  return updateObject(
    state,
    {
      userObjectId: null,
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
      directMessages: [],
      pictures: [],
      taggedPictures: [],
      comments: [],
      authRedirectPath: '/'
    }
  )
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER_LOGIN_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_LOGIN_SUCCESS: return updateObject(state, { token: action.idToken, userId: action.userId, loading: false })
    case actionTypes.AUTH_USER_LOGIN_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_CREATE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_CREATE_SUCCESS: return updateObject(state, { loading: false })
    case actionTypes.AUTH_USER_CREATE_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_UPDATE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_UPDATE_SUCCESS: return authUserUpdateSuccess(state, action.response.data)
    case actionTypes.AUTH_USER_UPDATE_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_FETCH_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_FETCH_SUCCESS: return authUserFetchSuccess(state, action.data)
    case actionTypes.AUTH_USER_FETCH_FAIL: return updateObject(state, { error: null, loading: false })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_SUCCESS: return updateObject(state, { loading: false })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_LOGOUT_SUCCESS: return authUserLogoutSuccess(state)
    case actionTypes.AUTH_SET_REDIRECT_PATH: return updateObject(state, { authRedirectPath: action.path })
    default: return state;
  }
}

export default reducer;

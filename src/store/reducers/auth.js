import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  token: null,
  userId: null,
  username: null,
  fullName: null,
  website: null,
  bio: null,
  email: null,
  phone: null,
  gender: null,
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
  return updateObject(
    state,
    {
      username: action.username,
      fullName: action.fullName,
      website: action.website,
      bio: action.bio,
      email: action.email,
      phone: action.phone,
      gender: action.gender,
      loading: false
    }
  )
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.AUTH_USER_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_SUCCESS: return updateObject(state, { token: action.idToken, userId: action.userId, loading: false })
    case actionTypes.AUTH_USER_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_CREATE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_CREATE_SUCCESS: return updateObject(state, { loading: false })
    case actionTypes.AUTH_USER_CREATE_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_UPDATE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_UPDATE_SUCCESS: return authUserUpdateSuccess(state, action)
    case actionTypes.AUTH_USER_UPDATE_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_FETCH_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_FETCH_SUCCESS: return authUserFetchSuccess(state, action.data)
    case actionTypes.AUTH_USER_FETCH_FAIL: return updateObject(state, { error: null, loading: false })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_SUCCESS: return updateObject(state, { loading: false })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_LOGOUT_SUCCESS: return updateObject(state, { token: null, userId: null })
    case actionTypes.AUTH_SET_REDIRECT_PATH: return updateObject(state, { authRedirectPath: action.path })
    default: return state;
  }
}

export default reducer;

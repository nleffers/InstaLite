import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  username: null,
  fullName: null,
  email: null,
  phone: null,
  website: null,
  bio: null,
  gender: null,
  followers: [],
  following: [],
  directMessages: [],
  pictures: [],
  taggedPictures: [],
  comments: [],
  loading: false,
  error: null
}

const userFetchSuccess = (state, data) => {
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

const userUpdateSuccess = (state, action) => {
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
    case actionTypes.USER_CREATE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.USER_CREATE_SUCCESS: return updateObject(state, { loading: false })
    case actionTypes.USER_CREATE_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.USER_FETCH_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.USER_FETCH_SUCCESS: return userFetchSuccess(state, action.data)
    case actionTypes.USER_FETCH_FAIL: return updateObject(state, { error: null, loading: false })
    case actionTypes.USER_UPDATE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.USER_UPDATE_SUCCESS: return userUpdateSuccess(state, action)
    case actionTypes.USER_UPDATE_FAIL: return updateObject(state, { error: action.error, loading: false })
    default: return state;
  }
}

export default reducer;

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  userObjectId: null,
  userId: null,
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

const userPicturesFetchSuccess = (state, data) => {
  return updateObject(
    state,
    {
      pictures: [],
      taggedPictures: []
    }
  )
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.USER_FETCH_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.USER_FETCH_SUCCESS: return userFetchSuccess(state, action.data)
    case actionTypes.USER_FETCH_FAIL: return updateObject(state, { error: null, loading: false })
    case actionTypes.USER_PICTURES_FETCH_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.USER_PICTURES_FETCH_SUCCESS: return userPicturesFetchSuccess(state, action.data)
    case actionTypes.USER_PICTURES_FETCH_FAIL: return updateObject(state, { error: null, loading: false })
    default: return state;
  }
}

export default reducer;

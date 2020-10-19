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
  loading: false,
  followers: [],
  following: [],
  directMessages: [],
  pictures: [],
  taggedPictures: [],
  comments: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.USER_CREATE_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.USER_CREATE_SUCCESS: updateObject(state, { loading: false })
    case actionTypes.USER_CREATE_FAIL: return updateObject(state, { error: action.error, loading: false })
    default: return state;
  }
}

export default reducer;

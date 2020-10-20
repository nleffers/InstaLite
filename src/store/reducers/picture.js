import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  snapShot: null,
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PICTURE_UPLOAD_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.PICTURE_UPLOAD_SUCCESS: return updateObject(state, { snapShot: action.snapShot, loading: false })
    case actionTypes.PICTURE_UPLOAD_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.PICTURE_CREATE_START: return state
    case actionTypes.PICTURE_CREATE_SUCCESS: return updateObject(state, { snapShot: null })
    case actionTypes.PICTURE_CREATE_FAIL: return updateObject(state, { snapShot: null, error: action.error })
    default: return state;
  }
}

export default reducer;

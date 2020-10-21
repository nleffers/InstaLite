import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.AUTH_USER_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_SUCCESS: return updateObject(state, { token: action.idToken, userId: action.userId, loading: false })
    case actionTypes.AUTH_USER_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_START: return updateObject(state, { error: null, loading: true })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_SUCCESS: return updateObject(state, { loading: false })
    case actionTypes.AUTH_USER_CHANGE_PASSWORD_FAIL: return updateObject(state, { error: action.error, loading: false })
    case actionTypes.AUTH_USER_LOGOUT_SUCCESS: return updateObject(state, { token: null, userId: null })
    case actionTypes.AUTH_SET_REDIRECT_PATH: return updateObject(state, { authRedirectPath: action.path})
    default: return state;
  }
}

export default reducer;

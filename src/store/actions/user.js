import * as actionTypes from './actionTypes';

export const userFetch = (userId, token) => {
  return {
    type: actionTypes.USER_FETCH,
    userId: userId,
    token: token
  }
}

export const userFetchStart = () => {
  return {
    type: actionTypes.USER_FETCH_START
  }
}

export const userFetchSuccess = snapShot => {
  return {
    type: actionTypes.USER_FETCH_SUCCESS,
    data: snapShot.data
  }
}

export const userFetchFail = error => {
  return {
    type: actionTypes.USER_FETCH_FAIL,
    error: error
  }
}

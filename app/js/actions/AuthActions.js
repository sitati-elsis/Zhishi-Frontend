import types from '../constants/auth/actionTypes';
import webAPI from './../utils/webAPI.js';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// import $ from 'jquery';

/* eslint-disable camelcase */

/**
* @param {Object} user to be set as current user
* @return {Object} same as edit
*/
export function loadCurrentUserSuccess(user) {
  return ({type: types.LOAD_CURRENT_USER_SUCCESS, user});
}

export function logoutUserSuccess() {
  return ({type: types.LOGOUT_USER_SUCCESS});
}

export function checkIsLoggedIn() {
  return ({type: types.CHECK_LOGGED_IN_TO_ANDELA});
}

/**
* @param {Object} user to be set as current user
* @return {Object} same as edit
*/
export function logoutUser() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return webAPI(`/logout`, 'GET')
      .then(() => {
        dispatch(logoutUserSuccess());
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw (error);
      });
  };
}

/**
* @param {Object} resourceId: id of the comment resource (question or answer)
* @param {Object} id: of the comment
* @return {Func}  Success action to Comment reducer
*/
export function loginUser() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return webAPI(`/login`, 'POST')
      .then(user => {
        dispatch(loadCurrentUserSuccess(user));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw (error);
      });
  };
}

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  changeTheme,
} from './auth-actions';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutSuccess]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
});

const bgTheme = createReducer(false, {
  [changeTheme]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [registerRequest]: () => true,
  [loginRequest]: () => true,
  [logoutRequest]: () => true,
  [getCurrentUserRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
  bgTheme,
  isLoading,
});

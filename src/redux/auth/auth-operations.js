import axios from 'axios';
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
} from './auth-actions';
import { initialContacts } from '../contacts/contacts-action';

import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = user => dispatch => {
  dispatch(registerRequest());

  axios
    .post('/users/signup', user)
    .then(({ data }) => {
      token.set(data.token);
      return dispatch(registerSuccess(data));
    })
    .catch(({ message }) => dispatch(registerError(message)));
};

const login = user => dispatch => {
  dispatch(loginRequest());

  axios
    .post('/users/login', user)
    .then(({ data }) => {
      token.set(data.token);
      return dispatch(loginSuccess(data));
    })
    .catch(({ message }) => {
      toaster.notify('You have entered an invalid username or password', {
        duration: 5000,
      });
      return dispatch(loginError(message));
    });
};

const logout = () => dispatch => {
  dispatch(logoutRequest());

  axios
    .post('/users/logout')
    .then(_ => {
      token.unset();
      dispatch(initialContacts());
      dispatch(logoutSuccess());
    })
    .catch(({ message }) => dispatch(logoutError(message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistToken },
  } = getState();

  if (!persistToken) {
    return;
  }

  token.set(persistToken);
  dispatch(getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch(error => dispatch(getCurrentUserError(error.message)));
};

export default { register, login, logout, getCurrentUser };

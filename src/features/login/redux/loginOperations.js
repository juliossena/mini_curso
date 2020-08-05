import * as loginActions from './loginActions';
import { login } from './loginService';

export const getJwt = (body) => async (dispatch) => {
  const jwt = await login(body);
  dispatch(loginActions.setJwt(jwt));
};

export const setJwt = (jwt) => async (dispatch) => {
  dispatch(loginActions.setJwt(jwt));
};

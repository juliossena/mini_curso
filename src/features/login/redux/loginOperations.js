import * as loginActions from './loginActions';
import { login } from './loginService';
import Security from '../../../shared/functions/autenticacao/security';

export const getJwt = (body) => async (dispatch) => {
  const jwt = await login(body);
  Security.setAuthorizationToken(jwt);
  dispatch(loginActions.setJwt(jwt));
};

export const setJwt = (jwt) => async (dispatch) => {
  dispatch(loginActions.setJwt(jwt));
};

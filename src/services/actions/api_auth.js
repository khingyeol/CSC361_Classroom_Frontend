import { server, api_auth } from '../constants';
import httpClient from '../httpClient';

export const register = async (values) => {
  const res = httpClient.post(server.AUTH_URL+api_auth.REGISTER_URL, values);
  if (res.data.result == 'ok') {
    return true;
  } else {
    return false;
  }
};

export const isLoggedIn = () => {
  let token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
};

export const logout= () => {
  localStorage.removeItem(server.TOKEN_KEY);
};

export const login = async (values) => {
  const res = await httpClient.post(server.AUTH_URL+api_auth.LOGIN_URL, values);

  if (res.data.result == 'OK') {
    localStorage.setItem(server.TOKEN_KEY, res.headers.authorization.split(' ')[1]);
    return {auth: true, data: res.data.data}
  } else {
    return {auth: false, data: res.data.message}
  }
};

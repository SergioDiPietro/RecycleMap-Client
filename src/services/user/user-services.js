import axios from 'axios';
const API_URL = 'http://localhost:8000/api/users';

const setSignUp = user => {
  return axios.post(`${API_URL}/register`, user);
};

const setLogin = user => {
  return axios.post(`${API_URL}/login`, user);
};

export { setSignUp, setLogin };

import axios from 'axios';
import {
  ROOT_URL,
} from './';

export default function signUp({ email, password }, callback) {
  return async function (dispatch) {
    try {
      const res = await axios.post(`${ROOT_URL}/signup`, { email, password });
      localStorage.setItem('token', res.data.token);
      callback();
    } catch({ response }) {
      callback(response.data.error);
    }
  }
}

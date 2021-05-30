import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER
} from './types';

// API 더미 데이터 req => email, password / 더미 데이터에서 일치하는 email이 있는지
// 
export function loginUser(dataToSubmit) {
  const req = axios
    .post(
      "http://localhost:3065/user/login",
      dataToSubmit,
    )
    .then((res) => res.data);
  
  return {
    type: LOGIN_USER,
    payload: req,
  }
}

export function registerUser(dataToSubmit) {
  const req = axios
    .post("http://localhost:3065/user/register", dataToSubmit)
    .then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: req,
  };
}

// export function logoutUser() {
  
// }
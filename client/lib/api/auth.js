import client from './client';

// 로그인
export const login = ({ email, password }) => client.post('http://lcalhost:3065/login', { email, password });

// 회원가입
export const register = ({ username, email, password }) => client.post('http://lcalhost:3065/register', { username, email, password });

// 로그인 상태 확인
// export const check = () => client.get('https://reqres.in/api/check');
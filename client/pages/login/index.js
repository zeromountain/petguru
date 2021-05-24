import React, { useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/user_actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .input {

  }

  .login_form{
    display: flex;
    flex-direction: column;
  }

  .login_btn_container {
    display: flex;
  }

  .login_btn {
    flex: 1 1;
    margin-bottom: 10px;
    padding: 16px;
    & + & {
      margin: 5px;
    }
  }

  .social_btn {
    margin-bottom: 10px;
    padding:16px;
  }
`

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const
    console.log('email', email);
    console.log('password', password);
    const body = {
      email,
      password
    }
    dispatch(loginUser(body))
      .then(res => {
        if (res.payload.loginSuccess) {
          router.push('/home');
        } else {
          alert('로그인 할 수 없음');
        }
      })
  }
  
  return (
    <>
      <Head>
        <title>펫그루 | Login</title>
      </Head>
      <h1>펫그루 로그인페이지입니다.</h1>
      <Container>
        <form className="login_form" onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input
            value={email}
            type="email"
            placeholder="email"
            className="input"
            onChange={onChangeEmail}
          />
          <label>Password</label>
          <input
            value={password}
            type="password"
            placeholder="password"
            className="input"
            onChange={onChangePassword}
          />
          <br />
          <div className="login_btn_container">
            <button name="Login" className="login_btn">
              Login
            </button>
            <button className="login_btn">
              <Link href="/home">Guest Login</Link>
            </button>
          </div>
          <button name="google" className="social_btn">
            Continue with Google
          </button>
          <Link href="/register">
            <a>아직 회원이 아니십니까?</a>
          </Link>
        </form>
      </Container>
    </>
  );
}

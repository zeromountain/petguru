import React, { useState, useCallback } from 'react';
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/user_actions';
import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../components/auth/LoginForm';

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('email', email);
    // console.log('password', password);
    let body = {
      email,
      password
    }

    dispatch(loginUser(body))
      .then(res => {
        if (res.payload.loginSuccess) {
          alert(res.payload.message);
          router.push('/home');
        } else {
          alert('로그인 할 수 없음');
        }
      })
  }
  
  return (
    <>
      <Head>
        <title>펫구루 | Login</title>
      </Head>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </>
  );
}

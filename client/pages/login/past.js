import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import styles from "../../styles/Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/user_actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 158px 0 86px;
  background-color: #f8f8f8;

  .input {
    width: 100%;
    height: 37px;
    padding-left: 30px;
    font-size: 16px;
    border: 0;
    border-bottom: 0.5px solid #c9cdd3;
    background-position: 0 60%;
    background-repeat: no-repeat;
    background-size: auto 24px;
    box-sizing: border-box;
    color: red;
    line-height: 1;
    letter-spacing: -0.4px;
    vertical-align: middle;
    outline: none;
    background-color: transparent !important;
  }

  label {
    display: block;
    font-size: 12px;
    color: #8d95a0;
    line-height: 1.17;
    cursor: pointer;
  }

  .input + label {
    margin-top: 18px;
  }

  .login_form {
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
    padding: 16px;
  }
`;

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const
    console.log("email", email);
    console.log("password", password);
    const body = {
      email,
      password,
    };

    axios.post("/user/login");
    // dispatch(loginUser(body))
    //   .then(res => {
    //     if (res.payload.loginSuccess) {
    //       router.push('/home');
    //     } else {
    //       alert('로그인 할 수 없음');
    //     }
    //   })
  };

  return (
    <>
      <Head>
        <title>펫구루 | Login</title>
      </Head>
      <h1>펫구루 로그인페이지입니다.</h1>
      <Container>
        <form className="login_form" onSubmit={onSubmitHandler}>
          <label for="email">Email</label>
          <input
            value={email}
            name="email"
            type="email"
            placeholder="email"
            className="input"
            onChange={onChangeEmail}
          />
          <label for="password">Password</label>
          <input
            value={password}
            type="password"
            name="password"
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

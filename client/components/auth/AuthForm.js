import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p.main-txt {
    margin-bottom: 12px;
    font-size: 23px;
    color: #303644;
    line-height: 1.24;
    letter-spacing: -0.5px;
  }
  p.sub-txt {
    color: #8d95a0;
    line-height: 1.4;
  }
  label {
    display: block;
    font-size: 12px;
    color: #8d95a0;
    line-height: 1.17;
    margin-top: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #adb5bd;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  margin: 1rem auto;
  padding: 0.125rem;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid  #495057;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  a {
    color: #868e96;
    text-decoration: none;
    margin: 5px;
    &:hover {
      color: #212529;
    }
  }
`;

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  return (
    <AuthFormBlock>
      {type === "login" ?
      <div>    
        <p className="main-txt">
          펫구루와 함께
          <br />
          모든 반려 생활 궁긍즘을 해결해요!
        </p>
        <p className="sub-txt">
          펫구루에서 제공하는 서비스를 위해
          <br />
          로그인 해주세요.
        </p>
        </div>
        :<div>    
        <p className="main-txt">
          안녕하세요!
          <br />
          전문가와 함께 하는 펫구루입니다.
        </p>
        <p className="sub-txt">
          펫구루에서 제공하는 서비스를 위해
          <br />
          회원가입 해주세요.
        </p>
      </div>
      }
      <form onSubmit={onSubmit}>
      {type === "register" &&
          <>
            <label>Name</label>
          <StyledInput autoComplete="username" name="username" type="text" onChange={onChange} value={form.username}/>
          </>
        }
        <label>Email</label>
        <StyledInput autoComplete="email" name="email" type="email" className="user-input"onChange={onChange} value={form.email}/>
        <label>Password</label>
        <StyledInput autoComplete="new-password" name="password" type="password" className="user-input" onChange={onChange} value={form.password}/>
        {type === "register" &&
          <>
            <label>Password Confirm</label>
            <StyledInput autoComplete="new-password" name="passwordConfirm" type="password" onChange={onChange} value={form.passwordConfirm}/>
          </>
        }
        {type === "login" ?
        <Button cyan fullWidth>로그인</Button>
          :
        <Button cyan fullWidth>회원가입</Button>
        }
      </form>
      {
        type === "login" &&
        <Footer>
          <Link href="/home">
            <a>비회원으로 로그인</a>
          </Link>
          <Link href="/register">
            <a className="singnup-link">이메일로 회원가입</a>
          </Link>
        </Footer>
      }
    </AuthFormBlock>
  )
}

export default AuthForm;

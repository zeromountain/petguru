import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../reducers/auth';
import AuthForm from './AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    );
  };
  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
  }
  // 컴포넌트가 처음 레더링될 때 form을 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit}/>
  );
}

export default LoginForm;

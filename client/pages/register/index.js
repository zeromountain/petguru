import Head from "next/head";
import Container from '../../components/Container';
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/user_actions";
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import AuthTemplate from "../../components/auth/AuthTemplate";
import RegisterForm from "../../components/auth/RegisterForm";

// 리덕스
// 스토어=> 디스패치 => 액션 => 리듀서 => 스토어

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [Error, setError] = useState('');

  const onChangeUsername = useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  })
  const onChangeConfrimPassword = useCallback((e) => {
    console.log(e.target.value);
    setConfirmPassword(e.target.value);
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('password: ', password)
    console.log("confirmPassword", confirmPassword);
    if (password !== confirmPassword) {
      return alert('입력한 비밀번호가 다릅니다!')
    }
    let body = {
      username,
      email,
      password
    }
    dispatch(registerUser(body))
      .then(res => {
        if (res.payload.success) {
          alert(res.payload.message);
          router.push('/login')
        } else {
          alert('회원가입에 실패했습니다.')
        }
      })
  }

  return (
    <>
      <Head>
        <title>펫구루|회원가입</title>
      </Head>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </>
  ); 
}

export default Register;
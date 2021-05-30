const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const router = express.Router();

// router.post('/login', async (req, res) => {

//   // console.log(req.body);
//     const body=req.body;
//     let userInfo = await User.findOne({
//       where: { 
//         email: body.email,
//       }
//     });
//     if(!userInfo){
//       return res.status(401).json({data:null,message:'입력한 이메일 정보가 없습니다.'});
//     } else {
//       const result = await bcrypt.compare(userInfo.password, body.password);
//       if (!result) {
//         return res.status(401).json({data: null, message: '입력한 비밀번호가 다릅니다.'})// 비밀번호가 다를 경우
//       }
//       //JWT(access, refresh)토큰 생성후 응답
//       const accesstoken=jwt.sign({
//         id:userInfo.id,
//         email:userInfo.email,
//         username:userInfo.username,
//         createdAt:userInfo.createdAt,
//         updatedAt:userInfo.updatedAt,
//         iat:Math.floor(Date.now() / 1000),
//         exp:Math.floor(Date.now() / 1000) + (60 * 60*24)
//       },process.env.ACCESS_SECRET);
  
//       const refreshtoken=jwt.sign({
//         id:userInfo.id,
//         email:userInfo.email,
//         profile:userInfo.profile,
//         username:userInfo.username,
//         createdAt:userInfo.createdAt,
//         updatedAt:userInfo.updatedAt,
//         iat:Math.floor(Date.now() / 1000),
//         exp:Math.floor(Date.now() / 1000) + (60 * 60*24*30)
//       },process.env.REFRESH_SECRET);
  
//       res.cookie('refreshToken', refreshtoken, {
//         secure: true,
//         httpOnly: true,
//         sameSite:'none',
//       });
//       res.status(200).json({
//         loginSuccess: true,
//         userinfo:{
//           email:userInfo.email,
//           username:userInfo.username
//         },
//         accessToken:accesstoken, 
//         message:'login success'
//       });
//     }
//   })

// 로컬 로그인 전략 실행
router.post('/login', (req, res, next) => {
  // 미들웨어 확장
  passport.authenticate('local', (err, user, info) => { // 서버에러, 성공 객체, 정보
    if (err) { // 서버 에러가 있는 경우
      // console.error(err);
      return next(err);
    }
    if (info) { // 로직 상 에러가 있는 경우 ??
      // console.log(info)
      // return res.status(401).send(info.reason); // 401: 허가되지 않음
      return res.status(401).json({message: info});
    }
    return req.login(user, (loginErr) => {
      // 로그인 저장 시 세션 사용
      if (loginErr) { // passport 로그인 검증
        console.error(loginErr);
        return next(loginErr);
      }
      // res.setHeadher('Cookie', 'asdkjfklasdjlkg') 보안의 위협을 최소화
      return res.status(200).json({message: "success post login"});
    })
  })(req, res, next);
});

router.post('/register', async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    // 이메일 중복체크
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(409).json({message: "이미 사용 중인 이메일입니다!"}); // 상태코드 체크 403: 금지
    }
    // async awiat 사용하지 않으면 res.json()이 먼저 실행
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });
    res.status(200).json({ success: true, message:"회원 가입에 성공했습니다."});
  } catch(error) {
    console.error(error);
    next(error);
  }
})

router.post('/logout', (req, res, next) => {
  req.logout();
  console.log(req.session)
  req.session.destroy();
  res.json({ message: "로그아웃에 성공했습니다." });
}
)

module.exports = router;

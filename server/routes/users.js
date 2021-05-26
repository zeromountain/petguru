const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User } = require('../models');

const router = express.Router();

router.post('/login', passport.authenticate('local', {
    badRequestMessage: '<div class="alert alert-danger">User account is not exist</div>',
    failureFlash: true,
    successFlash: true,
    failureRedirect: '/user/login',
    successRedirect: '/'
}))
// 로컬 로그인 전략 실행
// router.post('/login', (req, res, next) => {
//   // 미들웨어 확장
//   passport.authenticate('local', (err, user, info) => { // 서버에러, 성공 객체, 정보
//     if (err) { // 서버 에러가 있는 경우
//       console.error(err);
//       return next(err);
//     }
//     if (info) { // 로직 상 에러가 있는 경우 ??
//       console.log(info)
//       // return res.status(401).send(info.reason); // 401: 허가되지 않음
//       return res.status(401).json({message: info});
//     }
//     return req.login(user, (loginErr) => {
//       // 로그인 저장 시 세션 사용
//       if (loginErr) { // passport 로그인 검증
//         console.error(loginErr);
//         return next(loginErr);
//       }
//       const filteredUser = Object.assign({}, user.toJSON());
//       // user 객체는 sequelize 객체이기 때문에 순수한 JSON으로 만들기 위해 user.toJSON()
//       // user.toJSON() 하지 않으면 에러 발생
//       // toJSON()을 붙여주는 이유는 서버로부터 전달받은 데이터를 변형하기 때문임.
//       delete filteredUser.password; // 서버로부터 전달받은 데이터를 변형하지 않는다면
//       return res.json(filteredUser); // toJSON()을 붙이지 않고 바로 응답하여도 무방
//       // res.setHeadher('Cookie', 'asdkjfklasdjlkg') 보안의 위협을 최소화
//       // return res.status(200).json(user);
//     })
//   })(req, res, next);
// });

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
  req.session.destroy();
  res.json({ message: "로그아웃에 성공했습니다." });
}
)

module.exports = router;

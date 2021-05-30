const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');

const userRouter = require('./routes/users');
const db = require("./models");
const passportConfig = require('./passport');

dotenv.config();
const app = express();

// 서버 실행하기 전 npx sequelize db:create 실행
db.sequelize.sync()
  .then(() => {
    console.log('db 연결');
  })
  .catch(console.error);
passportConfig();

  //미들웨어 실행 순서 : 위에서 아래로 왼쪽에서 오른쪽으로
app.use(express.json()); // 프론트에서 json형식의 데이터를 보냈을때 데이터를 req.body에 넣어줌
app.use(express.urlencoded({ extended: false })); //form submit 했을 때 데이터를 req.body에 넣어줌
//************************ */
// 로그인을 하면 브라우저랑 서버랑 같은 정보를 들고 있어야
// 실제적인 정보 대신에 아무 의미 없는 쿠키를 브라우저에 보냄
// 서버에서는 쿠키랑 연결되어 있는 세션을 저장 (?)
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, // javascript로 cookie에 접근하지 못하게 하는 옵션
    secure: false
  },
  secret: process.env.COOKIE_SECRET // 숨겨놔야함
  }));
//************************ */
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
      origin: true,
      credentials: true
    })
);

app.use('/user', userRouter)

app.listen(3065, () => {
  console.log('서버 실행 중');
})


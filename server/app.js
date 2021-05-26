const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRouter = require('./routes/users');
const db = require("./models");
const passportConfig = require('./passport');


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
app.use(express.urlencoded({ extended: true })); //form submit 했을 때 데이터를 req.body에 넣어줌
app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ["GET", "POST", "OPTIONS"],
    })
);

app.use('/user', userRouter)

app.listen(3065, () => {
  console.log('서버 실행 중');
})


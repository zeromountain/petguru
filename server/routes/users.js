const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

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
      return res.status(409).send('이미 사용중인 이메일입니다.'); // 상태코드 체크 403: 금지
    }
    // async awiat 사용하지 않으면 res.json()이 먼저 실행
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });
    res.status(200).send('ok');
  } catch {
    console.error(error);
    next(error);
  }
})

router.get('/userinfo', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      }
    });
    if (user) {
      return res.status(200).json({message: "일치하는 유저 정보가 있습니다.", user});
    } else {
      return res.status(403).json({message: "유저 정보가 없습니다."})
    }
  } catch {
    console.error(error);
    next(error);
  }
})


module.exports = router;

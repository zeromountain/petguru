const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const {User} = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({
        where: { email }
      });
      if (!user) {
        return done(null, false, { reason: '존재하지 않는 이메일입니다.'}) // 서버에러, 성공, 클라이언트 에러
      }
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return done(null, user); // 성공하면 user 라우터 콜백으로 가서 패스포트 로그인 시도
      }
      return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
    } catch(error) {
      console.error(error);
      return done(error);
    }
  }))
}
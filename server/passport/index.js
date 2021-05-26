const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id); // 쿠키랑 묶어서 id 값만 저장
  });
  
  passport.deserializeUser(async(id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      return done(null, user); // id를 통해서 복구(?)
    } catch (error) {
      console.error(error);
      return done(error)
    } 
  })

  local();
}
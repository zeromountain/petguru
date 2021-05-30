module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    socialGoogleId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    login: {
      type: DataTypes.BOOLEAN
    },
    metorAuth: {
      type: DataTypes.BOOLEAN
    },
    userImageUrl: {
      type: DataTypes.STRING
    },
    mentorCareer: {
      type: DataTypes.STRING
    },
    mentorDescription: {
      type: DataTypes.STRING
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' //한글 저장
  });
  User.associate = (db) => {
    db.User.hasMany(db.Question);
    db.User.hasMany(db.Thread);
    db.User.hasMany(db.Answer);
    db.User.hasMany(db.Pet);
    db.User.hasMany(db.Missing);
    db.User.hasMany(db.MissingComment);
  };
  console.log(User);
  return User;
}
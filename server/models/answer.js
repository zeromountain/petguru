module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    // userId, questionId
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' //한글 저장
  });
  Answer.associate = (db) => {
    db.Answer.belongsTo(db.User);
    db.Answer.belongsTo(db.Question);
  };
  return Answer;
}
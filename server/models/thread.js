module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    // userId, questionId
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' //한글 저장
  });
  Thread.associate = (db) => {
    db.Thread.belongsTo(db.User);
    db.Thread.belongsTo(db.Question);
  };
  return Thread;
}
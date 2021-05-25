module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    // userId, petId
    category: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' //한글 저장
  });
  Question.associate = (db) => {
    db.Question.belongsTo(db.User);
    db.Question.belongsTo(db.Pet);
  };
  return Question;
}
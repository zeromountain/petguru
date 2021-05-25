module.exports = (sequelize, DataTypes) => {
  const MissingComment = sequelize.define('MissingComment', {
    // userId, missingId
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' //한글 저장
  });
  MissingComment.associate = (db) => {
    db.MissingComment.belongsTo(db.User);
    db.MissingComment.belongsTo(db.Missing);
  };
  return MissingComment;
}
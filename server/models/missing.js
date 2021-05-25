module.exports = (sequelize, DataTypes) => {
  const Missing = sequelize.define('Missing', {
    // userId, petId,
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    missingStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    missingLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
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
  Missing.associate = (db) => {
    db.Missing.belongsTo(db.User);
    db.Missing.belongsTo(db.Pet);
  };
  return Missing;
}
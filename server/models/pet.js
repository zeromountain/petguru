module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    // userId
    petName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    petType: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' //한글 저장
  });
  Pet.associate = (db) => {
    db.Pet.belongsTo(db.User);
    db.Pet.hasMany(db.Missing);
  };
  return Pet;
}
const { sequelize } = require("../util/database");
const { DataTypes } = require("sequelize");

console.log(sequelize);

module.exports = {
  User: sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
      },
      hashedPass: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  ),
};

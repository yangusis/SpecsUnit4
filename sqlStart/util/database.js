const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "toor", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

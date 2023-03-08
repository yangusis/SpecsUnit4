require("dotenv").config({ path: "../.env" });
const Sequelize = require("sequelize");

const { PORT } = process.env;

// connect to local db, heroku aint free
const sequelize = new Sequelize("sequelizepractice", "root", "toor", {
  port: PORT,
  dialect: "mysql",
  host: "localhost",
});

// for some reason this needs braces otherwise doesn't work properly, and timeout connection issue
// might have been on the cusp of figuring it out, but probably would take me till the next day
module.exports = { sequelize };

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("smartLivingDB", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

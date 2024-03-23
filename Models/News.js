const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const News = sequelize.define(
  "News",
  {
    // Model attributes are defined here
    Title:{
      type:DataTypes.STRING,
      allowNull:true,

    },
    Type:{
      type:DataTypes.STRING,
      allowNull:true,
    }
  },
);

module.exports = News;

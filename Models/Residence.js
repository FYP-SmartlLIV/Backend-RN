const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Residents = sequelize.define("Residents", {
  // Model attributes are defined here
  Residents_No: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  Cnic: {
    type: DataTypes.NVARCHAR(13),
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Residents;

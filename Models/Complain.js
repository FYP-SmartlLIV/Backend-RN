const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Complains = sequelize.define(
  "Complains",
  {
    // Model attributes are defined here
    Complaint_No: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull: false,
      primaryKey: true,
      
    },
    Cnic: {
      type: DataTypes.NVARCHAR(13),
      allowNull: false,
      unique: true,
    },
    Phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Address:{
      type:DataTypes.STRING,
      allowNull:false,

    },
    Complain:{
      type:DataTypes.STRING,
      allowNull:false,
      
    }
  },
);

module.exports = Complains;

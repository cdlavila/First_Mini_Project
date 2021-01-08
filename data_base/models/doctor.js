const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Doctor extends Model {}
Doctor.init({
  Doctor_Name: DataTypes.STRING,
  // Hospital_Id: DataTypes.INTEGER.UNSIGNED,
  Speciality: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Doctor'
  // freezeTableName: true
})

module.exports = Doctor

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Hospital extends Model {}
Hospital.init({
  Hospital_Name: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Hospital'
  // freezeTableName: true
})

module.exports = Hospital

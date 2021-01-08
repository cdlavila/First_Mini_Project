const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Hospital extends Model {}
Hospital.init({
  Hospital_Name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        args: true,
        msg: "Hospital name must only have letters"
      },
      len: {
        args: [3, 50],
        msg: "Hospital name must be between 3 and 50 letters"
      }
    }
  }
}, {
  sequelize,
  modelName: 'Hospital',
  freezeTableName: true,
  timestamps: false
})

module.exports = Hospital

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Doctor extends Model {}
Doctor.init({
  Doctor_Name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        args: true,
        msg: "Doctor name must only have letters"
      },
      len: {
        args: [3, 50],
        msg: "Doctor name must be between 3 and 50 letters"
      }
    }
  },
  Speciality: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        args: true,
        msg: "Speciality must only have letters"
      },
      len: {
        args: [4, 20],
        msg: "Speciality must be between 4 and 20 letters"
      }
    }
  }
}, {
  sequelize,
  modelName: 'Doctor',
  freezeTableName: true,
  timestamps: false
})

module.exports = Doctor

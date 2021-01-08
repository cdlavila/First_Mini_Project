const express = require('express')
const router = express.Router()
const Doctor = require('../data_base/models/doctor')

/// /// DOCTOR CRUD

// CREATE
router.post('/', (req, res) => {
  Doctor.create({
    Doctor_Name: req.body.Doctor_Name,
    Speciality: req.body.Speciality
  }).then(doctor => {
    res.json(doctor)
  })
})

// READ
router.get('/:id', (req, res) => {
  Doctor.findByPk(req.params.id).then(doctor => {
    res.json(doctor)
  })
})

// UPDATE
router.post('/:id', (req, res) => {
  Doctor.update({
    Doctor_Name: req.body.Doctor_Name,
    Speciality: req.body.Speciality
  }, {
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result)
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  Doctor.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result)
  })
})

module.exports = router

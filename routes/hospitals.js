const express = require('express')
const router = express.Router()
const Hospital = require('../data_base/models/hospital')
const Doctor = require('../data_base/models/doctor')

// Print all hospitals
router.get('/', (req, res) => {
  Hospital.findAll({
    include: {
      model: Doctor,
      as: "Doctors",
      attributes: ['id', 'Doctor_Name', 'Speciality']
    },
    attributes: ['id', 'Hospital_Name']
  }).then(hospitals => {
    res.json(hospitals)
  })
})

//------HOSPITAL CRUD

// CREATE
router.post('/', (req, res) => {
  Hospital.create({
    Hospital_Name: req.body.Hospital_Name
  }).then(hospital => {
    res.json(hospital)
  }).catch(err => {
    res.json(err)
  })
})

// READ
router.get('/:id', (req, res) => {
  Hospital.findByPk(req.params.id).then(hospital => {
    res.json(hospital)
  })
})

// UPDATE
router.post('/:id', (req, res) => {
  Hospital.update({
    Hospital_Name: req.body.Hospital_Name
  }, {
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result)
  }).catch(err => {
    res.json(err)
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  Hospital.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result)
  })
})

module.exports = router

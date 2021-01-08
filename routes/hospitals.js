const express = require('express')
const router = express.Router()
const Hospital = require('../data_base/models/hospital')

/// /// HOSPITAL CRUD

// CREATE
router.post('/', (req, res) => {
  Hospital.create({
    Hospital_Name: req.body.Hospital_Name
  }).then(hospital => {
    res.json(hospital)
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

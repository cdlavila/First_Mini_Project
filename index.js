//Environment variables
require('dotenv').config()

// Express
const express = require('express')
const app = express()

// Models association
require('./data_base/associations')

// The connection to the data base
const sequelize = require('./data_base/db')

// Server settings
const port = process.env.PORT || 3000

// To req.body -> (PostMan)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/', (req, res) => {
  res.send('Hospital working!')
})

// To routes /api/doctors and /api/hospitals will can be used
app.use('/api/doctors', require('./routes/doctors'))
app.use('/api/hospitals', require('./routes/hospitals'))

// Application start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

  // connecting with data base
  sequelize.sync({ force: false }).then(() => {
    console.log('We have successfully connected to the data base!')
  }).catch(error => {
    console.log('An error has occurred', error)
  })
})
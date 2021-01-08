require('dotenv').config()
const express = require('express')
const app = express()

const sequelize = require('./data_base/db')

// Settings
const port = process.env.PORT || 3000

// To req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// ?
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

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const rocketRoutes = require('./routes/rocketRoutes')
const { notFound, errorHandler } = require('./middleware/error')

dotenv.config()

db()

const app = express()

app.use(
  cors({
    origin: '*'
  })
)

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/rockets', rocketRoutes)

app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

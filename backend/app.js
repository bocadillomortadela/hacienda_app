const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./src/routes/user.routes')
const connectDB = require('./src/config/db')
require('dotenv').config()

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/v1/users', userRouter)

app.get('/', (req, res) => {
  res.send('Servidor funcionando 🟩')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`✅ Server activo en: http://localhost:${PORT}`)
})

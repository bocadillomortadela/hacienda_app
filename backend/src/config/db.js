const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('conectado a mongodb')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB

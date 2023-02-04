const mongoose = require('mongoose')

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    })
  } catch (error) {
    console.error(error)

    process.exit(1)
  }
}

module.exports = db

const mongoose = require('mongoose')

let connection = null
module.exports.getDataBase = async () => {
  if (connection) {
    console.log('Using cached connection')
    return connection
  }

  try {
    connection = await mongoose.connect(
      'mongodb+srv://mirangs:123654789@cluster0.owxai.mongodb.net/GeorgiaChecklist?retryWrites=true&w=majority'
    )
    console.log('Connected to Mongo')
    return connection
  } catch (err) {
    console.error(`Error while connecting to mongo: ${err.message}`)
  }
}

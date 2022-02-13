const mongoose = require('mongoose')

async function connect() {
   try {
      await mongoose.connect(process.env.MONGODB)
      console.log('Database connect successfully')
   } catch (err) {
      console.log('Database connect failure')
   }
}

module.exports = { connect }

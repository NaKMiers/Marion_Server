const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductionSchema = new Schema(
   {
      
   },
   { timestamps: true }
)

module.exports = mongoose.model('Productions', ProductionSchema)

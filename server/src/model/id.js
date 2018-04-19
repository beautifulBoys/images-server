import mongoose from 'mongoose'

var Schemas = new mongoose.Schema({
    type: String,
    value: {
      type: Number,
      default: 1
    }
}, {
    versionKey: false
})

var ids = mongoose.model('Ids', Schemas)

export default ids
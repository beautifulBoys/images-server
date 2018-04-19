import mongoose from 'mongoose'

var Schemas = new mongoose.Schema({
    name: {
      type: String,
      default: 0
    },
    suffix: {
      type: String,
      default: ''
    },
    fullName: {
      type: String,
      default: ''
    },
    oldName: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    tag: {
      type: Array,
      default: []
    },
    size: {
      type: Number,
      default: 0
    },
    uploadTime: {
      type: Date,
      default: new Date()
    }
}, {
    versionKey: false
})

export default mongoose.model('file', Schemas)

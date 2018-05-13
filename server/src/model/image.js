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
    status: { // 图片的状态： 1：正常 ，0：已删除，其他待定
      type: String,
      default: '1'
    },
    uploadTime: {
      type: Date,
      default: new Date()
    }
}, {
    versionKey: false
})

export default mongoose.model('image', Schemas)

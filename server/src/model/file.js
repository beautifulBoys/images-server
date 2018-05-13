import mongoose from 'mongoose'

var Schemas = new mongoose.Schema({
    name: {
      type: String,
      default: ''
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
    type: { // 文件类型 原生
      type: String,
      default: ''
    },
    fileType: { // 文件类型 名称
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

export default mongoose.model('file', Schemas)

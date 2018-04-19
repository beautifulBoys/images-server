import mongoose from 'mongoose';

var Schemas = new mongoose.Schema({
  id: Number,
  avatar: { // 头像地址
    type: String,
    default: 'https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/master/source/tourism-circle/avatar.png'
  },
  email: {
      type: String,
      default: '1298947916@qq.com'
  }
}, {
    versionKey: false
});

export default mongoose.model('user', Schemas);
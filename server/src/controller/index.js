import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import sleep from 'sleep'
import Id from '../model/id.js'
import User from '../model/user.js'
import {saveImgList, rm} from '../lib/fs_func.js'
import Mq from '../lib/mq.js'
/*
部分功能示例
  递归删除文件、目录及其内容
  rm(path.join(__dirname, '../../resource/aa/'))


*/

let index = 0
const mmmm = new Mq()
async function fn (res, resolve, reject) {
  await Id.update({type: 'userId'}, {$inc: {value: +1}}, {multi: false}, () => {})
  let obj = await Id.findOne({type: 'userId'})
  sleep.msleep(100)
  index++
  console.log('----------------ID: ' + index + '---停留了100毫秒----------------')
  // 创建 user 表
  await User.create({id: obj.value + 1}, (err, docs) => {
    if (err) {
      console.log('create user 出错了', err)
      reject(err)
    } else {
      resolve()
      res.send({title: 'Express'})
    }
  });
}
function  FUN (res) {
  return function () {
    return new Promise((resolve, reject) => {
      fn(res, resolve, reject)
    })
  }
}

export const uploadFunc = (req, res) => {
  var form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '../../linshi')
  let npath = path.join(__dirname, '../../resource/')

  form.parse(req, (err, fields, files) => { // 已上传到临时文件夹
    let result = saveImgList(files, npath)
    
    res.send({title: 'Express', result})

  })
}


export const testFunc = async (req, res) => {
  mmmm.set(new FUN(res))
  // 现存偶发bug，跳id ，第一个 id 会重复。
}


import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import {sleep, msleep} from 'sleep'
import Id from '../model/id.js'
import User from '../model/user.js'
import {saveImgList, rm} from '../lib/fs_func.js'
import Mq from '../lib/mq.js'
/*
部分功能示例
  递归删除文件、目录及其内容
  rm(path.join(__dirname, '../../resource/aa/'))


*/
export const uploadFunc = (req, res) => {
  var form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '../../linshi')
  let npath = path.join(__dirname, '../../resource/')

  form.parse(req, (err, fields, files) => { // 已上传到临时文件夹
    let result = saveImgList(files, npath)
    
    res.send({title: 'Express', result})

  })
}












const mmmm = new Mq()

export const testFunc = async (req, res) => {
  let mqObj = {
    fn: new mmmm.create(
      async (resolve, reject) => {
        await Id.update({type: 'userId'}, {$inc: {value: +1}}, {multi: false}, () => {})
        let obj = await Id.findOne({type: 'userId'})
        console.log('-----------------停留了300毫秒----------------')
        // 创建 user 表
        try {
          let docs = await User.create({id: obj.value + 1})
          // resolve(docs)
          res.send({title: '保存成功', docs: docs._id})
        } catch (err) {
          // reject(err)
          res.send({title: '保存失败', err})
        }
        msleep(4000)
      }
    )
  }
  mmmm.set(mqObj)
}


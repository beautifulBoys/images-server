import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import fileType from '../config/file_type.js'

import Id from '../model/id.js'
import File from '../model/file.js'
import {saveImgList, rm, mkdir, rename} from '../lib/fs_func.js'
import Mq from '../lib/mq.js'
import formDate from '../lib/formDate.js'

import config from '../config/index.js'
/*
部分功能示例
  递归删除文件、目录及其内容
  rm(path.join(__dirname, '../../resource/aa/'))


*/

const uploadFn = async (res, fields, files, dirPath) => {
  let result = []
  for (let key in files) {
    let file = files[key]
    let suffix = file.name.replace(/.+\./, '')
    let fileName = file.name.replace(new RegExp(`.${suffix}`, 'ig'), '')
    let obj = await Id.findOne({type: 'filesId'})
    let newFileName = `${new Date().getTime().toString()}_${obj.value}`
    await Id.update({type: 'filesId'}, {$inc: {value: +1}}, {multi: false}, () => {})
    let newPath = path.join(dirPath, `/${newFileName}.${suffix}`)
    try {
      await rename(file.path, newPath)
      await File.create({
        name: newFileName,
        suffix,
        fullName: file.name,
        oldName: fileName,
        type: file.type,
        fileType: fileType[suffix] ? fileType[suffix].fileType : 'file',
        path: newPath,
        desc: '',
        tag: '',
        size: file.size
      })
      
      result.push({
        status: true,
        file: file
      })
    } catch (err) {
      result.push({
        status: false,
        file: file,
        err
      })
    }

  }
  res.send({
    code: 200,
    message: '保存成功',
    data: result
  })
}

export const uploadFunc = async (req, res) => {
  let time = formDate.formatDateTime(new Date())
  let dirName = time.year + time.month + time.day
  let dirPath = path.join(config.resourceDir, '/' + dirName)

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
    File.create({
      name: dirName,
      fileType: 'dir',
      path: dirPath
    })
  }
  
  var form = new formidable.IncomingForm()
  form.uploadDir = config.tempDir

  form.parse(req, (err, fields, files) => { // 此时已上传到临时文件夹
    uploadFn(res, fields, files, dirPath)
  })
}


export const testFunc = async (req, res) => {
  
  var form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '../../image_cash/')
  let npath = path.join(__dirname, '../../resource/')

  form.parse(req, (err, fields, files) => { // 此时已上传到临时文件夹
    let result = saveImgList(files, npath)
    
    res.send({title: 'Express', result})

  })
}

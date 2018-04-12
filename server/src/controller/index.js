import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import {saveImgList} from '../router/func.js'

export const uploadFunc = async (req, res) => {
  var form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '../../linshi')
  let npath = path.join(__dirname, '../../resource/')

  form.parse(req, (err, fields, files) => {
    let result = saveImgList(files, npath)
    
    res.send({title: 'Express', result})

  })
}
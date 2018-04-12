import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import {saveImgList} from '../router/func.js'
import {rmfold} from '../lib/util.js'

export const uploadFunc = (req, res) => {
  rmfold(path.join(__dirname, '../../resource/aa/'))
  

  // var form = new formidable.IncomingForm()
  // form.uploadDir = path.join(__dirname, '../../linshi')
  // let npath = path.join(__dirname, '../../resource/')

  // form.parse(req, (err, fields, files) => {
  //   let result = saveImgList(files, npath)
    
  //   res.send({title: 'Express', result})

  // })
}
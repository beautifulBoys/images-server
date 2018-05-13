import express from 'express'
import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import {uploadFunc, testFunc} from '../controller/index.js'
const router = express.Router()

router.post('/upload', uploadFunc)
router.post('/test', testFunc)




export default (app) => {
  app.use('/', router)
}

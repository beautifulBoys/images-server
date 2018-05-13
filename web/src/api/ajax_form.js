/**
 * Created by Administrator on 2017/6/7.
 */
import axios from 'axios'
import Vue from 'vue'

let ajaxConfigForm = {
  baseURL: '/api/',
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  onUploadProgress (progressEvent) {
    console.log(progressEvent)
  }
}

var _ajaxForm = axios.create(ajaxConfigForm)

function ajaxForm (url, data) {
  return _ajaxForm.post(url, data).catch(() => {
    throw err
  })
}

export default ajaxForm

// class AjaxForm {
//   constructor (data, progressEvent) {
//
//     this._ajaxForm = axios.create({
//       baseURL: '/api/',
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       },
//       onUploadProgress (e) {
//         progressEvent(e)
//       }
//     })
//
//     this.progress = progressEvent
//
//
//   }
//   progress () {
//
//   }
//   post (url, data) {
//     return this._ajaxForm.post(url, data).catch(() => {
//       throw err
//     })
//   }
// }
// export default AjaxForm

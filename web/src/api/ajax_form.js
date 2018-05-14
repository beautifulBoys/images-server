/**
 * Created by Administrator on 2017/6/7.
 */
import axios from 'axios'
import Vue from 'vue'

class AjaxForm {
  constructor (progressFn) {

    this._ajaxForm = axios.create({
      baseURL: '/api/',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress (e) {
        progressFn(e)
      }
    })
  }
  post (url, data) {
    return this._ajaxForm.post(url, data).catch(err => {
      throw err
    })
  }
}

export default AjaxForm

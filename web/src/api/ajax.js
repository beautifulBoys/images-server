/**
 * Created by Administrator on 2017/6/7.
 */
import axios from 'axios'
import Vue from 'vue'
import Cookie from 'js-cookie'

let ajaxConfig = {
  baseURL: '/api/',
  transformResponse: [function (data) {
    return JSON.parse(data)
  }],
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

var _ajax = axios.create(ajaxConfig)

// 拦截response(有加载等待)
_ajax.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  } else {
    console.error('请求出错啦，status：' + response.status)
    throw new Error('Internal Server Error')
  }
}, (error) => {
  if (error.message) console.log(error.message)
  throw error
})

// 统一的错误处理函数
function _ajaxCatch (err) {
  throw err
}

function ajax (url, data) {
  return _ajax.post(url, data).catch(_ajaxCatch)
}

export default ajax

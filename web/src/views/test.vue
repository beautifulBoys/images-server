<template>
  <div class="home">
    <input type="file" ref="file" multiple="multiple" />
    <div class="btn" @click="upladFile()">上传</div>
    <div class="btn" @click="test()">测试</div>
  </div>
</template>
<script>
import {uploadAjax, testAjax} from '../api/ajax_router.js'
  export default {
    mounted () {

    },
    methods: {
      upladFile () {
        var files = this.$refs.file.files
        for (let i = 0; i < files.length; i++) {
          var formData = new FormData()
          formData.append('file', files[i])
          function fn (e) {
            console.log(files[i].name + ' 的进度', parseInt(100 * e.loaded / e.total) + '%')
          }
          uploadAjax(fn, formData).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        }
      },
      cancleUploadFile () {
        this.xhr.abort()
      },
      test () {
        for (let i = 0; i < 20; i++) {
          this.ajax()
        }
      },
      ajax () {
        testAjax().then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
    box-sizing: border-box;
    padding: 20px 30px;
    .btn {
      width: 100px;
      line-height: 30px;
      background: green;
      text-align: center;
      color: #fff;
      margin-top: 20px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>

<template>
  <div class="home">
    <input type="file" ref="file" multiple="multiple" />
    <div class="btn" @click="upladFile()">上传</div>
  </div>
</template>
<script>
import {uploadAjax} from '../api/ajax_router.js'
  export default {
    data () {
      return {
        status: false
      }
    },
    mounted () {

    },
    methods: {
      upladFile () {
        var files = this.$refs.file.files
        var formData = new FormData()
        for (let i = 0; i < files.length; i++) {
          formData.append('file' + i, files[i])
        }
        uploadAjax(formData).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      cancleUploadFile () {
        this.xhr.abort()
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

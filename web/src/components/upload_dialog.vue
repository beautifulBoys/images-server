<template>
  <el-dialog title="文件上传" :visible.sync="data.status" width="60%" style="min-width: 800px">
    <div class="body">

      <el-button-group>
        <el-button plain size="small" class="btn">
          选择文件<input type="file" class="file" ref="file" multiple="multiple" @change="fileChange()" />
        </el-button>
        <el-button type="primary" icon="el-icon-upload2" @click="uploadEvent()">点击上传</el-button>
      </el-button-group>

      <ul class="ul">
        <li class="li" v-for="item in fileList">
          <div class="bg" :style="{width: toPercent(item.info.progress)}"></div>
          <div class="con">
            <div class="name">{{item.info.name}}</div>
            <div class="size">{{bytesToSize(item.info.size)}}</div>
            <div class="dir"><a href="#">{{item.info.dirName}}</a></div>
            <div class="progress">{{toPercent(item.info.progress)}}</div>
            <div class="icon">
              <i class="el-icon-loading" style="font-size: 18px;color: #666;" v-show="item.info.progress > 0 && item.info.progress < 1"></i>
              <i class="el-icon-circle-check-outline" style="font-size: 18px;color: lightgreen;" v-show="item.info.progress === 1"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </el-dialog>
</template>
<script>
import {uploadAjax, testAjax} from '../api/ajax_router.js'
  export default {
    props: ['data'],
    data () {
      return {
        fileList: [
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          // {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'}
        ]
      }
    },
    methods: {
      fileChange () {
        console.log(this.$refs.file.files)
        this.fileList = []

        let arr = [...this.$refs.file.files]
        arr.forEach(item => {
          this.fileList.push({
            info: {
              name: item.name,
              size: item.size,
              dirName: '我的电脑',
              progress: 0
            },
            file: item
          })
        })
      },
      uploadEvent () {
        this.fileList.forEach(item => {
          var formData = new FormData()
          formData.append('file', item.file)
          function fn (e) {
            item.info.progress = e.loaded / e.total
            console.log(item.name + ' 的进度', parseInt(100 * e.loaded / e.total) + '%')
          }
          uploadAjax(fn, formData).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        })
      },
      toPercent (point) {
        var str = Number(point * 100).toFixed(2)
        str += '%'
        return str
      },
      bytesToSize (bytes) {
        if (bytes === 0) return '0 B'
        let k = 1024
        let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        let i = Math.floor(Math.log(bytes) / Math.log(k))

        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
      }
    }
  }
</script>
<style lang="less" scoped>
.body {
  width: 100%;
  margin-top: -20px;

  padding: 10px;
  box-sizing: border-box;
  .btn {
    width: 200px;
    padding: 12px;
    border: 1px solid #409eff;
    font-size: 14px;
    position: relative;
    .file {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .ul {
    width: 100%;
    margin: 20px 0;
    padding: 0;
    max-height: 300px;
    overflow-y: auto;
    .li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      position: relative;
      border-bottom: 1px solid #eee;
      margin: 0;
      margin-top: 10px;
      padding: 0;
      list-style-type: none;
      .bg {
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 0;
        background: rgba(103,194,58,0.25);
        transition: width 0.05s;
      }
      .con {
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 100%;
        font-size: 13px;
        color: #333;
        display: flex;
        padding: 0 20px;
        box-sizing: border-box;
        .name {
          flex: 1;
        }
        .size {
          width: 15%;
          text-align: center;
        }
        .progress {
          width: 15%;
          text-align: center;
        }
        .dir {
          width: 15%;
          text-align: center;
          a {
            color: #3a8ee6;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .icon {
          width: 50px;
          text-align: center;
        }
      }
    }
  }
}
</style>

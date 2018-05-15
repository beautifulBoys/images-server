<template>
  <el-dialog title="文件上传" :visible.sync="data.status" width="60%">
    <div class="body">

      <el-button-group>
        <el-button plain size="small" class="btn">
          选择文件<el-input type="file" class="file"></el-input>
        </el-button>
        <el-button type="primary" icon="el-icon-upload2" @click="uploadEvent()">点击上传</el-button>
      </el-button-group>

      <ul class="ul">
        <li class="li" v-for="item in list">
          <div class="bg"></div>
          <div class="con">
            <div class="name">{{item.name}}</div>
            <div class="size">{{item.size}}</div>
            <div class="dir"><a href="#">{{item.dirName}}</a></div>
            <div class="icon">
              <i class="el-icon-loading" style="font-size: 18px;color: #666;"></i>
              <i class="el-icon-circle-check-outline" style="font-size: 18px;color: #888;"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    props: ['data'],
    data () {
      return {
        list: [
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'},
          {name: 'aaaa.jpg', size: '1543kb', dirName: '我的电脑', progress: '12.06%'}
        ]
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
    overflow-y: scroll;
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
        width: 60%;
        background: rgba(103,194,58,0.25);
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
          width: 20%;
          text-align: center;
        }
        .dir {
          width: 20%;
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
          width: 70px;
          text-align: center;
        }
      }
    }
  }
}
</style>

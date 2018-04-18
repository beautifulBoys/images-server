<template>
  <div class="home">
    <div class="header">
      <el-button-group class="btn-group">
        <!-- <el-button type="primary" size="medium" icon="el-icon-upload2">上传</el-button> -->
        <el-button type="primary" size="small" icon="el-icon-upload2">上传</el-button>
      </el-button-group>
      <el-button-group class="btn-group">
        <el-button size="small" icon="el-icon-upload2">新建文件夹</el-button>
      </el-button-group>
      <el-button-group class="btn-group">
        <el-button icon="el-icon-download" size="small">下载</el-button>
        <el-button icon="el-icon-delete" size="small">复制</el-button>
        <el-button icon="el-icon-rank" size="small">移动</el-button>
        <el-button icon="el-icon-delete" size="small">删除</el-button>
      </el-button-group>
    </div>
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        <span class="status">已全部加载，共65个</span>
      </el-breadcrumb>
    </div>
    <div class="content" style="height: calc(100% - 82px)">
      <div class="box">
        <template v-for="item in 11">
          <image-item :data="item"></image-item>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import imageItem from '../components/image_item.vue'
  export default {
    components: {
      'image-item': imageItem
    },
    data () {
      return {
        status: false,
        list: []
      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      padding: 10px 10px;
      box-sizing: border-box;
      .btn-group {
        margin-right: 10px;
      }
    }
    .bread {
      width: 100%;
      padding: 5px 15px 10px 15px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      .status {
        float: right;
        font-size: 14px;
        color: #606266;
      }
    }
    .content {
      width: 100%;
      padding: 10px;
      overflow-y: scroll;
      box-sizing: border-box;
      .box {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

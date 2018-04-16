<template>
  <div class="home">
    <div class="header">
      <el-button-group class="btn-group">
        <el-button type="primary" size="medium" icon="el-icon-upload2">上传</el-button>
      </el-button-group>
      <el-button-group class="btn-group">
        <el-button size="medium" icon="el-icon-upload2">新建文件夹</el-button>
      </el-button-group>
      <el-button-group class="btn-group">
        <el-button icon="el-icon-download" size="medium">下载</el-button>
        <el-button icon="el-icon-delete" size="medium">复制</el-button>
        <el-button icon="el-icon-rank" size="medium">移动</el-button>
        <el-button icon="el-icon-delete" size="medium">删除</el-button>
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

  </div>
</template>
<script>
  export default {
    data () {
      return {
        status: false
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
      padding: 5px 15px;
      box-sizing: border-box;
      .status {
        float: right;
        font-size: 14px;
        color: #606266;
      }
    }
  }
</style>

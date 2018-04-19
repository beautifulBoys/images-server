<template>
  <div class="home">
    <div class="header">
      <el-button-group class="btn-group">
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
    <div class="content" :style="`height: ${scrollHeight}px`">
      <template v-for="item in list">
        <image-item :data="item"></image-item>
      </template>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import imageItem from '../components/image_item.vue'
import list from './data.js'
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
    computed: {
      scrollHeight () {
        return this.$store.state.size.clientHeight - 144
      }
    },
    mounted () {
      for (let i = 0; i < list.length; i++) {
        this.list.push({
          ...list[i],
          selected: false
        })
      }
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


      // .box {
      //   width: 100%;
      //   height: 100%;
      // }
    }
  }
</style>
<style>
::-webkit-scrollbar {
  width: 10px;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.2);
  background: #f6f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
  background: rgba(59, 140, 255, 0.1);
}
::-webkit-scrollbar-thumb:hover {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.4);
  background: rgba(59, 140, 255, 0.2);
}
</style>

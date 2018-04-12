<template>
  <el-row class="tac">
    <el-col :span="12">
    <el-menu default-active="2" class="el-menu-vertical-demo"
      @open="handleOpen" @close="handleClose"
      :unique-opened="true" router theme="dark"
    >
      <div class="logo"></div>
      <el-menu-item index="/"><i class="el-icon-setting"></i>首页</el-menu-item>
      <template v-for="(item, index) in menuList">
        <el-submenu :index="index + ''">
          <template slot="title"><i class="el-icon-message"></i>{{item.text}}</template>
          <el-menu-item-group>
            <el-menu-item :index="item1.path" :key="index1" v-for="(item1, index1) in item.list">{{item1.text}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </el-col>

  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        defaultActive: '1',
        menuList: [
          {
            text: '逛圈子',
            list: [
              {path: 'newest', text: '最新动态'}
            ]
          }
        ]
      };
    },
    methods: {
      handleOpen () {},
      handleClose () {}
    }
  };
</script>
<style lang="less" scoped>
.logo {
  width: 100%;
  line-height: 80px;
  text-align: center;
  height: 80px;
  color: #20A0FF;
  font-size: 30px;
  font-family: "微软雅黑";
  border-bottom: 1px solid #000;
  background: url(../images/logo.png) no-repeat center center;
  background-size: 120px;
  cursor: pointer;
}
.el-col-12 {
  width: 100%;
}
.el-menu.el-menu-vertical-demo {
  border: none;
}
</style>
<style>
.el-menu-item-group__title {
  padding-top: 0;
  padding-bottom: 0;
}
</style>

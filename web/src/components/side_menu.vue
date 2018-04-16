<template>
  <el-row class="tac">
    <el-col :span="12">
    <el-menu default-active="1" class="el-menu-vertical-demo"
      @open="handleOpen" @close="handleClose" :unique-opened="true" router
      background-color="#eef1f6" active-text-color="#409EFF"
    >
      <div class="logo"></div>
      <template v-for="(item, index) in menuList">
        <el-menu-item index="/newest"><i class="el-icon-setting"></i>首页</el-menu-item>
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
            path: 'newest'
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
  text-align: center;
  height: 60px;
  color: #20A0FF;
  font-size: 30px;
  font-family: "微软雅黑";
  background: url(../images/logo1.png) no-repeat center center;
  background-size: 200px;
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
<style>
  .el-menu-item {
    line-height: 50px;
    height: 50px;
  }
</style>

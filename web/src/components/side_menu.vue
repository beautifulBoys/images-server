<template>
  <div class="side-menu">
    <div class="logo"></div>
    <div class="menu-item" @click="defaultActive = index"
      :class="{active: defaultActive === index}" v-for="(item, index) in menuList">
      <div class="icon"><i :class="item.class"></i></div>
      <div class="text">{{item.text}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        defaultActive: 0,
        menuList: [
          { text: '全部', path: 'all', class: 'el-icon-menu' },
          { text: '图片', path: 'image', class: 'el-icon-picture' },
          { text: '文档', path: 'doc', class: '' },
          { text: '视频', path: 'video', class: '' },
          { text: '音乐', path: 'music', class: '' },
          { text: '压缩包', path: 'zip', class: '' }
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
.side-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  .logo {
    width: 100%;
    height: 70px;
    background: url(../images/logo.png) no-repeat center center;
    background-size: 90% auto;
  }
  .menu-item {
    line-height: 50px;
    padding: 0 30px;
    font-size: 15px;
    color: #333;
    cursor: pointer;
    display: flex;
    .icon {
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      flex: 1;
    }
    &:hover {
      background: rgba(59, 140, 255, 0.1);
    }
    &.active {
      color: #3b8cff;
      background: rgba(59, 140, 255, 0.1);
    }
  }
}


</style>

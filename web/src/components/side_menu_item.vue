<template>
  <div class="menu-item">{{item.text}}</div>
</template>
<script>
  export default {
    props: ['item'],
    data () {
      return {
        defaultActive: '1',
        menuList: [
          { text: '全部', path: 'all' },
          { text: '图片', path: 'image' },
          { text: '文档', path: 'doc' },
          { text: '视频', path: 'video' },
          { text: '音乐', path: 'music' },
          { text: '压缩包', path: 'zip' }
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
.menu-item {
  line-height: 55px;
  padding: 0 100px;
  font-size: 14px;
  color: #333;
}

</style>

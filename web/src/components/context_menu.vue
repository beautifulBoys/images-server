<template>
  <div class="screen" ref="content_menu_screen" v-show="data.status" @click="close">
    <ul class="menu" :style="`top: ${data.posY}px; left: ${data.posX}px;`">
      <li class="li" :class="{can: false}" v-for="item in menu" @click="checkEvent(item)">{{item.text}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['data'],
    data () {
      return {
        menu: [
          {type: '', text: '打开'},
          {type: '', text: '复制链接'},
          {type: '', text: '重命名'},
          {type: '', text: '复制'},
          {type: '', text: '移动'},
          {type: '', text: '下载'},
          {type: '', text: '删除'},
        ]
      }
    },
    beforeDestroy () {
      this.$refs.content_menu_screen.removeEventListener('contextmenu', e => {
        e.preventDefault()
        e.stopPropagation()
        this.changeContextMenu({
          status: false,
          posX: 0,
          posY: 0
        })
      }, false)
    },
    mounted () {
      this.$refs.content_menu_screen.addEventListener('contextmenu', e => {
        e.preventDefault()
        e.stopPropagation()
        this.$store.commit('components/changeContextMenu', {
          status: false,
          posX: 0,
          posY: 0
        })
      }, false)
    },
    methods: {
      close (e) {
        e.preventDefault()
        e.stopPropagation()
        this.$store.commit('components/changeContextMenu', {
          status: false,
          posX: 0,
          posY: 0
        })
      },
      checkEvent (item) {
        console.log(item.text)
      }
    }
  }
</script>
<style lang="less" scoped>
  .screen {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 10000;
    // background: rgba(0, 0, 0, 0.5);
    .menu {
      width: 130px;
      padding: 0;
      margin: 0;
      position: fixed;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      overflow: hidden;
      .li {
        line-height: 35px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        color: #ccc;
        background: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        &.can {
          color: #666;
          &:hover {
            background: #409EFF;
            color: #fff;
          }
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
</style>

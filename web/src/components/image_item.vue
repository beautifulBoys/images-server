<template>
  <div class="item-box" :class="{selected: data.selected}" ref="image_item">
    <div class="item">
      <div class="gou" @click="data.selected = !data.selected"><i class="el-icon-check"></i></div>
      <img v-if="data.type === 'dir'" class="image" src="../images/dir.png" />
      <img v-if="data.type === 'img'" class="image" src="../images/img.png" />
      <img v-if="data.type === 'doc'" class="image" src="../images/doc.png" />
      <img v-if="data.type === 'video'" class="image" src="../images/video.png" />
      <img v-if="data.type === 'music'" class="image" src="../images/music.png" />
      <img v-if="data.type === 'zip'" class="image" src="../images/zip.png" />
      <img v-if="data.type === 'file'" class="image" src="../images/file.png" />
      <div class="text">{{data.fullName}}</div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions, mapGetters } = createNamespacedHelpers('components')
  export default {
    props: ['data'],
    data () {
      return {

      }
    },
    computed: {
      ...mapState({

      })
    },
    mounted () {
      this.$refs.image_item.addEventListener('contextmenu', e => {
        e.preventDefault()
        e.stopPropagation()
        this.$emit('selectOneItem')
        this.changeContextMenu({
          status: true,
          posX: e.clientX,
          posY: e.clientY
        })
      }, false)
    },
    beforeDestroy () {
      this.$refs.image_item.removeEventListener('contextmenu', e => {
        e.preventDefault()
        e.stopPropagation()
        this.changeContextMenu({
          status: false,
          posX: 0,
          posY: 0
        })
      }, false)
    },
    methods: {
      ...mapMutations(['changeContextMenu'])
    }
  }
</script>
<style lang="less" scoped>
.item-box {
  width: 130px;
  height: 130px;
  padding: 8px 15px;
  margin: 5px;
  border-radius: 7px;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid #fff;
  position: relative;
  &:hover {
    background: rgba(239, 244, 248, 0.7);
    border: 1px solid rgba(102, 124, 255, 0.3);
    .item {
      .gou {
        opacity: 0.3;
        &:hover {
          opacity: 0.6;
        }
      }
      .text {
        color: #3b8cff;
      }
    }
  }
  &.selected {
    background: rgb(239, 244, 248);
    border: 1px solid rgb(102, 124, 255);
    .item .gou {
      opacity: 1;
    }
  }
  .item {
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    .gou {
      width: 23px;
      height: 23px;
      position: absolute;
      top: 6px;
      left: 6px;
      opacity: 0;
      border-radius: 100%;
      background: rgb(59, 140, 255) url(../images/gou.png) no-repeat center center;
      background-size: 14px;
    }
    .image {
      width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
    .text {
      font-size: 14px;
      color: #333;
      line-height: 30px;
      text-align: center;
      height: 30px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1; // 超出行数
      overflow: hidden;

    }
  }
}
</style>

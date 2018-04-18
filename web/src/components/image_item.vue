<template>
  <div class="item-box" :class="{selected: data.selected}">
    <div class="item">
      <div class="gou"><i class="el-icon-check"></i></div>
      <img class="image" src="../images/fold.png" />
      <div class="text">哈哈哈哈哈</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['data'],
    data () {
      return {
        imgDom: null
      }
    },
    created () {

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
    }
  }
}
</style>

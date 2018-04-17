<template>
  <div class="item">
    <img class="image" src="../images/image.png" />
    <div class="text">哈哈哈哈哈</div>
  </div>
</template>
<script>
  export default {
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
.item {
  width: 130px;
  height: 130px;
  padding: 8px 15px;
  margin: 5px;
  border-radius: 7px;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid #fff;
  &:hover {
    background: rgba(239, 244, 248, 0.7);
    border: 1px solid rgba(102, 124, 255, 0.3);
  }
  &.selected {
    background: rgba(239, 244, 248, 1);
    border: 1px solid rgba(102, 124, 255, 1);
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
</style>

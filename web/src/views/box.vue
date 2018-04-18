<template>
<div class="box">
  <div class="left-container">
    <side-menu></side-menu>
  </div>
  <div class="right-container">
    <header-component></header-component>
    <div class="main-box">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import sideNenu from '../components/side_menu.vue';
import headerComponent from '../components/header.vue';
import {
  createNamespacedHelpers
} from 'vuex';
const {
  mapState,
  mapMutations,
  mapActions
} = createNamespacedHelpers('box');
export default {
  name: 'app',
  components: {
    'side-menu': sideNenu,
    'header-component': headerComponent
  },
  data() {
    return {
      chatShow: false
    }
  },
  created() {

  },
  computed: {
    ...mapState({

    })
  },
  mounted() {

  },
  methods: {
    ...mapMutations([]),
    ...mapActions([])
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  background: #eff4f8;
  .left-container {
    width: 220px;
    background: #eff4f8;
    overflow-y: auto;
  }
  .right-container {
    flex: 1;
    display: flex;
    flex-flow: column;
    font-size: 0;
    .main-box {
      flex: 1;
      width: 100%;
      padding-right: 10px;
      box-sizing: border-box;
      .content {
        width: 100%;
        height: 100%;
        background: #fff;
        overflow: auto;
        border: 1px solid #ddd;
        border-bottom: none;
        border-radius: 6px 6px 0 0;
        box-sizing: border-box;
      }
    }
  }
}
</style>
<style lang="less">
  i {
    font-weight: 800!important;
  }
</style>

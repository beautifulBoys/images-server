<template>
  <div id="app">
    <router-view></router-view>
    <context-menu :data.sync="contextMenu"></context-menu>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import contextMenuComponent from './components/context_menu.vue'
export default {
  name: 'app',
  components: {
    'context-menu': contextMenuComponent
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      contextMenu: state => state.components.contextMenu
    })
  },
  watch: {
    $route (n, o) {
      // if (!window.loginStatus) this.$router.push({path: '/login'});
    }
  },
  created () {
    this.$store.commit('size/clientSize', {
      clientHeight: document.body.clientHeight,
      clientWidth: document.body.clientWidth
    })
    document.oncontextmenu = (e) => {
      e.stopPropagation()
      e.preventDefault()
      return false
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>

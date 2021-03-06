import Vuex from 'vuex'
import Vue from 'vue'
import box from './box.js'
import size from './size.js'
import components from './components.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    box,
    size,
    components
  }
})

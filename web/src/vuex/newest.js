
// import data from './data/mostest.json';
// import {getPostAjax} from '../api/ajax_router.js';
export default {
  namespaced: true,
  state: {
    list: [],
    pageConfig: {
      page: 0,
      num: 10
    },
    loadmoreButtonShow: true,
    loadmoreButtonStatus: false
  },
  mutations: {

  },
  actions: {
    async getDataEvent ({ commit, state }, {cbb}) {

    }
  }
}

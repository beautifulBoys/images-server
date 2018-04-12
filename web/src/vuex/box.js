import newest from './newest.js';
import header from './header.js';

export default {
  namespaced: true,
  state: {
    imageScan: null,
    list: [],
    userInfo: {
      userId: '',
      passport: '',
      username: '',
      avatar: 'https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/master/source/tourism-circle/avatar.png'
    },
    loginStatus: false
  },
  mutations: {
    setUserInfo (state, data) {
      state.loginStatus = window.loginStatus;
      state.userInfo.username = data.username;
      state.userInfo.userId = data.userId;
      state.userInfo.passport = data.passport;
      state.userInfo.avatar = data.avatar;
    },
    openImageScan (state, item) {
      state.imageScan.open(item);
    },
    boxInitEvent (state, obj) {
      state.imageScan = obj;
    }
  },
  actions: {
    async getUserInfoEvent ({commit}) {

    }
  },
  modules: {
    newest,
    header
  }
};

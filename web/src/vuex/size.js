// import data from './data/chat_room.json';
// import io from 'socket.io-client';
// import Cookies from 'js-cookie';
// import config from '../config/index.js';
// import {webMailSendAjax, messageBoxListAjax, ignoreMessageAjax, friendHandleAjax} from '../api/ajax_router.js';


export default {
  namespaced: true,
  state: {
    clientWidth: 0,
    clientHeight: 0
  },
  mutations: {
    clientSize (state, {clientWidth, clientHeight}) {
      state.clientWidth = clientWidth
      state.clientHeight = clientHeight
      window.onresize = () => {
        state.clientWidth = document.body.clientWidth
        state.clientHeight = document.body.clientHeight
      }
    }
  },
  actions: {
    async webMailSendEvent ({commit}, {messageId, remark, fromId, toId, success, error}) {

    }
  }
}

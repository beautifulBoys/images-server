// import data from './data/chat_room.json';
// import io from 'socket.io-client';
// import Cookies from 'js-cookie';
// import config from '../config/index.js';
// import {webMailSendAjax, messageBoxListAjax, ignoreMessageAjax, friendHandleAjax} from '../api/ajax_router.js';


export default {
  namespaced: true,
  state: {
    contextMenu: {
      status: false,
      posX: 0,
      posY: 0
    }
  },
  mutations: {
    changeContextMenu (state, contextMenu) {
      state.contextMenu = contextMenu
    }
  },
  actions: {
    async webMailSendEvent ({commit}, {messageId, remark, fromId, toId, success, error}) {

    }
  }
}

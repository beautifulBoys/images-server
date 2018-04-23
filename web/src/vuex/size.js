// import data from './data/chat_room.json';
// import io from 'socket.io-client';
// import Cookies from 'js-cookie';
// import config from '../config/index.js';
// import {webMailSendAjax, messageBoxListAjax, ignoreMessageAjax, friendHandleAjax} from '../api/ajax_router.js';


export default {
  namespaced: true,
  state: {
    clientWidth: 0,
    clientHeight: 0,
    select_area: {
      status: false, // 是否开始勾选了
      x: 0,
      y: 0,
      endX: 0,
      endY: 0
    }
  },
  mutations: {
    clientSize (state, {clientWidth, clientHeight}) {
      state.clientWidth = clientWidth
      state.clientHeight = clientHeight
      window.onresize = () => {
        state.clientWidth = document.body.clientWidth
        state.clientHeight = document.body.clientHeight
      }
    },
    select_area_change (state, {status, endX, endY, x, y}) {
      if (status) state.select_area.status = status
      if (x) state.select_area.x = x
      if (y) state.select_area.y = y
      if (endY) state.select_area.endY = endY
      if (endX) state.select_area.endX = endX
    }
  },
  actions: {
    async webMailSendEvent ({commit}, {messageId, remark, fromId, toId, success, error}) {

    }
  }
}

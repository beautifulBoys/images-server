// import data from './data/chat_room.json';
// import io from 'socket.io-client';
// import Cookies from 'js-cookie';
// import config from '../config/index.js';
// import {webMailSendAjax, messageBoxListAjax, ignoreMessageAjax, friendHandleAjax} from '../api/ajax_router.js';


export default {
  namespaced: true,
  state: {
    httpServer: null,
    avatar: 'https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/master/source/tourism-circle/avatar.png',
    messageList: [],
    list: [],
    reason: '',
    formData: {
      value: ''
    },
    chatWindowOpenStatus: false,
    noReadMessageNum: 0,
    noReadRoomNum: 0,
    connect: false,
    messageBoxShow: false,
    inputMessageValue: '',

    messageBoxList: []
  },
  mutations: {
    avatar (state, avatar) {
      state.avatar = avatar
    }
  },
  actions: {
    async webMailSendEvent ({commit}, {messageId, remark, fromId, toId, success, error}) {

    },
    async AgreeOrRefuseEvent ({commit}, {type, messageId, fromId, toId, success, error}) {

    },
    async ignoreMessageEvent ({commit}, row) {

    },
    async getMessageListEvent ({commit, state, rootState}) {

    },
    connectServer ({commit, state, rootState}) {

    },
    sendMessageEvent ({commit, state, rootState}) {

    }
  }
}

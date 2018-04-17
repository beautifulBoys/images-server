<template>
  <div class="header">

    <el-dropdown trigger="click" style="float: right;" @command="menu_click">
      <span class="el-dropdown-link">
        <img class="user-img" :src="avatar"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人设置</el-dropdown-item>
        <el-dropdown-item command="b">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('box/header');
  export default {
    data () {
      return {
        tableData: [],
        messageBox_show: false
      };
    },
    watch: {
      messageBoxShow (n) {
        this.messageBox_show = n;
      },
      messageBox_show (n) {
        this.messageBoxShowEvent(n);
      }
    },
    computed: {
      ...mapState({
        messageBoxShow: state => state.messageBoxShow,
        noReadMessageNum: state => state.noReadMessageNum,
        chatShow: state => state.chatShow,
        noReadRoomNum: state => state.noReadRoomNum,
        connect: state => state.connect,
        messageBoxList: state => state.messageBoxList,
        avatar: state => state.avatar
      })
    },
    mounted () {
      if (!this.connect && window.loginStatus) {
        this.connectServer();
      }
      this.getMessageListEvent();
    },
    methods: {
      ...mapMutations(['messageBoxShowEvent', 'logout']),
      ...mapActions(['webMailSendEvent', 'connectServer', 'AgreeOrRefuseEvent', 'getMessageListEvent', 'ignoreMessageEvent']),
      chatRoomEvent () {
        this.$refs.chat_room_component.statusEvent(true);
      },
      seeEvent (index, row) {
        if (row.type === 'add-friend') this.addFriendDialogFunc(row);
        else if (row.type === 'web-mail') this.webMailDialogFunc(row);
        else console.log('这里出错了，请检查');
      },
      addFriendDialogFunc (row) {
        let me = this;
        this.$confirm(`请选择是否添加 ${row.name} 为好友？`, '好友请求', {
          confirmButtonText: '添加',
          cancelButtonText: '拒绝',
          type: 'warning'
        }).then(() => {
          me.AgreeOrRefuseEvent({
            type: 'agree',
            fromId: row.fromId,
            toId: row.toId,
            messageId: row.messageId,
            success (text) {
              me.$message({ type: 'success', message: text });
            },
            error (text) {
              me.$message({ type: 'error', message: text });
            }
          });
        }).catch(() => {
          me.AgreeOrRefuseEvent({
            type: 'refuse',
            fromId: row.fromId,
            toId: row.toId,
            messageId: row.messageId,
            success (text) {
              me.$message({ type: 'success', message: text });
            },
            error (text) {
              me.$message({ type: 'error', message: text });
            }
          });
        });
      },
      webMailDialogFunc (row) {
        let me = this;
        me.$prompt('请输入回信内容', '站内信', {
          confirmButtonText: '发送',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          me.webMailSendEvent({
            remark: value,
            messageId: row.messageId,
            fromId: row.fromId,
            toId: row.toId,
            success (text) {
              me.getMessageListEvent();
              me.$message({ type: 'success', message: text });
            },
            error (text) {
              me.$message({ type: 'error', message: text });
            }
          });
        });
      },
      menu_click (item) {
        console.log(item);
        if (item === 'a') this.$router.push({path: '/personal'});
        else if (item === 'b') {
          this.logout();
          this.$router.push({path: '/login'});
          this.$message({
            type: 'success',
            message: '退出成功'
          });
        } else console.log('出错了，查看下');
      }
    }
  };
</script>

<style lang="less" scoped>
.header {
    height: 60px;
    background: #eff4f8;
    // box-shadow: 0 5px 7px rgba(0,0,0,0.2);
    z-index: 10;
    padding: 10px;
    box-sizing: border-box;
    .item {
      margin-right: 40px;
      margin-top: 5px;
    }
    .user-img {
      height: 36px;
      width: 36px;
      border-radius: 5px;
      border: 2px solid #20A0FF;
      transition: all .5s;
      &:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.4);
        border: 2px solid #fff;
      }
    }
}
</style>

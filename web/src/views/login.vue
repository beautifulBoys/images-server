<template>
  <div class="login">
    <div class="box" :class="{move: toshow}">
      <div class="logo">旅</div>
      <div class="login-box">
        <el-input type="text" class="input" v-model="username" placeholder="用户名（中文 2 - 10 位）"></el-input>
        <el-input type="password" class="input" v-model="password" placeholder="密码（6 - 12 位）"></el-input>
        <div class="tag">首次登录将自动为您注册账号</div>
        <el-button class="btn" type="primary" size="large" @click="loginEvent()"> 登　录 </el-button>
        <!-- <el-button size="large">去注册</el-button> -->
      </div>
    </div>
  </div>
</template>
<script>
  // import md5 from '../lib/md5.js';
  // import {login} from '../api/ajax_router.js';
  // import Cookies from 'js-cookie';
  export default {
    data () {
      return {
        username: '',
        password: '',
        toshow: true
      };
    },
    methods: {
      loginEvent () {}
    }
  };
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    background: #333;
    justify-content: center;
    align-items: center;
    .box {
      width: 400px;
      margin-top: -150px;
      opacity: 0;
      transition: all 1s;
      &.move {
        margin-top: 0;
        opacity: 1;
      }
      .logo {
        width: 80px;
        height: 80px;
        margin: -40px auto 0 auto;
        background: #20a0ff;
        border-radius: 100%;
        line-height: 80px;
        text-align: center;
        font-size: 40px;
        color: #fff;
        border: 5px solid #fff;
        transform: translate3d(0, 36px, 0);
        animation: rotateA 4s infinite linear;
      }
      .login-box {
        width: 100%;
        background: #fff;
        border-radius: 20px;
        padding: 40px 30px 30px 30px;
        margin-top: -40px;
        box-sizing: border-box;
        .input {
          margin: 15px 0;
          width: 100%;
        }
        .btn {
          margin: 0 auto;
          display: block;
        }
        .tag {
          color: red;
          line-height: 14px;
          font-size: 14px;
          margin: -5px 0 15px 0;
        }
      }
    }
 }
@keyframes rotateA {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
</style>

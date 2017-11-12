<template>

  <div>
    <!--阴影遮罩部分-->
    <div class="mask" @click="clickMask"></div>

    <transition name="fade">
      <div class="login-information" v-if="showLogin">
        <!--登录-->
        <div class="login-content" v-show="showContent">
          <!--登录显示头像-->
          <div class="login-head">
            <div class="avatar">
              <img src="../assets/avatar.jpg">
            </div>
            <div class="username">光头小子</div>
          </div>

          <!--登录信息列表-->
          <div class="login-list">
            <ul>
              <router-link to="/collection">
                <li><img src="../assets/collection.png">我的收藏</li>
              </router-link>
              <li><img src="../assets/history.png">浏览历史</li>

              <router-link to="/showMsg">
                <li><img src="../assets/info.png">个人中心</li>
              </router-link>

              <li><img src="../assets/about.png">关于</li>

              <li ><img src="../assets/cancel.png">注销</li>
            </ul>
          </div>
        </div>


        <!--登录注册模块-->
        <div class="nologin" v-show="showNologin">
          <!--<mt-header title="登錄" class="Headertitle"></mt-header>-->
          <div class="login-title">
            <img src="./../assets/images/qidian.png" alt="">
          </div>
          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
          <mt-button type="default" class="login-button">登录</mt-button>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
  import { Field } from 'mint-ui';
export  default {
  data(){
    return {
      showNologin:false,
      showLogin:true,
      showContent:true,
      username:'',
      password:'',

    }
  },
  methods:{
    clickMask(){
      this.$store.state.showUser = false;
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .login-title{
    display:flex;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 30px;
  }
  .login-title img{
    display: block;
  }
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
    z-index: 100;
  }
  .login-button{
    width: 100%;
    background: #BD241C;
    margin-top: 20px;
    color:#FFF;
  }
  .login-information {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 3rem;
    background-color: #fff;
    z-index: 101;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 2s ease;
  }
  .fade-enter {
    transform: translateX(-100%);
  }
  .login-content, .nologin {
    background: #F6F7F9;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .login-head {
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0px;
  }
  .avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: .27rem;
  }
  .avatar img {
    width: 100%;
    height: 100%;
  }
  .login-list {
    margin-top: .8rem;
    font-size: .43rem;
    color: #404040;
  }
  .login-list ul li {
    height: 2rem;
    line-height: 2rem;
    display: block;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .login-list img {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-right: .8rem;
  }

</style>

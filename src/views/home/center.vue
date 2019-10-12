<template>
  <div class="page-home-center">
    <!-- 二级路由页面 个人中心页面 -->
    <h1>个人中心页</h1>
    <p v-if="userInfo.uname">{{ userInfo.uname }}</p>
    <router-link to='/login' v-else>登录</router-link>
    <hr>
    <router-link to='/money'>查看余额</router-link>
  </div>
</template>

<script>
export default {
  name:'center',
  data(){
    let userInfo = window.localStorage.getItem('userInfo');
    return{
      userInfo:userInfo ? JSON.parse(userInfo) : {}
    }
  }
}
</script>

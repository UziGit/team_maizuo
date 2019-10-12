<template>
  <div class="page-home">
    <!-- 一级路由页面 登录页面 -->
    <h1>登录页面</h1>
    <hr>
    <label for="">
      <span>用户名：</span>
    </label>
      <input type="text" placeholder="用户名">
    <label for="">
      <span>密码：</span>
    </label>
    <input type="password" placeholder="密码">
    <button @click='handleLogin'>登录</button>
  </div>
</template>

<style lang="scss">
  .page-home{
    label{
      width: 200px;
      margin-bottom: 5px;
    }
    input{
      width: 200px;
      margin-bottom: 5px;
    }
    button{
      width: 50px;
    }
  }
</style>

<script>
export default {
  name:'login',
  methods:{
    handleLogin(){
      window.localStorage.setItem('userInfo',JSON.stringify({uname:'张三'}));
      //路由页面判断的时候在query里面传递了一个redirect的值,如果不写这个center，就会在登录页面进行登录的时候报错
      let willGo = this.$route.query.redirect || 'center';
      //这个值就是我们登陆以后将要去到的路由地址，这里要是用push,就会出现有后退回到登录页面的情况，所以我们用replace来替换，让它不会出现历史记录
      this.$router.replace(willGo);
    }
  }
}
</script>
<template>
  <div class="page-home">
    <!-- 一级路由页面 首页 -->
    <!-- 这里是用来存放二级路由的 -->
    <router-view></router-view>

    <ul class="navbar">
      <router-link tag="li" to='/films'>
        <i class="iconfont icon-dianying"></i>
        <span>电影</span>
      </router-link>
      <router-link tag="li" to='/cinemas'>
        <i class="iconfont icon-yingyuan"></i>
        <span>影院</span>
      </router-link>
      <router-link tag="li" to='/zixun'>
        <i class="iconfont icon-zixun-tousu"></i>
        <span>资讯</span>
      </router-link>
      <router-link tag="li" to='/center'>
        <i class="iconfont icon-wode1"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../../assets/styles/common/mixins.scss';
  .page-home{
    
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    > div:first-child {
      flex: 1;
      overflow-y:auto; 
    }
    .navbar{
      @include border-top; 
      height: 50px;
      font-size: 10px;
      display: flex;
      li{
        flex: 1;
        height: 100%;
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color:#797d82;
        i{
          margin-bottom: 4px;
          font-size: 20px;
        }
        &.router-link-active{
          color:#ff5f16;
        }
      }
    }
  }
</style>
<template>
  <div class="page-home">
    <!-- 一级路由页面 首页 -->
    <!-- 这里是用来存放二级路由的 -->
    <router-view></router-view>

    <ul>
      <router-link tag="li" to='/films'>电影</router-link>
      <router-link tag="li" to='/cinemas'>影院</router-link>
      <router-link tag="li" to='/zixun'>资讯</router-link>
      <router-link tag="li" to='/center'>我的</router-link>
    </ul>
  </div>
</template>
<template>
  <div id="app">
    <div class="demo-header">
      <img class="log-img" src="../assets/images/logo.gif" alt="">
      <div class="logo">云集前端Demo</div>
    </div>
    <div class="demo-sidebar">
      <el-menu>
        <el-menu-item v-for="(item,index) in navConfig" :key="index" :index="`'${index}'`">
          <router-link :to="item">{{item.title}}</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="demo-content">
      <div class="demo-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import navConfig from '../router/nav.config';

  export default {
    data() {
      return {
        navConfig,
      };
    },
    methods: {
      directUrl(item) {
        this.$router.push(item);
      },
    },
  };
</script>

<style lang="less">
  .demo-header {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    height: 60px;
    width: 100%;
    color: white;
    padding: 0px 60px;
    background-color: rgb(32, 160, 255);

    .logo {
      font-size: 22px;
      display: flex;
      fldemo-direction: row;
      align-item: center;

    }
    .log-img {
      width: 50px;
      height: 35px;
    }
  }

  .demo-sidebar {
    position: fixed;
    width: 260px;
    top: 61px;
    left: 0;
    overflow-y: auto;
  }

  .demo-content {
    padding-left: 260px;
    padding-top: 61px;

    .demo-wrapper {
      padding: 20px;
    }
  }
</style>

<template>
  <div>
    <div class="header">
      <img class="log-img" src="../assets/images/logo.gif" alt="">
      <div class="logo">云集前端Demo</div>
    </div>
    <div class="main">
      <div class="sidebar">
        <el-menu>
          <el-menu-item :index="'1'">参照</el-menu-item>
          <el-menu-item :index="'2'">列表</el-menu-item>
          <el-menu-item :index="'3'">可输可选</el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="less">
  .header {
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
      display:flex;
      flex-direction: row;
      align-item:center;

    }
    .log-img{
      width: 50px;
      height: 35px;
    }
  }

  .main {
    margin-top: 61px;
  }

  .sidebar {
    position: fixed;
    width: 260px;
    top: 61px;
    left: 0;
    overflow-y: auto;
  }

  .content {
    margin-left: 260px;
    padding: 20px;
  }
</style>

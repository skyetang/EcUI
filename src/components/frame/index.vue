<template>
  <div id="app">
    <ec-header></ec-header>
    <side-nav></side-nav>
    <container></container>
  </div>
</template>

<script>
  import EcHeader from './header';
  import SideNav from './sideNav';
  import Container from './container';

  export default {
    components: {
      SideNav,
      Container,
      EcHeader,
    },
  };
</script>

<style lang="less">
  @import "../../assets/style/index.less";
</style>

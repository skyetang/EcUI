<template>
  <div id="app">
    <ec-header></ec-header>
    <side-nav></side-nav>
    <container></container>
  </div>
</template>

<script>
  import EcHeader from './header';
  import SideNav from './sideNav.vue';
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
  @import "../../assets/style/frame.less";
</style>

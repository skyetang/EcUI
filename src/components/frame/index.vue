<template>
  <div id="app">
    <ecw-header></ecw-header>
    <side-nav></side-nav>
    <container></container>
  </div>
</template>

<script>
  import ECWHeader from './header';
  import SideNav from './sideNav';
  import Container from './container';

  export default {
    components: {
      SideNav,
      Container,
      'ecw-header': ECWHeader,
    },
  };
</script>

<style lang="less">
  @import "./frame.less";
</style>

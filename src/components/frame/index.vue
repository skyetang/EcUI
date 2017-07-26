<template>
  <div id="app">
    <heads></heads>
    <side-nav></side-nav>
    <container></container>
  </div>
</template>

<script>
  import Heads from './header';
  import SideNav from './side-nav';
  import Container from './container';

  export default {
    components: {
      Heads, SideNav, Container,
    },
  };
</script>

<style lang="less">
  @import "./frame.less";
</style>

<template>
  <div id="app">
    <ec-header></ec-header>
    <side-nav></side-nav>
    <container>
      <container-item width="400px">
        <template slot="head">112</template>
        1231
      </container-item>
      <container-item>
        left
      </container-item>
    </container>
  </div>
</template>

<script>
  import EcHeader from './header';
  import SideNav from './sideNav';
  import Container from './container';
  import ContainerItem from './containerItem';

  export default {
    components: {
      EcHeader,
      SideNav,
      Container,
      ContainerItem
    }
  };
</script>

<style lang="less">
  @import "../../assets/style/index.less";
</style>

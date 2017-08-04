<template>
    <div style="width: 300px">
      <ec-menu default-active="2" :default-opened="['1']">
        <ec-menu-item index="'0'">没有父级</ec-menu-item>
        <ec-submenu index="1">
          <template slot="title">1</template>
          <ec-menu-item index="1-1">1-1</ec-menu-item>
        </ec-submenu>
        <ec-submenu index="2">
          <template slot="title">2</template>
          <ec-submenu index="2-1">
            <template slot="title">2-1</template>
            <ec-menu-item index="2-1-1">2-1-1</ec-menu-item>
          </ec-submenu>
        </ec-submenu>
        <ec-submenu index="3" :have-children="false">
          <template slot="title">3</template>
        </ec-submenu>
      </ec-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        defIndex: '1'
      };
    }
  };
</script>

<style lang="less">

</style>



<template>
  <div id="app">
    <ec-header>
    </ec-header>
    <ec-side>
    </ec-side>
    <ec-container>
      <ec-container-item width="400px">
        <template slot="head">
          <ec-text @click="addNew"><i class="icon-hp_list__add icon-left" ></i>新增</ec-text>
        </template>

      </ec-container-item>
      <ec-container-item>
        <template slot="head">
          <ec-text @click="addNew"><i class="icon-hp_list__add icon-left" ></i>新增</ec-text>
        </template>
        <ec-menu-item index="1">
          菜单1
        </ec-menu-item index="2">
        <ec-menu-item>
          菜单2
        </ec-menu-item>
        <template slot="footer">
        <ec-pagination :total-page="10"></ec-pagination>
      </template>
      </ec-container-item>
    </ec-container>
  </div>
</template>

<script>
</script>

<style lang="less">
</style>

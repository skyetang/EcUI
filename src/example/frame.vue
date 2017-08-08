<template>
  <div id="app">
    <ec-header>
    </ec-header>
    <ec-side>
    </ec-side>
    <ec-container>
      <ec-container-item width="400px">
        <template slot="head">
          <ec-text><i class="icon-hp_list__add icon-left" ></i>新增</ec-text>
        </template>
        <ec-menu>
          <ec-menu-item index="1">
            <div class="flex-space"><span>菜单1</span><span>12</span></div>
          </ec-menu-item>
          <ec-menu-item index="2">
            <div class="flex-space"><span>菜单2</span><span>13</span></div>
          </ec-menu-item>
        </ec-menu>
      </ec-container-item>
      <ec-container-item>
        <template slot="head">
          <ec-text><i class="icon-hp_list__add icon-left" ></i>新增</ec-text>
        </template>
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

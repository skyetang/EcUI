<template>
  <ul class="menu-list">
    <li v-for="item in value">
      <template v-if="item.items.length >0">
        <a href="javascript:;" class="gray">
          <span class="icon icon-left" :class="[item.style != '' && item.style != null ? item.style : '']"></span>
          <span>{{item.name}}</span>
        </a>
      </template>
      <template v-else>
        <router-link :to="{ path:item.url}">
          <span class="icon icon-left" :class="[item.style != '' && item.style != null ? item.style : '']"></span>
          <span>{{item.name}}</span>
        </router-link>
      </template>
      <ul v-if="item.items.length>0">
        <li v-for="item in item.items">
          <router-link :to="{ path: item.url }">
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name:'EcSideMenu',
    props: {
      value: {
        type: Array,
        require: true,
      }
    }
  };
</script>

<style lang="less">

</style>



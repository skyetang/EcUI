<template>
  <ul class="menu-list">
    <li v-for="item in value">
      <template v-if="item.items.length >0 || item.url == ''">
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
      <ul v-if="item.items.length >0 ">
        <li v-for="secItem in item.items">
          <router-link to="/" v-on:click.native="clickMenu(secItem)">
            <span>{{secItem.name}}</span>
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'EcSideMenu',
    props: {
      value: {
        type: Array,
        require: true
      }
    },
    methods: {
      clickMenu(item) {
        this.$router.push({ path: item.url });
        sessionStorage.setItem('PostCode', item.postCode);
      }
    }
  };
</script>

<template>
  <div class="side-wrap">
    <div class="logo-wrap">
      <span class="system-logo"></span>
      <span>我的经管</span>
    </div>
    <ec-tabs :value.sync="activeTab" @change="changeMenu" type="top">
      <ec-tab value="ierp"><i class="icon-ierp__checked icon-left"></i>未审核</ec-tab>
      <ec-tab value="oa">已审核</ec-tab>
    </ec-tabs>
    <ul class="menu-list">
      <li v-for="item in activeListData">
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
    <!-- 帮助菜单  -->
    <div class="help-wrap">
      <a href="javascript:;">
        <span class="icon icon-user__help"></span>
        <span>帮助与反馈</span>
        <span class="reply-count" v-if="false"></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EcSideErp',
    data() {
      return {
        activeTab: 'ierp',
        menuData: {}
      };
    },
    computed: {
      activeListData() {
        return this.menuData[this.activeTab];
      }
    },
    created() {
      this.getMenuData();
    },
    methods: {
      getMenuData() {
        this.$http.post(`${API.ierp}/v1/menus`).then(
          (res) => {
            if (res.data.success) {
              this.menuData = res.data.data;
            }
          }
        );
      },
      changeMenu() {

      }
    }
  };

</script>

<style lang="less">

</style>



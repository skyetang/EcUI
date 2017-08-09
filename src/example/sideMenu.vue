<template>
  <div>
    <ec-side-menu :value='menuData'></ec-side-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuData: [
          {
            uuid: 'ce472ca3-d7e0-4ba9-8fd7-0cfe73a46d47',
            name: '管理系统应用检视',
            style: 'icon-system_review',
            code: '392',
            url: '',
            postCode: 'YJ2011',
            tags: ['IERP'],
            items: [
              {
                uuid: 'fb415048-a30a-4d2f-9098-8a8e6309b114',
                name: '组织架构与职能授权',
                style: null,
                code: '392_3654',
                url: '/i/rbacView',
                postCode: 'YJ2011',
                tags: [],
                items: []
              }
            ]
          }
        ]
      };
    }
  };
</script>

<style lang='less'>

</style>



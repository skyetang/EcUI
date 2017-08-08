<template>
  <div>
    <ec-pagination :total-page="totalPage" @page-change="pageChange"></ec-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        totalPage: 20
      };
    },
    created() {
      console.log(API);
      console.log(GLOBAL.PAGE_SIZE);
    },
    methods: {
      pageChange(index) {
        console.log(index);
      }
    }
  };
</script>

<style lang="less">

</style>



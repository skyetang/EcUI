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
    methods: {
      pageChange(index) {
        console.log(index);
      }
    }
  };
</script>

<style lang="less">

</style>



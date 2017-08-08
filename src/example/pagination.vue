<template>
  <div>
    <ec-pagination :total-page="totalPage"></ec-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        totalPage: 20
      };
    }
  };
</script>

<style lang="less">

</style>



<template>
    <div>
      <ec-upload :multiple="true" :action="action" @success="getData"></ec-upload>
      <br>
      <br>
      {{ backData }}
      <br>
      <br>
      <ec-button @click="clear">清空</ec-button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        backData: [],
        action: `${API.ierp}/v1/file/upload`
      };
    },
    methods: {
      getData(val) {
        this.backData.push(val);
      },
      clear() {
        this.backData = [];
      }
    }
  };
</script>

<style lang="less">

</style>



<template>
  <div>
    <ec-button @click="confirmDialog('执行中...')">测试消息确认框</ec-button>
  </div>
</template>

<script>
  export default {
    methods: {
      confirmDialog(value) {
        this.$message({
          title: '提示',
          message: '确认删除吗？',
          type: 'warning',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              setTimeout(() => {
                instance.confirmButtonLoading = false;
                instance.confirmButtonText = value;
                done();
              }, 3000);
            } else {
              done();
            }
          }
        }).then(
          (action) => {
            console.log(action);
          },
          (action) => {
            console.log(action);
          }
        );
      }
    }
  };
</script>

<style lang="less">

</style>



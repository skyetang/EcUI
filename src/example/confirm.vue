<template>
  <div>
    <ec-button @click="confirmDialog('执行中...')">测试消息确认框</ec-button>
    <ec-button @click="confirmDialog2">测试消息确认框</ec-button>
  </div>
</template>

<script>
  export default {
    methods: {
      confirmDialog(value) {
        this.$ecConfirm({
          title: '提示',
          message: '确认删除吗？',
          type: 'warning',
          confirmButtonText: '确定',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = value;
              setTimeout(() => {
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
      },
      confirmDialog2() {
        this.$ecConfirm({
          title: '提示',
          message: '删除'
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



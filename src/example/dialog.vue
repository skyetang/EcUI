<template>
  <div>
    <ec-button @click="openDialog">打开dialog</ec-button>
    <ec-dialog :show.sync="showDialog" @confirm="confirm" @cancel="cancel" @close="close">
      <div class="dialog-content">
        弹框1
      </div>
    </ec-dialog>
    <ec-dialog :show.sync="showDialog2">
      <div class="dialog-content">
        弹框2
      </div>
    </ec-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showDialog: false,
        showDialog2: false
      };
    },
    methods: {
      openDialog() {
        this.showDialog = true;
      },
      confirm() {
        this.showDialog2 = true;
      },
      cancel() {},
      close() {}
    }
  };
</script>

<template>
  <div>
    <ec-button @click="openDialog">打开dialog</ec-button>
    <ec-dialog :show.sync="showDialog" @confirm="confirm" @cancel="cancel" @close="close">
      <div class="dialog-content">
      </div>
    </ec-dialog>
    <ec-dialog :show.sync="showDialog2"></ec-dialog>
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

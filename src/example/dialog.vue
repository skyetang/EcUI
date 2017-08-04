<template>
  <div>
    <ec-button @click="openDialog">打开dialog</ec-button>
    <ec-dialog :show.sync="showDialog" @close="showDialog = false">
      <div class="dialog-content">
      </div>
    </ec-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showDialog: false
      };
    },
    methods: {
      openDialog() {
        this.showDialog = true;
      }
    }
  };
</script>

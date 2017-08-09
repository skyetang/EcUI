<template>
  <div class="page-form">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'EcForm',
    props: {
      labelWidth: {
        type: String
      }
    }
  };
</script>

<style lang="less">

</style>



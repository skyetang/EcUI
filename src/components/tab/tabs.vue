<template>
  <div :class="theme">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'EcTabs',
    props: {
      value: {},
      type: {
        type: String,
        default: 'bottom'
      }
    },
    computed: {
      theme() {
        return `tab-${this.type}-wrapper`;
      }
    },
    methods: {
      handleTabClick(value) {
        if (this.value !== value) {
          this.$emit('change', value);
          this.$emit('update:value', value);
        }
      }
    }
  };
</script>

<style lang="less">

</style>



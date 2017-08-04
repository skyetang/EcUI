<template>
  <div class="tab-item" :class="{'is-active':active}" @click="tabClick">
    <slot></slot>
  </div>
</template>

<script>
  import { isNotNull } from '../../utils';

  export default {
    name: 'EcTab',
    props: {
      value: {}
    },
    computed: {
      active() {
        return isNotNull(this.value) && this.$parent.value === this.value;
      }
    },
    methods: {
      tabClick() {
        if (this.$parent.handleTabClick) this.$parent.handleTabClick(this.value, this);
        this.$emit('click', this.value);
      }
    }
  };
</script>

<style lang="less">

</style>



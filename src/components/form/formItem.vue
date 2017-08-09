<template>
    <div class="form-item clear-fix">
      <label class="form-item-label" :style="labelStyle" v-if="label">
        {{label}}
      </label>
      <div class="form-item-content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'EcFormItem',
    props: {
      lableWidth: {
        type: String
      },
      label: {
        type: String
      }
    },
    computed: {
      labelStyle() {
        const style = {};
        const width = this.lableWidth || this.parentForm.labelWidth;
        if (width) {
          style.width = width;
        }
        return style;
      },
      parentForm() {
        let parent = this.$parent;
        while (parent.$options.name !== 'EcForm') {
          parent = parent.$parent;
        }
        return parent;
      }
    },
    methods: {

    }

  };
</script>




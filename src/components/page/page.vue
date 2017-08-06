<template>
  <div class="info-page">
    <div class="page-wrapper">
      <div class="page-header">
        <div class="header-item"><i class="gray icon-return"></i></div>
        <div class="header-item">{{title}}</div>
        <div class="header-item"><i class="gray icon-innerpage__close"></i></div>
      </div>
      <div class="page-body">
        <div class="page-content">
          <div class="page-item">
            test123
          </div>
        </div>
      </div>
      <div class="page-footer">
        <ec-button>取消</ec-button>
        <ec-button>保存</ec-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EcPage',
    props: {
      title: {
        type: String,
        default: '详情页'
      }
    }
  };
</script>

<style lang="less">

</style>



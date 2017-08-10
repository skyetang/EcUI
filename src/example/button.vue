<template>
  <div>
    <h3>按钮</h3>
    <br>
    <ec-button><i class="icon-password icon-left"></i>详情</ec-button>
    <ec-button type="danger">删除</ec-button>
    <ec-button :disabled="true">失效</ec-button>
    <ec-button :loading="true" @click="c">测试执行中</ec-button>
    <br>
    <br>
    <ec-button type="plain-default">灰色字</ec-button>
    <ec-button type="plain-primary">蓝色字</ec-button>
    <br>
    <br>
    <br>
    <h3>水晶按钮</h3>
    <br>
    <ec-crystal-button><i class="icon-fill__add icon-left"></i>默认</ec-crystal-button>
    <ec-crystal-button type="primary">primary主要</ec-crystal-button>
    <ec-crystal-button type="danger">danger删除</ec-crystal-button>
    <br>
    <br>
    <br>
    <h3>文字按钮</h3>
    <br>
    <ec-text><i class="icon-market_setting icon-left"></i>文字按钮带图标</ec-text>
    <ec-text type="primary">primary文字</ec-text>
    <ec-text type="danger">danger文字</ec-text>
    <ec-text type="success">success文字</ec-text>
  </div>
</template>
<script>
  export default {
    methods: {
      c() {
        console.log(13);
      }
    }
  };
</script>

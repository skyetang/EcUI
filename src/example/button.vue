<template>
  <div>
    <h3>按钮</h3>
    <ec-button>默认</ec-button>
    <ec-button><i class="icon-password icon-left"></i>详情</ec-button>
    <ec-button>关闭</ec-button>
    <ec-button type="danger">删除</ec-button>
    <ec-button :disabled="true">失效</ec-button>
    <br>
    <br>
    <br>
    <h3>水晶按钮</h3>
    <ec-crystal-button><i class="icon-fill__add icon-left"></i>默认</ec-crystal-button>
    <ec-crystal-button type="primary">主要</ec-crystal-button>
    <ec-crystal-button type="danger">删除</ec-crystal-button>
  </div>
</template>

<template>
  <div style="width: 300px">
    <ec-menu :active.sync="defIndex"
             :openeds.sync="defOpened"
              @select="getCondition">
      <ec-submenu v-for="item in menuData"
                  :index="item.code"
                  :value="item"
                  :key="item.code"
                  :have-children="item.children.length > 0">
        <template slot="title">
          {{item.name}}
        </template>
        <ec-submenu v-for="info in item.children"
                    :index="info.code"
                    :value="info"
                    :key="item.code"
                    :have-children="info.children.length > 0">
          <template slot="title">
            {{info.name}}
          </template>
          <ec-menu-item v-for="less in info.children"
                        :index="less.code"
                        :value="less"
                        :key="item.code">
            {{less.name}}
          </ec-menu-item>
        </ec-submenu>
      </ec-submenu>
    </ec-menu>
    <br>
    <ec-button @click="reset">重置菜单</ec-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        defIndex: '1',
        defOpened: ['1'],
        menuData: [
          {
            code: '1',
            name: '一级菜单1',
            children: [
              { code: '1-1',
                name: '二级菜单1',
                children: [] },
              { code: '1-2',
                name: '二级菜单2',
                children: [] },
              { code: '1-3',
                name: '二级菜单3',
                children: [] }]
          },
          {
            code: '2',
            name: '一级菜单2',
            children: [
              { code: '2-1',
                name: '二级菜单1',
                children: [] },
              { code: '2-2',
                name: '二级菜单2',
                children: [] },
              {
                code: '2-3',
                name: '二级菜单3',
                children: [
                  { code: '2-3-1',
                    name: '三级菜单1',
                    children: [] },
                  { code: '2-3-2',
                    name: '三级菜单2',
                    children: [] },
                  { code: '2-3-3',
                    name: '三级菜单3',
                    children: [] }]
              }
            ]
          },
          { code: '3',
            name: '一菜单3',
            children: [] }
        ]
      };
    },
    methods: {
      reset() {
        this.defIndex = '2';
        this.defOpened = ['2'];
      },
      getCondition(val, val1, val2, val3) {
        console.log(val, val1, val2, val3);
      }
    }
  };
</script>

<style lang="less">

</style>



<template>
  <div>
    <ec-button @click="showPreview">显示预览</ec-button>
    <ec-button @click="changeIndex">更换index</ec-button>
    <br>
    <ec-preview-image :data="imgArr" :show.sync="show" :index.sync="index"></ec-preview-image>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgArr: [
          {
            fileId: '790ec899-9609-47a6-8ec8-99960967a665.jpg',
            fileName: '高美女.jpg',
            fileSize: 60045,
            mimeType: 'image/jpeg',
            ext: '.jpg',
            tag: 'Fpi_W-g1yb7LZ7BTuYRBbvz0xD3E',
            url: 'https://dfile.yj2025.com/790ec899-9609-47a6-8ec8-99960967a665.jpg?attname='
          },
          {
            fileId: 'f04bd7e3-f033-4d3b-8bd7-e3f033fd3b6c.png',
            fileName: '高圆圆#￥%……&*（！！@#）.png',
            fileSize: 186836,
            mimeType: 'image/png',
            ext: '.png',
            tag: 'FiIpFq9FJZ2gHzLwP5F-N1IXyttL',
            url: 'https://dfile.yj2025.com/f04bd7e3-f033-4d3b-8bd7-e3f033fd3b6c.png?attname='
          },
          {
            fileId: '409d889e-9d4c-4aba-9d88-9e9d4c2abae2.jpg',
            fileName: '小高.jpg',
            fileSize: 40840,
            mimeType: 'image/jpeg',
            ext: '.jpg',
            tag: 'FmuH6ddZgCm60b3H0TowDoZjqmBq',
            url: 'https://dfile.yj2025.com/409d889e-9d4c-4aba-9d88-9e9d4c2abae2.jpg?attname='
          },
          {
            fileId: 'a1a749de-0106-4dc5-a749-de01064dc584.jpg',
            fileName: 'canadian_rocky_mountain_parks-005.jpg',
            fileSize: 2498214,
            mimeType: 'image/jpeg',
            ext: '.jpg',
            tag: 'Ftik39qR71VPQ94SddbpgYyDTjsG',
            url: 'https://dfile.yj2025.com/a1a749de-0106-4dc5-a749-de01064dc584.jpg?attname='
          }
        ],
        show: false,
        index: 1
      };
    },
    methods: {
      showPreview() {
        this.show = true;
      },
      changeIndex() {
        this.index = Math.floor(Math.random() * 3);
      }
    }
  };
</script>

<style lang='less'>

</style>



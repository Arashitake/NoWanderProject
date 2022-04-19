<script setup>
// pinia使用测试
import api from '@/api';
import { mainStore } from '@/store';
import carousel from '@/components/homePage/carousel/carousel.vue'

const store = mainStore();
api.getArticle().then(data => {
  console.log(data);
});

</script>
<template>
  <carousel />
  <div>{{ store.msg }}</div>
</template>

<style lang="scss" scoped>
$color: red;

div {
  background: #f5f5f5;

  h1,
  h2,
  h3 {
    color: $color;
  }

  &:hover {
    color: blue;
  }
}
</style>
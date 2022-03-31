<script setup>
// pinia使用测试
import api from '@/api';
import { mainStore } from '@/store';
const store = mainStore();
api.getList().then(data => {
  console.log(data);
});

</script>
<template>
  <div>
    <h1>HOME</h1>
    <h2>HOME</h2>
    <h3>HOME</h3>
    {{ store.msg }}
  </div>
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
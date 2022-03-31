<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Nav from '@/components/Nav/nav.vue';
</script>

<template>
  <Nav />
  <router-view></router-view>
  <!-- <HelloWorld class="aaa" msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
@import "@/assets/css/base.css";

body {
  background: #f5f5f5;
}
</style>

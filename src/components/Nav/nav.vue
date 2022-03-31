<script setup>
import search from './search.vue';
let isActive = true;
</script>
<template>
  <div class="topmargin-header">
    <ul class="left-options">
      <img src="/img/homepage/navigationLogo.png" @click="$router.push('/homepage')" />
      <li @click="$router.push('/learningWorld')">学习天地</li>
      <li @click="$router.push('/professionalIntroduction')">专业介绍</li>
      <li @click="$router.push('/universityLife')">大学生活</li>
    </ul>
    <div class="search-box">
      <search></search>
    </div>
    <ul class="right-options">
      <li class="wall-option" @click="$router.push('/wall')">目标墙</li>
      <li class="sign-options">
        <span>登录</span> |
        <span>注册</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topmargin-header {
  display: flex;
  margin: 0 auto;
  width: 100%;
  min-width: 75rem;
  height: 3.4375rem;
  justify-content: space-around;
  background: #fff;
  box-shadow: 0.0625rem 0.0625rem 0.625rem rgba(0, 0, 0, 0.15);
  // 左边的导航
  .left-options {
    display: flex;
    align-items: center;
    img {
      margin: -0.25rem 1.25rem 0 0.625rem;
      height: 3.125rem;
      vertical-align: middle;
      cursor: pointer;
    }
    li {
      margin-top: 0.2rem;
      padding: 0.3125rem 0.625rem;
      color: #343434;
      font-size: 1rem;
      letter-spacing: 0.0625rem;
      &:hover {
        color: #81cbbf;
        cursor: pointer;
      }
    }
  }
  // 中间的搜索框search-box
  .search-box {
    // border: 1px solid #f00;
  }
  // 右边的导航
  .right-options {
    display: flex;
    align-items: center;
    li {
      margin-top: 0.2rem;
      padding: 0.3125rem 0.625rem;
      color: #343434;
      font-size: 1rem;
      letter-spacing: 0.0625rem;
    }
    // 目标墙
    .wall-option {
      margin-left: 2.5rem;
      padding-left: 2rem;
      background: url("/img/homepage/wallNavLogo.png") 0rem 0.125rem no-repeat;
      background-size: 1.5625rem;
      &:hover {
        color: #81cbbf;
        cursor: pointer;
      }
    }
    // 登录注册
    .sign-options {
      margin: 0 1rem 0 3.125rem;
      span {
        display: inline-block;
        margin-top: 0.2rem;
        letter-spacing: 0.125rem;
        &:hover {
          color: #81cbbf;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
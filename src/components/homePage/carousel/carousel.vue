<script setup>

</script>

<template lang="">
  <div class="outside-box">
    <div class="insert-box">
      <div class="carousel-box">
        <div class="item"></div>
      </div>
      <div class="control-items">
        <button class="left-btn">&lt;</button>
        <button class="right-btn">&gt;</button>
      </div>
    </div>
    <ul class="point-items">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.outside-box {
  position: relative;
  margin: 20px auto 120px;
  width: 1200px;
  height: 450px;
  border: 1px solid #f00;
}

// ———————— 轮播图盒子 ————————
.insert-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-box {
  position: relative;
  width: 1020px;
  height: 400px;
  border: 1px solid #00f;
  // ———————— 轮播图样式 ————————
  .item {
    position: absolute;
    width: 600px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
    transition: all ease-in-out 0.6s;
  }
  // ———————— 位移后在不同位置时的样式 ————————
  .carousel-left {
    top: 50px;
    left: 0;
    z-index: 1;
    opacity: 0.6;
  }
  .carousel-center {
    top: 50px;
    left: 200px;
    z-index: 10;
    transform: scale(1.2);
  }
  .carousel-right {
    top: 50px;
    left: 400px;
    z-index: 1;
    opacity: 0.6;
  }
  .carousel-others {
    top: 50px;
    left: 200px;
  }
}

// ———————— 左右切换按钮 ————————
.control-items {
  button {
    position: absolute;
    width: 50px;
    height: 40px;
    font-size: 30px;
    z-index: 100;
    top: calc(50% - 20px);
    cursor: pointer;
  }
  .left-btn {
    left: 150px;
  }
  .right-btn {
    right: 150px;
  }
}

// ———————— 悬浮小圆点 ————————
.point-items {
  position: absolute;
  display: flex;
  list-style: none;
  text-align: center;
  left: calc(50% - 70px);
  bottom: 0;
  li {
    margin: 5px;
    width: 20px;
    height: 8px;
    border-radius: 50px;
    background-color: #ccc;
    box-shadow: 0.1px 0.1px 5px rgba(0, 0, 0, 0.1);
    transition: all ease-in-out 0.5s;
    cursor: pointer;
  }
  .active-point {
    width: 40px !important;
    background: #72c3b6 !important;
  }
}
</style>
<template>
  <div>
    <!-- 封装的轮播图组件，因为数据是伪数据，暂不使用 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboTulist" :key="item.id">
        <img src="item.src" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunboTulist"]
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 250px;
  background: #fdf;
  text-align: center;
}

.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
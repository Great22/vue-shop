<template>
  <div class="app-container">
    <!-- 顶部header部分 -->
    <!-- <mt-header   fixed title="哈哈商城">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->
    <my-header></my-header>
    <!-- <router-view></router-view>区域 -->

    <transition>
      <router-view></router-view>
    </transition>
    <!-- tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon icon-gouwuche iconfont">
          <span class="mui-badge" id="badge">{{$store.getters.cartBadge}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import MyHeader from "./components/subcomponents/MyHeader";
export default {
  components: {
    "my-header": MyHeader
  }
};
</script>

<style scoped>
.app-container {
  overflow-x: hidden;
  padding-top: 40px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
  /* position: absolute; */
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

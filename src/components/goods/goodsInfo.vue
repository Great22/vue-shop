<template>
  <div class="goods-info">
    <!-- <h1>商品详情页面</h1> -->

    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <!--内容区-->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe style="height:200px;" :auto="4000">
            <mt-swipe-item v-for="(item,i) in 3" :key="i">
              <img :src="'../../../static/goodsListImgs/good-list-'+item+'.jpg'" alt />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">商品名称</div>
      <!--内容区-->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>¥2199</del>&nbsp;&nbsp;&nbsp;销售价:
            <span class="now">{{nowPrice}}</span>
          </p>
          <p class="buyCount">
            <span>购买数量:</span>
            <numbox @getcount="getSelectedCount"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="goCart(1)">加入购物车</mt-button>
          </p>
        </div>
      </div>
      <!--页脚，放置补充信息或支持的操作-->
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">商品参数</div>
      <!--内容区-->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：SF000001</p>
          <p>库存情况：1件</p>
          <p>商家时间：{{Date.now()|dateFormat}}</p>
        </div>
      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
        <mt-button type="primary" plain size="large" @click="goDesc(1)">图文介绍</mt-button>
        <mt-button type="danger" plain size="large" @click="goComment(1)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/NumBox";
export default {
  components: {
    "numbox": numbox
  },
  data() {
    return {
      ballFlag: false, //控制小球的显示和隐藏
      selectedCount: 1, //保存用户选中的商品数量，默认为1
      nowPrice: 1999
    };
  },
  methods: {
    getLunbo() {},
    goDesc(id) {
      this.$router.push({ name: "/home/goodsdesc/", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "/home/goodsComment/", params: { id } });
    },
    goCart(id) {
      //加入购物车函数
      this.ballFlag = !this.ballFlag;
      // {id:商品id,count:购买数量,price:价格，选中与否selected：boolean}
      const goodsInfo = {
        id: Math.floor((Math.random()*5)+1),
        count: this.selectedCount,
        price: this.nowPrice,
        selected: true
      };
      this.$store.commit("addToCart", goodsInfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.offsetWidth;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all .5s  cubic-bezier(.4,-0.3,1,0.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count) {
      this.selectedCount = parseInt(count);
     // console.log(count);
    }
  },
  //生命周期函数
  created() {}
};
</script>
<style lang="less" scoped>
.goods-info {
  //   min-height: 1000px;
  background: #eee;
  overflow: hidden;
  .ball {
    width: 15px;
    height: 15px;
    background: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 385px;
    left: 146px;
  }
  .mint-swipe {
    height: 250px;
    text-align: center;
  }
  .now {
    color: red;
    font-size: 16px;
    font-weight: bolder;
  }
  .buyCount {
    display: flex;
    height: 30px;
    line-height: 30px;
    // justify-content: space-around;
    span {
      margin-right: 15px;
    }
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>
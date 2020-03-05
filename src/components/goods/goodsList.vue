<template>
  <div class="goods-list">
    <div class="goods-item" @click="goNext(1)">
      <img src="../../../static/goodsListImgs/good-list-1.jpg" />
      <h1 class="title">荣耀20 PRO 李现同款 4800万全焦段AI四摄 双光学防抖 麒麟980 全网通4G</h1>

      <div class="info">
        <p class="price">
          <span class="now">¥2199</span>
          <span class="old">¥1099</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goNext(2)">
      <img src="../../../static/goodsListImgs/good-list-2.jpg" />
      <h1 class="title">华为 HUAWEI Mate 20 麒麟980AI智能芯片全面屏超微距影像超大广</h1>

      <div class="info">
        <p class="price">
          <span class="now">¥2199</span>
          <span class="old">¥1099</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goNext(3)">
      <img src="../../../static/goodsListImgs/good-list-3.jpg" alt />
      <h1 class="title">佳能（Canon）EOS 80D 单反相机 单反套机（EF-S 18-200mm f/3.5-</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥2199</span>
          <span class="old">¥1099</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goNext(4)">
      <img src="../../../static/goodsListImgs/good-list-4.jpg" />
      <h1 class="title">华硕（ASUS） 破晓7 英特尔酷睿 15.6英寸窄边框商务轻薄笔记本电脑 2G独显 银灰色 i5-8265U/8G/256G固态+1TB</h1>

      <div class="info">
        <p class="price">
          <span class="now">¥2199</span>
          <span class="old">¥1099</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },

  created() {},
  methods: {
    getGoodList() {},
    getMore() {
      Toast({
        message: "这里应该显示一些数据,然后加到商品列表里面",
        duration: 5000
      });
    },
    //编程式导航
    goNext(id) {
      this.$router.replace("/home/goodinfo/" + id);
    }
  }
};
</script>

<style lang="less" scoped>
.goods-list {
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ddd;
    box-shadow: 0 0 8px #ccc;
    padding: 2px;
    margin: 4px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
      line-height: 16px;
      // font-weight: bolder;
    }
    .info {
      background: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 15px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
<template>
  <div class="cart-list">
    <div class="goods-list">
      <div class="mui-card" v-for="(item) in goodList" :key="item.id">
        <!--内容区-->
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="item.selected" @change="selectedChange(item.id,item.selected)"></mt-switch>
            <img
              :src="'../../../static/goodsListImgs/good-list-'+item.id+'.jpg'"
              alt
            />

            <div class="info">
              <h1>华为 HUAWEI Mate 20</h1>
              <p>
                <span class="price">¥{{item.price}}</span>
                <cart-numbox class="box" :initcount="item.count" :goodsId="item.id"></cart-numbox>
                <mt-button type="danger" size="small" @click="remove(item.id)">删除</mt-button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card" v-show="goodList.length">
      <!--内容区-->
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>
              已勾选商品
              <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价
              <span class="red">{{$store.getters.getGoodsCountAndAmount.amount}}</span>元
            </p>
          </div>
          <div class="right">
            <mt-button type="danger" size="small">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartNumbox from "../subcomponents/cartNumbox";
export default {
  components: {
    "cart-numbox": cartNumbox
  },
  data() {
    return {
      goodList: []
    };
  },

  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //暂时没有online数据
      // this.$http.get("url").then(res => {
      //   //此处应该有操作
      // });
      if (this.$store.state.cart.length < 1) return;
      this.goodList = this.$store.state.cart;
      //console.log(this.goodList);
    },
    //删除操作的函数
    remove(id) {
      this.$store.commit("removeFromCart", id);
    },
    // 更改状态触发的函数
    selectedChange(id, val) {
      this.$store.commit("upDateGoodsSelected", { id, selected: val });
    }
  }
};
</script>

<style   lang="less" scoped>
.cart-list {
  // min-height:800px;
  background: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
      margin: 0 3px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        display: flex;
        align-items: center;
        .box {
          margin: 0 5px;
        }
        .price {
          color: red;
          font-weight: bolder;
        }
        .mint-button {
          margin-right: 5px;
        }
      }
    }
  }
  .jiesuan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .red {
      color: red;
      font-size: 16px;
      font-weight: bolder;
    }
  }
}
</style>
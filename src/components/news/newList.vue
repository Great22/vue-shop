<template>
  <div>
    <!-- <h3 v-show="!newList.legth" style="text-align:center;">今天免费次数又用完了</h3> -->
    <!-- <mt-button size="large" type="danger" plain>large</mt-button> -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.uniquekey">
        <router-link :to="'/home/newInfo/'+item.uniquekey">
          <img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.date}}</span>
              <span>点击：{{count}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <comment-box></comment-box> -->
  </div>
</template>

<script>
import comment from "../subcomponents/comment";
import { Toast, Indicator } from "mint-ui";
export default {
  components: {
    "comment-box": comment
  },
  data() {
    return {
      newList: [],
      type: "keji",
      count: 0,
      id: 13
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      //聚合数据每天请求最多100次，使用本地静态数据
      // Indicator.open();
      // Indicator.close();
      this.$http
        // .get(
        //   "/index?type=" + this.type + "&key=be329425fcc75207e29ad8329e2ad497"
        // )
        .get("../../../static/staticData/newList.json")
        .then(res => {
          // console.log(res);
          if (res.status == 200) {
            setTimeout(() => {
              this.newList = res.data.result.data;
            }, 3000);
          } else {
            Toast("获取新闻列表失败...");
          }
        });
    }
  }
};
</script>

<style  lang="less"  scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
      font-weight: 900;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
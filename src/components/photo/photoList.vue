<template>
  <div>
    <div id="silder" class="mui-slider">
      <div
        id="silder-item"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item mui-active">推荐</a>
          <a class="mui-control-item">社会</a>
          <a class="mui-control-item">热点</a>
          <a class="mui-control-item">财经</a>
          <a class="mui-control-item">体育</a>
          <a class="mui-control-item">科技</a>
        </div>
      </div>
    </div>
    <!-- 图片区域 -->
    <ul class="photo-list">
      <router-link v-for="item in photoLists" :key="item.id"  :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.albums[0]" />
        <div class="info">
          <h1 class="info-title">{{item.burden.replace(/适量;/g,",")}}</h1>
          <div class="info-body">{{item.imtro.slice(0,60)}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// import mui from "../../assets/mui/js/mui.js";

export default {
  data() {
    return {
      photoLists: []
    };
  },

  created() {
    this.getPhotoLists();
  },
  mounted() {},
  methods: {
    getPhotoLists() {
      this.$http.get("../../../static/staticData/foodImage.json").then(res => {
        if (res.status === 200) {
          this.photoLists = res.data.result.data;
          // console.log(this.photoLists);
        }
      });
    }
  }
};
</script>


<style lang="less"scoped>
* {
  -webkit-touct-action: pan-y;
}
.photo-list {
  padding: 0;
  margin: 10px;
  padding-bottom: 0;
  li{
    background: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 6px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: #fff;
      text-align: left;
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      padding: 0 5px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
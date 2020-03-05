<template>
  <div class="photo-info">
    <h3>{{title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{dateTime|dateFormat}}</span>
      <span>点击:3次</span>
    </p>
    <hr />
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <img class="preview-img" :src="item.srcImg" v-for="(item,index) in list" :key="index" />
      <!-- <vue-preview :slides="list" @close="handleClose"></vue-preview> -->
    </div>
    <!-- 图片内容区域 -->
    <div class="content">{{content}}</div>
    <!-- 评论区域 -->
    <comment-box></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment";
export default {
  components: {
    "comment-box": comment
  },
  data() {
    return {
      id: this.$route.params.id,
      list: [],
      title: "",
      dateTime: null,
      content: ""
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
    handleClose() {
      console.log("close event");
    },
    getPhotoInfo() {
      this.$http.get("../../../static/staticData/foodImage.json").then(res => {
        if (res.status === 200) {
          res.data.result.data.forEach(item => {
            if (item.id == this.id) {
              //   console.log(item);
              this.title = item.title;
              this.dateTime = Date.now();
              this.content = item.imtro;
              this.list = item.steps.map(item => {
                return {
                  w: 600,
                  h: 400,
                  srcImg: item.img
                };
              });
              //   console.log(this.list);
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.photo-info {
  padding: 3px;
  h3 {
    font-size: 18px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .thumbs {
    img {
      margin: 10px;
      width: 100px;
      height: 100px;
      box-shadow: 0 0 8px #999;
    }
  }
  .subtitle {
    font-size: 13px;
    display: flex;
    color: #226aff;
    justify-content: space-between;
  }
  .content {
    line-height: 30px;
    font-size: 13px;
  }
}
</style>
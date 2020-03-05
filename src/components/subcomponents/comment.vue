<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要BB 的内容(最多吐槽120个字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <p v-if="noComments">{{commentsMsg}}</p>
      <!-- {{commentsList}} -->
      <div class="cmt-box" v-show="!noComments">
        <div class="cmt-item" v-for="(item,i) in commentsList" :key="i">
          <div class="cmt-title">
            <span>第{{i+1}}楼</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>用户:{{item.user_name}}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>发表时间:{{item.add_time | dateFormat}}</span>
          </div>
          <div class="cmt-body">{{item.content}}</div>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>


<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      msg: "",
      commentsMsg: "还没有人评论呦！",
      noComments: false,
      commentsList: []
    };
  },

  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      const comments = localStorage.getItem("cmt") || {};
      // console.log(comments)
      if (comments.length < 1) {
        this.noComments = true;
      }
      this.commentsList.unshift(JSON.parse(comments));
      // console.log(this.commentsList);
    },
    getMore() {
      //加载更多评论
    },
    postComment() {
      //发表评论

      if (this.msg.trim().length == 0) {
        return Toast("评论内容不能为空");
      }
      const cmt = {
        user_name: "匿名用户",
        add_time: Date.now(),
        content: this.msg.trim()
      };
      localStorage.setItem("cmt", JSON.stringify(cmt));
      this.msg = "";
      this.getComments();
    }
  }
};
</script>


<style lang="less"  scoped>
.cmt-container {
  padding: 2px;
  height: 1000px;
  h3 {
    font-size: 18px;
  }

  textarea {
    width: 100%;
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    .cmt-item {
      margin: 5px 0;
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
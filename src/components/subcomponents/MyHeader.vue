<template>
  <div>
    <mt-header fixed title="哈哈商城">
      <span @click="goBack" slot="left" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },

  mounted() {
    // console.log(this.$router.history);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.flag = this.$route.path == "/home" ? false : true;
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal == "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>
<style lang="less"  scoped>
</style>
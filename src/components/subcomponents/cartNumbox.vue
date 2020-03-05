<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="99" style="height:35px;">
      <button class="mui-btn mui-numbox-btn-minus" type="button" disabled>-</button>
      <input
        class="mui-numbox-input"
        type="number"
        :value="initcount"
        ref="numbox"
        @change="countChanged"
      />
      <button class="mui-btn mui-numbox-btn-plus" type="button" disabled>+</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1
    };
  },
  props: ["initcount", "goodsId"],
  mounted() {
    //初始化数字选择框组件
  },
  methods: {
    countChanged() {
      // console.log(this.$refs.numbox.value);
      this.$store.commit("upDateGoodsInfo", {
        id: this.goodsId,
        count: this.$refs.numbox.value
      });
    }
  }
};
</script>
<style lang="less"  scoped>
</style>
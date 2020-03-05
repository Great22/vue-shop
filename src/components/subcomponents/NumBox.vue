<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="99">
      <button class="mui-btn mui-numbox-btn-minus" type="button" disabled >-</button>
      <input
        class="mui-numbox-input"
        type="number"
        :value="count"
        @change="countChanged"
        ref="numbox"
      />
      <button class="mui-btn mui-numbox-btn-plus" type="button" disabled>+</button>
    </div>
  </div>
</template>
<script>
// import mui from "../../assets/mui/js/mui";
export default {
  data() {
    return {
      count: 1
    };
  },
  mounted() {
    //初始化数字选择框组件
  },
  methods: {
    countChanged() {
      this.count = this.$refs.numbox.value;
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  watch: {
    count: function(newValue, oldValue) {
      //console.log(newValue);
    }
  }
};
</script>
<style lang="less"  scoped>
</style>
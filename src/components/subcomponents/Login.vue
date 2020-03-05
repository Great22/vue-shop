<template>
  <div class="login">
    <mt-field :state="phoneNumState" type="number" v-model="phoneNum" placeholder="请输入您的手机号"></mt-field>
    <mt-field placeholder="验证码" type="number" v-model="code" :state="codeState">
      <!-- <span @click.stop="sendCode">{{ codeStr }}</span> -->
    </mt-field>
    <mt-field :state="passwordState" type="password" v-model="password" placeholder="密码:不能少于6位"></mt-field>
    <mt-button type="primary" size="large" @click="register">注册</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      phoneNum: 18292039437,
      code: "AJQK",
      password: "sf7758521",
      phoneNumState: "",
      codeState: "",
      passwordState: "",
      codeStr: "ASDF"
    };
  },
  wtach: {
    phoneNum(newVal, oldVa) {
      if (tools.isPhoneAvailable(newVal, oldVa)) {
        this.phoneNumState = "success";
      } else {
        this.phoneNumState = "error";
      }
    },
    password(newVal, oldVa) {
      if (newVal.length >= 6) {
        this.passwordState = "success";
      } else {
        this.passwordState = "error";
      }

      if (newVal == "") {
        // 如果输入为空，取消状态显示

        this.passwordState = "";
      }
    },
    code(newVal, oldVal) {
      if (newVal.length == 4 && newVal == this.admincode) {
        this.codeState = "success";
      } else {
        this.codeState = "error";
      }

      if (newVal == "") {
        // 如果输入为空，取消状态显示

        this.codeState = "";
      }
    }
  },
  methods: {
    register() {
      if (this.phoneNumState != "success") {
        Toast("请确保手机号是正确的");
        return;
      }

      if (this.codeState != "success") {
        Toast("请确保验证码的正确性");
        return;
      }

      if (this.passwordState != "success") {
        Toast("请确保密码是有效的");
        return;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.logn {
  padding-top: 10px;
}
</style>
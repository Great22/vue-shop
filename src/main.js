// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import MintUi from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUi)
Vue.config.productionTip = false;
import axios from 'axios'

import less from "less"

Vue.use(less)
// axios默认配置
// axios.defaults.timeout = 10000;   // 超时时间
// axios.defaults.baseURL = apiURL;  // 默认地址

Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'  //关键代码
//导入mui.js
// import mui from "./assets/mui/js/mui.js"
// Vue.prototype.$mui = mui
// 导入时间格式化插件
import moment from "moment"
Vue.use(moment)
//时间过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  // const dt = new Date(dataStr)
  // const year = dt.getFullYear()
  // const month = (dt.getMonth() + 1 + "").padStart(2, "0")
  // const day = (dt.getDate() + "").padStart(2, "0")
  // const hour = (dt.getHours() + "").padStart(2, "0")
  // const minutes = (dt.getMinutes() + "").padStart(2, "0")
  // const second = (dt.getSeconds() + "").padStart(2, "0")

  // return `${year}-${month}-${day} ${hour}:${minutes}:${second}`

  return moment(dataStr).format(pattern)
});


import vuePreview from "vue-preview"
Vue.use(vuePreview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

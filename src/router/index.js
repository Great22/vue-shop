import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/tabbar/HomeContainer"
import Contact from "../components/tabbar/ContactContainer"
import Search from "../components/tabbar/SearchContainer"
import Cart from "../components/tabbar/CartContainer"
//主页新闻下  的组件
import NewList from "../components/news/newList"
import NewInfo from "../components/news/newInfo"
// 主页图片下的组件
import PhotoList from "../components/photo/photoList"
import PhotoInfo from "../components/photo/photoInfo"
//商品列表下的组件
import GoodsList from "../components/goods/goodsList"
import GoodsInfo from "../components/goods/goodsInfo"
import GoodsDesc from "../components/goods/goodsDesc"
import GoodsComment from "../components/goods/goodsComment"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: Home,
    }, {
      path: "/cart",
      component: Cart
    }, {
      path: "/contact",
      component: Contact
    }, {
      path: "/search",
      component: Search
    }, {
      path: "/home/newlist",
      component: NewList
    }, {
      path: "/home/newInfo/:id",
      component: NewInfo
    }, {
      path: "/home/photolist",
      component: PhotoList
    }, {
      path: "/home/photoinfo/:id",
      component: PhotoInfo
    }, {
      path: "/home/goodslist",
      component: GoodsList
    }, {
      path: "/home/goodinfo/:id",
      component: GoodsInfo
    }, {
      path: "/home/goodsDesc/:id",
      name: "/home/goodsdesc/",
      component: GoodsDesc
    }, {
      path: "/home/goodsComment/:id",
      name: "/home/goodsComment/",
      component: GoodsComment
    },
    { path: "/", redirect: "/home" }

  ],
  linkActiveClass: "mui-active"//覆盖默认的路由高亮的lei，默认的类叫router-link-active
})
//this.$route 是一个参数对象
//this.#router 是一个路由对象
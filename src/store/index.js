import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
var cart = JSON.parse(localStorage.getItem("cart")) || "[]"
export default new Vuex.Store({
    state: {
        //类似于data来存储数据
        cart: cart//将购物车里面的数据，用一个对象存储起来，
        //数组中存储的数据包含了商品的一些属性{id:商品id,count:购买数量,price:价格，选中与否selected：boolean}
    },
    mutations: {
        //类似于methods
        addToCart(state, goodsInfo) {
            //把商品信息保存到cart里面若此前已经存在此商品，只更新数量
            //先假设没有找到
            let flag = false;
            state.cart.some(item => {
                if (item.id === goodsInfo.id) {
                    item.count += parseInt(goodsInfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.cart.push(goodsInfo)
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        upDateGoodsInfo(state, info) {
            state.cart.some(item => {
                if (item.id === info.id) {
                    item.count = parseInt(info.count)
                    return true;
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        removeFromCart(state, id) {
            // 根据id删除数据
            state.cart.some((item, i) => {
                if (item.id == id) {
                    state.cart.splice(i, 1)
                    return true;
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        upDateGoodsSelected(state, info) {
            state.cart.some(item => {
                if (item.id === info.id) {
                    item.selected = info.selected;
                    // return true;
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.cart))
        }
    }
    , getters: {
        //类似于计算属性
        cartBadge(state) {
            let count = 0;
            state.cart.forEach(item => {
                count += item.count
            })
            return count;
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,//勾选的总数
                amount: 0//勾选的总价
            }
            state.cart.forEach(item => {
                if (item.selected) {
                    o.count += parseInt(item.count);
                    o.amount += parseInt(item.count) * parseInt(item.price)
                }
            })
            return o;
        }
    }
})
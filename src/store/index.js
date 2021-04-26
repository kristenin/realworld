/**
 * Vuex是Vue中的一个核心插件
 * 作用：管理共享状态，集中式状态管理容器
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * 全局共享的状态，类似于组件中的data
   */
  state: {
    // user:null
    user:JSON.parse(window.localStorage.getItem("user"))
  },
  /**
   * Vuex的使用规则：使用mutaitions来修改state状态
   * mutation都是函数，函数接收的第1个参数是state对象，其他的都是参数
   */
  mutations: {
    setUser(state,user){
      state.user = user
      //对数据进行持久化保存，使用本地存储
      //注意：本地存储只能存储字符串，所以需要用JSON.stringify方法将对象转为字符串
      window.localStorage.setItem('user',JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

let vuexAlreadyInitialized = ((<any>Vue).options.beforeCreate || []).reduce(
    (result: boolean, fn: any) => fn.name === 'vuexInit' || result, false
)

if (! vuexAlreadyInitialized) Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});
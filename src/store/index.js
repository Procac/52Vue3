import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    one:"",
    fist:[],
    test:""
  },
  mutations: {
    First(state,one){
      state.one=one;
    },
    Three(state,fist){
      state.fist.push(fist);
    },
    post(state,test){
      state.test=test;
    }
  },
  actions: {
  },
  modules: {
  }
})

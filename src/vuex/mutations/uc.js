import Vuex from 'vuex'
import Vue from 'vue'

import {
  GET_USER,
  GET_LIST
} from '../types/uc'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    [GET_USER] (state, { data }) {
      console.log(data)
    },
    [GET_LIST] (state, { datas }) {
      datas.forEach(data => {
        state.list.push(data)
        // console.log('======')
        // console.log(state.list)
        // console.log('======')
      })
    }
  }
})

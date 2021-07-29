import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { extractFruitFromDataset } from '@/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: null,
    fruitCount: null
  },
  mutations: {
    storeFruits (state, fruitList) {
      state.fruits = extractFruitFromDataset(fruitList)
      state.fruitCount = fruitList.fruitCount
    }
  },
  actions: {
    loadFruits ({ commit, state }) {
      if (state.fruits === null) {
        axios.get('http://localhost:3000/fruit')
          .then(response => commit('storeFruits', response.data.data))
      }
    }
  },
  modules: {
  }
})

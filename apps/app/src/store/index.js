import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { extractFruitFromDataset } from '@/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: null,
    loadingFruits: false
  },
  mutations: {
    finishLoadingFruits (state) {
      state.loadingFruits = false
    },
    startLoadingFruits (state) {
      state.loadingFruits = true
    },
    storeFruits (state, fruitList) {
      state.fruits = extractFruitFromDataset(fruitList)
    }
  },
  actions: {
    loadFruits ({ commit, state }) {
      commit('startLoadingFruits')
      axios.get('http://localhost:3000/fruit')
        .then(response => commit('storeFruits', response.data.data))
        .then(() => commit('finishLoadingFruits'))
    },
    removeFruit ({ dispatch, state }, id) {
      return new Promise((resolve, reject) => {
        if (confirm('You are goint to remove the fruit ' + id + '. Are you sure?')) {
          axios.delete(`http://localhost:3000/fruit/${id}`)
            .then(() => resolve())
        }

        return false
      })
    },
    storeFruit ({ commit, state }, data) {
      return axios.post('http://localhost:3000/fruit', data)
    }
  },
  modules: {
  }
})

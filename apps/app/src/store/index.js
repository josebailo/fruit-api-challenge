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
      axios.get('http://localhost:3000/fruit')
        .then(response => commit('storeFruits', response.data.data))
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

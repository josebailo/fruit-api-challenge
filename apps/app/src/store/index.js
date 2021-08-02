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
  getters: {
    getFruits: state => state.fruits,
    getFruitById: (state, getters) => id => {
      return getters.getFruits && getters.getFruits.length
        ? state.fruits.find(fruit => parseInt(fruit.id) === parseInt(id))
        : null
    },
    fruitIsBeingLoaded: state => state.loadingFruits
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
      return axios.delete(`http://localhost:3000/fruit/${id}`)
    },
    storeFruit ({ commit, state }, data) {
      return axios.post('http://localhost:3000/fruit', data)
    }
  },
  modules: {
  }
})

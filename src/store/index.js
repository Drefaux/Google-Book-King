import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

import moduleBookChosen from './bookChosen'

export default new Vuex.Store({
  state: {
    books:[]
  },
  getters: {
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books
    }
  },
  actions: {
    getBooks({commit}) {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:"Stephen+King"&key=AIzaSyBELf7aWJmgECK8XccZA6i8CnIT_rOxWVo'+'&maxResults=40')
      .then(response => {
        commit('SET_BOOKS', response.data)
      })
    }
  },
  modules: {
    bookChosen: moduleBookChosen
  }
})

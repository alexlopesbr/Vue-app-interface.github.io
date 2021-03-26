import { createStore } from 'vuex'

export default createStore({
  state: {
    price: 0,
    sortOf: ''
  },
  mutations: {
    changePrice(state, payload){
      state.price = payload.split(' ')
    },
    changeSort(state, payload){
      state.sortOf = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

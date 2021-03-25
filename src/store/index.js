import { createStore } from 'vuex'

export default createStore({
  state: {
    price: 0
  },
  mutations: {
    changePrice(state, payload){
      state.price = payload.split(' ')
    }
  },
  actions: {
  },
  modules: {
  }
})

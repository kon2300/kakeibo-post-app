import { createStore } from 'vuex'

export default createStore({
  state: {
    SUmodalIsActive: false,
    SImodalIsActive: false
  },
  mutations: {
    changeSUmodalState:(state) => {
      state.SUmodalIsActive = !state.SUmodalIsActive
    },
    changeSImodalState:(state) => {
      state.SImodalIsActive = !state.SImodalIsActive
    }
  },
  getters: {
    getSUmodalState: (state) => state.SUmodalIsActive,
    getSImodalState: (state) => state.SImodalIsActive
  },
  actions: {
  },
  modules: {
  }
})

export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add(state,province) {
      state.list.push(province)
    },
    emptyList(state) {
      state.list = []
    }
  }
  
  export const getters = {
    list: state => {
      return state.list
    }
  }
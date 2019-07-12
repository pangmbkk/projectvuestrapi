export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add(state,educationlevel) {
      state.list.push(educationlevel)
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
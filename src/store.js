import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Aquí me quedé
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getTasks (){
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      return tasks
    }
  }
})

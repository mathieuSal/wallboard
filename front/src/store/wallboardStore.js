import Vue from 'vue'
import Vuex from 'vuex'
import TodoStore from '../components/widgets/toDoWidget/store/todoStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TodoStore
  }
})

global.store = store // to access it from browser's console
export default store

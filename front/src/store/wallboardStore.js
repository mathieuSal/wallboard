import Vue from 'vue'
import Vuex from 'vuex'
import TodoStore from '../components/widgets/toDoWidget/store/todoStore'
import BookmarkStore from '../components/widgets/bookmarkWidget/store/bookmarkStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TodoStore,
    BookmarkStore
  }
})

global.store = store // to access it from browser's console
export default store

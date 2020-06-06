const storage = 'ms-wallboard-todoList'

const state = {
  newTodo: '',
  todos: [{
    id: 1,
    name: 'tache de test',
    completed: false
  }]
}

const getters = {
  newTodo: state => state.newTodo,
  todos: state => state.todos
}

const mutations = {
  TODO_FETCH_LIST (state, todos) {
    state.todos = [...todos]
  },
  UPDATE_NEW_TODO (state, value) {
    state.newTodo = value
  },
  TODO_ADD_TODO (state, name) {
    state.todos = [...state.todos, {name, completed: false, id: ++state.todos.length}]
  },
  TODO_CHECK_TODO (state, id) {
    state.todos = state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    })
  }
}

const actions = {
  persist (store) {
    localStorage.setItem(storage, JSON.stringify(state.todos))
  },
  fetchData: (store) => {
    const historic = localStorage.getItem(storage)
    store.commit('TODO_FETCH_LIST', historic !== null ? JSON.parse(historic) : [])
  },
  updateNewTodo: (store, e) => {
    store.commit('UPDATE_NEW_TODO', e.target.value)
  },
  addTodo: (store, actionName) => {
    store.commit('TODO_ADD_TODO', actionName)
    store.commit('UPDATE_NEW_TODO', '')
    actions.persist()
  },
  checkTodo: (store, todoId) => {
    store.commit('TODO_CHECK_TODO', todoId)
    actions.persist()
  }
}

const TodoStore = {
  state,
  mutations,
  getters,
  actions,
  strict: true
}

export default TodoStore

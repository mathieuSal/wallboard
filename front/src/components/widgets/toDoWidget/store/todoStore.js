import {fetchTodosData, postNewTodo, updateTodo, deleteTodo} from '../api/todoApi'

const state = {
  newTodo: '',
  editing: null,
  todos: []
}

const getters = {
  newTodo: state => state.newTodo,
  editing: state => state.editing,
  todos: state => state.todos,
  remainingTodos: state => state.todos.filter(todo => !todo.completed),
  completedTodos: state => state.todos.filter(todo => todo.completed),
  remainingTodosCount: state => getters.remainingTodos(state).length,
  completedTodosCount: state => getters.completedTodos(state).length
}

const mutations = {
  TODO_FETCH_LIST (state, todos) {
    state.todos = [...todos]
  },
  UPDATE_NEW_TODO (state, value) {
    state.newTodo = value
  },
  UPDATE_EDITING_TODO (state, todo) {
    state.editing = todo
  },
  TODO_EDIT_TODO (state, todoEdited) {
    state.todos = state.todos.map(todo => {
      if (todo.id === todoEdited.id) {
        return todoEdited
      }
      return todo
    })
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
  },
  TODO_DELETE_TODO (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  TODO_DELETE_ALL_COMPLETED (state) {
    state.todos = state.todos.filter(todo => !todo.completed)
  }
}

const actions = {
  fetchData: (store) => fetchTodosData().then(todos => store.commit('TODO_FETCH_LIST', todos)),
  updateNewTodo: (store, e) => {
    store.commit('UPDATE_NEW_TODO', e.target.value)
  },
  addTodo: (store, actionName) => {
    const todo = {
      name: actionName,
      completed: false
    }
    postNewTodo(todo).then(() => {
      actions.fetchData(store)
      store.commit('UPDATE_NEW_TODO', '')
    })
  },
  editingTodo (store, todo) {
    store.commit('UPDATE_EDITING_TODO', todo)
  },
  updateEditingTodo (store, e) {
    store.commit('UPDATE_EDITING_TODO', {...state.editing, name: e.target.value})
  },
  editTodo: (store, todo) => {
    updateTodo(todo.id, todo)
      .then(() => {
        actions.fetchData(store)
        store.commit('UPDATE_EDITING_TODO', null)
      })
  },
  checkTodo: (store, todo) => {
    updateTodo(todo.id, {...todo, completed: !todo.completed})
      .then(() => actions.fetchData(store))
  },
  deleteTodos: (store, todoId) => {
    deleteTodo(todoId).then(() => actions.fetchData(store))
  },
  deleteAllCompleted: (store) => {
    const promises = []
    getters.completedTodos(state).map(todo => {
      promises.push(deleteTodo(todo.id))
    })
    Promise
      .all(promises)
      .then(() => {
        actions.fetchData(store)
      })
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

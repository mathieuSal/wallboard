import axios from 'axios'
import {hashCode} from '../../../../utils/wallboardUtils'

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
  TODO_ADD_TODO (state, name) {
    const date = new Date()
    state.todos = [...state.todos, {name, completed: false, id: hashCode(date.toString())}]
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
  fetchData: (store) => {
    axios
      .get('https://localhost:8443/todos')
      .then(todos =>
        store.commit('TODO_FETCH_LIST', todos.data['hydra:member'])
      )
  },
  updateNewTodo: (store, e) => {
    store.commit('UPDATE_NEW_TODO', e.target.value)
  },
  addTodo: (store, actionName) => {
    store.commit('TODO_ADD_TODO', actionName)
    store.commit('UPDATE_NEW_TODO', '')
    // post new todo here
  },
  editingTodo (store, todo) {
    store.commit('UPDATE_EDITING_TODO', todo)
  },
  updateEditingTodo (store, e) {
    store.commit('UPDATE_EDITING_TODO', {...state.editing, name: e.target.value})
  },
  editTodo: (store, todo) => {
    store.commit('TODO_EDIT_TODO', todo)
    // put the edited todo here
    store.commit('UPDATE_EDITING_TODO', null)
  },
  checkTodo: (store, todoId) => {
    store.commit('TODO_CHECK_TODO', todoId)
    // put the edited todo here
  },
  deleteTodos: (store, todoId) => {
    store.commit('TODO_DELETE_TODO', todoId)
    // delete todo here
  },
  deleteAllCompleted: (store) => {
    store.commit('TODO_DELETE_ALL_COMPLETED')
    // add an endpoint to delete all completed todos
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
